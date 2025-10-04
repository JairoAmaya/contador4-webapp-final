import React, { useState } from "react";
import promptsData from "./promptsData";
import "./styles.css";

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

      {/* Si hay categoría seleccionada */}
      {selectedCategory ? (
        selectedSubcategory ? (
          <div>
            <h2>
              {selectedCategory.icon} {selectedCategory.title} /{" "}
              {selectedSubcategory.title}
            </h2>
            {selectedSubcategory.prompts.map((prompt, index) => (
              <div key={index} className="prompt-card">
                <h3>{prompt.title}</h3>
                <p>{prompt.prompt}</p>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <h2>
              {selectedCategory.icon} {selectedCategory.title}
            </h2>
            {selectedCategory.subcategories.map((subcategory, index) => (
              <div
                key={index}
                className="subcategory-card"
                onClick={() => setSelectedSubcategory(subcategory)}
              >
                {subcategory.title}
              </div>
            ))}
          </div>
        )
      ) : (
        <div>
          {promptsData.map((category, index) => (
            <div
              key={index}
              className="category-card"
              onClick={() => setSelectedCategory(category)}
            >
              {category.icon} {category.title}
            </div>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="footer">
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

        <h3>ℹ️ Sobre esta demo</h3>
        <p>
          Esta es una versión de prueba de la herramienta <b>Contador 4.0</b>.
          Aquí puedes explorar categorías y subcategorías con ejemplos de
          prompts extraídos del e-book.
        </p>
      </div>
    </div>
  );
}

export default App;
