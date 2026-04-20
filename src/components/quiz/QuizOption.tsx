"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface QuizOptionProps {
  icon: string;
  text: string;
  isSelected: boolean;
  onClick: () => void;
}

export function QuizOption({ icon, text, isSelected, onClick }: QuizOptionProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-4 p-4 rounded-2xl border-2 transition-all duration-200 text-left min-h-[56px] group",
        isSelected 
          ? "bg-[#FDFAFB] border-[#E8547A] shadow-md-custom translate-x-1" 
          : "bg-white border-gray-100 hover:border-rose-light hover:shadow-sm-custom hover:translate-x-1"
      )}
    >
      <div className="w-12 h-12 shrink-0 rounded-xl bg-gray-50 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
        {icon}
      </div>
      
      <span className="flex-1 text-[15px] font-medium text-[#2D2D2D] leading-tight">
        {text}
      </span>
      
      <div className={cn(
        "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all",
        isSelected ? "border-[#E8547A] bg-[#E8547A]" : "border-gray-200"
      )}>
        {isSelected && (
          <div className="w-2.5 h-2.5 bg-white rounded-full" />
        )}
      </div>
    </button>
  );
}
