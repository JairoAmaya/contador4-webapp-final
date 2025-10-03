// src/promptsData.js

const promptsData = [
  {
    id: 1,
    name: "📊 Análisis Financiero Estratégico",
    icon: "📊",
    subcategories: [
      {
        name: "Interpretación de estados financieros",
        prompts: [
          {
            title: "Análisis integral",
            text: "Actúa como un analista financiero senior. Analiza los estados financieros adjuntos (balance general, estado de resultados y estado de cambios en el patrimonio) de los últimos 3 años. Identifica las 5 tendencias más significativas, evalúa la salud financiera general de la empresa, y proporciona 3 recomendaciones estratégicas basadas en tu análisis. Incluye comparaciones año a año y explica el impacto de cada hallazgo en la posición competitiva de la empresa."
          },
          {
            title: "Comparativo sectorial",
            text: "Analiza los estados financieros de la empresa y compáralos con los promedios del sector. Identifica en qué áreas la empresa está por encima o por debajo de la media, y sugiere 3 estrategias para mejorar la posición competitiva."
          },
          {
            title: "Análisis de crecimiento",
            text: "Examina la evolución de ingresos, gastos y utilidades en los últimos 3 años. Detecta patrones de crecimiento o decrecimiento y genera un informe con proyecciones para los próximos 2 años."
          }
        ]
      },
      {
        name: "Análisis de flujo de efectivo",
        prompts: [
          {
            title: "Flujo operativo",
            text: "Analiza el flujo de efectivo operativo de los últimos 12 meses. Identifica los principales factores que lo impulsan, señala riesgos potenciales y sugiere 2 recomendaciones para optimizar la liquidez."
          },
          {
            title: "Simulación de escenarios",
            text: "Crea un análisis de flujo de caja con 3 escenarios: optimista, conservador y pesimista. Explica cómo cada escenario afectaría la capacidad de la empresa para cumplir con sus obligaciones financieras."
          },
          {
            title: "Evaluación de sostenibilidad",
            text: "Evalúa si el flujo de efectivo de la empresa es suficiente para financiar su crecimiento sin necesidad de deuda adicional. Explica los hallazgos y recomienda un plan de acción."
          }
        ]
      },
      {
        name: "Evaluación de rentabilidad por línea de negocio",
        prompts: [
          {
            title: "Rentabilidad comparativa",
            text: "Analiza la rentabilidad de cada línea de negocio y determina cuál es la más rentable. Sugiere estrategias para fortalecer las menos rentables."
          },
          {
            title: "Análisis de margen",
            text: "Evalúa los márgenes de utilidad bruta y neta por línea de negocio. Detecta posibles fugas de rentabilidad y sugiere mejoras."
          },
          {
            title: "Proyección de rentabilidad",
            text: "Proyecta la rentabilidad de cada línea de negocio para los próximos 2 años en base a tendencias históricas."
          }
        ]
      },
      {
        name: "Análisis de ratios financieros",
        prompts: [
          {
            title: "Ratios de liquidez",
            text: "Calcula e interpreta los ratios de liquidez (corriente y prueba ácida). Explica qué tan solvente es la empresa frente a sus pasivos de corto plazo."
          },
          {
            title: "Ratios de rentabilidad",
            text: "Analiza los ratios de rentabilidad (ROA, ROE, margen neto). Explica qué tan eficiente es la empresa generando valor para sus accionistas."
          },
          {
            title: "Ratios de endeudamiento",
            text: "Evalúa los ratios de endeudamiento y cobertura de intereses. Explica el nivel de riesgo financiero y sugiere mejoras."
          }
        ]
      },
      {
        name: "Detección de riesgos financieros",
        prompts: [
          {
            title: "Mapa de riesgos",
            text: "Identifica los principales riesgos financieros a los que se enfrenta la empresa (liquidez, crédito, mercado). Explica su impacto y propone mitigaciones."
          },
          {
            title: "Riesgo de concentración",
            text: "Analiza si existe una concentración excesiva en pocos clientes, proveedores o productos y explica los riesgos asociados."
          },
          {
            title: "Riesgo cambiario",
            text: "Evalúa el impacto de la fluctuación cambiaria en las operaciones de la empresa y propone estrategias de cobertura."
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "📢 Comunicación Empresarial de Alto Impacto",
    icon: "📢",
    subcategories: [
      {
        name: "Cartas explicativas para clientes",
        prompts: [
          {
            title: "Carta de resultados",
            text: "Redacta una carta clara y profesional para explicar a un cliente los resultados financieros trimestrales de su empresa."
          },
          {
            title: "Carta de ajustes contables",
            text: "Elabora una carta que explique a un cliente los ajustes realizados en su contabilidad, en un lenguaje sencillo y transparente."
          },
          {
            title: "Carta de recomendaciones",
            text: "Escribe una carta con recomendaciones contables y fiscales clave, adaptadas al negocio del cliente."
          }
        ]
      },
      {
        name: "Reportes ejecutivos personalizados",
        prompts: [
          {
            title: "Reporte de indicadores",
            text: "Crea un reporte ejecutivo con los 5 indicadores financieros más relevantes para la junta directiva de una pyme."
          },
          {
            title: "Reporte de desempeño",
            text: "Elabora un reporte ejecutivo que resuma el desempeño financiero semestral, destacando logros y áreas de mejora."
          },
          {
            title: "Reporte comparativo",
            text: "Genera un reporte comparativo de resultados financieros de los últimos 3 años, destacando tendencias clave."
          }
        ]
      },
      {
        name: "Presentaciones de resultados",
        prompts: [
          {
            title: "Presentación trimestral",
            text: "Diseña una presentación con diapositivas para exponer los resultados financieros trimestrales ante inversionistas."
          },
          {
            title: "Presentación anual",
            text: "Crea una presentación de resultados anuales para una pyme, destacando métricas clave y logros estratégicos."
          },
          {
            title: "Presentación para bancos",
            text: "Elabora una presentación de resultados financieros enfocada en solicitar financiamiento bancario."
          }
        ]
      },
      {
        name: "Comunicación de hallazgos de auditoría",
        prompts: [
          {
            title: "Informe resumido",
            text: "Redacta un informe breve comunicando los principales hallazgos de una auditoría a la gerencia."
          },
          {
            title: "Informe detallado",
            text: "Genera un informe detallado para la junta directiva, explicando cada hallazgo de auditoría y sus implicaciones."
          },
          {
            title: "Informe con recomendaciones",
            text: "Elabora un informe que incluya hallazgos de auditoría y recomendaciones prácticas para resolverlos."
          }
        ]
      },
      {
        name: "Explicación de impactos fiscales",
        prompts: [
          {
            title: "Impacto de reforma",
            text: "Redacta un resumen explicando a un cliente cómo le afecta la última reforma fiscal."
          },
          {
            title: "Impacto en flujo de caja",
            text: "Elabora una explicación clara sobre cómo los impuestos afectan el flujo de caja mensual de un negocio."
          },
          {
            title: "Impacto comparativo",
            text: "Genera un informe que compare la carga fiscal de un cliente en el último año vs. el actual."
          }
        ]
      }
    ]
  },
  {
    id: 3,
    name: "💼 Propuestas y Cotizaciones que Cierran Negocios",
    icon: "💼",
    subcategories: [
      {
        name: "Propuestas de servicios contables",
        prompts: [
          {
            title: "Propuesta básica",
            text: "Redacta una propuesta breve para ofrecer servicios de contabilidad mensual a una pyme, destacando claridad y profesionalismo."
          },
          {
            title: "Propuesta diferenciada",
            text: "Crea una propuesta que destaque el valor agregado de los servicios contables frente a la competencia, incluyendo beneficios únicos."
          },
          {
            title: "Propuesta integral",
            text: "Genera una propuesta detallada que incluya contabilidad, impuestos y asesoría financiera estratégica, explicando el impacto para el cliente."
          }
        ]
      },
      {
        name: "Cotizaciones por paquetes",
        prompts: [
          {
            title: "Paquete básico",
            text: "Elabora una cotización para un paquete básico que incluya contabilidad mensual y declaraciones fiscales."
          },
          {
            title: "Paquete estándar",
            text: "Crea una cotización para un paquete estándar con servicios de contabilidad, asesoría fiscal trimestral y reportes financieros."
          },
          {
            title: "Paquete premium",
            text: "Genera una cotización premium que incluya contabilidad, asesoría fiscal mensual, reportes personalizados y proyecciones financieras."
          }
        ]
      },
      {
        name: "Justificación de honorarios",
        prompts: [
          {
            title: "Explicación de tarifas",
            text: "Redacta un documento que explique de forma clara cómo se calculan los honorarios contables y qué valor aportan al cliente."
          },
          {
            title: "Defensa de honorarios",
            text: "Elabora un texto convincente que justifique honorarios más altos que los de la competencia, resaltando calidad y confianza."
          },
          {
            title: "Valor a largo plazo",
            text: "Crea una explicación que muestre cómo los servicios contables generan ahorros y beneficios a largo plazo para el cliente."
          }
        ]
      },
      {
        name: "Respuestas a solicitudes de propuesta (RFP)",
        prompts: [
          {
            title: "Respuesta breve",
            text: "Redacta una respuesta concisa a un RFP de una empresa que busca servicios de contabilidad básica."
          },
          {
            title: "Respuesta técnica",
            text: "Elabora una respuesta a un RFP destacando la experiencia técnica y metodologías de trabajo."
          },
          {
            title: "Respuesta diferenciada",
            text: "Crea una respuesta a un RFP resaltando innovación, uso de tecnología y atención personalizada."
          }
        ]
      },
      {
        name: "Negociación de propuestas",
        prompts: [
          {
            title: "Mensaje de negociación inicial",
            text: "Redacta un correo de seguimiento a un cliente que pidió rebajar el precio, ofreciendo alternativas sin reducir la calidad."
          },
          {
            title: "Cierre con beneficios adicionales",
            text: "Elabora una propuesta revisada ofreciendo un beneficio adicional (ejemplo: consultoría inicial gratuita) en lugar de bajar el precio."
          },
          {
            title: "Defensa de propuesta",
            text: "Escribe un argumento sólido para sostener la propuesta original frente a presiones de negociación, enfatizando valor y confianza."
          }
        ]
      }
    ]
  }
];

export default promptsData;

