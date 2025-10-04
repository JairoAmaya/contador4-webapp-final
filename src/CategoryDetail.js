// src/CategoryDetail.js
import React, { useState } from "react";
import PromptList from "./PromptList";

function CategoryDetail({ category, onBack }) {
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  return (
    <div className="category-detail">
      <button className="back-button" onClick={onBack}>← Volver</button>

      {selectedSubcategory ? (
        <div>
          <h2>{selectedSubcategory.name}</h2>
          <PromptList prompts={selectedSubcategory.prompts} />
          <button className="back-button" onClick={() => setSelectedSubcategory(null)}>
            ← Volver a {category.name}
          </button>
        </div>
      ) : (
        <div>
          <h2>{category.name}</h2>
          <div className="subcategory-list">
            {category.subcategories.map((sub, idx) => (
              <div
                key={idx}
                className="subcategory-card"
                onClick={() => setSelectedSubcategory(sub)}
              >
                {sub.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CategoryDetail;
