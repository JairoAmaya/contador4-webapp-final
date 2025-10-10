// src/App.jsx
import React, { useState } from "react";
import MVPSection from "./components/MVPSection";
import FullPromptsSection from "./components/FullPromptsSection";
import "./styles.css";

function App() {
  const [showFullPrompts, setShowFullPrompts] = useState(false);

  return (
    <div className="app-container">
      {/* === MVP PRINCIPAL === */}
      <MVPSection />

      {/* === BOTÓN FLOTANTE PARA VER PROMPTS COMPLETOS === */}
      <button
        className="floating-button"
        onClick={() => setShowFullPrompts(true)}
        title="Abrir biblioteca completa de prompts"
      >
        🧪
      </button>

      {/* === SECCIÓN COMPLETA DE PROMPTS === */}
      {showFullPrompts && (
        <FullPromptsSection onClose={() => setShowFullPrompts(false)} />
      )}
    </div>
  );
}

export default App;
