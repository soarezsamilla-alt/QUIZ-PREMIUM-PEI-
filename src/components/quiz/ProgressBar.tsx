"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const percentage = Math.round(((currentStep + 1) / totalSteps) * 100);
  
  return (
    <div className="w-full max-w-[480px] mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-[11px] font-bold text-[#8B8B9E] uppercase tracking-tighter">
          ETAPA {currentStep + 1} DE {totalSteps}
        </span>
        <div className="bg-[#FFE8EC] text-[#E8547A] px-2 py-0.5 rounded-full text-[11px] font-black">
          {percentage}%
        </div>
      </div>
      
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-3">
        <div 
          className="h-full bg-gradient-to-r from-rose to-lilac-deep transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
      
      <div className="flex justify-center gap-3">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div 
            key={i}
            className={cn(
              "w-2.5 h-2.5 rounded-full transition-all duration-300",
              i < currentStep ? "bg-[#D4A843] scale-100" : 
              i === currentStep ? "bg-rose scale-125" : 
              "bg-gray-200 scale-100"
            )}
          />
        ))}
      </div>
    </div>
  );
}
