const promptsData = [
  {
    id: 1,
    name: "Análisis Financiero Estratégico",
    icon: "📊",
    subcategories: [
      {
        name: "Interpretación de estados financieros",
        prompts: [
          {
            title: "Prompt 01",
            long: "Actúa como un analista financiero senior. Analiza los estados financieros adjuntos (balance general, estado de resultados y estado de cambios en el patrimonio) de los últimos 3 años. Identifica las 5 tendencias más significativas, evalúa la salud financiera general de la empresa, y proporciona 3 recomendaciones estratégicas basadas en tu análisis. Incluye comparaciones año a año y explica el impacto de cada hallazgo en la posición competitiva de la empresa.",
            express: ""
          },
          {
            title: "Prompt 02",
            long: "Eres un consultor financiero experto. A partir del estado de resultados de los últimos 2 años, identifica los 3 rubros de ingresos y gastos más críticos que influyen en la utilidad neta. Explica con ejemplos cómo optimizar cada uno para aumentar la rentabilidad de la empresa en los próximos 12 meses.",
            express: ""
          },
          {
            title: "Prompt 03",
            long: "Analiza la relación entre activos corrientes y pasivos corrientes de la empresa (razón corriente y prueba ácida). Evalúa si la organización tiene liquidez suficiente para cubrir sus obligaciones de corto plazo. Con base en tus hallazgos, redacta un informe ejecutivo con 2 escenarios de mejora.",
            express: ""
          }
        ]
      },
      {
        name: "Análisis de flujo de efectivo",
        prompts: [
          {
            title: "Prompt 04",
            long: "Eres un analista financiero especializado en flujos de efectivo. Examina los últimos 3 estados de flujo de efectivo de la empresa. Identifica cuál de las 3 actividades (operación, inversión o financiamiento) presenta mayor riesgo. Redacta un resumen ejecutivo en menos de 200 palabras con recomendaciones accionables.",
            express: ""
          },
          {
            title: "Prompt 05",
            long: "Con base en el flujo de efectivo operativo de la compañía, determina si este es suficiente para cubrir el servicio de deuda proyectado para los próximos 12 meses. Indica al menos 2 alternativas de financiamiento en caso de déficit.",
            express: ""
          },
          {
            title: "Prompt 06",
            long: "Redacta un informe explicativo para la junta directiva sobre cómo las decisiones de inversión de los últimos 2 años han impactado el flujo de efectivo. Propón 3 ajustes estratégicos para mejorar el balance entre liquidez y crecimiento.",
            express: ""
          }
        ]
      },
      {
        name: "Evaluación de rentabilidad por línea de negocio",
        prompts: [
          {
            title: "Prompt 07",
            long: "Analiza la rentabilidad por línea de negocio utilizando los márgenes brutos y netos. Identifica las 2 líneas más rentables y las 2 menos rentables. Redacta un plan de acción con recomendaciones para potenciar las más fuertes y optimizar las débiles.",
            express: ""
          },
          {
            title: "Prompt 08",
            long: "Eres consultor financiero de una firma de servicios. A partir de la información de ingresos y costos por unidad de negocio, prepara un reporte para la gerencia en el que se determine qué líneas deben expandirse y cuáles deben reestructurarse.",
            express: ""
          },
          {
            title: "Prompt 09",
            long: "Compara la rentabilidad de las distintas líneas de negocio con el promedio de la industria. Redacta un diagnóstico con fortalezas, debilidades y recomendaciones concretas para mejorar la competitividad de la compañía.",
            express: ""
          }
        ]
      },
      {
        name: "Análisis de ratios financieros",
        prompts: [
          {
            title: "Prompt 10",
            long: "Calcula y analiza los principales ratios financieros de la compañía: liquidez, endeudamiento, rentabilidad y eficiencia. Explica qué tan sólida es la empresa frente a sus competidores y qué decisiones inmediatas debería tomar la gerencia.",
            express: ""
          },
          {
            title: "Prompt 11",
            long: "Elabora un informe ejecutivo en el que expliques cómo ha evolucionado el ROE (retorno sobre el patrimonio) y el ROA (retorno sobre activos) en los últimos 3 años. Indica si la compañía está generando valor para sus accionistas.",
            express: ""
          },
          {
            title: "Prompt 12",
            long: "Prepara un diagnóstico integral de los ratios de endeudamiento de la empresa. Evalúa el nivel de riesgo financiero e incluye 2 estrategias para optimizar la estructura de capital.",
            express: ""
          }
        ]
      },
      {
        name: "Detección de riesgos financieros",
        prompts: [
          {
            title: "Prompt 13",
            long: "Eres especialista en gestión de riesgos. A partir de los estados financieros y flujos de efectivo de la empresa, identifica los 5 principales riesgos financieros que enfrenta. Clasifícalos en alto, medio y bajo, y sugiere planes de mitigación.",
            express: ""
          },
          {
            title: "Prompt 14",
            long: "Redacta un reporte para la alta dirección sobre el riesgo cambiario que enfrenta la empresa debido a sus operaciones internacionales. Incluye 2 estrategias de cobertura para mitigar el impacto.",
            express: ""
          },
          {
            title: "Prompt 15",
            long: "Analiza el riesgo de concentración de clientes: ¿qué pasaría si el principal cliente que representa más del 30% de los ingresos dejara de comprar? Propón 3 alternativas de diversificación.",
            express: ""
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Comunicación Empresarial de Alto Impacto",
    icon: "✉️",
    subcategories: [
      {
        name: "Cartas explicativas para clientes",
        prompts: [
          {
            title: "Prompt 16",
            long: "Redacta una carta formal dirigida a un cliente en la que expliques el motivo de un incremento en los honorarios contables. Incluye un lenguaje cordial, transparente y orientado a destacar el valor agregado que recibirá el cliente.",
            express: ""
          },
          {
            title: "Prompt 17",
            long: "Crea un correo explicativo para un cliente que presenta retrasos recurrentes en la entrega de documentos. El mensaje debe ser firme pero respetuoso, resaltando la importancia de cumplir con los plazos para evitar sanciones fiscales.",
            express: ""
          },
          {
            title: "Prompt 18",
            long: "Escribe una carta breve para un cliente donde se explique de forma sencilla el impacto de una nueva normativa contable en su negocio. Usa ejemplos prácticos y evita tecnicismos complejos.",
            express: ""
          }
        ]
      },
      {
        name: "Reportes ejecutivos personalizados",
        prompts: [
          {
            title: "Prompt 19",
            long: "Elabora un reporte ejecutivo en una sola página que resuma los principales hallazgos del último trimestre: ingresos, gastos, utilidades y desviaciones frente al presupuesto. Incluye 3 gráficos simples para mayor claridad.",
            express: ""
          },
          {
            title: "Prompt 20",
            long: "Genera un informe para el CEO en el que resumas el estado actual de la empresa en términos de rentabilidad y flujo de caja. Utiliza un tono ejecutivo y céntrate en los indicadores clave.",
            express: ""
          },
          {
            title: "Prompt 21",
            long: "Prepara un resumen ejecutivo en lenguaje no técnico para presentar a inversionistas. Destaca crecimiento, estabilidad y oportunidades de mejora.",
            express: ""
          }
        ]
      },
      {
        name: "Presentaciones de resultados",
        prompts: [
          {
            title: "Prompt 22",
            long: "Diseña el guion para una presentación de resultados anuales dirigida a la junta directiva. Incluye estructura de apertura, cuerpo y cierre, con enfoque en logros, retos y oportunidades.",
            express: ""
          },
          {
            title: "Prompt 23",
            long: "Prepara una presentación en diapositivas para mostrar los resultados financieros del último semestre. Asegúrate de que cada diapositiva tenga un título claro y datos visuales clave.",
            express: ""
          },
          {
            title: "Prompt 24",
            long: "Escribe un discurso breve para el gerente financiero que debe presentar resultados a un grupo de inversionistas. El lenguaje debe ser técnico pero claro.",
            express: ""
          }
        ]
      },
      {
        name: "Comunicación de hallazgos de auditoría",
        prompts: [
          {
            title: "Prompt 25",
            long: "Redacta un memorando para la gerencia comunicando los hallazgos más importantes de una auditoría interna. El texto debe resaltar tanto los puntos fuertes como las áreas críticas a corregir.",
            express: ""
          },
          {
            title: "Prompt 26",
            long: "Elabora un correo dirigido al área de operaciones notificando las 3 principales irregularidades detectadas en la última auditoría. Proporciona sugerencias concretas para su corrección.",
            express: ""
          },
          {
            title: "Prompt 27",
            long: "Genera un informe resumido en formato de tabla con hallazgos de auditoría, riesgos asociados y responsables asignados.",
            express: ""
          }
        ]
      },
      {
        name: "Explicación de impactos fiscales",
        prompts: [
          {
            title: "Prompt 28",
            long: "Explica en un correo a un cliente cómo un cambio en la legislación fiscal afectará el pago de impuestos de su empresa. Utiliza ejemplos numéricos sencillos.",
            express: ""
          },
          {
            title: "Prompt 29",
            long: "Redacta una guía breve para un cliente sobre los beneficios fiscales aplicables a nuevas inversiones en activos fijos. Resume los 3 principales incentivos disponibles.",
            express: ""
          },
          {
            title: "Prompt 30",
            long: "Prepara un comunicado interno explicando a los empleados de la empresa los cambios fiscales más recientes y cómo afectan el cálculo de retenciones.",
            express: ""
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
            title: "Prompt 31",
            long: "Redacta una propuesta formal para un nuevo cliente que solicite servicios de contabilidad mensual. Incluye alcance, entregables, tiempos y beneficios diferenciales.",
            express: ""
          },
          {
            title: "Prompt 32",
            long: "Elabora una propuesta en formato de tabla que compare 3 paquetes de servicios contables ofrecidos por la firma. Cada columna debe incluir precio, beneficios y condiciones.",
            express: ""
          },
          {
            title: "Prompt 33",
            long: "Escribe una propuesta corta para un emprendedor que busca apoyo contable. Usa un tono cercano y resalta la importancia de la asesoría fiscal desde el inicio del negocio.",
            express: ""
          }
        ]
      },
      {
        name: "Cotizaciones por paquetes de servicios",
        prompts: [
          {
            title: "Prompt 34",
            long: "Prepara una cotización para un paquete de servicios contables que incluya nómina, facturación y declaración de impuestos. Indica costos unitarios y descuento por paquete.",
            express: ""
          },
          {
            title: "Prompt 35",
            long: "Genera una cotización comparativa con 2 opciones de servicio: básica y premium. Explica claramente las diferencias en el nivel de atención y beneficios.",
            express: ""
          },
          {
            title: "Prompt 36",
            long: "Crea un documento de cotización en formato tabla que detalle los servicios incluidos, frecuencia de entrega y costo mensual.",
            express: ""
          }
        ]
      },
      {
        name: "Presentación de servicios de valor agregado",
        prompts: [
          {
            title: "Prompt 37",
            long: "Escribe una presentación para un cliente en la que muestres los beneficios de incluir servicios de asesoría estratégica además de la contabilidad básica. Resalta el valor agregado.",
            express: ""
          },
          {
            title: "Prompt 38",
            long: "Crea una presentación corta en la que se explique cómo la digitalización de procesos contables mejora la eficiencia del cliente. Incluye ejemplos prácticos.",
            express: ""
          },
          {
            title: "Prompt 39",
            long: "Redacta una propuesta que combine servicios contables tradicionales con consultoría en transformación digital. Explica beneficios y costos.",
            express: ""
          }
        ]
      },
      {
        name: "Justificación de honorarios",
        prompts: [
          {
            title: "Prompt 40",
            long: "Escribe un documento explicativo para justificar un incremento en los honorarios profesionales. Incluye métricas de valor entregado y comparaciones con el mercado.",
            express: ""
          },
          {
            title: "Prompt 41",
            long: "Redacta un discurso para el área comercial en el que se explique a los clientes por qué la empresa mantiene tarifas superiores al promedio del mercado. Resalta diferenciadores clave.",
            express: ""
          },
          {
            title: "Prompt 42",
            long: "Genera un argumento breve para uso en reuniones comerciales en el que se justifique el cobro de honorarios en función del ahorro fiscal logrado.",
            express: ""
          }
        ]
      },
      {
        name: "Contratos de servicios profesionales",
        prompts: [
          {
            title: "Prompt 43",
            long: "Elabora un contrato de servicios contables básicos (mensuales) para una pequeña empresa. Incluye cláusulas de alcance, honorarios y confidencialidad.",
            express: ""
          },
          {
            title: "Prompt 44",
            long: "Prepara un contrato de servicios profesionales para asesoría fiscal anual. Incluye cláusulas de renovación automática y condiciones de terminación anticipada.",
            express: ""
          },
          {
            title: "Prompt 45",
            long: "Escribe un contrato de servicios para consultoría contable estratégica. Incluye cláusulas de propiedad intelectual sobre los informes generados.",
            express: ""
          }
        ]
      }
    ]
  }
];

export default promptsData;

