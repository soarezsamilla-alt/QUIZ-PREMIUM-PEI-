
"use client";

import React, { useState, useEffect } from "react";
import { Timer } from "./Timer";
import { FaqSection } from "./FaqSection";
import { Check, ArrowRight, ShieldCheck, Lock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

export function SalesPage() {
  const [visitors, setVisitors] = useState(6);

  useEffect(() => {
    const interval = setInterval(() => {
      // Gera um número aleatório entre 4 e 12 para manter o realismo
      const newVisitors = Math.floor(Math.random() * (12 - 4 + 1)) + 4;
      setVisitors(newVisitors);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="sales-section" className="flex flex-col items-center animate-slide-up">
      {/* Barra de Prova Social Fixa */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] w-fit pointer-events-none">
        <div className="social-proof-bar inline-flex items-center gap-2 bg-foreground/90 border border-white/10 backdrop-blur-md p-2 px-5 rounded-full text-[11px] text-white font-medium shadow-lg transition-all duration-500">
          <span className="live-dot w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.6)]" />
          <span>{visitors} professoras acessando agora</span>
        </div>
      </div>

      {/* HERO */}
      <div className="sales-hero w-full bg-gradient-to-br from-foreground via-[#4A2D5A] to-[#3A2048] p-12 px-6 pb-14 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[30%] left-[20%] w-[70%] h-[60%] rounded-full bg-rose/18 blur-[80px]" />
          <div className="absolute bottom-[70%] right-[80%] w-[60%] h-[50%] rounded-full bg-lilac/18 blur-[80px]" />
        </div>

        <div className="h-10" /> {/* Espaçador para a barra fixa não cobrir o conteúdo inicial */}

        <div className="hero-badge relative z-10 inline-block text-[11px] font-bold tracking-[0.12em] uppercase text-gold bg-gold/15 border border-gold/40 p-1.5 px-3.5 rounded-full mb-4.5">
          ✨ Material Completo Liberado
        </div>

        <h1 className="hero-title relative z-10 font-headline text-3xl font-bold text-white leading-tight mb-3.5 max-w-[400px] mx-auto">
          Tudo pronto, Professora!<br />
          <em className="italic text-gold-light">Seus PEIs nunca mais<br />serão um problema.</em>
        </h1>

        <p className="hero-sub relative z-10 text-[16px] text-white/75 leading-relaxed max-w-[480px] mx-auto mb-7">
          Pare de entregar PEI pela metade. Receba <strong className="text-rose-light font-semibold">+200 modelos prontos e editáveis,</strong> planejados por especialistas em educação inclusiva. Servem do 1º ao 9º ano. Além de ser editáveis você consegue adaptar para qualquer faixa etária e qualquer formato exigido pela sua escola.
        </p>

        <Button asChild className="relative z-10 h-auto p-4.5 px-9 bg-gradient-to-br from-rose to-rose-deep text-white font-bold rounded-full shadow-[0_8px_32px_rgba(196,90,114,0.45)] hover:translate-y-[-3px] hover:shadow-[0_14px_40px_rgba(196,90,114,0.55)] transition-all">
          <a href="#preco">
            <span>Quero meus modelos!</span>
            <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center ml-2.5">
              <ArrowRight size={16} />
            </span>
          </a>
        </Button>
      </div>

      <div className="sales-content w-full max-w-[520px] px-5">
        <div className="h-10" />

        {/* AMOSTRAS */}
        <h2 className="section-title font-headline text-[22px] font-bold text-foreground text-center leading-tight mb-2">
          Veja algumas <em className="italic text-lilac-deep">amostras</em>
        </h2>
        <p className="section-sub text-sm text-muted-foreground text-center leading-relaxed mb-10">
          Modelos pensados para tornar lecionar mais divertido e inclusivo
        </p>

        <div className="samples-carousel-container relative px-8 mb-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {PlaceHolderImages.map((sample, index) => (
                <CarouselItem key={index} className="basis-1/2 sm:basis-1/3">
                  <div className="sample-card-item p-1">
                    <div className="relative aspect-[3/4] rounded-xl overflow-hidden border-2 border-border shadow-sm-custom hover:border-rose-light transition-all">
                      <Image
                        src={sample.imageUrl}
                        alt={sample.description}
                        fill
                        className="object-cover"
                        data-ai-hint={sample.imageHint}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-3">
                        <span className="text-[10px] text-white font-bold leading-tight">{sample.description}</span>
                      </div>
                      <div className="sample-watermark absolute top-4 left-4 -rotate-12 pointer-events-none">
                        <span className="text-[10px] font-bold tracking-widest uppercase text-white/30 border border-white/20 p-1 px-2 rounded-sm backdrop-blur-sm">
                          AMOSTRA
                        </span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-[-35px] border-lilac-light text-lilac-deep bg-lilac-pale hover:bg-lilac-light" />
            <CarouselNext className="right-[-35px] border-lilac-light text-lilac-deep bg-lilac-pale hover:bg-lilac-light" />
          </Carousel>
        </div>

        <div className="section-divider flex items-center gap-2.5 my-10 mb-7">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <span className="text-base opacity-60">✦</span>
          <div className="flex-1 h-px bg-gradient-to-r from-border via-border to-transparent" />
        </div>

        {/* O QUE VOCÊ RECEBE */}
        <h2 className="section-title font-headline text-[22px] font-bold text-foreground text-center leading-tight mb-2">
          O que você vai <em className="italic text-lilac-deep">receber hoje</em>
        </h2>
        <p className="section-sub text-sm text-muted-foreground text-center leading-relaxed mb-7">
          Suporte completo para otimizar seu tempo com materiais 100% editáveis
        </p>

        <div className="features-list flex flex-col gap-3.5 my-6">
          {[
            { icon: "📄", title: "+200 Modelos de PEI prontos e editáveis", desc: "Material completo, planejado por especialistas e 100% editável no Word. Do 1º ao 9º ano.", color: "rose" },
            { icon: "⚡", title: "Acesso digital imediato", desc: "Receba o material instantaneamente por E-mail ou WhatsApp logo após a compra.", color: "lilac" },
            { icon: "🖨️", title: "Prontos para imprimir", desc: "Modelos já formatados e organizados, prontos para preencher e imprimir na hora.", color: "gold" }
          ].map((f, i) => (
            <div key={i} className="feature-card flex items-start gap-3.5 p-4.5 bg-white border-1.5 border-border rounded-md shadow-sm-custom hover:border-lilac-light hover:shadow-md-custom hover:-translate-y-0.5 transition-all">
              <div className={cn(
                "w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0 border",
                f.color === "rose" ? "bg-rose-pale border-rose-light" : f.color === "lilac" ? "bg-lilac-pale border-lilac-light" : "bg-gold-pale border-gold-light"
              )}>{f.icon}</div>
              <div>
                <div className="text-sm font-semibold text-foreground mb-0.5">{f.title}</div>
                <div className="text-[13px] text-muted-foreground leading-normal">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* BNCC */}
        <div className="bncc-wrap flex items-center gap-3.5 p-4.5 px-5 bg-gradient-to-br from-lilac-pale to-rose-pale border-1.5 border-lilac-light rounded-md my-6">
          <div className="w-[52px] h-[52px] rounded-full bg-gradient-to-br from-lilac-deep to-rose-deep flex items-center justify-center text-white text-[10px] font-extrabold text-center tracking-wider leading-tight shrink-0">BNCC<br />COMP.</div>
          <div>
            <div className="text-[13px] font-bold text-foreground mb-0.5">Compatível com a BNCC</div>
            <div className="text-[12px] text-muted-foreground leading-relaxed">Atividades e planejamentos baseados nas diretrizes nacionais, prontos para uso imediato em sala de aula.</div>
          </div>
        </div>

        <div className="section-divider flex items-center gap-2.5 my-10 mb-7">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <span className="text-base opacity-60">✦</span>
          <div className="flex-1 h-px bg-gradient-to-r from-border via-border to-transparent" />
        </div>

        {/* DEPOIMENTOS */}
        <h2 className="section-title font-headline text-[22px] font-bold text-foreground text-center leading-tight mb-2">
          Quem comprou, <em className="italic text-lilac-deep">recomenda!</em>
        </h2>
        <p className="section-sub text-sm text-muted-foreground text-center leading-relaxed mb-7">
          Veja o que professoras que já utilizam estão dizendo
        </p>

        <div className="testimonials-wrap my-7">
          {[
            { initial: "B", name: "Beatriz Santos", role: "Professora de Educação Especial", text: "Oi minha linda! Aqui o está o seu material de PEI pronto. Muito obrigada! Acabei de abrir e está incrível! Vai me salvar demais — era isso que eu precisava. Deus abençoe!" },
            { initial: "M", name: "Mariana Oliveira", role: "Orientadora Educacional", text: "Nossa, muito obrigada! O material é maravilhoso. Que bom que gostou! Deus te abençoe também." }
          ].map((t, i) => (
            <div key={i} className="testimonial-card bg-white border-1.5 border-border rounded-xl p-5.5 px-5 mb-3.5 shadow-sm-custom relative">
              <span className="absolute -top-2 left-4.5 font-headline text-5xl text-rose-light leading-none">&quot;</span>
              <p className="text-sm text-foreground/80 leading-relaxed mb-3.5 italic">{t.text}</p>
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-rose-light to-lilac-light flex items-center justify-center text-sm font-bold text-rose-deep shrink-0">{t.initial}</div>
                <div>
                  <div className="text-[13px] font-semibold text-foreground">{t.name}</div>
                  <div className="text-[12px] text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="section-divider flex items-center gap-2.5 my-10 mb-7">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <span className="text-base opacity-60">✦</span>
          <div className="flex-1 h-px bg-gradient-to-r from-border via-border to-transparent" />
        </div>

        {/* BÔNUS */}
        <div className="bonus-section my-7">
          <div className="text-center mb-5">
            <div className="inline-block bg-gradient-to-br from-gold to-gold-deep text-white text-[10px] font-extrabold tracking-[0.12em] uppercase p-1.5 px-3.5 rounded-full mb-2.5 shadow-[0_3px_12px_rgba(168,124,37,0.35)]">
              🎁 Bônus exclusivos
            </div>
            <h2 className="section-title font-headline text-[22px] font-bold text-foreground leading-tight mb-2">
              Você merece <em className="italic text-lilac-deep">ainda mais</em>
            </h2>
            <p className="section-sub text-sm text-muted-foreground leading-relaxed">
              6 bônus incríveis que transformarão sua forma de trabalhar
            </p>
          </div>
          <div className="bonus-list flex flex-col gap-3">
            {[
              { n: 1, name: "Plano Educacional PEI", desc: "Guia completo com apoio individualizado e estratégias adaptadas." },
              { n: 2, name: "Plano PDI e PEI", desc: "Guia focado na inclusão de alunos PDI e PEI." },
              { n: 3, name: "Plano PEI 4 e 5 Anos", desc: "Guia para Educação Infantil com histórico e desenvolvimento." },
              { n: 4, name: "Plano PDPI", desc: "Estratégias, acompanhamento e planejamento psicoeducacional." },
              { n: 5, name: "Planejamento AEE 2026", desc: "Planejamento completo para Sala de Recurso Multifuncional." },
              { n: 6, name: "Ficha Individual PEI", desc: "Ficha de acompanhamento para alunos com necessidades especiais." }
            ].map((b) => (
              <div key={b.n} className="bonus-card flex items-center gap-4 p-4 px-4.5 bg-white rounded-md border-1.5 border-border shadow-sm-custom hover:border-gold-light hover:translate-x-1 transition-all relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gold to-rose" />
                <div className="w-7.5 h-7.5 rounded-full bg-gold-pale border-1.5 border-gold-light flex items-center justify-center text-xs font-bold text-gold-deep shrink-0">{b.n}</div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-foreground leading-tight">{b.name}</div>
                  <div className="text-[12px] text-muted-foreground leading-normal">{b.desc}</div>
                </div>
                <div className="text-right shrink-0 ml-2">
                  <div className="text-[11px] text-muted-foreground line-through">R$ 37,90</div>
                  <div className="text-[13px] font-bold text-rose-deep">GRÁTIS</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="section-divider flex items-center gap-2.5 my-10 mb-7">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <span className="text-base opacity-60">✦</span>
          <div className="flex-1 h-px bg-gradient-to-r from-border via-border to-transparent" />
        </div>

        {/* TIMER + PREÇO */}
        <div id="preco" className="scroll-mt-6">
          <h2 className="section-title font-headline text-[22px] font-bold text-foreground text-center leading-tight mb-2">
            Garanta agora com <em className="italic text-lilac-deep">preço especial</em>
          </h2>
          <p className="section-sub text-sm text-muted-foreground text-center leading-relaxed">
            Aproveite e tenha acesso a PEIs prontos para impressionar sua coordenação
          </p>

          <Timer />

          <div className="price-box bg-white rounded-xl border-2 border-rose-light p-8 px-6 text-center shadow-lg-custom my-5">
            <div className="text-[13px] text-muted-foreground mb-1">De</div>
            <div className="text-lg text-muted-foreground line-through font-medium mb-0.5">R$ 227,90</div>
            <div className="font-headline text-[52px] font-bold text-foreground leading-none mb-1 flex justify-center items-start">
              <span className="text-2xl font-semibold mt-2 mr-1">R$</span>
              18
              <span className="text-lg font-semibold mt-2.5 ml-1">,90</span>
            </div>
            <div className="text-[12px] font-bold tracking-[0.1em] uppercase text-muted-foreground mb-5">Pagamento único</div>

            <div className="price-items text-left mb-6 flex flex-col gap-2">
              {[
                { bold: "+200 Modelos PEI", text: "prontos e editáveis" },
                { bold: "160 Atividades Lúdicas", text: "alinhadas à BNCC", highlight: true },
                { text: "Combo Ed. Especial com materiais extras" },
                { text: "Acesso aos modelos fundamentais" },
                { bold: "Todos os 6 Bônus", text: "incluídos" },
                { text: "PEI Autismo Ed. Infantil" },
                { text: "Relatórios AEE completos" },
                { bold: "Acesso a futuras atualizações", text: "" },
                { text: "Suporte prioritário via WhatsApp", highlight: true },
                { text: "WhatsApp Clube da Inclusão", highlight: true }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-[13px] text-foreground/80 leading-relaxed">
                  <div className="w-[18px] h-[18px] rounded-full bg-gradient-to-br from-rose to-lilac-deep flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={10} color="white" strokeWidth={4} />
                  </div>
                  <span>
                    {item.bold && <strong className="font-semibold text-foreground">{item.bold} </strong>}
                    <span className={item.highlight ? "text-lilac-deep font-semibold" : ""}>{item.text}</span>
                  </span>
                </div>
              ))}
            </div>

            <Button className="w-full h-auto p-5 bg-gradient-to-br from-rose-deep to-lilac-deep text-white font-bold text-base rounded-full shadow-[0_8px_32px_rgba(139,106,175,0.40)] hover:translate-y-[-3px] hover:shadow-[0_14px_40px_rgba(139,106,175,0.50)] transition-all uppercase tracking-wide">
              🔓 Liberar meu acesso agora
            </Button>
            <p className="text-[11px] text-muted-foreground mt-3.5 leading-relaxed">
              <strong className="text-rose-deep font-bold uppercase tracking-tighter">Você NÃO vai encontrar esse preço depois.</strong><br />Acesso imediato por E-mail ou WhatsApp.
            </p>
          </div>

          <div className="trust-row flex justify-center gap-4 my-5 flex-wrap">
            <div className="flex items-center gap-1.5 text-[11px] font-semibold text-muted-foreground bg-white border border-border p-1.5 px-3 rounded-full shadow-sm-custom">
              <Lock size={13} /> Pagamento seguro
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-semibold text-muted-foreground bg-white border border-border p-1.5 px-3 rounded-full shadow-sm-custom">
              <ShieldCheck size={13} /> SSL criptografado
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-semibold text-muted-foreground bg-white border border-border p-1.5 px-3 rounded-full shadow-sm-custom">
              <CheckCircle2 size={13} /> 100% atualizado
            </div>
          </div>
        </div>

        <div className="section-divider flex items-center gap-2.5 my-10 mb-7">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <span className="text-base opacity-60">✦</span>
          <div className="flex-1 h-px bg-gradient-to-r from-border via-border to-transparent" />
        </div>

        {/* FAQ */}
        <h2 className="section-title font-headline text-[22px] font-bold text-foreground text-center leading-tight mb-2">
          Dúvidas <em className="italic text-lilac-deep">frequentes</em>
        </h2>
        <FaqSection />

        {/* SEGURANÇA */}
        <div className="security-box bg-gradient-to-br from-lilac-pale to-gold-pale border-1.5 border-lilac-light rounded-md p-5 my-6 text-center">
          <div className="text-[15px] font-bold text-foreground mb-2">🔐 Compra 100% segura</div>
          <p className="text-[13px] text-foreground/80 leading-relaxed mb-3.5">
            Seus dados estão protegidos com <strong className="text-lilac-deep font-semibold">criptografia de ponta a ponta</strong>. Utilizamos as plataformas de pagamento mais confiáveis do mercado.
          </p>
          <div className="flex justify-center gap-5">
            <div className="flex flex-col items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              <Lock size={22} className="text-lilac-deep" />
              <span>Pag. Seguro</span>
            </div>
            <div className="flex flex-col items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              <ShieldCheck size={22} className="text-lilac-deep" />
              <span>SSL</span>
            </div>
            <div className="flex flex-col items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              <CheckCircle2 size={22} className="text-lilac-deep" />
              <span>Verificado</span>
            </div>
          </div>
        </div>

        <div className="h-10" />
      </div>
    </section>
  );
}
