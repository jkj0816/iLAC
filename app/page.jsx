'use client';

import { useState } from 'react';

const details = {
  settle: { label: 'SETTLEMENT & ADMIN', title: '정착 · 행정', text: '두바이에 도착해 생활을 시작하는 데 필요한 절차를 고객 일정에 맞춰 연결합니다.', list: ['비자·거주 관련 절차', 'Emirates ID', '은행·통신·DEWA', '관공서 업무'] },
  property: { label: 'HOME & LIVING', title: '주거 · 자산', text: '집을 구하는 일부터 실제 생활을 시작하는 일까지, 현지 파트너와 함께 선택지를 검토합니다.', list: ['주거 선택 및 계약', '입주·생활환경 세팅', '지역·생활권 비교', '자산·부동산 전문 서비스'] },
  education: { label: 'GLOBAL EDUCATION', title: '자녀 교육', text: '학교만 따로 고르지 않습니다. 교육과정과 가족의 생활권을 함께 설계합니다.', list: ['IB · British · American Curriculum', 'KHDA 평가와 교육환경', '입학 가능 시점과 대기 여부', '학교별 입학 절차'] },
  business: { label: 'BUSINESS & INVESTMENT', title: '비즈니스 · 투자', text: '두바이에서 새로운 사업과 자산을 준비할 때 필요한 현지 전문 네트워크를 연결합니다.', list: ['법인 및 사업 셋업', '상업용 부동산', '현지 비즈니스 네트워크', '금융·세무 전문가 연결'] },
  dubai: { label: 'UAE · DUBAI', title: 'Dubai 전략', text: '사업·취업·교육·라이프스타일이 만나는 Dubai의 선택지를 목적에 맞춰 검토합니다.', list: ['비자와 거주 계획', '부동산·주거 목적 분리', '국제학교와 생활권', '현지 답사와 정착 일정'] },
  vietnam: { label: 'VIETNAM', title: 'Vietnam 전략', text: '은퇴와 새로운 라이프스타일을 고려하는 고객을 위한 장기체류·생활환경 정보를 연결합니다.', list: ['장기체류와 비자', '지역별 주거와 생활비', '의료와 생활환경', '교육·국제학교'] },
  thailand: { label: 'THAILAND', title: 'Thailand 전략', text: '여유로운 생활, 웰니스, 장기 체류를 위한 조건과 생활환경을 비교합니다.', list: ['은퇴·장기체류', '주거와 의료', '생활환경과 커뮤니티', '교육과 가족 정착'] },
  academy: { label: 'ILAC ACADEMY', title: '배우고 준비하는 플랫폼', text: '각 클래스에서는 강의 일정, 대상, 강사, 사전 질문과 Q&A를 제공합니다.', list: ['Dubai Business & Employment', 'Global Education', 'Asset Transfer', 'Retirement', 'Dubai Real Estate'] },
  contact: { label: 'CONSULTATION', title: '상담을 시작해보세요', text: '목적과 예상 시점, 가족 구성, 가장 궁금한 내용을 남겨주시면 적합한 상담 경로를 안내합니다.', list: ['해외 정착 · 거주', '주거 · 자산 · 교육', '사업 · 투자 · 법인', '국가별 실행 전략'] },
};

const questions = [
  ['해외 진출의 가장 큰 목적은 무엇인가요?', ['사업', '취업', '은퇴', '자녀 교육', '투자', '새로운 라이프스타일']],
  ['언제쯤 이동을 생각하시나요?', ['6개월 이내', '1년 이내', '1~3년', '장기적으로 검토']],
  ['가족 구성은 어떻게 되나요?', ['1인', '부부', '자녀 1명', '자녀 2명 이상']],
  ['가장 중요한 것은 무엇인가요?', ['세금·자산', '사업 기회', '교육', '주거', '생활비', '의료·웰니스']],
  ['선호하는 생활환경을 선택해 주세요.', ['글로벌 대도시', '휴양·리조트형', '조용한 생활', '가족 중심', '비즈니스 중심']],
];

