// src/promptsData.js
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
            title: "Prompt para Análisis Integral",
            text: `Actúa como un analista financiero senior. Analiza los estados financieros adjuntos (balance general, estado de resultados y estado de cambios en el patrimonio) de los últimos 3 años. Identifica las 5 tendencias más significativas, evalúa la salud financiera general de la empresa, y proporciona 3 recomendaciones estratégicas basadas en tu análisis. Incluye comparaciones año a año y explica el impacto de cada hallazgo en la posición competitiva de la empresa.`,
          },
          {
            title: "Prompt para Informe Ejecutivo",
            text: `Redacta un informe ejecutivo de máximo 500 palabras que resuma el estado financiero de la empresa en base a los estados adjuntos. Usa un lenguaje claro y accesible para dueños de negocio sin formación contable. Resalta fortalezas, debilidades y posibles áreas de mejora.`,
          },
          {
            title: "Prompt para Presentación Visual",
            text: `Convierte los datos de los estados financieros en una presentación visual con gráficos claros y atractivos (ejemplo: barras comparativas, tendencias en línea, diagramas de flujo). Explica en cada gráfico qué significa y cómo impacta a la toma de decisiones.`,
          },
        ],
      },
      {
        name: "Análisis de flujo de efectivo",
        prompts: [
          {
            title: "Prompt de Diagnóstico",
            text: `Analiza el flujo de efectivo de los últimos 12 meses e identifica los principales problemas de liquidez. Explica si los problemas provienen de la operación, inversión o financiamiento. Sugiere 3 acciones para mejorar el flujo neto de efectivo en los próximos 6 meses.`,
          },
          {
            title: "Prompt de Proyección",
            text: `Genera una proyección de flujo de caja mensual para los próximos 12 meses con base en los datos actuales. Señala en qué meses se anticipan déficits de caja y recomienda medidas preventivas.`,
          },
          {
            title: "Prompt de Recomendación Estratégica",
            text: `A partir del flujo de efectivo histórico y proyectado, recomienda si la empresa debe priorizar reducción de costos, negociación de plazos con proveedores o financiamiento externo. Justifica tu recomendación con cifras concretas.`,
          },
        ],
      },
      {
        name: "Evaluación de rentabilidad por línea de negocio",
        prompts: [
          {
            title: "Prompt de Segmentación",
            text: `Analiza la rentabilidad por cada línea de negocio identificando ingresos, costos directos y margen de contribución. Determina qué líneas generan mayor valor y cuáles afectan la rentabilidad total.`,
          },
          {
            title: "Prompt de Decisión Estratégica",
            text: `Con base en la rentabilidad de cada línea, sugiere cuáles deben expandirse, mantenerse o reducirse. Incluye un análisis costo-beneficio simplificado.`,
          },
          {
            title: "Prompt de Recomendación de Precios",
            text: `Propón ajustes de precios para cada línea de negocio considerando su margen actual, la elasticidad de la demanda y la posición competitiva en el mercado.`,
          },
        ],
      },
      {
        name: "Análisis de ratios financieros",
        prompts: [
          {
            title: "Prompt de Ratios Clave",
            text: `Calcula e interpreta los principales ratios financieros de la empresa: liquidez corriente, endeudamiento, rentabilidad neta y rotación de activos. Explica en términos simples qué significan y cómo se comparan con estándares de la industria.`,
          },
          {
            title: "Prompt de Tendencias",
            text: `Analiza cómo han evolucionado los ratios financieros de la empresa en los últimos 3 años. Indica cuáles han mejorado, cuáles empeorado y las posibles razones detrás de esos cambios.`,
          },
          {
            title: "Prompt de Benchmarking",
            text: `Compara los ratios financieros de la empresa con el promedio de su industria. Identifica fortalezas competitivas y vulnerabilidades, y propone 2 acciones para cerrar brechas.`,
          },
        ],
      },
      {
        name: "Detección de riesgos financieros",
        prompts: [
          {
            title: "Prompt de Riesgos Potenciales",
            text: `Identifica los 5 principales riesgos financieros a los que está expuesta la empresa con base en sus estados financieros y entorno económico. Clasifícalos en alto, medio y bajo impacto.`,
          },
          {
            title: "Prompt de Mitigación",
            text: `Para cada riesgo financiero identificado, propone una estrategia de mitigación. Ejemplos: cobertura de tipo de cambio, seguros de crédito, diversificación de clientes.`,
          },
          {
            title: "Prompt de Monitoreo",
            text: `Diseña un sistema simple de monitoreo mensual de riesgos financieros que incluya 3 indicadores clave y umbrales de alerta temprana.`,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Comunicación Empresarial de Alto Impacto",
    icon: "💬",
    subcategories: [
      {
        name: "Cartas explicativas para clientes",
        prompts: [
          {
            title: "Prompt de Carta de Resultados",
            text: `Redacta una carta dirigida al cliente explicando de manera clara y sencilla los principales resultados financieros de su empresa durante el último trimestre. Incluye felicitaciones por logros alcanzados y recomendaciones prácticas para el siguiente trimestre.`,
          },
          {
            title: "Prompt de Explicación de Cambios",
            text: `Crea una carta explicando a un cliente por qué sus impuestos aumentaron este año en comparación con el anterior. Usa un tono empático, claro y profesional.`,
          },
          {
            title: "Prompt de Seguimiento",
            text: `Redacta un correo de seguimiento para un cliente que no ha entregado aún la documentación necesaria para el cierre contable. Sé cordial pero firme en la solicitud.`,
          },
        ],
      },
      {
        name: "Reportes ejecutivos personalizados",
        prompts: [
          {
            title: "Prompt de Informe Resumido",
            text: `Genera un reporte ejecutivo de máximo 2 páginas que resuma la situación financiera actual de la empresa, destacando fortalezas, debilidades y oportunidades.`,
          },
          {
            title: "Prompt de Gráficos Personalizados",
            text: `Crea un reporte visual para la gerencia con gráficos clave (flujo de caja, evolución de ingresos, rentabilidad por línea de negocio). Usa colores corporativos y resalta insights clave.`,
          },
          {
            title: "Prompt de Resumen para Junta",
            text: `Elabora un resumen ejecutivo para presentar en junta directiva, destacando únicamente los puntos críticos que requieren decisiones estratégicas.`,
          },
        ],
      },
      {
        name: "Presentaciones de resultados",
        prompts: [
          {
            title: "Prompt de Presentación de Logros",
            text: `Diseña una presentación en diapositivas para mostrar a los directivos los logros financieros del año. Usa un tono motivador y celebra los hitos alcanzados.`,
          },
          {
            title: "Prompt de Presentación Comparativa",
            text: `Elabora una presentación que compare los resultados actuales de la empresa con los objetivos presupuestados y con el año anterior.`,
          },
          {
            title: "Prompt de Presentación de Estrategias",
            text: `Crea una presentación ejecutiva que explique a los accionistas las estrategias propuestas para mejorar los resultados financieros en el próximo año.`,
          },
        ],
      },
      {
        name: "Comunicación de hallazgos de auditoría",
        prompts: [
          {
            title: "Prompt de Informe Claro",
            text: `Redacta un informe de hallazgos de auditoría usando un lenguaje accesible para gerentes no contadores. Incluye descripción del hallazgo, impacto y recomendación.`,
          },
          {
            title: "Prompt de Comunicación Oral",
            text: `Prepara un guion breve para explicar de forma verbal los hallazgos de auditoría en una reunión con directivos. Usa un tono constructivo.`,
          },
          {
            title: "Prompt de Seguimiento",
            text: `Redacta un correo de seguimiento con los hallazgos de auditoría pendientes de corregir, estableciendo responsables y plazos.`,
          },
        ],
      },
      {
        name: "Explicación de impactos fiscales",
        prompts: [
          {
            title: "Prompt de Cambio Normativo",
            text: `Explica a un cliente cómo un nuevo cambio normativo fiscal impacta directamente en su empresa. Usa ejemplos prácticos y un lenguaje sencillo.`,
          },
          {
            title: "Prompt de Impacto en Liquidez",
            text: `Redacta un breve análisis explicando cómo las nuevas disposiciones fiscales afectan el flujo de caja de la empresa.`,
          },
          {
            title: "Prompt de Estrategia",
            text: `Sugiere 2 estrategias prácticas para que el cliente optimice su carga fiscal frente a los cambios legislativos recientes.`,
          },
        ],
      },
    ],
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
            title: "Prompt de Propuesta Formal",
            text: `Redacta una propuesta formal de servicios contables para un cliente PYME, incluyendo descripción de los servicios, beneficios, metodología de trabajo y plan de honorarios. Usa un lenguaje claro y persuasivo.`,
          },
          {
            title: "Prompt de Valor Diferencial",
            text: `Crea un texto que destaque el valor diferencial de tu firma contable frente a competidores (ejemplo: atención personalizada, experiencia en sector específico, uso de tecnología).`,
          },
          {
            title: "Prompt de Propuesta Breve",
            text: `Elabora una propuesta corta de máximo 300 palabras para enviar por correo electrónico a un cliente potencial, destacando solo los beneficios clave.`,
          },
        ],
      },
      {
        name: "Cotizaciones por paquetes de servicios",
        prompts: [
          {
            title: "Prompt de Cotización Detallada",
            text: `Diseña una cotización con 3 paquetes de servicios contables (básico, estándar, premium). Para cada paquete, incluye qué servicios están incluidos, periodicidad y costo mensual.`,
          },
          {
            title: "Prompt de Comparación de Paquetes",
            text: `Redacta un cuadro comparativo entre 3 paquetes de servicios contables para que el cliente entienda claramente las diferencias de precio y valor agregado.`,
          },
          {
            title: "Prompt de Cotización Personalizada",
            text: `Elabora una cotización personalizada para una empresa que requiere servicios de nómina, declaración de impuestos y asesoría financiera mensual.`,
          },
        ],
      },
      {
        name: "Presentación de servicios de valor agregado",
        prompts: [
          {
            title: "Prompt de Servicios Extra",
            text: `Crea un texto que explique los servicios de valor agregado que ofrece tu firma (ejemplo: capacitaciones, reportes personalizados, asesoría estratégica).`,
          },
          {
            title: "Prompt de Pitch Comercial",
            text: `Diseña un discurso de venta de 2 minutos para explicar a un cliente por qué debería elegir tu servicio contable y no otro.`,
          },
          {
            title: "Prompt de Caso de Éxito",
            text: `Redacta un caso de éxito breve donde un cliente logró mejorar sus finanzas gracias a tus servicios contables de valor agregado.`,
          },
        ],
      },
      {
        name: "Justificación de honorarios",
        prompts: [
          {
            title: "Prompt de Argumento de Valor",
            text: `Escribe una explicación clara que justifique tus honorarios en comparación con el promedio de mercado, resaltando el valor que aportas.`,
          },
          {
            title: "Prompt de Beneficios Ocultos",
            text: `Redacta un texto para explicar al cliente cómo tus servicios ayudan a reducir riesgos y costos ocultos, justificando así los honorarios.`,
          },
          {
            title: "Prompt de Comunicación Transparente",
            text: `Crea un mensaje transparente que explique cómo se calculan tus honorarios y qué servicios están incluidos.`,
          },
        ],
      },
      {
        name: "Contratos de servicios profesionales",
        prompts: [
          {
            title: "Prompt de Contrato Básico",
            text: `Redacta un modelo de contrato de servicios contables con cláusulas de confidencialidad, duración, honorarios y terminación.`,
          },
          {
            title: "Prompt de Cláusulas Adicionales",
            text: `Propón 3 cláusulas adicionales que puedes incluir en un contrato de servicios contables para proteger tanto al cliente como al contador.`,
          },
          {
            title: "Prompt de Resumen Contractual",
            text: `Genera un resumen ejecutivo del contrato de servicios contables para que el cliente lo entienda fácilmente antes de firmar.`,
          },
        ],
      },
    ],
  },
];

export default promptsData;
