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
const promptsAssistant = {
  analysis: {
    fin_diag: "🧮 Actúa como un CFO senior. Realiza un diagnóstico financiero integral para este cliente: {{details}}.",
    cash: "💰 Proyecta el flujo de caja a 6 meses para: {{details}}.",
    ratios: "📊 Calcula e interpreta los principales ratios financieros para: {{details}}.",
    break_even: "📈 Calcula el punto de equilibrio de: {{details}}.",
    scenario: "📉 Realiza un análisis de escenarios para: {{details}}."
  },
  communication: {
    client_letter: "✉️ Redacta una carta profesional dirigida al cliente explicando: {{details}}.",
    board_report: "📑 Elabora un reporte para Junta Directiva con contexto: {{details}}.",
    email_reminder: "📬 Escribe un correo recordatorio para: {{details}}.",
    policy_summary: "📘 Resume en lenguaje claro una política contable/fiscal para: {{details}}.",
    negotiation: "🤝 Redacta un mensaje para negociar honorarios con un cliente: {{details}}."
  },
  proposals: {
    proposal_full: "📋 Desarrolla una propuesta integral de servicios contables para: {{details}}.",
    pricing: "💵 Crea una cotización en 3 paquetes (Básico, Pro, Premium) para: {{details}}.",
    service_scope: "🧾 Define el alcance de servicios contables y financieros para: {{details}}.",
    contract: "🧠 Genera un borrador de contrato de servicios profesionales para: {{details}}.",
    differentiation: "🚀 Explica las ventajas competitivas de tu propuesta para: {{details}}."
  },
  dashboards: {
    kpi_dashboard: "📈 Crea un dashboard ejecutivo mensual con KPIs críticos basado en: {{details}}.",
    early_warnings: "⚠️ Diseña un sistema de alertas tempranas con KPIs para: {{details}}.",
    tax_tracker: "📊 Elabora un dashboard de control fiscal para: {{details}}.",
    budget_control: "📉 Diseña un tablero de control presupuestal para: {{details}}.",
    consolidation: "🔗 Diseña un dashboard de consolidación financiera para: {{details}}."
  },
  compliance: {
    fiscal_calendar: "🗓️ Genera un calendario de obligaciones fiscales para: {{details}}.",
    checklist: "✅ Diseña un checklist de cumplimiento normativo para: {{details}}.",
    risk_map: "🧩 Crea un mapa de riesgos fiscales y laborales para: {{details}}.",
    updates: "📰 Explica los cambios normativos recientes para: {{details}}.",
    sanctions: "⚖️ Genera un resumen de sanciones comunes para: {{details}}."
  },
  audit: {
    audit_program: "🔍 Prepara un programa de auditoría basado en riesgos para: {{details}}.",
    controls: "🧾 Elabora un checklist de control interno para: {{details}}.",
    fraud_signs: "🕵️ Lista indicadores de fraude financiero en: {{details}}.",
    evidence: "📂 Redacta los procedimientos de obtención de evidencia para: {{details}}.",
    report: "📋 Elabora un informe de hallazgos de auditoría para: {{details}}."
  },
  international: {
    multicurrency: "🌍 Genera un reporte consolidado multi-moneda para: {{details}}.",
    ifrs: "📘 Explica cómo aplicar las NIIF/IFRS en el contexto de: {{details}}.",
    tax_compare: "💼 Compara la carga fiscal en dos países aplicable a: {{details}}.",
    transfer_pricing: "💶 Redacta un informe de precios de transferencia para: {{details}}.",
    crossborder: "✈️ Genera un análisis de operaciones transfronterizas para: {{details}}."
  }
};

export default promptsAssistant;

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
