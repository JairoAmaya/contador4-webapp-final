// src/components/FullPromptsSection.jsx
import React, { useState, useEffect } from "react";
import promptsFull from "../promptsFull.json"; // Archivo JSON con los 105 prompts
import "./TestSection.css"; // Usa los mismos estilos suaves del test

function FullPromptsSection({ onClose }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // === Función para copiar texto ===
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("✅ Prompt copiado al portapapeles");
  };

  // === Función para volver atrás ===
  const handleBack = () => {
    if (selectedSubcategory) setSelectedSubcategory(null);
    else if (selectedCategory) setSelectedCategory(null);
  };

  // === Filtrar prompts por búsqueda ===
  const filteredPrompts = [];
  if (searchTerm.trim() !== "") {
    Object.keys(promptsFull).forEach((catKey) => {
      const cat = promptsFull[catKey];
      cat.subcategories.forEach((sub) => {
        sub.prompts.forEach((p) => {
          if (
            p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.prompt.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            filteredPrompts.push(p);
          }
        });
      });
    });
  }

  return (
    <div className="test-section-overlay">
      <div className="test-section-container">
        {/* Cerrar */}
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>

        <h2>📘 Biblioteca Completa de Prompts Contador 4.0</h2>
        <p className="subtitle">
          Versión extendida con los 105 prompts completos del E-book.
        </p>

        {/* Buscador */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="🔍 Buscar prompt..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button onClick={() => setSearchTerm("")}>Limpiar</button>
          )}
        </div>

        {/* Resultados de búsqueda */}
        {filteredPrompts.length > 0 ? (
          <div className="prompt-list">
            {filteredPrompts.map((p, i) => (
              <div key={i} className="prompt-card">
                <h4>{p.title}</h4>
                <p>{p.prompt}</p>
                <button onClick={() => handleCopy(p.prompt)}>Copiar</button>
              </div>
            ))}
          </div>
        ) : (
          <>
            {/* Categorías */}
            {!selectedCategory && !selectedSubcategory && (
              <div className="category-list">
                {Object.keys(promptsFull).map((catKey, i) => {
                  const cat = promptsFull[catKey];
                  return (
                    <button
                      key={i}
                      className="category-button"
                      onClick={() => setSelectedCategory(cat)}
                    >
                      <span style={{ marginRight: "8px" }}>{cat.icon}</span>
                      {cat.title}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Subcategorías */}
            {selectedCategory && !selectedSubcategory && (
              <div className="subcategoria-list">
                <button className="back-button" onClick={handleBack}>
                  ⬅ Volver
                </button>
                {selectedCategory.subcategories.map((sub, i) => (
                  <div
                    key={i}
                    className="subcategoria-card"
                    onClick={() => setSelectedSubcategory(sub)}
                  >
                    {sub.title}
                  </div>
                ))}
              </div>
            )}

            {/* Prompts */}
            {selectedSubcategory && (
              <div className="prompt-list">
                <button className="back-button" onClick={handleBack}>
                  ⬅ Volver
                </button>
                {selectedSubcategory.prompts.map((p, i) => (
                  <div key={i} className="prompt-card">
                    <h4>{p.title}</h4>
                    <p>{p.prompt}</p>
                    <button onClick={() => handleCopy(p.prompt)}>
                      Copiar Prompt
                    </button>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default FullPromptsSection;
