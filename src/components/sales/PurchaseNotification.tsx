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

const CITIES = [
  "São Paulo", "Rio de Janeiro", "Belo Horizonte", "Curitiba", 
  "Porto Alegre", "Salvador", "Fortaleza", "Brasília", "Recife", "Manaus",
  "Goiânia", "Belém", "Florianópolis", "Vitória", "Cuiabá"
];

export function PurchaseNotification() {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({ name: "", city: "" });

  useEffect(() => {
    const showNotification = () => {
      const randomName = NAMES[Math.floor(Math.random() * NAMES.length)];
      const randomCity = CITIES[Math.floor(Math.random() * CITIES.length)];
      setData({ name: randomName, city: randomCity });
      setVisible(true);

      // Fica visível por 3.5 segundos
      setTimeout(() => {
        setVisible(false);
      }, 3500);
    };

    // Delay inicial de 6 segundos conforme solicitado
    const initialTimeout = setTimeout(() => {
      showNotification();
      
      // Ciclo de repetição: Aparece a cada ~9.5 segundos (6s de intervalo + 3.5s visível)
      const interval = setInterval(showNotification, 9500);
      return () => clearInterval(interval);
    }, 6000);

    return () => clearTimeout(initialTimeout);
  }, []);

  return (
    <div className={cn(
      "fixed bottom-4 left-4 z-[1000] transition-all duration-700 ease-in-out transform sm:bottom-6 sm:left-6",
      visible ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-95 pointer-events-none"
    )}>
      <div className="bg-white border-2 border-rose-light rounded-[20px] p-3.5 pr-6 shadow-lg-custom flex items-center gap-4 max-w-[300px]">
        <div className="relative shrink-0">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-pale to-lilac-pale flex items-center justify-center border border-rose-light shadow-sm">
            <ShoppingBag size={20} className="text-rose-deep" />
          </div>
          <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green-500 border-2 border-white flex items-center justify-center">
            <CheckCircle size={10} className="text-white" strokeWidth={4} />
          </div>
        </div>
        <div className="flex flex-col min-w-0">
          <p className="text-[13px] font-bold text-foreground leading-tight truncate">
            {data.name}
          </p>
          <p className="text-[11px] text-muted-foreground leading-snug mt-0.5">
            Acabou de adquirir o material em {data.city}
          </p>
          <div className="flex items-center gap-1 mt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[9px] font-black text-green-600 uppercase tracking-tighter">Acesso Liberado</span>
          </div>
        </div>
      </div>
    </div>
  );
}
