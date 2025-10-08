import React, { useState, useEffect } from "react";
import promptsData from "./promptsData";
import "./styles.css";

// === Componente Asistente Virtual Contador 4.0 ===
const AssistantWidget = () => {
  const JSON_URL =
    "https://jairoamaya.co/wp-content/uploads/2025/09/prompts_contador4.json";
  const API_URL = ""; // Si tienes endpoint, pon la URL. Si no, se queda en modo prompt.

  const [prompts, setPrompts] = useState({});
  const [cat, setCat] = useState("");
  const [task, setTask] = useState("");
  const [details, setDetails] = useState("");
  const [output, setOutput] = useState("");

  const catLabels = {
    analysis: "📊 Análisis Financiero",
    communication: "💬 Comunicación Empresarial",
    proposals: "💼 Propuestas y Cotizaciones",
    dashboards: "📈 Reportes y Dashboards",
    compliance: "🧾 Cumplimiento Fiscal",
    audit: "🔍 Auditoría y Control",
    international: "🌍 Clientes Internacionales",
  };

  const taskLabels = {
    fin_diag: "Diagnóstico Financiero",
    cash: "Proyección de Flujo 6 meses",
    ratios: "Análisis de Ratios",
    break_even: "Punto de Equilibrio",
    scenario: "Análisis de Escenarios",
    client_letter: "Carta al Cliente",
    board_report: "Reporte para Junta",
    proposal_full: "Propuesta Integral",
    pricing: "Cotización por Paquetes",
    kpi_dashboard: "Dashboard Ejecutivo",
    fiscal_calendar: "Calendario Fiscal",
    checklist: "Checklist de Cumplimiento",
    audit_program: "Programa de Auditoría",
    multicurrency: "Reporte Multi-moneda",
  };

  useEffect(() => {
    async function fetchPrompts() {
      try {
        const resp = await fetch(JSON_URL, { cache: "no-cache" });
        if (!resp.ok) throw new Error("No se pudo cargar el JSON");
        const data = await resp.json();
        setPrompts(data);
        setCat(Object.keys(data)[0] || "");
      } catch (err) {
        console.error(err);
        setOutput("❌ Error cargando prompts.");
      }
    }
    fetchPrompts();
  }, []);

  const handleGenerate = async () => {
    if (!cat || !task) {
      setOutput("⚠️ Selecciona categoría y tarea primero.");
      return;
    }

    const template = prompts[cat]?.[task];
    if (!template) {
      setOutput("⚠️ No se encontró la plantilla seleccionada.");
      return;
    }

    const finalPrompt = template.replace(/\{\{\s*details\s*\}\}/gi, details || "[sin detalles]");

    if (!API_URL) {
      setOutput(`📌 Prompt generado:\n\n${finalPrompt}`);
      return;
    }

    try {
      setOutput("⏳ Enviando a la API...");
      const resp = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: finalPrompt }),
      });
      const data = await resp.json();
      const answer =
        data.answer ||
        data.output?.[0]?.content?.[0]?.text ||
        data.choices?.[0]?.message?.content ||
        JSON.stringify(data);
      setOutput(`📌 Prompt:\n${finalPrompt}\n\n🤖 Respuesta IA:\n${answer}`);
    } catch (err) {
      setOutput("❌ Error al conectar con la API: " + (err.message || err));
    }
  };

  return (
    <div
      style={{
        maxWidth: "720px",
        margin: "30px auto",
        padding: "20px",
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        fontFamily: "Inter, Arial, Helvetica, sans-serif",
        background: "#fff",
      }}
    >
      <h3 style={{ textAlign: "center", marginBottom: "12px" }}>
        🤖 Asistente Virtual Contador 4.0
      </h3>

      <label style={{ display: "block", fontWeight: 600, marginBottom: "6px" }}>
        Categoría
      </label>
      <select
        value={cat}
        onChange={(e) => {
          setCat(e.target.value);
          setTask("");
        }}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #d1d5db",
          marginBottom: "12px",
        }}
      >
        {Object.keys(prompts).map((c) => (
          <option key={c} value={c}>
            {catLabels[c] || c}
          </option>
        ))}
      </select>

      <label style={{ display: "block", fontWeight: 600, marginBottom: "6px" }}>
        Tarea
      </label>
      <select
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #d1d5db",
          marginBottom: "12px",
        }}
      >
        {cat &&
          Object.keys(prompts[cat] || {}).map((t) => (
            <option key={t} value={t}>
              {taskLabels[t] || t.replace(/_/g, " ")}
            </option>
          ))}
      </select>

      <label style={{ display: "block", fontWeight: 600, marginBottom: "6px" }}>
        Detalles / Contexto
      </label>
      <textarea
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        rows={5}
        placeholder="Ej: Empresa de restaurantes; ventas 200M (2024); problema: liquidez en mayo"
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #d1d5db",
          marginBottom: "12px",
        }}
      />

      <button
        onClick={handleGenerate}
        style={{
          width: "100%",
          padding: "12px",
          background: "#111827",
          color: "#fff",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          fontWeight: 700,
          marginBottom: "12px",
        }}
      >
        Generar respuesta
      </button>

      <div
        style={{
          minHeight: "120px",
          padding: "14px",
          borderRadius: "10px",
          background: "#f9fafb",
          border: "1px solid #e6eef5",
          whiteSpace: "pre-wrap",
        }}
      >
        {output}
      </div>
    </div>
  );
};

// === Componente Principal ===
function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

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

      {/* === NUEVO ASISTENTE VIRTUAL === */}
      <AssistantWidget />

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
