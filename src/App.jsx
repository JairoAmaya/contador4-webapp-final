import React, { useState } from "react";
import promptsData from "./promptsData";
import "./styles.css";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("✅ Prompt copiado al portapapeles");
  };

  return (
    <div className="app-container">
      <header>
        <h1>CONTADOR 4.0 - EXPRESS</h1>
        <p className="subtitle">
          Explora categorías, subcategorías y prompts especializados de manera
          rápida.
        </p>
      </header>

      {/* Vista 1: Lista de Categorías */}
      {!selectedCategory && (
        <div className="category-list">
          {promptsData.map((category) => (
            <button
              key={category.id}
              className="category-button"
              onClick={() => setSelectedCategory(category)}
            >
              {category.icon} {category.title}
            </button>
          ))}
        </div>
      )}

      {/* Vista 2: Subcategorías */}
      {selectedCategory && !selectedSubcategory && (
        <div>
          <div className="breadcrumb">
            <button onClick={() => setSelectedCategory(null)}>⬅ Volver</button>
            <span>{selectedCategory.title}</span>
          </div>

          <div className="subcategoria-list">
            {selectedCategory.subcategories.map((sub) => (
              <div
                key={sub.id}
                className="subcategoria-card"
                onClick={() => setSelectedSubcategory(sub)}
              >
                {sub.title}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Vista 3: Prompts */}
      {selectedSubcategory && (
        <div>
          <div className="breadcrumb">
            <button onClick={() => setSelectedSubcategory(null)}>⬅ Volver</button>
            <span>
              {selectedCategory.title} → {selectedSubcategory.title}
            </span>
          </div>

          <div className="prompt-list">
            {selectedSubcategory.prompts.map((p) => (
              <div key={p.id} className="prompt-card">
                <h4>{p.title}</h4>
                <p>{p.prompt}</p>
                <button onClick={() => handleCopy(p.prompt)}>
                  Copiar Prompt
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bloques informativos al final */}
      {!selectedCategory && (
        <footer>
          <div className="info-section">
            <h3>💡 Consejos para usar los prompts</h3>
            <p>
              Cambia siempre la información entre [corchetes] por tus datos
              reales. Usa claridad en tus instrucciones, combina prompts según
              tus necesidades y ajusta el tono según tu estilo profesional.
            </p>
          </div>

          <div className="info-section">
            <h3>ℹ️ Sobre esta demo</h3>
            <p>
              Esta es una versión de prueba de la herramienta <b>Contador 4.0</b>.
              Aquí puedes explorar categorías, subcategorías y ejemplos de
              prompts del e-book original.
            </p>
          </div>
        </footer>
      )}
    </div>
  );
};

export default App;
