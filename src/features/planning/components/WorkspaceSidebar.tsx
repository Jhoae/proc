import type { ProcUser, ProcWorkspace } from "../../storage/types";

type WorkspaceSidebarProps = {
  currentUser: ProcUser;
  workspaces: ProcWorkspace[];
  activeWorkspaceId: string | null;
  onSelectWorkspace: (workspaceId: string) => void;
  onCreateWorkspace: () => void;
  onSignOut: () => void;
};

export function WorkspaceSidebar({
  currentUser,
  workspaces,
  activeWorkspaceId,
  onSelectWorkspace,
  onCreateWorkspace,
  onSignOut,
}: WorkspaceSidebarProps) {
  return (
    <section className="section-block">
      <div className="workspace-header">
        <div>
          <p className="eyebrow">Workspace</p>
          <h2>{currentUser.name}님의 프로젝트 보관함</h2>
        </div>
        <button type="button" className="secondary-button" onClick={onSignOut}>
          계정 전환
        </button>
      </div>
      <div className="workspace-list">
        {workspaces.map((workspace) => (
          <button
            key={workspace.id}
            type="button"
            className={workspace.id === activeWorkspaceId ? "workspace-card active" : "workspace-card"}
            onClick={() => onSelectWorkspace(workspace.id)}
          >
            <strong>{workspace.projectName}</strong>
            <span>{workspace.selectedTopic}</span>
            <span>{workspace.updatedAt.slice(0, 10)}</span>
          </button>
        ))}
      </div>
      <button type="button" className="primary-button" onClick={onCreateWorkspace}>
        새 프로젝트 저장공간 만들기
      </button>
    </section>
  );
}
