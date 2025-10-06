// src/promptsData.js
// ✅ Versión completa con 7 categorías y prompts extensos (MVP estable)

const promptsData = [
  // 1️⃣ ANÁLISIS FINANCIERO ESTRATÉGICO
  {
    title: "📊 Análisis Financiero Estratégico",
    icon: "📈",
    subcategories: [
      {
        title: "Interpretación de Estados Financieros",
        prompts: [
          {
            title: "Análisis Integral de Estados Financieros",
            prompt:
              "Actúa como un analista financiero senior. Analiza los estados financieros adjuntos (balance general, estado de resultados y estado de cambios en el patrimonio) de los últimos 3 años. Identifica las 5 tendencias más significativas, evalúa la salud financiera general de la empresa, y proporciona 3 recomendaciones estratégicas basadas en tu análisis. Incluye comparaciones año a año y explica el impacto de cada hallazgo en la posición competitiva de la empresa."
          },
          {
            title: "Análisis Comparativo de Resultados",
            prompt:
              "Compara los estados financieros de los últimos dos ejercicios. Identifica los cambios más relevantes en ingresos, costos, gastos y utilidad neta. Explica las causas potenciales de esas variaciones y determina si la tendencia observada representa una fortaleza o debilidad estructural del negocio."
          },
          {
            title: "Diagnóstico de Riesgos Financieros",
            prompt:
              "Revisa los principales indicadores financieros (liquidez, endeudamiento, rentabilidad y eficiencia). Detecta señales tempranas de deterioro financiero y formula un diagnóstico con las tres áreas críticas más vulnerables, junto con recomendaciones prácticas para mitigarlas."
          }
        ]
      },
      {
        title: "Planeación Financiera y Presupuestal",
        prompts: [
          {
            title: "Proyección Financiera a 3 Años",
            prompt:
              "Diseña un modelo financiero proyectado a 3 años con base en los resultados históricos de la empresa. Incluye supuestos de crecimiento, márgenes esperados, estructura de costos y sensibilidad ante cambios en ventas y gastos. Presenta tres escenarios: optimista, base y pesimista."
          },
          {
            title: "Presupuesto Maestro Anual",
            prompt:
              "Elabora un presupuesto maestro para el próximo ejercicio. Integra presupuestos de ventas, producción, gastos operativos y flujo de caja. Asegúrate de incluir indicadores de cumplimiento y un calendario mensual de seguimiento."
          },
          {
            title: "Análisis de Desviaciones Presupuestales",
            prompt:
              "Crea un análisis de desviaciones entre resultados reales y presupuestados. Clasifica las causas (volumen, precio, eficiencia, tiempo) e identifica cuáles tuvieron mayor impacto en los resultados. Propón acciones correctivas y recomendaciones de mejora para el próximo ciclo presupuestal."
          }
        ]
      },
      {
        title: "Gestión de Liquidez y Tesorería",
        prompts: [
          {
            title: "Proyección de Flujo de Caja Semanal",
            prompt:
              "Desarrolla una proyección de flujo de caja semanal para los próximos tres meses. Incluye estimación de entradas y salidas de efectivo, periodos de déficit y superávit, y estrategias para optimizar la liquidez operativa."
          },
          {
            title: "Gestión de Cuentas por Cobrar",
            prompt:
              "Analiza el envejecimiento de cartera y propón estrategias concretas para mejorar la rotación de cuentas por cobrar. Incluye segmentación de clientes por riesgo y recomendaciones de políticas de crédito y cobranza."
          },
          {
            title: "Estrategia de Inversión de Excedentes",
            prompt:
              "Diseña una estrategia de inversión de excedentes de efectivo. Define horizontes de inversión, niveles de riesgo, opciones de rentabilidad y procedimientos de control y seguimiento financiero."
          }
        ]
      },
      {
        title: "Evaluación de Proyectos de Inversión",
        prompts: [
          {
            title: "Análisis de Viabilidad Financiera",
            prompt:
              "Evalúa la viabilidad financiera de un proyecto de inversión usando VAN, TIR y periodo de recuperación. Incluye análisis de sensibilidad ante variaciones en ingresos y costos, y formula conclusiones sobre la conveniencia de ejecutar el proyecto."
          },
          {
            title: "Comparativo de Alternativas de Inversión",
            prompt:
              "Compara dos alternativas de inversión considerando rentabilidad esperada, riesgo asociado y flujo de caja proyectado. Indica cuál opción es más conveniente desde el punto de vista financiero y estratégico."
          },
          {
            title: "Evaluación del Costo de Capital",
            prompt:
              "Calcula el costo promedio ponderado de capital (WACC) de la empresa. Explica cómo este indicador influye en la valoración de proyectos y en las decisiones estratégicas de financiamiento."
          }
        ]
      },
      {
        title: "Análisis de Rentabilidad y Crecimiento",
        prompts: [
          {
            title: "Análisis de Margen y Rentabilidad por Línea",
            prompt:
              "Analiza la rentabilidad de cada línea de negocio. Calcula márgenes brutos, operativos y netos, y detecta las áreas con mayor y menor rentabilidad. Propón estrategias para mejorar la eficiencia y optimizar recursos."
          },
          {
            title: "Análisis Dupont",
            prompt:
              "Descompón el ROE utilizando el modelo Dupont para identificar los principales impulsores de la rentabilidad (margen, rotación y apalancamiento). Interpreta los resultados y propone medidas de mejora."
          },
          {
            title: "Proyección de Crecimiento Sostenible",
            prompt:
              "Calcula la tasa de crecimiento sostenible de la empresa considerando su política de dividendos, estructura de capital y rentabilidad actual. Evalúa si el ritmo de crecimiento es coherente con la generación interna de recursos."
          }
        ]
      }
    ]
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
