import type { DeliveryStage } from "../types";

export const deliveryStages: DeliveryStage[] = [
  {
    phase: "Phase 1",
    title: "추천 기준 정교화",
    focus: "직무, 기간, 도메인, 난이도까지 반영해 프로젝트 적합도를 계산합니다.",
  },
  {
    phase: "Phase 2",
    title: "프로젝트 운영 보드",
    focus: "브레인스토밍, 기획, 구현 로그, 회고를 프로젝트 단위로 저장합니다.",
  },
  {
    phase: "Phase 3",
    title: "포트폴리오 출력",
    focus: "README 초안, 이력서 문장, 예상 면접 질문을 자동 정리합니다.",
  },
  {
    phase: "Phase 4",
    title: "협업과 인증",
    focus: "로그인, 팀원 역할, 히스토리 관리로 동아리 협업까지 확장합니다.",
  },
];
