
"use client";

import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check, Clock, Sparkles, Zap, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface UpsellDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  basicUrl: string;
}

export function UpsellDialog({ isOpen, onOpenChange, basicUrl }: UpsellDialogProps) {
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutos em segundos

  useEffect(() => {
    if (!isOpen) return;
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const benefits = [
    "+200 Modelos PEI Editáveis",
    "+160 Atividades Lúdicas (BNCC)",
    "Todos os 6 Bônus Exclusivos",
    "Suporte VIP no WhatsApp",
    "Acesso Vitalício"
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[90vw] sm:max-w-[400px] rounded-[24px] p-0 overflow-hidden border-none shadow-2xl">
        <div className="bg-gradient-to-br from-[#2d1f36] to-[#4A2D5A] p-6 text-center relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose via-gold to-lilac" />
          
          <div className="inline-flex items-center gap-2 bg-rose/20 text-rose-light text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-4 border border-rose/30">
            <Sparkles size={12} /> Oferta Especial Limitada
          </div>
          
          <h2 className="text-2xl font-black text-white leading-tight mb-2">
            ESPERE, PROFESSORA! 🛑
          </h2>
          <p className="text-white/80 text-sm leading-relaxed mb-4">
            Não leve apenas o básico. Por apenas mais <span className="text-gold font-bold">R$ 10,00</span>, você garante o <span className="text-rose-light font-bold">PLANO PRO</span> completo agora!
          </p>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 flex items-center justify-center gap-3 border border-white/10 mb-2">
            <Clock size={18} className="text-rose animate-pulse" />
            <span className="text-xl font-mono font-black text-white tracking-wider">
              {formatTime(timeLeft)}
            </span>
          </div>
        </div>

        <div className="bg-white p-6 pt-8 relative">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gold text-white font-black text-[11px] uppercase tracking-tighter px-4 py-2 rounded-full shadow-lg border-2 border-white">
            MELHOR ESCOLHA ⭐⭐⭐⭐⭐
          </div>

          <div className="space-y-3 mb-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <Check size={12} className="text-green-600" strokeWidth={4} />
                </div>
                <span className="text-[13px] font-bold text-foreground/80 leading-none">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="text-center mb-6">
            <div className="text-muted-foreground text-xs line-through mb-1">De R$ 197,90 por apenas</div>
            <div className="font-headline text-5xl font-black text-[#2563EB] leading-none flex justify-center items-start">
              <span className="text-xl font-bold mt-2 mr-1">R$</span>
              19
              <span className="text-2xl font-bold mt-3 ml-1">,90</span>
            </div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-2">Pagamento Único</div>
          </div>

          <div className="flex flex-col gap-4">
            <Button asChild className="w-full h-auto py-5 bg-gradient-to-br from-rose to-rose-deep text-white font-black text-base rounded-full shadow-xl hover:scale-[1.02] transition-all btn-mobile-effect">
              <a href="https://pay.wiapy.com/w9nRplH8zg">
                QUERO O PLANO PRO COM DESCONTO
                <ArrowRight size={18} className="ml-2" />
              </a>
            </Button>
            
            <a 
              href={basicUrl}
              className="text-center text-[11px] font-bold text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors"
            >
              Não, quero continuar com o Plano Básico (R$ 9,90)
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 opacity-50 grayscale">
            <Zap size={12} />
            <span className="text-[10px] font-black uppercase tracking-widest">Acesso Imediato</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
