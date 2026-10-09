const details = {
  settle: {
    label: 'SETTLEMENT & ADMIN',
    title: '정착 · 행정',
    text: '두바이에 도착해 생활을 시작하는 데 필요한 절차를 고객 일정에 맞춰 연결합니다.',
    list: [
      '비자·거주 관련 절차',
      'Emirates ID',
      '은행·통신·DEWA',
      '관공서 업무'
    ]
  },

  property: {
    label: 'HOME & LIVING',
    title: '주거 · 자산',
    text: '집을 구하는 일부터 실제 생활을 시작하는 일까지, 현지 파트너와 함께 선택지를 검토합니다.',
    list: [
      '주거 선택 및 계약',
      '입주·생활환경 세팅',
      '지역·생활권 비교',
      '자산·부동산 전문 서비스'
    ]
  },

  education: {
    label: 'GLOBAL EDUCATION',
    title: '자녀 교육',
    text: '학교만 따로 고르지 않습니다. 교육과정과 가족의 생활권을 함께 설계합니다.',
    list: [
      'IB · British · American Curriculum',
      'KHDA 평가와 교육환경',
      '입학 가능 시점과 대기 여부',
      '학교별 입학 절차'
    ]
  },

  business: {
    label: 'BUSINESS & INVESTMENT',
    title: '비즈니스 · 투자',
    text: '두바이에서 새로운 사업과 자산을 준비할 때 필요한 현지 전문 네트워크를 연결합니다.',
    list: [
      '법인 및 사업 셋업',
      '상업용 부동산',
      '현지 비즈니스 네트워크',
      '금융·세무 전문가 연결'
    ]
  },

  dubai: {
    label: 'UAE · DUBAI',
    title: 'Dubai 전략',
    text: '사업·취업·교육·라이프스타일이 만나는 Dubai의 선택지를 목적에 맞춰 검토합니다.',
    list: [
      '비자와 거주 계획',
      '부동산·주거 목적 분리',
      '국제학교와 생활권',
      '현지 답사와 정착 일정'
    ]
  },

  vietnam: {
    label: 'VIETNAM',
    title: 'Vietnam 전략',
    text: '은퇴와 새로운 라이프스타일을 고려하는 고객을 위한 장기체류·생활환경 정보를 연결합니다.',
    list: [
      '장기체류와 비자',
      '지역별 주거와 생활비',
      '의료와 생활환경',
      '교육·국제학교'
    ]
  },

  thailand: {
    label: 'THAILAND',
    title: 'Thailand 전략',
    text: '여유로운 생활, 웰니스, 장기 체류를 위한 조건과 생활환경을 비교합니다.',
    list: [
      '은퇴·장기체류',
      '주거와 의료',
      '생활환경과 커뮤니티',
      '교육과 가족 정착'
    ]
  },

  academy: {
    label: 'ILAC ACADEMY',
    title: '배우고 준비하는 플랫폼',
    text: '각 클래스에서는 강의 일정, 대상, 강사, 사전 질문과 Q&A를 제공합니다.',
    list: [
      'Dubai Business & Employment',
      'Global Education',
      'Asset Transfer',
      'Retirement',
      'Dubai Real Estate'
    ]
  }
};


/* =========================================================
   DETAIL DIALOG
========================================================= */

const dialog = document.querySelector('#detail-dialog');

function openDetailDialog(data) {
  if (!dialog) return;

  document.querySelector('#modal-label').textContent = data.label;
  document.querySelector('#modal-title').textContent = data.title;
  document.querySelector('#modal-text').textContent = data.text;

  document.querySelector('#modal-list').innerHTML =
    data.list.map(item => `<li>${item}</li>`).join('');

  dialog.showModal();
}

document.querySelectorAll('[data-dialog]').forEach(button => {
  button.addEventListener('click', () => {
    const key = button.dataset.dialog;

    /*
     * 국가 카드는 기존 국가별 페이지로 이동
     */
    if (['dubai', 'vietnam', 'thailand'].includes(key)) {
      window.location.href = `${key}/index.html`;
      return;
    }

    const data = details[key];

    if (data) {
      openDetailDialog(data);
    }
  });
});


