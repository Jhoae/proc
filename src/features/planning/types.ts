export type PlanningSection = {
  id: string;
  title: string;
  prompt: string;
  placeholders: {
    title: string;
    notes: string;
    nextAction: string;
  };
};

export type PlanningRecord = {
  projectName: string;
  selectedTopic: string;
  updatedAt: string;
  sections: Record<
    string,
    {
      title: string;
      notes: string;
      nextAction: string;
    }
  >;
};

