import React from "react";
import PromptList from "./PromptList";

const CategoryDetail = ({ category, subcategory, onBack }) => {
  return (
    <div>
      <button onClick={onBack} style={{ marginBottom: "1rem" }}>
        ← Volver
      </button>
      <h2>{category.icon} {category.title} / {subcategory.title}</h2>
      <PromptList prompts={subcategory.prompts} />
    </div>
  );
};

export default CategoryDetail;
