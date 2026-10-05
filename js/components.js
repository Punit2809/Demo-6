/* Nevex Tech IT (Veridian) — shared Bootstrap header + footer */
window.NEVE = (function () {
  var PHONE = '+1 (302) 412-4095';
  var EMAIL = 'careers@nevextechit.com';

  var phoneIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>';
  var mailIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg>';
  var markSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17V7l10 10V7"/></svg>';

  var links = [
    { href: 'index.html',   key: 'home',     label: 'Home' },
    { href: 'about.html',    key: 'about',    label: 'About Us' },
    { href: 'services.html', key: 'services', label: 'Services' },
    { href: 'plans.html',    key: 'plans',    label: 'Plans' },
    { href: 'refer.html',    key: 'refer',    label: 'Refer & Earn' },
    { href: 'contact.html',  key: 'contact',  label: 'Contact' }
  ];

  function header(active) {
    var nav = links.map(function (l) {
      return '<li class="nav-item"><a href="' + l.href + '" class="nav-link' + (l.key === active ? ' active' : '') + '">' + l.label + '</a></li>';
    }).join('');

    return '' +
      '<div class="topbar"><div class="container topbar-inner">' +
        '<div class="topbar-left">' +
          '<a href="tel:+13024124095" class="topbar-link">' + phoneIcon + ' ' + PHONE + '</a>' +
          '<a href="mailto:' + EMAIL + '" class="topbar-link">' + mailIcon + ' ' + EMAIL + '</a>' +
        '</div>' +
        '<div><span class="topbar-note"><span class="pulse"></span> Enrollment slots open now</span></div>' +
      '</div></div>' +
      '<header class="header" id="header"><nav class="navbar navbar-expand-lg">' +
        '<div class="container">' +
          '<a href="index.html" class="navbar-brand brand"><span class="brand-mark">' + markSvg + '</span><span class="brand-text">Nevex<em>Tech IT</em></span></a>' +
          '<button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu" aria-controls="navMenu" aria-expanded="false" aria-label="Toggle navigation"><span></span><span></span><span></span></button>' +
          '<div class="collapse navbar-collapse" id="navMenu">' +
            '<ul class="navbar-nav mx-auto">' + nav + '</ul>' +
            '<a href="plans.html" class="btn btn-primary">Get Started</a>' +
          '</div>' +
        '</div>' +
      '</nav></header>';
  }

  function footer() {
    return '' +
      '<footer class="footer"><div class="container">' +
        '<div class="row footer-grid">' +
          '<div class="col-lg-4 col-md-6 footer-brand">' +
            '<a href="index.html" class="brand brand-light"><span class="brand-mark">' + markSvg + '</span><span class="brand-text">Nevex<em>Tech IT</em></span></a>' +
            '<p>A modern IT placement and career-services company helping technology professionals launch U.S. careers they\'re proud of.</p>' +
          '</div>' +
          '<div class="col-lg-3 col-md-6 footer-col"><h4>Quick Links</h4>' +
            '<a href="index.html">Home</a><a href="about.html">About Us</a><a href="services.html">Services</a>' +
            '<a href="plans.html">Plans</a><a href="refer.html">Refer &amp; Earn</a><a href="contact.html">Contact</a>' +
          '</div>' +
          '<div class="col-lg-3 col-md-6 footer-col"><h4>Contact</h4>' +
            '<a href="tel:+13024124095">' + PHONE + '</a>' +
            '<a href="mailto:' + EMAIL + '">' + EMAIL + '</a>' +
            '<span>15310 Amberly Dr Suite 250<br>Tampa, FL 33647</span>' +
          '</div>' +
          '<div class="col-lg-2 col-md-6 footer-col"><h4>Follow Us</h4>' +
            '<a href="#">LinkedIn</a><a href="#">Instagram</a>' +
          '</div>' +
        '</div>' +
        '<div class="footer-bottom">' +
          '<span>© 2026 Nevex Tech IT. All rights reserved.</span>' +
          '<span><a href="#">Privacy Policy</a> · <a href="#">Terms of Service</a></span>' +
        '</div>' +
      '</div></footer>';
  }

  return { header: header, footer: footer, links: links };
})();
