---
layout: post
featured: true
title: "Building Ultrathink: A Private, Self-Hosted Second Brain"
date: 2026-01-16
last_modified_at: 2026-01-16
tags: [automation, python, telegram, ai, claude]
excerpt: "How a complex stack of no-code tools became a simple 600-line Python script, thanks to Claude Code."
description: "How I built Ultrathink, a private self-hosted second brain system using Python and Claude AI, replacing a complex Slack/Notion/Zapier stack with a simple 600-line script."
image: /assets/images/og-default.png
author: "Richard Dobson"
---

*How a complex stack of no-code tools became a simple 600-line Python script*

---

Nate B. Jones just dropped an incredible video arguing that 2026 is finally the year to build a "second brain" system. Watch it — I'll wait.

<iframe width="560" height="315" src="https://www.youtube.com/embed/0TpON5T-Sw4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<br><br>

I first heard the "second brain" concept nine years ago on a Tim Ferriss podcast, doing fasted treadmill walking at the gym, shortly before Donald Trump's first inauguration.

<figure>
  <img src="{{ '/assets/images/Donald_Trump_chicken.jpg' | relative_url }}" alt="Donald_Trump_chicken.jpg">
  <figcaption>Donald_Trump_chicken.jpg</figcaption>
</figure>
<br><br>

I really tried — with Evernote, back when Evernote was a thing. Couldn't make it stick. Too scatter-brained. The tagging, the folders, the constant systematising — impossible to maintain. So I gave up.

But Nate's video nailed the epiphany: in 2026, AI can automate all that organising. Your only job is to *capture the thought*. That's it. The system tags, files, and surfaces relevant information back to you at the right time — without you manually dredging it up from the depths of your nervous system.

Nate's recommended stack:
1. **Slack** for capture
2. **Zapier** for automation
3. **ChatGPT** for processing
4. **Notion** for storage

One problem — I don't like Slack. I'm one of the few who prefers Teams (I know). Never been a Zapier fan either — I used IFTTT back in the day, now n8n. And I've never touched Notion. Was an Evernote loyalist until Evernote was ruined. Since then, Obsidian.

What I actually wanted:
- **Privacy** — my thoughts in local Markdown files, not SaaS databases
- **Control** — no API rate limits or "you've hit your automation cap"
- **Cost efficiency** — $0/month, not $50+

So I set out to build it my way. What followed was — predictably — days of tinkering, until I finally had a "what am I DOING" moment.

## The Over-Engineered First Attempt

I'm a tinkerer. We have this condition where we can't just USE something — we have to BUILD it ourselves. So:

- Spun up an Oracle Cloud free-tier Ampere VM (4 vCPUs, 24GB RAM). Had to upgrade to a paid account to provision it, but the resources themselves are free-tier.
- Swapped Slack for **Telegram**. Actually a good call — this survived the cull.
- Swapped Zapier for **n8n** — self-hosted, open-source, free. Sounds perfect right? SPOILER: not perfect.
- Swapped Notion for **Obsidian** — but I needed it headless on a server. So I containerised the *desktop app* in Docker. The DESKTOP app. In a CONTAINER. I had to spoof it into thinking it had a UI. Absolutely unhinged.
- **CouchDB** as the sync backend — because apparently I hated myself
- **LiveSync plugin** to bridge Obsidian with CouchDB — another layer of "what could possibly go wrong"
- **Caddy** as a reverse proxy with automatic HTTPS — okay this one was fine
- **Claude Sonnet 4.5** as the AI — the only sane decision in the whole stack

Four n8n workflow JSON files. Six Docker containers. A "Headless Ghost" architecture where Obsidian watched for filesystem changes and synced them to CouchDB so my iPad could see updates. I called it "elegant" at the time. Reader — it was not elegant.

It sort of worked. But Obsidian's container crashed every few hours like clockwork. The n8n workflows were visual spaghetti with no version control — every breakage meant playing "find the misconfigured node" like some terrible escape room. LiveSync had edge cases. CouchDB had misconfigurations.

I was spending more time debugging infrastructure than capturing thoughts. The irony of a cognitive-load-reduction system that was itself a massive cognitive load was not lost on me. But sunk cost fallacy is real, so I pressed on.

## The Brainwave

