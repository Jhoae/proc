import type { PlanningSection } from "../types";

export const planningSections: PlanningSection[] = [
  {
    id: "brainstorming",
    title: "브레인스토밍",
    prompt: "문제 정의와 사용자 가치를 먼저 짧고 선명하게 적습니다.",
    placeholders: {
      title: "예: 금융권 취준생이 바로 시작할 수 있는 프로젝트를 추천한다",
      notes: "사용자 문제, 배경, 왜 지금 이 기능이 필요한지 적어보세요.",
      nextAction: "예: 타깃 사용자와 핵심 문제를 3개로 압축하기",
    },
  },
  {
    id: "planning",
    title: "기획",
    prompt: "핵심 기능, 페이지 흐름, 데이터 구조를 MVP 기준으로 좁힙니다.",
    placeholders: {
      title: "예: 추천 결과 화면과 기록 보드 화면부터 만든다",
      notes: "필수 기능, 제외할 기능, 필요한 데이터 필드를 정리해보세요.",
      nextAction: "예: 화면 와이어프레임과 API 초안 작성",
    },
  },
  {
    id: "progress",
    title: "진행 기록",
    prompt: "구현하면서 한 선택과 막힌 지점을 기록합니다.",
    placeholders: {
      title: "예: 추천 점수 계산 로직 1차 완성",
      notes: "오늘 작업한 내용, 이슈, 해결 방법을 적어보세요.",
      nextAction: "예: 저장 기능을 localStorage에서 DB로 확장",
    },
  },
  {
    id: "retrospective",
    title: "회고",
    prompt: "포트폴리오에 옮길 수 있게 성과와 개선점을 정리합니다.",
    placeholders: {
      title: "예: 추천과 기록을 하나의 경험으로 묶은 점이 강점",
      notes: "잘한 점, 아쉬운 점, 배운 점을 적어보세요.",
      nextAction: "예: 로그인과 사용자별 프로젝트 저장 기능 추가",
    },
  },
];

