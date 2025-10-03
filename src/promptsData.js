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
            title: "Análisis Integral de Estados Financieros",
            text: "Actúa como un analista financiero senior. Analiza los estados financieros adjuntos de los últimos 3 años..."
          },
          {
            title: "Comparación de Estados Financieros",
            text: "Realiza una comparación entre balance general, estado de resultados y flujo de efectivo de los últimos 3 años..."
          },
          {
            title: "Resumen Ejecutivo de Resultados",
            text: "Genera un resumen ejecutivo claro para la gerencia sobre los resultados financieros más relevantes..."
          }
        ]
      },
      {
        name: "Análisis de Flujo de Efectivo",
        prompts: [
          {
            title: "Proyección de Flujo de Efectivo",
            text: "Elabora una proyección de flujo de efectivo a 12 meses considerando ingresos y egresos esperados..."
          },
          {
            title: "Identificación de Cuellos de Botella",
            text: "Detecta períodos con tensiones de liquidez y sugiere medidas de mitigación..."
          },
          {
            title: "Estrategias de Optimización de Liquidez",
            text: "Recomienda acciones para mejorar la gestión de caja en la empresa..."
          }
        ]
      },
      {
        name: "Evaluación de Rentabilidad por Línea de Negocio",
        prompts: [
          {
            title: "Rentabilidad por Producto",
            text: "Analiza la rentabilidad de cada producto y su contribución al margen total..."
          },
          {
            title: "Comparación entre Líneas",
            text: "Compara el desempeño de las diferentes líneas de negocio y determina cuáles son más estratégicas..."
          },
          {
            title: "Segmentación de Clientes Rentables",
            text: "Identifica los clientes que aportan mayor rentabilidad y recomienda estrategias de fidelización..."
          }
        ]
      },
      {
        name: "Análisis de Ratios Financieros",
        prompts: [
          {
            title: "Ratios de Liquidez",
            text: "Calcula y analiza ratios de liquidez como razón corriente y prueba ácida..."
          },
          {
            title: "Ratios de Rentabilidad",
            text: "Evalúa ratios como ROE, ROA y margen neto en los últimos 3 años..."
          },
          {
            title: "Ratios de Endeudamiento",
            text: "Analiza el nivel de apalancamiento financiero y su impacto en la sostenibilidad de la empresa..."
          }
        ]
      },
      {
        name: "Detección de Riesgos Financieros",
        prompts: [
          {
            title: "Mapa de Riesgos Financieros",
            text: "Identifica y clasifica los principales riesgos financieros que enfrenta la empresa..."
          },
          {
            title: "Escenarios de Crisis",
            text: "Crea escenarios hipotéticos de crisis y sugiere respuestas financieras adecuadas..."
          },
          {
            title: "Recomendaciones de Mitigación",
            text: "Propón estrategias concretas para reducir la exposición a los riesgos detectados..."
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Comunicación Empresarial de Alto Impacto",
    icon: "📢",
    subcategories: [
      {
        name: "Cartas explicativas para clientes",
        prompts: [
          {
            title: "Carta de Ajuste Contable",
            text: "Redacta una carta para un cliente explicando un ajuste contable de manera clara y comprensible..."
          },
          {
            title: "Notificación de Cambios Normativos",
            text: "Explica a un cliente los impactos de una nueva regulación contable en su negocio..."
          },
          {
            title: "Explicación de Diferencias en Facturación",
            text: "Genera una carta diplomática para explicar discrepancias en facturación..."
          }
        ]
      },
      {
        name: "Reportes ejecutivos personalizados",
        prompts: [
          {
            title: "Reporte Financiero Trimestral",
            text: "Crea un reporte ejecutivo con los principales indicadores financieros trimestrales..."
          },
          {
            title: "Resumen Estratégico para CEO",
            text: "Prepara un resumen ejecutivo en lenguaje simple con hallazgos financieros clave..."
          },
          {
            title: "Reporte Comparativo",
            text: "Elabora un reporte comparando desempeño real vs. presupuesto y explica desviaciones..."
          }
        ]
      },
      {
        name: "Presentaciones de resultados",
        prompts: [
          {
            title: "Presentación para Junta Directiva",
            text: "Estructura una presentación de resultados financieros con gráficos y mensajes clave..."
          },
          {
            title: "Presentación para Inversionistas",
            text: "Diseña un discurso para inversionistas resaltando logros financieros y proyecciones..."
          },
          {
            title: "Resumen Visual de Resultados",
            text: "Genera un esquema visual de KPIs y métricas clave para presentaciones ejecutivas..."
          }
        ]
      },
      {
        name: "Comunicación de hallazgos de auditoría",
        prompts: [
          {
            title: "Informe de Observaciones",
            text: "Redacta un informe claro con hallazgos de auditoría y su impacto en la gestión..."
          },
          {
            title: "Comunicación de Recomendaciones",
            text: "Explica recomendaciones de auditoría en un lenguaje accesible para la gerencia..."
          },
          {
            title: "Síntesis de Hallazgos Críticos",
            text: "Resume en una página los hallazgos más críticos y las acciones inmediatas sugeridas..."
          }
        ]
      },
      {
        name: "Explicación de impactos fiscales",
        prompts: [
          {
            title: "Impacto de Nuevos Impuestos",
            text: "Elabora un documento para explicar a directivos los efectos de un nuevo impuesto..."
          },
          {
            title: "Explicación de Cambios en Declaraciones",
            text: "Redacta un texto que detalle cómo afectan los cambios normativos a las declaraciones fiscales..."
          },
          {
            title: "Síntesis de Beneficios Tributarios",
            text: "Explica a la gerencia las oportunidades de ahorro fiscal derivadas de nuevas normativas..."
          }
        ]
      }
    ]
  }
];
