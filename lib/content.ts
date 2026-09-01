// 이력서 콘텐츠 (한국어 + 영어). 사실 기반으로만 작성한다.
// 전화번호는 이 파일에 넣지 않는다 -> 배포 환경변수 NEXT_PUBLIC_PHONE 로만 노출.

export type Lang = "ko" | "en";
export type L = Record<Lang, string>;
export type LList = Record<Lang, string[]>;

export const PROFILE = {
  name: { ko: "박형민", en: "HyeongMin Park" },
  role: { ko: "Forward Deployed Engineer", en: "Forward Deployed Engineer" },
  taglineLead: {
    ko: "AI 제품을 문제 정의부터 배포와 운영까지 완성하는",
    en: "Taking AI products from problem to production.",
  },
  taglineRole: {
    ko: "Forward Deployed Engineer",
    en: "Forward Deployed Engineer",
  },
  subtagline: {
    ko: "3년간 프론트엔드 개발자로 일하며 상용 제품과 시제품을 개발했고, 지금은 LLM 기반 제품을 백엔드부터 프론트엔드, 데이터, 측정까지 직접 만들고 운영하고 있습니다.",
    en: "For 3 years I built commercial and prototype products as a frontend engineer. Now I build and run LLM-based products end to end: backend, frontend, data, and measurement.",
  },
  email: "lg3319@gmail.com",
  location: { ko: "서울, 대한민국", en: "Seoul, South Korea" },
  github: "https://github.com/hyeongmin-park1",
  githubHandle: "hyeongmin-park1",
  linkedin: "", // 만들면 URL 채우기
};

export const ABOUT: L = {
  ko: "고객의 도메인에 깊이 들어가 문제를 정의하고, LLM 제품을 스펙부터 배포와 운영까지 혼자 완성합니다. 티맥스클라우드에서 3년간 상용 제품과 시제품의 프론트엔드를 개발하며 엔지니어링 기본기를 다졌고, 지금은 백엔드(FastAPI), 프론트(Next.js), 데이터(Supabase), LLM 오케스트레이션(Gemini, Claude, OpenAI)까지 한 사람이 관통하는 방식으로 실제 서비스를 만들고 운영합니다. 단순 구현을 넘어 측정 방법론을 설계하고 시스템을 문서화하는 것을 강점으로 삼습니다.",
  en: "I embed in a customer's domain, define the real problem, and take LLM products from spec to production on my own. Three years of building frontends for commercial and prototype products at Tmax Cloud gave me an engineering foundation; today I ship and operate real services spanning backend (FastAPI), frontend (Next.js), data (Supabase), and LLM orchestration (Gemini, Claude, OpenAI). Beyond implementation, my edge is designing measurement methodology and documenting the systems I build.",
};

export const STRENGTHS: { title: L; body: L }[] = [
  {
    title: { ko: "도메인 몰입", en: "Domain immersion" },
    body: {
      ko: "고객 현장의 문제를 직접 정의하고, PR 미디어 모니터링 같은 낯선 도메인도 빠르게 이해해 제품으로 옮깁니다.",
      en: "I define problems on the ground and turn unfamiliar domains, like PR media monitoring, into working product fast.",
    },
  },
  {
    title: { ko: "풀스택 실행", en: "Full-stack execution" },
    body: {
      ko: "백엔드, 프론트, 데이터, 인프라를 혼자 엔드투엔드로 만들고 실제로 배포, 운영합니다.",
      en: "I build backend, frontend, data, and infra end-to-end, then actually deploy and operate them.",
    },
  },
  {
    title: { ko: "측정 방법론 설계", en: "Measurement by design" },
    body: {
      ko: "무엇을 어떻게 측정할지 방법론부터 설계하고, 결과를 검증하고 문서로 남깁니다.",
      en: "I design how success is measured, validate the numbers, and document the reasoning.",
    },
  },
];

export type Project = {
  name: string;
  url?: string;
  urlLabel?: string;
  period: L;
  meta?: L;
  role?: L;
  oneLiner: L;
  problem?: L;
  bullets: LList;
  stack: string[];
  awards?: L;
  flagship?: boolean;
};

