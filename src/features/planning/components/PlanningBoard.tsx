import type { PlanningSection } from "../types";

type PlanningBoardProps = {
  sections: PlanningSection[];
};

export function PlanningBoard({ sections }: PlanningBoardProps) {
  return (
    <div className="planning-grid">
      {sections.map((section) => (
        <article key={section.title} className="planning-card">
          <p className="planning-label">{section.title}</p>
          <p className="planning-prompt">{section.prompt}</p>
          <ul className="planning-list">
            {section.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
