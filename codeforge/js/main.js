/* Apar Innosys — interactions (vanilla JS, no dependencies, loaded with defer) */
(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

  /* ---------- Header shadow once the page scrolls (rAF-throttled) ---------- */
  const header = $('#header');
  let ticking = false;
  const onScroll = () => { ticking = false; header.classList.toggle('is-sticky', scrollY > 8); };
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  onScroll();

  /* ---------- Mobile menu: built from the desktop nav so the two never drift ----------
     Closed, the menu carries `inert`, so nothing inside it is focusable or read out. */
  const menu = $('#mobile-menu');
  const list = $('[data-mobile-list]', menu);
  $$('.nav a').forEach(a => {
    const li = document.createElement('li');
    const link = a.cloneNode(true);
    li.append(link);
    list.append(li);
  });
  let opener = null;
  const setExpanded = v => $$('[aria-controls="mobile-menu"]').forEach(b => b.setAttribute('aria-expanded', String(v)));
  const open = trigger => {
    opener = trigger;
    menu.inert = false;
    menu.classList.add('is-open');
    setExpanded(true);
    document.body.classList.add('is-locked');
    setTimeout(() => $('a', list)?.focus(), 60);
  };
  const close = (restore = true) => {
    menu.classList.remove('is-open');
    menu.inert = true;
    setExpanded(false);
    document.body.classList.remove('is-locked');
    if (restore && opener) opener.focus();
  };
  $$('[data-open="mobile-menu"]').forEach(btn => btn.addEventListener('click', () => open(btn)));
  $$('[data-close]', menu).forEach(btn => btn.addEventListener('click', () => close()));
  menu.addEventListener('click', e => { if (e.target.closest('a')) close(false); }); // in-page anchors
  document.addEventListener('keydown', e => {
    if (menu.inert) return;
    if (e.key === 'Escape') { close(); return; }
    if (e.key !== 'Tab') return;                       // keep focus inside the open menu
    const items = $$(FOCUSABLE, menu).filter(n => n.offsetParent !== null);
    const first = items[0], last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
  addEventListener('resize', () => { if (!menu.inert && innerWidth > 1023) close(false); });

  /* ---------- Scroll reveal ---------- */
  const reveals = $$('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    reveals.forEach(el => el.classList.add('is-visible'));
  } else {
    const io = new IntersectionObserver(entries => entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); }
    }), { rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(el => {
      const siblings = el.parentElement ? [...el.parentElement.children].filter(c => c.classList.contains('reveal')) : [];
      el.style.transitionDelay = `${Math.min(siblings.indexOf(el), 5) * 0.07}s`;
      io.observe(el);
    });
  }
})();
