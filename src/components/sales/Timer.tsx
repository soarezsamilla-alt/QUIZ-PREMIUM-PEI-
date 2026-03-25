"use client";

import React, { useState, useEffect } from "react";

export function Timer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 57,
    seconds: 44,
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
    <div className="timer-strip bg-gradient-to-br from-foreground to-[#4A2D5A] rounded-md p-4 px-5 flex items-center justify-between gap-3 my-7 shadow-md-custom">
      <div className="flex flex-col gap-1">
        <div className="timer-label text-[11px] font-bold tracking-[0.1em] uppercase text-white/60">
          ⏱ Oferta expira em
        </div>
        <div className="timer-digits flex gap-1.5 items-center">
          <div className="timer-unit text-center">
            <span className="timer-num font-headline text-[22px] font-bold text-white bg-white/10 px-2.5 py-1 rounded-[6px] block min-w-[40px]">
              {format(timeLeft.hours)}
            </span>
            <div className="timer-text text-[10px] text-white/50 mt-1">horas</div>
          </div>
          <span className="timer-sep text-lg text-rose-light font-bold mb-5">:</span>
          <div className="timer-unit text-center">
            <span className="timer-num font-headline text-[22px] font-bold text-white bg-white/10 px-2.5 py-1 rounded-[6px] block min-w-[40px]">
              {format(timeLeft.minutes)}
            </span>
            <div className="timer-text text-[10px] text-white/50 mt-1">min</div>
          </div>
          <span className="timer-sep text-lg text-rose-light font-bold mb-5">:</span>
          <div className="timer-unit text-center">
            <span className="timer-num font-headline text-[22px] font-bold text-white bg-white/10 px-2.5 py-1 rounded-[6px] block min-w-[40px]">
              {format(timeLeft.seconds)}
            </span>
            <div className="timer-text text-[10px] text-white/50 mt-1">seg</div>
          </div>
        </div>
      </div>
      <div className="text-right">
        <div className="text-[11px] text-white/50 mb-1">Economize</div>
        <div className="text-xl font-bold text-gold-light">R$ 209,00</div>
      </div>
    </div>
  );
}
