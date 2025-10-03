const promptsData = [
  // =========================
  // 📊 CATEGORÍA 1
  // =========================
  {
    id: "analisis-financiero",
    title: "📊 Análisis Financiero Estratégico",
    subcategories: [
      {
        id: "interpretacion-estados",
        title: "Interpretación de Estados Financieros",
        prompts: [
          {
            id: 1,
            title: "Análisis integral de estados financieros",
            longVersion: `Actúa como un analista financiero senior. Analiza los estados financieros adjuntos (balance general, estado de resultados y estado de cambios en el patrimonio) de los últimos 3 años. Identifica las 5 tendencias más significativas, evalúa la salud financiera general de la empresa, y proporciona 3 recomendaciones estratégicas basadas en tu análisis. Incluye comparaciones año a año y explica el impacto de cada hallazgo en la posición competitiva de la empresa.`,
            expressVersion: ""
          },
          {
            id: 2,
            title: "Comparación interanual de resultados",
            longVersion: `Genera un análisis comparativo de los estados de resultados de los últimos 2 años. Identifica los cambios en ingresos, costos y gastos, destacando las áreas con mayor impacto en la utilidad neta. Explica qué factores podrían estar impulsando estas variaciones.`,
            expressVersion: ""
          },
          {
            id: 3,
            title: "Identificación de debilidades financieras",
            longVersion: `Revisa los estados financieros y detecta 3 áreas críticas que representen riesgos para la estabilidad financiera de la empresa (ejemplo: liquidez, endeudamiento, rentabilidad). Propón una acción inmediata para mitigar cada una.`,
            expressVersion: ""
          }
        ]
      },
      {
        id: "flujo-efectivo",
        title: "Análisis de Flujo de Efectivo",
        prompts: [
          {
            id: 4,
            title: "Evaluación de flujo operativo",
            longVersion: `Analiza el flujo de efectivo operativo de los últimos 2 años. Determina si la empresa está generando suficiente efectivo de sus operaciones principales para sostener sus actividades. Incluye al menos 2 indicadores clave.`,
            expressVersion: ""
          },
          {
            id: 5,
            title: "Proyección de liquidez",
            longVersion: `Elabora una proyección de flujo de efectivo para los próximos 6 meses basada en los datos históricos. Señala si habrá déficit o superávit y propone estrategias para manejar los períodos críticos.`,
            expressVersion: ""
          }
        ]
      },
      {
        id: "rentabilidad-linea",
        title: "Evaluación de Rentabilidad por Línea de Negocio",
        prompts: [
          {
            id: 6,
            title: "Análisis de márgenes por unidad",
            longVersion: `Calcula y compara los márgenes de utilidad de cada línea de negocio de la empresa. Identifica cuál aporta mayor rentabilidad y cuál está generando pérdidas.`,
            expressVersion: ""
          },
          {
            id: 7,
            title: "Identificación de líneas estratégicas",
            longVersion: `Realiza un análisis financiero para recomendar a la gerencia en qué líneas de negocio debería invertir más y cuáles conviene descontinuar, con base en su rentabilidad.`,
            expressVersion: ""
          }
        ]
      },
      {
        id: "ratios-financieros",
        title: "Análisis de Ratios Financieros",
        prompts: [
          {
            id: 8,
            title: "Diagnóstico de liquidez",
            longVersion: `Calcula e interpreta el índice de liquidez corriente y la prueba ácida. Explica qué revelan sobre la capacidad de la empresa para cubrir obligaciones de corto plazo.`,
            expressVersion: ""
          },
          {
            id: 9,
            title: "Análisis de endeudamiento",
            longVersion: `Evalúa el nivel de endeudamiento de la empresa usando ratios de deuda/activo y deuda/patrimonio. Determina si la estructura financiera es saludable o riesgosa.`,
            expressVersion: ""
          }
        ]
      },
      {
        id: "riesgos-financieros",
        title: "Detección de Riesgos Financieros",
        prompts: [
          {
            id: 10,
            title: "Mapa de riesgos financieros",
            longVersion: `Genera un mapa de riesgos que identifique al menos 4 riesgos financieros principales (liquidez, crédito, mercado, operacionales). Explica cómo podrían afectar a la empresa y sugiere medidas de mitigación.`,
            expressVersion: ""
          },
          {
            id: 11,
            title: "Escenarios de estrés financiero",
            longVersion: `Simula un escenario de crisis en el que las ventas caen un 20%. Explica cómo impactaría en la liquidez y rentabilidad de la empresa, y qué medidas de emergencia podrían aplicarse.`,
            expressVersion: ""
          }
        ]
      }
    ]
  },

  // =========================
  // 💬 CATEGORÍA 2
  // =========================
  {
    id: "comunicacion-empresarial",
    title: "💬 Comunicación Empresarial de Alto Impacto",
    subcategories: [
      {
        id: "cartas-clientes",
        title: "Cartas explicativas para clientes",
        prompts: [
          {
            id: 16,
            title: "Explicación de incremento de honorarios",
            longVersion: `Redacta una carta formal dirigida a un cliente en la que expliques el motivo de un incremento en los honorarios contables. Incluye un lenguaje cordial, transparente y orientado a destacar el valor agregado que recibirá el cliente.`,
            expressVersion: ""
          },
          {
            id: 17,
            title: "Retrasos en entrega de documentos",
            longVersion: `Crea un correo explicativo para un cliente que presenta retrasos recurrentes en la entrega de documentos. El mensaje debe ser firme pero respetuoso, resaltando la importancia de cumplir con los plazos para evitar sanciones fiscales.`,
            expressVersion: ""
          }
        ]
      },
      {
        id: "reportes-ejecutivos",
        title: "Reportes ejecutivos personalizados",
        prompts: [
          {
            id: 18,
            title: "Informe ejecutivo trimestral",
            longVersion: `Elabora un reporte ejecutivo para la gerencia que resuma el desempeño financiero del trimestre. Incluye los 3 indicadores más relevantes y una recomendación clave.`,
            expressVersion: ""
          },
          {
            id: 19,
            title: "Reporte de flujo de caja",
            longVersion: `Redacta un reporte de flujo de caja mensual dirigido al director general. Resume los puntos más críticos y recomienda una acción inmediata.`,
            expressVersion: ""
          }
        ]
      },
      {
        id: "presentaciones-resultados",
        title: "Presentaciones de resultados",
        prompts: [
          {
            id: 20,
            title: "Presentación financiera para junta directiva",
            longVersion: `Prepara el guion para una presentación de resultados financieros ante la junta directiva. Incluye apertura, principales hallazgos y conclusión estratégica.`,
            expressVersion: ""
          }
        ]
      },
      {
        id: "hallazgos-auditoria",
        title: "Comunicación de hallazgos de auditoría",
        prompts: [
          {
            id: 21,
            title: "Informe de hallazgos",
            longVersion: `Redacta un comunicado breve que informe a la gerencia sobre los hallazgos más importantes de la última auditoría, con un tono claro y constructivo.`,
            expressVersion: ""
          }
        ]
      },
      {
        id: "impactos-fiscales",
        title: "Explicación de impactos fiscales",
        prompts: [
          {
            id: 22,
            title: "Impacto de nueva reforma tributaria",
            longVersion: `Elabora una explicación para clientes acerca de cómo la nueva reforma tributaria impactará en sus declaraciones fiscales. Usa un lenguaje simple y ejemplos prácticos.`,
            expressVersion: ""
          }
        ]
      }
    ]
  },

  // =========================
  // 📑 CATEGORÍA 3
  // =========================
  {
    id: "propuestas-cotizaciones",
    title: "📑 Propuestas y Cotizaciones que Cierran Negocios",
    subcategories: [
      {
        id: "propuestas-servicios",
        title: "Propuestas de servicios contables",
        prompts: [
          {
            id: 23,
            title: "Propuesta de valor contable",
            longVersion: `Redacta una propuesta de servicios contables para un cliente potencial. Incluye descripción del servicio, beneficios diferenciadores y una llamada a la acción.`,
            expressVersion: ""
          }
        ]
      },
      {
        id: "cotizaciones-paquetes",
        title: "Cotizaciones por paquetes de servicios",
        prompts: [
          {
            id: 24,
            title: "Cotización de servicios mensuales",
            longVersion: `Elabora una cotización para un paquete mensual de servicios contables. Incluye desglose de tarifas y beneficios adicionales.`,
            expressVersion: ""
          }
        ]
      },
      {
        id: "valor-agregado",
        title: "Presentación de servicios de valor agregado",
        prompts: [
          {
            id: 25,
            title: "Servicios premium",
            longVersion: `Crea una presentación escrita que destaque servicios de valor agregado que diferencien a tu despacho contable frente a la competencia.`,
            expressVersion: ""
          }
        ]
      },
      {
        id: "justificacion-honorarios",
        title: "Justificación de honorarios",
        prompts: [
          {
            id: 26,
            title: "Justificación ante cliente",
            longVersion: `Redacta un argumento sólido para justificar los honorarios de tus servicios contables, explicando el valor que recibe el cliente más allá del precio.`,
            expressVersion: ""
          }
        ]
      },
      {
        id: "contratos-servicios",
        title: "Contratos de servicios profesionales",
        prompts: [
          {
            id: 27,
            title: "Cláusulas clave de contrato",
            longVersion: `Redacta las 5 cláusulas más importantes que debería incluir un contrato de servicios contables para proteger tanto al despacho como al cliente.`,
            expressVersion: ""
          }
        ]
      }
    ]
  }
];

export default promptsData;
