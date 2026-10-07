'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';

const sharedLife = [
  ['주거', '임대 조건과 관리비, 학교·병원까지의 동선을 함께 비교합니다.'],
  ['생활비', '주거·교육·보험·교통 등 반복 지출과 초기 정착 비용을 나눠 계획합니다.'],
  ['의료', '생활권 주변 의료기관과 이용 언어, 가족에게 필요한 진료와 보험 범위를 살펴봅니다.'],
  ['현지생활', '은행·통신·교통과 생활 행정에 필요한 준비를 입주 일정에 맞춰 정리합니다.'],
];

const guides = {
  dubai: {
    name: 'DUBAI', title: <>사업하고, 일하고, 배우며<br />새로운 글로벌 라이프를 시작하는 곳</>, life: '두바이', purpose: '사업 · 취업', topics: ['사업 · 취업 · 교육 · 라이프스타일', '주거 · 의료 · 생활환경', '국제학교와 가족 정착'],
    options: [['사업 · 취업', '사업과 커리어, 거주 준비를 함께 검토합니다.'], ['장기 체류', '잠시 머무는 여행에서 나의 생활로.'], ['자녀 교육', '아이의 학교와 가족의 생활권을 함께.']],
    groups: [
      ['체류 준비', '사업 · 취업 · 비자 · 세금 · 법인설립', [['사업', '활동 업종과 고객, 운영 예산을 정리하고 필요한 허가와 현지 파트너를 검토합니다.'], ['취업', '희망 직무와 경력에 맞는 채용 경로를 살펴보고 근로 조건, 계약과 취업·체류 절차를 확인합니다.'], ['비자', '체류 목적에 맞는 신청 자격과 서류를 해당 기관의 최신 기준으로 확인합니다.'], ['세금', '한국과 현지의 거주 상태, 소득과 보유 자산을 정리해 전문가와 검토합니다.'], ['법인설립', '활동 업종과 운영 장소를 기준으로 설립 형태, 인허가와 운영 조건을 비교합니다.']]],
      ['생활 설계', '주거 · 생활비 · 의료 · 현지생활', sharedLife],
      ['가족과 교육', '교육 · 국제학교 · 가족생활', [['교육', '자녀의 나이와 언어 수준, 향후 진학 계획에 맞는 학습 환경을 비교합니다.'], ['국제학교', '교육과정·학비·입학 조건·통학 동선을 함께 확인합니다.'], ['가족생활', '가족 동반 준비와 자녀 적응, 의료·여가·커뮤니티를 하나의 생활권으로 살펴봅니다.']]],
      ['지역 선택', '왜 Dubai인가 · 부동산 · 답사', [['왜 Dubai인가', '사업·취업·교육의 우선순위를 정하고 도시 인프라와 예상 비용을 비교합니다.'], ['부동산', '실거주와 투자 목적을 구분하고 임대·소유 조건을 검토합니다.'], ['답사', '계약 전에 후보 주거와 학교, 실제 생활 동선을 직접 확인합니다.']]],
    ], faq: ['사업이나 취업을 위해 무엇부터 준비하나요?', '학교와 주거 중 무엇을 먼저 선택하나요?', '지역을 결정하기 전에 답사가 필요한가요?'],
  },
  vietnam: {
    name: 'VIETNAM', title: <>은퇴 후의 삶과<br />새로운 라이프스타일을 설계하는 곳</>, life: '베트남', purpose: '은퇴 · 새로운 삶', topics: ['은퇴 · 라이프스타일 · 교육', '주거 · 의료 · 생활환경', '교육과 가족 정착'],
    options: [['은퇴 · 새로운 삶', '여유로운 일상과 건강한 생활을 준비합니다.'], ['장기 체류', '잠시 머무는 여행에서 나의 생활로.'], ['자녀 교육', '아이의 학교와 가족의 생활권을 함께.']],
    groups: [
      ['체류 준비', '은퇴 · 장기체류 · 비자 · 세금', [['은퇴', '원하는 일상과 예산, 건강 관리, 한국과의 왕래를 함께 정리합니다.'], ['장기체류', '방문과 거주를 구분하고 체류 기간과 가족 동반 조건을 확인합니다.'], ['비자', '체류 목적에 맞는 신청 자격과 서류를 해당 기관의 최신 기준으로 확인합니다.'], ['세금', '한국과 현지의 거주 상태, 소득과 보유 자산을 정리해 전문가와 검토합니다.']]],
      ['생활 설계', '주거 · 생활비 · 의료 · 현지생활', sharedLife],
      ['가족과 교육', '교육 · 국제학교', [['교육', '자녀의 나이와 언어 수준, 향후 진학 계획에 맞는 학습 환경을 비교합니다.'], ['국제학교', '교육과정·학비·입학 조건·통학 동선을 함께 확인합니다.']]],
      ['지역 선택', '지역별 생활환경 · 부동산', [['지역별 생활환경', '호찌민·하노이·다낭 등 후보 지역을 실제 생활 동선으로 비교합니다.'], ['부동산', '실거주와 투자 목적을 구분하고 임대·소유 조건을 검토합니다.']]],
    ], faq: ['은퇴 후 장기체류는 무엇부터 준비하나요?', '학교와 주거 중 무엇을 먼저 선택하나요?', '지역을 결정하기 전에 답사가 필요한가요?'],
  },
  thailand: {
    name: 'THAILAND', title: <>여유로운 생활과<br />장기 체류의 선택지를 살피는 곳</>, life: '태국', purpose: '은퇴 · 웰니스', topics: ['은퇴 · 웰니스 · 커뮤니티', '주거 · 의료 · 생활환경', '교육과 가족 정착'],
    options: [['은퇴 · 웰니스', '여유로운 일상과 건강한 생활을 준비합니다.'], ['장기 체류', '잠시 머무는 여행에서 나의 생활로.'], ['자녀 교육', '아이의 학교와 가족의 생활권을 함께.']],
    groups: [
      ['체류 준비', '은퇴 · 장기체류 · 비자 · 세금', [['은퇴', '원하는 일상과 예산, 건강 관리, 한국과의 왕래를 함께 정리합니다.'], ['장기체류', '방문과 거주를 구분하고 체류 기간과 가족 동반 조건을 확인합니다.'], ['비자', '체류 목적에 맞는 신청 자격과 서류를 해당 기관의 최신 기준으로 확인합니다.'], ['세금', '한국과 현지의 거주 상태, 소득과 보유 자산을 정리해 전문가와 검토합니다.']]],
      ['생활 설계', '주거 · 생활비 · 의료 · 현지생활', sharedLife],
      ['가족과 교육', '교육 · 국제학교', [['교육', '자녀의 나이와 언어 수준, 향후 진학 계획에 맞는 학습 환경을 비교합니다.'], ['국제학교', '교육과정·학비·입학 조건·통학 동선을 함께 확인합니다.']]],
      ['지역 선택', '지역별 생활환경 · 부동산', [['지역별 생활환경', '방콕·치앙마이·푸껫 등 후보 지역을 실제 생활 동선으로 비교합니다.'], ['부동산', '실거주와 투자 목적을 구분하고 임대·소유 조건을 검토합니다.']]],
    ], faq: ['은퇴 후 장기체류는 무엇부터 준비하나요?', '학교와 주거 중 무엇을 먼저 선택하나요?', '지역을 결정하기 전에 답사가 필요한가요?'],
  },
};