const english = {
  about: 'ABOUT ILAC', solutions: 'SOLUTIONS', countries: 'COUNTRY STRATEGY', contact: 'CONTACT', cta: 'START A CONSULTATION　↗',
  hero: <>Design your life<br /><em>abroad.</em></>, heroText: 'Compare countries by purpose and connect every step—from preparation to a confident life on the ground.', find: 'FIND YOUR COUNTRY　→', ask: 'ASK AN EXPERT　↗',
  intro: <>Turn complex relocation<br />into <em>one plan.</em></>, introText: 'ILAC connects country strategy, visas, education, housing, assets and daily life around one purpose—without making you navigate them separately.',
  solutionsTitle: <>Find the right<br />information, faster.</>, solutionsText: 'The hub presents only the key areas first. Open a topic whenever you need the practical details.',
  countriesTitle: <>Your purpose changes<br /><em>the right destination.</em></>, diagnosis: <>Not sure where<br />to begin?</>, diagnosisText: 'Five questions point you to the countries, content and consultation route that fit your priorities.', diagnosisCta: 'START THE 3-MINUTE CHECK　→', noDetails: 'NO PERSONAL DETAILS REQUIRED',
  academy: <>Learn, ask, and<br /><em>get ready.</em></>, classes: 'VIEW ALL CLASSES　↗', faq: <>When search alone<br />is not enough.</>, faqText: 'Questions lead naturally to expert answers, relevant content, Academy sessions and consultation.', contactTitle: <>A new life deserves<br /><em>more than a solo plan.</em></>, contactText: 'A consultation is the first step to understanding what is possible.', begin: 'BEGIN A CONSULTATION　→',
};

