"use client";

import React, { useState, useEffect } from "react";

export function Timer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    // Evita erros de hidratação garantindo que o tempo inicial seja consistente
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
    <div className="timer-container bg-rose-pale border border-rose-light/50 rounded-2xl p-4 mb-6 animate-pulse">
      <div className="text-[11px] font-black uppercase tracking-[0.15em] text-rose-deep mb-2">
        ⏳ Oferta expira em:
      </div>
      <div className="flex justify-center items-center gap-3">
        <div className="flex flex-col items-center">
          <span className="text-2xl font-black text-rose-deep tabular-nums leading-none">
            {format(timeLeft.hours)}
          </span>
          <span className="text-[9px] font-bold uppercase text-rose-deep/60 mt-1">horas</span>
        </div>
        <span className="text-xl font-black text-rose-deep/30 mb-4">:</span>
        <div className="flex flex-col items-center">
          <span className="text-2xl font-black text-rose-deep tabular-nums leading-none">
            {format(timeLeft.minutes)}
          </span>
          <span className="text-[9px] font-bold uppercase text-rose-deep/60 mt-1">min</span>
        </div>
        <span className="text-xl font-black text-rose-deep/30 mb-4">:</span>
        <div className="flex flex-col items-center">
          <span className="text-2xl font-black text-rose-deep tabular-nums leading-none">
            {format(timeLeft.seconds)}
          </span>
          <span className="text-[9px] font-bold uppercase text-rose-deep/60 mt-1">seg</span>
        </div>
      </div>
    </div>
  );
}
