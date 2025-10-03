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
            title: "Análisis integral de estados financieros",
            text: "Actúa como un analista financiero senior. Analiza los estados financieros adjuntos (balance general, estado de resultados y estado de cambios en el patrimonio) de los últimos 3 años. Identifica las 5 tendencias más significativas, evalúa la salud financiera general de la empresa, y proporciona 3 recomendaciones estratégicas basadas en tu análisis. Incluye comparaciones año a año y explica el impacto de cada hallazgo en la posición competitiva de la empresa."
          },
          {
            title: "Comparación interanual de resultados",
            text: "Genera un análisis comparativo de los estados de resultados de los últimos 2 años. Identifica los cambios en ingresos, costos y gastos, destacando las áreas con mayor impacto en la utilidad neta. Explica qué factores podrían estar impulsando estas variaciones."
          }
        ]
      },
      {
        name: "Análisis de Flujo de Efectivo",
        prompts: [
          {
            title: "Evaluación de liquidez",
            text: "Analiza el estado de flujo de efectivo de los últimos 3 años para evaluar la liquidez de la empresa. Determina si la empresa está generando suficiente efectivo de sus operaciones principales para cubrir gastos e inversiones."
          },
          {
            title: "Proyección de flujo de efectivo",
            text: "Crea una proyección de flujo de efectivo para los próximos 12 meses basándote en datos históricos. Señala meses críticos con posibles déficits de liquidez y sugiere acciones preventivas."
          }
        ]
      },
      {
        name: "Evaluación de Rentabilidad por Línea de Negocio",
        prompts: [
          {
            title: "Análisis de márgenes por unidad",
            text: "Calcula y compara los márgenes de utilidad de cada línea de negocio de la empresa. Identifica cuál aporta mayor rentabilidad y cuál está generando pérdidas."
          },
          {
            title: "Identificación de líneas estratégicas",
            text: "Realiza un análisis financiero para recomendar a la gerencia en qué líneas de negocio debería invertir más y cuáles conviene descontinuar, con base en su rentabilidad."
          }
        ]
      },
      {
        name: "Análisis de Ratios Financieros",
        prompts: [
          {
            title: "Indicadores de solvencia y liquidez",
            text: "Calcula los principales ratios de solvencia y liquidez (razón corriente, razón rápida, endeudamiento). Explica qué reflejan sobre la estabilidad financiera de la empresa."
          },
          {
            title: "Indicadores de rentabilidad",
            text: "Evalúa ratios como ROA, ROE y margen neto en los últimos 3 años. Explica qué tan eficientes son las operaciones de la empresa para generar utilidades."
          }
        ]
      },
      {
        name: "Detección de Riesgos Financieros",
        prompts: [
          {
            title: "Identificación de riesgos clave",
            text: "Analiza los estados financieros para detectar riesgos relacionados con endeudamiento, liquidez o concentración de ingresos. Proporciona una lista priorizada de los 5 riesgos más relevantes."
          },
          {
            title: "Recomendaciones de mitigación",
            text: "Con base en los riesgos identificados, propone acciones concretas para mitigarlos, considerando medidas financieras, operativas y estratégicas."
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Comunicación Empresarial de Alto Impacto",
    icon: "💬",
    subcategories: [
      {
        name: "Cartas explicativas para clientes",
        prompts: [
          {
            title: "Carta de explicación de resultados",
            text: "Redacta una carta formal para un cliente explicando los resultados financieros del último trimestre. Usa un tono profesional, resalta puntos positivos y aborda áreas de mejora con propuestas claras."
          },
          {
            title: "Carta de recomendación estratégica",
            text: "Escribe una carta dirigida a la gerencia recomendando ajustes estratégicos basados en hallazgos financieros recientes. Utiliza un lenguaje persuasivo y orientado a soluciones."
          }
        ]
      },
      {
        name: "Reportes ejecutivos personalizados",
        prompts: [
          {
            title: "Resumen ejecutivo financiero",
            text: "Elabora un reporte ejecutivo de una página que resuma la situación financiera de la empresa. Incluye gráficos simplificados, hallazgos clave y recomendaciones accionables."
          },
          {
            title: "Reporte de riesgos emergentes",
            text: "Crea un informe breve para la junta directiva identificando los 3 principales riesgos emergentes que enfrenta la empresa, con una evaluación del impacto y posibles mitigaciones."
          }
        ]
      },
      {
        name: "Presentaciones de resultados",
        prompts: [
          {
            title: "Presentación trimestral de resultados",
            text: "Genera una presentación con diapositivas que resuma los resultados del último trimestre. Incluye métricas clave, análisis visuales y conclusiones estratégicas."
          },
          {
            title: "Pitch para inversionistas",
            text: "Diseña una presentación breve dirigida a potenciales inversionistas. Incluye proyecciones financieras, puntos fuertes de la empresa y estrategias de crecimiento."
          }
        ]
      },
      {
        name: "Comunicación de hallazgos de auditoría",
        prompts: [
          {
            title: "Informe claro de auditoría",
            text: "Redacta un comunicado que explique hallazgos de auditoría a un público no técnico. Simplifica el lenguaje, mantén un tono profesional y destaca acciones correctivas."
          },
          {
            title: "Resumen ejecutivo de auditoría",
            text: "Elabora un resumen breve que destaque los 3 hallazgos más relevantes de una auditoría, acompañado de recomendaciones de mejora inmediatas."
          }
        ]
      },
      {
        name: "Explicación de impactos fiscales",
        prompts: [
          {
            title: "Comunicación de cambios fiscales",
            text: "Escribe un comunicado a clientes explicando los cambios fiscales recientes que afectan sus operaciones. Usa ejemplos prácticos y un tono claro y cercano."
          },
          {
            title: "Explicación de obligaciones tributarias",
            text: "Redacta un documento para un cliente detallando sus principales obligaciones tributarias, con fechas clave y consecuencias de incumplimiento."
          }
        ]
      }
    ]
  },
  {
    id: 3,
    name: "Propuestas y Cotizaciones que Cierran Negocios",
    icon: "💼",
    subcategories: [
      {
        name: "Propuestas de servicios contables",
        prompts: [
          {
            title: "Propuesta formal de servicios",
            text: "Elabora una propuesta profesional para ofrecer servicios contables a una pyme. Incluye descripción del servicio, beneficios principales, costos y un llamado a la acción."
          },
          {
            title: "Propuesta competitiva",
            text: "Redacta una propuesta que resalte la propuesta de valor frente a competidores, destacando la experiencia del equipo, personalización del servicio y soporte continuo."
          }
        ]
      },
      {
        name: "Cotizaciones por paquetes de servicios",
        prompts: [
          {
            title: "Cotización básica vs premium",
            text: "Diseña una cotización que compare un paquete básico y uno premium de servicios contables. Incluye precios, beneficios de cada paquete y recomendaciones de elección."
          },
          {
            title: "Cotización detallada",
            text: "Genera una cotización con desglose de servicios, horas estimadas y tarifas por cada componente del paquete ofrecido."
          }
        ]
      },
      {
        name: "Presentación de servicios de valor agregado",
        prompts: [
          {
            title: "Propuesta con valor agregado",
            text: "Redacta una propuesta para un cliente potencial resaltando servicios adicionales (como asesoría estratégica o reportes personalizados) que diferencien la oferta."
          },
          {
            title: "Presentación diferenciadora",
            text: "Crea un documento de presentación que muestre cómo los servicios de la firma generan un impacto positivo en la gestión y en la toma de decisiones."
          }
        ]
      },
      {
        name: "Justificación de honorarios",
        prompts: [
          {
            title: "Explicación de estructura de tarifas",
            text: "Elabora un texto explicando cómo se calculan los honorarios contables. Resalta la relación entre calidad, tiempo dedicado y valor entregado al cliente."
          },
          {
            title: "Defensa de honorarios",
            text: "Redacta un argumento persuasivo para justificar los honorarios frente a un cliente que busca precios más bajos. Destaca la experiencia, seguridad y beneficios de trabajar con la firma."
          }
        ]
      },
      {
        name: "Contratos de servicios profesionales",
        prompts: [
          {
            title: "Contrato estándar de servicios",
            text: "Redacta un contrato sencillo de servicios contables que incluya alcances, honorarios, plazos y cláusulas de confidencialidad."
          },
          {
            title: "Contrato detallado con garantías",
            text: "Crea un contrato formal más completo que incluya niveles de servicio garantizados, obligaciones de las partes y mecanismos de resolución de conflictos."
          }
        ]
      }
    ]
  }
];

export default promptsData;
