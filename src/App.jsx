import React, { useState } from "react";
import promptsData from "./promptsData.js";
import "./styles.css";

function App() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [subcategoriaSeleccionada, setSubcategoriaSeleccionada] =
    useState(null);

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
            {categoriaSeleccionada.icon} {categoriaSeleccionada.name}
            {subcategoriaSeleccionada && ` / ${subcategoriaSeleccionada.name}`}
          </span>
        </div>
      )}

      {/* Pantalla principal - lista de categorías */}
      {!categoriaSeleccionada && (
        <div>
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

          {/* Consejos al final */}
          <div className="tips-box">
            <h3>💡 Consejos para usar los prompts</h3>
            <ul>
              <li>
                Cambia siempre la información entre [corchetes] por datos
                específicos.
              </li>
              <li>
                Usa <b>www.claude.ai</b> para respuestas más profundas.
              </li>
              <li>Combina prompts según tus necesidades específicas.</li>
              <li>Personaliza el tono según tu estilo de comunicación.</li>
            </ul>
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

                {/* Prompt largo */}
                {prompt.long && (
                  <div className="prompt-version">
                    <p>{prompt.long}</p>
                    <button onClick={() => copiarPrompt(prompt.long)}>
                      Copiar Versión Larga
                    </button>
                  </div>
                )}

                {/* Prompt express */}
                {prompt.express && (
                  <div className="prompt-version">
                    <p>{prompt.express}</p>
                    <button onClick={() => copiarPrompt(prompt.express)}>
                      Copiar Versión Express
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
