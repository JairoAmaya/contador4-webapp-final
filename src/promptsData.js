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
            title: "Análisis Integral",
            text: "Actúa como un analista financiero senior. Analiza los estados financieros adjuntos (balance general, estado de resultados y estado de cambios en el patrimonio) de los últimos 3 años. Identifica las 5 tendencias más significativas, evalúa la salud financiera general de la empresa, y proporciona 3 recomendaciones estratégicas basadas en tu análisis. Incluye comparaciones año a año y explica el impacto de cada hallazgo en la posición competitiva de la empresa.",
            express: ""
          },
          {
            title: "Hallazgos Clave",
            text: "Revisa los estados financieros y resume en máximo 5 puntos los hallazgos clave que un gerente general debe conocer. Destaca fortalezas y debilidades con un lenguaje claro y ejecutivo.",
            express: ""
          },
          {
            title: "Informe Comparativo",
            text: "Genera un informe comparativo entre dos períodos de estados financieros. Identifica variaciones relevantes y explica posibles causas. Sugiere acciones correctivas donde sea necesario.",
            express: ""
          }
        ]
      },
      {
        name: "Análisis de flujo de efectivo",
        prompts: [
          {
            title: "Evaluación de Flujo Operativo",
            text: "Analiza el flujo de efectivo de las actividades operativas de la empresa. Explica si el negocio está generando suficiente efectivo de sus operaciones principales para ser sostenible en el tiempo.",
            express: ""
          },
          {
            title: "Riesgos de Liquidez",
            text: "A partir del flujo de efectivo, identifica riesgos de liquidez. Señala si la empresa depende excesivamente de financiamiento externo o de venta de activos para sostenerse.",
            express: ""
          },
          {
            title: "Recomendaciones de Tesorería",
            text: "Con base en el flujo de efectivo, da 3 recomendaciones prácticas para mejorar la gestión de tesorería de la empresa (ejemplo: plazos de cobro, negociación con proveedores, control de gastos).",
            express: ""
          }
        ]
      },
      {
        name: "Evaluación de rentabilidad por línea de negocio",
        prompts: [
          {
            title: "Ranking de Rentabilidad",
            text: "Analiza las diferentes líneas de negocio de la empresa. Genera un ranking de mayor a menor rentabilidad, explica brevemente las razones detrás de cada resultado y su impacto en la estrategia.",
            express: ""
          },
          {
            title: "Alertas de Bajo Rendimiento",
            text: "Identifica aquellas líneas de negocio cuya rentabilidad es inferior al promedio del mercado o al objetivo interno. Explica por qué y propone acciones inmediatas.",
            express: ""
          },
          {
            title: "Optimización de Portafolio",
            text: "Sugiere cómo redistribuir recursos entre líneas de negocio para maximizar el margen global de la compañía, basándote en el análisis de rentabilidad actual.",
            express: ""
          }
        ]
      },
      {
        name: "Análisis de ratios financieros",
        prompts: [
          {
            title: "Ratios Clave",
            text: "Calcula e interpreta los principales ratios financieros de la empresa (liquidez, endeudamiento, rentabilidad, rotación). Resume su significado en un lenguaje simple y claro para directivos no financieros.",
            express: ""
          },
          {
            title: "Comparación con Competencia",
            text: "Compara los ratios financieros de la empresa con los promedios de la industria. Identifica fortalezas competitivas y áreas críticas de mejora.",
            express: ""
          },
          {
            title: "Alertas Automáticas",
            text: "Diseña un sistema de alertas que indique si alguno de los ratios financieros cae por debajo de un umbral crítico. Sugiere valores de referencia según buenas prácticas.",
            express: ""
          }
        ]
      },
      {
        name: "Detección de riesgos financieros",
        prompts: [
          {
            title: "Mapa de Riesgos",
            text: "Identifica los principales riesgos financieros de la empresa (liquidez, crédito, mercado, operacional). Clasifícalos según impacto y probabilidad en una matriz de riesgos.",
            express: ""
          },
          {
            title: "Escenarios de Crisis",
            text: "Plantea 2 escenarios adversos (ejemplo: caída de ventas del 20%, incremento de tasas de interés). Explica cómo afectarían las finanzas de la empresa y propone medidas de mitigación.",
            express: ""
          },
          {
            title: "Recomendaciones de Control",
            text: "Sugiere controles internos y políticas de gestión que ayuden a reducir los riesgos financieros previamente identificados.",
            express: ""
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "💬 Comunicación Empresarial de Alto Impacto",
    icon: "💬",
    subcategories: [
      {
        name: "Cartas explicativas para clientes",
        prompts: [
          {
            title: "Carta Explicativa Formal",
            text: "Redacta una carta dirigida a un cliente explicando las principales diferencias entre la utilidad contable y la utilidad fiscal. Usa un lenguaje claro y profesional, incluye un ejemplo sencillo y concluye resaltando la importancia de ambas métricas para la gestión empresarial.",
            express: ""
          },
          {
            title: "Explicación de Ajustes",
            text: "Genera una carta breve para un cliente explicando por qué su factura incluye un ajuste por diferencia de cambio. Hazlo con tono cercano, evitando tecnicismos innecesarios.",
            express: ""
          },
          {
            title: "Carta de Resultados",
            text: "Redacta un comunicado explicando al cliente sus resultados financieros del trimestre. Presenta los puntos positivos, las oportunidades de mejora y un cierre motivador.",
            express: ""
          }
        ]
      },
      {
        name: "Reportes ejecutivos personalizados",
        prompts: [
          {
            title: "Reporte Ejecutivo",
            text: "Elabora un reporte ejecutivo de una página que resuma el desempeño financiero del último trimestre. Incluye: principales indicadores, riesgos detectados y 3 recomendaciones clave. Usa lenguaje visual con viñetas o listas.",
            express: ""
          },
          {
            title: "Resumen para Junta Directiva",
            text: "Prepara un resumen ejecutivo para junta directiva. Destaca únicamente la información crítica: flujo de caja, rentabilidad y riesgos. Usa tono objetivo y orientado a decisiones.",
            express: ""
          },
          {
            title: "Informe Visual",
            text: "Crea un informe financiero con tablas o gráficos sencillos que faciliten la lectura. Resume en menos de una página y usa un lenguaje apto para no financieros.",
            express: ""
          }
        ]
      },
      {
        name: "Presentaciones de resultados",
        prompts: [
          {
            title: "Presentación Corta",
            text: "Diseña una presentación de 5 diapositivas que muestre resultados financieros trimestrales. Incluye portada, resumen ejecutivo, resultados clave, riesgos y recomendaciones.",
            express: ""
          },
          {
            title: "Diapositivas Visuales",
            text: "Crea diapositivas para explicar a un cliente cómo evolucionaron sus ingresos, gastos y utilidad en el último año. Usa títulos breves y datos destacados.",
            express: ""
          },
          {
            title: "Pitch para Inversionistas",
            text: "Genera una presentación breve dirigida a inversionistas potenciales. Resume indicadores financieros, proyecciones de crecimiento y estrategias de expansión.",
            express: ""
          }
        ]
      },
      {
        name: "Comunicación de hallazgos de auditoría",
        prompts: [
          {
            title: "Informe de Hallazgos",
            text: "Redacta un informe claro y breve para comunicar al cliente los hallazgos de una auditoría interna. Incluye: descripción del hallazgo, riesgo asociado y recomendación.",
            express: ""
          },
          {
            title: "Resumen Ejecutivo de Auditoría",
            text: "Elabora un resumen de media página explicando los 3 hallazgos más críticos de la auditoría y cómo afectan a la empresa. Usa lenguaje ejecutivo.",
            express: ""
          },
          {
            title: "Comunicación Positiva",
            text: "Crea un comunicado de auditoría resaltando fortalezas detectadas y recomendaciones de mejora, con tono constructivo.",
            express: ""
          }
        ]
      },
      {
        name: "Explicación de impactos fiscales",
        prompts: [
          {
            title: "Explicación Técnica",
            text: "Redacta un informe para explicar a un cliente cómo el cambio en la tarifa del impuesto de renta afecta su planeación financiera anual. Incluye ejemplos numéricos.",
            express: ""
          },
          {
            title: "Impacto en Proyección",
            text: "Elabora un memo interno explicando cómo los cambios en IVA afectan el flujo de caja proyectado. Usa lenguaje técnico pero conciso.",
            express: ""
          },
          {
            title: "Explicación para No Financieros",
            text: "Prepara un texto sencillo para clientes sin conocimientos contables explicando el impacto de una nueva normativa fiscal en sus finanzas personales o empresariales.",
            express: ""
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
            title: "Propuesta Integral",
            text: "Redacta una propuesta de servicios contables que incluya descripción de servicios, beneficios para el cliente, metodología de trabajo y costos estimados. Usa un tono persuasivo y profesional.",
            express: ""
          },
          {
            title: "Propuesta Corta",
            text: "Genera una propuesta breve en máximo media página para un cliente que ya conoce tus servicios. Resalta diferenciadores clave y valor agregado.",
            express: ""
          },
          {
            title: "Propuesta Comparativa",
            text: "Elabora una propuesta comparando dos alternativas de servicio (básico vs. premium). Explica claramente las diferencias y beneficios de cada opción.",
            express: ""
          }
        ]
      },
      {
        name: "Cotizaciones por paquetes de servicios",
        prompts: [
          {
            title: "Cotización Detallada",
            text: "Crea una cotización que presente 3 paquetes de servicios contables (básico, estándar y premium). Incluye precios, beneficios y condiciones de pago.",
            express: ""
          },
          {
            title: "Cotización Resumida",
            text: "Elabora una tabla comparativa sencilla de precios y servicios incluidos en diferentes paquetes. Hazla clara y visual.",
            express: ""
          },
          {
            title: "Propuesta de Paquete Flexible",
            text: "Diseña una cotización que permita al cliente armar su propio paquete de servicios a partir de un menú de opciones.",
            express: ""
          }
        ]
      },
      {
        name: "Presentación de servicios de valor agregado",
        prompts: [
          {
            title: "Servicios Diferenciales",
            text: "Redacta un texto que explique al cliente cuáles son los servicios de valor agregado que tu firma contable ofrece y cómo lo diferencian de la competencia.",
            express: ""
          },
          {
            title: "Beneficios Clave",
            text: "Prepara un listado con los 5 beneficios principales que obtiene un cliente al contratar los servicios contables con tu firma.",
            express: ""
          },
          {
            title: "Caso de Éxito",
            text: "Elabora un caso de éxito breve de un cliente que haya mejorado sus finanzas gracias a los servicios adicionales que tu firma proporciona.",
            express: ""
          }
        ]
      },
      {
        name: "Justificación de honorarios",
        prompts: [
          {
            title: "Explicación de Valor",
            text: "Redacta un documento que explique a un cliente por qué los honorarios de tu firma son justificados. Enfatiza calidad, experiencia, resultados y valor agregado.",
            express: ""
          },
          {
            title: "Comparativo de Honorarios",
            text: "Elabora un cuadro comparativo que muestre qué incluye tu firma en sus honorarios frente a otras opciones más económicas.",
            express: ""
          },
          {
            title: "Carta de Justificación",
            text: "Genera una carta formal explicando los honorarios de un servicio contable específico, resaltando la experiencia y el impacto esperado para el cliente.",
            express: ""
          }
        ]
      },
      {
        name: "Contratos de servicios profesionales",
        prompts: [
          {
            title: "Contrato Básico",
            text: "Elabora un contrato de servicios profesionales contables que incluya objeto, obligaciones, honorarios, duración y causales de terminación.",
            express: ""
          },
          {
            title: "Contrato Detallado",
            text: "Genera un contrato más completo con cláusulas de confidencialidad, propiedad intelectual y solución de controversias.",
            express: ""
          },
          {
            title: "Carta de Aceptación",
            text: "Redacta una carta simple para que un cliente acepte los términos de un contrato de servicios contables. Mantén un tono cordial y formal.",
            express: ""
          }
        ]
      }
    ]
  }
];

export default promptsData;
