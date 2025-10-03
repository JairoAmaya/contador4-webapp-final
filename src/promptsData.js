// promptsData.js

const promptsData = [
  {
    id: 1,
    name: "📊 Análisis Financiero Estratégico",
    icon: "📊",
    subcategories: [
      {
        name: "Interpretación de Estados Financieros",
        prompts: [
          {
            title: "Análisis integral de estados financieros",
            longText: "Actúa como un analista financiero senior. Analiza los estados financieros adjuntos (balance general, estado de resultados y estado de cambios en el patrimonio) de los últimos 3 años. Identifica las 5 tendencias más significativas, evalúa la salud financiera general de la empresa, y proporciona 3 recomendaciones estratégicas basadas en tu análisis. Incluye comparaciones año a año y explica el impacto de cada hallazgo en la posición competitiva de la empresa.",
            expressText: ""
          },
          {
            title: "Comparación interanual de resultados",
            longText: "Genera un análisis comparativo de los estados de resultados de los últimos 2 años. Identifica los cambios en ingresos, costos y gastos, destacando las áreas con mayor impacto en la utilidad neta. Explica qué factores podrían estar impulsando estas variaciones.",
            expressText: ""
          },
          {
            title: "Identificación de debilidades financieras",
            longText: "Revisa los estados financieros y detecta 3 áreas críticas que representen riesgos para la estabilidad financiera de la empresa (ejemplo: liquidez, endeudamiento, rentabilidad). Propón una acción inmediata para mitigar cada una.",
            expressText: ""
          }
        ]
      },
      {
        name: "Análisis de Flujo de Efectivo",
        prompts: [
          {
            title: "Evaluación de flujos operativos",
            longText: "Examina el estado de flujos de efectivo de los últimos 2 años. Determina si la empresa está generando suficiente flujo operativo para sostener sus operaciones y obligaciones financieras. Proporciona 2 recomendaciones de mejora si el flujo es insuficiente.",
            expressText: ""
          },
          {
            title: "Análisis de liquidez",
            longText: "Evalúa la liquidez de la empresa con base en sus flujos de efectivo y obligaciones de corto plazo. Sugiere estrategias para mejorar la capacidad de pago inmediato sin afectar las operaciones.",
            expressText: ""
          },
          {
            title: "Detección de patrones de flujo",
            longText: "Identifica patrones en los flujos de efectivo (ejemplo: estacionalidad, retrasos de clientes, acumulación de inventario). Explica cómo estos patrones afectan la estabilidad financiera y cómo podrían gestionarse mejor.",
            expressText: ""
          }
        ]
      },
      {
        name: "Evaluación de Rentabilidad por Línea de Negocio",
        prompts: [
          {
            title: "Análisis de márgenes por unidad",
            longText: "Calcula y compara los márgenes de utilidad de cada línea de negocio de la empresa. Identifica cuál aporta mayor rentabilidad y cuál está generando pérdidas.",
            expressText: ""
          },
          {
            title: "Identificación de líneas estratégicas",
            longText: "Realiza un análisis financiero para recomendar a la gerencia en qué líneas de negocio debería invertir más y cuáles conviene descontinuar, con base en su rentabilidad.",
            expressText: ""
          },
          {
            title: "Rentabilidad futura",
            longText: "Usa datos históricos de rentabilidad para proyectar el rendimiento de las diferentes líneas de negocio en los próximos 2 años. Sugiere ajustes estratégicos según los resultados.",
            expressText: ""
          }
        ]
      },
      {
        name: "Análisis de Ratios Financieros",
        prompts: [
          {
            title: "Análisis de liquidez",
            longText: "Calcula los principales indicadores de liquidez (razón corriente, razón rápida) a partir de los estados financieros. Evalúa si la empresa tiene la capacidad de cubrir sus pasivos de corto plazo.",
            expressText: ""
          },
          {
            title: "Análisis de endeudamiento",
            longText: "Evalúa los ratios de endeudamiento de la empresa y determina si el nivel de deuda actual es sostenible. Compara con estándares del sector.",
            expressText: ""
          },
          {
            title: "Análisis de rentabilidad",
            longText: "Calcula los indicadores de rentabilidad (ROA, ROE, margen neto) y explica qué tan eficiente es la empresa en generar beneficios sobre sus activos y capital.",
            expressText: ""
          }
        ]
      },
      {
        name: "Detección de Riesgos Financieros",
        prompts: [
          {
            title: "Identificación de riesgos de crédito",
            longText: "Analiza la cartera de cuentas por cobrar y detecta señales de riesgo de incobrabilidad. Propón medidas para mitigar este riesgo.",
            expressText: ""
          },
          {
            title: "Riesgos de liquidez",
            longText: "Detecta posibles riesgos de liquidez derivados de los flujos de efectivo y compromisos financieros. Propón estrategias para asegurar la solvencia a corto plazo.",
            expressText: ""
          },
          {
            title: "Riesgos estratégicos",
            longText: "Evalúa los riesgos financieros externos (inflación, variación de tasas, tipo de cambio) que puedan impactar en la empresa. Sugiere 2 estrategias de cobertura o mitigación.",
            expressText: ""
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
            title: "Carta formal por incremento de honorarios",
            longText: "Redacta una carta formal dirigida a un cliente en la que expliques el motivo de un incremento en los honorarios contables. Incluye un lenguaje cordial, transparente y orientado a destacar el valor agregado que recibirá el cliente.",
            expressText: ""
          },
          {
            title: "Correo explicativo por retrasos",
            longText: "Crea un correo explicativo para un cliente que presenta retrasos recurrentes en la entrega de documentos. El mensaje debe ser firme pero respetuoso, resaltando la importancia de cumplir con los plazos para evitar sanciones fiscales.",
            expressText: ""
          },
          {
            title: "Justificación de un error",
            longText: "Redacta un comunicado breve a un cliente para explicar un error en un reporte financiero. El tono debe ser profesional y enfocado en la solución inmediata que se implementará.",
            expressText: ""
          }
        ]
      },
      {
        name: "Reportes ejecutivos personalizados",
        prompts: [
          {
            title: "Reporte ejecutivo trimestral",
            longText: "Elabora un resumen ejecutivo de los estados financieros del último trimestre. Resalta los principales logros, retos y riesgos detectados, en un formato claro y orientado a la toma de decisiones.",
            expressText: ""
          },
          {
            title: "Informe financiero para junta",
            longText: "Prepara un informe financiero conciso para presentar en una reunión de junta directiva. Debe incluir indicadores clave de desempeño (KPI) y recomendaciones estratégicas.",
            expressText: ""
          },
          {
            title: "Reporte para inversionistas",
            longText: "Crea un reporte atractivo para inversionistas potenciales en el que se destaquen fortalezas financieras, proyecciones y planes de crecimiento.",
            expressText: ""
          }
        ]
      },
      {
        name: "Presentaciones de resultados",
        prompts: [
          {
            title: "Presentación para comité directivo",
            longText: "Diseña una presentación de resultados financieros para un comité directivo. Usa un lenguaje ejecutivo y resalta los indicadores clave con recomendaciones accionables.",
            expressText: ""
          },
          {
            title: "Presentación a clientes",
            longText: "Prepara una presentación clara y profesional para un cliente, explicando los resultados financieros de su empresa y sugerencias de mejora.",
            expressText: ""
          },
          {
            title: "Resumen visual de resultados",
            longText: "Crea un esquema visual (bullets o gráfico simple) que resuma los resultados del último trimestre, destacando ingresos, gastos y utilidad neta.",
            expressText: ""
          }
        ]
      },
      {
        name: "Comunicación de hallazgos de auditoría",
        prompts: [
          {
            title: "Informe de hallazgos",
            longText: "Redacta un informe formal en el que comuniques a la gerencia los principales hallazgos de una auditoría interna, explicando riesgos y recomendaciones.",
            expressText: ""
          },
          {
            title: "Correo a cliente con hallazgo",
            longText: "Redacta un correo dirigido a un cliente donde expliques un hallazgo menor en la auditoría y cómo se está solucionando.",
            expressText: ""
          },
          {
            title: "Resumen ejecutivo de auditoría",
            longText: "Elabora un resumen ejecutivo para la junta directiva sobre los resultados de la auditoría, destacando riesgos críticos y acciones correctivas.",
            expressText: ""
          }
        ]
      },
      {
        name: "Explicación de impactos fiscales",
        prompts: [
          {
            title: "Explicación de cambios fiscales",
            longText: "Crea un comunicado para clientes explicando un cambio reciente en la normativa fiscal y cómo impacta en sus operaciones.",
            expressText: ""
          },
          {
            title: "Impacto de reforma fiscal",
            longText: "Redacta un análisis breve dirigido a empresarios explicando el impacto de una reforma fiscal en sus obligaciones tributarias.",
            expressText: ""
          },
          {
            title: "Nota informativa para clientes",
            longText: "Prepara una nota informativa clara y sencilla sobre un ajuste fiscal que afectará a los contribuyentes en el próximo período.",
            expressText: ""
          }
        ]
      }
    ]
  },
  {
    id: 3,
    name: "📑 Propuestas y Cotizaciones que Cierran Negocios",
    icon: "📑",
    subcategories: [
      {
        name: "Propuestas de servicios contables",
        prompts: [
          {
            title: "Propuesta de servicios completa",
            longText: "Elabora una propuesta de servicios contables detallada para un cliente potencial. Incluye el alcance de los servicios, beneficios clave y un enfoque orientado al valor agregado.",
            expressText: ""
          },
          {
            title: "Propuesta breve",
            longText: "Redacta una propuesta corta de servicios contables dirigida a una pyme, resaltando los beneficios inmediatos y diferenciadores.",
            expressText: ""
          },
          {
            title: "Propuesta con enfoque estratégico",
            longText: "Diseña una propuesta de servicios que no solo incluya cumplimiento normativo, sino también asesoría estratégica para impulsar el crecimiento empresarial.",
            expressText: ""
          }
        ]
      },
      {
        name: "Cotizaciones por paquetes de servicios",
        prompts: [
          {
            title: "Cotización básica",
            longText: "Genera una cotización para un paquete básico de servicios contables (ejemplo: declaraciones mensuales, contabilidad general).",
            expressText: ""
          },
          {
            title: "Cotización intermedia",
            longText: "Crea una cotización para un paquete intermedio de servicios contables que incluya análisis financieros trimestrales y reportes personalizados.",
            expressText: ""
          },
          {
            title: "Cotización premium",
            longText: "Redacta una cotización para un paquete premium que incluya asesoría estratégica mensual, reportes detallados y acompañamiento en auditorías.",
            expressText: ""
          }
        ]
      },
      {
        name: "Presentación de servicios de valor agregado",
        prompts: [
          {
            title: "Propuesta de valor",
            longText: "Redacta una sección de propuesta en la que expliques a un cliente el valor agregado de contratar tus servicios contables frente a la competencia.",
            expressText: ""
          },
          {
            title: "Beneficios estratégicos",
            longText: "Explica cómo tus servicios contables pueden ayudar a la empresa cliente a mejorar su rentabilidad, eficiencia y toma de decisiones.",
            expressText: ""
          },
          {
            title: "Propuesta con diferenciador",
            longText: "Incluye en tu propuesta un elemento diferenciador (ejemplo: tecnología, asesoría proactiva) que haga más atractiva la contratación.",
            expressText: ""
          }
        ]
      },
      {
        name: "Justificación de honorarios",
        prompts: [
          {
            title: "Explicación de honorarios",
            longText: "Redacta un texto para explicar a un cliente por qué los honorarios propuestos son justos y están alineados con el valor y la experiencia ofrecida.",
            expressText: ""
          },
          {
            title: "Comparación de honorarios",
            longText: "Elabora una explicación en la que compares los honorarios propuestos con los beneficios tangibles que recibirá el cliente.",
            expressText: ""
          },
          {
            title: "Justificación estratégica",
            longText: "Escribe una justificación de honorarios que muestre cómo la inversión en tus servicios genera un retorno superior al costo.",
            expressText: ""
          }
        ]
      },
      {
        name: "Contratos de servicios profesionales",
        prompts: [
          {
            title: "Contrato básico",
            longText: "Redacta un contrato simple de servicios contables que incluya duración, alcance, honorarios y cláusulas básicas de confidencialidad.",
            expressText: ""
          },
          {
            title: "Contrato detallado",
            longText: "Crea un contrato de servicios contables más detallado, incluyendo términos de pago, responsabilidades, entregables y resolución de conflictos.",
            expressText: ""
          },
          {
            title: "Contrato premium",
            longText: "Redacta un contrato premium para servicios de alto nivel, incluyendo cláusulas de exclusividad, métricas de desempeño y beneficios adicionales para el cliente.",
            expressText: ""
          }
        ]
      }
    ]
  }
];

export default promptsData;
