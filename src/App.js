import React, { useState } from "react";
import promptsData from "./promptsData";
import CategoryDetail from "./CategoryDetail";
import "./App.css";

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

  return (
    <div className="App">
      <h1>📊 Contador 4.0 – Demo</h1>
      <p>Explora categorías, subcategorías y prompts especializados en contabilidad y negocio.</p>

      {/* Botón volver */}
      {(selectedCategory || selectedSubcategory) && (
        <button onClick={handleBack}>← Volver</button>
      )}

      {/* Si hay categoría seleccionada */}
      {selectedCategory ? (
        <CategoryDetail
          category={selectedCategory}
          setSelectedSubcategory={setSelectedSubcategory}
          selectedSubcategory={selectedSubcategory}
        />
      ) : (
        <>
          {/* Listado de categorías */}
          {promptsData.map((cat, index) => (
            <div
              key={index}
              className="category-card"
              onClick={() => setSelectedCategory(cat)}
            >
              <h2>
                {cat.icon} {cat.category}
              </h2>
            </div>
          ))}

          {/* Consejos */}
          <div className="tips-box">
            <h3>💡 Consejos para usar los prompts</h3>
            <ul>
              <li>Cambia siempre la información entre [corchetes] por datos específicos.</li>
              <li>Usa <b>www.claude.ai</b> para respuestas más profundas.</li>
              <li>Combina prompts según tus necesidades específicas.</li>
              <li>Personaliza el tono según tu estilo de comunicación.</li>
            </ul>
          </div>

          {/* Sobre esta demo */}
          <div className="demo-box">
            <h3>ℹ️ Sobre esta demo</h3>
            <p>
              Esta es una versión de prueba de la herramienta <b>Contador 4.0</b>.
              Aquí puedes explorar categorías y subcategorías con ejemplos de prompts
              extraídos del e-book.
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
