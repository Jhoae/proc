import type { DeliveryStage } from "../types";

type RoadmapPanelProps = {
  stages: DeliveryStage[];
};

export function RoadmapPanel({ stages }: RoadmapPanelProps) {
  return (
    <section className="section-block">
      <div className="section-heading">
        <p className="eyebrow">Roadmap</p>
        <h2>proc를 취업 준비용 실무 서비스로 키우는 다음 단계</h2>
      </div>
      <div className="roadmap-grid">
        {stages.map((stage) => (
          <article key={stage.phase} className="roadmap-card">
            <p className="roadmap-phase">{stage.phase}</p>
            <h3>{stage.title}</h3>
            <p>{stage.focus}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
