import { keywordOptions } from "../data/keywordOptions";
import type { KeywordOption, ProjectTopic, RecommendationResult } from "../types";

function getKeywordMap(options: readonly KeywordOption[]) {
  return new Map(options.map((option) => [option.id, option]));
}

function getComplexityBonus(complexity: ProjectTopic["complexity"]) {
  switch (complexity) {
    case "low":
      return 6;
    case "medium":
      return 4;
    case "high":
      return 2;
    default:
      return 0;
  }
}

function getMatchLabel(score: number) {
  if (score >= 14) {
    return "강한 추천";
  }

  if (score >= 10) {
    return "적합";
  }

  return "탐색 추천";
}

function buildReason(matchedKeywords: KeywordOption[], project: ProjectTopic) {
  const labels = matchedKeywords.map((keyword) => keyword.label).join(", ");
  return `${labels} 키워드가 맞고, ${project.complexity === "low" ? "빠른 MVP" : "실무형 설계"} 흐름에 어울립니다.`;
}

export function recommendProjects(
  projects: ProjectTopic[],
  selectedKeywords: string[],
): RecommendationResult[] {
  const keywordMap = getKeywordMap(keywordOptions);

  return [...projects]
    .map((project) => {
      const matchedKeywordIds = project.keywords.filter((keyword) =>
        selectedKeywords.includes(keyword),
      );
      const matchedKeywords = matchedKeywordIds
        .map((keywordId) => keywordMap.get(keywordId))
        .filter((keyword): keyword is KeywordOption => keyword !== undefined);

      const weightedScore = matchedKeywords.reduce((sum, keyword) => sum + keyword.weight, 0);
      const score = weightedScore + getComplexityBonus(project.complexity);

      return {
        project,
        score,
        matchedKeywordIds,
        matchLabel: getMatchLabel(score),
        reason:
          matchedKeywords.length > 0
            ? buildReason(matchedKeywords, project)
            : "선택한 키워드와 직접 일치하지 않지만 탐색용으로 볼 수 있습니다.",
      };
    })
    .filter(({ matchedKeywordIds }) => matchedKeywordIds.length > 0)
    .sort((left, right) => right.score - left.score);
}

