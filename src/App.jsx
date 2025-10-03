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
        Explora categorías y subcategorías de prompts especializados en
        contabilidad y negocio.
      </p>

      {/* Lista de categorías */}
      <div className="categorias">
        {promptsData.map((categoria) => (
          <button
            key={categoria.id}
            className={`categoria-btn ${
              categoriaSeleccionada?.id === categoria.id ? "activa" : ""
            }`}
            onClick={() => setCategoriaSeleccionada(categoria)}
          >
            {categoria.icon} {categoria.name}
          </button>
        ))}
      </div>

      {/* Si hay una categoría seleccionada */}
      {categoriaSeleccionada && (
        <div className="categoria-detalle">
          <h2>{categoriaSeleccionada.name}</h2>

          {/* Lista de subcategorías */}
          {categoriaSeleccionada.subcategories.map((subcat, idx) => (
            <div key={idx} className="subcategoria">
              <h3>📂 {subcat.name}</h3>

              {/* Lista de prompts dentro de cada subcategoría */}
              {subcat.prompts.map((prompt, i) => (
                <div key={i} className="prompt-card">
                  <h4>{prompt.title}</h4>
                  <p>{prompt.text}</p>
                  <button onClick={() => copiarPrompt(prompt.text)}>
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