/* =========================================================
   LANGUAGE
========================================================= */

const koreanContent = new Map();

const localizedEnglish = {
  'header nav a:nth-child(1)': 'YOUR PURPOSE',
  'header nav a:nth-child(2)': 'COUNTRY GUIDES',
  'header nav a:nth-child(3)': 'SETTLEMENT',
  'header nav a:nth-child(4)': 'EDUCATION',
  'header nav a:nth-child(5)': 'ACADEMY',

  '.nav-cta': 'START A CONSULTATION',

  '.hero h1': 'Design your life<br><em>abroad.</em>',

  '.hero-copy>span':
    'Compare countries by purpose and connect every step—from preparation to a confident life on the ground.',

  '.hero-copy .primary': 'FIND YOUR COUNTRY',
  '.hero-copy .secondary': 'ASK AN EXPERT',

  '.intro h2':
    'Turn complex relocation<br>into <em>one plan.</em>',

  '.intro>div>p':
    'ILAC connects country strategy, visas, education, housing, assets and daily life around one purpose—without making you navigate them separately.',

  '.solutions .section-head h2':
    'Find the right<br>information, faster.',

  '.solutions .section-head>p:last-child':
    'The hub presents only the key areas first. Open a topic whenever you need the practical details.',

  '.countries .section-head h2':
    'Your purpose changes<br><em>the right destination.</em>',

  '.countries .section-head a':
    'FIND YOUR COUNTRY',

  '.diagnosis h2':
    'Not sure where<br>to begin?',

  '.diagnosis>div:last-child>p':
    'Five questions point you to the countries, content and consultation route that fit your priorities.',

  '.diagnosis .primary':
    'FIND YOUR COUNTRY',

  '.diagnosis small':
    'NO PERSONAL DETAILS REQUIRED',

  '.academy .section-head h2':
    'Learn, ask, and<br><em>get ready.</em>',

  '.academy .section-head a':
    'VIEW ALL CLASSES',

  '.faq h2':
    'When search alone<br>is not enough.',

  '.faq>div>p':
    'Questions lead naturally to expert answers, relevant content, Academy sessions and consultation.',

  '.faq .primary':
    'ASK AN EXPERT',

  '.contact h2':
    'A new life deserves<br><em>more than a solo plan.</em>',

  '.contact>p:not(.label)':
    'A consultation is the first step to understanding what is possible.',

  '.contact .primary':
    'BEGIN A CONSULTATION'
};


Object.keys(localizedEnglish).forEach(selector => {
  const element = document.querySelector(selector);

  if (element) {
    koreanContent.set(selector, element.innerHTML);
  }
});


function setLanguage(language) {
  document.documentElement.lang = language;

  document.querySelectorAll('.lang').forEach(button => {
    const active = button.dataset.lang === language;

    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', active);
  });

  const contentMap =
    language === 'en'
      ? localizedEnglish
      : Object.fromEntries(koreanContent);

  Object.entries(contentMap).forEach(([selector, content]) => {
    const element = document.querySelector(selector);

    if (element) {
      element.innerHTML = content;
    }
  });
}


document.querySelectorAll('.lang').forEach(button => {
  button.addEventListener('click', () => {
    setLanguage(button.dataset.lang);
  });
});


/* =========================================================
   DIALOG CLOSE
========================================================= */

document.querySelectorAll('.close').forEach(button => {
  button.addEventListener('click', () => {
    button.closest('dialog')?.close();
  });
});


/* =========================================================
   ACCORDION
========================================================= */

document.querySelectorAll('.accordion button').forEach(button => {
  button.addEventListener('click', () => {
    button.nextElementSibling.classList.toggle('open');
  });
});


/* =========================================================
   MOBILE MENU
========================================================= */

const menu = document.querySelector('.menu');
const header = document.querySelector('header');

