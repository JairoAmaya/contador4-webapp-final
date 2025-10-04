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

      {/* Botón Volver */}
      {(selectedCategory || selectedSubcategory) && (
        <button onClick={handleBack}>⬅ Volver</button>
      )}

      {/* Si hay categoría seleccionada */}
      {selectedCategory ? (
        selectedSubcategory ? (
          <div>
            <h2>{selectedSubcategory.name}</h2>
            <ul>
              {selectedSubcategory.prompts.map((prompt, index) => (
                <li key={index}>
                  <strong>{prompt.title}</strong>
                  <p>{prompt.prompt}</p>
                  <p>
                    <em>Versión Express:</em> {prompt.express}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>
            <h2>{selectedCategory.name}</h2>
            <ul>
              {selectedCategory.subcategories.map((subcategory, index) => (
                <li
                  key={index}
                  onClick={() => setSelectedSubcategory(subcategory)}
                >
                  {subcategory.name}
                </li>
              ))}
            </ul>
          </div>
        )
      ) : (
        // Mostrar categorías
        <ul>
          {promptsData.map((category, index) => (
            <li key={index} onClick={() => setSelectedCategory(category)}>
              {category.icon} {category.name}
            </li>
          ))}
        </ul>
      )}

      {/* Consejos */}
      <div className="info-box yellow">
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
          <li>Personaliza el tono según tu estilo de comunicación.</li>
        </ul>
      </div>

      {/* Sobre esta demo */}
      <div className="info-box blue">
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
