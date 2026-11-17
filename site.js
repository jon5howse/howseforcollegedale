// Howse for Collegedale — shared behavior (no frameworks, no build step)

// Mobile menu
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    menuBtn.textContent = open ? 'Close' : 'Menu';
  });
}

// Gentle scroll-in reveal (skipped if the visitor prefers reduced motion)
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealables = document.querySelectorAll('.reveal');
if (!prefersReduced && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  revealables.forEach((el) => io.observe(el));
} else {
  revealables.forEach((el) => el.classList.add('in'));
}

/* ── Next-meeting computation ─────────────────────────────────────
   Commission meetings: 1st & 3rd Mondays, 6:00 PM (city shifts to
   Tuesday when the Monday is MLK, Presidents Day, Labor Day, or
   New Year's Day — pattern confirmed by the 2025–26 record).
   Workshops: 4th Mondays, 4:30 PM. Community CARE: 5th Mondays. */
(function () {
  function nthMonday(y, m, n) {
    var first = new Date(y, m, 1);
    var day = 1 + ((8 - first.getDay()) % 7) + (n - 1) * 7;
    var d = new Date(y, m, day);
    return d.getMonth() === m ? d : null;
  }
  function holidayShift(d) {
    var m = d.getMonth(), nth = Math.ceil(d.getDate() / 7);
    var hol = (m === 0 && nth === 3) || (m === 1 && nth === 3) ||
              (m === 8 && nth === 1) || (m === 0 && d.getDate() === 1);
    if (hol) { var t = new Date(d); t.setDate(d.getDate() + 1); return t; }
    return d;
  }
  /* CANCELLED: dates (YYYY-MM-DD, after any holiday shift) that the city has
     cancelled. Add a date here and the "next meeting" lines skip it. */
  var CANCELLED = ['2026-11-23'];
  function dateKey(d) {
    return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2);
  }
  function nextMeeting(nths, h, min, shift) {
    var now = new Date();
    for (var i = 0; i < 18; i++) {
      var y = now.getFullYear(), mo = now.getMonth() + i;
      for (var k = 0; k < nths.length; k++) {
        var d = nthMonday(new Date(y, mo, 1).getFullYear(), new Date(y, mo, 1).getMonth(), nths[k]);
        if (!d) continue;
        if (shift) d = holidayShift(d);
        if (CANCELLED.indexOf(dateKey(d)) !== -1) continue;
        d.setHours(h, min, 0, 0);
        if (d > now) return d;
      }
    }
    return null;
  }
  var CFG = {
    commission: { nths: [1, 3], h: 18, min: 0, shift: true },
    workshop:   { nths: [4],    h: 16, min: 30, shift: false },
    care:       { nths: [5],    h: 23, min: 59, shift: false }
  };
  var els = document.querySelectorAll('[data-next]');
  for (var i = 0; i < els.length; i++) {
    var c = CFG[els[i].getAttribute('data-next')];
    if (!c) continue;
    var d = nextMeeting(c.nths, c.h, c.min, c.shift);
    if (d) els[i].textContent = d.toLocaleDateString('en-US',
      { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
  }
  var bigs = document.querySelectorAll('[data-next-big]');
  for (var j = 0; j < bigs.length; j++) {
    var cb = CFG[bigs[j].getAttribute('data-next-big')];
    if (!cb) continue;
    var db = nextMeeting(cb.nths, cb.h, cb.min, cb.shift);
    if (db) bigs[j].innerHTML = db.toLocaleDateString('en-US', { weekday: 'long' }) + '<br>' +
      db.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }
})();
