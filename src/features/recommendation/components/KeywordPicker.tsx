import type { KeywordOption } from "../types";

type KeywordPickerProps = {
  keywords: readonly KeywordOption[];
  selectedKeywords: string[];
  onToggle: (keyword: string) => void;
};

export function KeywordPicker({
  keywords,
  selectedKeywords,
  onToggle,
}: KeywordPickerProps) {
  return (
    <div className="keyword-picker">
      {keywords.map((keyword) => {
        const isSelected = selectedKeywords.includes(keyword.id);

        return (
          <button
            key={keyword.id}
            type="button"
            className={isSelected ? "keyword-chip active" : "keyword-chip"}
            onClick={() => onToggle(keyword.id)}
          >
            <span className="keyword-chip-label">#{keyword.label}</span>
            <span className="keyword-chip-copy">{keyword.description}</span>
          </button>
        );
      })}
    </div>
  );
}

