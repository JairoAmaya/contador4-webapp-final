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
      <p>
        Explora categorías, subcategorías y prompts especializados en
        contabilidad y negocio.
      </p>

      {/* Botón volver */}
      {(selectedCategory || selectedSubcategory) && (
        <button onClick={handleBack}>← Volver</button>
      )}

      {/* Vista de categorías */}
      {!selectedCategory && (
        <div className="categories">
          {promptsData.map((category) => (
            <div
              key={category.id}
              className="card"
              onClick={() => setSelectedCategory(category)}
            >
              <h2>{category.icon} {category.name}</h2>
            </div>
          ))}
        </div>
      )}

      {/* Vista de subcategorías y prompts */}
      {selectedCategory && (
        <CategoryDetail
          category={selectedCategory}
          selectedSubcategory={selectedSubcategory}
          setSelectedSubcategory={setSelectedSubcategory}
        />
      )}

      {/* Consejos y demo */}
      {!selectedCategory && (
        <div className="info-sections">
          <div className="tips">
            <h3>💡 Consejos para usar los prompts</h3>
            <ul>
              <li>
                Cambia siempre la información entre [corchetes] por datos
                específicos.
              </li>
              <li>
                Usa <strong>www.claude.ai</strong> para respuestas más profundas.
              </li>
              <li>Combina prompts según tus necesidades específicas.</li>
              <li>
                Personaliza el tono según tu estilo de comunicación.
              </li>
            </ul>
          </div>

          <div className="about">
            <h3>ℹ️ Sobre esta demo</h3>
            <p>
              Esta es una versión de prueba de la herramienta{" "}
              <strong>Contador 4.0</strong>. Aquí puedes explorar categorías y
              subcategorías con ejemplos de prompts extraídos del e-book.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
