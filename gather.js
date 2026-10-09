(() => {
  const stage = document.querySelector('.gather-stage');
  if (!stage) return;
  let visible = false;
  const sync = () => stage.classList.toggle('is-active', visible && !document.hidden);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => { visible = entries[0].isIntersecting; sync(); }, {threshold:.15}).observe(stage);
  } else { visible = true; sync(); }
  document.addEventListener('visibilitychange', sync);
})();
