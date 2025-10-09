// src/App.jsx
import React, { useState } from "react";
import promptsExpress from "./promptsExpress";
import "./styles.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTask, setSelectedTask] = useState("");
  const [details, setDetails] = useState("");
  const [output, setOutput] = useState("");

  // Para la parte inicial de categorías y búsqueda
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleBack = () => {
    if (selectedCategory) {
      setSelectedCategory(null);
      setSelectedTask("");
      setDetails("");
      setOutput("");
    } else if (searchResults.length > 0) {
      setSearchResults([]);
      setSearchTerm("");
    }
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    if (term === "") {
      setSearchResults([]);
      return;
    }

    const results = [];
    Object.entries(promptsExpress).forEach(([catKey, cat]) => {
      Object.entries(cat.tasks).forEach(([taskKey, task]) => {
        if (
          task.label.toLowerCase().includes(term) ||
          task.prompt.toLowerCase().includes(term)
        ) {
          results.push({ ...task, category: cat.label });
        }
      });
    });

    setSearchResults(results);
  };

  const handleGenerate = () => {
    if (!selectedCategory || !selectedTask) {
      setOutput("⚠️ Selecciona categoría y tarea primero.");
      return;
    }
    const prompt = promptsExpress[selectedCategory].tasks[selectedTask].prompt;
    const finalPrompt = prompt.replace(/\{\{\s*details\s*\}\}/gi, details || "[sin detalles]");
    setOutput(`📌 Prompt generado:\n\n${finalPrompt}`);
  };

  return (
    <div className="app-container">
      {/* === ENCABEZADO === */}
      <header className="header">
        <div>
          <h1>Contador 4.0</h1>
          <p className="subtitle">
            Sistema de Transformación con IA para Contadores
          </p>
        </div>
      </header>

      {/* === BUSCADOR === */}
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

      {/* === RESULTADOS DE BÚSQUEDA === */}
      {searchResults.length > 0 && (
        <div className="prompt-list">
          {searchResults.map((p, i) => (
            <div key={i} className="prompt-card">
              <h4>{p.label}</h4>
              <p><strong>Categoría:</strong> {p.category}</p>
              <p>{p.prompt}</p>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(p.prompt);
                  alert("✅ Prompt copiado al portapapeles");
                }}
              >
                Copiar Prompt
              </button>
            </div>
          ))}
        </div>
      )}

      {/* === FORMULARIO DEL ASISTENTE === */}
      {!selectedCategory && searchResults.length === 0 && (
        <div className="assistant-widget">
          <h2>🤖 Asistente Virtual Contador 4.0</h2>

          <label>Categoría</label>
          <select
            value={selectedCategory || ""}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Selecciona una categoría</option>
            {Object.entries(promptsExpress).map(([key, cat]) => (
              <option key={key} value={key}>
                {cat.label}
              </option>
            ))}
          </select>

          <label>Tarea</label>
          <select
            value={selectedTask}
            onChange={(e) => setSelectedTask(e.target.value)}
            disabled={!selectedCategory}
          >
            <option value="">Selecciona una tarea</option>
            {selectedCategory &&
              Object.entries(promptsExpress[selectedCategory].tasks).map(
                ([key, task]) => (
                  <option key={key} value={key}>
                    {task.label}
                  </option>
                )
              )}
          </select>

          <label>Detalles / Contexto</label>
          <textarea
            placeholder="Ej: Empresa de restaurantes; ventas 200M (2024); problema: liquidez en mayo"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />

          <button onClick={handleGenerate}>Generar respuesta</button>

          <div className="assistant-output">
            {output && <pre>{output}</pre>}
          </div>
        </div>
      )}

      {/* === FOOTER === */}
      <footer className="footer">
        <p>
          <b>Contador 4.0 Express</b> es propiedad intelectual de{" "}
          <a
            href="https://jairoamaya.co"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#E66E33", fontWeight: "bold", textDecoration: "none" }}
          >
            Jairo Amaya - Full Stack Marketer
          </a>
          . Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}

export default App;
