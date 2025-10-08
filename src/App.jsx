// src/App.jsx
import React, { useState } from "react";
import promptsData from "./promptsData";
import "./styles.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [assistantMessages, setAssistantMessages] = useState([]);
  const [assistantInput, setAssistantInput] = useState("");

  const handleBack = () => {
    if (selectedSubcategory) {
      setSelectedSubcategory(null);
    } else if (selectedCategory) {
      setSelectedCategory(null);
    } else if (searchResults.length > 0) {
      setSearchResults([]);
      setSearchTerm("");
    }
  };

  const handleCopy = (prompt) => {
    navigator.clipboard.writeText(prompt);
    alert("✅ Prompt copiado al portapapeles");
  };

  // === Buscador ===
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

  // === Asistente ===
  const handleAssistantAction = (action) => {
    const message = `🤖 ¿Qué deseas hacer con "${action}"? Puedo guiarte paso a paso.`;
    setAssistantMessages((prev) => [...prev, { from: "bot", text: message }]);
  };

  const handleAssistantSend = () => {
    if (assistantInput.trim() === "") return;
    const newMessage = { from: "user", text: assistantInput };
    setAssistantMessages((prev) => [...prev, newMessage]);
    setAssistantInput("");

    // Simula respuesta base del asistente
    setTimeout(() => {
      setAssistantMessages((prev) => [
        ...prev,
        { from: "bot", text: "🤖 Gracias por tu mensaje, pronto podré ayudarte de forma más personalizada." }
      ]);
    }, 600);
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
              <h4>{p.title}</h4>
              <p>{p.prompt}</p>
              <button onClick={() => handleCopy(p.prompt)}>Copiar Prompt</button>
            </div>
          ))}
        </div>
      )}

      {/* === CATEGORÍAS === */}
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

      {/* === SUBCATEGORÍAS === */}
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

      {/* === PROMPTS === */}
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

      {/* === BLOQUES INFORMATIVOS === */}
      {!selectedCategory && searchResults.length === 0 && (
        <>
          <div className="info-box">
            <h2>💡 Tip Pro</h2>
            <p>
              Usa estos prompts para mejorar tu productividad contable y ofrecer
              servicios de consultoría de alto valor.
            </p>
          </div>
          <div className="info-box">
            <h2>🚀 Cómo aprovechar esta herramienta</h2>
            <p>
              Personaliza los prompts antes de usarlos con tus datos reales o los
              de tus clientes. ¡Así obtendrás respuestas más precisas y valiosas!
            </p>
          </div>
        </>
      )}

      {/* === PERSONAJE Y ACCIONES RÁPIDAS === */}
      <div className="quick-actions">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4712/4712100.png"
          alt="Personaje asistente"
          className="assistant-avatar"
        />
        <div className="actions-buttons">
          <button onClick={() => handleAssistantAction("Crear reporte financiero")}>
            📊 Crear reporte financiero
          </button>
          <button onClick={() => handleAssistantAction("Preparar declaración fiscal")}>
            🧾 Preparar declaración fiscal
          </button>
          <button onClick={() => handleAssistantAction("Revisar hallazgos de auditoría")}>
            🕵️ Revisar hallazgos de auditoría
          </button>
          <button onClick={() => handleAssistantAction("Explicar resultados al cliente")}>
            💬 Explicar resultados al cliente
          </button>
        </div>
      </div>

      {/* === ASISTENTE === */}
      <div className="assistant-box">
        <div className="assistant-messages">
          {assistantMessages.map((msg, i) => (
            <div
              key={i}
              className={`assistant-message ${msg.from === "user" ? "user" : "bot"}`}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <div className="assistant-input">
          <input
            type="text"
            placeholder="Escribe aquí..."
            value={assistantInput}
            onChange={(e) => setAssistantInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAssistantSend()}
          />
          <button onClick={handleAssistantSend}>Enviar</button>
        </div>
      </div>

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
