
"use client";

import React, { useState, useEffect } from "react";
import { FaqSection } from "./FaqSection";
import { Check, ArrowRight, ShieldCheck, Lock, CheckCircle2, Award, Star, Settings, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import Autoplay from "embla-carousel-autoplay";
import { SampleImages, SampleImagesRow2, TestimonialImages, BonusImages } from "@/lib/placeholder-images";
import NextImage from "next/image";
import { Timer } from "./Timer";
import { PurchaseNotification } from "./PurchaseNotification";
import { UpsellDialog } from "./UpsellDialog";

export function SalesPage() {
  const [visitors, setVisitors] = useState(8);
  const [isUpsellOpen, setIsUpsellOpen] = useState(false);

  const BASIC_URL = "https://pay.wiapy.com/qCy3ZzlkT1";

  useEffect(() => {
    const interval = setInterval(() => {
      setVisitors((prev) => {
        const chance = Math.random();
        let next;
        
        if (chance > 0.3) {
          next = prev + Math.floor(Math.random() * 2) + 1;
        } else {
          next = prev - 1;
        }

        if (next > 16) return prev - 2;
        if (next < 7) return 8;
        return next;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[999] bg-[#2d1f36] border-b border-white/5 shadow-sm py-2 px-4 flex justify-center items-center gap-2.5">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse shrink-0" />
          <p className="text-[12px] sm:text-[13px] text-white font-bold tracking-tight whitespace-nowrap">
            <span className="text-rose-light font-black">{visitors} professoras</span> estão vendo este material agora
          </p>
        </div>
      </div>

      <section id="sales-section" className="flex flex-col items-center animate-slide-up">
        <div className="sales-hero w-full bg-gradient-to-br from-foreground via-[#4A2D5A] to-[#3A2048] p-12 px-6 pb-14 text-center relative overflow-hidden flex flex-col items-center">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[30%] left-[20%] w-[70%] h-[60%] rounded-full bg-rose/18 blur-[80px]" />
            <div className="absolute bottom-[70%] right-[80%] w-[60%] h-[50%] rounded-full bg-lilac/18 blur-[80px]" />
          </div>

          <div className="h-8" />

          <h1 className="hero-title relative z-10 font-headline text-[26px] font-bold text-white leading-tight mb-4 max-w-[620px] mx-auto">
            Professora, com base nas suas respostas, separamos tudo que você precisa:<br />
            <span className="text-gold-light">+200 modelos de PEI prontos, editáveis no Word e validados por especialistas em educação inclusiva prontos pra resolver exatamente o que você nos contou.</span>
          </h1>

          <p className="hero-sub relative z-10 text-[16px] text-white/75 leading-relaxed max-w-[600px] mx-auto mb-6">
            Do 1º ao 9º ano • Educação infantil e AEE inclusos • 100% editáveis no Word • Adapta para qualquer rede (pública ou privada) e qualquer formato exigido pela sua escola.<br />
            <span className="font-bold text-rose-light">Baixe hoje, edite em 15 minutos, entregue hoje mesmo.</span>
          </p>

          <div className="relative z-10 w-full max-w-[460px] h-[300px] mx-auto mb-2 -mt-4">
            <NextImage 
              src="https://image2url.com/r2/default/images/1774485545973-da3dd075-1976-45b7-aebd-8b931b88f882.png"
              alt="Visualização do Material PEI"
              fill
              className="object-contain"
              data-ai-hint="product preview"
            />
          </div>

          <Button asChild className="relative z-10 h-auto py-4 px-8 bg-gradient-to-br from-rose to-rose-deep text-white font-bold rounded-full shadow-[0_8px_32px_rgba(196,90,114,0.45)] hover:translate-y-[-3px] hover:shadow-[0_14px_40px_rgba(196,90,114,0.55)] transition-all btn-mobile-effect w-[90%] sm:max-w-[420px] mx-auto">
            <a href="#plano-pro-image">
              <span>QUERO GARANTIR MEU ACESSO AGORA</span>
              <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center ml-2.5 shrink-0">
                <ArrowRight size={16} />
              </span>
            </a>
          </Button>

          <div className="relative z-10 text-[11px] sm:text-[12px] text-white/60 mt-4 font-bold flex items-center justify-center gap-2 uppercase tracking-tight">
            <span className="flex items-center gap-1">🔒 Acesso imediato</span>
            <span className="opacity-30">•</span>
            <span>7 dias de garantia</span>
          </div>
        </div>

        <div className="sales-content w-full max-w-[600px] px-5">
          <div className="h-10" />

          {/* Social Proof Badge */}
          <div className="bg-[#E8F5E9] border-2 border-[#2E7D32] rounded-[20px] p-5 mb-10 text-center shadow-sm max-w-[380px] mx-auto animate-slide-up">
            <h3 className="text-[#2E7D32] text-xl sm:text-2xl font-black mb-1">
              +1.847 professoras
            </h3>
            <p className="text-[#2E7D32] text-[13px] sm:text-sm font-bold mb-3">
              já economizaram 80% do tempo com PEIs
            </p>
            <div className="flex items-center justify-center gap-1.5 mb-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-4 h-4 fill-[#D4A843] text-[#D4A843]" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
              <span className="text-[#D4A843] text-lg font-black ml-1 tabular-nums">4.9/5.0</span>
            </div>
            <p className="text-muted-foreground text-[9px] font-bold uppercase tracking-wider opacity-60">
              (847 avaliações verificadas)
            </p>
          </div>

          {/* How it works */}
          <div className="how-it-works-section mb-16 animate-slide-up">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Settings className="text-lilac-deep w-7 h-7" />
                <h2 className="font-headline text-[28px] font-bold text-foreground">Como Funciona (É Simples!)</h2>
              </div>
              <p className="text-muted-foreground text-[15px]">3 passos simples para ter seus PEIs prontos HOJE</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              <div className="bg-white p-5 rounded-3xl shadow-sm border border-border/40 text-center flex flex-col items-center">
                <div className="w-9 h-9 rounded-full bg-rose text-white flex items-center justify-center font-bold text-base mb-4 shadow-sm">1</div>
                <h3 className="text-[16px] font-bold text-foreground mb-1 leading-tight">Clique no botão abaixo</h3>
                <p className="text-muted-foreground text-[12px] leading-relaxed">Escolha o plano ideal e finalize o pagamento seguro</p>
              </div>
              
              <div className="bg-white p-5 rounded-3xl shadow-sm border border-border/40 text-center flex flex-col items-center">
                <div className="w-9 h-9 rounded-full bg-rose text-white flex items-center justify-center font-bold text-base mb-4 shadow-sm">2</div>
                <h3 className="text-[16px] font-bold text-foreground mb-1 leading-tight">Receba IMEDIATAMENTE</h3>
                <p className="text-muted-foreground text-[12px] leading-relaxed">Acesso instantâneo por email e WhatsApp. Sem espera.</p>
              </div>

              <div className="bg-white p-5 rounded-3xl shadow-sm border border-border/40 text-center flex flex-col items-center">
                <div className="w-9 h-9 rounded-full bg-rose text-white flex items-center justify-center font-bold text-base mb-4 shadow-sm">3</div>
                <h3 className="text-[16px] font-bold text-foreground mb-1 leading-tight">Baixe e use HOJE</h3>
                <p className="text-muted-foreground text-[12px] leading-relaxed">Edite em 15 minutos e entregue com confiança</p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="bg-sky-50 text-sky-600 px-6 py-2.5 rounded-xl flex items-center gap-2.5 font-bold shadow-sm border border-sky-100">
                <Clock size={18} className="animate-pulse" />
                <span className="text-sm tracking-tight">Tempo total: menos de 3 minutos</span>
              </div>
            </div>
          </div>

          {/* Samples */}
          <div className="samples-section mb-16 animate-slide-up">
            <h2 className="section-title font-headline text-[22px] font-bold text-foreground text-center leading-tight mb-2">
              Veja algumas <em className="italic text-lilac-deep">amostras</em>
            </h2>
            <p className="section-sub text-[15px] text-muted-foreground text-center leading-relaxed mb-10">
              Modelos pensados para tornar lecionar mais divertido e inclusivo
            </p>

            <div className="samples-carousels-wrapper flex flex-col gap-4 mb-8 px-4">
              <div className="samples-carousel-container relative">
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                    watchDrag: false,
                  }}
                  plugins={[
                    AutoScroll({
                      speed: 1,
                      stopOnInteraction: false,
                      stopOnMouseEnter: false,
                      stopOnFocusIn: false,
                    }),
                  ]}
                  className="w-full"
                >
                  <CarouselContent className="-ml-1.5 will-change-transform">
                    {SampleImages.map((sample, index) => (
                      <CarouselItem key={index} className="pl-1.5 basis-[60%] sm:basis-1/3">
                        <div className="sample-card-item p-1">
                          <div className="relative aspect-[3/4] rounded-xl overflow-hidden border-2 border-border shadow-sm-custom hover:border-rose-light hover:shadow-md-custom hover:scale-[1.02] transition-all">
                            <NextImage
                              src={sample.imageUrl}
                              alt={sample.description}
                              fill
                              className="object-cover"
                              data-ai-hint={sample.imageHint}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                              <span className="text-[11px] text-white font-bold leading-tight">{sample.description}</span>
                            </div>
                            <div className="sample-watermark absolute inset-0 flex items-center justify-center -rotate-12 pointer-events-none">
                              <span className="text-[8px] font-black tracking-[0.15em] uppercase text-white bg-gradient-to-br from-rose to-rose-deep border-2 border-white/60 p-1 px-2 rounded-md shadow-[0_4px_15px_rgba(196,90,114,0.4)] backdrop-blur-[1px]">
                                AMOSTRA
                              </span>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>

              <div className="samples-carousel-container relative">
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                    watchDrag: false,
                  }}
                  plugins={[
                    AutoScroll({
                      speed: 1,
                      stopOnInteraction: false,
                      stopOnMouseEnter: false,
                      stopOnFocusIn: false,
                      direction: 'backward'
                    }),
                  ]}
                  className="w-full"
                >
                  <CarouselContent className="-ml-1.5 will-change-transform">
                    {SampleImagesRow2.map((sample, index) => (
                      <CarouselItem key={index} className="pl-1.5 basis-[60%] sm:basis-1/3">
                        <div className="sample-card-item p-1">
                          <div className="relative aspect-[3/4] rounded-xl overflow-hidden border-2 border-border shadow-sm-custom hover:border-rose-light hover:shadow-md-custom hover:scale-[1.02] transition-all">
                            <NextImage
                              src={sample.imageUrl}
                              alt={sample.description}
                              fill
                              className="object-cover"
                              data-ai-hint={sample.imageHint}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                              <span className="text-[11px] text-white font-bold leading-tight">{sample.description}</span>
                            </div>
                            <div className="sample-watermark absolute inset-0 flex items-center justify-center -rotate-12 pointer-events-none">
                              <span className="text-[8px] font-black tracking-[0.15em] uppercase text-white bg-gradient-to-br from-rose to-rose-deep border-2 border-white/60 p-1 px-2 rounded-md shadow-[0_4px_15px_rgba(196,90,114,0.4)] backdrop-blur-[1px]">
                                AMOSTRA
                              </span>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
            </div>
          </div>

          {/* O que você vai receber hoje */}
          <div className="receive-today-section my-16 animate-slide-up">
            <h2 className="section-title font-headline text-[22px] font-bold text-foreground text-center leading-tight mb-2">
              O que você vai <em className="italic text-lilac-deep">receber hoje</em>
            </h2>
            <p className="section-sub text-[15px] text-muted-foreground text-center leading-relaxed mb-7">
              Suporte completo para otimizar seu tempo com materiais 100% editáveis
            </p>

            <div className="features-list flex flex-col gap-5 my-6">
              {[
                { icon: "📄", title: "+200 Modelos de PEI prontos e editáveis", desc: "Material completo, planejado por especialistas e 100% editável no Word. Do 1º ao 9º ano.", color: "rose" },
                { icon: "🎨", title: "+350 atividades pedagógicas Infantis", desc: "Material completo para alfabetização, coordenação motora e muito mais para impulsionar o desenvolvimento.", color: "lilac" },
                { icon: "🧩", title: "+160 Atividades Lúdicas", desc: "Atividades pedagógicas lúdicas alinhadas à BNCC para facilitar o aprendizado.", color: "gold" },
                { icon: "💬", title: "Suporte individual via WhatsApp", desc: "Tire suas dúvidas e receba auxílio pedagógico diretamente no seu celular sempre que precisar.", color: "rose" },
                { icon: "⚡", title: "Acesso digital imediato", desc: "Receba o material instantaneamente por E-mail ou WhatsApp logo após a compra.", color: "lilac" },
                { icon: "🖨️", title: "Prontos para imprimir", desc: "Modelos já formatados e organizados, prontos para preencher e imprimir na hora.", color: "gold" }
              ].map((f, i) => (
                <div key={i} className="feature-card flex items-start gap-5 p-7 bg-white border-1.5 border-border rounded-md shadow-sm-custom hover:border-lilac-light hover:shadow-md-custom hover:-translate-y-0.5 transition-all">
                  <div className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shrink-0 border shadow-sm",
                    f.color === "rose" ? "bg-rose-pale border-rose-light" : f.color === "lilac" ? "bg-lilac-pale border-lilac-light" : "bg-gold-pale border-gold-light"
                  )}>{f.icon}</div>
                  <div className="flex-1 pt-1">
                    <div className="text-lg font-bold text-foreground mb-1 leading-tight">{f.title}</div>
                    <div className="text-[15px] text-muted-foreground leading-normal">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Before After */}
          <div className="before-after-section my-16 animate-slide-up">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-2xl">🔄</span>
                <h2 className="font-headline text-[28px] font-bold text-foreground">Sua Vida ANTES x DEPOIS</h2>
              </div>
              <p className="text-muted-foreground text-[15px]">Veja a transformação que +1.800 professoras já viveram</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-[#FEF2F2] border-2 border-[#EF4444] rounded-[24px] p-5 shadow-sm">
                <h3 className="text-[#EF4444] text-[18px] font-black mb-5 flex items-center gap-2 justify-center">
                  <span>❌</span> ANTES (Sem nossos PEIs)
                </h3>
                <div className="space-y-3">
                  {[
                    { icon: "⏰", text: "6+ horas pesquisando no Google" },
                    { icon: "😨", text: "Insegurança se está correto" },
                    { icon: "😫", text: "Estresse de última hora (22h da noite)" },
                    { icon: "📄", text: "Começar do ZERO a cada PEI" },
                    { icon: "💸", text: "Pagar R$ 150+ por PEI terceirizado" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 py-2.5 border-b border-red-100 last:border-0">
                      <span className="text-base shrink-0">{item.icon}</span>
                      <span className="text-[13px] font-medium text-gray-700 leading-tight">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#F0FDF4] border-2 border-[#22C55E] rounded-[24px] p-5 shadow-sm">
                <h3 className="text-[#22C55E] text-[18px] font-black mb-5 flex items-center gap-2 justify-center">
                  <span>✅</span> DEPOIS (Com nossos PEIs)
                </h3>
                <div className="space-y-3">
                  {[
                    { icon: "⚡", text: "15 minutos editando modelo pronto" },
                    { icon: "😊", text: "Confiança em material validado" },
                    { icon: "🏡", text: "Tranquilidade e tempo com família" },
                    { icon: "📚", text: "Modelos de PEI sempre à disposição" },
                    { icon: "💰", text: "Investimento único de R$ 9,90" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 py-2.5 border-b border-green-100 last:border-0">
                      <span className="text-base shrink-0">{item.icon}</span>
                      <span className="text-[13px] font-medium text-gray-700 leading-tight">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-[#FFFBEB] border-2 border-[#F59E0B] rounded-[18px] p-5 text-center shadow-sm">
              <p className="text-[#B45309] font-black text-base flex items-center justify-center gap-3">
                <span className="animate-pulse">⚡</span>
                O que levaria 6 horas, você faz em 15 minutos
              </p>
            </div>
          </div>

          {/* Testimonials */}
          <div className="testimonials-section mb-16">
            <h2 className="section-title font-headline text-[22px] font-bold text-foreground text-center leading-tight mb-2">
              Quem comprou, <em className="italic text-lilac-deep">recomenda!</em>
            </h2>
            <p className="section-sub text-[15px] text-muted-foreground text-center leading-relaxed mb-7">
              Veja o que professoras que já utilizam estão dizendo
            </p>

            <div className="testimonials-carousel-container relative px-4 mb-8">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 2000,
                    stopOnInteraction: false,
                    stopOnMouseEnter: false,
                  }),
                ]}
                className="w-full"
              >
                <CarouselContent className="-ml-1.5">
                  {TestimonialImages.map((testimonial, index) => (
                    <CarouselItem key={index} className="pl-1.5 basis-[75%] sm:basis-1/2">
                      <div className="testimonial-card-item p-1">
                        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-border shadow-md-custom hover:border-rose-light hover:shadow-lg-custom hover:scale-[1.02] transition-all">
                          <NextImage
                            src={testimonial.imageUrl}
                            alt={testimonial.description}
                            fill
                            className="object-cover"
                            data-ai-hint={testimonial.imageHint}
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-[-20px] sm:left-[-35px] h-10 w-10 border-2 border-rose-deep text-rose-deep bg-rose-pale hover:bg-rose-light shadow-[0_4px_12px_rgba(196,90,114,0.2)]" />
                <CarouselNext className="right-[-20px] sm:right-[-35px] h-10 w-10 border-2 border-rose-deep text-rose-deep bg-rose-pale hover:bg-rose-light shadow-[0_4px_12px_rgba(196,90,114,0.2)]" />
              </Carousel>
            </div>
          </div>

          {/* Bonus */}
          <div className="bonus-section my-7">
            <div className="text-center mb-5">
              <div className="inline-block bg-gradient-to-br from-gold to-gold-deep text-white text-[10px] font-extrabold tracking-[0.12em] uppercase p-1.5 px-3.5 rounded-full mb-2.5 shadow-[0_3px_12px_rgba(168,124,37,0.35)] btn-mobile-effect relative overflow-hidden">
                🎁 Bônus exclusivos
              </div>
              <h2 className="section-title font-headline text-[22px] font-bold text-foreground leading-tight mb-2">
                Você merece <em className="italic text-lilac-deep">ainda mais</em>
              </h2>
              <p className="section-sub text-[15px] text-muted-foreground leading-relaxed">
                6 bônus incríveis que transformarão sua forma de trabalhar
              </p>
            </div>
            <div className="bonus-list flex flex-col gap-3">
              {[
                { n: 1, name: "Plano Educacional PEI", desc: "Guia completo com apoio individualizado e estratégias adaptadas.", img: BonusImages[0].imageUrl },
                { n: 2, name: "Atividades Diagnósticas", desc: "Atividades para avaliar alunos, com exercícios de português e matemática.", img: BonusImages[1].imageUrl },
                { n: 3, name: "Plano PEI 1º ao 9º Ano", desc: "Guia para Educação Infantil com histórico e desenvolvimento.", img: BonusImages[2].imageUrl },
                { n: 4, name: "Plano PDPI", desc: "Estratégias, acompanhamento e planejamento psicoeducacional.", img: BonusImages[3].imageUrl },
                { n: 5, name: "Planejamento AEE 2026", desc: "Planejamento completo para Sala de Recurso Multifuncional.", img: BonusImages[4].imageUrl },
                { n: 6, name: "Ficha Individual PEI", desc: "Ficha de acompanhamento para alunos com necessidades especiais.", img: BonusImages[5].imageUrl }
              ].map((b) => (
                <div key={b.n} className="bonus-card flex items-center gap-5 p-4 pr-5 bg-white rounded-md border-1.5 border-border shadow-sm-custom hover:border-gold-light hover:translate-x-1 transition-all relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gold to-rose" />
                  
                  <div className="relative w-24 h-32 rounded-lg overflow-hidden border border-border shrink-0 bg-lilac-pale shadow-sm">
                    <NextImage 
                      src={b.img} 
                      alt={b.name} 
                      fill 
                      className="object-cover"
                      data-ai-hint="bonus material" 
                    />
                    <div className="absolute top-1.5 left-1.5 w-6 h-6 rounded-full bg-gold text-white text-[11px] font-black flex items-center justify-center shadow-md border border-white/20">
                      {b.n}
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="text-base font-bold text-foreground leading-tight mb-1.5">{b.name}</div>
                    <div className="text-[13px] text-muted-foreground leading-relaxed line-clamp-3">{b.desc}</div>
                    <div className="mt-2.5 flex items-center gap-2">
                      <div className="text-[16px] font-bold text-muted-foreground line-through decoration-rose-deep decoration-[2px]">R$ 37,90</div>
                      <div className="text-[14px] font-black text-rose-deep bg-rose-pale px-2 py-0.5 rounded-full border border-rose-light/30">GRÁTIS</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="section-divider flex items-center gap-2.5 my-10 mb-7">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <span className="text-lg text-gold animate-pulse drop-shadow-[0_0_8px_rgba(212,168,67,0.5)] font-bold">✦</span>
            <div className="flex-1 h-px bg-gradient-to-r from-border via-border to-transparent" />
          </div>

          <div id="preco" className="scroll-mt-6">
            <h2 className="section-title font-headline text-[22px] font-bold text-foreground text-center leading-tight mb-2">
              Garanta agora com <em className="italic text-lilac-deep">preço especial</em>
            </h2>
            <p className="section-sub text-[15px] text-muted-foreground text-center leading-relaxed">
              Aproveite e tenha acesso a PEIs prontos para impressionar sua coordenação
            </p>

            <div className="social-proof-badge flex items-center justify-center gap-2.5 my-6 animate-slide-up">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-[#FF70A6] border-2 border-white flex items-center justify-center text-[10px] font-black text-white shadow-sm ring-1 ring-black/5">M</div>
                <div className="w-6 h-6 rounded-full bg-[#42A5F5] border-2 border-white flex items-center justify-center text-[10px] font-black text-white shadow-sm ring-1 ring-black/5">A</div>
                <div className="w-6 h-6 rounded-full bg-[#FFD670] border-2 border-white flex items-center justify-center text-[10px] font-black text-white shadow-sm ring-1 ring-black/5">P</div>
                <div className="w-6 h-6 rounded-full bg-[#4ADE80] border-2 border-white flex items-center justify-center text-[10px] font-black text-white shadow-sm ring-1 ring-black/5">C</div>
                <div className="w-6 h-6 rounded-full bg-[#B89FD4] border-2 border-white flex items-center justify-center text-[10px] font-black text-white shadow-sm ring-1 ring-black/5">L</div>
              </div>
              <p className="text-[13px] text-muted-foreground font-medium">
                <span className="text-foreground font-bold tracking-tight">+1.847 professoras</span> já aprovaram
              </p>
            </div>

            <div className="plans-wrapper flex flex-col gap-6 my-8">
              <div id="plano-basico" className="price-box bg-white rounded-xl border-2 border-border p-2 text-center shadow-sm-custom overflow-hidden scroll-mt-24">
                <div className="inline-block bg-muted text-muted-foreground text-[10px] font-black tracking-widest uppercase p-1 px-3 rounded-full mb-0.5">
                  Plano Básico
                </div>
                
                <div className="flex items-center justify-center gap-1.5 mb-0 text-muted-foreground">
                  <span className="text-[16px] font-bold line-through decoration-rose-deep decoration-[2px]">De R$ 97,90</span>
                </div>
                <div className="font-headline text-[74px] font-bold text-foreground leading-none -mt-1 flex justify-center items-start">
                  <span className="text-3xl font-semibold mt-3 mr-1">R$</span>
                  9
                  <span className="text-4xl font-semibold mt-4 ml-1">,90</span>
                </div>
                <div className="text-[10px] font-bold tracking-[0.1em] uppercase text-muted-foreground mt-2 mb-2">Pagamento único</div>
                
                <div className="text-[11px] font-bold text-green-600 bg-green-50 py-1 px-3 rounded-full inline-block mb-2 border border-green-100">
                  💰 Você economiza: R$ 88,00 (90% OFF)
                </div>

                <div className="relative w-full h-[320px] -mt-2 -mb-2">
                  <NextImage 
                    src="https://www.image2url.com/r2/default/images/1776208264702-2a7910e1-8e41-4ce7-ad7a-e51537ba6247.png"
                    alt="Oferta Plano Básico"
                    fill
                    className="object-contain"
                    data-ai-hint="basic plan"
                  />
                </div>
                
                <div className="price-items text-left mb-2 flex flex-col gap-0.5 px-2">
                  {[
                    { bold: "Apenas materiais", text: "básicos de planejamento" },
                    { bold: "Combo Ed. Especial", text: "" },
                    { bold: "PEI Autismo", text: "Ed. Infantil" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-[12px] text-foreground/80 leading-tight">
                      <div className="w-[14px] h-[14px] rounded-full bg-border flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={8} className="text-muted-foreground" strokeWidth={4} />
                      </div>
                      <span>
                        {item.bold && <strong className="font-semibold text-foreground">{item.bold} </strong>}
                        <span>{item.text}</span>
                      </span>
                    </div>
                  ))}
                </div>

                <Button 
                  onClick={() => setIsUpsellOpen(true)}
                  className="w-[85%] mx-auto h-auto py-4 bg-[#e3daf2] text-foreground font-bold text-base rounded-full shadow-sm hover:opacity-90 transition-all uppercase tracking-wide btn-mobile-effect border-none"
                >
                  LIBERAR PLANO BÁSICO
                </Button>
                <p className="text-[11px] text-muted-foreground mt-3 leading-relaxed px-2">
                  Acesso imediato por E-mail ou WhatsApp.
                </p>
              </div>

              <div className="price-box bg-white rounded-xl border-2 border-rose-light p-4 px-3 text-center shadow-lg-custom overflow-visible relative">
                <div className="relative">
                  <Timer />
                </div>

                <div className="inline-block bg-rose-pale text-rose-deep text-[10px] font-black tracking-widest uppercase p-1 px-3 rounded-full mb-2">
                  Plano Pro
                </div>
                
                <div className="flex items-center justify-center gap-1.5 mb-0 text-muted-foreground">
                  <span className="text-[16px] font-bold line-through decoration-rose-deep decoration-[2px]">De R$ 197,90</span>
                </div>
                <div className="font-headline text-[74px] font-bold text-[#2563EB] leading-none mb-0 flex justify-center items-start">
                  <span className="text-3xl font-semibold mt-3 mr-1">R$</span>
                  24
                  <span className="text-4xl font-semibold mt-4 ml-1">,90</span>
                </div>
                <div className="text-[10px] font-bold tracking-[0.1em] uppercase text-muted-foreground mt-2 mb-2">Pagamento único</div>
                
                <div className="text-[11px] font-bold text-green-600 bg-green-50 py-1 px-3 rounded-full inline-block mb-4 border border-green-100">
                  💰 Você economiza: R$ 172,10 (87% OFF)
                </div>

                <div id="plano-pro-image" className="relative w-full h-[300px] mb-4 scroll-mt-24">
                  <NextImage 
                    src="https://image2url.com/r2/default/images/1774485545973-da3dd075-1976-45b7-aebd-8b931b88f882.png"
                    alt="Formas de pagamento"
                    fill
                    className="object-contain"
                    data-ai-hint="payment methods"
                  />
                </div>

                <div className="price-items text-left mb-4 flex flex-col gap-2">
                  {[
                    { bold: "+200 Modelos PEI", text: "prontos e editáveis" },
                    { bold: "+350 atividades pedagógicas Infantis", text: "" },
                    { bold: "+160 Atividades Lúdicas", text: "alinhadas à BNCC" },
                    { text: "Combo Ed. Especial" },
                    { text: "Acesso aos modelos fundamentais" },
                    { bold: "Todos os 6 Bônus", text: "incluídos" },
                    { text: "PEI Autismo Ed. Infantil" },
                    { text: "Relatórios AEE completos" },
                    { bold: "Acesso a futuras atualizações", text: "" },
                    { text: "Suporte prioritário via WhatsApp" },
                    { text: "WhatsApp Clube da Inclusão" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-[13px] text-foreground/80 leading-relaxed">
                      <div className="w-[18px] h-[18px] rounded-full bg-gradient-to-br from-rose to-lilac-deep flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={10} color="white" strokeWidth={4} />
                      </div>
                      <span>
                        {item.bold && <strong className="font-semibold text-foreground">{item.bold} </strong>}
                        <span>{item.text}</span>
                      </span>
                    </div>
                  ))}
                </div>

                <Button asChild className="w-[85%] mx-auto h-auto py-4 bg-gradient-to-br from-rose-deep to-lilac-deep text-white font-bold text-base rounded-full shadow-[0_8px_32px_rgba(139,106,175,0.40)] hover:translate-y-[-3px] hover:shadow-[0_14px_40px_rgba(139,106,175,0.50)] transition-all uppercase tracking-wide btn-mobile-effect">
                  <a href="https://pay.wiapy.com/w9nRplH8zg">
                    🔓 LIBERAR PLANO PRO AGORA
                  </a>
                </Button>
                <p className="text-[12px] text-rose-deep font-bold uppercase tracking-tight mt-3">
                  Você NÃO vai encontrar esse preço depois.
                </p>
                <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed">
                  Acesso imediato por E-mail ou WhatsApp.
                </p>
              </div>
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

          {/* Teacher Section */}
          <div className="teacher-section my-10 animate-slide-up">
            <div className="bg-white border-2 border-rose-light/50 rounded-3xl p-4 shadow-lg-custom relative overflow-hidden max-w-[500px] mx-auto">
              <div className="absolute top-0 right-0 w-24 h-24 bg-rose/5 rounded-full -mr-12 -mt-12 pointer-events-none" />
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="relative w-16 h-16 mb-3">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose to-lilac-deep rounded-full animate-pulse opacity-20 scale-110" />
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md">
                    <NextImage 
                      src="https://image2url.com/r2/default/images/1774892605952-79b85bcc-4826-4190-8f9e-c98e29387430.png"
                      alt="Professora Luciana"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="font-headline text-lg font-bold text-foreground mb-1">
                  Uma Professora que te Entende
                </h3>
                <p className="text-[13px] text-rose-deep font-semibold italic mb-2 max-w-[340px]">
                  "Eu sei como é virar noites planejando. Criei estes modelos para que você tenha mais tempo para o que realmente importa: seus alunos."
                </p>
                <div className="w-8 h-0.5 bg-gradient-to-r from-rose to-lilac-deep rounded-full mb-3" />
                <p className="text-[12px] text-muted-foreground leading-tight text-center max-w-[440px]">
                  Com mais de 10 anos de experiência em educação inclusiva, a Professora Luciana sentiu na pele a dificuldade de criar planos individualizados eficientes sem sacrificar seu tempo pessoal.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 mb-10 text-center animate-slide-up">
            <h2 className="section-title font-headline text-lg font-bold text-foreground leading-tight mb-5">
              Como vou <em className="italic text-lilac-deep">receber meu material?</em>
            </h2>
            <div className="bg-white border-2 border-dashed border-lilac-light rounded-2xl p-6 shadow-sm-custom max-w-[500px] mx-auto">
              <p className="text-[15px] text-foreground leading-relaxed">
                Clicando no botão, você será redirecionado para a página de pagamento, e após confirmação receberá acesso imediato no seu <strong className="text-rose-deep font-bold">E-mail ou WhatsApp</strong>.
              </p>
            </div>
          </div>

          {/* Guarantee */}
          <div className="guarantee-section my-12 animate-slide-up">
            <div className="bg-white border-2 border-gold-light rounded-3xl p-8 shadow-lg-custom relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -mr-16 -mt-16 pointer-events-none" />
              <div className="flex flex-col sm:flex-row items-center gap-8 relative z-10">
                <div className="shrink-0">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-gold to-gold-deep flex items-center justify-center text-white shadow-xl border-4 border-white">
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-black leading-none">7</div>
                      <div className="text-[10px] sm:text-xs font-bold uppercase tracking-tighter">Dias</div>
                      <div className="text-[10px] sm:text-xs font-bold uppercase tracking-tighter">Garantia</div>
                    </div>
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="font-headline text-xl sm:text-2xl font-bold text-foreground mb-3 flex items-center justify-center sm:justify-start gap-2">
                    Garantia de 7 dias <Award className="text-gold" size={24} />
                  </h3>
                  <p className="text-[14px] sm:text-[15px] text-muted-foreground leading-relaxed">
                    Fique tranquila! Você have 7 dias para testar todo material. Se por qualquer motivo você não ficar 100% satisfeita, devolvemos seu investimento integralmente.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="section-divider flex items-center gap-2.5 my-10 mb-7">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <span className="text-lg text-gold animate-pulse drop-shadow-[0_0_8px_rgba(212,168,67,0.5)] font-bold">✦</span>
            <div className="flex-1 h-px bg-gradient-to-r from-border via-border to-transparent" />
          </div>

          <h2 className="section-title font-headline text-[22px] font-bold text-foreground text-center leading-tight mb-2">
            Dúvidas <em className="italic text-lilac-deep">frequentes</em>
          </h2>
          <FaqSection />

          {/* Trust Seal */}
          <div className="security-box bg-gradient-to-br from-lilac-pale to-gold-pale border-1.5 border-lilac-light rounded-md p-5 my-6 text-center">
            <div className="text-[15px] font-bold text-foreground mb-2">🔐 Compra 100% segura</div>
            <p className="text-[13px] text-foreground/80 leading-relaxed mb-3.5">
              Seus dados estão protegidos com <strong className="text-lilac-deep font-semibold">criptografia de ponta a ponta</strong>.
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
      
      <PurchaseNotification />
      <UpsellDialog 
        isOpen={isUpsellOpen} 
        onOpenChange={setIsUpsellOpen} 
        basicUrl={BASIC_URL}
      />
    </>
  );
}
