// src/App.js
import React, { useState } from "react";
import promptsData from "./promptsData";
import CategoryDetail from "./CategoryDetail";
import "./App.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="app-container">
      <h1>📊 Contador 4.0 – Demo</h1>
      <p className="subtitle">
        Explora categorías, subcategorías y prompts especializados en contabilidad y negocio.
      </p>

      {selectedCategory ? (
        <CategoryDetail
          category={selectedCategory}
          onBack={() => setSelectedCategory(null)}
        />
      ) : (
        <div className="category-list">
          {promptsData.map((category, idx) => (
            <div
              key={idx}
              className="category-card"
              onClick={() => setSelectedCategory(category)}
            >
              <span className="icon">{category.icon}</span>
              <span className="category-name">{category.name}</span>
            </div>
          ))}
        </div>
      )}

      {/* Bloque de consejos y demo */}
      <div className="info-box">
        <h3>💡 Consejos para usar los prompts</h3>
        <ul>
          <li>Cambia siempre la información entre [corchetes] por datos específicos.</li>
          <li>Usa <strong>www.claude.ai</strong> para respuestas más profundas.</li>
          <li>Combina prompts según tus necesidades específicas.</li>
          <li>Personaliza el tono según tu estilo de comunicación.</li>
        </ul>

        <h3>ℹ️ Sobre esta demo</h3>
        <p>
          Esta es una versión de prueba de la herramienta <strong>Contador 4.0</strong>. 
          Aquí puedes explorar categorías y subcategorías con ejemplos de prompts extraídos del e-book.
        </p>
      </div>
    </div>
  );
}

export default App;
