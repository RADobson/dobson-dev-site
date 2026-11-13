// Days since the newest entry in the outage ledger, counted in Brisbane time
// so the number ticks over at midnight here.
(function () {
    var data = document.getElementById('outage-dates');
    if (!data) return;

    var dates;
    try { dates = JSON.parse(data.textContent); } catch (e) { return; }
    if (!dates || !dates.length) return;

    function toDay(iso) {
        var p = iso.split('-');
        return Date.UTC(+p[0], +p[1] - 1, +p[2]) / 86400000;
    }

    var today;
    try {
        today = toDay(new Intl.DateTimeFormat('en-CA', {
            timeZone: 'Australia/Brisbane', year: 'numeric', month: '2-digit', day: '2-digit'
        }).format(new Date()));
    } catch (e) {
        var n = new Date();
        today = Date.UTC(n.getFullYear(), n.getMonth(), n.getDate()) / 86400000;
    }

    var days = dates.map(toDay).sort(function (a, b) { return b - a; });
    var since = Math.max(0, today - days[0]);
    var best = since;
    for (var i = 0; i < days.length - 1; i++) best = Math.max(best, days[i] - days[i + 1]);

    function fill(sel, text) {
        Array.prototype.forEach.call(document.querySelectorAll(sel), function (el) { el.textContent = text; });
    }
    fill('[data-days-since]', since);
    fill('[data-days-unit]', since === 1 ? 'day' : 'days');
    fill('[data-days-best]', best);
})();
