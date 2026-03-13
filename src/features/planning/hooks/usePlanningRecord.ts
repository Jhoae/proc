import { useEffect, useState } from "react";
import { planningSections } from "../data/planningSections";
import type { PlanningRecord } from "../types";
import { createInitialRecord } from "../utils/createInitialRecord";

const STORAGE_KEY = "proc-planning-record";

function normalizeRecord(rawValue: Partial<PlanningRecord>): PlanningRecord {
  const initialRecord = createInitialRecord(planningSections);

  return {
    projectName: rawValue.projectName ?? initialRecord.projectName,
    selectedTopic: rawValue.selectedTopic ?? initialRecord.selectedTopic,
    updatedAt: rawValue.updatedAt ?? initialRecord.updatedAt,
    sections: Object.fromEntries(
      planningSections.map((section) => [
        section.id,
        {
          title: rawValue.sections?.[section.id]?.title ?? "",
          notes: rawValue.sections?.[section.id]?.notes ?? "",
          nextAction: rawValue.sections?.[section.id]?.nextAction ?? "",
        },
      ]),
    ),
  };
}

function loadRecord(): PlanningRecord {
  if (typeof window === "undefined") {
    return createInitialRecord(planningSections);
  }

  const savedValue = window.localStorage.getItem(STORAGE_KEY);
  if (!savedValue) {
    return createInitialRecord(planningSections);
  }

  try {
    return normalizeRecord(JSON.parse(savedValue) as Partial<PlanningRecord>);
  } catch {
    return createInitialRecord(planningSections);
  }
}

export function usePlanningRecord() {
  const [record, setRecord] = useState<PlanningRecord>(() => loadRecord());

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
  }, [record]);

  return { record, setRecord };
}
