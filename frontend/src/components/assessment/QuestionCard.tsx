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
      <h2 className="mb-6 font-inter text-xl font-semibold tracking-tight text-white md:text-2xl">
        {title}
      </h2>

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
                    ? "border-teal-500/40 bg-teal-500/10 text-white shadow-[0_0_20px_rgba(20,184,166,0.12)]"
                    : "border-white/[0.08] bg-white/[0.02] text-zinc-400 hover:border-white/[0.14] hover:bg-white/[0.04] hover:text-zinc-200"
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
