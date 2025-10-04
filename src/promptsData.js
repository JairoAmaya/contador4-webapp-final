// src/promptsData.js
// === MVP: 3 categorías iniciales con prompts cortos y botón de copiar ===

const promptsData = [
  {
    title: "📊 Análisis Financiero Estratégico",
    icon: "📈",
    subcategories: [
      {
        title: "Interpretación de Estados Financieros",
        prompts: [
          {
            title: "Análisis general",
            prompt: "Analiza los estados financieros y destaca fortalezas y debilidades clave."
          },
          {
            title: "Comparación interanual",
            prompt: "Compara resultados de dos años y explica los principales cambios."
          },
          {
            title: "Recomendaciones financieras",
            prompt: "Propón tres acciones para mejorar los indicadores financieros."
          }
        ]
      },
      {
        title: "Evaluación de Rentabilidad",
        prompts: [
          {
            title: "Análisis de rentabilidad",
            prompt: "Calcula y explica el margen bruto, operativo y neto de la empresa."
          },
          {
            title: "Optimización de utilidades",
            prompt: "Identifica los factores que más impactan la utilidad neta y cómo optimizarlos."
          }
        ]
      }
    ]
  },
  {
    title: "💬 Comunicación Empresarial de Alto Impacto",
    icon: "📝",
    subcategories: [
      {
        title: "Informes y Presentaciones",
        prompts: [
          {
            title: "Informe ejecutivo",
            prompt: "Resume los resultados financieros de forma profesional en menos de 200 palabras."
          },
          {
            title: "Presentación de resultados",
            prompt: "Crea una presentación con los principales hallazgos financieros del trimestre."
          }
        ]
      },
      {
        title: "Explicación de Hallazgos",
        prompts: [
          {
            title: "Explicación de auditoría",
            prompt: "Redacta un resumen claro sobre los hallazgos de auditoría para un cliente."
          },
          {
            title: "Comunicación de impacto fiscal",
            prompt: "Explica a un cliente cómo ciertos cambios fiscales afectan su empresa."
          }
        ]
      }
    ]
  },
  {
    title: "🤝 Propuestas y Cotizaciones que Cierran Negocios",
    icon: "💼",
    subcategories: [
      {
        title: "Propuestas Comerciales",
        prompts: [
          {
            title: "Propuesta de servicios contables",
            prompt: "Crea una propuesta de servicios contables atractiva con enfoque en beneficios."
          },
          {
            title: "Cotización rápida",
            prompt: "Elabora una cotización clara con precios, servicios y tiempos de entrega."
          }
        ]
      },
      {
        title: "Contratos Profesionales",
        prompts: [
          {
            title: "Contrato de servicios",
            prompt: "Redacta un contrato básico de prestación de servicios contables."
          },
          {
            title: "Justificación de honorarios",
            prompt: "Explica el valor agregado detrás de tus tarifas profesionales."
          }
        ]
      }
    ]
  }
];

export default promptsData;

