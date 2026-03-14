import type { RecommendationResult } from "../../recommendation/types";
import type { ProcWorkspace } from "../../storage/types";
import { buildPortfolioSummary } from "../utils/buildPortfolioSummary";

type PortfolioOutputsProps = {
  recommendation: RecommendationResult | undefined;
  trackLabel: string;
  workspace: ProcWorkspace | null;
};

export function PortfolioOutputs({
  recommendation,
  trackLabel,
  workspace,
}: PortfolioOutputsProps) {
  if (!recommendation || !workspace) {
    return null;
  }

  const { project, reason, matchLabel } = recommendation;
  const portfolio = buildPortfolioSummary(workspace, recommendation, trackLabel);
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
          <h3>{portfolio.resumeSummary}</h3>
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
            {portfolio.recommendedDeliverables.map((deliverable) => (
              <li key={deliverable}>{deliverable}</li>
            ))}
          </ul>
        </article>
        <article className="output-card output-card-wide">
          <p className="output-label">README 초안</p>
          <pre className="export-block">{portfolio.readmeDraft}</pre>
        </article>
        <article className="output-card output-card-wide">
          <p className="output-label">면접 답변 초안</p>
          <pre className="export-block">{portfolio.interviewAnswer}</pre>
        </article>
      </div>
    </section>
  );
}
