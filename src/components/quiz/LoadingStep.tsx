"use client";

import React, { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";

interface LoadingStepProps {
  onComplete: () => void;
}

export function LoadingStep({ onComplete }: LoadingStepProps) {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  const messages = [
    "Analisando seu perfil pedagógico...",
    "Selecionando os melhores modelos de PEI...",
    "Organizando bônus exclusivos para você...",
    "Finalizando seu acesso personalizado..."
  ];

  useEffect(() => {
    const duration = 5000; // 5 segundos
    const interval = 50;
    const increment = (interval / duration) * 100;

    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + increment;
        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 200);
          return 100;
        }
        return newProgress;
      });
    }, interval);

    const messageTimer = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 1200);

    return () => {
      clearInterval(timer);
      clearInterval(messageTimer);
    };
  }, [onComplete]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-8 px-4">
      <div className="quiz-card w-full max-w-[480px] bg-lilac-pale rounded-[24px] shadow-lg-custom border-2 border-rose-light overflow-hidden animate-slide-up">
        <div className="p-9 py-12 text-center">
          <div className="w-16 h-16 bg-rose-pale rounded-full flex items-center justify-center mx-auto mb-6 border border-rose-light">
            <div className="w-8 h-8 border-4 border-rose border-t-transparent rounded-full animate-spin" />
          </div>
          
          <h2 className="font-headline text-[24px] font-bold text-foreground leading-tight mb-3">
            Preparando seus materiais...
          </h2>
          
          <p className="text-[15px] text-muted-foreground mb-8 min-h-[40px]">
            {messages[messageIndex]}
          </p>

          <div className="space-y-2">
            <Progress value={progress} className="h-2 bg-lilac-light" />
            <p className="text-[11px] font-bold text-rose-deep uppercase tracking-widest text-right">
              {Math.round(progress)}%
            </p>
          </div>
        </div>
        
        <div className="quiz-card-footer h-[5px] bg-gradient-to-r from-rose via-lilac-deep to-gold" />
      </div>
    </section>
  );
}
