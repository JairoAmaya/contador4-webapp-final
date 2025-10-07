import React, { useState } from "react";
import promptsData from "./promptsData";
import "./styles.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleBack = () => {
    if (selectedSubcategory) {
      setSelectedSubcategory(null);
    } else if (selectedCategory) {
      setSelectedCategory(null);
    }
  };

  const handleCopy = (prompt) => {
    navigator.clipboard.writeText(prompt);
    alert("✅ Prompt copiado al portapapeles");
  };

  // === Filtrar prompts globalmente ===
  const allPrompts = promptsData.flatMap((cat) =>
    cat.subcategories.flatMap((sub) =>
      sub.prompts.map((p) => ({
        ...p,
        category: cat.title,
        subcategory: sub.title,
      }))
    )
  );

  const filteredPrompts = allPrompts.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.prompt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const showSearchResults = searchTerm.length > 1;

  return (
    <div className="app-container">
      <header>
        <h1>Contador 4.0</h1>
        <p className="subtitle">
          Sistema de Transformación con IA para Contadores
        </p>
      </header>

      {/* === Buscador === */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar prompt..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button>🔍</button>
      </div>

      {/* === Resultados de búsqueda === */}
      {showSearchResults ? (
        <div className="prompt-list">
          <h3>Resultados de búsqueda</h3>
          {filteredPrompts.length === 0 ? (
            <p>No se encontraron prompts relacionados.</p>
          ) : (
            filteredPrompts.map((p, i) => (
              <div key={i} className="prompt-card">
                <h4>{p.title}</h4>
                <p>{p.prompt}</p>
                <small>
                  {p.category} → {p.subcategory}
                </small>
                <br />
                <button onClick={() => handleCopy(p.prompt)}>
                  Copiar Prompt
                </button>
              </div>
            ))
          )}
        </div>
      ) : (
        <>
          {/* === Navegación por categorías === */}
          {(selectedCategory || selectedSubcategory) && (
            <div className="breadcrumb">
              <button onClick={handleBack}>⬅️ Volver</button>
            </div>
          )}

          {!selectedCategory && (
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

          {selectedCategory && !selectedSubcategory && (
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
          )}

          {selectedSubcategory && (
            <div className="prompt-list">
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
          {!selectedCategory && (
            <>
              <div className="info-box">
                <h2>💡 Tip de uso</h2>
                <p>
                  Cada prompt está diseñado para integrarse fácilmente con
                  ChatGPT u otras herramientas de IA.  
                  Puedes personalizar variables entre corchetes [ ] según tus
                  datos o contexto.
                </p>
              </div>

              <div className="info-box">
                <h2>🚀 Recomendación</h2>
                <p>
                  Explora las 7 categorías para descubrir cómo la inteligencia
                  artificial puede transformar tu práctica contable.  
                  Desde análisis financiero hasta auditoría internacional — todo
                  en un solo sistema.
                </p>
              </div>
            </>
          )}
        </>
      )}

      {/* === Footer Legal === */}
      <footer className="footer">
        <p>
          <b>Contador 4.0 Express</b> es propiedad intelectual de{" "}
          <a
            href="https://jairoamaya.co"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#E66E33",
              fontWeight: "bold",
              textDecoration: "none",
              marginLeft: "4px",
            }}
          >
            Jairo Amaya - Full Stack Marketer
          </a>
          .
        </p>
        <p>
          Todos los derechos reservados. Su acceso y uso están destinados
          exclusivamente a los usuarios del E-book{" "}
          <i>
            “Contador 4.0 — Sistema de Transformación con IA para Contadores”
          </i>.
        </p>
      </footer>
    </div>
  );
}

export default App;
