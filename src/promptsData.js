// src/promptsData.js
// ✅ MVP FUNCIONAL — 7 categorías, 105 prompts en versión corta con botón "Copiar Prompt"

const promptsData = [
  // 1️⃣ ANÁLISIS FINANCIERO ESTRATÉGICO
  {
    title: "📊 Análisis Financiero Estratégico",
    icon: "📈",
    subcategories: [
      {
  title: "Análisis integral",
  prompt: `Actúa como un analista financiero senior. Analiza los estados financieros adjuntos (balance general, estado de resultados y estado de cambios en el patrimonio) de los últimos 3 años. Identifica las 5 tendencias más significativas, evalúa la salud financiera general de la empresa, y proporciona 3 recomendaciones estratégicas basadas en tu análisis. Incluye comparaciones año a año y explica el impacto de cada hallazgo en la posición competitiva de la empresa.`
},
          {
            title: "Diagnóstico Financiero",
            prompt: "Evalúa la salud financiera de una empresa considerando liquidez, endeudamiento y eficiencia operativa."
          },
          {
            title: "Informe de Indicadores Clave",
            prompt: "Genera un resumen de KPIs financieros con recomendaciones para optimizar el desempeño."
          }
        ]
      },
      {
        title: "Proyecciones y Escenarios",
        prompts: [
          {
            title: "Proyección Financiera a 3 Años",
            prompt: "Diseña una proyección financiera a 3 años considerando ventas, gastos e inversiones."
          },
          {
            title: "Escenario Base y Pesimista",
            prompt: "Elabora escenarios financieros con supuestos variables y analiza el impacto en resultados."
          },
          {
            title: "Sensibilidad de Ingresos",
            prompt: "Calcula la sensibilidad de los ingresos frente a cambios en precios o volumen de ventas."
          }
        ]
      },
      {
        title: "Gestión de Liquidez",
        prompts: [
          {
            title: "Flujo de Caja Proyectado",
            prompt: "Construye un flujo de caja mensual estimado para el próximo año."
          },
          {
            title: "Control de Tesorería",
            prompt: "Diseña un control de tesorería para administrar ingresos, egresos y saldos bancarios."
          },
          {
            title: "Política de Liquidez",
            prompt: "Redacta una política interna para optimizar la gestión de liquidez y fondos disponibles."
          }
        ]
      },
      {
        title: "Planeación Presupuestal",
        prompts: [
          {
            title: "Presupuesto Maestro Anual",
            prompt: "Elabora un presupuesto maestro integrando ventas, gastos y flujo de caja."
          },
          {
            title: "Análisis de Desviaciones Presupuestales",
            prompt: "Crea un análisis de desviaciones entre resultados reales y presupuestos."
          },
          {
            title: "Revisión de Supuestos",
            prompt: "Evalúa los supuestos utilizados en el presupuesto para medir su realismo."
          }
        ]
      },
      {
        title: "Valoración y Rentabilidad",
        prompts: [
          {
            title: "Valoración de Empresa (DCF)",
            prompt: "Aplica el método de flujos descontados para valorar una empresa."
          },
          {
            title: "ROI de Proyecto",
            prompt: "Calcula el retorno sobre inversión de un proyecto específico."
          },
          {
            title: "Análisis Costo-Beneficio",
            prompt: "Evalúa los beneficios financieros frente a los costos asociados de una decisión empresarial."
          }
        ]
      }
    ]
  },

  // 2️⃣ COMUNICACIÓN EMPRESARIAL
  {
    title: "💬 Comunicación Empresarial",
    icon: "🗣️",
    subcategories: [
      {
        title: "Informes Ejecutivos",
        prompts: [
          { title: "Informe Financiero Trimestral", prompt: "Redacta un informe financiero claro para directivos." },
          { title: "Reporte de Avances", prompt: "Prepara un resumen ejecutivo con los logros del trimestre." },
          { title: "Síntesis para Consejo Directivo", prompt: "Resume resultados clave y decisiones estratégicas recientes." }
        ]
      },
      {
        title: "Comunicación con Clientes",
        prompts: [
          { title: "Boletín Financiero", prompt: "Redacta un boletín con novedades contables y financieras relevantes." },
          { title: "Carta a Inversionistas", prompt: "Escribe una carta con logros y proyecciones del negocio." },
          { title: "Resumen Comercial", prompt: "Prepara un resumen de resultados dirigido a clientes corporativos." }
        ]
      },
      {
        title: "Gestión de Crisis",
        prompts: [
          { title: "Comunicado ante Incidente", prompt: "Redacta un comunicado transparente y profesional ante una crisis." },
          { title: "Guía de Comunicación Interna", prompt: "Diseña pautas para mantener la coherencia comunicativa durante una contingencia." },
          { title: "Plan de Reacción Rápida", prompt: "Crea un plan para mitigar impactos comunicativos en una crisis empresarial." }
        ]
      },
      {
        title: "Relaciones Públicas",
        prompts: [
          { title: "Nota de Prensa Financiera", prompt: "Redacta una nota de prensa sobre resultados anuales." },
          { title: "Discurso de Resultados", prompt: "Elabora un discurso inspirador para presentación de resultados." },
          { title: "Mensaje Corporativo", prompt: "Crea un mensaje oficial sobre un nuevo logro o meta alcanzada." }
        ]
      },
      {
        title: "Documentación Interna",
        prompts: [
          { title: "Manual de Estilo Financiero", prompt: "Crea un documento guía para uniformar los reportes financieros." },
          { title: "Plantilla de Presentaciones", prompt: "Diseña una estructura de presentaciones ejecutivas." },
          { title: "Guía de Redacción Profesional", prompt: "Define pautas para mantener claridad y precisión en los informes contables." }
        ]
      }
    ]
  },

  // 3️⃣ PROPUESTAS Y COTIZACIONES
  {
    title: "💼 Propuestas y Cotizaciones",
    icon: "💼",
    subcategories: [
      {
        title: "Propuestas Comerciales",
        prompts: [
          { title: "Propuesta de Servicios Contables", prompt: "Redacta una propuesta para servicios contables profesionales." },
          { title: "Propuesta de Asesoría Financiera", prompt: "Crea una propuesta para consultoría financiera personalizada." },
          { title: "Carta de Presentación Comercial", prompt: "Escribe una carta introductoria para captar nuevos clientes." }
        ]
      },
      {
        title: "Cotizaciones Detalladas",
        prompts: [
          { title: "Cotización Estándar", prompt: "Crea una cotización con precios y plazos claros." },
          { title: "Comparativo de Paquetes", prompt: "Desarrolla una tabla comparativa entre tres planes de servicio." },
          { title: "Cotización Express", prompt: "Genera una cotización rápida con formato resumido y profesional." }
        ]
      },
      {
        title: "Negociación y Cierre",
        prompts: [
          { title: "Argumentos de Valor", prompt: "Redacta argumentos sólidos para cerrar una venta." },
          { title: "Seguimiento Post-Reunión", prompt: "Escribe un correo de seguimiento tras presentar una propuesta." },
          { title: "Carta de Agradecimiento", prompt: "Crea una carta de agradecimiento posterior a una negociación." }
        ]
      },
      {
        title: "Alcance y Entregables",
        prompts: [
          { title: "Definición de Alcance", prompt: "Describe claramente los límites y entregables del servicio." },
          { title: "Cronograma de Entregas", prompt: "Crea un calendario de entregas con hitos clave." },
          { title: "Términos y Condiciones", prompt: "Incluye un resumen de condiciones comerciales en tu propuesta." }
        ]
      },
      {
        title: "Formalización y Seguimiento",
        prompts: [
          { title: "Contrato de Servicios", prompt: "Redacta una versión breve de contrato para servicios profesionales." },
          { title: "Acta de Aceptación", prompt: "Genera un documento para formalizar la aceptación de una propuesta." },
          { title: "Encuesta de Satisfacción", prompt: "Diseña una encuesta post-servicio para medir satisfacción del cliente." }
        ]
      }
    ]
  },

  // 4️⃣ REPORTES Y DASHBOARDS
  {
    title: "📈 Reportes y Dashboards",
    icon: "📊",
    subcategories: [
      {
        title: "KPIs Financieros",
        prompts: [
          { title: "Panel de Rentabilidad", prompt: "Diseña un tablero que muestre márgenes y ratios clave." },
          { title: "KPIs de Liquidez", prompt: "Crea indicadores de liquidez operativa para análisis mensual." },
          { title: "KPIs de Eficiencia", prompt: "Elabora métricas de productividad y eficiencia contable." }
        ]
      },
      {
        title: "Visualización de Datos",
        prompts: [
          { title: "Dashboard Ejecutivo", prompt: "Diseña un panel visual con los principales indicadores financieros." },
          { title: "Gráficos Comparativos", prompt: "Crea gráficos que comparen desempeño histórico." },
          { title: "Resumen Visual de Resultados", prompt: "Genera una presentación con resultados visuales clave." }
        ]
      },
      {
        title: "Alertas y Seguimiento",
        prompts: [
          { title: "Sistema de Alertas", prompt: "Crea un esquema de alertas financieras automáticas." },
          { title: "Informe Semanal", prompt: "Diseña un formato breve de reporte semanal de desempeño." },
          { title: "Resumen de Riesgos", prompt: "Redacta un resumen de riesgos detectados con alertas tempranas." }
        ]
      },
      {
        title: "Control y Auditoría de Datos",
        prompts: [
          { title: "Control de Calidad de Datos", prompt: "Crea un procedimiento para validar la integridad de datos." },
          { title: "Registro de Cambios", prompt: "Diseña un sistema de control de versiones de reportes." },
          { title: "Checklist de Revisión", prompt: "Genera una lista de verificación previa a entrega de informes." }
        ]
      },
      {
        title: "Reportes Personalizados",
        prompts: [
          { title: "Informe de Cierre Mensual", prompt: "Crea un formato estándar para reportes mensuales." },
          { title: "Resumen Financiero por Área", prompt: "Genera un informe financiero por departamentos o unidades." },
          { title: "Reporte Gerencial", prompt: "Diseña un reporte con enfoque estratégico para la dirección." }
        ]
      }
    ]
  },

  // 5️⃣ CUMPLIMIENTO FISCAL
  {
    title: "🧾 Cumplimiento Fiscal",
    icon: "🧮",
    subcategories: [
      {
        title: "Declaraciones y Pagos",
        prompts: [
          { title: "Calendario Fiscal", prompt: "Genera un calendario fiscal con fechas clave e impuestos a declarar." },
          { title: "Declaración Provisional", prompt: "Prepara una declaración mensual con resumen de impuestos." },
          { title: "Proyección de Impuestos", prompt: "Calcula una proyección de pagos fiscales anuales." }
        ]
      },
      {
        title: "Auditorías y Revisiones",
        prompts: [
          { title: "Checklist de Auditoría Fiscal", prompt: "Crea un listado de revisión previa a auditorías." },
          { title: "Expediente Fiscal Completo", prompt: "Genera un expediente con documentación tributaria obligatoria." },
          { title: "Informe de Hallazgos", prompt: "Redacta un resumen de observaciones detectadas en la auditoría." }
        ]
      },
      {
        title: "Optimización Tributaria",
        prompts: [
          { title: "Estrategias de Deducción", prompt: "Identifica deducciones aplicables al régimen fiscal actual." },
          { title: "Plan de Ahorro Fiscal", prompt: "Elabora un plan para reducir carga fiscal de forma legal." },
          { title: "Análisis de Riesgo Tributario", prompt: "Evalúa riesgos fiscales y contingencias potenciales." }
        ]
      },
      {
        title: "Cumplimiento Normativo",
        prompts: [
          { title: "Verificación de Obligaciones", prompt: "Crea un checklist de obligaciones fiscales mensuales." },
          { title: "Evaluación de Cumplimiento", prompt: "Diseña un reporte de cumplimiento fiscal y observaciones." },
          { title: "Plan Correctivo", prompt: "Redacta un plan para corregir incumplimientos fiscales." }
        ]
      },
      {
        title: "Documentación Legal",
        prompts: [
          { title: "Carta de Cumplimiento Fiscal", prompt: "Redacta una carta formal que confirme cumplimiento de obligaciones." },
          { title: "Formato de Declaración", prompt: "Crea una plantilla editable para futuras declaraciones." },
          { title: "Resumen Legal Tributario", prompt: "Elabora un resumen con los principales marcos regulatorios aplicables." }
        ]
      }
    ]
  },

  // 6️⃣ AUDITORÍA Y CONTROL
  {
    title: "🕵️ Auditoría y Control",
    icon: "🧩",
    subcategories: [
      {
        title: "Controles Internos",
        prompts: [
          { title: "Mapa de Riesgos", prompt: "Diseña un mapa de riesgos operativos y financieros." },
          { title: "Evaluación de Control Interno", prompt: "Aplica una evaluación del sistema de control interno." },
          { title: "Manual de Procedimientos", prompt: "Redacta procedimientos para fortalecer el control interno." }
        ]
      },
      {
        title: "Auditoría Operativa",
        prompts: [
          { title: "Plan de Auditoría", prompt: "Desarrolla un plan anual de auditoría con objetivos y cronograma." },
          { title: "Informe de Resultados", prompt: "Elabora un informe ejecutivo de hallazgos y mejoras." },
          { title: "Seguimiento de Recomendaciones", prompt: "Diseña un formato de seguimiento de acciones correctivas." }
        ]
      },
      {
        title: "Gestión de Riesgos",
        prompts: [
          { title: "Matriz de Riesgos", prompt: "Construye una matriz de riesgos con nivel de impacto y probabilidad." },
          { title: "Evaluación de Controles", prompt: "Evalúa controles existentes frente a riesgos detectados." },
          { title: "Plan de Mitigación", prompt: "Desarrolla un plan para reducir la exposición a riesgos clave." }
        ]
      },
      {
        title: "Revisión de Procesos",
        prompts: [
          { title: "Mapa de Procesos", prompt: "Crea un diagrama de procesos contables principales." },
          { title: "Checklist de Cumplimiento", prompt: "Diseña una lista de verificación de cumplimiento interno." },
          { title: "Optimización de Procedimientos", prompt: "Propón mejoras para optimizar procesos administrativos." }
        ]
      },
      {
        title: "Auditoría Interna",
        prompts: [
          { title: "Programa Anual de Auditoría", prompt: "Crea un programa de auditorías internas con enfoque estratégico." },
          { title: "Control de Hallazgos", prompt: "Diseña un registro de hallazgos y estado de resolución." },
          { title: "Informe de Cumplimiento", prompt: "Redacta un resumen de cumplimiento normativo y financiero." }
        ]
      }
    ]
  },

  // 7️⃣ CLIENTES INTERNACIONALES
  {
    title: "🌍 Clientes Internacionales",
    icon: "🌐",
    subcategories: [
      {
        title: "Normas Internacionales",
        prompts: [
          { title: "Comparativo IFRS vs US GAAP", prompt: "Elabora una tabla comparativa entre IFRS y US GAAP." },
          { title: "Adaptación Contable Global", prompt: "Diseña un proceso para adaptar reportes contables internacionales." },
          { title: "Reporte Financiero Multidivisa", prompt: "Crea un modelo de reporte financiero en distintas monedas." }
        ]
      },
      {
        title: "Gestión Global",
        prompts: [
          { title: "Política de Comunicación Internacional", prompt: "Crea lineamientos para comunicación intercultural." },
          { title: "Gestión de Equipos Multiculturales", prompt: "Diseña estrategias para coordinación internacional." },
          { title: "Agenda Global de Cumplimiento", prompt: "Genera un calendario de obligaciones globales." }
        ]
      },
      {
        title: "Fiscalidad Internacional",
        prompts: [
          { title: "Estrategia de Precios de Transferencia", prompt: "Desarrolla un resumen de política de precios de transferencia." },
          { title: "Cumplimiento FATCA y CRS", prompt: "Crea un checklist de cumplimiento internacional." },
          { title: "Reporte de Impuestos Globales", prompt: "Genera un resumen consolidado de obligaciones fiscales." }
        ]
      },
      {
        title: "Contratos Internacionales",
        prompts: [
          { title: "Modelo de Contrato Internacional", prompt: "Redacta un modelo de contrato de servicios globales." },
          { title: "Acuerdo de Confidencialidad", prompt: "Crea una versión en inglés y español de un NDA." },
          { title: "Plantilla de Carta de Entendimiento", prompt: "Genera una carta formal para acuerdos entre países." }
        ]
      },
      {
        title: "Auditoría Global",
        prompts: [
          { title: "Plan de Auditoría Multinacional", prompt: "Diseña un plan coordinado de auditoría global." },
          { title: "Reporte Consolidado Internacional", prompt: "Crea un reporte que integre datos financieros de varias filiales." },
          { title: "Evaluación de Riesgos Globales", prompt: "Elabora una matriz de riesgos con visión internacional." }
        ]
      }
    ]
  }
];

export default promptsData;
