import React, { useState } from "react";
import promptsData from "./prompts.json";
import "./styles.css";

function App() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  const copiarPrompt = (texto) => {
    navigator.clipboard.writeText(texto);
    alert("✅ Prompt copiado al portapapeles");
  };

  return (
    <div className="app-container">
      <h1>📊 Contador 4.0 - Demo</h1>
      <p className="subtitle">
        Explora categorías de prompts especializados en contabilidad y negocio.
      </p>

      {!categoriaSeleccionada ? (
        <div className="categorias-grid">
          {promptsData.categorias.map((cat, i) => (
            <div
              key={i}
              className="categoria-card"
              onClick={() => setCategoriaSeleccionada(cat)}
            >
              <h2>{cat.nombre}</h2>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <button
            className="back-button"
            onClick={() => setCategoriaSeleccionada(null)}
          >
            ⬅ Volver
          </button>
          <h2>{categoriaSeleccionada.nombre}</h2>

          {categoriaSeleccionada.prompts.map((p, i) => (
            <div key={i} className="prompt-card">
              <h3>{p.titulo}</h3>
              <pre className="prompt-text">{p.contenido}</pre>
              <button
                className="copy-button"
                onClick={() => copiarPrompt(p.contenido)}
              >
                📋 Copiar
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;

