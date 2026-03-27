"use client";

import React, { useState, useEffect } from "react";
import { ShoppingBag, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const NAMES = [
  "Ana Paula", "Maria Eduarda", "Juliana Costa", "Camila Oliveira", 
  "Beatriz Santos", "Fernanda Lima", "Larissa Ferreira", "Bruna Rocha",
  "Amanda Silveira", "Renata Gomes", "Letícia Martins", "Patrícia Silva",
  "Gabriela Souza", "Vanessa Alves", "Mônica Pereira", "Cristiane Melo",
  "Sônia Regina", "Aline Barbosa", "Carla Mendes", "Eliane Rocha"
];

export function PurchaseNotification() {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({ name: "" });

  useEffect(() => {
    const showNotification = () => {
      const randomName = NAMES[Math.floor(Math.random() * NAMES.length)];
      setData({ name: randomName });
      setVisible(true);

      // Fica visível por 3.5 segundos
      setTimeout(() => {
        setVisible(false);
      }, 3500);
    };

    // Delay inicial de 8 segundos conforme solicitado
    const initialTimeout = setTimeout(() => {
      showNotification();
      
      // Ciclo de repetição: Aparece a cada ~11.5 segundos (8s de intervalo + 3.5s visível)
      const interval = setInterval(showNotification, 11500);
      return () => clearInterval(interval);
    }, 8000);

    return () => clearTimeout(initialTimeout);
  }, []);

  return (
    <div className={cn(
      "fixed bottom-4 left-4 z-[1000] transition-all duration-700 ease-in-out transform sm:bottom-6 sm:left-6",
      visible ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-95 pointer-events-none"
    )}>
      <div className="bg-white border-2 border-rose-light/60 rounded-[18px] p-2.5 pr-5 shadow-md-custom flex items-center gap-3.5 max-w-[260px]">
        <div className="relative shrink-0">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-pale to-lilac-pale flex items-center justify-center border border-rose-light shadow-sm">
            <ShoppingBag size={16} className="text-rose-deep" />
          </div>
          <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-green-500 border-2 border-white flex items-center justify-center">
            <CheckCircle size={8} className="text-white" strokeWidth={4} />
          </div>
        </div>
        <div className="flex flex-col min-w-0">
          <div className="flex items-center gap-1.5">
            <p className="text-[12px] font-bold text-foreground leading-tight truncate">
              {data.name}
            </p>
            <span className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
          </div>
          <p className="text-[11px] text-muted-foreground leading-tight mt-0.5 font-medium">
            Acabou de comprar
          </p>
          <p className="text-[9px] font-black text-rose-deep uppercase tracking-tighter mt-0.5 opacity-80">
            Acesso Liberado
          </p>
        </div>
      </div>
    </div>
  );
}
