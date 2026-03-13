import type { CareerTrack, ProjectWindow } from "../types";

export const careerTracks: CareerTrack[] = [
  {
    id: "backend-engineer",
    label: "백엔드 개발자",
    summary: "API 설계, 데이터 모델링, 인증과 운영 관점을 보여주는 포지션",
    strengths: ["도메인 모델링", "API 설계", "트러블슈팅 기록"],
  },
  {
    id: "financial-it",
    label: "금융 IT 개발자",
    summary: "정합성, 보안, 거래 흐름과 도메인 이해를 강조하는 포지션",
    strengths: ["금융 데이터 처리", "정합성 검증", "민감 정보 보호"],
  },
  {
    id: "product-builder",
    label: "프로덕트 지향 개발자",
    summary: "문제 정의부터 사용자 가치와 MVP 우선순위를 함께 보는 포지션",
    strengths: ["사용자 문제 정의", "MVP 설계", "실행 속도"],
  },
];

export const projectWindows: ProjectWindow[] = [
  {
    id: "4w",
    label: "4주 MVP",
    summary: "빠르게 시작해서 포트폴리오 초안을 만드는 짧은 주기",
  },
  {
    id: "8w",
    label: "8주 구현",
    summary: "추천, 기록, 저장 기능까지 안정적으로 담기 좋은 기본 주기",
  },
  {
    id: "12w",
    label: "12주 확장",
    summary: "인증, 협업, 데이터 분석까지 넣기 좋은 긴 주기",
  },
];
