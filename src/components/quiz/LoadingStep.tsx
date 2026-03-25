"use client";

import React, { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Sparkles, ShieldCheck } from "lucide-react";

interface LoadingStepProps {
  onComplete: () => void;
}

export function LoadingStep({ onComplete }: LoadingStepProps) {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  const messages = [
    "Analisando seu perfil pedagógico...",
    "Selecionando os melhores modelos de PEI...",
    "Buscando estratégias específicas para seus alunos...",
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
    }, 1000);

    return () => {
      clearInterval(timer);
      clearInterval(messageTimer);
    };
  }, [onComplete]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-8 px-4 bg-texture">
      <div className="quiz-card w-full max-w-[500px] bg-lilac-pale rounded-[32px] shadow-lg-custom border-2 border-rose-light overflow-hidden animate-slide-up relative">
        {/* Glow effect background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-rose to-transparent opacity-50" />
        
        <div className="p-10 py-14 text-center">
          {/* Pulsing Icon Container */}
          <div className="relative w-20 h-20 mx-auto mb-8">
            <div className="absolute inset-0 bg-rose/20 rounded-full animate-ping" />
            <div className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md-custom border border-rose-light">
              <Sparkles className="w-10 h-10 text-rose animate-pulse" />
            </div>
          </div>
          
          <h2 className="font-headline text-[28px] font-bold text-foreground leading-tight mb-4">
            Quase lá, Professora!
          </h2>
          
          <div className="min-h-[60px] flex flex-col items-center justify-center mb-8">
            <p className="text-[17px] font-medium text-rose-deep animate-pulse mb-1">
              {messages[messageIndex]}
            </p>
            <div className="flex items-center gap-1.5 text-[12px] text-muted-foreground bg-white/50 px-3 py-1 rounded-full border border-rose-light/30">
              <ShieldCheck size={14} className="text-[#4ADE80]" />
              <span>Gerando conteúdo 100% seguro</span>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="relative h-3 bg-lilac-light rounded-full overflow-hidden shadow-inner">
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-rose via-lilac-deep to-gold transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between items-center px-1">
              <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">Processando dados</span>
              <span className="text-[14px] font-black text-rose-deep tabular-nums">
                {Math.round(progress)}%
              </span>
            </div>
          </div>

          {/* Retention Message */}
          <div className="bg-rose-pale border border-rose-light/50 p-4 rounded-2xl">
            <p className="text-[13px] text-rose-deep font-bold leading-relaxed italic">
              "Aguarde um instante. Não feche ou atualize esta página para não perder o seu material personalizado."
            </p>
          </div>
        </div>
        
        <div className="quiz-card-footer h-[6px] bg-gradient-to-r from-rose via-lilac-deep to-gold" />
      </div>

      {/* Trust elements below card */}
      <div className="mt-8 flex items-center gap-6 opacity-60">
        <div className="flex flex-col items-center gap-1">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
            <span className="text-xs">🔒</span>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-tighter">Seguro</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
            <span className="text-xs">⚡</span>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-tighter">Rápido</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
            <span className="text-xs">✨</span>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-tighter">Premium</span>
        </div>
      </div>
    </section>
  );
}
