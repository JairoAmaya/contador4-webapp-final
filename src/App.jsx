import React, { useState } from "react";
import promptsData from "./promptsData";
import CategoryDetail from "./CategoryDetail";
import "./App.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory(null);
  };

  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategory(subcategory);
  };

  const handleBack = () => {
    if (selectedSubcategory) {
      setSelectedSubcategory(null);
    } else {
      setSelectedCategory(null);
    }
  };

  return (
    <div className="App">
      <h1>📊 Contador 4.0 – Demo</h1>
      <p>Explora categorías, subcategorías y prompts especializados en contabilidad y negocio.</p>

      {!selectedCategory && (
        <div>
          {promptsData.map((category) => (
            <div
              key={category.id}
              className="card"
              onClick={() => handleCategoryClick(category)}
            >
              <h2>{category.icon} {category.title}</h2>
            </div>
          ))}

          <div className="infoBox">
            <h3>💡 Consejos para usar los prompts</h3>
            <ul>
              <li>Cambia siempre la información entre [corchetes] por datos específicos.</li>
              <li>Usa <b>www.claude.ai</b> para respuestas más profundas.</li>
              <li>Combina prompts según tus necesidades específicas.</li>
              <li>Personaliza el tono según tu estilo de comunicación.</li>
            </ul>

            <h3>ℹ️ Sobre esta demo</h3>
            <p>
              Esta es una versión de prueba de la herramienta <b>Contador 4.0</b>. 
              Aquí puedes explorar categorías y subcategorías con ejemplos de prompts extraídos del e-book.
            </p>
          </div>
        </div>
      )}

      {selectedCategory && !selectedSubcategory && (
        <div>
          <button onClick={handleBack}>← Volver</button>
          <h2>{selectedCategory.icon} {selectedCategory.title}</h2>
          {selectedCategory.subcategories.map((subcategory) => (
            <div
              key={subcategory.id}
              className="card"
              onClick={() => handleSubcategoryClick(subcategory)}
            >
              <h3>{subcategory.icon} {subcategory.title}</h3>
            </div>
          ))}
        </div>
      )}

      {selectedCategory && selectedSubcategory && (
        <CategoryDetail
          category={selectedCategory}
          subcategory={selectedSubcategory}
          onBack={handleBack}
        />
      )}
    </div>
  );
}

export default App;

