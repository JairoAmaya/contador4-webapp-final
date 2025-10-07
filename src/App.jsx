import React, { useState } from "react";
import promptsData from "./promptsData";
import "./styles.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleCopy = (prompt) => {
    navigator.clipboard.writeText(prompt);
    alert("✅ Prompt copiado al portapapeles");
  };

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    const results = [];

    promptsData.forEach((category) => {
      category.subcategories.forEach((subcategory) => {
        subcategory.prompts.forEach((prompt) => {
          if (
            prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            prompt.prompt.toLowerCase().includes(searchQuery.toLowerCase())
          ) {
            results.push({
              ...prompt,
              category: category.title,
              subcategory: subcategory.title,
            });
          }
        });
      });
    });

    setSearchResults(results);
    setSelectedCategory(null);
    setSelectedSubcategory(null);
  };

  const handleBack = () => {
    if (searchResults.length > 0) {
      setSearchResults([]);
      setSearchQuery("");
    } else if (selectedSubcategory) {
      setSelectedSubcategory(null);
    } else if (selectedCategory) {
      setSelectedCategory(null);
    }
  };

  return (
    <div className="app-container">
      <header>
        <h1>Contador 4.0</h1>
        <p className="subtitle">
          Sistema de Transformación con IA para Contadores
        </p>
      </header>

      {/* 🔍 Barra de búsqueda */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar prompt..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>🔍</button>
      </div>

      {/* 🔙 Botón volver visible cuando hay resultados, categorías o subcategorías */}
      {(selectedCategory || selectedSubcategory || searchResults.length > 0) && (
        <button className="back-button" onClick={handleBack}>
          ← Volver
        </button>
      )}

      {/* 📋 Resultados de búsqueda */}
      {searchResults.length > 0 ? (
        <div className="search-results">
          <h2>Resultados de búsqueda</h2>
          {searchResults.map((item, index) => (
            <div key={index} className="prompt-card">
              <h3>{item.title}</h3>
              <p>{item.prompt}</p>
              <small>
                📂 {item.category} → {item.subcategory}
              </small>
              <button
                className="copy-button"
                onClick={() => handleCopy(item.prompt)}
              >
                Copiar Prompt
              </button>
            </div>
          ))}
        </div>
      ) : !selectedCategory ? (
        /* 🧭 Categorías */
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
      ) : !selectedSubcategory ? (
        /* 🗂️ Subcategorías */
        <div className="subcategoria-list">
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
      ) : (
        /* ✏️ Prompts */
        <div className="prompt-list">
          {selectedSubcategory.prompts.map((prompt, i) => (
            <div key={i} className="prompt-card">
              <h4>{prompt.title}</h4>
              <p>{prompt.prompt}</p>
              <button
                className="copy-button"
                onClick={() => handleCopy(prompt.prompt)}
              >
                Copiar Prompt
              </button>
            </div>
          ))}
        </div>
      )}

      {/* 💡 Bloques informativos solo visibles si no hay búsqueda ni selección */}
      {!selectedCategory && searchResults.length === 0 && (
        <>
          <div className="info-box">
            <h2>💡 Tip de uso</h2>
            <p>
              Cada prompt está diseñado para integrarse fácilmente con ChatGPT u
              otras herramientas de IA. Puedes personalizar variables entre
              corchetes [ ] según tus datos o contexto.
            </p>
          </div>

          <div className="info-box">
            <h2>🚀 Recomendación</h2>
            <p>
              Explora las 7 categorías para descubrir cómo la inteligencia
              artificial puede transformar tu práctica contable. Desde análisis
              financiero hasta auditoría internacional — todo en un solo
              sistema.
            </p>
          </div>
        </>
      )}

      {/* ⚖️ Footer */}
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
          </a>
          .
          <br />
          <b>Contador 4.0 Express</b> es propiedad intelectual de Jairo Amaya.
          Todos los derechos reservados.
          <br />
          Su acceso y uso están destinados exclusivamente a los lectores del{" "}
          <i>
            E-book “Contador 4.0: Sistema de Transformación con IA para
            Contadores”.
          </i>
        </p>
      </footer>
    </div>
  );
}

export default App;
