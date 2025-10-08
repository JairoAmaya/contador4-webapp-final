// src/ChatAssistant.jsx
import React, { useState } from "react";
import promptsAssistant from "./data/promptsAssistant";
import "./styles.css";

function ChatAssistant() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTask, setSelectedTask] = useState("");
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
    cash: "Proyección de Flujo de Caja",
    ratios: "Análisis de Ratios",
    break_even: "Punto de Equilibrio",
    scenario: "Análisis de Escenarios",
    client_letter: "Carta al Cliente",
    board_report: "Reporte para Junta",
    email_reminder: "Correo Recordatorio",
    policy_summary: "Resumen de Política",
    negotiation: "Negociación con Cliente",
    proposal_full: "Propuesta Integral",
    pricing: "Cotización por Paquetes",
    service_scope: "Definición de Alcance",
    contract: "Borrador de Contrato",
    differentiation: "Ventajas Competitivas",
    kpi_dashboard: "Dashboard Ejecutivo",
    early_warnings: "Alertas Tempranas",
    tax_tracker: "Dashboard Fiscal",
    budget_control: "Control Presupuestal",
    consolidation: "Consolidación Financiera",
    fiscal_calendar: "Calendario Fiscal",
    checklist: "Checklist Normativo",
    risk_map: "Mapa de Riesgos",
    updates: "Actualizaciones Normativas",
    sanctions: "Sanciones Comunes",
    audit_program: "Programa de Auditoría",
    controls: "Control Interno",
    fraud_signs: "Indicadores de Fraude",
    evidence: "Procedimientos de Evidencia",
    report: "Informe de Auditoría",
    multicurrency: "Reporte Multi-moneda",
    ifrs: "Aplicación NIIF/IFRS",
    tax_compare: "Comparación Fiscal Internacional",
    transfer_pricing: "Precios de Transferencia",
    crossborder: "Operaciones Transfronterizas",
  };

  const handleGenerate = () => {
    if (!selectedCategory || !selectedTask) {
      setOutput("⚠️ Selecciona categoría y tarea primero.");
      return;
    }

    const template = promptsAssistant[selectedCategory]?.[selectedTask];
    if (!template) {
      setOutput("❌ No se encontró la plantilla seleccionada.");
      return;
    }

    const finalPrompt = template.replace(/{{\s*details\s*}}/gi, details || "[sin detalles]");
    setOutput(`📌 Prompt generado:\n\n${finalPrompt}`);
  };

  return (
    <div className="assistant-container">
      <h3 className="assistant-title">🤖 Asistente Virtual Contador 4.0</h3>

      <label className="assistant-label">Categoría</label>
      <select
        className="assistant-select"
        value={selectedCategory}
        onChange={(e) => {
          setSelectedCategory(e.target.value);
          setSelectedTask("");
        }}
      >
        <option value="">Seleccionar categoría...</option>
        {Object.keys(promptsAssistant).map((cat) => (
          <option key={cat} value={cat}>
            {catLabels[cat] || cat}
          </option>
        ))}
      </select>

      <label className="assistant-label">Tarea</label>
      <select
        className="assistant-select"
        value={selectedTask}
        onChange={(e) => setSelectedTask(e.target.value)}
        disabled={!selectedCategory}
      >
        <option value="">Seleccionar tarea...</option>
        {selectedCategory &&
          Object.keys(promptsAssistant[selectedCategory] || {}).map((task) => (
            <option key={task} value={task}>
              {taskLabels[task] || task}
            </option>
          ))}
      </select>

      <label className="assistant-label">Detalles / Contexto</label>
      <textarea
        className="assistant-textarea"
        rows="5"
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        placeholder="Ej: Empresa de restaurantes; ventas 200M (2024); problema: liquidez en mayo"
      />

      <button className="assistant-button" onClick={handleGenerate}>
        Generar respuesta
      </button>

      <div className="assistant-output">{output}</div>
    </div>
  );
}

export default ChatAssistant;
