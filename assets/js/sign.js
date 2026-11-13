// The homepage sign: days since the newest entry in the outage ledger,
// counted in Brisbane time so the number flips at midnight here.
(function () {
    var sign = document.querySelector('[data-sign]');
    var data = document.getElementById('outage-dates');
    if (!sign || !data) return;

    var dates;
    try { dates = JSON.parse(data.textContent); } catch (e) { return; }
    if (!dates || !dates.length) return;

    function toDay(iso) {
        var p = iso.split('-');
        return Date.UTC(+p[0], +p[1] - 1, +p[2]) / 86400000;
    }

    var today;
    try {
        var parts = new Intl.DateTimeFormat('en-CA', {
            timeZone: 'Australia/Brisbane', year: 'numeric', month: '2-digit', day: '2-digit'
        }).format(new Date());
        today = toDay(parts);
    } catch (e) {
        var n = new Date();
        today = Date.UTC(n.getFullYear(), n.getMonth(), n.getDate()) / 86400000;
    }

    var days = dates.map(toDay).sort(function (a, b) { return b - a; });
    var since = Math.max(0, today - days[0]);

    var best = since;
    for (var i = 0; i < days.length - 1; i++) {
        best = Math.max(best, days[i] - days[i + 1]);
    }

    var tiles = sign.querySelector('[data-sign-tiles]');
    if (tiles) {
        tiles.innerHTML = '';
        String(since).split('').forEach(function (d) {
            var t = document.createElement('span');
            t.className = 'sign-tile';
            t.textContent = d;
            tiles.appendChild(t);
        });
        tiles.setAttribute('aria-label', since + (since === 1 ? ' day' : ' days'));
    }
    var unit = sign.querySelector('[data-sign-unit]');
    if (unit) unit.textContent = since === 1 ? 'Day' : 'Days';
    var bestEl = sign.querySelector('[data-sign-best]');
    if (bestEl) bestEl.textContent = best;

    sign.classList.add('is-live');
})();
