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
      {!showFullPrompts && <MVPSection />}

      {/* === BOTÓN FLOTANTE PARA VER PROMPTS COMPLETOS === */}
      {!showFullPrompts && (
        <button
          className="floating-button"
          onClick={() => setShowFullPrompts(true)}
          title="Abrir biblioteca completa de prompts"
        >
          🧪
        </button>
      )}

      {/* === SECCIÓN COMPLETA DE PROMPTS === */}
      {showFullPrompts && (
        <div className="overlay">
          <div className="overlay-content">
            <button
              className="close-button"
              onClick={() => setShowFullPrompts(false)}
            >
              ✖
            </button>
            <FullPromptsSection />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
