// src/App.js
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
        Explora categorías, subcategorías y prompts especializados en
        contabilidad y negocio.
      </p>

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

          {/* Bloque de información adicional */}
          <div className="info-box">
            <h2>ℹ️ Sobre esta demo</h2>
            <p>
              Esta es una versión de prueba de la herramienta{" "}
              <strong>Contador 4.0</strong>. Aquí puedes explorar categorías y
              subcategorías con ejemplos de prompts extraídos del e-book.
            </p>
          </div>
        </div>
      )}

      {/* Vista de una categoría con subcategorías */}
      {categoriaSeleccionada && !subcategoriaSeleccionada && (
        <div className="subcategoria-list">
          <h2>{categoriaSeleccionada.name}</h2>
          {categoriaSeleccionada.subcategories.map((subcat, index) => (
            <div
              key={index}
              className="subcategoria-card"
              onClick={() => setSubcategoriaSeleccionada(subcat)}
            >
              📑 {subcat.name}
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

                {/* Si hay versión express, mostrar botón extra */}
                {prompt.express && (
                  <div className="express-section">
                    <p>
                      <strong>⚡ Versión Express:</strong> {prompt.express}
                    </p>
                  </div>
                )}

                <button onClick={() => copiarPrompt(prompt.text)}>
                  Copiar Prompt
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
