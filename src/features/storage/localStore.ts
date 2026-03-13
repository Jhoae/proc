import type { ProcStore } from "./types";

const STORAGE_KEY = "proc-app-store";

export const initialStore: ProcStore = {
  users: [],
  workspaces: [],
  session: {
    currentUserId: null,
    selectedWorkspaceId: null,
  },
};

export function loadProcStore(): ProcStore {
  if (typeof window === "undefined") {
    return initialStore;
  }

  const rawValue = window.localStorage.getItem(STORAGE_KEY);
  if (!rawValue) {
    return initialStore;
  }

  try {
    return {
      ...initialStore,
      ...JSON.parse(rawValue),
    } as ProcStore;
  } catch {
    return initialStore;
  }
}

export function saveProcStore(store: ProcStore) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}