if (menu && header) {
  menu.addEventListener('click', () => {
    const open = header.classList.toggle('nav-open');

    menu.setAttribute('aria-expanded', open);
    menu.textContent = open ? '×' : '☰';
    menu.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
  });

  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
      header.classList.remove('nav-open');
      menu.setAttribute('aria-expanded', 'false');
      menu.textContent = '☰';
    });
  });
}


/* =========================================================
   PERSONAL DIAGNOSIS
========================================================= */

const questions = [
  {
    question: '해외 진출의 가장 큰 목적은 무엇인가요?',
    options: [
      '사업',
      '취업',
      '은퇴',
      '자녀 교육',
      '투자',
      '새로운 라이프스타일',
      '아직 잘 모르겠어요'
    ]
  },
  {
    question: '언제쯤 이동을 생각하시나요?',
    options: [
      '6개월 이내',
      '1년 이내',
      '1~3년',
      '장기적으로 검토'
    ]
  },
  {
    question: '가족 구성은 어떻게 되나요?',
    options: [
      '1인',
      '부부',
      '자녀 1명',
      '자녀 2명 이상'
    ]
  },
  {
    question: '가장 중요한 것은 무엇인가요?',
    options: [
      '세금·자산',
      '사업 기회',
      '교육',
      '주거',
      '생활비',
      '의료·웰니스'
    ]
  },
  {
    question: '선호하는 생활환경을 선택해 주세요.',
    options: [
      '글로벌 대도시',
      '휴양·리조트형',
      '조용한 생활',
      '가족 중심',
      '비즈니스 중심'
    ]
  }
];


let step = 0;
let diagnosisAnswers = [];

const quiz = document.querySelector('#quiz-dialog');
const quizProgress = document.querySelector('#quiz-progress');
const quizQuestion = document.querySelector('#quiz-question');
const quizOptions = document.querySelector('.quiz-options');
const quizBack = document.querySelector('#quiz-back');
const quizMeter = document.querySelector('#quiz-meter');


function renderQuiz() {
  if (!quizProgress || !quizQuestion || !quizOptions) return;

  quizProgress.textContent = `0${step + 1} / 05`;
  quizQuestion.textContent = questions[step].question;
  quizQuestion.tabIndex = -1;
  quizQuestion.focus();
  quizBack.hidden = step === 0;
  quizMeter.hidden = false;
  quizMeter.value = step + 1;
  quizMeter.setAttribute('aria-valuetext', `${step + 1} / 5 질문`);

  quizOptions.innerHTML = questions[step].options
    .map(option => `<button type="button" data-original="${option}" aria-pressed="${diagnosisAnswers[step] === option}">${option}</button>`)
    .join('');

  quizOptions.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
      diagnosisAnswers[step] = button.dataset.original;

      if (step < questions.length - 1) {
        step++;
        renderQuiz();
      } else {
        showDiagnosisResult();
      }
    });
  });
}


/* =========================================================
   DIAGNOSIS RESULT
========================================================= */

