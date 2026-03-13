import type { RecommendationResult } from "../../recommendation/types";

type PortfolioOutputsProps = {
  recommendation: RecommendationResult | undefined;
  trackLabel: string;
};

export function PortfolioOutputs({ recommendation, trackLabel }: PortfolioOutputsProps) {
  if (!recommendation) {
    return null;
  }

  const { project, reason, matchLabel } = recommendation;
  const resumePoint = `${project.title}를 직접 설계하며 ${project.value}`;
  const interviewQuestion = `${trackLabel} 지원자로서 ${project.title}에서 가장 중요하게 설계한 기준은 무엇이었나요?`;

  return (
    <section className="section-block">
      <div className="section-heading">
        <p className="eyebrow">Portfolio Output</p>
        <h2>선택한 프로젝트를 취업 문서와 면접 언어로 바꾸기</h2>
      </div>
      <div className="output-grid">
        <article className="output-card">
          <p className="output-label">이력서 한 줄</p>
          <h3>{resumePoint}</h3>
        </article>
        <article className="output-card">
          <p className="output-label">추천 이유 요약</p>
          <h3>{matchLabel}</h3>
          <p>{reason}</p>
        </article>
        <article className="output-card">
          <p className="output-label">예상 면접 질문</p>
          <h3>{interviewQuestion}</h3>
        </article>
        <article className="output-card">
          <p className="output-label">README 체크리스트</p>
          <ul className="output-list">
            {project.deliverables.map((deliverable) => (
              <li key={deliverable}>{deliverable}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
