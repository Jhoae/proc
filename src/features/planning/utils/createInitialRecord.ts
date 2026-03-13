import type { PlanningRecord, PlanningSection } from "../types";

export function createInitialRecord(sections: PlanningSection[]): PlanningRecord {
  const initialSections = Object.fromEntries(
    sections.map((section) => [
      section.id,
      {
        title: "",
        notes: "",
        nextAction: "",
      },
    ]),
  );

  return {
    projectName: "proc MVP",
    selectedTopic: "proc: 프로젝트 추천과 기록 플랫폼",
    updatedAt: new Date().toISOString(),
    sections: initialSections,
  };
}