export default function Home() {
  const [language, setLanguage] = useState('ko');
  const [menuOpen, setMenuOpen] = useState(false);
  const [country, setCountry] = useState('dubai');
  const [openFaq, setOpenFaq] = useState(null);
  const [detail, setDetail] = useState(null);
  const [quizOpen, setQuizOpen] = useState(false);
  const [step, setStep] = useState(0);
  const t = language === 'en' ? english : null;
  const openQuiz = () => { setStep(0); setQuizOpen(true); };

  return <>
    <header className={menuOpen ? 'nav-open' : ''}>
      <a className="logo" href="#top">ILAC <small>IMMIGRATION LIFE<br />ASSISTANCE COMPANY</small></a>
      <nav>{[['#about', t?.about || 'ILAC 소개'], ['#solutions', t?.solutions || '솔루션'], ['#countries', t?.countries || '국가 전략'], ['#academy', 'ACADEMY'], ['#contact', t?.contact || '문의하기']].map(([href, label]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>
      <div className="header-actions"><div className="language-switcher" role="group" aria-label="언어 선택"><button className={language === 'ko' ? 'lang active' : 'lang'} onClick={() => setLanguage('ko')} aria-pressed={language === 'ko'}>KO</button><span>/</span><button className={language === 'en' ? 'lang active' : 'lang'} onClick={() => setLanguage('en')} aria-pressed={language === 'en'}>EN</button></div><a className="nav-cta" href="#contact">{t?.cta || '상담 신청　↗'}</a></div>
      <button className="menu" aria-label="메뉴 열기" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? '×' : '☰'}</button>
    </header>
    <main id="top">
      <section className="hero"><div className="hero-shade" /><div className="hero-copy"><p>GLOBAL SETTLEMENT PLATFORM</p><h1>{t?.hero || <>해외에서의 삶을<br /><em>설계합니다.</em></>}</h1><span>{t?.heroText || '목적에 맞는 국가를 비교하고, 준비부터 현지 정착까지 필요한 모든 과정을 연결합니다.'}</span><div><a className="primary" href="#diagnosis">{t?.find || '내게 맞는 국가 찾기　→'}</a><a className="secondary" href="#contact">{t?.ask || '전문가에게 질문하기　↗'}</a></div></div></section>
      <section className="intro" id="about"><p className="label">ILAC IN ONE VIEW</p><div><h2>{t?.intro || <>복잡한 해외 정착을<br /><em>하나의 계획</em>으로.</>}</h2><p>{t?.introText || 'ILAC은 국가·비자·교육·주거·자산·생활을 따로 찾게 하지 않습니다. 고객의 목적을 기준으로 필요한 전문가와 현지 실행을 연결합니다.'}</p></div><div className="numbers">{['목적을 찾고', '국가를 비교하고', '계획을 만들고', '현지에 정착합니다'].map((label, index) => <article key={label}><b>0{index + 1}</b><span>{label}</span></article>)}</div></section>
      <section className="solutions" id="solutions"><div className="section-head"><p className="label">CORE SOLUTIONS</p><h2>{t?.solutionsTitle || <>필요한 정보만<br />빠르게 찾아보세요.</>}</h2><p>{t?.solutionsText || '메인에서는 핵심 분야만 요약해 보여드리고, 세부 내용은 필요한 항목에서 바로 확인할 수 있습니다.'}</p></div><div className="solution-grid">{[['settle', '정착 · 행정', '비자, 거주, 은행, 통신, 초기 생활 세팅'], ['property', '주거 · 자산', '주거 선택, 현지 부동산, 생활권, 계약 검토'], ['education', 'Global Education', '국제학교, 교육과정, 가족의 생활권 설계'], ['business', '비즈니스 · 투자', '법인, 사업 셋업, 현지 네트워크, 전문가 연결']].map(([key, title, text], index) => <button key={key} onClick={() => setDetail(details[key])}><span>0{index + 1}</span><b>{title}</b><p>{text}</p><i>→</i></button>)}</div></section>
      <section className="countries" id="countries"><div className="section-head"><p className="label">COUNTRY STRATEGY</p><h2>{t?.countriesTitle || <>목적에 따라<br /><em>선택도 달라집니다.</em></>}</h2><a href="#diagnosis">{t?.find || '내 목적에 맞는 국가 찾기　→'}</a></div><div className="country-tabs" role="tablist">{['dubai', 'vietnam', 'thailand'].map(name => <button key={name} className={country === name ? 'active' : ''} onClick={() => setCountry(name)}>{name.toUpperCase()}</button>)}</div><CountryPanel active={country} onOpen={setDetail} /></section>
      <section className="diagnosis" id="diagnosis"><div><p className="label">PERSONAL DIAGNOSIS</p><h2>{t?.diagnosis || <>아직 어디로 갈지<br />정하지 못했다면.</>}</h2></div><div><p>{t?.diagnosisText || '5가지 질문을 통해 당신의 목적과 우선순위에 맞는 국가·콘텐츠·상담 경로를 안내합니다.'}</p><button className="primary" onClick={openQuiz}>{t?.diagnosisCta || '3분 진단 시작하기　→'}</button><small>{t?.noDetails || '결과 확인 전 개인정보 입력 없음'}</small></div></section>
      <section className="academy" id="academy"><div className="section-head"><p className="label">ILAC ACADEMY</p><h2>{t?.academy || <>배우고, 질문하고,<br /><em>준비하세요.</em></>}</h2><a href="#contact">{t?.classes || '전체 클래스 보기　↗'}</a></div><div className="academy-cards">{[['UPCOMING CLASS · 01', <>Dubai Business<br />& Employment</>, '두바이에서 사업하고 일하기 전에 알아야 할 것'], ['UPCOMING CLASS · 02', <>Global<br />Education</>, 'Dubai·Vietnam·Thailand 교육환경 비교'], ['UPCOMING CLASS · 03', <>Asset<br />Transfer</>, '해외 이주 전 자산이전과 금융 준비']].map(([eyebrow, title, text]) => <article key={eyebrow}><span>{eyebrow}</span><h3>{title}</h3><p>{text}</p><button onClick={() => setDetail(details.academy)}>자세히 보기　→</button></article>)}</div></section>
      <section className="faq"><div><p className="label">ASK ILAC</p><h2>{t?.faq || <>검색만으로 답을 찾기<br />어려울 때.</>}</h2><p>{t?.faqText || '질문 → 전문가 답변 → 관련 콘텐츠 → Academy → 상담으로 연결됩니다.'}</p><a className="primary" href="#contact">{t?.ask || '전문가에게 질문하기　→'}</a></div><div className="accordion"><Faq open={openFaq === 0} onClick={() => setOpenFaq(openFaq === 0 ? null : 0)} q="해외 이주를 결정하기 전 무엇부터 확인해야 하나요?" a="이주 목적, 가족 구성, 시점, 교육·주거·사업 등 우선순위를 정리한 뒤 국가와 실행 계획을 비교합니다." /><Faq open={openFaq === 1} onClick={() => setOpenFaq(openFaq === 1 ? null : 1)} q="학교를 먼저 정할까요, 주거를 먼저 정할까요?" a="자녀의 교육과 가족의 생활권은 함께 검토해야 합니다. 학교·통학·주거·생활 인프라를 하나의 계획으로 봅니다." /><Faq open={openFaq === 2} onClick={() => setOpenFaq(openFaq === 2 ? null : 2)} q="두바이 답사는 언제 진행하는 것이 좋을까요?" a="국가와 목적의 1차 검토 후, 계약 전에 지역·주거·학교·생활 동선을 직접 비교하는 단계로 진행합니다." /></div></section>
      <section className="contact" id="contact"><p className="label">BEGIN WITH YOUR PURPOSE</p><h2>{t?.contactTitle || <>새로운 삶을 시작하는 일,<br /><em>혼자 준비하지 마세요.</em></>}</h2><p>{t?.contactText || '상담은 가능성을 확인하는 첫 단계입니다.'}</p><button className="primary" onClick={() => setDetail(details.contact)}>{t?.begin || '상담 시작하기　→'}</button></section>
    </main>
    <footer><b>ILAC</b><span>IMT GROUP</span><p>© 2026 IMT GROUP. All rights reserved.</p></footer>
    {detail && <DetailDialog detail={detail} onClose={() => setDetail(null)} />}
    {quizOpen && <QuizDialog step={step} setStep={setStep} onClose={() => setQuizOpen(false)} />}
  </>;
}

function CountryPanel({ active, onOpen }) {
  const content = { dubai: ['UAE · DUBAI', <>사업하고, 일하고, 배우며<br />새로운 글로벌 라이프를 시작하는 곳</>, ['사업 · 취업 · 법인', '글로벌 인프라 · 생활환경', '국제학교 · 가족 생활권']], vietnam: ['VIETNAM', <>은퇴 후의 삶과<br />새로운 라이프스타일을 설계하는 곳</>, ['장기체류 · 생활비 · 주거', '교육 · 지역별 생활환경', '현지 생활 준비']], thailand: ['THAILAND', <>여유로운 생활과<br />장기 체류의 선택지를 살피는 곳</>, ['은퇴 · 웰니스 · 커뮤니티', '주거 · 의료 · 생활환경', '교육과 가족 정착']] };
  const [eyebrow, title, items] = content[active];
  return <article className={`country-panel active ${active}`}><div className="country-image" /><div><p>{eyebrow}</p><h3>{title}</h3><ul>{items.map(item => <li key={item}>{item}</li>)}</ul><button onClick={() => onOpen(details[active])}>{active[0].toUpperCase() + active.slice(1)} 전략 자세히 보기　→</button></div></article>;
}

function Faq({ open, onClick, q, a }) { return <><button onClick={onClick} aria-expanded={open}>{q}<i>{open ? '−' : '+'}</i></button><div className={open ? 'open' : ''}>{a}</div></>; }

function DetailDialog({ detail, onClose }) { return <dialog open id="detail-dialog" onCancel={onClose}><button className="close" aria-label="닫기" onClick={onClose}>×</button><p className="label">{detail.label}</p><h2>{detail.title}</h2><p>{detail.text}</p><ul>{detail.list.map(item => <li key={item}>{item}</li>)}</ul><a className="primary" href="#contact" onClick={onClose}>상담 신청하기　→</a></dialog>; }

function QuizDialog({ step, setStep, onClose }) { const done = step === questions.length; const [question, options] = questions[Math.min(step, questions.length - 1)]; return <dialog open id="quiz-dialog" onCancel={onClose}><button className="close" aria-label="닫기" onClick={onClose}>×</button><p className="label">{done ? 'YOUR RESULT' : `0${step + 1} / 05`}</p><h2>{done ? <>당신에게는 Dubai와<br />Vietnam을 우선 비교해보는 것이 좋습니다.</> : question}</h2><div className="quiz-options">{done ? <button onClick={onClose}>국가 비교하기　→</button> : options.map(option => <button key={option} onClick={() => setStep(step + 1)}>{option}</button>)}</div></dialog>; }