function calculateCountryResult() {
  const answers = diagnosisAnswers;

  let dubai = 0;
  let vietnam = 0;
  let thailand = 0;

  const purpose = answers[0];
  const family = answers[2];
  const priority = answers[3];
  const lifestyle = answers[4];

  /*
   * 목적
   */
  if (purpose === '사업') dubai += 5;
  if (purpose === '취업') dubai += 4;
  if (purpose === '투자') dubai += 4;
  if (purpose === '자녀 교육') {
    dubai += 3;
    thailand += 2;
    vietnam += 1;
  }

  if (purpose === '은퇴') {
    vietnam += 4;
    thailand += 5;
    dubai += 1;
  }

  if (purpose === '새로운 라이프스타일') {
    vietnam += 3;
    thailand += 4;
    dubai += 2;
  }

  /*
   * 가족 구성
   */
  if (family === '자녀 1명' || family === '자녀 2명 이상') {
    dubai += 2;
    thailand += 2;
    vietnam += 1;
  }

  /*
   * 우선순위
   */
  if (priority === '세금·자산') {
    dubai += 4;
  }

  if (priority === '사업 기회') {
    dubai += 4;
  }

  if (priority === '교육') {
    dubai += 3;
    thailand += 2;
  }

  if (priority === '주거') {
    vietnam += 3;
    thailand += 3;
  }

  if (priority === '생활비') {
    vietnam += 4;
    thailand += 4;
  }

  if (priority === '의료·웰니스') {
    thailand += 5;
    vietnam += 3;
  }

  /*
   * 생활환경
   */
  if (lifestyle === '글로벌 대도시') {
    dubai += 5;
  }

  if (lifestyle === '휴양·리조트형') {
    thailand += 5;
    vietnam += 3;
  }

  if (lifestyle === '조용한 생활') {
    vietnam += 4;
    thailand += 3;
  }

  if (lifestyle === '가족 중심') {
    thailand += 3;
    dubai += 2;
  }

  if (lifestyle === '비즈니스 중심') {
    dubai += 5;
  }

  const scores = {
    dubai,
    vietnam,
    thailand
  };

  return Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .map(([country, score]) => ({
      country,
      score
    }));
}


function buildResultReasons() {
  const purpose = diagnosisAnswers[0];
  const priority = diagnosisAnswers[3];
  const lifestyle = diagnosisAnswers[4];
  if (document.documentElement.lang === 'en') {
    const en = value => ilacEnglish[value] || value;
    const context = `You selected ${en(purpose)}, prioritized ${en(priority)}, and prefer ${en(lifestyle)}.`;
    return {
      dubai: `${context} Explore Dubai's business, career, education and urban living options.`,
      vietnam: `${context} Compare housing, living costs and long-term planning across Vietnam's cities.`,
      thailand: `${context} Compare healthcare, family neighborhoods and long-term residency options in Thailand.`
    };
  }
  const context = `‘${purpose}’ 목적과 ‘${priority}’ 우선순위, ‘${lifestyle}’ 생활환경을 선택하셨습니다.`;
  return {
    dubai: `${context} 두바이의 사업·커리어·교육과 도시 생활 조건을 함께 살펴보세요.`,
    vietnam: `${context} 베트남의 도시별 주거와 생활비, 장기생활 준비 항목을 비교해 보세요.`,
    thailand: `${context} 태국의 의료·생활환경과 가족 생활권, 장기체류 준비 항목을 비교해 보세요.`
  };
}

function showDiagnosisResult() {
  const ranking = calculateCountryResult();

  const first = ranking[0].country;
  const second = ranking[1].country;

  const countryName = {
    dubai: 'Dubai',
    vietnam: 'Vietnam',
    thailand: 'Thailand'
  };

  quizProgress.textContent = '먼저 살펴볼 국가';
  quizBack.hidden = false;
  quizMeter.hidden = true;
  const reasons = buildResultReasons();

  quizQuestion.innerHTML = `
    <strong>${countryName[first]}</strong>와 <strong>${countryName[second]}</strong>을 먼저 살펴보세요.
  `;

  quizOptions.innerHTML = `
    <p class="quiz-result-description">
      ${reasons[first]}<br><br>${document.documentElement.lang === 'en' ? `Moving timeline: ${ilacEnglish[diagnosisAnswers[1]] || diagnosisAnswers[1]}. This is an exploration suggestion based on your answers. Residency eligibility and individual requirements must be checked separately.` : `이동 시기: ${diagnosisAnswers[1]}. 답변을 기준으로 한 탐색 제안이며, 체류 자격과 개인별 조건은 별도로 확인해야 합니다.`}
    </p>

    <button type="button" class="quiz-result-button" id="compare-countries">
      국가 비교하기
    </button>
  `;

  const compareButton =
    document.querySelector('#compare-countries');

  compareButton.addEventListener('click', () => {
    /*
     * 비교 페이지에서 진단 결과를 활용할 수 있도록 저장
     */
    try {
      localStorage.setItem('ilacDiagnosisResult', JSON.stringify({
        answers: diagnosisAnswers, ranking, reasons, createdAt: new Date().toISOString()
      }));
    } catch { /* Comparison also works without browser storage. */ }

    window.location.href = 'compare/index.html';
  });
}


