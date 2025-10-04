// src/CategoryDetail.js
import React from "react";
import PromptList from "./PromptList";

const CategoryDetail = ({ category, onBack }) => {
  if (!category) return null;

  return (
    <div className="category-detail">
      <button className="back-button" onClick={onBack}>
        ← Volver
      </button>
      <h2>{category.name}</h2>

      {category.subcategories.map((sub, idx) => (
        <div key={idx} className="subcategory-block">
          <h3>{sub.name}</h3>
          <PromptList prompts={sub.prompts} />
        </div>
      ))}
    </div>
  );
};

export default CategoryDetail;

