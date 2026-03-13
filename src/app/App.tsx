import { useState } from "react";
import { KeywordPicker } from "../features/recommendation/components/KeywordPicker";
import { RecommendationList } from "../features/recommendation/components/RecommendationList";
import { projectCatalog } from "../features/recommendation/data/projectCatalog";
import { recommendProjects } from "../features/recommendation/engine/recommendProjects";
import { keywordOptions } from "../features/recommendation/data/keywordOptions";
import { PlanningBoard } from "../features/planning/components/PlanningBoard";
import { planningSections } from "../features/planning/data/planningSections";
import { usePlanningRecord } from "../features/planning/hooks/usePlanningRecord";
import { createInitialRecord } from "../features/planning/utils/createInitialRecord";

export function App() {
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([
    "backend",
    "finance",
    "portfolio",
  ]);
  const { record, setRecord } = usePlanningRecord();

  const recommendations = recommendProjects(projectCatalog, selectedKeywords);

  function toggleKeyword(keyword: string) {
    setSelectedKeywords((current) =>
      current.includes(keyword)
        ? current.filter((item) => item !== keyword)
        : [...current, keyword],
    );
  }

  function handleSelectProject(title: string) {
    setRecord((current) => ({
      ...current,
      selectedTopic: title,
      updatedAt: new Date().toISOString(),
    }));
  }

  function handleProjectNameChange(projectName: string) {
    setRecord((current) => ({
      ...current,
      projectName,
      updatedAt: new Date().toISOString(),
    }));
  }

  function handleFieldChange(
    sectionId: string,
    field: "title" | "notes" | "nextAction",
    value: string,
  ) {
    setRecord((current) => ({
      ...current,
      updatedAt: new Date().toISOString(),
      sections: {
        ...current.sections,
        [sectionId]: {
          ...current.sections[sectionId],
          [field]: value,
        },
      },
    }));
  }

  function resetRecord() {
    setRecord(createInitialRecord(planningSections));
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
            <strong>{selectedKeywords.length}</strong>
            <span>선택한 키워드</span>
          </div>
          <div>
            <strong>{recommendations.length}</strong>
            <span>추천 결과</span>
          </div>
          <div>
            <strong>{record.updatedAt.slice(0, 10)}</strong>
            <span>마지막 저장일</span>
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
        <RecommendationList
          projects={recommendations}
          onSelectProject={handleSelectProject}
          selectedProjectTitle={record.selectedTopic}
        />
      </section>

      <section className="section-block planning-block">
        <div className="section-heading">
          <p className="eyebrow">Planning Board</p>
          <h2>메모장이 아니라 프로젝트 진행에 특화된 기록 보드</h2>
        </div>
        <div className="planning-toolbar">
          <label className="project-meta-field">
            <span>내 프로젝트 이름</span>
            <input
              value={record.projectName}
              onChange={(event) => handleProjectNameChange(event.target.value)}
              placeholder="예: proc 취업 포트폴리오 MVP"
            />
          </label>
          <label className="project-meta-field">
            <span>선택한 추천 주제</span>
            <input value={record.selectedTopic} readOnly />
          </label>
          <button type="button" className="reset-button" onClick={resetRecord}>
            기록 초기화
          </button>
        </div>
        <PlanningBoard
          sections={planningSections}
          record={record}
          onFieldChange={handleFieldChange}
        />
      </section>
    </main>
  );
}
