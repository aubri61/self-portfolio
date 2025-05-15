import { desc } from "framer-motion/client";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
// import corpcommentImg from "@/public/corpcomment.png";
// import rmtdevImg from "@/public/rmtdev.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";

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
  {
    name: "Contact",
    hash: "#contact",
  },
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
}

export const workExperiencesData: IWorkExperience[] = [
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
    ],
    stacks: [
      "Next.js",
      "React",
      "TypeScript",
      "React Native",
      "Node.js",
      "Express",
      "fastAPI",
      "python",
      "Flask",
      "MongoDB",
      "AWS S3",
      "AWS EC2",
      "AWS RDS",
      "AWS Route53",
      "Styled-components",
      "tailwind",
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
    ],
    stacks: [
      "React",
      "Next.js",
      "TypeScript",
      "React Native",
      "Node.js",
      "Express",
      "Styled-components",
      "MongoDB",
      "AWS S3",
      "AWS EC2",
      "AWS RDS",
      "AWS Route53",
      "javascript",
    ],
    date: "2021.09 ~ 2022.04",
    materials: true,
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
      "javascript",
      "ajax",
      "HTML",
      "CSS",
    ],
    date: "2021.03 - 2021.09",
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
}
export const projectsData: IProject[] = [
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
    ],
    stacks: [
      "TypeScript",
      "React Native",
      "Node.js",
      "Express",
      "MongoDB",
      "AWS S3",
      "AWS EC2",
      "AWS RDS",
      "AWS Route53",
      "AWS CloudFront",
      "Styled-components",
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
    isLandscape: false,
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
      "AWS RDS",
      "AWS Route53",
      "AWS CloudFront",
      "Styled-components",
    ],
    date: "2020.10 ~ 2020.12",
    materials: true,
    materialType: "video",
    materialSrc: "https://www.youtube.com/embed/3O2NNsjSsw0",
    // materialSrc: "/videos/cluby.mp4",
    materialRatio: "16/9",
    isLandscape: true,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
