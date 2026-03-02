/* =====================================================================
   Cyber-Puzzle front-end script
   =====================================================================*/

const WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbzOVAlalrmQd2wL6sj9_C9dU3-0CkWJCVaCVRs63HyCwIL8XafjA7CmWTH5Y-wYYrY/exec";

/* ==================== ASCII helpers ==================== */
function renderAsciiAsImage(text) {
  const c = document.createElement("canvas");
  const ctx = c.getContext("2d");
  const font = "14px 'Courier New', monospace";
  ctx.font = font;
  const lines = text.split("\n");
  const h = 14 * 1.3;
  c.width = Math.max(...lines.map(l => ctx.measureText(l).width)) + 10;
  c.height = h * lines.length + 10;
  ctx.fillStyle = "#1a1a1a";
  ctx.fillRect(0, 0, c.width, c.height);
  ctx.fillStyle = "#39FF14";
  ctx.font = font;
  lines.forEach((l, i) => ctx.fillText(l, 5, h * (i + 1)));
  return c.toDataURL();
}
function processPuzzleText(t = "", mobile) {
  if (!t.includes("[[ASCII]]"))
    return `<div class="puzzle-text" style="white-space:pre-wrap;">${t}</div>`;
  let out = "",
    last = 0,
    m;
  const rx = /\[\[ASCII\]\]([\s\S]*?)\[\[\/ASCII\]\]/g;
  while ((m = rx.exec(t))) {
    out +=
      `<div class="puzzle-text" style="white-space:pre-wrap;">` +
      t.slice(last, m.index) +
      "</div>";
    out += mobile
      ? `<img src="${renderAsciiAsImage(
          m[1]
        )}" class="puzzle-img" style="max-width:100%;display:block;">`
      : `<pre class="ascii-art" style="white-space:pre;">${m[1]}</pre>`;
    last = rx.lastIndex;
  }
  out +=
    `<div class="puzzle-text" style="white-space:pre-wrap;">` +
    t.slice(last) +
    "</div>";
  return out;
}

/* ==================== Google-sheet logging ==================== */
function logAnswerToSheet(puzzleDate, userAnswer) {
  fetch(WEB_APP_URL, {
    method: "POST",
    mode: "no-cors",
    body: new URLSearchParams({
      date: new Date().toISOString(),
      puzzle: puzzleDate,
      response: userAnswer
    })
  });
}

/* ==================== XP helpers ==================== */
const getXP = () => Number(localStorage.getItem("xp")) || 0;
const updateXPDisplay = () => {
  const el = document.getElementById("xp-overlay");
  if (el) el.textContent = `XP: ${getXP()}`;
};
const addXP = n => {
  localStorage.setItem("xp", getXP() + n);
  updateXPDisplay();
};
const resetXP = () => {
  localStorage.setItem("xp", "0");
  updateXPDisplay();
};
const startXPTimer = () =>
  setInterval(() => {
    if (getXP() > 0) {
      localStorage.setItem("xp", Math.max(0, getXP() - 1));
      updateXPDisplay();
    }
  }, 60000);

/* ==================== Leaderboard ==================== */
function submitLeaderboard(name, xp) {
  fetch(WEB_APP_URL, {
    method: "POST",
    mode: "no-cors",
    body: new URLSearchParams({
      date: new Date().toISOString(),
      name,
      xp
    })
  });
}
function loadLeaderboard() {
  fetch(`${WEB_APP_URL}?action=leaderboard`, { cache: "no-store" })
    .then(r => r.json())
    .then(rows => {
      const top = rows
        .map(r => ({ ...r, xp: Number(r.xp) || 0 }))
        .sort((a, b) => b.xp - a.xp)
        .slice(0, 10);

      const nice = d => new Date(d)
        .toLocaleString(undefined, { day: "2-digit", month: "short",
                                     year: "numeric", hour: "2-digit",
                                     minute: "2-digit" });

      let html = `<table class="leaderboard-table">
        <tr><th>Rank</th><th>Name</th><th>XP</th><th>Date</th></tr>`;
      top.forEach((r, i) =>
        html += `<tr><td>${i + 1}</td><td>${r.name}</td><td>${r.xp}</td><td>${nice(r.date)}</td></tr>`);
      html += `</table>`;
      document.getElementById("leaderboard-table").innerHTML = html;
    })
    .catch(e => console.error("Leaderboard fetch failed:", e));
}

