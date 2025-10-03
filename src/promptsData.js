const promptsData = [
  {
    id: 1,
    title: "Análisis Financiero Estratégico",
    icon: "📊",
    subcategories: [
      {
        id: 1,
        title: "Interpretación de Estados Financieros",
        icon: "📑",
        prompts: [
          {
            id: 1,
            title: "Análisis Integral de Estados Financieros",
            longVersion:
              "Actúa como un analista financiero senior. Analiza los estados financieros adjuntos (balance general, estado de resultados y estado de cambios en el patrimonio) de los últimos 3 años. Identifica las 5 tendencias más significativas, evalúa la salud financiera general de la empresa, y proporciona 3 recomendaciones estratégicas basadas en tu análisis. Incluye comparaciones año a año y explica el impacto de cada hallazgo en la posición competitiva de la empresa.",
            expressVersion: ""
          },
          {
            id: 2,
            title: "Comparación Interanual de Resultados",
            longVersion:
              "Genera un análisis comparativo de los estados de resultados de los últimos 2 años. Identifica los cambios en ingresos, costos y gastos, destacando las áreas con mayor impacto en la utilidad neta. Explica qué factores podrían estar impulsando estas variaciones y su relevancia para la estrategia de negocio.",
            expressVersion: ""
          },
          {
            id: 3,
            title: "Identificación de Debilidades Financieras",
            longVersion:
              "Revisa los estados financieros y detecta 3 áreas críticas que representen riesgos para la estabilidad financiera de la empresa (ejemplo: liquidez, endeudamiento, rentabilidad). Propón una acción inmediata para mitigar cada una.",
            expressVersion: ""
          }
        ]
      },
      {
        id: 2,
        title: "Análisis de Flujo de Efectivo",
        icon: "💵",
        prompts: [
          {
            id: 4,
            title: "Diagnóstico de Flujo de Caja",
            longVersion:
              "Analiza el flujo de caja de los últimos 12 meses, identifica patrones de ingresos y egresos, y señala los 3 principales riesgos de liquidez que podrían afectar la continuidad operativa. Sugiere medidas prácticas para optimizar el flujo de caja.",
            expressVersion: ""
          },
          {
            id: 5,
            title: "Proyecciones de Flujo de Efectivo",
            longVersion:
              "Genera una proyección de flujo de efectivo a 6 meses basada en los ingresos y egresos históricos. Identifica posibles déficits de liquidez y sugiere estrategias de financiamiento preventivas.",
            expressVersion: ""
          },
          {
            id: 6,
            title: "Análisis de Ciclo de Conversión de Efectivo",
            longVersion:
              "Calcula el ciclo de conversión de efectivo de la empresa (días de inventario, días de cuentas por cobrar, días de cuentas por pagar). Evalúa si el ciclo es eficiente y propón medidas para acortarlo.",
            expressVersion: ""
          }
        ]
      },
      {
        id: 3,
        title: "Evaluación de Rentabilidad",
        icon: "📈",
        prompts: [
          {
            id: 7,
            title: "Rentabilidad por Línea de Negocio",
            longVersion:
              "Evalúa la rentabilidad de cada línea de negocio de la empresa con base en los márgenes brutos y netos. Identifica qué líneas generan mayor valor y cuáles requieren ajustes estratégicos.",
            expressVersion: ""
          },
          {
            id: 8,
            title: "Análisis de Punto de Equilibrio",
            longVersion:
              "Calcula el punto de equilibrio de la empresa considerando costos fijos y variables. Explica cuántas unidades deben venderse para cubrir gastos y alcanzar rentabilidad.",
            expressVersion: ""
          },
          {
            id: 9,
            title: "Análisis de Margen Neto",
            longVersion:
              "Analiza el margen neto de los últimos 3 años e identifica las razones de su aumento o disminución. Sugiere estrategias para incrementarlo en el próximo ejercicio.",
            expressVersion: ""
          }
        ]
      },
      {
        id: 4,
        title: "Análisis de Ratios Financieros",
        icon: "📊",
        prompts: [
          {
            id: 10,
            title: "Ratios de Liquidez",
            longVersion:
              "Calcula y analiza el ratio corriente, razón rápida y capital de trabajo. Explica qué tan solvente es la empresa en el corto plazo y recomienda acciones de mejora.",
            expressVersion: ""
          },
          {
            id: 11,
            title: "Ratios de Endeudamiento",
            longVersion:
              "Evalúa el nivel de endeudamiento de la empresa (deuda total, deuda/EBITDA). Determina si el nivel es sostenible y cómo podría impactar en futuras decisiones de inversión.",
            expressVersion: ""
          },
          {
            id: 12,
            title: "Ratios de Rentabilidad",
            longVersion:
              "Calcula y analiza el ROA, ROE y margen operativo. Interpreta qué tan eficiente es la empresa en generar beneficios a partir de sus activos y capital.",
            expressVersion: ""
          }
        ]
      },
      {
        id: 5,
        title: "Detección de Riesgos Financieros",
        icon: "⚠️",
        prompts: [
          {
            id: 13,
            title: "Mapa de Riesgos Financieros",
            longVersion:
              "Identifica los principales riesgos financieros de la empresa (ejemplo: tipo de cambio, tasas de interés, concentración de clientes). Clasifícalos en alto, medio y bajo impacto, y sugiere medidas de mitigación.",
            expressVersion: ""
          },
          {
            id: 14,
            title: "Simulación de Escenarios",
            longVersion:
              "Diseña un análisis de escenarios donde el dólar suba 15% y los costos financieros aumenten 3 puntos. Evalúa el impacto en los estados financieros y en la rentabilidad del negocio.",
            expressVersion: ""
          },
          {
            id: 15,
            title: "Evaluación de Riesgo Crediticio",
            longVersion:
              "Evalúa el riesgo crediticio de los principales clientes de la empresa y determina cómo este podría afectar la liquidez. Propón políticas de crédito y cobranza para mitigarlo.",
            expressVersion: ""
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Comunicación Empresarial de Alto Impacto",
    icon: "💬",
    subcategories: [
      {
        id: 6,
        title: "Cartas Explicativas para Clientes",
        icon: "✉️",
        prompts: [
          {
            id: 16,
            title: "Carta por Incremento de Honorarios",
            longVersion:
              "Redacta una carta formal dirigida a un cliente en la que expliques el motivo de un incremento en los honorarios contables. Incluye un lenguaje cordial, transparente y orientado a destacar el valor agregado que recibirá el cliente.",
            expressVersion: ""
          },
          {
            id: 17,
            title: "Carta de Bienvenida a Nuevo Cliente",
            longVersion:
              "Escribe una carta de bienvenida para un nuevo cliente de servicios contables. El tono debe ser profesional, cálido y dejar claras las expectativas del servicio.",
            expressVersion: ""
          },
          {
            id: 18,
            title: "Comunicación sobre Cambios Normativos",
            longVersion:
              "Redacta un aviso dirigido a clientes explicando un cambio normativo importante que afectará sus declaraciones fiscales. Usa un lenguaje claro y ejemplos prácticos.",
            expressVersion: ""
          }
        ]
      },
      {
        id: 7,
        title: "Reportes Ejecutivos Personalizados",
        icon: "📑",
        prompts: [
          {
            id: 19,
            title: "Reporte Financiero para Junta Directiva",
            longVersion:
              "Crea un reporte ejecutivo de máximo 2 páginas para la junta directiva, resumiendo la situación financiera de la empresa. Incluye 3 indicadores clave y una conclusión estratégica.",
            expressVersion: ""
          },
          {
            id: 20,
            title: "Informe para Accionistas",
            longVersion:
              "Genera un informe para accionistas que resuma el desempeño financiero anual, resaltando logros, retos y próximos pasos de la empresa.",
            expressVersion: ""
          },
          {
            id: 21,
            title: "Reporte de Gestión por Áreas",
            longVersion:
              "Elabora un reporte de gestión dividido por áreas (finanzas, operaciones, comercial). Destaca resultados clave y retos pendientes de cada área.",
            expressVersion: ""
          }
        ]
      },
      {
        id: 8,
        title: "Presentaciones de Resultados",
        icon: "📊",
        prompts: [
          {
            id: 22,
            title: "Presentación Financiera para Inversores",
            longVersion:
              "Diseña una presentación en PowerPoint para posibles inversionistas que muestre la rentabilidad y el potencial de crecimiento de la empresa. Incluye gráficos claros y mensajes persuasivos.",
            expressVersion: ""
          },
          {
            id: 23,
            title: "Presentación Trimestral para Directivos",
            longVersion:
              "Elabora una presentación trimestral para la gerencia, con gráficos de desempeño, resultados comparativos y objetivos próximos.",
            expressVersion: ""
          },
          {
            id: 24,
            title: "Pitch de Negocio",
            longVersion:
              "Prepara un pitch de 5 minutos que resuma la propuesta de valor de la empresa y convenza a potenciales socios estratégicos.",
            expressVersion: ""
          }
        ]
      },
      {
        id: 9,
        title: "Comunicación de Hallazgos de Auditoría",
        icon: "🔎",
        prompts: [
          {
            id: 25,
            title: "Informe de Hallazgos a Cliente",
            longVersion:
              "Redacta un informe para un cliente resumiendo los principales hallazgos de una auditoría financiera. Usa un tono profesional y constructivo, proponiendo soluciones.",
            expressVersion: ""
          },
          {
            id: 26,
            title: "Carta de Seguimiento de Auditoría",
            longVersion:
              "Escribe una carta de seguimiento a un cliente que no ha atendido recomendaciones de auditoría, enfatizando la importancia de su implementación.",
            expressVersion: ""
          },
          {
            id: 27,
            title: "Comunicación de Irregularidades",
            longVersion:
              "Redacta una comunicación formal para informar a un cliente sobre irregularidades graves detectadas en un proceso contable.",
            expressVersion: ""
          }
        ]
      },
      {
        id: 10,
        title: "Explicación de Impactos Fiscales",
        icon: "💡",
        prompts: [
          {
            id: 28,
            title: "Explicación de Nuevo Impuesto",
            longVersion:
              "Redacta un comunicado a clientes explicando la entrada en vigor de un nuevo impuesto. Incluye ejemplos de cómo impactará en diferentes tipos de empresas.",
            expressVersion: ""
          },
          {
            id: 29,
            title: "Impacto Fiscal de Cambios en Ley",
            longVersion:
              "Explica a un cliente cómo un cambio reciente en la ley tributaria impactará su próxima declaración anual.",
            expressVersion: ""
          },
          {
            id: 30,
            title: "Memo Interno sobre Obligaciones Fiscales",
            longVersion:
              "Elabora un memo interno para empleados del área contable recordando las principales obligaciones fiscales del próximo trimestre.",
            expressVersion: ""
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Propuestas y Cotizaciones que Cierran Negocios",
    icon: "💼",
    subcategories: [
      {
        id: 11,
        title: "Propuestas de Servicios Contables",
        icon: "📃",
        prompts: [
          {
            id: 31,
            title: "Propuesta Formal de Servicios",
            longVersion:
              "Crea una propuesta formal para ofrecer servicios contables a una empresa mediana. Incluye introducción, alcance de servicios, beneficios diferenciadores, inversión y llamado a la acción.",
            expressVersion: ""
          },
          {
            id: 32,
            title: "Propuesta de Servicios Personalizados",
            longVersion:
              "Redacta una propuesta para un cliente que solicita un paquete de servicios a la medida. Incluye un desglose de actividades, tiempos de entrega y beneficios esperados.",
            expressVersion: ""
          },
          {
            id: 33,
            title: "Propuesta de Auditoría",
            longVersion:
              "Redacta una propuesta comercial para realizar una auditoría financiera, destacando la importancia de la transparencia y cumplimiento normativo.",
            expressVersion: ""
          }
        ]
      },
      {
        id: 12,
        title: "Cotizaciones por Paquetes de Servicios",
        icon: "💲",
        prompts: [
          {
            id: 34,
            title: "Cotización Detallada de Honorarios",
            longVersion:
              "Elabora una cotización estructurada que detalle honorarios contables por servicio, condiciones de pago y plazos de entrega.",
            expressVersion: ""
          },
          {
            id: 35,
            title: "Cotización Comparativa",
            longVersion:
              "Redacta una cotización que incluya dos alternativas de servicio con distintos niveles de alcance y precio, destacando beneficios de cada una.",
            expressVersion: ""
          },
          {
            id: 36,
            title: "Cotización de Paquete Integral",
            longVersion:
              "Prepara una cotización de un paquete integral que incluya contabilidad mensual, declaraciones fiscales y asesoría financiera trimestral.",
            expressVersion: ""
          }
        ]
      },
      {
        id: 13,
        title: "Presentación de Servicios de Valor Agregado",
        icon: "✨",
        prompts: [
          {
            id: 37,
            title: "Presentación de Servicios Premium",
            longVersion:
              "Elabora una presentación comercial para destacar servicios premium que ofrecen mayor valor agregado, como reportes personalizados y análisis predictivo.",
            expressVersion: ""
          },
          {
            id: 38,
            title: "Presentación de Asesoría Especializada",
            longVersion:
              "Crea un documento que resuma los beneficios de contratar asesoría fiscal especializada frente a un servicio contable estándar.",
            expressVersion: ""
          },
          {
            id: 39,
            title: "Presentación de Servicios Digitales",
            longVersion:
              "Diseña una propuesta de servicios contables digitales, explicando ventajas como disponibilidad en la nube y acceso en tiempo real.",
            expressVersion: ""
          }
        ]
      },
      {
        id: 14,
        title: "Justificación de Honorarios",
        icon: "📌",
        prompts: [
          {
            id: 40,
            title: "Justificación ante Cliente",
            longVersion:
              "Redacta un documento para justificar ante un cliente por qué tus honorarios son más altos que los de la competencia, destacando calidad, confiabilidad y beneficios.",
            expressVersion: ""
          },
          {
            id: 41,
            title: "Explicación de Incremento de Honorarios",
            longVersion:
              "Crea una explicación clara para un cliente habitual sobre el incremento de honorarios anuales, enfatizando mejoras en el servicio y cambios normativos.",
            expressVersion: ""
          },
          {
            id: 42,
            title: "Justificación ante Propuesta",
            longVersion:
              "Incluye en una propuesta de servicios una sección que justifique los honorarios con base en experiencia, certificaciones y respaldo técnico.",
            expressVersion: ""
          }
        ]
      },
      {
        id: 15,
        title: "Contratos de Servicios Profesionales",
        icon: "📜",
        prompts: [
          {
            id: 43,
            title: "Contrato Básico de Servicios Contables",
            longVersion:
              "Redacta un contrato de servicios contables que incluya objeto, alcance, obligaciones de las partes, honorarios y condiciones de terminación.",
            expressVersion: ""
          },
          {
            id: 44,
            title: "Contrato con Cláusulas de Confidencialidad",
            longVersion:
              "Prepara un contrato de servicios profesionales que incluya cláusulas específicas de confidencialidad para proteger información sensible.",
            expressVersion: ""
          },
          {
            id: 45,
            title: "Contrato de Servicios Integrales",
            longVersion:
              "Redacta un contrato integral de servicios contables que contemple contabilidad mensual, auditoría interna y reportes financieros trimestrales.",
            expressVersion: ""
          }
        ]
      }
    ]
  }
];

export default promptsData;
