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
    tag: "Sobre você",
    question: "Qual é o seu papel na escola?",
    subtitle: "Por favor, escolha uma das opções abaixo!",
    options: [
      { icon: "👩‍🏫", text: "Professora de Educação Especial" },
      { icon: "📚", text: "Professora de Ensino Regular" },
      { icon: "📁", text: "Orientadora ou Coordenadora Educacional" }
    ]
  },
  {
    tag: "Seu desafio",
    question: "Quando você pensa em elaborar um PEI, o que passa pela sua cabeça?",
    subtitle: "Escolha a opção que mais se aproxima da sua realidade",
    options: [
      { icon: "😰", text: "Não sei se estou fazendo certo" },
      { icon: "😤", text: "Sei o que precisa, mas perco tempo demais" },
      { icon: "😔", text: "Entrego, mas sei que poderia ser melhor" }
    ]
  },
  {
    tag: "Como você resolve",
    question: "Quando você precisa entregar um PEI, como costuma resolver?",
    subtitle: "Seja honesta — estamos aqui para ajudar!",
    options: [
      { icon: "📋", text: "Copio um modelo antigo e adapto" },
      { icon: "🔍", text: "Procuro no Google mas nunca acho o que precisa" },
      { icon: "💬", text: "Peço para uma colega e uso sem muita certeza" }
    ]
  },
  {
    tag: "Seu tempo",
    question: "Quanto tempo você costuma gastar para elaborar UM PEI?",
    subtitle: "Contando pesquisa, escrita e revisão",
    options: [
      { icon: "⏰", text: "Entre 1 e 3 horas" },
      { icon: "😫", text: "Entre 3 e 6 horas" },
      { icon: "💀", text: "Mais de 6 horas, ou simplesmente não faço" }
    ]
  },
  {
    tag: "Seus alunos",
    question: "Qual é o perfil dos seus alunos que precisam de PEI?",
    subtitle: "Pode escolher o que mais representa seu contexto",
    options: [
      { icon: "🧩", text: "TEA, TDAH ou Deficiência Intelectual" },
      { icon: "♾️", text: "Deficiências múltiplas ou outros diagnósticos" },
      { icon: "🌱", text: "Educação Infantil 4 e 5 anos" }
    ]
  },
  {
    tag: "Urgência",
    question: "Você tem algum PEI para entregar nos próximos dias?",
    subtitle: "Isso nos ajuda a entender o que você precisa agora",
    options: [
      { icon: "🔥", text: "Sim, preciso resolver isso agora" },
      { icon: "📅", text: "Tenho prazo chegando em breve" },
      { icon: "📆", text: "Não agora, mas quero estar preparada" }
    ]
  },
  {
    tag: "Seu sonho",
    question: "Ter um PEI pronto nas mãos significaria:",
    subtitle: "Qual dessas conquistas mais faz sentido para você?",
    options: [
      { icon: "😌", text: "Dormir tranquila sabendo que fiz o meu melhor" },
      { icon: "🏆", text: "Ser reconhecida como professora preparada" },
      { icon: "⌛", text: "Ter meu tempo de volta, sem trabalho em casa" }
    ]
  }
];
