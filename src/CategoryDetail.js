import React from "react";
import PromptList from "./PromptList";

function CategoryDetail({ category, selectedSubcategory, setSelectedSubcategory }) {
  if (!selectedSubcategory) {
    return (
      <div>
        <h2>{category.icon} {category.name}</h2>
        <div className="subcategories">
          {category.subcategories.map((sub) => (
            <div
              key={sub.id}
              className="card"
              onClick={() => setSelectedSubcategory(sub)}
            >
              <h3>{sub.name}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2>
        {category.icon} {category.name} / {selectedSubcategory.name}
      </h2>
      <PromptList prompts={selectedSubcategory.prompts} />
    </div>
  );
}

export default CategoryDetail;
