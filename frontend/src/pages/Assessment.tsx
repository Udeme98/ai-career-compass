import { useState } from "react";
import ProgressBar from "../components/assessment/ProgressBar";
import QuestionCard from "../components/assessment/QuestionCard";
import StepNavigation from "../components/assessment/StepNavigation";
import StartScreen from "../components/assessment/StartScreen";
import { useAssessment } from "../hooks/useAssessment";
import { analyzeCareer } from "../api/careerApi";

import { useNavigate } from "react-router-dom";

export default function Assessment() {
  const [started, setStarted] = useState(false);
  const {
    step,
    currentStep,
    selectedValues,
    canProceed,
    handleSelect,
    handleNext,
    handleBack,
    totalSteps,
    isFirstStep,
    isLastStep,
    answers,
  } = useAssessment();

  const navigate = useNavigate();

  if (!started) {
    return <StartScreen onStart={() => setStarted(true)} />;
  }

  const handleSubmit = async () => {
    try {
      const results = await analyzeCareer(answers);

      navigate("/results", {
        state: {
          results,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#030408] text-zinc-300 overflow-x-hidden font-roboto selection:bg-teal-500/20 selection:text-teal-200 flex flex-col">
      <div className="absolute top-[-15%] left-[-15%] w-[65%] h-[60%] rounded-full bg-teal-950/15 blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[-15%] w-[60%] h-[55%] rounded-full bg-cyan-950/15 blur-[160px] pointer-events-none"></div>

      <main className="relative z-10 mx-auto w-full max-w-3xl flex-1 px-6 py-10 md:py-14">
        <h1 className="mb-10 text-center font-inter text-3xl font-bold tracking-tight text-white md:text-4xl">
          AI Career{" "}
          <span className="bg-gradient-to-r from-teal-200 via-cyan-400 to-teal-300 bg-clip-text text-transparent">
            Compass
          </span>
        </h1>

        <ProgressBar currentStep={step} totalSteps={totalSteps} />

        <div className="mt-8 rounded-xl border border-white/[0.08] bg-white/[0.02] p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-xl md:p-8">
          <QuestionCard
            title={currentStep.title}
            options={currentStep.options}
            selectedValues={selectedValues}
            onSelect={handleSelect}
          />

          <StepNavigation
            onBack={handleBack}
            onNext={() => {
              if (isLastStep) {
                handleSubmit();
                return;
              }

              handleNext();
            }}
            isFirstStep={isFirstStep}
            isLastStep={isLastStep}
            canProceed={canProceed}
          />
        </div>
      </main>
    </div>
  );
}
