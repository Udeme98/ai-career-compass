import { ArrowRight } from "lucide-react";

interface StepNavigationProps {
  onBack: () => void;
  onNext: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
  canProceed?: boolean;
  isSubmitting?: boolean;
}

export default function StepNavigation({
  onBack,
  onNext,
  isFirstStep,
  isLastStep,
  canProceed,
  isSubmitting = false,
}: StepNavigationProps) {
  return (
    <div className="mt-8 flex justify-between gap-3">
      <button
        disabled={isFirstStep || isSubmitting}
        onClick={onBack}
        className="rounded-xl border border-white/[0.08] bg-white/[0.02] px-5 py-2.5 text-zinc-400 transition-all hover:border-white/[0.14] hover:bg-white/[0.04] hover:text-zinc-200 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Back
      </button>

      <button
        onClick={onNext}
        disabled={!canProceed || isSubmitting}
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 px-5 py-2.5 font-bold text-zinc-950 shadow-[0_0_25px_rgba(20,184,166,0.25)] transition-all hover:from-teal-400 hover:to-cyan-400 hover:shadow-[0_0_35px_rgba(20,184,166,0.35)] disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
      >
        {isSubmitting ? "Processing..." : isLastStep ? "Finish" : "Next"}
        {!isSubmitting && <ArrowRight className="h-4 w-4" />}
      </button>
    </div>
  );
}
