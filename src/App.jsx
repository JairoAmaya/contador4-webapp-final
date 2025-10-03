import React, { useState } from "react";
import promptsData from "./promptsData.js";
import "./styles.css";

function App() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  const copiarPrompt = (texto) => {
    navigator.clipboard.writeText(texto);
    alert("✅ Prompt copiado al portapapeles");
  };

  return (
    <div className="app-container">
      <h1>📊 Contador 4.0 – Demo</h1>
      <p className="subtitle">
        Explora categorías y subcategorías de prompts especializados en contabilidad y negocio.
      </p>

      {/* Si NO hay categoría seleccionada → mostramos todas */}
      {!categoriaSeleccionada ? (
        <div className="categories-container">
          {promptsData.map((categoria) => (
            <button
              key={categoria.id}
              className="category-card"
              onClick={() => setCategoriaSeleccionada(categoria)}
            >
              <span style={{ fontSize: "22px", marginRight: "8px" }}>
                {categoria.icon}
              </span>
              {categoria.name}
            </button>
          ))}
        </div>
      ) : (
        <div>
          {/* Botón volver */}
          <button
            onClick={() => setCategoriaSeleccionada(null)}
            style={{
              background: "#007bff",
              color: "white",
              padding: "8px 16px",
              border: "none",
              borderRadius: "6px",
              marginBottom: "20px",
              cursor: "pointer",
            }}
          >
            ⬅ Volver
          </button>

          {/* Nombre de la categoría seleccionada */}
          <h2>{categoriaSeleccionada.name}</h2>

          {/* Mostrar subcategorías y prompts */}
          {categoriaSeleccionada.subcategories.map((sub, i) => (
            <div key={i} className="subcategory-block">
              <h3>📑 {sub.name}</h3>
              {sub.prompts.map((prompt, j) => (
                <div key={j} className="prompt-card">
                  <h4>{prompt.title}</h4>
                  <p>{prompt.text}</p>
                  <button
                    className="copy-btn"
                    onClick={() => copiarPrompt(prompt.text)}
                  >
                    Copiar Prompt
                  </button>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