quizBack?.addEventListener('click', () => {
  if (quizMeter.hidden) step = questions.length - 1;
  else step = Math.max(0, step - 1);
  renderQuiz();
});

const diagnosisOpen = document.querySelector('#diagnosis-open');

function startQuiz() {
  if (!quiz) return;
  step = 0;
  diagnosisAnswers = [];
  quiz.showModal();
  renderQuiz();
}
diagnosisOpen?.addEventListener('click', startQuiz);
document.querySelectorAll('[data-start-quiz]').forEach(button => button.addEventListener('click', startQuiz));
if (new URLSearchParams(location.search).get('restart') === '1') startQuiz();

/* =========================================================
   ESC / DIALOG BACKDROP
========================================================= */

document.querySelectorAll('dialog').forEach(dialogElement => {
  dialogElement.addEventListener('click', event => {
    const rect = dialogElement.getBoundingClientRect();
    const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
    if (event.target === dialogElement && outside) dialogElement.close();
  });
});

/* A single sliding indicator follows clicks and the current section. */
(() => {
  const nav = document.querySelector('#site-nav');
  if (!nav) return;
  const links = [...nav.querySelectorAll('a[href^="#"]')];
  const marker = document.createElement('span');
  marker.className = 'nav-indicator'; marker.setAttribute('aria-hidden','true');
  nav.append(marker);
  let active = links[0], hovered = null, lockedUntil = 0, pending = false;
  const move = link => {
    if (!link) return;
    active = link;
    links.forEach(item => item === link ? item.setAttribute('aria-current','location') : item.removeAttribute('aria-current'));
    draw(hovered || link);
  };
  const draw = link => {
    const rect = link.getBoundingClientRect(), base = nav.getBoundingClientRect();
    marker.style.width = `${rect.width}px`;
    marker.style.transform = `translateX(${rect.left-base.left}px)`;
  };
  links.forEach(link => {
    link.addEventListener('pointerenter', () => { hovered = link; draw(link); });
    link.addEventListener('focus', () => draw(link));
    link.addEventListener('blur', () => draw(hovered || active));
  });
  nav.addEventListener('pointerleave', () => { hovered = null; draw(active); });
  links.forEach(link => link.addEventListener('click', () => {
    lockedUntil = performance.now() + 2000;
    move(link);
  }));
  const update = () => {
    pending = false;
    if (performance.now() < lockedUntil) return;
    const offset = (document.querySelector('.site-header')?.offsetHeight || 80) + 100;
    let current = links[0];
    links.forEach(link => {
      const section = document.querySelector(link.hash);
      if (section && section.getBoundingClientRect().top <= offset) current = link;
    });
    move(current);
  };
  window.addEventListener('scroll', () => {
    if (!pending) { pending = true; requestAnimationFrame(update); }
  }, {passive:true});
  window.addEventListener('scrollend', () => { lockedUntil = 0; update(); });
  new ResizeObserver(() => move(active)).observe(nav);
  document.fonts?.ready.then(() => move(active));
  move(active); update();
})();
document.querySelector('#modal-cta')?.addEventListener('click', () => dialog.close());
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && header?.classList.contains('nav-open')) {
    header.classList.remove('nav-open');
    menu.setAttribute('aria-expanded','false');
    menu.setAttribute('aria-label','메뉴 열기');
    menu.textContent = '☰';
    menu.focus();
  }
});
document.addEventListener('click', event => {
  if (header && !header.contains(event.target)) {
    header.classList.remove('nav-open');
    menu?.setAttribute('aria-expanded','false');
    menu?.setAttribute('aria-label','메뉴 열기');
    if(menu) menu.textContent='☰';
  }
});

