/* Fang Lab website interactions. No build step or third-party scripts required. */
(() => {
  'use strict';
  const menu = document.querySelector('.navigation');
  const toggle = document.querySelector('.menu-toggle');
  const more = document.querySelector('.more');
  const moreWrap = document.querySelector('.more-wrap');
  const menuIcon = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"/></svg>';
  const closeIcon = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg>';
  function closeMore() {
    moreWrap?.classList.remove('is-open');
    more?.setAttribute('aria-expanded', 'false');
  }
  function closeMenu() {
    menu?.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
    toggle?.setAttribute('aria-label', 'Open navigation');
    if (toggle) toggle.innerHTML = menuIcon;
    closeMore();
  }
  toggle?.addEventListener('click', () => {
    const open = !menu.classList.contains('open');
    menu.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    toggle.innerHTML = open ? closeIcon : menuIcon;
  });
  more?.addEventListener('click', () => {
    const open = !moreWrap.classList.contains('is-open');
    moreWrap.classList.toggle('is-open', open);
    more.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('click', event => {
    if (!moreWrap?.contains(event.target)) closeMore();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !document.querySelector('dialog[open]')) {
      if (moreWrap?.classList.contains('is-open')) { closeMore(); more.focus(); }
      else if (menu?.classList.contains('open')) { closeMenu(); toggle.focus(); }
    }
  });

  const page = document.body.dataset.page;
  if (page === 'research') {
    const buttons = [...document.querySelectorAll('.filter-bar button')];
    const cards = [...document.querySelectorAll('.project')];
    buttons.forEach(button => button.addEventListener('click', () => {
      const filter = button.textContent.trim().toLowerCase();
      buttons.forEach(item => {
        item.classList.toggle('selected', item === button);
        item.setAttribute('aria-pressed', String(item === button));
      });
      cards.forEach(card => {
        const topic = card.querySelector('.mini-label').textContent.trim().toLowerCase();
        card.hidden = filter !== 'all' && topic !== filter;
      });
    }));
  }

  if (page === 'publications') {
    const input = document.querySelector('[aria-label="Search publications"]');
    const select = document.querySelector('.select-field select');
    const list = document.querySelector('.publication-list');
    const articles = [...list.querySelectorAll('.publication')];
    const empty = document.createElement('div');
    empty.className = 'empty';
    empty.hidden = true;
    const heading = document.createElement('h3');
    heading.textContent = 'No matching publications';
    const message = document.createElement('p');
    message.textContent = 'Try a different title, author, journal, or year.';
    const reset = document.createElement('button');
    reset.className = 'button navy';
    reset.textContent = 'Clear filters';
    empty.append(heading, message, reset);
    list.append(empty);
    const status = document.createElement('p');
    status.className = 'sr-only';
    status.setAttribute('aria-live', 'polite');
    list.before(status);
    function updatePublications() {
      const query = input.value.trim().toLowerCase();
      const topic = select.value.toLowerCase();
      let matches = 0;
      articles.forEach(article => {
        const label = article.querySelector('.mini-label').textContent.toLowerCase();
        const show = article.textContent.toLowerCase().includes(query) && (topic === 'all' || label.includes(topic));
        article.hidden = !show;
        if (show) matches++;
      });
      empty.hidden = matches > 0;
      status.textContent = `${matches} publication${matches === 1 ? '' : 's'} found`;
    }
    input.addEventListener('input', updatePublications);
    select.addEventListener('change', updatePublications);
    reset.addEventListener('click', () => { input.value = ''; select.value = 'All'; updatePublications(); input.focus(); });
  }

  if (page === 'news') {
    const buttons = [...document.querySelectorAll('.filter-bar button')];
    const rows = [...document.querySelectorAll('.news-row')];
    buttons.forEach(button => button.addEventListener('click', () => {
      const year = button.textContent.trim();
      buttons.forEach(item => {
        item.classList.toggle('selected', item === button);
        item.setAttribute('aria-pressed', String(item === button));
      });
      rows.forEach(row => { row.hidden = year !== 'All years' && !row.querySelector('.mini-label').textContent.includes(year); });
    }));
  }

  if (page === 'gallery') {
    const triggers = [...document.querySelectorAll('.gallery button')];
    const photos = triggers.map(button => ({
      src: button.querySelector('img').getAttribute('src'),
      alt: button.querySelector('img').alt,
      title: button.querySelector('span').textContent.trim()
    }));
    triggers.forEach((trigger, start) => trigger.addEventListener('click', () => {
      let current = start;
      const dialog = document.createElement('dialog');
      dialog.className = 'lightbox';
      dialog.setAttribute('aria-label', 'Lab photo viewer');
      const close = document.createElement('button');
      close.className = 'lightbox-close';
      close.setAttribute('aria-label', 'Close photo');
      close.innerHTML = closeIcon;
      const previous = document.createElement('button');
      previous.className = 'lightbox-prev';
      previous.setAttribute('aria-label', 'Previous photo');
      previous.textContent = '‹';
      const next = document.createElement('button');
      next.className = 'lightbox-next';
      next.setAttribute('aria-label', 'Next photo');
      next.textContent = '›';
      const figure = document.createElement('figure');
      const image = document.createElement('img');
      const caption = document.createElement('figcaption');
      caption.setAttribute('aria-live', 'polite');
      const title = document.createElement('b');
      const count = document.createElement('span');
      const description = document.createElement('p');
      caption.append(title, count, description);
      figure.append(image, caption);
      dialog.append(close, previous, figure, next);
      function show(index) {
        current = (index + photos.length) % photos.length;
        image.src = photos[current].src;
        image.alt = photos[current].alt;
        title.textContent = photos[current].title;
        count.textContent = `${current + 1} / ${photos.length}`;
        description.textContent = photos[current].alt;
      }
      close.addEventListener('click', () => dialog.close());
      previous.addEventListener('click', () => show(current - 1));
      next.addEventListener('click', () => show(current + 1));
      dialog.addEventListener('keydown', event => {
        if (event.key === 'ArrowLeft') { event.preventDefault(); show(current - 1); }
        if (event.key === 'ArrowRight') { event.preventDefault(); show(current + 1); }
      });
      dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
      dialog.addEventListener('close', () => {
        document.body.style.overflow = '';
        dialog.remove();
        trigger.focus();
      }, {once: true});
      document.body.append(dialog);
      show(start);
      document.body.style.overflow = 'hidden';
      dialog.showModal();
      close.focus();
    }));
  }
})();
