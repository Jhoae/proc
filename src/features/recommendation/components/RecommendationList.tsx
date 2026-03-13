import type { ProjectTopic } from "../types";

type RecommendationListProps = {
  projects: ProjectTopic[];
};

export function RecommendationList({ projects }: RecommendationListProps) {
  return (
    <div className="card-grid">
      {projects.map((project) => (
        <article key={project.title} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.summary}</p>
          <ul className="stack-list">
            {project.keywords.map((keyword) => (
              <li key={keyword}>{keyword}</li>
            ))}
          </ul>
          <p className="card-footnote">{project.value}</p>
          <div className="deliverables">
            {project.deliverables.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

