import type { ChangeEvent } from "react";
import type { PlanningRecord, PlanningSection } from "../types";

type PlanningBoardProps = {
  sections: PlanningSection[];
  record: PlanningRecord;
  onFieldChange: (
    sectionId: string,
    field: "title" | "notes" | "nextAction",
    value: string,
  ) => void;
};

export function PlanningBoard({ sections, record, onFieldChange }: PlanningBoardProps) {
  function createChangeHandler(
    sectionId: string,
    field: "title" | "notes" | "nextAction",
  ) {
    return (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      onFieldChange(sectionId, field, event.target.value);
    };
  }

  return (
    <div className="planning-grid">
      {sections.map((section) => {
        const values = record.sections[section.id];

        return (
          <article key={section.id} className="planning-card">
            <p className="planning-label">{section.title}</p>
            <p className="planning-prompt">{section.prompt}</p>
            <label className="planning-field">
              <span>핵심 한 줄</span>
              <input
                value={values.title}
                onChange={createChangeHandler(section.id, "title")}
                placeholder={section.placeholders.title}
              />
            </label>
            <label className="planning-field">
              <span>상세 기록</span>
              <textarea
                value={values.notes}
                onChange={createChangeHandler(section.id, "notes")}
                placeholder={section.placeholders.notes}
                rows={5}
              />
            </label>
            <label className="planning-field">
              <span>다음 액션</span>
              <input
                value={values.nextAction}
                onChange={createChangeHandler(section.id, "nextAction")}
                placeholder={section.placeholders.nextAction}
              />
            </label>
          </article>
        );
      })}
    </div>
  );
}

