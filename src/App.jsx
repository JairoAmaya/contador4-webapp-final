// src/App.jsx
import React, { useState } from "react";
import promptsData from "./promptsData";
import "./styles.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleCopy = (prompt) => {
    navigator.clipboard.writeText(prompt);
    alert("✅ Prompt copiado al portapapeles");
  };

  const handleSearch = () => {
    if (searchTerm.trim() === "") return;

    const results = [];
    promptsData.forEach((category) => {
      category.subcategories.forEach((sub) => {
        sub.prompts.forEach((prompt) => {
          if (
            prompt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            prompt.prompt.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            results.push({
              ...prompt,
              category: category.title,
              subcategory: sub.title,
            });
          }
        });
      });
    });

    setSearchResults(results);
  };

  return (
    <div className="app-container">
      {/* === Encabezado === */}
      <header>
        <h1>Contador 4.0</h1>
        <p className="subtitle">Sistema de Transformación con IA para Contadores</p>
      </header>

      {/* === Buscador de Prompts === */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar prompt..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">🔍</button>
      </div>

      {/* === Resultados de búsqueda === */}
      {searchTerm && (
        <div className="search-results">
          <h2>Resultados de búsqueda</h2>

          {/* 🔙 Botón para volver al inicio */}
          <button
            onClick={() => {
              setSearchTerm("");
              setSearchResults([]);
            }}
            className="back-button"
            style={{
              backgroundColor: "#E66E33",
              color: "#fff",
              padding: "8px 14px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              marginBottom: "20px",
              fontWeight: "bold",
            }}
          >
            ← Volver al inicio
          </button>

          {searchResults.length > 0 ? (
            searchResults.map((result, i) => (
              <div key={i} className="prompt-card">
                <h3 style={{ color: "#E66E33" }}>{result.title}</h3>
                <p>{result.prompt}</p>
                <p style={{ fontSize: "0.9rem", color: "#555" }}>
                  {result.category} → {result.subcategory}
                </p>
                <button
                  onClick={() => handleCopy(result.prompt)}
                  className="copy-button"
                >
                  Copiar Prompt
                </button>
              </div>
            ))
          ) : (
            <p>No se encontraron prompts con ese término.</p>
          )}
        </div>
      )}

      {/* === Categorías === */}
      {!searchTerm && !selectedCategory && (
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

      {/* === Subcategorías === */}
      {selectedCategory && !selectedSubcategory && (
        <div className="subcategoria-list">
          <button onClick={() => setSelectedCategory(null)} className="back-button">
            ← Volver
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

      {/* === Prompts === */}
      {selectedSubcategory && (
        <div className="prompt-list">
          <button onClick={() => setSelectedSubcategory(null)} className="back-button">
            ← Volver
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

      {/* === Bloques informativos === */}
      {!selectedCategory && !searchTerm && (
        <>
          <div className="info-box">
            <h2>💡 Tip de uso</h2>
            <p>
              Cada prompt está diseñado para integrarse fácilmente con ChatGPT u otras herramientas de IA.
              Puedes personalizar variables entre corchetes [ ] según tus datos o contexto.
            </p>
          </div>

          <div className="info-box">
            <h2>🚀 Recomendación</h2>
            <p>
              Explora las 7 categorías para descubrir cómo la inteligencia artificial puede transformar tu práctica contable.
              Desde análisis financiero hasta auditoría internacional — todo en un solo sistema.
            </p>
          </div>
        </>
      )}

      {/* === Footer Legal === */}
      <footer className="footer">
        <p>
          © 2025{" "}
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
            Jairo Amaya – Full Stack Marketer
          </a>.
          <br />
          <b>Contador 4.0 Express</b> es propiedad intelectual de Jairo Amaya.
          Todos los derechos reservados.
          <br />
          Su acceso y uso están destinados exclusivamente a los lectores del{" "}
          <i>
            E-book “Contador 4.0: Sistema de Transformación con IA para Contadores”.
          </i>
        </p>
      </footer>
    </div>
  );
}

export default App;