11pm. Staring at yet ANOTHER CouchDB sync error. My third that day. And I just... stopped.

*Wait. I literally installed Claude Code yesterday. Why am I fighting with visual node editors and headless desktop apps like some kind of masochist?*

I looked at my n8n workflows. Really looked. The actual logic — classify a message, write a file, send a confirmation — was maybe 50 lines of Python. But it was buried under drag-and-drop nodes, JSON configs, webhook handlers, and error catchers. The headless Obsidian monstrosity? It only existed for the LiveSync plugin. But if I'm writing directly to the filesystem... I don't NEED sync. The files are already there. On the server. Where I can just... read them.

<figure>
  <img src="{{ '/assets/images/VIM_wife_VIM_life.jpg' | relative_url }}" alt="VIM_wife_VIM_life.jpg">
  <figcaption>VIM_wife_VIM_life.jpg</figcaption>
</figure>
<br><br>

The whole Rube Goldberg machine was solving problems that only existed because of other parts of the machine.

I opened Claude Code. Typed: "Replace all of this with a single Python script."

Magic happened.

## The Result: 600 Lines of Python

After about an hour of back-and-forth, out came `ultrathink.py`. One file. 600 lines. Does EVERYTHING the six-container nightmare did:

```
ultrathink/
├── ultrathink.py       # The entire system
├── Dockerfile          # Python 3.12 slim
├── docker-compose.yml  # One service
├── requirements.txt    # 6 dependencies
└── vault/              # Flat markdown files
    ├── People/
    ├── Projects/
    ├── Ideas/
    ├── Admin/
    └── Inbox-Log.md
```

ONE container instead of six. No n8n. No Obsidian. No CouchDB. No Caddy. Just Python doing Python things.

I laughed when I saw it working. Five dead-simple components:

| Component | Purpose |
|-----------|---------|
| `VaultService` | Read/write markdown with YAML frontmatter |
| `ClaudeService` | Classify messages, extract fields, generate briefings |
| `StateManager` | Track pending clarifications in memory |
| `handle_message()` | Capture flow: classify → route → file or bounce |
| Scheduled jobs | Morning briefing (7 AM) and weekly review (Sunday 4 PM) |

That's the whole system. Same functionality as the six-container Frankenstein — in a form I can read without wanting to cry.

## The Hot Take

I'm not here to bash n8n. No-code tools are great for non-devs who need automation, rapid prototyping, and gluing together SaaS products.

But here's my unpopular opinion: if your "no-code" solution involves running desktop apps headlessly in Docker, multiple databases just for sync, workflow JSONs you can't meaningfully diff, and debug sessions longer than rewriting the logic in actual code — maybe just write code?

Shocking advice from a non-developer. But we've over-rotated on "no-code everything" as an industry.

Claude Code made this embarrassingly trivial. Describe what you want. It writes the script. Test, iterate, done. The entire rewrite took less time than a typical n8n debugging session.

## The 8 Building Blocks (Nate Was Right)

Even though I completely rewrote the implementation, Nate's conceptual framework is 100% solid. The WHAT didn't change — only the HOW.

### 1. The Dropbox (Capture Point)
A private Telegram chat. Type or voice-note, hit send. Zero decisions at capture time. This is KEY — if you have to think "where does this go?" at capture, you won't capture.

### 2. The Sorter (Classifier)
Claude classifies into four buckets:

| Category | What goes here |
|----------|----------------|
| **People** | Relationships, contacts, conversations |
| **Projects** | Active work with next actions |
| **Ideas** | Thoughts to explore later |
| **Admin** | Logistics, appointments, errands |

Four categories. I tried five at first — had a "Work" vs "Personal" split — disaster. Keep it simple.

### 3. The Form (Schema)
Each category has fields Claude extracts — name, context, next_action, notes. YAML frontmatter makes it machine-readable. Nothing fancy.

### 4. The Filing Cabinet (Storage)
Flat markdown files in folders. No database. No sync layer. Just. Files. Almost too simple — until I realised simple is exactly what I needed.

### 5. The Receipt (Audit Trail)
Every capture logs to `Inbox-Log.md` with timestamp, category, confidence, and status. Skeptical about this one, but it's saved me multiple times.

### 6. The Bouncer (Confidence Filter)
When Claude's confidence drops below 60%, the bot asks "Which category?" instead of auto-filing. Crucial — prevents the junk drawer problem.

