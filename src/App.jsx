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

  const volver = () => {
    if (subcategoriaSeleccionada) {
      setSubcategoriaSeleccionada(null);
    } else if (categoriaSeleccionada) {
      setCategoriaSeleccionada(null);
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        {(categoriaSeleccionada || subcategoriaSeleccionada) && (
          <button className="back-btn" onClick={volver}>
            ⬅ Volver
          </button>
        )}
        <h1>📊 Contador 4.0 – Demo</h1>
        <p className="subtitle">
          Explora categorías y subcategorías de prompts especializados en contabilidad y negocio.
        </p>
      </header>

      {/* Pantalla Principal: Lista de Categorías */}
      {!categoriaSeleccionada && (
        <div className="categorias-list">
          {promptsData.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategoriaSeleccionada(cat)}
              className="categoria-btn"
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>
      )}

      {/* Pantalla de una Categoría → Subcategorías */}
      {categoriaSeleccionada && !subcategoriaSeleccionada && (
        <div>
          <h2>{categoriaSeleccionada.name}</h2>
          {categoriaSeleccionada.subcategories.map((sub, i) => (
            <div key={i} className="subcategoria-card">
              <h3 onClick={() => setSubcategoriaSeleccionada(sub)}>
                📂 {sub.name}
              </h3>
            </div>
          ))}
        </div>
      )}

      {/* Pantalla de una Subcategoría → Prompts */}
      {subcategoriaSeleccionada && (
        <div>
          <h2>{subcategoriaSeleccionada.name}</h2>
          {subcategoriaSeleccionada.prompts.map((p, i) => (
            <div key={i} className="prompt-card">
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <button onClick={() => copiarPrompt(p.text)}>Copiar Prompt</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
