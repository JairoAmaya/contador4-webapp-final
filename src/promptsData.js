// src/promptsData.js

const promptsData = [
  {
    title: "📊 Análisis Financiero Estratégico",
    subcategories: [
      {
        title: "Interpretación de Estados Financieros",
        prompts: [
          {
            title: "Análisis integral",
            prompt:
              "Actúa como analista financiero. Examina balance, resultados y patrimonio de los últimos 3 años. Resume tendencias clave y da tres recomendaciones estratégicas.",
          },
          {
            title: "Comparativo interanual",
            prompt:
              "Compara los estados de resultados de dos años y destaca cambios en ingresos, costos y utilidad. Explica causas probables y su efecto financiero.",
          },
          {
            title: "Alertas financieras",
            prompt:
              "Identifica tres riesgos críticos en la situación financiera actual y propone acciones correctivas concretas para cada uno.",
          },
        ],
      },
      {
        title: "Análisis de Flujo de Efectivo",
        prompts: [
          {
            title: "Evaluación de liquidez",
            prompt:
              "Analiza el flujo de efectivo operativo de los últimos 12 meses. Determina si la empresa genera suficiente liquidez para sostener su operación.",
          },
          {
            title: "Identificación de cuellos de botella",
            prompt:
              "Detecta áreas del flujo de efectivo donde hay retención de capital. Sugiere tres medidas para mejorar la rotación.",
          },
          {
            title: "Estrategia de optimización",
            prompt:
              "Elabora un plan de optimización del flujo de caja priorizando pagos y cobros según impacto en la estabilidad financiera.",
          },
        ],
      },
      {
        title: "Evaluación de Rentabilidad por Línea de Negocio",
        prompts: [
          {
            title: "Análisis de rentabilidad",
            prompt:
              "Calcula y compara márgenes brutos y netos por cada línea de negocio. Identifica la más rentable y su contribución al total.",
          },
          {
            title: "Segmentación estratégica",
            prompt:
              "Analiza los resultados por unidad de negocio y su rentabilidad. Recomienda ajustes o cierres según desempeño.",
          },
          {
            title: "Escenarios de mejora",
            prompt:
              "Propón tres estrategias para aumentar rentabilidad en las líneas con menor margen sin afectar la calidad o el servicio.",
          },
        ],
      },
      {
        title: "Análisis de Ratios Financieros",
        prompts: [
          {
            title: "Ratios clave",
            prompt:
              "Calcula e interpreta ratios de liquidez, endeudamiento y rentabilidad. Resume la salud financiera en un párrafo.",
          },
          {
            title: "Benchmark sectorial",
            prompt:
              "Compara los ratios de la empresa con los promedios del sector. Evalúa si el desempeño es competitivo o no.",
          },
          {
            title: "Alertas de gestión",
            prompt:
              "Identifica los tres ratios con mayor deterioro e interpreta qué riesgos representan para la empresa.",
          },
        ],
      },
      {
        title: "Detección de Riesgos Financieros",
        prompts: [
          {
            title: "Mapa de riesgos",
            prompt:
              "Elabora un mapa de riesgos financieros priorizando probabilidad e impacto. Sugiere medidas de mitigación inmediatas.",
          },
          {
            title: "Riesgos operativos",
            prompt:
              "Identifica riesgos operativos que afecten flujo o rentabilidad y plantea soluciones para reducir su efecto.",
          },
          {
            title: "Gestión preventiva",
            prompt:
              "Diseña un plan de monitoreo financiero para detectar alertas tempranas en liquidez, deuda o gastos.",
          },
        ],
      },
    ],
  },

  {
    title: "💬 Comunicación Empresarial de Alto Impacto",
    subcategories: [
      {
        title: "Cartas Explicativas para Clientes",
        prompts: [
          {
            title: "Explicación de ajustes contables",
            prompt:
              "Redacta una carta clara para explicar a un cliente un ajuste contable importante y su justificación profesional.",
          },
          {
            title: "Comunicación de diferencias",
            prompt:
              "Crea un mensaje formal que explique al cliente diferencias encontradas entre sus registros y los tuyos.",
          },
          {
            title: "Seguimiento de información",
            prompt:
              "Redacta una carta de seguimiento solicitando información faltante para el cierre contable mensual.",
          },
        ],
      },
      {
        title: "Reportes Ejecutivos Personalizados",
        prompts: [
          {
            title: "Resumen trimestral",
            prompt:
              "Elabora un informe ejecutivo que resuma los resultados del trimestre en un lenguaje claro para gerencia.",
          },
          {
            title: "Reporte financiero gráfico",
            prompt:
              "Crea un resumen visual con indicadores clave y su evolución reciente para presentación interna.",
          },
          {
            title: "Conclusiones estratégicas",
            prompt:
              "Prepara conclusiones de un reporte financiero enfocadas en oportunidades de mejora y acción inmediata.",
          },
        ],
      },
      {
        title: "Presentaciones de Resultados",
        prompts: [
          {
            title: "Presentación para inversionistas",
            prompt:
              "Diseña una presentación ejecutiva que resuma logros, resultados y proyecciones financieras clave.",
          },
          {
            title: "Pitch financiero",
            prompt:
              "Crea un discurso breve para presentar resultados financieros ante potenciales inversionistas.",
          },
          {
            title: "Visualización de resultados",
            prompt:
              "Sugiere una estructura de presentación de resultados enfocada en impacto y claridad visual.",
          },
        ],
      },
      {
        title: "Comunicación de Hallazgos de Auditoría",
        prompts: [
          {
            title: "Informe de hallazgos",
            prompt:
              "Redacta un informe profesional que detalle hallazgos de auditoría y recomendaciones correctivas.",
          },
          {
            title: "Notificación al cliente",
            prompt:
              "Escribe un correo claro y diplomático notificando a un cliente sobre observaciones detectadas en auditoría.",
          },
          {
            title: "Resumen para gerencia",
            prompt:
              "Crea un resumen ejecutivo de hallazgos de auditoría resaltando riesgos críticos y acciones sugeridas.",
          },
        ],
      },
      {
        title: "Explicación de Impactos Fiscales",
        prompts: [
          {
            title: "Impacto tributario",
            prompt:
              "Explica de forma simple cómo afecta una nueva norma fiscal a la empresa y sus obligaciones.",
          },
          {
            title: "Cambio normativo",
            prompt:
              "Redacta un comunicado interno explicando una actualización tributaria y su efecto en procesos contables.",
          },
          {
            title: "Recomendaciones fiscales",
            prompt:
              "Prepara un resumen con tres recomendaciones prácticas para optimizar la carga fiscal actual.",
          },
        ],
      },
    ],
  },

  {
    title: "🤝 Propuestas y Cotizaciones que Cierran Negocios",
    subcategories: [
      {
        title: "Propuestas de Servicios Contables",
        prompts: [
          {
            title: "Propuesta comercial",
            prompt:
              "Redacta una propuesta profesional para ofrecer servicios contables a un nuevo cliente.",
          },
          {
            title: "Oferta personalizada",
            prompt:
              "Crea una propuesta adaptada a las necesidades de un cliente pequeño con énfasis en confianza y resultados.",
          },
          {
            title: "Propuesta de valor",
            prompt:
              "Resume los beneficios clave que diferencian tus servicios contables frente a la competencia.",
          },
        ],
      },
      {
        title: "Cotizaciones por Paquetes de Servicios",
        prompts: [
          {
            title: "Cotización detallada",
            prompt:
              "Elabora una cotización con desglose de precios, tiempos y beneficios para un paquete contable mensual.",
          },
          {
            title: "Comparativo de paquetes",
            prompt:
              "Crea una tabla que compare tres paquetes de servicios contables (básico, estándar, premium).",
          },
          {
            title: "Justificación de costos",
            prompt:
              "Redacta un texto que justifique el valor de tus servicios destacando calidad, precisión y soporte.",
          },
        ],
      },
      {
        title: "Presentación de Servicios de Valor Agregado",
        prompts: [
          {
            title: "Servicios adicionales",
            prompt:
              "Describe tres servicios complementarios que aumenten el valor de una propuesta contable.",
          },
          {
            title: "Innovación en servicios",
            prompt:
              "Crea una descripción breve de servicios digitales o automatizados que mejoren la experiencia del cliente.",
          },
          {
            title: "Valor agregado",
            prompt:
              "Resume cómo tu asesoría aporta valor más allá de la contabilidad tradicional.",
          },
        ],
      },
      {
        title: "Justificación de Honorarios",
        prompts: [
          {
            title: "Argumento de valor",
            prompt:
              "Redacta una explicación clara sobre por qué tus honorarios reflejan experiencia y resultados.",
          },
          {
            title: "Respuesta a objeción de precio",
            prompt:
              "Prepara una respuesta profesional para clientes que consideran alta tu tarifa.",
          },
          {
            title: "Transparencia en costos",
            prompt:
              "Crea un párrafo explicando cómo tus precios incluyen calidad, soporte y cumplimiento normativo.",
          },
        ],
      },
      {
        title: "Contratos de Servicios Profesionales",
        prompts: [
          {
            title: "Contrato básico",
            prompt:
              "Redacta un modelo de contrato simple para la prestación de servicios contables mensuales.",
          },
          {
            title: "Cláusulas clave",
            prompt:
              "Enumera cinco cláusulas esenciales que debe tener un contrato contable para proteger ambas partes.",
          },
          {
            title: "Términos de renovación",
            prompt:
              "Escribe una cláusula que establezca condiciones claras de renovación automática anual.",
          },
        ],
      },
    ],
  },
];

export default promptsData;
