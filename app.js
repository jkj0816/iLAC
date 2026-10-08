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
  'nav a:nth-child(1)': 'ABOUT ILAC',
  'nav a:nth-child(2)': 'SOLUTIONS',
  'nav a:nth-child(3)': 'COUNTRY STRATEGY',
  'nav a:nth-child(5)': 'CONTACT',

  '.nav-cta': 'START A CONSULTATION　↗',

  '.hero h1': 'Design your life<br><em>abroad.</em>',

  '.hero-copy>span':
    'Compare countries by purpose and connect every step—from preparation to a confident life on the ground.',

  '.hero-copy .primary': 'FIND YOUR COUNTRY　→',
  '.hero-copy .secondary': 'ASK AN EXPERT　↗',

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
    'FIND YOUR COUNTRY　→',

  '.diagnosis h2':
    'Not sure where<br>to begin?',

  '.diagnosis>div:last-child>p':
    'Five questions point you to the countries, content and consultation route that fit your priorities.',

  '.diagnosis .primary':
    'START THE 3-MINUTE CHECK　→',

  '.diagnosis small':
    'NO PERSONAL DETAILS REQUIRED',

  '.academy .section-head h2':
    'Learn, ask, and<br><em>get ready.</em>',

  '.academy .section-head a':
    'VIEW ALL CLASSES　↗',

  '.faq h2':
    'When search alone<br>is not enough.',

  '.faq>div>p':
    'Questions lead naturally to expert answers, relevant content, Academy sessions and consultation.',

  '.faq .primary':
    'ASK AN EXPERT　→',

  '.contact h2':
    'A new life deserves<br><em>more than a solo plan.</em>',

  '.contact>p:not(.label)':
    'A consultation is the first step to understanding what is possible.',

  '.contact .primary':
    'BEGIN A CONSULTATION　→'
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
   CONTACT
========================================================= */

const contactButton = document.querySelector('#contact-open');

if (contactButton) {
  contactButton.addEventListener('click', () => {
    const data = {
      label: 'CONSULTATION',
      title: '상담을 시작해보세요',
      text: '목적과 예상 시점, 가족 구성, 가장 궁금한 내용을 남겨주시면 적합한 상담 경로를 안내합니다.',
      list: [
        '해외 정착 · 거주',
        '주거 · 자산 · 교육',
        '사업 · 투자 · 법인',
        '국가별 실행 전략'
      ]
    };

    openDetailDialog(data);
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
      '새로운 라이프스타일'
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


function renderQuiz() {
  if (!quizProgress || !quizQuestion || !quizOptions) return;

  quizProgress.textContent = `0${step + 1} / 05`;
  quizQuestion.textContent = questions[step].question;

  quizOptions.innerHTML = questions[step].options
    .map(option => `<button type="button">${option}</button>`)
    .join('');

  quizOptions.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
      diagnosisAnswers[step] = button.textContent;

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


function showDiagnosisResult() {
  const ranking = calculateCountryResult();

  const first = ranking[0].country;
  const second = ranking[1].country;

  const countryName = {
    dubai: 'Dubai',
    vietnam: 'Vietnam',
    thailand: 'Thailand'
  };

  quizProgress.textContent = 'YOUR RESULT';

  quizQuestion.innerHTML = `
    당신에게는 <strong>${countryName[first]}</strong>와<br>
    <strong>${countryName[second]}</strong>을<br>
    우선 비교해보는 것이 좋습니다.
  `;

  quizOptions.innerHTML = `
    <p class="quiz-result-description">
      답변하신 목적과 우선순위를 기준으로
      ILAC이 비교가 필요한 국가를 추천했습니다.
    </p>

    <button type="button" class="quiz-result-button" id="compare-countries">
      국가 비교하기　→
    </button>
  `;

  const compareButton =
    document.querySelector('#compare-countries');

  compareButton.addEventListener('click', () => {
    /*
     * 비교 페이지에서 진단 결과를 활용할 수 있도록 저장
     */
    localStorage.setItem(
      'ilacDiagnosisResult',
      JSON.stringify({
        answers: diagnosisAnswers,
        ranking
      })
    );

    window.location.href = 'compare/index.html';
  });
}


const diagnosisOpen = document.querySelector('#diagnosis-open');

if (diagnosisOpen && quiz) {
  diagnosisOpen.addEventListener('click', () => {
    step = 0;
    diagnosisAnswers = [];

    renderQuiz();
    quiz.showModal();
  });
}


/* =========================================================
   ESC / DIALOG BACKDROP
========================================================= */

document.querySelectorAll('dialog').forEach(dialogElement => {
  dialogElement.addEventListener('click', event => {
    if (event.target === dialogElement) {
      dialogElement.close();
    }
  });
});