### 7. The Tap on Shoulder (Proactive Surfacing)
The magic part — the system pings ME instead of me having to remember to check:
- **Daily (7 AM)**: TOP 3 ACTIONS, STUCK ON, SMALL WIN
- **Weekly (Sunday 4 PM)**: WHAT HAPPENED, OPEN LOOPS, NEXT WEEK, THEME

### 8. The Fix Button (Correction Mechanism)
Reply to any filing with `fix: admin` to move it. One message, instant correction. AI gets it wrong sometimes — that's fine as long as fixing it is trivial.

## The 12 Principles (Actually Gold)

Nate's principles with my annotations:

1. **Reduce the human's job to one reliable behaviour.** Capture only. Everything else is automation. ← If I have to do TWO things I will do ZERO things.

2. **Separate memory from compute from interface.** Vault files, Python logic, Telegram UI. ← Learned this the hard way with n8n spaghetti.

3. **Treat prompts like APIs.** Fixed input, fixed output, JSON schema. ← No vibes-based prompting. Structure or death.

4. **Always build a trust mechanism.** Logs, confidence scores, fix command. ← You WILL need to debug. Make it easy on future-you.

5. **Default to safe behaviour when uncertain.** Ask, don't file. ← Better to annoy the user than silently create chaos.

6. **Make output small, frequent, actionable.** 150 words max for dailies. ← Wall-of-text briefings are useless.

7. **Use next action as the unit of execution.** Not "work on website" but "email Sarah by Friday." ← GTD 101 but still true.

8. **Prefer routing over organising.** Claude routes, users don't maintain. ← The epiphany from Nate's video. Let AI do the filing.

9. **Keep fields painfully small.** 3-5 fields max per category. ← I wanted 10 at first. Don't be me.

10. **Design for restart, not perfection.** Easy to resume after falling off. ← I've abandoned every productivity system because restarting felt impossible.

11. **Build one workflow, then attach modules.** Core loop first. ← Capture → classify → file → surface. Everything else is optional.

12. **Optimise for maintainability over cleverness.** One file beats six containers. ← The entire thesis of this post.

## The Stack (Laughably Simple)

| Component | What it does |
|-----------|--------------|
| **Telegram** | Capture interface |
| **Python script** | Classification, filing, briefings |
| **Claude API** | The AI brain |
| **Flat files** | Storage |

Four components. Total cost: **$0/month** on Oracle Cloud Always Free tier.

## Getting Started (If You Want to Steal This)

Stupidly easy:

```bash
# Clone the repo
git clone https://github.com/RADobson/ultrathink_2b.git
cd ultrathink_2b

# Configure
cp .env.example .env
# Edit .env with your TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID, ANTHROPIC_API_KEY

# Launch
docker compose up -d
```

Create your Telegram bot via `@BotFather`, get your chat ID from `@userinfobot`, done. That's the whole setup.

Test it:
```
You: Call Sarah about the Q3 budget by Friday
Bot: Filed as PROJECTS: 'Sarah Q3 Budget Call' (87%)
```

Minimal commands — the whole point is you shouldn't need to remember them:
- `/briefing` — trigger morning briefing
- `/review` — trigger weekly review
- `/status` — show vault note counts

## Full Circle

Nine years after that Tim Ferriss podcast — a full numerology cycle later — I've finally got a second brain that actually works.

Not because the concept changed. We still can't hold more than 4-7 things in working memory. We still need systems that capture, classify, surface, and nudge. That was true in 2017; it's true now.

What changed: AI got good enough to do the boring parts. The tagging, the organising, the "where does this go?" — the stuff I could never sustain manually.

And what I learned — the hard way, as usual — is that sometimes the "simple" no-code solution is actually the complicated one. Days wrestling with n8n, CouchDB, and a headless Obsidian container that crashed like clockwork. Then one hour with Claude Code for 600 lines of Python that just... works.

Maybe I should've written code from the start. But then I wouldn't have this blog post. And I wouldn't have learned to question my assumptions about what "easy" means.

The system is working. I'm actually using it. Ask me again in 6 months — that's the real test.

---

*The source code is [available on GitHub](https://github.com/RADobson/ultrathink_2b). Steal it, modify it, make it yours.*