function displayLeaderboardForm() {
  if (document.getElementById("leaderboard-form")) return;

  const div = document.createElement("div");
  div.id = "leaderboard-form";
  div.className = "leaderboard-block puzzle-frame";
  div.style.marginTop = "20px";
  div.innerHTML = `
    <h3>Cash In Your XP!</h3>
    <p style="margin-bottom:8px;">Enter your name to submit your XP:</p>
    <input id="leaderboard-name" style="width:200px;padding:5px;" placeholder="Your name">
    <button id="leaderboard-submit" style="padding:5px 10px;margin-left:10px;">Submit</button>
    <div id="leaderboard-table" style="margin-top:20px;"></div>`;
  (document.getElementById("puzzle-container")?.parentElement ||
    document.body).appendChild(div);

  document
    .getElementById("leaderboard-submit")
    .addEventListener("click", () => {
      const name = document.getElementById("leaderboard-name").value.trim();
      if (name && getXP() > 0) {
        submitLeaderboard(name, getXP());
        resetXP();
        alert("Leaderboard entry submitted! Your XP has been reset.");
        loadLeaderboard();
      } else {
        alert("Please enter your name and make sure you have XP.");
      }
    });
}

/* ==================== Cookie banner ==================== */
const setCookie = (n, v, d) => {
  const t = new Date();
  t.setTime(t.getTime() + d * 864e5);
  document.cookie = `${n}=${v};expires=${t.toUTCString()};path=/`;
};
const getCookie = n =>
  document.cookie
    .split(";")
    .map(c => c.trim())
    .find(c => c.startsWith(n + "="))
    ?.split("=")[1] || "";
function checkCookieConsent() {
  const b = document.getElementById("cookie-banner");
  b.style.display = getCookie("cookieConsent") ? "none" : "block";
}

/* ==================== Puzzle list & loader ==================== */
function renderPuzzles(manifest, container, newestFirst) {
  container.classList.add("fade-out");
  setTimeout(() => {
    container.innerHTML = "";

    manifest
      .slice()
      .sort((a, b) =>
        newestFirst
          ? new Date(b.replace(".json", "")) - new Date(a.replace(".json", ""))
          : new Date(a.replace(".json", "")) - new Date(b.replace(".json", ""))
      )
      .forEach(f => {
        const id  = f.replace(".json", "");
        const div = document.createElement("div");
        div.className       = "puzzle-block";
        div.dataset.filename = f;
        div.id               = id;
        div.innerHTML        = `<p>Loading puzzle ${f}…</p>`;
        container.appendChild(div);
      });

    container.classList.remove("fade-out");

    /* --------------- lazy-load observer ---------------- */
    const io = new IntersectionObserver(
      es => {
        es.forEach(e => {
          if (!e.isIntersecting) return;

          /* SKIP if this element is already a finished frame
             (prevents re-loading leaderboard block, etc.) */
          if (e.target.classList.contains("puzzle-frame")) {
            io.unobserve(e.target);
            return;
          }

          const f = e.target.dataset.filename;
          if (f) loadPuzzle(f, e.target);
          io.unobserve(e.target);
        });
      },
      { rootMargin: "0px 0px 200px 0px" }
    );

    document.querySelectorAll(".puzzle-block").forEach(b => io.observe(b));
  }, 300);
}


