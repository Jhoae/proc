import { keywordOptions } from "../data/keywordOptions";
import type { RecommendationResult } from "../types";

type RecommendationListProps = {
  projects: RecommendationResult[];
  onSelectProject: (title: string) => void;
  selectedProjectTitle: string;
};

const keywordLabelMap = new Map<string, string>(
  keywordOptions.map((keyword) => [keyword.id, keyword.label]),
);

export function RecommendationList({
  projects,
  onSelectProject,
  selectedProjectTitle,
}: RecommendationListProps) {
  return (
    <div className="card-grid">
      {projects.map(({ project, score, matchedKeywordIds, matchLabel, reason }) => (
        <article key={project.title} className="project-card">
          <div className="card-badge-row">
            <span className="match-badge">{matchLabel}</span>
            <span className="score-badge">{score}점</span>
          </div>
          <h3>{project.title}</h3>
          <p>{project.summary}</p>
          <ul className="stack-list">
            {matchedKeywordIds.map((keywordId) => (
              <li key={keywordId}>{keywordLabelMap.get(keywordId) ?? keywordId}</li>
            ))}
          </ul>
          <p className="card-footnote">{reason}</p>
          <div className="deliverables">
            {project.deliverables.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <button
            type="button"
            className={
              project.title === selectedProjectTitle ? "select-project-button active" : "select-project-button"
            }
            onClick={() => onSelectProject(project.title)}
          >
            {project.title === selectedProjectTitle ? "기록 보드에 연결됨" : "이 프로젝트로 기록 시작"}
          </button>
        </article>
      ))}
    </div>
  );
}
