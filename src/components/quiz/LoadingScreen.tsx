"use client";

import React, { useEffect, useState } from "react";
import { Sparkles, ShieldCheck, Lock, Zap } from "lucide-react";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 4000; // 4 segundos
    const interval = 40;
    const step = (interval / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return Math.min(prev + step, 100);
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-[#FDF5F9]">
      <div className="w-full max-w-[480px] bg-[#FDFAFB] rounded-[24px] p-10 shadow-lg-custom border-t-2 border-b-2 border-rose-light overflow-hidden animate-slide-up">
        <div className="flex flex-col items-center text-center">
          {/* Sparkles Icon */}
          <div className="w-20 h-20 rounded-full bg-[#FFE8EC] flex items-center justify-center mb-6">
            <Sparkles className="w-10 h-10 text-[#E8547A]" />
          </div>

          <h2 className="font-headline text-[28px] font-bold text-[#2D2D2D] mb-2 leading-tight">
            Quase lá, Professora!
          </h2>
          
          <p className="text-[16px] text-[#E8547A] font-medium mb-6">
            Organizando bônus exclusivos para você...
          </p>

          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-100 bg-white shadow-sm mb-10">
            <ShieldCheck size={16} className="text-green-500" />
            <span className="text-[12px] font-bold text-gray-500">Gerando conteúdo 100% seguro</span>
          </div>

          {/* Progress Section */}
          <div className="w-full mb-8">
            <div className="flex justify-between items-center mb-2 px-1">
              <span className="text-[11px] font-black text-gray-400 tracking-widest uppercase">
                PROCESSANDO DADOS
              </span>
              <span className="text-[16px] font-black text-[#E8547A] tabular-nums">
                {Math.round(progress)}%
              </span>
            </div>
            <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden shadow-inner">
              <div 
                className="h-full bg-gradient-to-r from-rose via-gold to-lilac transition-all duration-300 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Warning Box */}
          <div className="bg-[#FFF0F2] p-4 rounded-2xl border border-[#FFE8EC] mb-10">
            <p className="text-[13px] text-[#E8547A] italic leading-relaxed">
              "Aguarde um instante. Não feche ou atualize esta página para não perder o seu material personalizado."
            </p>
          </div>

          {/* Trust Badges */}
          <div className="flex justify-between w-full px-2">
            <div className="flex flex-col items-center gap-1.5 opacity-60">
              <div className="w-8 h-8 rounded-full bg-lilac-pale flex items-center justify-center">
                <Lock size={14} className="text-lilac-deep" />
              </div>
              <span className="text-[9px] font-black uppercase tracking-tighter">Seguro</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 opacity-60">
              <div className="w-8 h-8 rounded-full bg-rose-pale flex items-center justify-center">
                <Zap size={14} className="text-rose-deep" />
              </div>
              <span className="text-[9px] font-black uppercase tracking-tighter">Rápido</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 opacity-60">
              <div className="w-8 h-8 rounded-full bg-gold-pale flex items-center justify-center">
                <Sparkles size={14} className="text-gold-deep" />
              </div>
              <span className="text-[9px] font-black uppercase tracking-tighter">Premium</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
