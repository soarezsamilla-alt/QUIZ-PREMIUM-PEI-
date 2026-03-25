"use client";

import React, { useState } from "react";
import { QUIZ_STEPS } from "@/lib/quiz-data";
import { QuizStep } from "./QuizStep";
import { SalesPage } from "../sales/SalesPage";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function QuizManager() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answers, setAnswers] = useState<any[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  const handleNext = () => {
    if (selectedOption === null) return;

    const currentAnswer = {
      tag: QUIZ_STEPS[currentStep].tag,
      question: QUIZ_STEPS[currentStep].question,
      selectedOptionText: QUIZ_STEPS[currentStep].options[selectedOption].text,
    };

    const newAnswers = [...answers, currentAnswer];
    setAnswers(newAnswers);

    if (currentStep < QUIZ_STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
      setSelectedOption(null);
    } else {
      setIsFinished(true);
    }
  };

  const progressPct = Math.round(((currentStep + 1) / QUIZ_STEPS.length) * 100);

  if (isFinished) {
    return <SalesPage />;
  }

  return (
    <section id="quiz-section" className="min-h-screen flex flex-col items-center p-8 px-4 pb-12">
      <div className="quiz-header w-full max-w-[480px] mb-7">
        <div className="progress-label flex justify-between items-center mb-2.5">
          <span className="progress-step text-[11px] font-semibold tracking-widest uppercase text-muted-foreground">
            Etapa {currentStep + 1} de {QUIZ_STEPS.length}
          </span>
          <span className="progress-pct text-[12px] font-bold text-lilac-deep bg-lilac-pale px-2.5 py-1 rounded-full border border-lilac-light">
            {progressPct}%
          </span>
        </div>
        <div className="progress-track h-1.5 bg-lilac-light rounded-full overflow-hidden">
          <div 
            className="progress-fill h-full rounded-full bg-gradient-to-r from-rose to-lilac-deep transition-all duration-500" 
            style={{ width: `${progressPct}%` }}
          />
        </div>
        <div className="progress-dots flex justify-center gap-2 mt-2.5">
          {QUIZ_STEPS.map((_, i) => (
            <span 
              key={i} 
              className={cn(
                "progress-dot w-2 h-2 rounded-full transition-all duration-300",
                i < currentStep ? "bg-gold" : i === currentStep ? "bg-gradient-to-br from-rose to-lilac-deep scale-125" : "bg-lilac-light"
              )} 
            />
          ))}
        </div>
      </div>

      <div className="quiz-card w-full max-w-[480px] bg-white rounded-[24px] shadow-lg-custom border border-border overflow-hidden">
        <QuizStep 
          step={QUIZ_STEPS[currentStep]} 
          selectedOption={selectedOption as number} 
          onSelect={setSelectedOption} 
        />
        <div className="quiz-card-footer h-[5px] bg-gradient-to-r from-rose via-lilac-deep to-gold" />
      </div>

      <div className={cn(
        "quiz-btn-wrap w-full max-w-[480px] mt-4 transition-all duration-300",
        selectedOption !== null ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none"
      )}>
        <Button 
          onClick={handleNext}
          className="w-full p-4 h-auto bg-gradient-to-br from-rose-deep to-lilac-deep text-white font-bold rounded-md shadow-[0_4px_20px_rgba(196,90,114,0.35)] hover:translate-y-[-2px] hover:shadow-[0_8px_28px_rgba(196,90,114,0.42)] transition-all"
        >
          <span>{currentStep === QUIZ_STEPS.length - 1 ? "Ver meu resultado!" : "Próxima pergunta"}</span>
          <span className="w-5 h-5 rounded-full bg-white/25 flex items-center justify-center ml-2">
            {currentStep === QUIZ_STEPS.length - 1 ? "✨" : <ArrowRight size={12} />}
          </span>
        </Button>
      </div>
    </section>
  );
}
