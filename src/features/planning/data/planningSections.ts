import type { PlanningSection } from "../types";

export const planningSections: PlanningSection[] = [
  {
    title: "브레인스토밍",
    prompt: "어떤 문제를 해결하고 싶은지, 왜 이 주제가 지금 중요한지 정리합니다.",
    items: ["문제 정의", "타깃 사용자", "핵심 가치 제안"],
  },
  {
    title: "기획",
    prompt: "MVP 기능과 화면, 데이터 구조를 빠르게 설계합니다.",
    items: ["핵심 기능", "페이지 흐름", "데이터 모델"],
  },
  {
    title: "진행 기록",
    prompt: "구현하면서 한 선택과 문제 해결 과정을 주차별로 남깁니다.",
    items: ["오늘 작업", "이슈와 해결", "다음 액션"],
  },
  {
    title: "회고",
    prompt: "프로젝트 종료 후 포트폴리오에 옮길 수 있는 형태로 정리합니다.",
    items: ["잘한 점", "아쉬운 점", "개선 계획"],
  },
];