/* Class-specific introductions. Schedules and registration remain on iLAC. */
const classDetails = {
  business:{title:'두바이 사업과 취업',text:'법인과 비자, 현지 일자리와 네트워크를 준비할 때 확인할 내용을 소개합니다.',list:['사업가·취업 준비자를 위한 세션','법인·체류 경로와 전문가 상담 준비','무료 · 일정 확정 후 안내'],url:'https://goilac.com/academy/dubai-business'},
  education:{title:'국제학교와 교육환경',text:'교육과정과 입학 조건부터 통학과 주거까지 가족의 생활을 함께 살펴봅니다.',list:['자녀 교육과 가족 정착을 준비하는 분','IB·영국식·미국식 교육과정','학교별 조건 확인 · 입학 보장 없음','무료 · 일정 확정 후 안내'],url:'https://goilac.com/academy/dubai-education'},
  asset:{title:'해외 자산 이전과 세금',text:'이주 전 금융과 자산을 정리하고 세무 전문가에게 확인할 항목을 살펴봅니다.',list:['해외 이주와 자산 이전을 준비하는 분','자산·금융·세금 관련 질문 정리','무료 · 일정 확정 후 안내'],url:'https://goilac.com/academy/dubai-asset-tax'},
  property:{title:'두바이 주거와 부동산',text:'거주 목적과 투자 목적을 나누어 지역과 주거 선택에 필요한 내용을 살펴봅니다.',list:['두바이 주거와 부동산을 검토하는 분','생활권과 계약 전 확인사항','무료 · 일정 확정 후 안내'],url:'https://goilac.com/academy/dubai-property'},
  retirement:{title:'은퇴와 새로운 삶',text:'베트남과 태국의 생활환경을 비교하며 장기생활을 준비할 질문을 정리합니다.',list:['은퇴와 장기생활을 검토하는 분','주거·생활비·의료와 가족 생활','확정 일정과 세션은 Academy 전체에서 확인'],url:'https://goilac.com/academy'}
};
document.querySelectorAll('[data-class]').forEach(button => button.addEventListener('click', () => {
  const data = classDetails[button.dataset.class];
  openDetailDialog({...data,label:'ILAC ACADEMY'});
  const link = document.querySelector('#modal-cta');
  link.href = data.url;
  link.target = '_blank';
  link.rel = 'noopener';
  link.textContent = '일정·신청 안내 확인하기';
}));
document.querySelectorAll('[data-dialog]').forEach(button => button.addEventListener('click', () => {
  const link = document.querySelector('#modal-cta');
  link.href = '#contact'; link.removeAttribute('target'); link.removeAttribute('rel');
  link.textContent = '상담 문의하기';
}));

/* Compose a real email inquiry, with an explicit manual fallback. No fake submission. */
const consultation = document.querySelector('#consult-dialog');
document.querySelector('#contact-open')?.addEventListener('click', () => consultation.showModal());
let inquiryText = '';
document.querySelector('#consult-form')?.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  inquiryText = `iLAC 상담 문의\n\n이름: ${data.get('name')}\n회신 이메일: ${data.get('email')}\n관심 국가: ${data.get('country')}\n관심 분야: ${data.get('purpose')}\n\n문의 내용:\n${data.get('message')}`;
  document.querySelector('#consult-draft').hidden = false;
  document.querySelector('#consult-draft-text').value = inquiryText;
  document.querySelector('#consult-status').textContent = '이메일 앱에서 내용을 확인한 뒤 보내주세요. 앱이 열리지 않으면 아래 내용을 복사할 수 있습니다.';
  location.href = `mailto:admin@goilac.com?subject=${encodeURIComponent('iLAC 상담 문의')}&body=${encodeURIComponent(inquiryText)}`;
});
document.querySelector('#copy-inquiry')?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(inquiryText);
    document.querySelector('#consult-status').textContent = '문의 내용을 복사했습니다. 이메일에 붙여넣어 보내주세요.';
  } catch {
    const field = document.querySelector('#consult-draft-text'); field.focus(); field.select();
    document.querySelector('#consult-status').textContent = '문의 내용을 선택했습니다. 복사해서 이메일에 붙여넣어 주세요.';
  }
});
