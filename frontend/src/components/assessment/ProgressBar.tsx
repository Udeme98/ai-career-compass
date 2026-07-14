interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressBar({
  currentStep,
  totalSteps,
}: ProgressBarProps) {
  const percentage = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="w-full">
      <div className="mb-2 flex justify-between text-sm text-zinc-400">
        <span>
          Step {currentStep + 1} of {totalSteps}
        </span>

        <span className="font-medium text-teal-400/80">
          {Math.round(percentage)}%
        </span>
      </div>

      <div className="h-2 w-full overflow-hidden rounded-full bg-white/[0.06] border border-white/[0.06]">
        <div
          className="h-full rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 transition-all duration-300 shadow-[0_0_12px_rgba(20,184,166,0.35)]"
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>
    </div>
  );
}
