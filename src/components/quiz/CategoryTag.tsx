"use client";

import React from "react";

interface CategoryTagProps {
  text: string;
}

export function CategoryTag({ text }: CategoryTagProps) {
  return (
    <div className="inline-flex items-center gap-2 bg-[#FFE8EC] text-[#E8547A] px-3 py-1 rounded-full border border-[#FFE8EC] mb-4">
      <div className="w-2 h-2 rounded-full bg-[#E8547A]" />
      <span className="text-[10px] font-bold tracking-widest uppercase">
        {text}
      </span>
    </div>
  );
}