async function loadPuzzle(fname, block) {
  try {
    const r = await fetch("puzzles/" + fname, { cache: "no-store" });
    if (!r.ok) throw new Error("Puzzle missing");
    const p = await r.json();

    const dateID = fname.replace(".json", "");
    const title = p.title || `Puzzle for ${dateID}`;
    const bounty = p.xp_bounty || 10;

    /* ---- crossword ---- */
    if (p.puzzleType === "crossword" && p.crosswordURL) {
      block.innerHTML = `
        <div class="puzzle-title">${title}</div>
        <div style="white-space:pre-wrap;">${p.puzzleText ?? ""}</div>
        <iframe src="${p.crosswordURL}" width="100%" height="400" frameborder="0"></iframe>
        <form class="answer-form">
          <input class="answer-input" placeholder="Enter final passphrase">
          <button class="answer-button">Submit</button>
        </form>
        <div class="feedback"></div>`;
      wireSimpleForm(block, p.correctAnswer, bounty, dateID);
      return;
    }

    /* ---- multi-input ---- */
    if (p.puzzleType === "multi-input" && Array.isArray(p.correctAnswers)) {
      const prompts = Array.isArray(p.inputPrompts)
        ? p.inputPrompts
        : p.correctAnswers.map((_, i) => `Answer ${i + 1}`);
      let fields = "";
      p.correctAnswers.forEach((ans, i) => {
        fields += `
          <div style="margin-bottom:1em;display:flex;align-items:center;white-space:nowrap;">
            <label style="font-weight:bold;margin-right:10px;">${prompts[i]}:</label>
            <input class="answer-input-multi" maxlength="${ans.length}"
                   placeholder="${prompts[i]}" style="width:200px;">
            <span class="input-checkmark" style="display:none;margin-left:8px;color:#39FF14;font-size:1.4em;">✔</span>
          </div>`;
      });

      block.innerHTML = `
        <div class="puzzle-title">${title}</div>
        ${processPuzzleText(p.puzzleText ?? "", matchMedia("(max-width:600px)").matches)}
        ${
          p.hint
            ? `<div class="hint-container"><button class="hint-toggle">Show clue</button>
               <div class="hint-content" style="display:none;">${p.hint}</div></div>`
            : ""
        }
        <form class="answer-form multi-input-form">${fields}
          <button class="answer-button">Submit</button>
        </form>
        <div class="feedback"></div>`;

      block.querySelectorAll(".answer-input-multi").forEach((inp, i) => {
        inp.addEventListener("input", () => {
          const tick = inp.parentElement.querySelector(".input-checkmark");
          tick.style.display =
            inp.value.trim().toLowerCase() ===
            p.correctAnswers[i].toLowerCase()
              ? "inline"
              : "none";
        });
      });

      block.querySelector(".answer-form").addEventListener("submit", e => {
        e.preventDefault();
        if (e.target.dataset.solved === "true") return;
        const answers = [...block.querySelectorAll(".answer-input-multi")].map(
          x => x.value.trim().toLowerCase()
        );
        const good = answers.every(
          (a, i) => a === p.correctAnswers[i].toLowerCase()
        );
        const fb = block.querySelector(".feedback");
        if (good) {
          fb.textContent = "Correct! You've cracked the code.";
          fb.style.color = "#39FF14";
          addXP(bounty);
          e.target.dataset.solved = "true";
        } else {
          fb.textContent = "Incorrect. Try again!";
          fb.style.color = "#FF6EC7";
        }
        logAnswerToSheet(dateID, answers.join(" "));
      });

      block.querySelector(".hint-toggle")?.addEventListener("click", ev => {
        const cont = block.querySelector(".hint-content");
        const show = cont.style.display === "none";
        cont.style.display = show ? "block" : "none";
        ev.target.textContent = show ? "Hide clue" : "Show clue";
      });
      return;
    }

    /* ---- plain single-input ---- */
    block.innerHTML = `
      <div class="puzzle-title">${title}</div>
      ${processPuzzleText(
        p.puzzleText ?? "",
        matchMedia("(max-width:600px)").matches
      )}
      ${
        p.hint
          ? `<div class="hint-container"><button class="hint-toggle">Show clue</button>
             <div class="hint-content" style="display:none;">${p.hint}</div></div>`
          : ""
      }
      <form class="answer-form">
        <input class="answer-input" placeholder="Enter answer">
        <button class="answer-button">Submit</button>
      </form>
      <div class="feedback"></div>`;
    wireSimpleForm(block, p.correctAnswer, bounty, dateID);
  } catch (e) {
    console.error("Load puzzle error:", fname, e);
    block.innerHTML = `<p>Error loading puzzle ${fname}.</p>`;
  }
}

/* --- helper for crossword / plain puzzles --- */
function wireSimpleForm(block, correctRaw, bounty, idDate) {
  const correct = (correctRaw ?? "")
    .toLowerCase()
    .split("|")
    .map(s => s.replace(/\s+/g, ""));
  block.querySelector(".answer-form").addEventListener("submit", e => {
    e.preventDefault();
    if (e.target.dataset.solved === "true") return;
    const user = block
      .querySelector(".answer-input")
      .value.trim()
      .toLowerCase()
      .replace(/\s+/g, "");
    const ok = correct.includes(user);
    const fb = block.querySelector(".feedback");
    if (ok) {
      fb.textContent = "Correct! You've cracked the code.";
      fb.style.color = "#39FF14";
      addXP(bounty);
      e.target.dataset.solved = "true";
    } else {
      fb.textContent = "Incorrect. Try again!";
      fb.style.color = "#FF6EC7";
    }
    logAnswerToSheet(idDate, user);
  });
  block.querySelector(".hint-toggle")?.addEventListener("click", ev => {
    const c = block.querySelector(".hint-content");
    const show = c.style.display === "none";
    c.style.display = show ? "block" : "none";
    ev.target.textContent = show ? "Hide clue" : "Show clue";
  });
}

/* ==================== DOM ready ==================== */
document.addEventListener("DOMContentLoaded", () => {
  resetXP();
  startXPTimer();
  updateXPDisplay();

  displayLeaderboardForm();
  loadLeaderboard();

  checkCookieConsent();
  document.getElementById("accept-cookie")?.addEventListener("click", () => {
    setCookie("cookieConsent", "accepted", 365);
    document.getElementById("cookie-banner").style.display = "none";
  });

  const list = document.getElementById("puzzle-container");
  const toggle = document.getElementById("orderToggle");

  // Force default to Oldest First (toggle off)
  toggle.checked = false;

  fetch("puzzles/manifest.json")
    .then(r => r.json())
    .then(m => {
      // Unchecked => oldest first (newestFirst=false)
      // Checked   => newest first (newestFirst=true)
      renderPuzzles(m, list, toggle.checked);

      toggle.addEventListener("change", () =>
        renderPuzzles(m, list, toggle.checked)
      );
    })
    .catch(e => console.error("Manifest load error:", e));
});

