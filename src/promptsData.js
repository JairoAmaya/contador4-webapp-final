// src/promptsData.js

const promptsData = [
  {
    title: "📊 Análisis Financiero Estratégico",
    icon: "📈",
    subcategories: [
      {
        title: "Interpretación de Estados Financieros",
        prompts: [
          {
            title: "Análisis integral de estados financieros",
            prompt: "Actúa como un analista financiero senior. Analiza los estados financieros adjuntos (balance general, estado de resultados y estado de cambios en el patrimonio) de los últimos 3 años. Identifica las 5 tendencias más significativas, evalúa la salud financiera general de la empresa, y proporciona 3 recomendaciones estratégicas basadas en tu análisis. Incluye comparaciones año a año y explica el impacto de cada hallazgo en la posición competitiva de la empresa."
          },
          {
            title: "Comparación interanual de resultados",
            prompt: "Genera un análisis comparativo de los estados de resultados de los últimos 2 años. Identifica los cambios en ingresos, costos y gastos, destacando las áreas con mayor impacto en la utilidad neta. Explica qué factores podrían estar impulsando estas variaciones."
          },
          {
            title: "Identificación de debilidades financieras",
            prompt: "Revisa los estados financieros adjuntos y detecta 3 áreas críticas que representan riesgos para la estabilidad financiera de la empresa. Propón soluciones prácticas para cada una, priorizando su urgencia."
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
            title: "Informe ejecutivo para dirección",
            prompt: "Redacta un informe ejecutivo claro y conciso de máximo 300 palabras que resuma los resultados financieros del último trimestre. Usa un tono profesional y resalta los logros clave, los principales riesgos detectados y 2 recomendaciones estratégicas."
          },
          {
            title: "Presentación para inversionistas",
            prompt: "Crea una presentación de alto impacto para inversionistas basada en los estados financieros. Incluye un resumen de resultados, proyecciones de crecimiento y un argumento convincente para seguir invirtiendo en la empresa."
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
        title: "Generación de Propuestas",
        prompts: [
          {
            title: "Propuesta de servicios contables",
            prompt: "Redacta una propuesta comercial atractiva para un cliente potencial que busca servicios de contabilidad y asesoría financiera. Incluye una introducción, beneficios clave, servicios ofrecidos, precios aproximados y un cierre persuasivo."
          },
          {
            title: "Cotización profesional",
            prompt: "Elabora una cotización detallada para un servicio contable. Incluye desglose de actividades, tarifas, plazos de entrega y beneficios adicionales que diferencien tu propuesta de la competencia."
          }
        ]
      }
    ]
  }
];

export default promptsData;
