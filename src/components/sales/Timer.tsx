"use client";

import React, { useState, useEffect } from "react";
import { Clock } from "lucide-react";

export function Timer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 0;
          minutes = 0;
          seconds = 0;
          clearInterval(timer);
        }
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const format = (num: number) => String(num).padStart(2, "0");

  return (
    <div className="w-[calc(100%+3rem)] bg-[#2d1f36] text-white py-2.5 px-4 rounded-t-xl flex items-center justify-center gap-3 -mt-8 -mx-6 mb-7 border-b border-black/10 shadow-sm">
      {/* Nome (Texto) antes */}
      <div className="flex items-center gap-1.5 shrink-0">
        <Clock size={14} strokeWidth={3} className="animate-pulse text-[#FF0000]" />
        <span className="text-[10px] font-black uppercase tracking-tight leading-none text-left text-[#FF0000]">
          A oferta expira em
        </span>
      </div>

      {/* Temporalizador (Números) depois */}
      <div className="flex items-center gap-1 shrink-0">
        <div className="bg-white text-[#2d1f36] rounded-md w-8 h-8 flex items-center justify-center font-black text-base shadow-sm tabular-nums">
          {format(timeLeft.hours)}
        </div>
        <span className="font-bold text-white/50 text-sm">:</span>
        <div className="bg-white text-[#2d1f36] rounded-md w-8 h-8 flex items-center justify-center font-black text-base shadow-sm tabular-nums">
          {format(timeLeft.minutes)}
        </div>
        <span className="font-bold text-white/50 text-sm">:</span>
        <div className="bg-white text-[#2d1f36] rounded-md w-8 h-8 flex items-center justify-center font-black text-base shadow-sm tabular-nums">
          {format(timeLeft.seconds)}
        </div>
      </div>
    </div>
  );
}
