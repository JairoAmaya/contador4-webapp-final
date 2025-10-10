// src/components/FullPromptsSection.jsx
import React, { useState, useEffect } from "react";
import promptsFull from "../promptsFull.json";
import "./TestSection.css"; // usamos los mismos estilos base

function FullPromptsSection({ onClose }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // === BÚSQUEDA ===
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (term === "") {
      setSearchResults([]);
      return;
    }

    const results = [];
    promptsFull.forEach((cat) => {
      cat.subcategories.forEach((sub) => {
        sub.prompts.forEach((p) => {
          if (
            p.title.toLowerCase().includes(term) ||
            p.prompt.toLowerCase().includes(term)
          ) {
            results.push(p);
          }
        });
      });
    });

    setSearchResults(results);
  };

  const handleCopy = (prompt) => {
    navigator.clipboard.writeText(prompt);
    alert("✅ Prompt copiado al portapapeles");
  };

  const handleBack = () => {
    if (selectedSubcategory) setSelectedSubcategory(null);
    else if (selectedCategory) setSelectedCategory(null);
    else setSearchResults([]);
  };

  return (
    <div className="fullprompts-container">
      <h2>📚 Biblioteca Completa de Prompts Contador 4.0</h2>

      {/* BOTÓN DE CIERRE */}
      <button className="close-button" onClick={onClose}>
        ✖ Cerrar
      </button>

      {/* BUSCADOR */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="🔍 Buscar prompts..."
          value={searchTerm}
          onChange={handleSearch}
        />
        {searchResults.length > 0 && (
          <button className="back-button" onClick={handleBack}>
            Volver
          </button>
        )}
      </div>

      {/* RESULTADOS DE BÚSQUEDA */}
      {searchResults.length > 0 && (
        <div className="prompt-list">
          {searchResults.map((p, i) => (
            <div key={i} className="prompt-card">
              <h4>{p.title}</h4>
              <p>{p.prompt}</p>
              <button onClick={() => handleCopy(p.prompt)}>Copiar</button>
            </div>
          ))}
        </div>
      )}

      {/* CATEGORÍAS */}
      {!selectedCategory && !selectedSubcategory && searchResults.length === 0 && (
        <div className="category-list">
          {promptsFull.map((category, index) => (
            <button
              key={index}
              className="category-button"
              onClick={() => setSelectedCategory(category)}
            >
              {category.category}
            </button>
          ))}
        </div>
      )}

      {/* SUBCATEGORÍAS */}
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

      {/* PROMPTS */}
      {selectedSubcategory && (
        <div className="prompt-list">
          <button className="back-button" onClick={handleBack}>
            ⬅ Volver
          </button>
          {selectedSubcategory.prompts.map((prompt, i) => (
            <div key={i} className="prompt-card">
              <h4>{prompt.title}</h4>
              <p>{prompt.prompt}</p>
              <button onClick={() => handleCopy(prompt.prompt)}>Copiar</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FullPromptsSection;
