import { useEffect, useState } from "react";
import { createInitialRecord } from "../planning/utils/createInitialRecord";
import { planningSections } from "../planning/data/planningSections";
import { loadProcStore, saveProcStore } from "./localStore";
import type {
  ProcStore,
  ProcUser,
  ProcWorkspace,
  RecommendationHistoryItem,
} from "./types";

function slugifyName(value: string) {
  return value.trim().toLowerCase().replace(/\s+/g, "-");
}

function createUser(name: string, trackId: string): ProcUser {
  return {
    id: `user-${slugifyName(name) || "guest"}`,
    name,
    trackId,
    createdAt: new Date().toISOString(),
  };
}

function createWorkspace(ownerId: string, selectedTopic: string): ProcWorkspace {
  const initialRecord = createInitialRecord(planningSections);

  return {
    ...initialRecord,
    id: `workspace-${crypto.randomUUID()}`,
    ownerId,
    projectName: selectedTopic === initialRecord.selectedTopic ? initialRecord.projectName : selectedTopic,
    selectedTopic,
  };
}

export function useProcApp() {
  const [store, setStore] = useState<ProcStore>(() => loadProcStore());

  useEffect(() => {
    saveProcStore(store);
  }, [store]);

  const currentUser = store.users.find((user) => user.id === store.session.currentUserId) ?? null;
  const workspaces = store.workspaces.filter((workspace) => workspace.ownerId === currentUser?.id);
  const history = store.history.filter((item) => item.userId === currentUser?.id);
  const activeWorkspace =
    workspaces.find((workspace) => workspace.id === store.session.selectedWorkspaceId) ?? workspaces[0] ?? null;

  function signIn(name: string, trackId: string) {
    const existingUser = store.users.find((user) => user.name === name.trim());
    const nextUser = existingUser ?? createUser(name.trim(), trackId);
    const nextWorkspace =
      store.workspaces.find((workspace) => workspace.ownerId === nextUser.id) ??
      createWorkspace(nextUser.id, "proc: 프로젝트 추천과 기록 플랫폼");

    setStore((current) => ({
      ...current,
      users: existingUser ? current.users : [...current.users, nextUser],
      workspaces: current.workspaces.some((workspace) => workspace.id === nextWorkspace.id)
        ? current.workspaces
        : [...current.workspaces, nextWorkspace],
      session: {
        currentUserId: nextUser.id,
        selectedWorkspaceId: nextWorkspace.id,
      },
    }));
  }

  function signOut() {
    setStore((current) => ({
      ...current,
      session: {
        currentUserId: null,
        selectedWorkspaceId: null,
      },
    }));
  }

  function updateUserTrack(trackId: string) {
    if (!currentUser) {
      return;
    }

    setStore((current) => ({
      ...current,
      users: current.users.map((user) =>
        user.id === currentUser.id
          ? {
              ...user,
              trackId,
            }
          : user,
      ),
    }));
  }

  function createNewWorkspace(selectedTopic: string) {
    if (!currentUser) {
      return;
    }

    const workspace = createWorkspace(currentUser.id, selectedTopic);
    setStore((current) => ({
      ...current,
      workspaces: [workspace, ...current.workspaces],
      session: {
        ...current.session,
        selectedWorkspaceId: workspace.id,
      },
    }));
  }

  function selectWorkspace(workspaceId: string) {
    setStore((current) => ({
      ...current,
      session: {
        ...current.session,
        selectedWorkspaceId: workspaceId,
      },
    }));
  }

  function updateWorkspace(
    workspaceId: string,
    updater: (workspace: ProcWorkspace) => ProcWorkspace,
  ) {
    setStore((current) => ({
      ...current,
      workspaces: current.workspaces.map((workspace) =>
        workspace.id === workspaceId ? updater(workspace) : workspace,
      ),
    }));
  }

  function addRecommendationHistory(
    workspaceId: string,
    projectTitle: string,
    reason: string,
    scoreLabel: string,
  ) {
    if (!currentUser) {
      return;
    }

    const item: RecommendationHistoryItem = {
      id: `history-${crypto.randomUUID()}`,
      userId: currentUser.id,
      workspaceId,
      projectTitle,
      reason,
      scoreLabel,
      createdAt: new Date().toISOString(),
    };

    setStore((current) => ({
      ...current,
      history: [item, ...current.history].slice(0, 30),
    }));
  }

  return {
    currentUser,
    workspaces,
    activeWorkspace,
    history,
    signIn,
    signOut,
    updateUserTrack,
    createNewWorkspace,
    selectWorkspace,
    updateWorkspace,
    addRecommendationHistory,
  };
}
