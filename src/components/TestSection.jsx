
// src/components/TestSection.jsx
import React from "react";

export default function TestSection() {
  return (
    <div>
      <h2>🧪 Sección de Pruebas</h2>
      <p>
        Aquí puedes experimentar con una nueva estructura de categorías y
        prompts sin afectar el MVP actual.
      </p>
    </div>
  );
}


export default function TestSection() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const handleBack = () => {
    if (selectedSubcategory) setSelectedSubcategory(null);
    else if (selectedCategory) setSelectedCategory(null);
  };

  const handleCopy = (prompt) => {
    navigator.clipboard.writeText(prompt);
    alert("✅ Prompt copiado al portapapeles");
  };

  return (
    <div className="test-section">
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        🧪 Sección de Pruebas (No afecta el MVP)
      </h2>

      {!selectedCategory && (
        <div className="category-list">
          {promptsTest.map((cat, i) => (
            <button
              key={i}
              className="category-button"
              onClick={() => setSelectedCategory(cat)}
            >
              <span style={{ marginRight: "10px" }}>{cat.icon}</span>
              {cat.title}
            </button>
          ))}
        </div>
      )}

      {selectedCategory && !selectedSubcategory && (
        <div className="subcategoria-list">
          <button className="back-button" onClick={handleBack}>
            ⬅ Volver
          </button>
          {selectedCategory.subcategories.map((sub, i) => (
            <div
              key={i}
              className="subcategoria-card"
              onClick={() => setSelectedSubcategory(sub)}
            >
              {sub.title}
            </div>
          ))}
        </div>
      )}

      {selectedSubcategory && (
        <div className="prompt-list">
          <button className="back-button" onClick={handleBack}>
            ⬅ Volver
          </button>
          {selectedSubcategory.prompts.map((p, i) => (
            <div key={i} className="prompt-card">
              <h4>{p.title}</h4>
              <p>{p.prompt}</p>
              <button onClick={() => handleCopy(p.prompt)}>Copiar Prompt</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

