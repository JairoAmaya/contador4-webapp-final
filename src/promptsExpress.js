// src/promptsExpress.js

// 🧠 Estructura: cada categoría incluye un label visible y sus tareas con nombre y prompt.
const promptsExpress = {
  analysis: {
    label: "📊 Análisis Financiero",
    tasks: {
      fin_diag: {
        label: "Diagnóstico Financiero",
        prompt:
          "Actúa como un CFO senior. Realiza un diagnóstico financiero integral para este cliente: {{details}}."
      },
      cash: {
        label: "Proyección de Flujo de Caja",
        prompt:
          "Proyecta el flujo de caja a 6 meses para: {{details}}."
      },
      ratios: {
        label: "Análisis de Ratios",
        prompt:
          "Calcula e interpreta los principales ratios financieros para: {{details}}."
      },
      break_even: {
        label: "Punto de Equilibrio",
        prompt:
          "Calcula el punto de equilibrio de: {{details}}."
      },
      scenario: {
        label: "Análisis de Escenarios",
        prompt:
          "Realiza un análisis de escenarios para: {{details}}."
      }
    }
  },
  communication: {
    label: "💬 Comunicación Empresarial",
    tasks: {
      client_letter: {
        label: "Carta al Cliente",
        prompt:
          "Redacta una carta profesional dirigida al cliente explicando: {{details}}."
      },
      board_report: {
        label: "Reporte para Junta",
        prompt:
          "Elabora un reporte ejecutivo para Junta Directiva con contexto: {{details}}."
      },
      email_reminder: {
        label: "Correo Recordatorio",
        prompt:
          "Escribe un correo recordatorio para: {{details}}."
      },
      policy_summary: {
        label: "Resumen de Política Fiscal",
        prompt:
          "Resume en lenguaje claro una política contable/fiscal para: {{details}}."
      },
      negotiation: {
        label: "Negociación de Honorarios",
        prompt:
          "Redacta un mensaje para negociar honorarios con un cliente: {{details}}."
      }
    }
  },
  proposals: {
    label: "💼 Propuestas y Cotizaciones",
    tasks: {
      proposal_full: {
        label: "Propuesta Integral",
        prompt:
          "Desarrolla una propuesta integral de servicios contables para: {{details}}."
      },
      pricing: {
        label: "Cotización en Paquetes",
        prompt:
          "Crea una cotización en 3 paquetes (Básico, Pro, Premium) para: {{details}}."
      },
      service_scope: {
        label: "Definición de Alcance",
        prompt:
          "Define el alcance de servicios contables y financieros para: {{details}}."
      },
      contract: {
        label: "Contrato Profesional",
        prompt:
          "Genera un borrador de contrato de servicios profesionales para: {{details}}."
      },
      differentiation: {
        label: "Ventajas Competitivas",
        prompt:
          "Explica las ventajas competitivas de tu propuesta para: {{details}}."
      }
    }
  },
  dashboards: {
    label: "📈 Reportes y Dashboards",
    tasks: {
      kpi_dashboard: {
        label: "Dashboard Ejecutivo",
        prompt:
          "Crea un dashboard ejecutivo mensual con KPIs críticos basado en: {{details}}."
      },
      early_warnings: {
        label: "Alertas Tempranas",
        prompt:
          "Diseña un sistema de alertas tempranas con KPIs para: {{details}}."
      },
      tax_tracker: {
        label: "Dashboard Fiscal",
        prompt:
          "Elabora un dashboard de control fiscal para: {{details}}."
      },
      budget_control: {
        label: "Control Presupuestal",
        prompt:
          "Diseña un tablero de control presupuestal para: {{details}}."
      },
      consolidation: {
        label: "Consolidación Financiera",
        prompt:
          "Diseña un dashboard de consolidación financiera para: {{details}}."
      }
    }
  },
  compliance: {
    label: "🧾 Cumplimiento Fiscal",
    tasks: {
      fiscal_calendar: {
        label: "Calendario Fiscal",
        prompt:
          "Genera un calendario de obligaciones fiscales para: {{details}}."
      },
      checklist: {
        label: "Checklist Normativo",
        prompt:
          "Diseña un checklist de cumplimiento normativo para: {{details}}."
      },
      risk_map: {
        label: "Mapa de Riesgos",
        prompt:
          "Crea un mapa de riesgos fiscales y laborales para: {{details}}."
      },
      updates: {
        label: "Actualizaciones Normativas",
        prompt:
          "Explica los cambios normativos recientes para: {{details}}."
      },
      sanctions: {
        label: "Sanciones Comunes",
        prompt:
          "Genera un resumen de sanciones comunes para: {{details}}."
      }
    }
  },
  audit: {
    label: "🔍 Auditoría y Control",
    tasks: {
      audit_program: {
        label: "Programa de Auditoría",
        prompt:
          "Crea un programa de auditoría basado en riesgos para: {{details}}."
      },
      controls: {
        label: "Checklist de Control Interno",
        prompt:
          "Elabora un checklist de control interno para: {{details}}."
      },
      fraud_signs: {
        label: "Indicadores de Fraude",
        prompt:
          "Lista indicadores de fraude financiero en: {{details}}."
      },
      evidence: {
        label: "Evidencia de Auditoría",
        prompt:
          "Redacta los procedimientos de obtención de evidencia para: {{details}}."
      },
      report: {
        label: "Informe de Hallazgos",
        prompt:
          "Elabora un informe de hallazgos de auditoría para: {{details}}."
      }
    }
  },
  international: {
    label: "🌍 Clientes Internacionales",
    tasks: {
      multicurrency: {
        label: "Reporte Multi-moneda",
        prompt:
          "Genera un reporte consolidado multi-moneda para: {{details}}."
      },
      ifrs: {
        label: "Aplicación NIIF/IFRS",
        prompt:
          "Explica cómo aplicar las NIIF/IFRS en el contexto de: {{details}}."
      },
      tax_compare: {
        label: "Comparación Fiscal Países",
        prompt:
          "Compara la carga fiscal en dos países aplicable a: {{details}}."
      },
      transfer_pricing: {
        label: "Precios de Transferencia",
        prompt:
          "Redacta un informe de precios de transferencia para: {{details}}."
      },
      crossborder: {
        label: "Operaciones Transfronterizas",
        prompt:
          "Genera análisis de operaciones transfronterizas para: {{details}}."
      }
    }
  }
};

export default promptsExpress;
