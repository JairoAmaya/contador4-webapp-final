import React, { useState } from "react";
import promptsData from "./promptsData";
import "./styles.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  // Cuando selecciono categoría
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory(null);
  };

  // Cuando selecciono subcategoría
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

  return (
    <div className="app-container">
      <h1>📚 Contador 4.0 – Demo</h1>
      <p>Explora categorías, subcategorías y prompts especializados en contabilidad y negocio.</p>

      {/* Botón Volver */}
      {(selectedCategory || selectedSubcategory) && (
        <button onClick={handleBack} style={{ marginBottom: "1rem" }}>
          ← Volver
        </button>
      )}

      {/* Lista de categorías */}
      {!selectedCategory && (
        <div className="list-container">
          {promptsData.map((category, index) => (
            <div
              key={index}
              className="list-item"
              onClick={() => handleCategoryClick(category)}
            >
              {category.icon} {category.title}
            </div>
          ))}
        </div>
      )}

      {/* Lista de subcategorías */}
      {selectedCategory && !selectedSubcategory && (
        <div className="list-container">
          {selectedCategory.subcategories.map((subcategory, index) => (
            <div
              key={index}
              className="list-item"
              onClick={() => handleSubcategoryClick(subcategory)}
            >
              {subcategory.title}
            </div>
          ))}
        </div>
      )}

      {/* Lista de prompts */}
      {selectedSubcategory && (
        <div className="list-container">
          {selectedSubcategory.prompts.map((prompt, index) => (
            <div key={index} className="prompt-card">
              <h3>{prompt.title}</h3>
              <p>{prompt.prompt}</p>
            </div>
          ))}
        </div>
      )}

      {/* Consejos */}
      <div className="info-box">
        <h3>📌 Consejos para usar los prompts</h3>
        <ul>
          <li>Cambia siempre la información entre [corchetes] por datos específicos.</li>
          <li>Usa una claridad alta en tus instrucciones.</li>
          <li>Combina prompts según tus necesidades específicas.</li>
          <li>Personaliza el tono según tu estilo de comunicación.</li>
        </ul>
      </div>

      {/* Información */}
      <div className="info-box">
        <h3>ℹ️ Sobre esta demo</h3>
        <p>
          Esta es una versión de prueba de la herramienta <b>Contador 4.0</b>.
          Aquí puedes explorar categorías y subcategorías con ejemplos de prompts extraídos de e-books.
        </p>
      </div>
    </div>
  );
}

export default App;
