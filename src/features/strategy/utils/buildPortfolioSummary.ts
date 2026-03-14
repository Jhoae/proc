import type { RecommendationResult } from "../../recommendation/types";
import type { ProcWorkspace } from "../../storage/types";

export function buildPortfolioSummary(
  workspace: ProcWorkspace,
  recommendation: RecommendationResult | undefined,
  trackLabel: string,
) {
  const planning = workspace.sections.planning;
  const progress = workspace.sections.progress;
  const retrospective = workspace.sections.retrospective;

  return {
    resumeSummary: `${workspace.projectName} 프로젝트를 진행하며 ${trackLabel} 관점의 기획, 구현, 회고 흐름을 직접 관리했습니다.`,
    readmeDraft: [
      `# ${workspace.projectName}`,
      "",
      "## 문제 정의",
      workspace.sections.brainstorming.notes || "문제 정의를 작성하세요.",
      "",
      "## 핵심 기능",
      planning.notes || "핵심 기능을 작성하세요.",
      "",
      "## 진행 기록",
      progress.notes || "진행 기록을 작성하세요.",
      "",
      "## 회고",
      retrospective.notes || "회고를 작성하세요.",
    ].join("\n"),
    interviewAnswer: recommendation
      ? `${recommendation.project.title}를 선택한 이유는 ${recommendation.reason}였고, 구현 과정에서는 ${progress.notes || "구현 기록 보강 필요"}를 중심으로 개선했습니다.`
      : "추천 결과를 먼저 선택하세요.",
    recommendedDeliverables: recommendation?.project.deliverables ?? [],
  };
}

