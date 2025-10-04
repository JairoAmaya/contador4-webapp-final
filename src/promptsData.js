const promptsData = [
  {
    title: "Análisis Financiero Estratégico",
    icon: "📊",
    subcategories: [
      {
        title: "Interpretación de Estados Financieros",
        prompts: [
          {
            title: "Análisis integral de estados financieros",
            prompt:
              "Actúa como un analista financiero senior. Analiza los estados financieros adjuntos (balance general, estado de resultados y estado de cambios en el patrimonio) de los últimos 3 años. Identifica las 5 tendencias más significativas, evalúa la salud financiera general de la empresa, y proporciona 3 recomendaciones estratégicas basadas en tu análisis. Incluye comparaciones año a año y explica el impacto de cada hallazgo en la posición competitiva de la empresa."
          },
          {
            title: "Comparación interanual de resultados",
            prompt:
              "Genera un análisis comparativo de los estados de resultados de los últimos 2 años. Identifica los cambios en ingresos, costos y gastos, destacando las áreas con mayor impacto en la utilidad neta. Explica qué factores podrían estar impulsando estas variaciones."
          },
          {
            title: "Identificación de debilidades financieras",
            prompt:
              "Revisa los estados financieros y detecta 3 áreas críticas que representen riesgos para la estabilidad financiera de la empresa (ejemplo: liquidez, endeudamiento, rentabilidad). Propón una acción inmediata para mitigar cada una."
          }
        ]
      }
    ]
  },
  {
    title: "Comunicación Empresarial de Alto Impacto",
    icon: "💬💬",
    subcategories: [
      {
        title: "Mensajes Estratégicos",
        prompts: [
          {
            title: "Email a inversionistas",
            prompt:
              "Redacta un correo convincente para inversionistas sobre los resultados financieros recientes, destacando los logros clave y próximos pasos estratégicos."
          }
        ]
      }
    ]
  },
  {
    title: "Propuestas y Cotizaciones que Cierran Negocios",
    icon: "📑📑",
    subcategories: [
      {
        title: "Propuestas Comerciales",
        prompts: [
          {
            title: "Propuesta de valor",
            prompt:
              "Crea una propuesta comercial destacando el valor diferencial de la empresa frente a la competencia, incluyendo beneficios tangibles para el cliente."
          }
        ]
      }
    ]
  }
];

export default promptsData;
