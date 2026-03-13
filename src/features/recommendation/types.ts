export type KeywordOption = {
  id: string;
  label: string;
  weight: number;
  description: string;
};

export type ProjectTopic = {
  title: string;
  summary: string;
  keywords: string[];
  focusRoles: string[];
  value: string;
  deliverables: string[];
  complexity: "low" | "medium" | "high";
};

export type RecommendationResult = {
  project: ProjectTopic;
  score: number;
  matchedKeywordIds: string[];
  matchLabel: string;
  reason: string;
};
