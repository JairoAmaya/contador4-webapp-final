import React, { useState } from "react";
import promptsData from "./promptsData.js";
import "./styles.css";

function App() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [subcategoriaSeleccionada, setSubcategoriaSeleccionada] = useState(null);

  const copiarPrompt = (texto) => {
    navigator.clipboard.writeText(texto);
    alert("✅ Prompt copiado al portapapeles");
  };

  return (
    <div className="app-container">
      <h1>📊 Contador 4.0 – Demo</h1>
      <p className="subtitle">
        Explora categorías y subcategorías de prompts especializados en
        contabilidad y negocio.
      </p>

      <div className="content-area">
        {/* Breadcrumb */}
        {categoriaSeleccionada && (
          <div className="breadcrumb">
            <button
              onClick={() =>
                subcategoriaSeleccionada
                  ? setSubcategoriaSeleccionada(null)
                  : setCategoriaSeleccionada(null)
              }
            >
              ⬅ Volver
            </button>
            <span>
              {categoriaSeleccionada.name}
              {subcategoriaSeleccionada && ` / ${subcategoriaSeleccionada.name}`}
            </span>
          </div>
        )}

        {/* Pantalla principal - lista de categorías */}
        {!categoriaSeleccionada && (
          <div className="category-list">
            {promptsData.map((cat) => (
              <button
                key={cat.id}
                className="category-button"
                onClick={() => setCategoriaSeleccionada(cat)}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>
        )}

        {/* Vista de una categoría con subcategorías */}
        {categoriaSeleccionada && !subcategoriaSeleccionada && (
          <div className="subcategory-list">
            <h2>{categoriaSeleccionada.name}</h2>
            {categoriaSeleccionada.subcategories.map((subcat, index) => (
              <div
                key={index}
                className="subcategory"
                onClick={() => setSubcategoriaSeleccionada(subcat)}
              >
                📑 <strong>{subcat.name}</strong>
              </div>
            ))}
          </div>
        )}

        {/* Vista de prompts dentro de una subcategoría */}
        {subcategoriaSeleccionada && (
          <div>
            <h3>{subcategoriaSeleccionada.name}</h3>

            <div className="prompt-list">
              {subcategoriaSeleccionada.prompts.map((prompt, index) => (
                <div key={index} className="prompt-card">
                  <h4>{prompt.title}</h4>
                  <p>{prompt.text}</p>
                  <button onClick={() => copiarPrompt(prompt.text)}>
                    Copiar Prompt
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
