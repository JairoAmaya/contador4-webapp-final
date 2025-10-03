const promptsData = [
  {
    id: "finanzas",
    name: "Análisis Financiero Estratégico",
    icon: "📊",
    subcategories: [
      {
        name: "Interpretación de Estados Financieros",
        prompts: [
          {
            title: "Análisis Integral de Estados Financieros",
            text: "Actúa como un analista financiero senior y genera un análisis detallado del balance general, estado de resultados y flujo de efectivo."
          },
          {
            title: "Comparación de Estados Financieros",
            text: "Compara los estados financieros de los últimos tres años e identifica tendencias clave."
          },
          {
            title: "Informe para Inversores",
            text: "Resume los estados financieros en un formato amigable para inversionistas."
          }
        ]
      },
      {
        name: "Análisis de Flujo de Efectivo",
        prompts: [
          {
            title: "Revisión de Liquidez Operativa",
            text: "Evalúa la liquidez operativa de la empresa con base en su flujo de efectivo."
          },
          {
            title: "Análisis de Flujo Libre",
            text: "Calcula el flujo de caja libre e interpreta sus implicaciones estratégicas."
          },
          {
            title: "Escenarios de Caja",
            text: "Proyecta tres escenarios posibles de flujo de efectivo para los próximos 12 meses."
          }
        ]
      },
      {
        name: "Evaluación de Rentabilidad por Línea de Negocio",
        prompts: [
          {
            title: "Rentabilidad Segmentada",
            text: "Analiza la rentabilidad por unidad de negocio o producto."
          },
          {
            title: "Margen por Cliente",
            text: "Calcula y explica el margen de rentabilidad promedio por cliente."
          },
          {
            title: "Top 5 Líneas Más Rentables",
            text: "Identifica las cinco líneas de negocio más rentables y explica por qué."
          }
        ]
      },
      {
        name: "Análisis de Ratios Financieros",
        prompts: [
          {
            title: "Ratios Clave",
            text: "Calcula los principales ratios financieros de la empresa y explica su significado."
          },
          {
            title: "Comparación con el Sector",
            text: "Compara los ratios de la empresa con los promedios del sector."
          },
          {
            title: "Alertas en Ratios",
            text: "Identifica posibles alertas en ratios financieros que deban ser corregidas."
          }
        ]
      },
      {
        name: "Detección de Riesgos Financieros",
        prompts: [
          {
            title: "Mapa de Riesgos",
            text: "Identifica los riesgos financieros más relevantes de la empresa."
          },
          {
            title: "Evaluación de Impacto",
            text: "Clasifica los riesgos detectados según probabilidad e impacto."
          },
          {
            title: "Recomendaciones de Mitigación",
            text: "Propón estrategias para mitigar los principales riesgos financieros."
          }
        ]
      }
    ]
  },
  {
    id: "comunicacion",
    name: "Comunicación Empresarial de Alto Impacto",
    icon: "💬",
    subcategories: [
      {
        name: "Cartas explicativas para clientes",
        prompts: [
          {
            title: "Carta de Aclaración",
            text: "Redacta una carta clara y profesional explicando a un cliente un ajuste contable inesperado."
          },
          {
            title: "Notificación de Cambios",
            text: "Escribe una carta notificando a los clientes sobre cambios en la normativa fiscal."
          },
          {
            title: "Explicación de Resultados",
            text: "Redacta un comunicado sencillo explicando los resultados financieros de un trimestre."
          }
        ]
      },
      {
        name: "Reportes ejecutivos personalizados",
        prompts: [
          {
            title: "Reporte de Desempeño",
            text: "Crea un reporte ejecutivo de una empresa resaltando sus fortalezas financieras."
          },
          {
            title: "Análisis para CEO",
            text: "Prepara un resumen ejecutivo con los puntos críticos que un CEO debe conocer."
          },
          {
            title: "Reporte Comparativo",
            text: "Elabora un informe ejecutivo comparando el desempeño financiero contra el plan anual."
          }
        ]
      },
      {
        name: "Presentaciones de resultados",
        prompts: [
          {
            title: "Presentación Visual",
            text: "Genera una presentación en PowerPoint con gráficos claros de resultados financieros."
          },
          {
            title: "Resumen Ejecutivo",
            text: "Crea diapositivas con los KPIs más relevantes del trimestre."
          },
          {
            title: "Pitch para Inversores",
            text: "Elabora una presentación con métricas clave para presentar a potenciales inversores."
          }
        ]
      },
      {
        name: "Comunicación de hallazgos de auditoría",
        prompts: [
          {
            title: "Informe de Hallazgos",
            text: "Redacta un reporte formal comunicando hallazgos de auditoría a la gerencia."
          },
          {
            title: "Comunicación Constructiva",
            text: "Escribe un mensaje profesional resaltando oportunidades de mejora detectadas en auditoría."
          },
          {
            title: "Resumen de Recomendaciones",
            text: "Elabora un memo con las recomendaciones de auditoría más relevantes."
          }
        ]
      },
      {
        name: "Explicación de impactos fiscales",
        prompts: [
          {
            title: "Impacto de Reforma Fiscal",
            text: "Resume en lenguaje simple cómo afecta una nueva ley fiscal a la empresa."
          },
          {
            title: "Explicación para No Financieros",
            text: "Crea un comunicado dirigido a empleados no financieros explicando un cambio tributario."
          },
          {
            title: "Informe de Impacto Económico",
            text: "Elabora un reporte breve sobre el impacto económico de una modificación fiscal."
          }
        ]
      }
    ]
  }
];

export default promptsData;
