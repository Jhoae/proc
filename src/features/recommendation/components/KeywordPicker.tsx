type KeywordPickerProps = {
  keywords: readonly string[];
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
        const isSelected = selectedKeywords.includes(keyword);

        return (
          <button
            key={keyword}
            type="button"
            className={isSelected ? "keyword-chip active" : "keyword-chip"}
            onClick={() => onToggle(keyword)}
          >
            #{keyword}
          </button>
        );
      })}
    </div>
  );
}

