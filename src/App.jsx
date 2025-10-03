import React, { useState } from "react";
import promptsData from "./promptsData";
import "./App.css"; // Importa los estilos globales

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const handleBack = () => {
    if (selectedSubcategory) {
      setSelectedSubcategory(null);
    } else {
      setSelectedCategory(null);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("✅ Prompt copiado al portapapeles");
  };

  return (
    <div className="App">
      <h1>📊 Contador 4.0 – Demo</h1>
      <p>Explora categorías, subcategorías y prompts especializados en contabilidad y negocio.</p>

      {/* Botón de volver */}
      {(selectedCategory || selectedSubcategory) && (
        <button className="back-button" onClick={handleBack}>
          ← Volver
        </button>
      )}

      {/* Listado de categorías */}
      {!selectedCategory &&
        promptsData.map((category, index) => (
          <div
            key={index}
            className="category-card"
            onClick={() => setSelectedCategory(category)}
          >
            <h2>{category.icon} {category.name}</h2>
          </div>
        ))}

      {/* Subcategorías */}
      {selectedCategory && !selectedSubcategory && (
        <div>
          <h2>{selectedCategory.icon} {selectedCategory.name}</h2>
          {selectedCategory.subcategories.map((subcat, index) => (
            <div
              key={index}
              className="subcategory-card"
              onClick={() => setSelectedSubcategory(subcat)}
            >
              <h3>{subcat.name}</h3>
            </div>
          ))}
        </div>
      )}

      {/* Prompts */}
      {selectedSubcategory && (
        <div>
          <h2>{selectedSubcategory.name}</h2>
          {selectedSubcategory.prompts.map((prompt, index) => (
            <div key={index} className="prompt-card">
              <h3>{prompt.title}</h3>
              <p>{prompt.long}</p>
              {prompt.express && (
                <>
                  <h4>⚡ Versión Express</h4>
                  <p>{prompt.express}</p>
                </>
              )}
              <button
                className="copy-button"
                onClick={() => copyToClipboard(prompt.long)}
              >
                Copiar Versión Larga
              </button>
              {prompt.express && (
                <button
                  className="copy-button"
                  onClick={() => copyToClipboard(prompt.express)}
                >
                  Copiar Versión Express
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Bloques informativos */}
      {!selectedCategory && (
        <div className="info-block tips">
          <h3>💡 Consejos para usar los prompts</h3>
          <ul>
            <li>Cambia siempre la información entre [corchetes] por datos específicos.</li>
            <li>Usa <strong>www.claude.ai</strong> para respuestas más profundas.</li>
            <li>Combina prompts según tus necesidades específicas.</li>
            <li>Personaliza el tono según tu estilo de comunicación.</li>
          </ul>
        </div>
      )}

      {!selectedCategory && (
        <div className="info-block demo">
          <h3>ℹ️ Sobre esta demo</h3>
          <p>
            Esta es una versión de prueba de la herramienta <strong>Contador 4.0</strong>. 
            Aquí puedes explorar categorías y subcategorías con ejemplos de prompts extraídos del e-book.
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
