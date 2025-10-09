import React from "react";
import PromptSearch from "./PromptSearch";
import PromptCategories from "./PromptCategories";
import TipsSection from "./TipsSection";
import RecommendationsSection from "./RecommendationsSection";
import ChatAssistant from "./ChatAssistant";

export default function App() {
  return (
    <div className="app-container px-4 py-8 max-w-6xl mx-auto">
      {/* 🧭 Encabezado */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Contador 4.0</h1>
        <p className="text-lg text-gray-600">
          Sistema de Transformación con IA para Contadores
        </p>
      </header>

      {/* 🔍 Buscador */}
      <section className="mb-8">
        <PromptSearch />
      </section>

      {/* 🟧 Categorías principales */}
      <section className="mb-8">
        <PromptCategories />
      </section>

      {/* 💡 Tip de uso */}
      <section className="mb-6">
        <TipsSection />
      </section>

      {/* 🚀 Recomendaciones */}
      <section className="mb-12">
        <RecommendationsSection />
      </section>

      {/* 🤖 Asistente Virtual */}
      <section className="mt-12 border-t pt-8">
        <h2 className="text-2xl font-bold mb-4 text-center">
          🤖 Asistente Virtual Contador 4.0
        </h2>
        <ChatAssistant />
      </section>
    </div>
  );
}
