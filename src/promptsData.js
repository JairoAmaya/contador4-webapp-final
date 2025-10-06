// src/promptsData.js
// ✅ Versión completa con 7 categorías y prompts extensos (MVP estable)
const promptsData = [
  
  // 📊 Categoría 1: Análisis Financiero Estratégico (15 prompts)
 
   
 

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
