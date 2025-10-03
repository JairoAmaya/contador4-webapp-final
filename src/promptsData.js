const promptsData = [
  {
    id: 1,
    name: "Análisis Financiero Estratégico",
    icon: "📊",
    subcategories: [
      {
        name: "Interpretación de Estados Financieros",
        prompts: [
          {
            title: "01. Análisis Integral de Estados Financieros",
            text: "Actúa como un analista financiero senior. Analiza los estados financieros adjuntos (balance general, estado de resultados y estado de cambios en el patrimonio) de los últimos 3 años. Identifica las 5 tendencias más significativas, evalúa la salud financiera general de la empresa, y proporciona 3 recomendaciones estratégicas basadas en tu análisis. Incluye comparaciones año a año y explica el impacto de cada hallazgo en la posición competitiva de la empresa."
          },
          {
            title: "02. Comparativo Sectorial",
            text: "Actúa como un consultor financiero especializado en benchmarking. Compara los estados financieros de la empresa con los promedios del sector en el que opera. Identifica áreas donde la empresa está por encima o por debajo del promedio, analiza las razones de estas diferencias y ofrece recomendaciones para mejorar el desempeño en las áreas críticas."
          },
          {
            title: "03. Resumen Ejecutivo para Directivos",
            text: "Resume los estados financieros de manera clara y ejecutiva para un directorio. Identifica los 3 logros más importantes y los 3 desafíos más críticos en el último año fiscal. Explica con un lenguaje simple pero técnico cómo estas cifras afectan la sostenibilidad financiera y la capacidad de crecimiento de la organización."
          }
        ]
      },
      {
        name: "Análisis de Flujo de Efectivo",
        prompts: [
          {
            title: "04. Diagnóstico de Liquidez",
            text: "Analiza el flujo de efectivo operativo de la empresa. Evalúa si las operaciones generan suficiente efectivo para cubrir obligaciones corrientes, inversiones y distribución de dividendos. Identifica señales de estrés financiero y explica cómo podrían mitigarse."
          },
          {
            title: "05. Escenarios de Proyección de Caja",
            text: "Construye tres escenarios de proyección de flujo de caja (optimista, conservador y pesimista) para los próximos 12 meses. Incluye supuestos de ventas, costos y gastos, y analiza cómo afectaría cada escenario a la solvencia de la empresa. Recomienda medidas preventivas en caso de déficit proyectado."
          },
          {
            title: "06. Optimización del Capital de Trabajo",
            text: "Evalúa el ciclo de conversión de efectivo de la empresa (inventarios, cuentas por cobrar y cuentas por pagar). Identifica cuellos de botella que retrasan el flujo de caja y recomienda al menos 3 estrategias concretas para mejorar la rotación de activos y reducir la presión de liquidez."
          }
        ]
      },
      {
        name: "Evaluación de Rentabilidad por Línea de Negocio",
        prompts: [
          {
            title: "07. Análisis de Contribución Marginal",
            text: "Calcula la contribución marginal por cada línea de producto o servicio. Identifica cuáles son los más rentables y cuáles generan pérdidas ocultas. Sugiere estrategias de pricing, eliminación de líneas no rentables o reestructuración de costos para maximizar márgenes."
          },
          {
            title: "08. Reporte de Rentabilidad Comparativa",
            text: "Genera un informe que compare la rentabilidad de las diferentes líneas de negocio en términos de margen bruto, margen operativo y rentabilidad neta. Señala las 2 líneas más fuertes y las 2 más débiles, explicando cómo afectan al desempeño general."
          },
          {
            title: "09. Recomendaciones Estratégicas de Inversión",
            text: "En base al análisis de rentabilidad, recomienda en qué líneas de negocio debe enfocarse la empresa para crecer en los próximos 2 años. Incluye riesgos asociados y posibles retornos proyectados."
          }
        ]
      },
      {
        name: "Análisis de Ratios Financieros",
        prompts: [
          {
            title: "10. Ratios de Liquidez",
            text: "Calcula e interpreta los principales ratios de liquidez (razón corriente, prueba ácida, capital de trabajo). Explica qué tan preparada está la empresa para cumplir con sus obligaciones de corto plazo."
          },
          {
            title: "11. Ratios de Endeudamiento",
            text: "Analiza los niveles de endeudamiento (deuda/activo, deuda/patrimonio, cobertura de intereses). Determina si la empresa tiene un nivel saludable de apalancamiento y qué riesgos financieros enfrenta."
          },
          {
            title: "12. Ratios de Rentabilidad",
            text: "Evalúa la rentabilidad de la empresa mediante ROA, ROE y margen neto. Identifica si los niveles actuales son sostenibles y compáralos con benchmarks de la industria."
          }
        ]
      },
      {
        name: "Detección de Riesgos Financieros",
        prompts: [
          {
            title: "13. Riesgos de Liquidez y Solvencia",
            text: "Identifica señales de riesgo de liquidez y solvencia en la empresa. Proporciona un listado de al menos 3 alertas tempranas y propone estrategias de mitigación."
          },
          {
            title: "14. Análisis de Riesgo de Concentración",
            text: "Revisa la concentración de clientes, proveedores y fuentes de financiamiento. Evalúa el riesgo de depender de pocos actores clave y recomienda diversificación."
          },
          {
            title: "15. Matriz de Riesgos Financieros",
            text: "Crea una matriz de riesgos financieros con probabilidad e impacto. Incluye riesgos de mercado, de crédito y operativos. Sugiere planes de acción para cada uno."
          }
        ]
      }
    ]
  }
];

export default promptsData;
