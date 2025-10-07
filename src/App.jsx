// src/App.jsx
import React, { useState } from "react";
import promptsData from "./promptsData";
import "./styles.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  // Selección de categoría
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory(null);
  };

  // Selección de subcategoría
  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategory(subcategory);
  };

  // Botón "volver"
  const handleBack = () => {
    if (selectedSubcategory) {
      setSelectedSubcategory(null);
    } else if (selectedCategory) {
      setSelectedCategory(null);
    }
  };

  // Copiar prompt
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("✅ Prompt copiado al portapapeles");
  };

  return (
    <div className="app-container">
      <h1>📚 Contador 4.0</h1>
      <p className="subtitle">
        Sistema de Transformación con IA para Contadores
      </p>

      {/* Breadcrumb */}
      {(selectedCategory || selectedSubcategory) && (
        <div className="breadcrumb">
          <button onClick={handleBack}>⬅ Volver</button>
          <span>
            {selectedCategory?.title}
            {selectedSubcategory && ` / ${selectedSubcategory.title}`}
          </span>
        </div>
      )}

      {/* Lista de categorías */}
      {!selectedCategory && (
        <div className="category-list">
          {promptsData.map((category, index) => (
            <button
              key={index}
              className="category-button"
              onClick={() => handleCategoryClick(category)}
            >
              {category.icon} {category.title}
            </button>
          ))}
        </div>
      )}

      {/* Lista de subcategorías */}
      {selectedCategory && !selectedSubcategory && (
        <div className="subcategoria-list">
          <h2>{selectedCategory.title}</h2>
          {selectedCategory.subcategories.map((subcategory, index) => (
            <div
              key={index}
              className="subcategoria-card"
              onClick={() => handleSubcategoryClick(subcategory)}
            >
              📑 {subcategory.title}
            </div>
          ))}
        </div>
      )}

      {/* Lista de prompts */}
      {selectedSubcategory && (
        <div className="prompt-list">
          <h3>{selectedSubcategory.title}</h3>
          {selectedSubcategory.prompts.map((prompt, index) => (
            <div key={index} className="prompt-card">
              <h4>{prompt.title}</h4>
              <p>{prompt.prompt}</p>
              <button onClick={() => handleCopy(prompt.prompt)}>
                Copiar Prompt
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Bloque informativo 1 */}
      <div className="info-box">
        <h2>📌 Consejos para usar los prompts</h2>
        <ul>
          <li>
            Cambia siempre la información entre [corchetes] por datos específicos.
          </li>
          <li>Usa una claridad alta en tus instrucciones.</li>
          <li>Combina prompts según tus necesidades específicas.</li>
          <li>Personaliza el tono según tu estilo de comunicación.</li>
        </ul>
      </div>

      {/* Bloque informativo 2 */}
      <div className="info-box">
        <h2>ℹ️ Sobre esta demo</h2>
        <p>
          Esta es una versión de prueba de la herramienta <b>Contador 4.0</b>.
          Aquí puedes explorar categorías y subcategorías con ejemplos de prompts
          especializados para el trabajo contable y financiero.
        </p>
      </div>
    </div>
  );
}

export default App;
