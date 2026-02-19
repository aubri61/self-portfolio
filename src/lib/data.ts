export const links = [
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Experiences",
    hash: "#experiences",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  // {
  //   name: "Contact",
  //   hash: "#contact",
  // },
] as const;

export interface IWorkExperience {
  CorpTitle: string;
  role: string;
  location: string;
  description: string;
  stacks: string[];
  date: string;
  did: string[];
  materials?: boolean;
  materialType?: string;
  materialSrc?: string | string[];
  materialRatio?: string;
  isLandscape?: boolean;
  demoUrl?: string;
}

export const workExperiencesData: IWorkExperience[] = [
  {
    CorpTitle: "소셜리액트",
    role: "Full-Stack Developer",
    location: "Seoul, South Korea",
    description:
      "1인 개발자로서 스포츠 코칭 클래스 플랫폼을 기획·설계·개발·운영까지 단독으로 수행했습니다. 웹(Next.js), 서버(NestJS), 모바일(React Native) 기반의 멀티 플랫폼 서비스를 구축하였으며, AWS 인프라 및 CI/CD 환경을 직접 설계·운영했습니다. 기획, UX 설계, DB 모델링, 서버 아키텍처 설계, 배포 자동화, 마케팅 페이지 제작, 스토어 출시 준비까지 End-to-End Product Ownership을 수행했습니다.",
    did: [
      "스포츠 코칭/이벤트 매칭 플랫폼을 기획부터 설계, 개발, 배포, 운영까지 End-to-End로 주도",
      "PNPM 기반 Monorepo 아키텍처 설계 및 워크스페이스 분리를 통해 Web / Server / Mobile 통합 관리",
      "관리자 페이지 및 데이터 기반 운영을 위한 Admin Dashboard 설계 및 구현",
      "Webhook 기반 실시간 서버 알림 시스템 구축을 통해 실시간 운영 모니터링 및 장애 대응 체계 구축",
      "Next.js · NestJS · PostgreSQL 기반의 확장 가능한 풀스택 아키텍처 설계 및 구현",
      "도메인 모델링 및 Prisma 스키마 설계를 통해 복잡한 신청/결제/상태 관리 로직 구조화",
      "AWS(EC2, RDS, S3, CloudFront) 기반 클라우드 인프라 직접 구축 및 운영",
      "GitHub Actions + Vercel 기반 CI/CD 자동화 환경 설계",
      "Web / Mobile(React Native) 통합 구조 설계 및 API 추상화",
      "SEO, 성능 최적화, 배포 전략까지 고려한 실서비스 운영 경험",
      "Goole, Kakao, Apple 로그인 기능 구현",
    ],
    stacks: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Shadcn UI",
      "Zustand",
      "React Native",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "JWT",
      "RESTful API",
      "AWS EC2",
      "AWS RDS",
      "AWS S3",
      "CloudFront",
      "AWS Route53",
      "GitHub Actions",
      "Vercel",
      "PM2",
      "Docker",
    ],
    date: "2025.10 ~ 2026.02",
    demoUrl: "https://nadaun.life/",
    materials: true,
    materialType: "image",
    materialSrc: [
      "/materials/socialiact/1.png",
      "/materials/socialiact/2.png",
      "/materials/socialiact/3.png",
      "/materials/socialiact/4.png",
      "/materials/socialiact/5.png",
      "/materials/socialiact/6.png",
      "/materials/socialiact/7.png",
    ],
    // materialRatio: "16/9",
    // isLandscape: true,
  },
  {
    CorpTitle: "더로벨",
    role: "Full-Stack Developer",
    location: "Seoul, South Korea",
    description:
      "1인 개발자로서 AI 기술과 의료 기술을 융합한 다양한 웹 서비스를 개발했습니다. 국제 인증 표준의 보편화에 기여하기 위한 서비스 등을 개발했습니다. AI 실행파일 및 모델 적용을 위해 Docker와 python 기반 Backend Framework들을 활용했습니다.",
    did: [
      "i18n 라이브러리를 활용해 다국어 지원 서비스 개발",
      "생성형 AI를 활용한 치과 진료 보조 서비스 개발",
      "치과 환자 대쉬보드 서비스 개발",
      "ISO 국제표준 문서 자동화 AI 서비스 개발",
      "녹내장 및 라섹 환자 시술값 예측 AI 서비스 웹 개발",
      "다양한 middleware를 활용한 리다이렉팅 작업",
      "RESTful API 작성 및 적용",
    ],
    stacks: [
      "Next.js",
      "React",
      "TypeScript",
      "React Native",
      "Node.js",
      "Express",
      "Python",
      "Docker",
      "FastAPI",
      "Flask",
      "Zustand",
      "MongoDB",
      "AWS S3",
      "AWS EC2",
      "RESTful API",

      "AWS Route53",
      "Styled-Components",
      "Tailwind",
    ],
    date: "2023.01 ~ 2024.11",
  },
  {
    CorpTitle: "바카티오",
    role: "Full-Stack Developer(Co-Founder)",
    location: "Seoul, South Korea",
    description:
      "공동 창업자로서 모든 개발을 도맡아 1인으로 진행했습니다. React Native 앱과 Node.js(Express) 서버를 만들고 AWS S3, EC2 등을 활용해 직접 배포하여 운영했습니다. 디자인에도 적극 참여하였으며, React.js로 Admin 페이지를 만들어 사용자 및 데이터 관리에 활용했습니다.",
    did: [
      "관광 올인원 컨시어지 앱 React Native 개발 및 배포",
      "카카오톡 알림톡 기능 개발",
      "숙소 및 관광지 추천 알고리즘 개발",
      "숙소 추천 및 예약 기능을 위한 크롤링",
      "숙소 예약 기능 구현 및 데이터 관리",
      "렌트카 업체 API 연동 및 예약 기능 구현",
      "지도 기반 일정 관리 기능 구현",
      "RESTful API 작성 및 적용",
    ],
    stacks: [
      "React",
      "Next.js",
      "TypeScript",
      "React Native",
      "Node.js",
      "Express",
      "Styled-Components",
      "MongoDB",
      "AWS S3",
      "AWS EC2",
      "RESTful API",

      "AWS Route53",
      "Javascript",
      "Figma",
    ],
    date: "2021.09 ~ 2022.04",
    materials: true,
    materialType: "image",
    materialSrc: [
      "/materials/vacatio/1.png",
      "/materials/vacatio/2.png",
      "/materials/vacatio/3.png",
      "/materials/vacatio/4.png",
      "/materials/vacatio/5.png",
      "/materials/vacatio/6.png",
      "/materials/vacatio/7.png",
      "/materials/vacatio/8.png",
      "/materials/vacatio/9.png",
      "/materials/vacatio/10.png",
      "/materials/vacatio/11.png",
    ],
  },
  {
    CorpTitle: "모두닥",
    role: "Full-Stack Developer(인턴)",
    location: "Seoul, South Korea",
    description:
      "PC 홈페이지 중 낙후되고 사용성이 떨어지는 부분을 직접 디자인하고 기능을 개선했습니다. 이후 React Native 기술을 익혀 모바일 앱 기능 개선을 맡았습니다. 관련 Backend는 Django legacy code를 리뷰해 직접 수정하여 api 등을 만들어 적용했습니다. 사용자에게 노출되는 화면을 개선하여 MAU를 증가시키는 데 크게 기여했습니다. 팀원들과 소통하며 협업하는 방법을 배웠습니다.",
    did: [
      "PC 홈페이지 의사, 병원 상세 페이지 리팩토링",
      "주변 병원 검색 기능 개선",
      "병원 리뷰 업로드 및 보기 기능 개선",
      "앱 메인 페이지 및 배너 개선",
      "데이터 및 시스템 구조 개선 및 마이그레이션",
      "사용자 AB 테스트 설계 및 구현",
    ],
    // icon: React.createElement(LuGraduationCap),
    stacks: [
      "React",
      "React Native",
      "Django",
      "PostgreSQL",
      "Javascript",
      "ajax",
      "HTML",
      "CSS",
    ],
    date: "2021.03 ~ 2021.09",
  },
] as const;