export const FLAGSHIP: Project = {
  name: "SK Media Watch",
  url: "https://skmediawatch.com",
  urlLabel: "skmediawatch.com",
  period: { ko: "2026 - 진행 중", en: "2026 - present" },
  role: { ko: "Forward Deployed Engineer (단독, 엔드투엔드)", en: "Forward Deployed Engineer (solo, end-to-end)" },
  oneLiner: {
    ko: "SK 그룹 PR팀을 위한 미디어 모니터링 에이전트",
    en: "A media monitoring agent for SK Group's PR team",
  },
  problem: {
    ko: "SK PR팀은 보도자료 배포 후 뉴스, 블로그, 유튜브 반응을 사람이 직접 훑어야 했고, 시간이 많이 들고 리스크를 놓치기 쉬웠습니다.",
    en: "After each press release, SK's PR team had to manually track reactions across news, blogs, and YouTube, which was slow and easy to miss risks.",
  },
  bullets: {
    ko: [
      "보도자료를 기준으로 뉴스, 블로그, 유튜브를 자동 수집하고, LLM 2단계 필터로 관련 기사만 선별",
      "각 기사의 톤, 프레임, 리스크를 LLM으로 분석해 종합 리포트를 자동 생성",
      "생성형 AI 반영도(GEO) 측정 기능을 설계, 구축 - 보도자료 핵심 메시지가 AI 답변에 얼마나 반영되는지 배포 전후로 측정",
      "실시간 모니터링(스케줄러 + 텔레그램 알림)으로 부정 기사를 사건 단위 주제로 묶어 중복 없이 알림",
      "백엔드(FastAPI), 프론트(Next.js), DB(Supabase), LLM 오케스트레이션을 혼자 엔드투엔드로 구현, 배포, 운영",
    ],
    en: [
      "Auto-collects news, blogs, and YouTube against a press release, then narrows to relevant articles with a two-stage LLM filter",
      "Analyzes each article's tone, frame, and risk with an LLM and auto-generates a consolidated report",
      "Designed and built a generative-AI visibility (GEO) measurement: how much a release's key messages surface in AI answers, measured before and after publication",
      "Real-time monitoring (scheduler + Telegram alerts) groups negative coverage into event-level topics and dedupes alerts",
      "Implemented, deployed, and operates the whole stack solo: backend (FastAPI), frontend (Next.js), DB (Supabase), and LLM orchestration",
    ],
  },
  stack: ["Python", "FastAPI", "Next.js", "Supabase", "Gemini", "Claude", "OpenAI", "Railway", "Vercel"],
};

