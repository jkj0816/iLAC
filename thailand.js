const preparationCards=document.querySelectorAll('.preparation-group');
if('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
 const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}});},{threshold:0.08});
 preparationCards.forEach((card,index)=>{card.style.setProperty('--reveal-delay',`${index%2*90}ms`);card.classList.add('reveal-ready');observer.observe(card);});
 preparationCards.forEach(card=>card.addEventListener('focusin',()=>{card.classList.add('is-visible');observer.unobserve(card);}));
}

preparationCards.forEach(card=>card.addEventListener('animationend',event=>{if(event.target===card){card.classList.remove('reveal-ready');}}));
