const menu=document.querySelector('.menu');const header=document.querySelector('header');function closeMenu(){header.classList.remove('nav-open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','메뉴 열기');menu.textContent='☰';}menu.addEventListener('click',()=>{const open=header.classList.toggle('nav-open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'메뉴 닫기':'메뉴 열기');menu.textContent=open?'×':'☰';});document.querySelectorAll('header nav a').forEach(link=>link.addEventListener('click',closeMenu));
const preparationCards=document.querySelectorAll('.preparation-group');
if('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
 const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}});},{threshold:0.08});
 preparationCards.forEach((card,index)=>{card.style.setProperty('--reveal-delay',`${index%2*90}ms`);card.classList.add('reveal-ready');observer.observe(card);});
 preparationCards.forEach(card=>card.addEventListener('focusin',()=>{card.classList.add('is-visible');observer.unobserve(card);}));
}

preparationCards.forEach(card=>card.addEventListener('animationend',event=>{if(event.target===card){card.classList.remove('reveal-ready');}}));
