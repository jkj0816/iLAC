/* Reference motion: a gentle 16px entrance, played once, with reduced-motion support. */
(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const targets = [...document.querySelectorAll('.section-head,.life-intro>div,.education-copy,.country-entry,.purpose-card,.benefit-card,.academy-cards article,.timeline-grid article,.platform-section-head,.platform-story-grid>a')];
  let observer;
  const stopReveal = () => { observer?.disconnect(); targets.forEach(el => el.classList.remove('motion-reveal','is-revealed')); };
  const start = () => {
    stopReveal();
    if (reduced.matches || !('IntersectionObserver' in window)) return;
    observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-revealed'); observer.unobserve(entry.target); }
    }), {threshold:.08});
    targets.forEach((el,i) => {el.classList.add('motion-reveal');el.style.setProperty('--motion-delay',`${(i%3)*80}ms`);observer.observe(el)});
  };
  start(); reduced.addEventListener('change', start);
  document.querySelector('.motion-toggle')?.addEventListener('click', event => {
    const paused = document.body.classList.toggle('motion-paused');
    event.currentTarget.setAttribute('aria-pressed',String(paused));
    event.currentTarget.textContent = paused ? '애니메이션 재생' : '애니메이션 일시정지';
  });
  document.addEventListener('visibilitychange', () => {
    document.querySelector('.hero-visual')?.classList.toggle('motion-paused',document.hidden);
  });
})();
