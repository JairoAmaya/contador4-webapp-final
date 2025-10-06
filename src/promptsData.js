// src/promptsData.js
// ✅ Versión completa con 7 categorías y prompts extensos (MVP estable)

const promptsContador4_0 = [
  // 📊 Categoría 1: Análisis Financiero Estratégico (15 prompts)
  {
    "id": "1",
    "titulo": "Análisis Integral de Estados Financieros",
    "descripcion": "Actúa como un analista financiero senior. Analiza los estados financieros adjuntos (balance general, estado de resultados y estado de cambios en el patrimonio) de los últimos 3 años. Identifica las 5 tendencias más significativas, evalúa la salud financiera general de la empresa, y proporciona 3 recomendaciones estratégicas basadas en tu análisis. Incluye comparaciones año a año y explica el impacto de cada hallazgo en la posición competitiva de la empresa."
  },
  {
    "id": "2",
    "titulo": "Análisis Comparativo con Competidores",
    "descripcion": "Compara los estados financieros de esta empresa con los de sus 3 principales competidores en el sector. Identifica fortalezas y debilidades relativas en términos de estructura de capital, eficiencia operativa y posición de liquidez. Proporciona un ranking de desempeño financiero y explica qué métricas clave determinan la posición de cada empresa en el mercado."
  },
  {
    "id": "3",
    "titulo": "Detección de Anomalías en Estados Financieros",
    "descripcion": "Examina los estados financieros en busca de inconsistencias, irregularidades o señales de alerta. Analiza la coherencia entre partidas, identifica variaciones inusuales y evalúa la calidad de los resultados reportados. Elabora un informe de due diligence destacando cualquier área que requiera investigación adicional o aclaración."
  },
  {
    "id": "4",
    "titulo": "Análisis de Sostenibilidad del Flujo de Efectivo",
    "descripcion": "Analiza los estados de flujo de efectivo de los últimos 5 años enfocándote en la sostenibilidad de la generación de efectivo. Evalúa la calidad del flujo operativo, identifica patrones estacionales y determina si la empresa puede mantener sus operaciones, inversiones y pagos de dividendos sin financiamiento externo."
  },
  {
    "id": "5",
    "titulo": "Optimización del Capital de Trabajo",
    "descripcion": "Evalúa los componentes del capital de trabajo y su impacto en el flujo de efectivo. Identifica oportunidades de mejora en cuentas por cobrar, inventarios y cuentas por pagar. Propón estrategias específicas para optimizar el ciclo de conversión de efectivo y mejorar la liquidez sin afectar la operación."
  },
  {
    "id": "6",
    "titulo": "Evaluación de Capacidad de Inversión",
    "descripcion": "Determina la capacidad de la empresa para financiar nuevos proyectos o expansiones a partir de su flujo de efectivo y estructura de capital. Calcula ratios de cobertura, apalancamiento y capacidad de servicio de deuda. Propón estrategias de financiamiento adecuadas según el perfil de riesgo y horizonte de inversión."
  },
  {
    "id": "7",
    "titulo": "Análisis de Contribución Marginal por Línea de Negocio",
    "descripcion": "Analiza la rentabilidad por línea de negocio o unidad de producto calculando márgenes de contribución y EBITDA. Identifica cuáles segmentos son los más rentables y cuáles podrían estar destruyendo valor. Propón decisiones estratégicas de expansión, ajuste o desinversión."
  },
  {
    "id": "8",
    "titulo": "Análisis de Valor Económico Agregado (EVA)",
    "descripcion": "Calcula el EVA de la empresa y analiza la rentabilidad ajustada por riesgo. Evalúa si la compañía está generando valor económico o simplemente cubriendo su costo de capital. Propón estrategias para mejorar el EVA mediante optimización del capital y reducción del costo financiero."
  },
  {
    "id": "9",
    "titulo": "Optimización del Portafolio de Negocios",
    "descripcion": "Utiliza la matriz BCG y el análisis de rentabilidad para evaluar el portafolio de negocios. Clasifica los segmentos según su participación de mercado y crecimiento, identifica sinergias entre líneas y diseña una estrategia de asignación de recursos que maximice el retorno global."
  },
  {
    "id": "10",
    "titulo": "Dashboard de Ratios Financieros Clave",
    "descripcion": "Diseña un dashboard ejecutivo con los ratios financieros más relevantes organizados por categoría: liquidez, rentabilidad, apalancamiento, eficiencia y mercado. Incluye valores actuales, tendencias históricas y comparativos con el sector. Presenta una interpretación ejecutiva con recomendaciones."
  },
  {
    "id": "11",
    "titulo": "Análisis Predictivo de Solidez Financiera",
    "descripcion": "Construye un modelo predictivo basado en indicadores financieros clave (Altman Z-Score, Piotroski F-Score) para estimar la probabilidad de dificultades financieras en los próximos 12 a 24 meses. Analiza escenarios alternativos y su impacto en solvencia y liquidez."
  },
  {
    "id": "12",
    "titulo": "Benchmarking Sectorial",
    "descripcion": "Compara los indicadores financieros de la empresa con los promedios de su sector y principales competidores. Identifica áreas donde la compañía supera o queda por debajo de los estándares. Propón metas realistas de mejora para los próximos ejercicios."
  },
  {
    "id": "13",
    "titulo": "Mapa de Riesgos Financieros",
    "descripcion": "Crea un mapa de riesgos que clasifique amenazas en categorías (liquidez, crédito, mercado, operacional). Evalúa probabilidad e impacto de cada riesgo y diseña controles preventivos y correctivos. Incluye indicadores de alerta temprana y un plan de respuesta."
  },
  {
    "id": "14",
    "titulo": "Stress Testing Financiero",
    "descripcion": "Desarrolla un ejercicio de stress testing con tres escenarios adversos (recesión moderada, crisis sectorial, alza de tasas). Evalúa impactos en liquidez, apalancamiento y rentabilidad, identificando puntos críticos y planes de mitigación ante cada escenario."
  },
  {
    "id": "15",
    "titulo": "Sistema de Alertas Tempranas",
    "descripcion": "Diseña un sistema automatizado que identifique señales tempranas de deterioro financiero. Define indicadores clave, umbrales de alerta y acciones automáticas asociadas. Crea un protocolo de monitoreo y escalamiento ante desviaciones relevantes."
  },


  // 2️⃣ COMUNICACIÓN EMPRESARIAL DE ALTO IMPACTO
  {
    title: "💬 Comunicación Empresarial de Alto Impacto",
    icon: "📝",
    subcategories: [
      {
        title: "Informes y Presentaciones Financieras",
        prompts: [
          {
            title: "Informe Ejecutivo para Dirección",
            prompt:
              "Redacta un informe ejecutivo claro y persuasivo de máximo 300 palabras que resuma los resultados financieros del último trimestre. Incluye logros clave, riesgos identificados y dos recomendaciones estratégicas para la alta dirección."
          },
          {
            title: "Presentación para Inversionistas",
            prompt:
              "Crea una presentación de alto impacto para inversionistas basada en los resultados del último ejercicio. Incluye resumen de desempeño, proyecciones de crecimiento y argumento convincente para continuar invirtiendo."
          }
        ]
      },
      {
        title: "Comunicación con Clientes y Stakeholders",
        prompts: [
          {
            title: "Boletín Financiero para Clientes",
            prompt:
              "Redacta un boletín trimestral informando sobre novedades del negocio, contexto económico y valor generado para los clientes, en un tono profesional y cercano."
          },
          {
            title: "Carta Anual a Accionistas",
            prompt:
              "Redacta una carta anual dirigida a los accionistas, destacando los logros financieros, retos enfrentados y visión estratégica para el siguiente año."
          }
        ]
      }
    ]
  },

  // 3️⃣ PROPUESTAS Y COTIZACIONES
  {
    title: "💼 Propuestas y Cotizaciones que Cierran Negocios",
    icon: "💼",
    subcategories: [
      {
        title: "Generación de Propuestas",
        prompts: [
          {
            title: "Propuesta de Servicios Contables",
            prompt:
              "Redacta una propuesta comercial atractiva para un cliente potencial que busca servicios de contabilidad. Incluye introducción, beneficios clave, precios estimados y cierre persuasivo."
          },
          {
            title: "Propuesta de Asesoría Financiera",
            prompt:
              "Elabora una propuesta profesional para servicios de asesoría financiera mensual. Incluye alcance, entregables y beneficios competitivos."
          }
        ]
      },
      {
        title: "Cotizaciones Profesionales",
        prompts: [
          {
            title: "Cotización Estructurada de Servicios",
            prompt:
              "Crea una cotización detallada con desglose de actividades, tarifas, tiempos de entrega y beneficios adicionales que diferencien la oferta."
          },
          {
            title: "Comparativo de Opciones para el Cliente",
            prompt:
              "Elabora una tabla comparativa de tres paquetes de servicio (básico, estándar, premium) con precios y beneficios diferenciados."
          }
        ]
      }
    ]
  },

  // 4️⃣ REPORTES Y DASHBOARDS INTELIGENTES
  {
    title: "📈 Reportes y Dashboards Inteligentes",
    icon: "📊",
    subcategories: [
      {
        title: "Creación de KPIs Financieros",
        prompts: [
          {
            title: "Framework Integral de KPIs",
            prompt:
              "Diseña un sistema completo de KPIs financieros estructurado en niveles estratégico, táctico y operativo. Define fórmulas, frecuencia, umbrales de alerta y responsables de cada métrica."
          },
          {
            title: "KPIs Predictivos de Alerta Temprana",
            prompt:
              "Crea indicadores financieros predictivos que adviertan sobre problemas de liquidez, márgenes o cobranza antes de que ocurran."
          }
        ]
      },
      {
        title: "Dashboards Ejecutivos",
        prompts: [
          {
            title: "Dashboard Financiero Integral",
            prompt:
              "Diseña un dashboard en tiempo real que muestre los KPIs clave, flujos de caja y tendencias principales de desempeño financiero."
          },
          {
            title: "Dashboard de Riesgo y Cumplimiento",
            prompt:
              "Desarrolla un panel ejecutivo que muestre mapa de riesgos, métricas de cumplimiento y alertas automáticas de desviaciones."
          }
        ]
      }
    ]
  },

  // 5️⃣ CUMPLIMIENTO FISCAL PROACTIVO
  {
    title: "🧾 Cumplimiento Fiscal Proactivo",
    icon: "🧮",
    subcategories: [
      {
        title: "Calendarios y Estrategias Fiscales",
        prompts: [
          {
            title: "Calendario Fiscal Automatizado",
            prompt:
              "Genera un calendario fiscal con fechas clave de impuestos nacionales y locales, integrando alertas automáticas y responsables asignados."
          },
          {
            title: "Plan de Optimización Fiscal Anual",
            prompt:
              "Elabora un plan fiscal estratégico para reducir la carga tributaria legalmente, con cronograma de acciones y estimación de beneficios."
          }
        ]
      },
      {
        title: "Gestión de Riesgos Tributarios",
        prompts: [
          {
            title: "Matriz de Riesgos Tributarios",
            prompt:
              "Crea una matriz que identifique los principales riesgos fiscales por tipo de impuesto, su probabilidad e impacto económico."
          },
          {
            title: "Expediente Defensivo para Auditorías",
            prompt:
              "Prepara un expediente fiscal con toda la documentación necesaria para afrontar una auditoría tributaria sin contingencias."
          }
        ]
      }
    ]
  },

  // 6️⃣ AUDITORÍA Y CONTROL ROBUSTO
  {
    title: "🕵️ Auditoría y Control Robusto",
    icon: "🧩",
    subcategories: [
      {
        title: "Evaluación de Controles Internos",
        prompts: [
          {
            title: "Matriz Avanzada de Controles",
            prompt:
              "Desarrolla una matriz de evaluación de controles internos que incluya riesgos, cobertura, frecuencia operativa y efectividad."
          },
          {
            title: "Evaluación COSO Integral",
            prompt:
              "Aplica los 17 principios de COSO para evaluar el sistema de control interno, detectando deficiencias y oportunidades de mejora."
          }
        ]
      },
      {
        title: "Gestión de Hallazgos y Seguimiento",
        prompts: [
          {
            title: "Plan de Acción de Auditoría",
            prompt:
              "Transforma los hallazgos en un plan de acción estructurado con responsables, plazos e indicadores de cumplimiento."
          },
          {
            title: "Reporte Ejecutivo de Auditoría",
            prompt:
              "Redacta un resumen ejecutivo de los resultados de auditoría para el Comité, destacando riesgos críticos y recomendaciones."
          }
        ]
      }
    ]
  },

  // 7️⃣ CLIENTES INTERNACIONALES SIN FRONTERAS
  {
    title: "🌍 Clientes Internacionales Sin Fronteras",
    icon: "🌐",
    subcategories: [
      {
        title: "Normas y Reportes Internacionales",
        prompts: [
          {
            title: "Comparativo IFRS vs US GAAP",
            prompt:
              "Desarrolla una tabla comparativa de diferencias clave entre IFRS y US GAAP para una empresa multinacional, explicando su impacto financiero."
          },
          {
            title: "Sistema de Reporteo Multi-moneda",
            prompt:
              "Crea una arquitectura de reporteo que permita generar estados financieros consolidados en múltiples monedas y jurisdicciones."
          }
        ]
      },
      {
        title: "Comunicación y Gestión Global",
        prompts: [
          {
            title: "Protocolo de Comunicación Intercultural",
            prompt:
              "Diseña un protocolo de comunicación empresarial que contemple diferencias culturales, estilos de negociación y normas internacionales."
          },
          {
            title: "Gestión de Conflictos Multiculturales",
            prompt:
              "Crea un framework de resolución de conflictos en equipos financieros globales, considerando estilos culturales y comunicación efectiva."
          }
        ]
      }
    ]
  }
];

export default promptsData;
