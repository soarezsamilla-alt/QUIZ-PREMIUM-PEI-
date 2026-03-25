"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "Como vou receber o material?",
    a: "Após a confirmação do pagamento, você recebe o acesso imediatamente por E-mail ou WhatsApp, conforme sua preferência."
  },
  {
    q: "O material é editável?",
    a: "Sim! Todos os modelos são 100% editáveis no Word, permitindo adaptar para qualquer faixa etária e formato exigido pela sua escola."
  },
  {
    q: "É seguro comprar aqui?",
    a: "Sim! Seus dados estão 100% seguros. Utilizamos criptografia de ponta a ponta e as plataformas de pagamento mais confiáveis do mercado."
  },
  {
    q: "Funciona para qual ano escolar?",
    a: "Os modelos são pensados para do 1º ao 9º ano, além de modelos específicos para Educação Infantil (4 e 5 anos). São editáveis para adaptar a qualquer faixa etária."
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="faq-list flex flex-col gap-3 my-6">
      {FAQS.map((faq, idx) => (
        <div key={idx} className="faq-item bg-white border-1.5 border-border rounded-md overflow-hidden shadow-sm-custom">
          <div 
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            className="faq-q p-4 px-4.5 flex items-center justify-between gap-3 cursor-pointer text-sm font-semibold text-foreground transition-colors hover:bg-rose-pale"
          >
            <span>{faq.q}</span>
            <span className={cn(
              "faq-icon w-6 h-6 rounded-full flex items-center justify-center text-rose-deep border border-rose-light bg-rose-pale transition-all duration-300 font-bold text-[13px]",
              openIndex === idx && "rotate-45 bg-rose text-white border-rose"
            )}>
              <Plus size={14} strokeWidth={3} />
            </span>
          </div>
          <div className={cn(
            "faq-a transition-all duration-300 ease-in-out",
            openIndex === idx ? "max-h-52 opacity-100 py-4 px-4.5" : "max-h-0 opacity-0 py-0 px-4.5"
          )}>
            <p className="text-[13px] text-foreground/70 leading-relaxed border-t border-border pt-3">
              {faq.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
