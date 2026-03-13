import type { CareerTrack, ProjectWindow } from "../types";

type CareerProfilePanelProps = {
  tracks: CareerTrack[];
  selectedTrackId: string;
  onSelectTrack: (trackId: string) => void;
  windows: ProjectWindow[];
  selectedWindowId: ProjectWindow["id"];
  onSelectWindow: (windowId: ProjectWindow["id"]) => void;
};

export function CareerProfilePanel({
  tracks,
  selectedTrackId,
  onSelectTrack,
  windows,
  selectedWindowId,
  onSelectWindow,
}: CareerProfilePanelProps) {
  const selectedTrack = tracks.find((track) => track.id === selectedTrackId);

  return (
    <section className="section-block">
      <div className="section-heading">
        <p className="eyebrow">Career Profile</p>
        <h2>취업 목표에 맞는 추천 기준부터 설정</h2>
      </div>
      <div className="profile-grid">
        <div className="profile-panel">
          <p className="profile-label">희망 포지션</p>
          <div className="profile-option-list">
            {tracks.map((track) => (
              <button
                key={track.id}
                type="button"
                className={track.id === selectedTrackId ? "profile-option active" : "profile-option"}
                onClick={() => onSelectTrack(track.id)}
              >
                <strong>{track.label}</strong>
                <span>{track.summary}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="profile-panel">
          <p className="profile-label">프로젝트 기간</p>
          <div className="profile-option-list compact">
            {windows.map((window) => (
              <button
                key={window.id}
                type="button"
                className={window.id === selectedWindowId ? "profile-option active" : "profile-option"}
                onClick={() => onSelectWindow(window.id)}
              >
                <strong>{window.label}</strong>
                <span>{window.summary}</span>
              </button>
            ))}
          </div>
          {selectedTrack ? (
            <div className="profile-highlight">
              <p className="profile-label">이 포지션에서 보여줄 포인트</p>
              <ul className="profile-strengths">
                {selectedTrack.strengths.map((strength) => (
                  <li key={strength}>{strength}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
