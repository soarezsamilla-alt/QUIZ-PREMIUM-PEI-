"use client";

import React from "react";
import { QuizStep as QuizStepType } from "@/lib/quiz-data";
import { cn } from "@/lib/utils";

interface QuizStepProps {
  step: QuizStepType;
  selectedOption: number;
  onSelect: (index: number) => void;
}

export function QuizStep({ step, selectedOption, onSelect }: QuizStepProps) {
  return (
    <div className="quiz-card-inner p-9 pb-8 animate-slide-up">
      <div className="quiz-tag inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-widest uppercase text-rose-deep bg-rose-pale border border-rose-light px-3 py-1 rounded-full mb-4 shadow-[0_0_15px_rgba(232,131,154,0.2)]">
        <div className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-rose"></span>
        </div>
        {step.tag}
      </div>
      <h2 className="quiz-question font-headline text-[22px] font-bold text-foreground leading-tight mb-2">
        {step.question}
      </h2>
      <p className="quiz-subtitle text-[13px] text-muted-foreground mb-7 font-normal">
        {step.subtitle}
      </p>
      <div className="quiz-options flex flex-col gap-3">
        {step.options.map((option, index) => (
          <div
            key={index}
            onClick={() => onSelect(index)}
            className={cn(
              "quiz-option relative flex items-center gap-3.5 p-4 rounded-md cursor-pointer transition-all duration-200 overflow-hidden border-1.5 border-transparent bg-white group shadow-sm-custom",
              selectedOption === index 
                ? "border-rose bg-rose-pale translate-x-1 shadow-[0_4px_20px_rgba(232,131,154,0.22)]"
                : "hover:border-rose-light hover:translate-x-1 hover:shadow-md-custom"
            )}
          >
            <div className={cn(
              "absolute inset-0 bg-gradient-to-br from-rose-pale to-lilac-pale opacity-0 transition-opacity duration-200",
              selectedOption !== index && "group-hover:opacity-100"
            )} />
            
            <span className="option-icon relative z-10 w-11 h-11 rounded-xl bg-lilac-pale flex items-center justify-center text-[22px] shadow-[0_2px_8px_rgba(180,120,160,0.12)] transition-transform group-hover:scale-110">
              {option.icon}
            </span>
            <span className="option-text relative z-10 text-sm font-medium text-foreground leading-relaxed flex-1">
              {option.text}
            </span>
            <span className={cn(
              "option-check relative z-10 w-[22px] h-[22px] rounded-full border-2 flex items-center justify-center transition-all duration-200 ml-auto",
              selectedOption === index ? "bg-rose border-rose" : "border-lilac-light"
            )}>
              <div className={cn(
                "w-[5px] h-[9px] border-white border-r-2 border-b-2 rotate-45 mb-1 transition-transform",
                selectedOption === index ? "scale-100" : "scale-0"
              )} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
