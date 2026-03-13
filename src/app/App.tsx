import { useState } from "react";
import { KeywordPicker } from "../features/recommendation/components/KeywordPicker";
import { RecommendationList } from "../features/recommendation/components/RecommendationList";
import { projectCatalog } from "../features/recommendation/data/projectCatalog";
import { recommendProjects } from "../features/recommendation/engine/recommendProjects";
import { keywordOptions } from "../features/recommendation/data/keywordOptions";
import { PlanningBoard } from "../features/planning/components/PlanningBoard";
import { planningSections } from "../features/planning/data/planningSections";

export function App() {
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([
    "backend",
    "finance",
    "portfolio",
  ]);

  const recommendations = recommendProjects(projectCatalog, selectedKeywords);

  function toggleKeyword(keyword: string) {
    setSelectedKeywords((current) =>
      current.includes(keyword)
        ? current.filter((item) => item !== keyword)
        : [...current, keyword],
    );
  }

  return (
    <main className="page-shell">
      <section className="hero">
        <p className="eyebrow">proc</p>
        <h1>프로젝트 추천과 브레인스토밍, 기획, 진행 기록을 한 화면에서 시작하기</h1>
        <p className="hero-copy">
          proc는 사용자가 관심 키워드를 고르면 적합한 프로젝트 주제를 추천하고,
          그 프로젝트를 실제로 진행할 때 필요한 기획과 기록 항목까지 함께 정리할
          수 있게 만드는 웹 페이지입니다.
        </p>
        <div className="hero-metrics">
          <div>
            <strong>{keywordOptions.length}</strong>
            <span>선택 키워드</span>
          </div>
          <div>
            <strong>{recommendations.length}</strong>
            <span>추천 결과</span>
          </div>
          <div>
            <strong>Flow</strong>
            <span>추천 → 기획 → 진행</span>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <p className="eyebrow">Recommendation</p>
          <h2>원하는 키워드를 고르면 어울리는 프로젝트 주제를 추천</h2>
        </div>
        <KeywordPicker
          keywords={keywordOptions}
          selectedKeywords={selectedKeywords}
          onToggle={toggleKeyword}
        />
        <RecommendationList projects={recommendations} />
      </section>

      <section className="section-block planning-block">
        <div className="section-heading">
          <p className="eyebrow">Planning Board</p>
          <h2>메모장이 아니라 프로젝트 진행에 특화된 기록 보드</h2>
        </div>
        <PlanningBoard sections={planningSections} />
      </section>
    </main>
  );
}
