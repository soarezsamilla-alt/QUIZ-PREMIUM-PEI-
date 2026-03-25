"use client";

import { QuizManager } from "@/components/quiz/QuizManager";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <div className="bg-texture" />
      <div className="page relative z-10">
        <QuizManager />
      </div>
    </main>
  );
}
