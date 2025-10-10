// src/components/TestSection.jsx
import React, { useState } from "react";
import "./TestSection.css"; // 👉 estilos independientes para esta sección

export default function TestSection() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);

  // 🧭 Estructura base (ejemplo tomado del HTML)
  const testPrompts = [
    {
      title: "📊 Análisis Financiero Estratégico",
      subcategories: [
        {
          title: "Evaluación Financiera",
          prompts: [
            "Prompt largo 1 - Análisis de Rentabilidad...",
            "Prompt largo 2 - Diagnóstico Financiero...",
            "Prompt largo 3 - Informe de Indicadores..."
          ]
        },
        {
          title: "Proyecciones y Escenarios",
          prompts: [
            "Prompt largo 1 - Proyección Financiera...",
            "Prompt largo 2 - Escenario Base y Pesimista...",
            "Prompt largo 3 - Sensibilidad de Ingresos..."
          ]
        }
      ]
    },
    {
      title: "💬 Comunicación Empresarial",
      subcategories: [
        {
          title: "Informes Ejecutivos",
          prompts: [
            "Prompt largo 1 - Informe Financiero Trimestral...",
            "Prompt largo 2 - Reporte de Avances...",
            "Prompt largo 3 - Síntesis para Consejo..."
          ]
        },
        {
          title: "Comunicación con Clientes",
          prompts: [
            "Prompt largo 1 - Boletín Financiero...",
            "Prompt largo 2 - Carta a Inversionistas...",
            "Prompt largo 3 - Resumen Comercial..."
          ]
        }
      ]
    },
    // 📌 Aquí puedes ir agregando las demás categorías igual que en tu HTML original
  ];

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("✅ Prompt copiado");
  };

  return (
    <div className="test-section">
      <h1>🧪 Sección de Pruebas</h1>
      <p className="intro">
        Aquí puedes experimentar con una nueva estructura de categorías y prompts sin afectar el MVP actual.
      </p>

      {/* === Categorías === */}
      {!activeCategory && (
        <div className="category-list">
          {testPrompts.map((cat, i) => (
            <button
              key={i}
              className="category-btn"
              onClick={() => setActiveCategory(cat)}
            >
              {cat.title}
            </button>
          ))}
        </div>
      )}

      {/* === Subcategorías === */}
      {activeCategory && !activeSubcategory && (
        <div className="subcategory-list">
          <button
            className="back-button"
            onClick={() => setActiveCategory(null)}
          >
            ⬅ Volver
          </button>
          {activeCategory.subcategories.map((sub, i) => (
            <div
              key={i}
              className="subcategory-card"
              onClick={() => setActiveSubcategory(sub)}
            >
              {sub.title}
            </div>
          ))}
        </div>
      )}

      {/* === Prompts === */}
      {activeSubcategory && (
        <div className="prompt-list">
          <button
            className="back-button"
            onClick={() => setActiveSubcategory(null)}
          >
            ⬅ Volver
          </button>
          {activeSubcategory.prompts.map((p, i) => (
            <div key={i} className="prompt-card">
              <p>{p}</p>
              <button onClick={() => handleCopy(p)}>Copiar</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