export const PROJECTS: Project[] = [
  {
    name: "AIPM GEO Tracker",
    period: { ko: "2026.07 (약 3주, 82 commits)", en: "Jul 2026 (~3 weeks, 82 commits)" },
    oneLiner: {
      ko: "브랜드가 생성형 AI 답변에서 인용되는 정도를 추적, 측정하는 시스템",
      en: "Tracks and measures how often a brand is cited in generative-AI answers",
    },
    bullets: {
      ko: [
        "3개 AI 엔진(Gemini, Claude, OpenAI) 어댑터를 공통 인터페이스로 구현하고, 같은 질의를 반복 측정해 통계적으로 안정화",
        "인용률, 브랜드 언급률, 위치보정 현저성(KDD 2024 연구 기반) 3개 지표로 반영도를 계량",
        "GitHub Actions로 매일 자동 수집, Supabase에 원본 보존, Next.js 대시보드로 추세 시각화",
      ],
      en: [
        "Built adapters for 3 AI engines (Gemini, Claude, OpenAI) behind one interface, repeating each query to stabilize results statistically",
        "Quantifies visibility with 3 metrics: citation rate, brand-mention rate, and position-weighted salience (based on KDD 2024 research)",
        "Daily automated collection via GitHub Actions, raw rows preserved in Supabase, trends visualized in a Next.js dashboard",
      ],
    },
    stack: ["TypeScript", "Next.js", "React", "Supabase", "GitHub Actions", "Recharts"],
  },
  {
    name: "AIPM Homepage & Blog Automation",
    url: "https://aipmglobal.ai",
    urlLabel: "aipmglobal.ai",
    period: { ko: "2026.03 - 2026.08 (99 commits)", en: "Mar - Aug 2026 (99 commits)" },
    oneLiner: {
      ko: "Notion을 CMS로 쓰는 승인 기반 블로그 자동 발행 + 기업 홈페이지",
      en: "Company site with approval-gated blog auto-publishing, using Notion as a CMS",
    },
    bullets: {
      ko: [
        "비개발자가 Notion에서 글을 쓰고 승인 한 번으로 웹에 발행되는 파이프라인 구축 (배포, 코드 수정 불필요)",
        "본문의 FAQ 규약을 파싱해 JSON-LD 구조화 데이터를 자동 생성, SEO와 AEO 대응",
        "ISR로 1시간마다 재생성, 오류는 빈 값으로 흡수해 사이트가 안 깨지도록 방어",
      ],
      en: [
        "A pipeline where a non-developer writes in Notion and one approval publishes to the web, with no deploy or code change",
        "Parses an FAQ convention in the body to auto-generate JSON-LD structured data for SEO and AEO",
        "ISR regenerates hourly; errors are absorbed as empty values so the build and site never break",
      ],
    },
    stack: ["Next.js 15", "React 19", "Notion API", "Supabase", "Vercel"],
  },
  {
    name: "HLE Fan Page",
    url: "https://hle.today",
    urlLabel: "hle.today",
    period: { ko: "2026.08 (109 commits)", en: "Aug 2026 (109 commits)" },
    oneLiner: {
      ko: "한화생명e스포츠 팬 웹앱 (비공식)",
      en: "A fan web app for Hanwha Life Esports (unofficial)",
    },
    bullets: {
      ko: [
        "LoL Esports API로 순위와 일정을 서버에서 집계, 세트 득실까지 직접 계산",
        "치지직/SOOP 방송을 서버가 폴링해 실시간 중계(HLS)를 페이지에 임베드",
        "플레이오프 잔여 경기 경우의 수 약 105만 가지를 0.7초에 전수 계산",
      ],
      en: [
        "Aggregates standings and schedule server-side from the LoL Esports API, computing set records directly",
        "Polls Chzzk/SOOP streams server-side to embed live relays (HLS) in the page",
        "Enumerates ~1.05M playoff scenarios exhaustively in 0.7 seconds",
      ],
    },
    stack: ["Next.js 16", "React 19", "TypeScript", "Supabase", "hls.js", "Vercel"],
  },
  {
    name: "Cockfight",
    meta: { ko: "ETH Seoul 2024 해커톤", en: "ETH Seoul 2024 hackathon" },
    period: { ko: "2024.04", en: "Apr 2024" },
    awards: { ko: "Finalist, 1st Prize, 3rd Prize", en: "Finalist, 1st Prize, 3rd Prize" },
    oneLiner: {
      ko: "스테이킹 수익을 게임화한 DeFi + 미니게임 dApp (해커톤 수상작)",
      en: "A DeFi + minigame dApp that gamifies staking yield (award-winning)",
    },
    bullets: {
      ko: [
        "React 모바일 UI와 zustand 상태관리, 슬라이드 카드뷰와 대시보드 화면을 담당",
        "스테이킹 볼트 + 닭 NFT + 베팅 게임으로 이어지는 온체인 흐름을 프론트에서 구현",
        "여러 EVM 테스트넷에 배포해 다수 스폰서 트랙에 제출",
      ],
      en: [
        "Owned the React mobile UI with zustand state management, slide card views, and dashboard screens",
        "Built the on-chain flow (staking vault + chicken NFT + betting game) on the frontend",
        "Deployed to multiple EVM testnets and submitted to several sponsor tracks",
      ],
    },
    stack: ["React", "zustand", "web3.js", "Solidity", "Hardhat"],
  },
];

export type Experience = {
  company: L;
  title: L;
  period: L;
  bullets: LList;
};

export const EXPERIENCE: Experience[] = [
  {
    company: { ko: "(주)티맥스클라우드", en: "Tmax Cloud" },
    title: { ko: "프론트엔드 개발연구원", en: "Frontend Engineer (R&D)" },
    period: { ko: "2022.01 - 2024.10 (2년 10개월)", en: "Jan 2022 - Oct 2024 (2 yrs 10 mos)" },
    bullets: {
      ko: [
        "클라우드 기반 웹 개발 플랫폼 UI 개발 - React, TypeScript, monaco editor, MUI, mobX, REST API 연동",
        "오픈소스 라이브러리를 활용해 client단 Jupyter Notebook 에디터 기능 개발",
        "k8s 기반 PaaS 서비스 UI 유지보수, AAD 인증토큰 기반 AKS 환경 이전 참여",
        "Jenkins로 배포 자동화 관리, Docker로 버전 관리",
      ],
      en: [
        "Built UI for a cloud web-development platform - React, TypeScript, monaco editor, MUI, mobX, REST API integration",
        "Developed a client-side Jupyter Notebook editor using open-source libraries",
        "Maintained UI for a k8s-based PaaS service; joined the migration to an AKS environment with AAD auth tokens",
        "Managed deploy automation with Jenkins and versioning with Docker",
      ],
    },
  },
];

