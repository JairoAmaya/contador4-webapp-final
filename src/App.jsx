// src/App.jsx
import React, { useState } from "react";
import promptsData from "./promptsData";
import "./styles.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [fade, setFade] = useState("fade-in");

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("✅ Prompt copiado al portapapeles");
  };

  const goBack = () => {
    setFade("fade-out");
    setTimeout(() => {
      if (selectedSubcategory) {
        setSelectedSubcategory(null);
      } else {
        setSelectedCategory(null);
      }
      setFade("fade-in");
    }, 200);
  };

  const handleCategorySelect = (category) => {
    setFade("fade-out");
    setTimeout(() => {
      setSelectedCategory(category);
      setFade("fade-in");
    }, 200);
  };

  const handleSubcategorySelect = (sub) => {
    setFade("fade-out");
    setTimeout(() => {
      setSelectedSubcategory(sub);
      setFade("fade-in");
    }, 200);
  };

  return (
    <div className="app-container">
      <h1>⚙️ Contador 4.0</h1>
      <p className="subtitle">
        Transforma tu gestión contable con inteligencia artificial
      </p>

      {/* === Navegación (breadcrumb) === */}
      {(selectedCategory || selectedSubcategory) && (
        <div className="breadcrumb">
          <button onClick={goBack}>⬅️ Volver</button>
          <span>
            {selectedCategory && selectedCategory.title}
            {selectedSubcategory && ` / ${selectedSubcategory.title}`}
          </span>
        </div>
      )}

      {/* === Lista de Categorías === */}
      {!selectedCategory && (
        <div className={`category-list ${fade}`}>
          {promptsData.map((category, index) => (
            <button
              key={index}
              className="category-button"
              onClick={() => handleCategorySelect(category)}
            >
              <span style={{ fontSize: "1.5rem", marginRight: "10px" }}>
                {category.icon}
              </span>
              {category.title}
            </button>
          ))}
        </div>
      )}

      {/* === Lista de Subcategorías === */}
      {selectedCategory && !selectedSubcategory && (
        <div className={`subcategoria-list ${fade}`}>
          {selectedCategory.subcategories.map((sub, index) => (
            <div
              key={index}
              className="subcategoria-card"
              onClick={() => handleSubcategorySelect(sub)}
            >
              {sub.title}
            </div>
          ))}
        </div>
      )}

      {/* === Lista de Prompts === */}
      {selectedSubcategory && (
        <div className={`prompt-list ${fade}`}>
          {selectedSubcategory.prompts.map((item, index) => (
            <div key={index} className="prompt-card">
              <h4>{item.title}</h4>
              <p>{item.prompt}</p>
              <button onClick={() => handleCopy(item.prompt)}>
                📋 Copiar Prompt
              </button>
            </div>
          ))}
        </div>
      )}

      {/* === Cuadros informativos === */}
      {!selectedCategory && (
        <>
          <div className="info-box fade-in">
            <div className="info-box-header">
              <div className="info-icon">💡</div>
              <h2>Consejos para usar los prompts</h2>
            </div>
            <p>
              Cambia siempre la información entre <strong>[corchetes]</strong>{" "}
              por tus datos reales. Usa claridad en tus instrucciones, combina
              prompts según tus necesidades y ajusta el tono según tu estilo
              profesional.
            </p>
          </div>

          <div className="info-box fade-in">
            <div className="info-box-header">
              <div className="info-icon">ℹ️</div>
              <h2>Sobre esta demo</h2>
            </div>
            <p>
              Esta es una versión de prueba de la herramienta{" "}
              <strong>Contador 4.0</strong>. Aquí puedes explorar categorías,
              subcategorías y ejemplos de prompts reales del e-book original.
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
