import { useState } from "react";
import { assessmentSteps } from "../data/assessmentQuestions";
import type { AssessmentAnswers } from "../types/assessment";

const initialAnswers: AssessmentAnswers = {
  interests: [],
  skills: [],
  learningStyle: "",
  weeklyHours: "",
  careerGoals: [],
  personalityTraits: [],
};

export function useAssessment() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<AssessmentAnswers>(initialAnswers);
  const currentStep = assessmentSteps[step];

  const handleSelect = (value: string) => {
    const field = currentStep.id as keyof AssessmentAnswers;

    setAnswers((prev) => {
      const currentValue = prev[field];

      if (Array.isArray(currentValue)) {
        const exists = currentValue.includes(value);

        return {
          ...prev,
          [field]: exists
            ? currentValue.filter((item) => item !== value)
            : [...currentValue, value],
        };
      }

      return {
        ...prev,
        [field]: value,
      };
    });
  };

  const handleNext = () => {
    if (step < assessmentSteps.length - 1) {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep((prev) => prev - 1);
    }
  };

  const currentAnswer = answers[currentStep.id as keyof AssessmentAnswers];

  const canProceed = Array.isArray(currentAnswer)
    ? currentAnswer.length > 0
    : Boolean(currentAnswer);

  const selectedValues = Array.isArray(currentAnswer)
    ? currentAnswer
    : currentAnswer
      ? [currentAnswer]
      : [];

  return {
    step,
    answers,
    currentStep,
    selectedValues,
    canProceed,
    handleNext,
    handleBack,
    handleSelect,
    totalSteps: assessmentSteps.length,
    isFirstStep: step === 0,
    isLastStep: step === assessmentSteps.length - 1,
  };
}
