import type { ProjectTopic } from "../types";

export function recommendProjects(
  projects: ProjectTopic[],
  selectedKeywords: string[],
): ProjectTopic[] {
  return [...projects]
    .map((project) => ({
      project,
      score: project.keywords.filter((keyword) => selectedKeywords.includes(keyword)).length,
    }))
    .filter(({ score }) => score > 0)
    .sort((left, right) => right.score - left.score)
    .map(({ project }) => project);
}

