interface QuestionCardProps {
  title: string;
  options: string[];
  selectedValues: string[];
  onSelect: (value: string) => void;
}

export default function QuestionCard({
  title,
  options,
  selectedValues,
  onSelect,
}: QuestionCardProps) {
  return (
    <div>
      <h2 className="mb-6 text-2xl font-semibold">{title}</h2>

      <div className="grid gap-3">
        {options.map((option) => {
          const selected = selectedValues.includes(option);

          return (
            <button
              key={option}
              onClick={() => onSelect(option)}
              className={`rounded-xl border p-4 text-left transition-all
                ${
                  selected
                    ? "border-indigo-600 bg-indigo-50"
                    : "border-gray-300"
                }
              `}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
