/* Reference motion: a gentle 16px entrance, replayed on entry, with reduced-motion support. */
(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const targets = [...document.querySelectorAll('.section-head,.life-intro>div:not(.journey-day),.journey-day-heading,.education-copy,.platform-section-head,.platform-story-grid>a')];
  let observer;
  const stopReveal = () => { observer?.disconnect(); targets.forEach(el => el.classList.remove('motion-reveal','is-revealed')); };
  const start = () => {
    stopReveal();
    if (reduced.matches || !('IntersectionObserver' in window)) return;
    observer = new IntersectionObserver(entries => entries.forEach(entry => {
      entry.target.classList.toggle('is-revealed', entry.isIntersecting);
    }), {threshold:.08});
    targets.forEach((el,i) => {el.classList.add('motion-reveal');el.style.setProperty('--motion-delay',`${(i%3)*80}ms`);observer.observe(el)});
  };
  start(); reduced.addEventListener('change', start);
  document.addEventListener('visibilitychange', () => {
    document.querySelector('.hero-visual')?.classList.toggle('motion-paused',document.hidden);
  });
})();

/* Play the daily-life rows in order on each entry when their section comes into view. */
(() => {
  const list = document.querySelector('.life-details .journey-timeline');
  if (!list) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let observer;
  const setup = () => {
    observer?.disconnect();
    list.classList.remove('timeline-ready', 'timeline-playing');
    if (reduced.matches || !('IntersectionObserver' in window)) return;
    [...list.children].forEach((row,index) => row.style.setProperty('--row-delay', `${index * 240}ms`));
    list.classList.add('timeline-ready');
    observer = new IntersectionObserver(entries => {
      list.classList.toggle('timeline-playing', entries.some(entry => entry.isIntersecting));
    }, {threshold:.12});
    observer.observe(list);
  };
  setup();
  reduced.addEventListener('change',setup);
})();

/* Each lower content group enters in reading order. */
(() => {
  const groups = [...document.querySelectorAll('.sequential-group')];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let observer;
  const setup = () => {
    observer?.disconnect();
    groups.forEach(group => [...group.children].forEach(row => row.classList.remove('sequence-ready','sequence-visible')));
    if (reduced.matches || !('IntersectionObserver' in window)) return;
    observer = new IntersectionObserver(entries => entries.forEach(entry => {
      entry.target.classList.toggle('sequence-visible', entry.isIntersecting);
    }), {threshold:.08});
    groups.forEach(group => [...group.children].filter(row => row.matches('a,article,button')).forEach((row,index) => {
      row.style.setProperty('--sequence-delay', `${index * 140}ms`);
      row.classList.add('sequence-ready');
      observer.observe(row);
    }));
  };
  setup();
  reduced.addEventListener('change',setup);
})();

/* Keep the country finder available throughout the page. */
(() => {
  const button = document.querySelector('.country-finder-float');
  if (button) button.hidden = false;
})();
