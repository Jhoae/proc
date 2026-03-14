import type { RecommendationHistoryItem } from "../../storage/types";

type RecommendationHistoryProps = {
  items: RecommendationHistoryItem[];
};

export function RecommendationHistory({ items }: RecommendationHistoryProps) {
  return (
    <section className="section-block">
      <div className="section-heading">
        <p className="eyebrow">History</p>
        <h2>추천 선택 히스토리</h2>
      </div>
      <div className="history-list">
        {items.length === 0 ? (
          <article className="history-card">
            <strong>아직 추천 선택 기록이 없습니다.</strong>
            <span>추천 결과에서 프로젝트를 선택하면 히스토리가 쌓입니다.</span>
          </article>
        ) : (
          items.map((item) => (
            <article key={item.id} className="history-card">
              <strong>{item.projectTitle}</strong>
              <span>{item.scoreLabel}</span>
              <p>{item.reason}</p>
              <span>{item.createdAt.slice(0, 10)}</span>
            </article>
          ))
        )}
      </div>
    </section>
  );
}
