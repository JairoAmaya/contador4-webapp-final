// src/promptsData.js

const promptsData = [
  // ==========================
  // CATEGORÍA 1
  // ==========================
  {
    id: 1,
    name: "📊 Análisis Financiero Estratégico",
    icon: "📊",
    subcategories: [
      {
        name: "Interpretación de estados financieros",
        prompts: [
          {
            title: "Análisis integral de estados financieros",
            text: "Actúa como un analista financiero senior. Analiza los estados financieros adjuntos (balance general, estado de resultados y estado de cambios en el patrimonio) de los últimos 3 años. Identifica las 5 tendencias más significativas, evalúa la salud financiera general de la empresa y proporciona 3 recomendaciones estratégicas. Incluye comparaciones año a año y explica el impacto de cada hallazgo en la posición competitiva de la empresa."
          },
          {
            title: "Comparación interanual de resultados",
            text: "Genera un análisis comparativo de los estados de resultados de los últimos 2 años. Identifica los cambios en ingresos, costos y gastos, destacando las áreas con mayor impacto en la utilidad neta. Explica qué factores podrían estar impulsando estas variaciones."
          },
          {
            title: "Análisis de balance general",
            text: "Revisa el balance general de la empresa y determina los cambios más relevantes en activos, pasivos y patrimonio. Evalúa la estructura de capital, el nivel de endeudamiento y la liquidez disponible para operaciones."
          }
        ]
      },
      {
        name: "Análisis de flujo de efectivo",
        prompts: [
          {
            title: "Evaluación del flujo operativo",
            text: "Analiza el estado de flujo de efectivo y determina si la empresa genera suficiente flujo operativo para cubrir sus gastos recurrentes y de inversión. Identifica los principales impulsores de entrada y salida de efectivo."
          },
          {
            title: "Impacto de financiamiento",
            text: "Examina la sección de actividades de financiamiento en el flujo de efectivo. Explica cómo los nuevos préstamos, emisiones de acciones o pagos de deuda impactan la liquidez de la empresa."
          },
          {
            title: "Proyección de liquidez",
            text: "Con base en el flujo de efectivo histórico, elabora una proyección de liquidez para los próximos 6 meses. Señala riesgos de déficit y sugiere medidas preventivas."
          }
        ]
      },
      {
        name: "Evaluación de rentabilidad por línea de negocio",
        prompts: [
          {
            title: "Rentabilidad por unidad de negocio",
            text: "Desarrolla un informe que compare la rentabilidad de cada unidad de negocio o línea de producto. Identifica qué áreas generan mayor margen y cuáles requieren ajustes estratégicos."
          },
          {
            title: "Análisis de clientes rentables",
            text: "Clasifica a los principales clientes en función de su rentabilidad neta. Identifica cuáles son los más estratégicos y cuáles podrían estar afectando los márgenes de la empresa."
          },
          {
            title: "Benchmarking interno",
            text: "Compara las líneas de negocio internas para determinar qué prácticas de las más rentables podrían aplicarse en otras unidades menos eficientes."
          }
        ]
      },
      {
        name: "Análisis de ratios financieros",
        prompts: [
          {
            title: "Ratios de liquidez",
            text: "Calcula los principales indicadores de liquidez (current ratio, quick ratio, cash ratio). Evalúa si la empresa tiene capacidad para cubrir sus obligaciones de corto plazo."
          },
          {
            title: "Ratios de rentabilidad",
            text: "Analiza el ROE, ROA y margen neto de la empresa. Explica qué tan atractiva es la empresa para inversionistas y socios estratégicos."
          },
          {
            title: "Ratios de eficiencia",
            text: "Evalúa la rotación de inventarios, rotación de cuentas por cobrar y cuentas por pagar. Explica si la empresa gestiona bien su capital de trabajo."
          }
        ]
      },
      {
        name: "Detección de riesgos financieros",
        prompts: [
          {
            title: "Mapa de riesgos financieros",
            text: "Genera un mapa de riesgos basado en los estados financieros. Señala los 3 riesgos más críticos (liquidez, endeudamiento, exposición cambiaria, etc.) y sugiere planes de mitigación."
          },
          {
            title: "Sensibilidad a cambios de mercado",
            text: "Evalúa cómo impactaría una variación del 10% en tasas de interés o tipo de cambio en la posición financiera de la empresa."
          },
          {
            title: "Escenarios adversos",
            text: "Diseña un escenario de estrés financiero para la empresa considerando caída de ventas y aumento de costos. Determina su capacidad de resistencia."
          }
        ]
      }
    ]
  },

  // ==========================
  // CATEGORÍA 2
  // ==========================
  {
    id: 2,
    name: "💬 Comunicación Empresarial de Alto Impacto",
    icon: "💬",
    subcategories: [
      {
        name: "Cartas explicativas para clientes",
        prompts: [
          {
            title: "Carta para aclarar cambios normativos",
            text: "Redacta una carta clara y profesional dirigida a clientes, explicando cómo un reciente cambio normativo afecta sus obligaciones fiscales. Usa un tono cercano pero técnico."
          },
          {
            title: "Explicación de ajustes contables",
            text: "Escribe una carta a un cliente detallando por qué se realizó un ajuste en su contabilidad, indicando la normativa que respalda el cambio."
          },
          {
            title: "Notificación preventiva",
            text: "Redacta un mensaje preventivo para clientes sobre posibles riesgos financieros derivados de retrasos en pagos de impuestos."
          }
        ]
      },
      {
        name: "Reportes ejecutivos personalizados",
        prompts: [
          {
            title: "Reporte mensual para la gerencia",
            text: "Genera un reporte ejecutivo con resumen financiero mensual, destacando ingresos, gastos, utilidades y riesgos relevantes."
          },
          {
            title: "Reporte para inversionistas",
            text: "Prepara un reporte conciso para inversionistas con los 5 indicadores clave del trimestre, incluyendo EBITDA y flujo de caja."
          },
          {
            title: "Informe para junta directiva",
            text: "Redacta un informe ejecutivo para la junta, resaltando decisiones críticas que deben tomarse con base en los resultados."
          }
        ]
      },
      {
        name: "Presentaciones de resultados",
        prompts: [
          {
            title: "Presentación de cierre trimestral",
            text: "Diseña una presentación de PowerPoint con gráficos que expliquen los resultados financieros del trimestre. Resalta KPIs clave."
          },
          {
            title: "Presentación para clientes",
            text: "Prepara una presentación simple y clara para un cliente, mostrando cómo se justifica el valor de tus servicios."
          },
          {
            title: "Storytelling financiero",
            text: "Convierte los resultados financieros en una narrativa fácil de entender para no financieros."
          }
        ]
      },
      {
        name: "Comunicación de hallazgos de auditoría",
        prompts: [
          {
            title: "Informe de hallazgos",
            text: "Redacta un documento que explique hallazgos de auditoría a un cliente, indicando el riesgo y la acción correctiva recomendada."
          },
          {
            title: "Correo sobre irregularidades",
            text: "Prepara un correo a la gerencia detallando hallazgos críticos que requieren acción inmediata."
          },
          {
            title: "Resumen ejecutivo de auditoría",
            text: "Crea un resumen ejecutivo en lenguaje sencillo para explicar hallazgos a no expertos."
          }
        ]
      },
      {
        name: "Explicación de impactos fiscales",
        prompts: [
          {
            title: "Explicación de reforma fiscal",
            text: "Redacta una explicación sencilla sobre cómo una reforma fiscal impactará a un cliente en particular."
          },
          {
            title: "Impacto de deducciones",
            text: "Explica a un cliente cómo aprovechar deducciones específicas para optimizar su carga tributaria."
          },
          {
            title: "Aviso de cambios en retenciones",
            text: "Prepara un comunicado para clientes sobre cambios en retenciones y sus implicaciones."
          }
        ]
      }
    ]
  },

  // ==========================
  // CATEGORÍA 3
  // ==========================
  {
    id: 3,
    name: "💼 Propuestas y Cotizaciones que Cierran Negocios",
    icon: "💼",
    subcategories: [
      {
        name: "Propuestas de servicios contables",
        prompts: [
          {
            title: "Propuesta detallada de servicios",
            text: "Redacta una propuesta completa de servicios contables para una pyme, detallando alcance, beneficios, tiempos de entrega y tarifas."
          },
          {
            title: "Propuesta orientada a valor",
            text: "Elabora una propuesta de servicios contables enfocada en el valor agregado para el cliente, resaltando ahorros y beneficios."
          },
          {
            title: "Propuesta personalizada",
            text: "Crea una propuesta de servicios ajustada a un cliente del sector salud, destacando tu experiencia en ese rubro."
          }
        ]
      },
      {
        name: "Cotizaciones por paquetes de servicios",
        prompts: [
          {
            title: "Cotización básica, intermedia y premium",
            text: "Genera una tabla comparativa con 3 paquetes de servicios contables, diferenciando precios, beneficios y nivel de soporte."
          },
          {
            title: "Cotización flexible",
            text: "Diseña una cotización que permita al cliente escoger servicios individuales y formar su propio paquete."
          },
          {
            title: "Cotización estandarizada",
            text: "Elabora una cotización estándar para startups, con precios competitivos y entregables claros."
          }
        ]
      },
      {
        name: "Presentación de servicios de valor agregado",
        prompts: [
          {
            title: "Servicios de consultoría extra",
            text: "Prepara un documento que muestre servicios adicionales de consultoría financiera como parte del paquete."
          },
          {
            title: "Propuesta con diferenciadores",
            text: "Redacta una propuesta que resalte qué te diferencia de la competencia (tecnología, rapidez, experiencia)."
          },
          {
            title: "Beneficios intangibles",
            text: "Elabora una propuesta que destaque beneficios intangibles como confianza, soporte personalizado y asesoría continua."
          }
        ]
      },
      {
        name: "Justificación de honorarios",
        prompts: [
          {
            title: "Explicación de tarifas",
            text: "Redacta una justificación clara de tus honorarios mostrando el valor recibido por el cliente."
          },
          {
            title: "Comparación de honorarios",
            text: "Crea un cuadro que compare tus honorarios con el valor de mercado, resaltando beneficios adicionales."
          },
          {
            title: "Justificación orientada a resultados",
            text: "Explica cómo tus honorarios se compensan con los ahorros fiscales y eficiencia logrados."
          }
        ]
      },
      {
        name: "Contratos de servicios profesionales",
        prompts: [
          {
            title: "Contrato estándar",
            text: "Redacta un contrato de prestación de servicios contables, incluyendo alcance, confidencialidad y cláusulas de pago."
          },
          {
            title: "Contrato flexible",
            text: "Diseña un contrato que permita ajustar servicios en función del crecimiento del cliente."
          },
          {
            title: "Contrato para servicios recurrentes",
            text: "Crea un contrato enfocado en servicios mensuales recurrentes con cláusulas claras de renovación."
          }
        ]
      }
    ]
  }
];

export default promptsData;
