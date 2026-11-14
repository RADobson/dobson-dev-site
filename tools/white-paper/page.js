(function () {
    /* Reading progress */
    var bar = document.getElementById('progress');
    function progress() {
        var h = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = (h > 0 ? Math.min(100, window.scrollY / h * 100) : 0) + '%';
    }
    window.addEventListener('scroll', progress, { passive: true });
    window.addEventListener('resize', progress);
    progress();

    /* Highlight the current section in the contents */
    var links = {};
    document.querySelectorAll('.toc a').forEach(function (a) { links[a.getAttribute('href').slice(1)] = a; });
    var heads = Array.prototype.slice.call(document.querySelectorAll('article h2[id]'));
    var current = null;
    function mark() {
        var y = window.scrollY + 120, id = heads.length ? heads[0].id : null;
        for (var i = 0; i < heads.length; i++) { if (heads[i].offsetTop <= y) id = heads[i].id; else break; }
        if (id === current) return;
        if (current && links[current]) links[current].classList.remove('on');
        current = id;
        var a = links[id];
        if (a) {
            a.classList.add('on');
            var box = a.closest('.toc');
            if (box && box.scrollHeight > box.clientHeight) {
                var t = a.offsetTop - box.clientHeight / 2;
                box.scrollTo({ top: t < 0 ? 0 : t });
            }
        }
    }
    window.addEventListener('scroll', mark, { passive: true });
    mark();

    /* Close the mobile contents after a tap */
    var m = document.querySelector('.mtoc');
    if (m) m.addEventListener('click', function (e) { if (e.target.tagName === 'A') m.open = false; });

    /* Retire the old site's offline cache for returning visitors */
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations().then(function (rs) { rs.forEach(function (r) { r.unregister(); }); }).catch(function () {});
    }
    if (window.caches) { caches.keys().then(function (ks) { ks.forEach(function (k) { caches.delete(k); }); }).catch(function () {}); }
})();
