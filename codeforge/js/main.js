/* CodeForge Home 1 — interactions (vanilla JS, no dependencies, loaded with defer) */
(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])';

  /* ---------- Sticky header + back to top (one rAF-throttled scroll listener) ---------- */
  const header = $('#header');
  const toTop = $('.to-top');
  let ticking = false;
  const onScroll = () => {
    ticking = false;
    header.classList.toggle('is-sticky', scrollY > 300);
    toTop.classList.toggle('is-visible', scrollY > 600);
  };
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  onScroll();
  toTop.addEventListener('click', e => {
    e.preventDefault();
    scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    $('.skip-link').focus({ preventScroll: true });
  });

  /* ---------- Overlays: side panel, mobile menu, search, newsletter ----------
     Closed overlays carry `inert`, so nothing inside them is focusable or read out. */
  let active = null, opener = null;
  const setExpanded = (id, value) => $$(`[aria-controls="${id}"]`).forEach(b => b.setAttribute('aria-expanded', String(value)));
  const open = (el, trigger = document.activeElement) => {
    if (active) close(active, false);
    active = el; opener = trigger;
    el.inert = false;
    el.classList.add('is-open');
    setExpanded(el.id, true);
    document.body.classList.add('is-locked');
    const first = $$(FOCUSABLE, el).find(n => n.offsetParent !== null && !n.closest('.cta-modal__close, .side-panel__close, .mobile-menu__close, .search-overlay__close'));
    setTimeout(() => (first || el).focus(), 60);
  };
  const close = (el, restore = true) => {
    el.classList.remove('is-open');
    el.inert = true;
    setExpanded(el.id, false);
    document.body.classList.remove('is-locked');
    active = null;
    if (restore && opener && document.contains(opener)) opener.focus();
  };
  $$('[data-open]').forEach(btn => btn.addEventListener('click', () => open(document.getElementById(btn.dataset.open), btn)));
  $$('[data-close]').forEach(btn => btn.addEventListener('click', () => close(btn.closest('[data-overlay]'))));
  document.addEventListener('keydown', e => {
    if (!active) return;
    if (e.key === 'Escape') { close(active); return; }
    if (e.key !== 'Tab') return;                       // keep focus inside the open overlay
    const items = $$(FOCUSABLE, active).filter(n => n.offsetParent !== null);
    if (!items.length) return;
    const first = items[0], last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
  document.addEventListener('click', e => {                // click outside closes the side panel
    if (active?.id === 'side-panel' && !active.contains(e.target) && !e.target.closest('[data-open]')) close(active);
  });

  /* ---------- Desktop dropdowns: aria-expanded mirrors hover/focus; Escape closes ---------- */
  $$('.nav li').forEach(li => {
    const link = li.querySelector(':scope > a');
    const sub = li.querySelector(':scope > .dropdown');
    if (!sub) return;
    link.setAttribute('aria-expanded', 'false');
    const set = v => link.setAttribute('aria-expanded', String(v));
    li.addEventListener('mouseenter', () => { li.classList.remove('is-dismissed'); set(true); });
    li.addEventListener('mouseleave', () => set(false));
    li.addEventListener('focusin', () => set(true));
    li.addEventListener('focusout', e => { if (!li.contains(e.relatedTarget)) set(false); });
    li.addEventListener('keydown', e => {
      if (e.key !== 'Escape') return;
      e.stopPropagation();
      set(false); link.focus(); li.classList.add('is-dismissed');
    });
    link.addEventListener('focus', () => li.classList.remove('is-dismissed'));
  });

  /* ---------- Mobile menu: built from the desktop nav so the two never drift ---------- */
  const build = ul => [...ul.children].map(li => {
    const a = li.querySelector(':scope > a');
    const sub = li.querySelector(':scope > ul');
    const item = document.createElement('li');
    if (!sub) {
      const link = document.createElement('a');
      link.href = a.getAttribute('href');
      link.textContent = a.textContent.trim();
      if (a.hasAttribute('aria-current')) link.setAttribute('aria-current', 'page');
      item.append(link);
      return item;
    }
    item.className = 'has-sub';
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'mobile-menu__toggle';
    btn.setAttribute('aria-expanded', 'false');
    btn.innerHTML = `<span></span><svg aria-hidden="true"><use href="img/icons.svg#i-chev"/></svg>`;
    btn.firstChild.textContent = a.textContent.trim();
    btn.addEventListener('click', () => btn.setAttribute('aria-expanded', String(item.classList.toggle('is-open'))));
    const ulEl = document.createElement('ul');
    ulEl.append(...build(sub));
    item.append(btn, ulEl);
    return item;
  });
  $('[data-mobile-list]').append(...build($('.nav')));

  /* ---------- Subscribe forms: front-end only (no backend in this project) ---------- */
  $$('form[data-subscribe]').forEach(form => form.addEventListener('submit', e => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const status = $('.form-status', form);
    status.textContent = 'Thanks — please check your inbox to confirm your subscription.';
    form.reset();
  }));
  $$('form[role="search"]').forEach(f => f.addEventListener('submit', e => e.preventDefault()));

  /* ---------- Newsletter popup: on load, once per session ---------- */
  let seen = false;
  try { seen = sessionStorage.getItem('cf-newsletter') === '1'; } catch (e) {}
  if (!seen) setTimeout(() => {
    if (active) return;                                 // never interrupt an overlay the user opened
    open($('#newsletter'), null);
    try { sessionStorage.setItem('cf-newsletter', '1'); } catch (e) {}
  }, 1500);

  /* ---------- Portfolio carousel: loop, autoplay 7s, 600ms slide, pausable ---------- */
  $$('[data-carousel]').forEach(root => {
    const track = $('.carousel__track', root);
    const slides = $$('.project', track);
    const count = slides.length;
    const controls = root.nextElementSibling;
    const dotsWrap = $('[data-dots]', controls);
    const toggle = $('[data-carousel-toggle]', controls);
    slides.forEach(s => {                               // clones make the loop seamless; hidden from AT and tab order
      const c = s.cloneNode(true);
      c.inert = true; c.setAttribute('aria-hidden', 'true');
      c.removeAttribute('aria-label'); c.removeAttribute('role'); c.removeAttribute('aria-roledescription');
      track.append(c);
    });
    let index = 0, timer = null, userPaused = reduceMotion, hoverPaused = false;

    const dots = !dotsWrap ? [] : slides.map((_, i) => {      // optional: the reference shows no pagination
      const b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('aria-label', `Show slide ${i + 1}`);
      b.addEventListener('click', () => go(i));
      dotsWrap.append(b);
      return b;
    });
    const step = () => track.children[1].offsetLeft - track.children[0].offsetLeft;
    const render = (animate = true) => {
      track.style.transition = animate && !reduceMotion ? '' : 'none';
      track.style.transform = `translateX(${-index * step()}px)`;
      dots.forEach((d, i) => d.setAttribute('aria-current', String(i === index % count)));
    };
    const go = i => { index = i; render(); schedule(); };
    track.addEventListener('transitionend', () => { if (index >= count) { index -= count; render(false); } });

    const schedule = () => {
      clearTimeout(timer);
      if (!userPaused && !hoverPaused) timer = setTimeout(() => go(index + 1), 7000);
    };
    const setToggle = () => {
      toggle.setAttribute('aria-label', userPaused ? 'Play slideshow' : 'Pause slideshow');
      $('use', toggle).setAttribute('href', `img/icons.svg#i-${userPaused ? 'play' : 'pause'}`);
    };
    toggle.addEventListener('click', () => { userPaused = !userPaused; setToggle(); schedule(); });
    root.addEventListener('mouseenter', () => { hoverPaused = true; schedule(); });
    root.addEventListener('mouseleave', () => { hoverPaused = false; schedule(); });
    root.addEventListener('focusin', () => { hoverPaused = true; schedule(); });
    root.addEventListener('focusout', e => { if (!root.contains(e.relatedTarget)) { hoverPaused = false; schedule(); } });

    /* swipe / drag — a drag suppresses the click that follows it */
    let startX = null, dragged = false;
    root.addEventListener('pointerdown', e => { startX = e.clientX; dragged = false; });
    root.addEventListener('pointerup', e => {
      if (startX === null) return;
      const dx = e.clientX - startX; startX = null;
      if (Math.abs(dx) > 50) { dragged = true; go(dx < 0 ? index + 1 : (index + count - 1) % count); }
    });
    root.addEventListener('click', e => { if (dragged) { e.preventDefault(); dragged = false; } });
    root.addEventListener('dragstart', e => e.preventDefault());

    /* keyboard: focusing a slide brings it into view */
    slides.forEach((s, i) => s.addEventListener('focus', () => { if (i < index || i > index + 2) go(Math.min(i, count - 1)); }));

    addEventListener('resize', () => render(false));
    render(false);
    setToggle();
    schedule();
  });

  /* ---------- Scroll reveal (codeforge-fadein / fadeinleft) ---------- */
  const reveals = $$('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    reveals.forEach(el => el.classList.add('is-visible'));
  } else {
    const io = new IntersectionObserver(entries => entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); }
    }), { rootMargin: '0px 0px -10% 0px' });
    reveals.forEach((el, i) => { el.style.transitionDelay = `${(i % 4) * 0.08}s`; io.observe(el); });
  }

  /* ---------- Cursor follower (trx_addons mouse helper); animates only while moving ---------- */
  const dot = $('.cursor-dot');
  if (!matchMedia('(hover: hover) and (pointer: fine)').matches || reduceMotion) { dot.remove(); return; }
  let x = -100, y = -100, cx = x, cy = y, running = false;
  const loop = () => {
    cx += (x - cx) / 8; cy += (y - cy) / 8;            // mouseHelperDelay 8 [V]
    dot.style.transform = `translate(${cx}px, ${cy}px)`;
    if (Math.abs(x - cx) + Math.abs(y - cy) > 0.5) requestAnimationFrame(loop); else running = false;
  };
  addEventListener('mousemove', e => {
    x = e.clientX; y = e.clientY;
    if (!running) { running = true; requestAnimationFrame(loop); }
  }, { passive: true });
  document.addEventListener('mouseleave', () => dot.classList.add('is-hidden'));
  document.addEventListener('mouseenter', () => dot.classList.remove('is-hidden'));
  $$('[data-carousel]').forEach(c => {
    c.addEventListener('mouseenter', () => dot.classList.add('is-big'));
    c.addEventListener('mouseleave', () => dot.classList.remove('is-big'));
  });
})();
