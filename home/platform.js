(() => {
  const categories = [['all','전체'],['visa_info','비자'],['company_setup','법인'],['banking','계좌'],['moving','이사'],['translation','서류'],['realestate','거처'],['vehicle','차량'],['school','학교'],['cleaning','청소']];
  const questions = [
    {id:'2824e40d-f742-508f-bc61-831393c4a38e',title:'두바이 취업을 준비할 때 무엇을 비교해야 할까요?',body:'한국과 두바이의 취업 환경이 어떻게 다른지, 출국 전에 어떤 정보를 확인해야 할지 묻는 질문입니다.',country:'dubai',category:'visa_info',answers:6},
    {id:'0cc13416-ed00-591d-a7d9-10ae0c617b56',title:'두바이 전기·수도 고지서에는 어떤 항목이 있나요?',body:'정착 후 처음 받은 고지서에서 낯선 항목을 발견했습니다. 임대료와 별도로 내는 생활 비용을 알고 싶은 질문입니다.',country:'dubai',category:'realestate',answers:6},
    {id:'10f5ac33-4735-53be-8a57-d58058ba8d25',title:'두바이 퇴직금, 근무 기간에 따라 어떻게 달라지나요?',body:'근로계약과 근속 기간에 따른 퇴직금 차이를 확인하고 싶다는 질문입니다. 개인의 계약 조건과 적용 규정을 함께 확인해야 합니다.',country:'dubai',category:'visa_info',answers:2}
  ];
  const news = [
    {title:'두바이 법인 설립과 계좌 개설 절차 변화',category:'법인',date:'2026.09.03',source:'Gulf News',href:'https://goilac.com/news/e8d29b7b-761a-598f-8fbc-94a57bf064e1'},
    {title:'2026–27학년도 두바이 사립 교육기관 신설 소식',category:'학교',date:'2026.08.25',source:'Khaleej Times',href:'https://goilac.com/news/9dd5e153-85e6-5a00-b817-9cbd132bb2fc'},
    {title:'두바이 주거 임대료와 공급 변화',category:'거처',date:'2026.07.29',source:'Gulf News',href:'https://goilac.com/news/809167ee-5fc6-547c-a3a4-56f6d4433e0c'}
  ];
  const guides = [
    {name:'두바이 (UAE)',code:'DUBAI',slug:'dubai',icon:'briefcase',text:'사업과 취업, 국제학교와 도시 생활을 함께 살펴보세요.'},
    {name:'베트남',code:'VIETNAM',slug:'vietnam',icon:'palm',text:'은퇴와 새로운 일상, 도시별 주거와 생활환경을 비교하세요.'},
    {name:'태국',code:'THAILAND',slug:'thailand',icon:'beach',text:'장기 체류와 웰니스, 가족의 교육과 생활을 준비하세요.'}
  ];
  const classes = [
    {title:'두바이 사업과 취업',text:'법인, 비자와 현지 커리어 준비',slug:'dubai-business',icon:'briefcase'},
    {title:'국제학교와 교육환경',text:'교육과정, 입학 조건과 가족 생활권',slug:'dubai-education',icon:'graduation'},
    {title:'해외 자산 이전과 세금',text:'이주 전 자산·금융·세무 준비',slug:'dubai-asset-tax',icon:'moneybag'},
    {title:'두바이 주거와 부동산',text:'주거 선택과 계약 전 확인할 사항',slug:'dubai-property',icon:'house'},
    {title:'은퇴와 새로운 삶',text:'베트남·태국의 생활비, 의료와 생활환경',slug:'',icon:'palm'}
  ];
  const countries=[['미국','usa'],['영국','uk'],['호주','australia'],['뉴질랜드','new-zealand'],['싱가포르','singapore'],['포르투갈','portugal'],['캐나다','canada'],['조지아','georgia'],['프랑스','france'],['독일','germany'],['필리핀','philippines'],['인도네시아','indonesia'],['인도','india']];
  const params=new URLSearchParams(location.search);
  const view=['home','community','info','academy'].includes(params.get('view'))?params.get('view'):'home';
  const copy={home:['ILAC COMMUNITY','새로운 삶의 준비,<br>함께 묻고 알아보세요.','정착 정보부터 경험과 질문까지, 필요한 내용을 한곳에서 살펴보세요.'],community:['QUESTIONS & ANSWERS','해외 정착의 궁금증,<br>함께 나눠 보세요.','질문은 누구나 읽을 수 있어요. 익명으로 답변 내용을 비교하세요.'],info:['ILAC INFORMATION','어느 나라에서,<br>어떤 삶을 원하시나요?','국가별 가이드와 정착 정보를 같은 기준으로 살펴보세요.'],academy:['ILAC ACADEMY','배우고, 질문하고,<br>준비하세요.','떠나기 전에 필요한 지식을 주제별 무료 세션으로 만나세요.']}[view];
  document.querySelector('#view-eyebrow').textContent=copy[0];document.querySelector('#view-title').innerHTML=copy[1];document.querySelector('#view-description').textContent=copy[2];
  document.title=`${{home:'홈',community:'커뮤니티',info:'정착 정보',academy:'Academy'}[view]} | iLAC`;
  document.querySelectorAll('[data-view]').forEach(a=>{if(a.dataset.view===view)a.setAttribute('aria-current','page')});
  document.querySelectorAll('[data-panel]').forEach(panel=>panel.hidden=!panel.dataset.panel.split(' ').includes(view));
  if(view==='community')document.querySelector('#question-heading').textContent='정착 질문과 답변';
  const input=document.querySelector('#platform-search-input');input.value=params.get('q')||'';
  let category=categories.some(c=>c[0]===params.get('category'))?params.get('category'):'all';
  const countryFilter=document.querySelector('#country-filter');countryFilter.value=['dubai','vietnam','thailand'].includes(params.get('country'))?params.get('country'):'all';
  const esc=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const matches=(...text)=>!input.value.trim()||text.join(' ').toLocaleLowerCase().includes(input.value.trim().toLocaleLowerCase());
  const topicName=id=>categories.find(c=>c[0]===id)?.[1]||id;
  const filters=document.querySelector('.topic-filters');
  const renderFilters=()=>{filters.innerHTML=categories.map(([id,label])=>`<button type="button" data-category="${id}" aria-pressed="${category===id}">${label}</button>`).join('');filters.querySelectorAll('button').forEach(button=>button.addEventListener('click',()=>{category=button.dataset.category;renderFilters();render();updateUrl()}))};
  const preview=document.querySelector('.question-dialog');
  function openQuestion(q){document.querySelector('#preview-title').textContent=q.title;document.querySelector('#preview-body').textContent=q.body;document.querySelector('.preview-meta').textContent=`두바이 (UAE) · ${topicName(q.category)} · 확인 당시 답변 ${q.answers}개`;document.querySelector('#preview-link').href=`https://goilac.com/q/${q.id}`;preview.showModal()}
  preview.querySelector('.close').addEventListener('click',()=>preview.close());preview.addEventListener('click',e=>{const r=preview.getBoundingClientRect();if(e.target===preview&&(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom))preview.close()});
  const updateUrl=()=>{const next=new URL(location.href);for(const [key,val]of [['q',input.value.trim()],['category',category==='all'?'':category],['country',countryFilter.value==='all'?'':countryFilter.value]]){val?next.searchParams.set(key,val):next.searchParams.delete(key)}history.replaceState(null,'',next)};
  function render(){
    const q=questions.filter(q=>(category==='all'||q.category===category)&&(countryFilter.value==='all'||q.country===countryFilter.value)&&matches(q.title,q.body,topicName(q.category),'두바이 UAE'));
    const list=document.querySelector('#question-list');list.innerHTML=q.map(q=>`<button class="question-row" type="button" data-question="${q.id}"><span class="question-meta"><span class="country-tag">두바이 (UAE)</span><span>${topicName(q.category)}</span></span><h3>${q.title}</h3><p>${q.body}</p><span class="answer-count">답변 ${q.answers}개 ↗</span></button>`).join('');list.querySelectorAll('button').forEach(button=>button.addEventListener('click',()=>openQuestion(questions.find(q=>q.id===button.dataset.question))));document.querySelector('#question-empty').hidden=q.length>0;
    const g=guides.filter(g=>matches(g.name,g.text,g.code));document.querySelector('#guide-list').innerHTML=g.map(g=>`<a class="guide-entry" href="../${g.slug}/index.html"><img src="../assets/reference/${g.icon}.webp" alt=""><div><span>${g.code}</span><h3>${g.name} ↗</h3><p>${g.text}</p></div></a>`).join('');
    const c=classes.filter(c=>matches(c.title,c.text,'Academy 아카데미'));document.querySelector('#class-list').innerHTML=c.map(c=>`<a class="class-row" href="https://goilac.com/academy${c.slug?'/'+c.slug:''}" target="_blank" rel="noopener"><img src="../assets/reference/${c.icon}.webp" alt=""><div><h3>${c.title}</h3><p>${c.text}</p><span>무료 · 일정 확정 후 안내</span></div><b aria-hidden="true">↗</b></a>`).join('');
    const n=news.filter(n=>matches(n.title,n.category,n.source));document.querySelector('#news-list').innerHTML=n.map(n=>`<a class="news-row" href="${n.href}" target="_blank" rel="noopener"><p class="news-meta">${n.category} · ${n.date} · ${n.source}</p><h3>${n.title} ↗</h3><p>기존 플랫폼에서 기사 요약과 출처 확인</p></a>`).join('');
    document.querySelector('.other-countries').innerHTML=countries.filter(c=>matches(c[0],c[1])).map(([name,slug])=>`<a href="https://goilac.com/landing/countries/${slug}" target="_blank" rel="noopener">${name}<span aria-hidden="true">↗</span></a>`).join('');
    const count=view==='home'?q.length+n.length:view==='community'?q.length:view==='info'?g.length+n.length+countries.filter(c=>matches(c[0],c[1])).length:c.length;
    const summary=document.querySelector('.search-summary');summary.hidden=!input.value.trim();summary.textContent=`‘${input.value.trim()}’ 검색 결과 ${count}건`;document.querySelector('.search-empty').hidden=['home','community'].includes(view)||!input.value.trim()||count>0;
    document.querySelector('.external-search').href='https://goilac.com/search?q='+encodeURIComponent(input.value.trim());
    document.querySelector('.home-panels').hidden=view!=='home'||!!input.value.trim();
  }
  renderFilters();render();input.addEventListener('input',()=>{render();updateUrl()});document.querySelector('.platform-search').addEventListener('submit',e=>{e.preventDefault();render();updateUrl();document.querySelector('.search-summary').scrollIntoView({block:'nearest'})});countryFilter.addEventListener('change',()=>{render();updateUrl()});document.querySelector('.reset-filters').addEventListener('click',()=>{input.value='';category='all';countryFilter.value='all';renderFilters();render();updateUrl();input.focus()});
  const menu=document.querySelector('.platform-menu'),drawer=document.querySelector('#platform-drawer');const closeMenu=()=>{drawer.hidden=true;menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','메뉴 열기')};menu.addEventListener('click',()=>{const open=drawer.hidden;drawer.hidden=!open;menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'메뉴 닫기':'메뉴 열기')});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});document.addEventListener('click',e=>{if(!e.target.closest('.platform-header'))closeMenu()});window.addEventListener('resize',()=>{if(innerWidth>=960)closeMenu()});
  // Slides never change while the visitor reads or focuses their content.
  const banner=document.querySelector('.platform-banner'),slides=[...document.querySelectorAll('.banner-slide')],reduced=matchMedia('(prefers-reduced-motion: reduce)');let slide=0,manualPaused=reduced.matches,hovered=false,focused=false,timer;
  function showSlide(next){slide=(next+slides.length)%slides.length;slides.forEach((el,i)=>{el.hidden=i!==slide;el.classList.toggle('active',i===slide)});document.querySelector('.banner-count').textContent=`${slide+1} / ${slides.length}`}
  function syncTimer(){clearInterval(timer);const paused=manualPaused||hovered||focused||document.hidden||reduced.matches||view!=='home'||!!input.value.trim();if(!paused)timer=setInterval(()=>showSlide(slide+1),6500);const button=document.querySelector('.banner-pause');button.setAttribute('aria-pressed',String(manualPaused||reduced.matches));button.disabled=reduced.matches;button.textContent=reduced.matches?'모션 끔':manualPaused?'재생':'일시정지'}
  document.querySelector('[data-slide="prev"]').addEventListener('click',()=>{showSlide(slide-1);syncTimer()});document.querySelector('[data-slide="next"]').addEventListener('click',()=>{showSlide(slide+1);syncTimer()});document.querySelector('.banner-pause').addEventListener('click',()=>{manualPaused=!manualPaused;syncTimer()});banner.addEventListener('mouseenter',()=>{hovered=true;syncTimer()});banner.addEventListener('mouseleave',()=>{hovered=false;syncTimer()});banner.addEventListener('focusin',()=>{focused=true;syncTimer()});banner.addEventListener('focusout',()=>{queueMicrotask(()=>{focused=banner.contains(document.activeElement);syncTimer()})});document.addEventListener('visibilitychange',syncTimer);reduced.addEventListener('change',()=>{manualPaused=reduced.matches;syncTimer()});input.addEventListener('input',syncTimer);syncTimer();
})();
