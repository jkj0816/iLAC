/* Navigation shared by country guides and comparison pages. */
(() => {
  const header = document.querySelector('.site-header');
  const menu = header?.querySelector('.menu');
  if (!header || !menu) return;
  const close = () => {
    header.classList.remove('nav-open');
    menu.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-label', '메뉴 열기');
    menu.textContent = '☰';
  };
  menu.addEventListener('click', () => {
    const open = header.classList.toggle('nav-open');
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
    menu.textContent = open ? '×' : '☰';
  });
  header.querySelectorAll('nav a').forEach(link => link.addEventListener('click', close));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') close(); });
  document.addEventListener('click', event => { if (!header.contains(event.target)) close(); });
  window.addEventListener('resize', () => { if (innerWidth > 960) close(); });
  if (!document.querySelector('.compare-hero')) {
    header.querySelector('[data-lang="en"]')?.addEventListener('click', () => {
      window.location.href = 'https://goilac.com/api/locale/en?next=%2Flanding';
    });
  }
})();
