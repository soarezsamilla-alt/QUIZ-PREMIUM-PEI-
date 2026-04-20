export type QuizOption = {
  icon: string;
  text: string;
};

export type QuizStep = {
  tag: string;
  question: string;
  subtitle: string;
  options: QuizOption[];
};

export const QUIZ_STEPS: QuizStep[] = [
  {
    tag: "SOBRE VOCÊ",
    question: "Qual é o seu papel na escola?",
    subtitle: "Por favor, escolha uma das opções abaixo!",
    options: [
      { icon: "👩‍🏫", text: "Professora de Educação Especial" },
      { icon: "📚", text: "Professora de Ensino Regular" },
      { icon: "📁", text: "Orientadora ou Coordenadora Educacional" }
    ]
  },
  {
    tag: "SEU DESAFIO",
    question: "Quando você pensa em elaborar um PEI, o que passa pela sua cabeça?",
    subtitle: "Escolha a opção que mais se aproxima da sua realidade",
    options: [
      { icon: "😰", text: "Não sei se estou fazendo certo" },
      { icon: "😔", text: "Sei o que precisa, mas perco tempo demais" },
      { icon: "😌", text: "Entrego, mas sei que poderia ser melhor" }
    ]
  },
  {
    tag: "URGÊNCIA",
    question: "Você tem algum PEI para entregar nos próximos dias?",
    subtitle: "Isso nos ajuda a entender o que você precisa agora",
    options: [
      { icon: "🔥", text: "Sim, preciso resolver isso agora" },
      { icon: "📅", text: "Tenho prazo chegando em breve" },
      { icon: "🗓️", text: "Não agora, mas quero estar preparada" }
    ]
  },
  {
    tag: "SEU SONHO",
    question: "Ter um PEI pronto nas mãos significaria:",
    subtitle: "Qual dessas conquistas mais faz sentido para você?",
    options: [
      { icon: "😌", text: "Dormir tranquila sabendo que fiz o meu melhor" },
      { icon: "🏆", text: "Ser reconhecida como professora preparada" },
      { icon: "⏳", text: "Ter meu tempo de volta, sem trabalho em casa" }
    ]
  }
];
