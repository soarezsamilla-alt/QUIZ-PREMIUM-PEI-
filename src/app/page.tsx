"use client";

import { QuizContainer } from "@/components/quiz/QuizContainer";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <div className="bg-texture" />
      <div className="relative z-10">
        <QuizContainer />
      </div>
    </main>
  );
}
