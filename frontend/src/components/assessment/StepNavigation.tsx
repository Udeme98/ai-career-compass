interface StepNavigationProps {
  onBack: () => void;
  onNext: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
  canProceed?: boolean;
}

export default function StepNavigation({
  onBack,
  onNext,
  isFirstStep,
  isLastStep,
  canProceed,
}: StepNavigationProps) {
  return (
    <div className="mt-8 flex justify-between">
      <button
        disabled={isFirstStep}
        onClick={onBack}
        className="rounded-lg border px-5 py-2 disabled:opacity-40"
      >
        Back
      </button>

      <button
        onClick={onNext}
        disabled={!canProceed}
        className="rounded-lg bg-indigo-600 px-5 py-2 text-white disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLastStep ? "Finish" : "Next"}
      </button>
    </div>
  );
}
