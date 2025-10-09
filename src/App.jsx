// src/App.jsx
import React, { useState } from "react";
import promptsData from "./promptsData"; // ← aquí siguen tus prompts originales
import localPrompts from "./promptsExpress"; // ← prompts integrados para el asistente
import "./styles.css";

function App() {
  // ===== ESTADOS =====
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Asistente
  const [assistantCategory, setAssistantCategory] = useState("");
  const [assistantTask, setAssistantTask] = useState("");
  const [assistantDetails, setAssistantDetails] = useState("");
  const [assistantOutput, setAssistantOutput] = useState("");

  // ===== FUNCIONES BÁSICAS =====
  const handleBack = () => {
    if (selectedSubcategory) setSelectedSubcategory(null);
    else if (selectedCategory) setSelectedCategory(null);
    else if (searchResults.length > 0) {
      setSearchResults([]);
      setSearchTerm("");
    }
  };

  const handleCopy = (prompt) => {
    navigator.clipboard.writeText(prompt);
    alert("✅ Prompt copiado al portapapeles");
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    if (term === "") {
      setSearchResults([]);
      return;
    }

    const results = [];
    promptsData.forEach((category) => {
      category.subcategories.forEach((sub) => {
        sub.prompts.forEach((p) => {
          if (
            p.title.toLowerCase().includes(term) ||
            p.prompt.toLowerCase().includes(term)
          ) {
            results.push(p);
          }
        });
      });
    });

    setSearchResults(results);
  };

  // ===== ASISTENTE =====
  const handleAssistantGenerate = () => {
    if (!assistantCategory || !assistantTask) {
      setAssistantOutput("⚠️ Selecciona categoría y tarea primero.");
      return;
    }

    const template =
      localPrompts[assistantCategory] &&
      localPrompts[assistantCategory][assistantTask];

    if (!template) {
      setAssistantOutput("❌ No se encontró la plantilla seleccionada.");
      return;
    }

    const finalPrompt = template.replace(
      /\{\{\s*details\s*\}\}/gi,
      assistantDetails || "[sin detalles]"
    );

    setAssistantOutput(`📌 Prompt generado:\n\n${finalPrompt}`);
  };

  return (
    <div className="app-container">
      {/* ENCABEZADO */}
      <header className="header">
        <div>
          <h1>Contador 4.0</h1>
          <p className="subtitle">Sistema de Transformación con IA para Contadores</p>
        </div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/4712/4712100.png"
          alt="Asistente"
          className="assistant-avatar"
          style={{ width: "120px", height: "auto" }}
        />
      </header>

      {/* BUSCADOR */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="🔍 Buscar prompts..."
          value={searchTerm}
          onChange={handleSearch}
        />
        {searchResults.length > 0 && (
          <button className="back-button" onClick={handleBack}>
            Volver
          </button>
        )}
      </div>

      {/* RESULTADOS DE BÚSQUEDA */}
      {searchResults.length > 0 && (
        <div className="prompt-list">
          {searchResults.map((p, i) => (
            <div key={i} className="prompt-card">
              <h4>{p.title}</h4>
              <p>{p.prompt}</p>
              <button onClick={() => handleCopy(p.prompt)}>Copiar Prompt</button>
            </div>
          ))}
        </div>
      )}

      {/* CATEGORÍAS */}
      {!selectedCategory && !selectedSubcategory && searchResults.length === 0 && (
        <div className="category-list">
          {promptsData.map((category, index) => (
            <button
              key={index}
              className="category-button"
              onClick={() => setSelectedCategory(category)}
            >
              <span style={{ fontSize: "24px", marginRight: "10px" }}>
                {category.icon}
              </span>
              {category.title}
            </button>
          ))}
        </div>
      )}

      {/* SUBCATEGORÍAS */}
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

      {/* PROMPTS */}
      {selectedSubcategory && (
        <div className="prompt-list">
          <button className="back-button" onClick={handleBack}>
            ⬅ Volver
          </button>
          {selectedSubcategory.prompts.map((prompt, i) => (
            <div key={i} className="prompt-card">
              <h4>{prompt.title}</h4>
              <p>{prompt.prompt}</p>
              <button onClick={() => handleCopy(prompt.prompt)}>
                Copiar Prompt
              </button>
            </div>
          ))}
        </div>
      )}

      {/* ===== ASISTENTE VIRTUAL ===== */}
      <div className="assistant-box">
        <h3>🤖 Asistente Virtual Contador 4.0</h3>
        <label>Categoría</label>
        <select
          value={assistantCategory}
          onChange={(e) => setAssistantCategory(e.target.value)}
        >
          <option value="">-- Selecciona --</option>
          {Object.keys(localPrompts).map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <label>Tarea</label>
        <select
          value={assistantTask}
          onChange={(e) => setAssistantTask(e.target.value)}
          disabled={!assistantCategory}
        >
          <option value="">-- Selecciona --</option>
          {assistantCategory &&
            Object.keys(localPrompts[assistantCategory]).map((task) => (
              <option key={task} value={task}>
                {task}
              </option>
            ))}
        </select>

        <label>Detalles / Contexto</label>
        <textarea
          value={assistantDetails}
          onChange={(e) => setAssistantDetails(e.target.value)}
          placeholder="Ej: Empresa de restaurantes; ventas 200M (2024); problema: liquidez en mayo"
        />

        <button onClick={handleAssistantGenerate}>Generar respuesta</button>

        {assistantOutput && (
          <div className="assistant-output">
            <pre>{assistantOutput}</pre>
          </div>
        )}
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <p>
          <b>Contador 4.0 Express</b> — propiedad intelectual de{" "}
          <a
            href="https://jairoamaya.co"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#E66E33", fontWeight: "bold", textDecoration: "none" }}
          >
            Jairo Amaya - Full Stack Marketer
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
