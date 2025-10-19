// src/App.jsx
import React, { useState } from "react";
import MVPSection from "./components/MVPSection";
import FullPromptsSection from "./components/FullPromptsSection";
import "./styles.css";



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
