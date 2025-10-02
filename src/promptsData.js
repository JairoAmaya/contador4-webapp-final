// src/promptsData.js

const promptsData = [
  {
    id: "analisis-financiero",
    name: "Análisis Financiero Estratégico",
    icon: "📊",
    subcategories: [
      {
        name: "Interpretación de Estados Financieros",
        prompts: [
          {
            title: "Análisis Integral de Estados Financieros",
            text: "Actúa como un analista financiero senior. Analiza los estados financieros adjuntos de los últimos 3 años. Identifica las 5 tendencias más significativas, evalúa la salud financiera general de la empresa, proporciona 3 recomendaciones estratégicas basadas en tu análisis e incluye comparaciones año a año."
          },
          {
            title: "Comparación de Estados Financieros",
            text: "Realiza una comparación entre el balance general, estado de resultados y flujo de efectivo de los últimos 3 años, destacando los cambios más relevantes y sus causas principales."
          },
          {
            title: "Resumen Ejecutivo de Resultados",
            text: "Genera un resumen ejecutivo en lenguaje sencillo para la gerencia sobre los resultados financieros más relevantes y sus implicaciones estratégicas."
          }
        ]
      },
      {
        name: "Análisis de Flujo de Efectivo",
        prompts: [
          {
            title: "Análisis de Flujo de Efectivo Predictivo",
            text: "Realiza un análisis del flujo de efectivo proyectado para los próximos 12 meses, identificando riesgos de liquidez y oportunidades de inversión."
          },
          {
            title: "Evaluación de Liquidez",
            text: "Analiza el flujo de efectivo para determinar la capacidad de la empresa de cumplir con sus obligaciones a corto plazo y recomienda acciones para mejorar la liquidez."
          },
          {
            title: "Optimización de Flujos de Caja",
            text: "Identifica patrones en el flujo de efectivo que generen cuellos de botella y sugiere medidas para optimizar la entrada y salida de caja."
          }
        ]
      },
      {
        name: "Evaluación de Rentabilidad por Línea de Negocio",
        prompts: [
          {
            title: "Rentabilidad por Segmento",
            text: "Analiza la rentabilidad de cada línea de negocio, identificando cuál aporta mayor margen y cuál representa un riesgo financiero."
          },
          {
            title: "Comparación de Unidades de Negocio",
            text: "Compara las distintas unidades de negocio en términos de ingresos, costos y beneficios netos, sugiriendo dónde concentrar los recursos."
          },
          {
            title: "Recomendaciones de Optimización",
            text: "Proporciona recomendaciones estratégicas para mejorar la rentabilidad de las líneas de negocio menos eficientes."
          }
        ]
      },
      {
        name: "Análisis de Ratios Financieros",
        prompts: [
          {
            title: "Dashboard de Ratios Clave",
            text: "Crea un dashboard financiero que incluya los ratios clave: liquidez corriente, endeudamiento, margen neto, ROE y rotación de activos. Incluye una interpretación clara de cada indicador."
          },
          {
            title: "Comparación Sectorial de Ratios",
            text: "Compara los principales ratios financieros de la empresa con el promedio de su sector, destacando fortalezas y debilidades."
          },
          {
            title: "Tendencias en Ratios Financieros",
            text: "Identifica tendencias en los ratios financieros durante los últimos 5 años y explica cómo afectan la competitividad de la empresa."
          }
        ]
      },
      {
        name: "Detección de Riesgos Financieros",
        prompts: [
          {
            title: "Detección de Anomalías Financieras",
            text: "Revisa los estados financieros adjuntos y detecta posibles anomalías, inconsistencias o riesgos financieros. Explica el impacto potencial de cada hallazgo y sugiere medidas correctivas."
          },
          {
            title: "Mapa de Riesgos Financieros",
            text: "Elabora un mapa de riesgos financieros para la empresa, clasificando los riesgos en corto, mediano y largo plazo."
          },
          {
            title: "Alertas Financieras",
            text: "Diseña un sistema de alertas tempranas basado en indicadores financieros para anticipar posibles crisis de liquidez o insolvencia."
          }
        ]
      }
    ]
  }
];

export default promptsData;
