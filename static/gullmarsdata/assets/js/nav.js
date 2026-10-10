// Mobile menu toggle. The site works without this file: the menu is then always shown.
(function () {
  var header = document.querySelector('.site-header');
  var toggle = header && header.querySelector('.nav-toggle');
  if (!toggle) return;

  function setOpen(open) {
    header.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  }

  toggle.addEventListener('click', function () {
    setOpen(!header.classList.contains('nav-open'));
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });
})();