function Header({ open, setOpen }) { return <header className={open ? 'nav-open' : ''}><a className="logo" href="/" aria-label="iLAC 홈">ILAC <small>IMMIGRATION LIFE<br />ASSISTANCE COMPANY</small><span className="brand-logo-mark" aria-hidden="true"><img src="/ilac-logo.png" alt="" /></span></a><nav>{[['/#about', 'ILAC 소개'], ['/#solutions', '솔루션'], ['/#countries', '국가 전략'], ['#academy', 'ACADEMY'], ['/#contact', '문의하기']].map(([href, label]) => <a href={href} key={href} onClick={() => setOpen(false)}>{label}</a>)}</nav><a className="nav-cta" href="/#contact">상담 신청　↗</a><button className="menu" aria-label={open ? '메뉴 닫기' : '메뉴 열기'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? '×' : '☰'}</button></header>; }

export default function CountryGuide() {
  const { country } = useParams();
  const guide = guides[country] || guides.thailand;
  const [menuOpen, setMenuOpen] = useState(false);
  return <div className="thailand-page"><Header open={menuOpen} setOpen={setMenuOpen} /><main><section className="countries thailand-opening"><a className="back-link" href="/#countries">← 국가 비교로 돌아가기</a><article className={`country-panel active ${country}`}><div className="country-image" role="img" aria-label={`${guide.life}의 생활을 표현한 풍경`} /><div><p>{guide.name}</p><h1>{guide.title}</h1><ul>{guide.topics.map(topic => <li key={topic}>{topic}</li>)}</ul><div className="opening-actions"><a className="primary" href="/#contact">{guide.life} 상담하기　↗</a><a className="text-link" href="#preparation">준비 항목 살펴보기　↓</a></div></div></article></section><section className="purpose-section"><p className="label">YOUR LIFE IN {guide.name}</p><h2>{guide.life}에서 어떤 삶을<br /><em>생각하시나요?</em></h2><div className="purpose-options">{guide.options.map(([title, text], index) => <a href={`#${['stay', 'life', 'family'][index]}`} key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p><b>{index === 0 ? '체류 준비 보기' : index === 1 ? '생활 설계 보기' : '교육 준비 보기'} →</b></a>)}</div></section><section className="preparation-section" id="preparation"><div className="preparation-heading"><p className="label">{guide.name} GUIDE</p><h2>새로운 삶을 위한<br /><em>네 가지 준비.</em></h2><p>관심 있는 항목을 열어 준비할 내용을 확인해 보세요.</p></div><div className="preparation-grid">{guide.groups.map(([title, subtitle, entries], index) => <article className="preparation-group" id={['stay', 'life', 'family', 'region'][index]} key={title}><p className="label">0{index + 1} / {guide.name}</p><h3>{title}</h3><p className="group-subtitle">{subtitle}</p>{entries.map(([label, text]) => <details key={label}><summary>{label}<span aria-hidden="true">+</span></summary><p>{text}</p></details>)}</article>)}</div></section><section className="process-section"><p className="label">GLOBAL SETTLEMENT PROCESS</p><h2>목적부터 정착까지,<br /><em>하나의 계획으로.</em></h2><div className="process-steps">{[['목적을 찾고', '가족 구성·이동 시점·예산을 정리합니다.'], ['지역을 비교하고', '체류·주거·학교와 생활환경을 살펴봅니다.'], ['계획을 만들고', '답사와 전문가 검토로 준비를 구체화합니다.'], ['현지에 정착합니다', '입주·행정·초기 생활 준비를 연결합니다.']].map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section><section className="faq"><div><p className="label">ASK ILAC</p><h2>{guide.life}에서의 삶,<br />궁금한 것부터.</h2><p>상담 전 자주 확인하는 질문을 살펴보세요.</p><a className="text-link" href="/#contact">전문가에게 질문하기　↗</a></div><div className="thailand-faq">{guide.faq.map(question => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>고객의 목적과 가족 구성, 예상 시점에 맞춰 필요한 준비와 선택지를 함께 확인합니다.</p></details>)}</div></section><section className="academy" id="academy"><div className="section-head"><p className="label">ILAC ACADEMY</p><h2>배우고, 질문하고,<br /><em>준비하세요.</em></h2><a href="/#academy">전체 Academy 보기　↗</a></div><div className="academy-cards">{[['01', `${guide.name[0] + guide.name.slice(1).toLowerCase()} Life<br />& Preparation`, `${guide.life} 생활과 장기체류 준비`], ['02', 'Global<br />Education', '국제학교와 가족 생활권 비교'], ['03', 'Asset<br />Transfer', '이주 전 자산·금융 준비']].map(([number, title, text]) => <article key={number}><span>PREPARATION TOPIC · {number}</span><h3 dangerouslySetInnerHTML={{ __html: title }} /><p>{text}</p><a href="/#academy">Academy 안내　→</a></article>)}</div></section><section className="contact"><p className="label">BEGIN YOUR LIFE IN {guide.name}</p><h2>{guide.life}에서의 새로운 삶,<br /><em>혼자 준비하지 마세요.</em></h2><p>목적과 예상 시점, 가족 구성부터 함께 정리합니다.</p><a className="primary" href="/#contact">{guide.life} 상담 시작하기　→</a></section></main><footer><b className="footer-brand" aria-label="iLAC">ILAC<span className="brand-logo-mark" aria-hidden="true"><img src="/ilac-logo.png" alt="" /></span></b><span>IMT GROUP</span><p>© 2026 IMT GROUP. All rights reserved.</p></footer></div>;
}