export const SKILLS: { group: L; items: string[] }[] = [
  { group: { ko: "프론트엔드", en: "Frontend" }, items: ["React", "Next.js", "TypeScript", "JavaScript", "zustand", "mobX", "CSS"] },
  { group: { ko: "백엔드 & 데이터", en: "Backend & Data" }, items: ["Python", "FastAPI", "Supabase", "PostgreSQL"] },
  { group: { ko: "AI / LLM", en: "AI / LLM" }, items: ["Gemini", "Claude", "OpenAI", "LLM orchestration", "GEO measurement", "Prompt design"] },
  { group: { ko: "인프라 & 도구", en: "Infra & Tools" }, items: ["Docker", "Kubernetes", "Jenkins", "Vercel", "Railway", "GitHub Actions", "Git"] },
];

export const RESEARCH: LList = {
  ko: [
    "생성형 AI 반영도(GEO) 측정 방법론 설계 및 방식 비교 문서",
    "데이터 파이프라인 손실 검토, Supabase 스키마 사전 정리",
    "실시간 모니터링 파이프라인 기술 문서화",
    "대시보드 개편 설계 (목업 v1, v2, 실데이터 검증)",
  ],
  en: [
    "Designed GEO measurement methodology and wrote a comparison of measurement approaches",
    "Reviewed data-pipeline loss and compiled a Supabase schema dictionary",
    "Documented the real-time monitoring pipeline",
    "Designed a dashboard redesign (mockups v1, v2, validated with real data)",
  ],
};

export const EDUCATION: { school: L; degree: L; period: L }[] = [
  {
    school: { ko: "연세대학교", en: "Yonsei University" },
    degree: { ko: "전기전자공학부 학사", en: "B.S. in Electrical & Electronic Engineering" },
    period: { ko: "2016.03 - 2022.02", en: "Mar 2016 - Feb 2022" },
  },
  {
    school: { ko: "제주과학고등학교", en: "Jeju Science High School" },
    degree: { ko: "졸업", en: "Graduated" },
    period: { ko: "2014.03 - 2016.02", en: "Mar 2014 - Feb 2016" },
  },
];

export const AWARDS: { text: L; meta: L }[] = [
  {
    text: { ko: "ETH Seoul 2024 - Cockfight, Finalist / 1st Prize / 3rd Prize", en: "ETH Seoul 2024 - Cockfight, Finalist / 1st Prize / 3rd Prize" },
    meta: { ko: "2024.04", en: "Apr 2024" },
  },
  {
    text: { ko: "영어 - 비즈니스 레벨", en: "English - business level" },
    meta: { ko: "", en: "" },
  },
];

export const UI = {
  nav: {
    about: { ko: "소개", en: "About" },
    work: { ko: "프로젝트", en: "Work" },
    experience: { ko: "경력", en: "Experience" },
    skills: { ko: "스킬", en: "Skills" },
    contact: { ko: "연락처", en: "Contact" },
  },
  sections: {
    flagship: { ko: "대표 프로젝트", en: "Flagship project" },
    projects: { ko: "주요 프로젝트", en: "Selected projects" },
    experience: { ko: "경력", en: "Experience" },
    skills: { ko: "스킬", en: "Skills" },
    research: { ko: "연구 & 문서화", en: "Research & writing" },
    education: { ko: "학력", en: "Education" },
    awards: { ko: "수상 & 자격", en: "Awards & certifications" },
  },
  labels: {
    problem: { ko: "문제", en: "Problem" },
    whatIdid: { ko: "한 일", en: "What I did" },
    stack: { ko: "스택", en: "Stack" },
    role: { ko: "역할", en: "Role" },
    download: { ko: "PDF 저장", en: "Download PDF" },
    viewGithub: { ko: "GitHub", en: "GitHub" },
    email: { ko: "이메일", en: "Email" },
  },
};
