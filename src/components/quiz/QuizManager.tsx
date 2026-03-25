"use client";

import React, { useState } from "react";
import { QUIZ_STEPS } from "@/lib/quiz-data";
import { QuizStep } from "./QuizStep";
import { SalesPage } from "../sales/SalesPage";
import { LoadingStep } from "./LoadingStep";
import { cn } from "@/lib/utils";

export function QuizManager() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answers, setAnswers] = useState<any[]>([]);
  const [showLoading, setShowLoading] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const handleOptionSelect = (index: number) => {
    setSelectedOption(index);

    const currentAnswer = {
      tag: QUIZ_STEPS[currentStep].tag,
      question: QUIZ_STEPS[currentStep].question,
      selectedOptionText: QUIZ_STEPS[currentStep].options[index].text,
    };

    const newAnswers = [...answers, currentAnswer];
    setAnswers(newAnswers);

    // Transição automática para a próxima etapa ou para o loading
    setTimeout(() => {
      if (currentStep < QUIZ_STEPS.length - 1) {
        setCurrentStep(currentStep + 1);
        setSelectedOption(null);
      } else {
        setShowLoading(true);
      }
    }, 400);
  };

  const progressPct = Math.round(((currentStep + 1) / QUIZ_STEPS.length) * 100);

  if (isFinished) {
    return <SalesPage />;
  }

  if (showLoading) {
    return <LoadingStep onComplete={() => setIsFinished(true)} />;
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

      <div className="quiz-card w-full max-w-[480px] bg-lilac-pale rounded-[24px] shadow-lg-custom border-2 border-rose-light overflow-hidden">
        <QuizStep 
          step={QUIZ_STEPS[currentStep]} 
          selectedOption={selectedOption as number} 
          onSelect={handleOptionSelect} 
        />
        {/* Efeito estático na borda inferior do card */}
        <div className="quiz-card-footer h-[5px] bg-gradient-to-r from-rose via-lilac-deep to-gold" />
      </div>
    </section>
  );
}
