import type { PlanningRecord } from "../planning/types";

export type ProcUser = {
  id: string;
  name: string;
  trackId: string;
  createdAt: string;
};

export type ProcWorkspace = PlanningRecord & {
  id: string;
  ownerId: string;
};

export type RecommendationHistoryItem = {
  id: string;
  userId: string;
  workspaceId: string;
  projectTitle: string;
  reason: string;
  scoreLabel: string;
  createdAt: string;
};

export type ProcSession = {
  currentUserId: string | null;
  selectedWorkspaceId: string | null;
};

export type ProcStore = {
  users: ProcUser[];
  workspaces: ProcWorkspace[];
  history: RecommendationHistoryItem[];
  session: ProcSession;
};
