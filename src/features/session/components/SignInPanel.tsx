import { useState } from "react";
import type { CareerTrack } from "../../career/types";

type SignInPanelProps = {
  tracks: CareerTrack[];
  defaultTrackId: string;
  onSubmit: (name: string, trackId: string) => void;
};

export function SignInPanel({ tracks, defaultTrackId, onSubmit }: SignInPanelProps) {
  const [name, setName] = useState("");
  const [trackId, setTrackId] = useState(defaultTrackId);

  return (
    <section className="hero sign-in-hero">
      <p className="eyebrow">Welcome to proc</p>
      <h1>취업 준비용 프로젝트 운영 공간을 먼저 만들기</h1>
      <p className="hero-copy">
        이름과 희망 직무를 고르면 개인 작업공간을 만들고, 프로젝트별로 추천 결과와 기록을 저장합니다.
      </p>
      <div className="sign-in-form">
        <label className="project-meta-field">
          <span>이름</span>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="예: 오재호"
          />
        </label>
        <label className="project-meta-field">
          <span>희망 직무</span>
          <select value={trackId} onChange={(event) => setTrackId(event.target.value)}>
            {tracks.map((track) => (
              <option key={track.id} value={track.id}>
                {track.label}
              </option>
            ))}
          </select>
        </label>
        <button
          type="button"
          className="primary-button"
          onClick={() => {
            if (!name.trim()) {
              return;
            }

            onSubmit(name, trackId);
          }}
        >
          내 작업공간 시작하기
        </button>
      </div>
    </section>
  );
}