export interface IProject {
  title: string;
  description: string;
  stacks: string[];
  date: string;
  did: string[];
  materials?: boolean;
  materialType?: string;
  materialSrc?: string;
  materialRatio?: string;
  isLandscape?: boolean;
  demoUrl?: string;
  sourceCodeUrl?: string;
}
export const projectsData: IProject[] = [
  {
    title: "Shopify 판매자 및 소비자용 AI 챗봇 앱 & 위젯(익스텐션)",
    description:
      "스토어프론트 우측 하단에 AI 챗봇 위젯 임베드, 관리자에게는 실제 재고·세일 데이터를 조회해 AI에게 발주/세일 Q&A를 묻는 페이지를 구현했습니다.",

    did: [
      "판매자용 Admin 페이지 구현: AI 활용한 재고 관리 및 발주 추천 등 기능, 대쉬보드, 재고 관리 기능 구현",
      "소비자용 Theme App Extension 구현: 우측 하단 AI 챗봇 UI 렌더",
      "App Proxy 설계 학습 및 수신 서명검증 실패/세션 누락 등 에러를 JSON으로 표준화",
      "Admin GraphQL 직접 호출: 재고/세일 요약을 LLM 컨텍스트로 가공하기 위해 GraphQL SQL문으로 직접 데이터 호출",
      "개인정보·주문번호 등 PII 질문은 가드레일로 차단",
      "번들링 파이프라인: esbuild로 `src/main.ts -> assets/chatbot.js` 생성",
    ],

    stacks: [
      "TypeScript",
      "React",
      "Remix",
      "Shopify CLI",
      "Theme App Extension",
      "Liquid",
      "GraphQL(Admin API)",
      "Prisma(Session)",
      "SQLite",
      "esbuild",
      "Gemini(API)",
    ],
    date: "2025.08 ~ 2025.09",
    materials: true,
    materialType: "image",
    materialSrc: "/shopify.gif",
    materialRatio: "16/9",
    isLandscape: true,
    sourceCodeUrl: "https://github.com/aubri61/shopify-demo",
  },
  {
    title: "동기부여 알람 앱 DreamIn",
    description:
      "1인으로 React Native 앱과 서버를 개발해 앱스토어에 배포했습니다. '말하는대로 이루어진다'라는 믿음을 실현시킬 수 있는 동기부여 앱을 만들고 싶다는 생각에서 출발한 창업 프로젝트입니다.",
    did: [
      "디자인, 기획, 개발, 배포까지 1인으로 진행",
      "Google, Apple, 이메일 로그인 기능 구현",
      "사용자 사진 업로드 기능 구현",
      "unsplash API 연동한 사진 검색",
      "기기 알람 기능 구현",
      "AWS S3, Cloudfront 활용 사진 업로드 기능 구현",
      "React Hooks를 활용해 코드 재사용성 높임",
    ],
    stacks: [
      "TypeScript",
      "React Native",
      "Node.js",
      "Express",
      "MongoDB",
      "AWS S3",
      "AWS EC2",
      "RESTful API",

      "AWS Route53",
      "AWS CloudFront",
      "Styled-Components",
      "Figma",
    ],
    date: "2023.05 ~ 2023.10",
    materials: true,
    materialType: "video",
    // materialUrl: "https://youtube.com/shorts/jBQ0qWHiudU?si=05-ucOlw6aApz6DK",
    // materialSrc: "/videos/dreamin.mov",
    materialRatio: "9/18.5",
    // materialUrl: "https://www.youtube.com/embed/jBQ0qWHiudU?autoplay=1&mute=1&playsinline=1",
    materialSrc: "https://www.youtube.com/embed/eCEYWUdpOiU",
    // materialSrc: "https://www.youtube.com/embed/jBQ0qWHiudU",
    isLandscape: true,
  },
  {
    title: "친구 같은 AI 챗봇 Momi",
    description:
      "Google AI SDK와 연동하여 간단한 AI 챗봇을 만들었습니다. next-intl 라이브러리를 사용해 다국어 환경을 지원했습니다.",
    did: [
      "Google AI SDK 연동 및 api 생성",
      "next-intl 라이브러리를 사용한 i18n 다국어 지원 기능",
      "Next.js와 tailwind로 깔끔한 프론트 화면 구성",
    ],
    stacks: ["TypeScript", "Nextjs", "Tailwind", "Vercel"],
    date: "2025.05",
    materials: true,
    materialType: "image",
    materialSrc: "/momi.png",
    demoUrl: "https://ai-friend-chat.vercel.app/",
  },
  {
    title: "스터디 매칭 서비스 Cluby",
    description:
      "1인으로 React Native 앱과 서버를 개발해 앱스토어에 배포했습니다. '말하는대로 이루어진다'라는 믿음을 실현시킬 수 있는 동기부여 앱을 만들고 싶다는 생각에서 출발한 창업 프로젝트입니다.",
    did: [
      "디자인, 기획, 개발, 배포까지 1인으로 진행",
      "Google, Apple, 이메일 로그인 기능 구현",
      "사용자 사진 업로드 기능 구현",
      "unsplash API 연동한 사진 검색",
      "기기 알람 기능 구현",
      "AWS S3, Cloudfront 활용 사진 업로드 기능 구현",
    ],
    stacks: [
      "TypeScript",
      "React Native",
      "Node.js",
      "Express",
      "MongoDB",
      "AWS S3",
      "AWS EC2",

      "AWS Route53",
      "AWS CloudFront",
      "Styled-Components",
      "Figma",
    ],
    date: "2020.10 ~ 2020.12",
    materials: true,
    materialType: "video",
    materialSrc: "https://www.youtube.com/embed/3O2NNsjSsw0",
    // materialSrc: "/videos/cluby.mp4",
    materialRatio: "16/9",
    isLandscape: true,
  },

  {
    title: "AI 법률 도우미 앱 LawBot",
    description:
      "소장을 업로드하면 AI로 비슷한 판례를 찾아 제공하는 앱 서비스를 제작했습니다. 한이음 ICT 공모전 장려상을 수상하였습니다.",
    did: [
      "OCR 분석 API 연동",
      "React Native 활용 앱 프론트 개발",
      "Figma를 활용한 프론트 디자인",
    ],
    date: "2019.05 ~ 2019.10",
    stacks: [
      "JavaScript",
      "React Native",
      "MongoDB",
      "Styled-Components",
      "Figma",
    ],
    materials: true,
    materialType: "video",
    materialSrc: "https://www.youtube.com/embed/iHc02hxnq-M",
    materialRatio: "16/9",
    isLandscape: true,
  },
] as const;

export const skillTagsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "React Native",
  "Git",
  "Tailwind",
  "Styled-Components",
  "emotion",
  "MongoDB",
  "Redux",
  "React Hooks",
  "Recoil",
  "Zustand",
  "Docker",
  "PostgreSQL",
  "Python",
  "Django",
  "FastAPI",
  "Flask",
  "AWS S3",
  "AWS EC2",

  "AWS Route53",
  "AWS CloudFront",
  "Framer Motion",
  "HTML",
  "CSS",
  "Figma",
  "Vercel",
] as const;

// export const skillsData = [
//   {
//     title: "TypeScript/Javascript",
//   },
// ];
