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
    <div className="w-full bg-[#CC0000] text-white py-4 px-4 rounded-t-xl flex flex-col items-center gap-2 -mt-8 -mx-6 mb-8 w-[calc(100%+3rem)]">
      <div className="flex items-center gap-2 text-[13px] font-black uppercase tracking-wider">
        <Clock size={16} strokeWidth={3} className="animate-pulse" />
        <span>A oferta expira em:</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex flex-col items-center gap-1">
          <div className="bg-white text-[#CC0000] rounded-lg w-12 h-12 flex items-center justify-center font-black text-2xl shadow-inner tabular-nums">
            {format(timeLeft.hours)}
          </div>
          <span className="text-[9px] font-bold uppercase opacity-80">horas</span>
        </div>
        <span className="text-xl font-black mb-5 text-white/50">:</span>
        <div className="flex flex-col items-center gap-1">
          <div className="bg-white text-[#CC0000] rounded-lg w-12 h-12 flex items-center justify-center font-black text-2xl shadow-inner tabular-nums">
            {format(timeLeft.minutes)}
          </div>
          <span className="text-[9px] font-bold uppercase opacity-80">min</span>
        </div>
        <span className="text-xl font-black mb-5 text-white/50">:</span>
        <div className="flex flex-col items-center gap-1">
          <div className="bg-white text-[#CC0000] rounded-lg w-12 h-12 flex items-center justify-center font-black text-2xl shadow-inner tabular-nums">
            {format(timeLeft.seconds)}
          </div>
          <span className="text-[9px] font-bold uppercase opacity-80">seg</span>
        </div>
      </div>
    </div>
  );
}
