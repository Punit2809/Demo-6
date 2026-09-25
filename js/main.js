/* Nevex Tech IT — interactions (multi-page) */
(function () {
  'use strict';

  var page = document.body.getAttribute('data-page') || 'home';
  var transitionEl = document.getElementById('pageTransition');

  // Inject shared header + footer
  if (window.NEVE) {
    var h = document.getElementById('header');
    var f = document.getElementById('footer');
    if (h) h.outerHTML = window.NEVE.header(page);
    if (f) f.outerHTML = window.NEVE.footer();
  }

  var nav = document.getElementById('nav');
  var toggle = document.getElementById('navToggle');

  // Mobile nav toggle
  if (nav && toggle) {
    toggle.addEventListener('click', function () { nav.classList.toggle('open'); });
  }

  /* ------------------------------------------------------------
     Page transition — curtain reveal
     Works for both real page links (.html) and in-page anchors (#)
  ------------------------------------------------------------ */
  var coverTimer;

  function jumpTo(id) {
    var root = document.documentElement;
    var prev = root.style.scrollBehavior;
    root.style.scrollBehavior = 'auto';
    if (id) {
      var el = document.getElementById(id);
      if (el) el.scrollIntoView(); else window.scrollTo(0, 0);
    } else {
      window.scrollTo(0, 0);
    }
    root.style.scrollBehavior = prev;
  }

  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[href]');
    if (!link) return;
    var href = link.getAttribute('href') || '';
    var isHash = href.charAt(0) === '#';
    var isPage = /\.html($|\?|#)/.test(href);
    var current = location.pathname.split('/').pop() || 'index.html';

    if (nav) nav.classList.remove('open');
    if (!transitionEl || (!isHash && !isPage)) return;

    e.preventDefault();
    clearTimeout(coverTimer);
    transitionEl.classList.add('active');

    coverTimer = setTimeout(function () {
      if (isPage) {
        if (href === current) { jumpTo(''); transitionEl.classList.remove('active'); }
        else { window.location.href = href; }
      } else {
        jumpTo(href.slice(1));
        try { if (history.replaceState) history.replaceState(null, '', href); } catch (err) {}
        setTimeout(function () { transitionEl.classList.remove('active'); }, 160);
      }
    }, 430);
  });

  // Header shadow on scroll
  var headerEl = document.getElementById('header');
  function onScroll() {
    if (headerEl) headerEl.classList.toggle('scrolled', window.scrollY > 8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Back-to-top
  var toTop = document.getElementById('toTop');
  if (toTop) {
    window.addEventListener('scroll', function () {
      toTop.classList.toggle('show', window.scrollY > 600);
    }, { passive: true });
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Scroll-reveal
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('visible'); });
  }
})();
