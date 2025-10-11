// src/components/MVPSection.jsx
import React, { useState } from "react";
import promptsData from "../promptsData";
import "../styles.css";

function MVPSection() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleBack = () => {
    if (selectedSubcategory) setSelectedSubcategory(null);
    else if (selectedCategory) setSelectedCategory(null);
    else if (searchResults.length > 0) {
      setSearchResults([]);
      setSearchTerm("");
    }
  };

  const handleCopy = (prompt) => {
    navigator.clipboard.writeText(prompt);
    alert("✅ Prompt copiado al portapapeles");
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    if (term === "") {
      setSearchResults([]);
      return;
    }

    const results = [];
    promptsData.forEach((category) => {
      category.subcategories.forEach((sub) => {
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

  return (
    <div className="app-container">
      {/* ENCABEZADO */}
     <header className="header">
  <div>
    <h1>Contador 4.0</h1>
    <p>Sistema de Transformación con IA para Contadores</p>
  </div>
</header>

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
              <button onClick={() => handleCopy(p.prompt)}>Copiar Prompt</button>
            </div>
          ))}
        </div>
      )}

      {/* CATEGORÍAS */}
      {!selectedCategory && !selectedSubcategory && searchResults.length === 0 && (
        <div className="category-list">
          {promptsData.map((category, index) => (
            <button
              key={index}
              className="category-button"
              onClick={() => setSelectedCategory(category)}
            >
              <span style={{ fontSize: "24px", marginRight: "10px" }}>
                {category.icon}
              </span>
              {category.title}
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
              <button onClick={() => handleCopy(prompt.prompt)}>
                Copiar Prompt
              </button>
            </div>
          ))}
        </div>
      )}

      {/* TIP DE USO */}
      <div className="info-box">
        <h3>💡 Tip de uso</h3>
        <p>
          Cada prompt está diseñado para integrarse fácilmente con ChatGPT u otras
          herramientas de IA. Puedes personalizar variables entre corchetes [ ] según
          tus datos o contexto.
        </p>
      </div>

      {/* RECOMENDACIÓN */}
      <div className="info-box">
        <h3>🚀 Recomendación</h3>
        <p>
          Explora las 7 categorías para descubrir cómo la inteligencia artificial puede
          transformar tu práctica contable. Desde análisis financiero hasta auditoría
          internacional — todo en un solo sistema.
        </p>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <p>
          <b>Contador 4.0 Express</b> — propiedad intelectual de{" "}
          <a
            href="https://jairoamaya.co"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#E66E33",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            Jairo Amaya - Full Stack Marketer
          </a>
        </p>
      </footer>
    </div>
  );
}

export default MVPSection;
