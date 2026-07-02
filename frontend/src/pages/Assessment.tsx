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
    <div className="mx-auto max-w-3xl p-6">
      <h1 className="mb-8 text-center text-4xl font-bold">AI Career Compass</h1>

      <ProgressBar currentStep={step} totalSteps={totalSteps} />

      <div className="mt-8 rounded-2xl border p-8 shadow-sm">
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
    </div>
  );
}
