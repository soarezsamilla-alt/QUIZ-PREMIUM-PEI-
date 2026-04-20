
"use client";

import React, { useState, useEffect } from "react";
import { QUIZ_STEPS } from "@/lib/quiz-data";
import { ProgressBar } from "./ProgressBar";
import { CategoryTag } from "./CategoryTag";
import { QuizOption } from "./QuizOption";
import { LoadingScreen } from "./LoadingScreen";
import { useRouter } from "next/navigation";

export function QuizContainer() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isFinishing, setIsFinishing] = useState<boolean>(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const router = useRouter();

  // Recupera o estado salvo ao montar o componente
  useEffect(() => {
    const savedStep = sessionStorage.getItem('pei_quiz_step');
    const savedFinishing = sessionStorage.getItem('pei_quiz_finishing');
    
    if (savedStep) {
      setCurrentStep(parseInt(savedStep, 10));
    }
    if (savedFinishing === 'true') {
      setIsFinishing(true);
    }
    
    setIsHydrated(true);

    // Tracking inicial
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('trackCustom', 'QuizStart');
    }
  }, []);

  // Salva o estado sempre que mudar
  useEffect(() => {
    if (isHydrated) {
      sessionStorage.setItem('pei_quiz_step', currentStep.toString());
      sessionStorage.setItem('pei_quiz_finishing', isFinishing.toString());
    }
  }, [currentStep, isFinishing, isHydrated]);

  const handleOptionSelect = (index: number) => {
    setSelectedOption(index);

    setTimeout(() => {
      if (currentStep < QUIZ_STEPS.length - 1) {
        const nextStep = currentStep + 1;
        setCurrentStep(nextStep);
        setSelectedOption(null);
        
        // Track Steps
        if (typeof window !== 'undefined' && window.fbq) {
          window.fbq('trackCustom', `QuizStep${nextStep + 1}`);
        }
      } else {
        setIsFinishing(true);
        if (typeof window !== 'undefined' && window.fbq) {
          window.fbq('trackCustom', 'QuizComplete');
        }
      }
    }, 400);
  };

  const handleLoadingComplete = () => {
    // Limpa o progresso ao concluir para que uma nova visita comece do zero
    sessionStorage.removeItem('pei_quiz_step');
    sessionStorage.removeItem('pei_quiz_finishing');
    router.push("/ofertas");
  };

  // Evita disparidade de hidratação (SSR vs Client)
  if (!isHydrated) {
    return null;
  }

  if (isFinishing) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  const step = QUIZ_STEPS[currentStep];

  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-12 px-4 bg-[#FDF5F9]">
      <ProgressBar currentStep={currentStep} totalSteps={QUIZ_STEPS.length} />
      
      <div className="w-full max-w-[480px] bg-[#FDFAFB] rounded-[24px] shadow-lg-custom border-t-2 border-b-2 border-rose-light overflow-hidden animate-slide-up">
        <div className="p-8 pb-10">
          <CategoryTag text={step.tag} />
          
          <h2 className="font-headline text-[24px] sm:text-[28px] font-bold text-[#2D2D2D] leading-tight mb-2">
            {step.question}
          </h2>
          
          <p className="text-[14px] sm:text-[15px] text-[#8B8B9E] mb-8">
            {step.subtitle}
          </p>
          
          <div className="space-y-3">
            {step.options.map((option, idx) => (
              <QuizOption
                key={idx}
                icon={option.icon}
                text={option.text}
                isSelected={selectedOption === idx}
                onClick={() => handleOptionSelect(idx)}
              />
            ))}
          </div>
        </div>
        
        {/* Decorative Gradient Footer */}
        <div className="h-1.5 bg-gradient-to-r from-gold via-rose to-lilac opacity-70" />
      </div>
    </div>
  );
}
