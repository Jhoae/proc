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

export type ProcSession = {
  currentUserId: string | null;
  selectedWorkspaceId: string | null;
};

export type ProcStore = {
  users: ProcUser[];
  workspaces: ProcWorkspace[];
  session: ProcSession;
};
