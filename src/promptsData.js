// src/promptsData.js
const promptsData = [
  {
    title: "📊 Análisis Financiero Estratégico",
    icon: "📈",
    subcategories: [
      {
        title: "Interpretación de Estados Financieros",
        prompts: [
          {
            title: "Análisis integral de estados financieros",
            prompt:
              "Actúa como un analista financiero senior. Analiza los estados financieros adjuntos (balance general, estado de resultados y estado de cambios en el patrimonio) de los últimos 3 años. Identifica las 5 tendencias más significativas, evalúa la salud financiera general de la empresa y proporciona 3 recomendaciones estratégicas basadas en tu análisis. Incluye comparaciones año a año y explica el impacto de cada hallazgo en la posición competitiva de la empresa."
          },
          {
            title: "Comparación interanual de resultados",
            prompt:
              "Compara los estados de resultados de los últimos dos ejercicios. Identifica variaciones en ingresos, costos y márgenes de utilidad. Explica los factores más relevantes que provocaron estos cambios y propone medidas de optimización."
          },
          {
            title: "Evaluación de liquidez y solvencia",
            prompt:
              "Analiza los indicadores clave de liquidez, endeudamiento y rentabilidad. Identifica posibles riesgos financieros y sugiere estrategias para mejorar la estructura de capital de la organización."
          }
        ]
      },
      {
        title: "Análisis de Rentabilidad",
        prompts: [
          {
            title: "Rentabilidad por línea de negocio",
            prompt:
              "Analiza la rentabilidad de cada unidad o línea de negocio durante el último año. Identifica los segmentos más rentables y los que generan pérdidas. Recomienda estrategias para mejorar la rentabilidad global."
          },
          {
            title: "Margen bruto y margen operativo",
            prompt:
              "Calcula y compara el margen bruto y operativo en los últimos tres períodos. Explica qué factores internos o externos impactaron estas métricas y cómo podrían optimizarse."
          },
          {
            title: "Análisis del punto de equilibrio",
            prompt:
              "Determina el punto de equilibrio de la empresa considerando sus costos fijos y variables. Evalúa si el volumen actual de ventas garantiza sostenibilidad financiera y qué ajustes deberían realizarse."
          }
        ]
      },
      {
        title: "Flujos de Efectivo",
        prompts: [
          {
            title: "Evaluación del flujo de caja operativo",
            prompt:
              "Analiza el flujo de efectivo operativo de los últimos 12 meses. Identifica las principales fuentes de ingresos y salidas de efectivo. Propón estrategias para fortalecer la liquidez."
          },
          {
            title: "Proyección de flujo de efectivo",
            prompt:
              "Elabora una proyección de flujo de efectivo para los próximos seis meses basada en las tendencias históricas y supuestos de crecimiento. Incluye escenarios optimista y conservador."
          },
          {
            title: "Detección de déficit de efectivo",
            prompt:
              "Identifica periodos en los que la empresa pueda enfrentar déficit de efectivo y propone medidas preventivas de corto plazo como líneas de crédito o ajustes en pagos."
          }
        ]
      },
      {
        title: "Indicadores Financieros Clave (KPIs)",
        prompts: [
          {
            title: "Diseño de tablero financiero",
            prompt:
              "Diseña un tablero con los principales indicadores financieros: liquidez corriente, rotación de inventarios, margen neto y rentabilidad sobre patrimonio. Explica cómo cada métrica aporta a la toma de decisiones estratégicas."
          },
          {
            title: "Evaluación de KPIs por departamento",
            prompt:
              "Evalúa los indicadores de desempeño financiero por departamento (ventas, producción, administración). Identifica los que necesitan revisión inmediata y justifica tu recomendación."
          },
          {
            title: "Análisis de tendencias KPI",
            prompt:
              "Genera un análisis de tendencias en los principales KPIs financieros de los últimos tres años. Destaca patrones relevantes y oportunidades de mejora."
          }
        ]
      },
      {
        title: "Proyecciones y Planeación Financiera",
        prompts: [
          {
            title: "Modelación de escenarios financieros",
            prompt:
              "Crea tres escenarios financieros (optimista, base y pesimista) proyectando ingresos, costos y utilidades. Explica el impacto de cada uno sobre la liquidez y rentabilidad."
          },
          {
            title: "Análisis de sensibilidad",
            prompt:
              "Realiza un análisis de sensibilidad del presupuesto anual ante variaciones en precios de venta o costos. Identifica las variables más críticas y cómo gestionarlas."
          },
          {
            title: "Proyección de estados financieros futuros",
            prompt:
              "Elabora una proyección de estados financieros (balance y resultados) a 12 meses. Explica los supuestos aplicados y las implicaciones estratégicas."
          }
        ]
      }
    ]
  },
  {
    title: "💬 Comunicación Empresarial de Alto Impacto",
    icon: "🗣️",
    subcategories: [
      {
        title: "Cartas explicativas para clientes",
        prompts: [
          {
            title: "Carta explicativa de resultados financieros",
            prompt:
              "Redacta una carta profesional dirigida a un cliente para explicar los resultados financieros del trimestre. Utiliza un lenguaje claro, evita tecnicismos excesivos y resalta los aspectos positivos junto con las áreas de mejora."
          },
          {
            title: "Comunicación de hallazgos contables",
            prompt:
              "Escribe una carta breve y profesional explicando un hallazgo contable detectado en la revisión de documentos del cliente. Sugiere soluciones y enfatiza tu compromiso con la transparencia."
          },
          {
            title: "Informe de auditoría para clientes",
            prompt:
              "Prepara un informe ejecutivo de resultados de auditoría para un cliente no financiero. Resume las observaciones clave y sus implicaciones en el negocio, utilizando un lenguaje claro y comprensible."
          }
        ]
      },
      {
        title: "Reportes ejecutivos personalizados",
        prompts: [
          {
            title: "Reporte ejecutivo mensual",
            prompt:
              "Crea un reporte mensual para la alta gerencia destacando ingresos, egresos y rentabilidad del negocio. Utiliza tono formal y estructura ejecutiva con conclusiones y recomendaciones."
          },
          {
            title: "Informe trimestral para junta directiva",
            prompt:
              "Elabora un informe ejecutivo trimestral para presentación ante junta directiva, integrando métricas clave, tendencias y oportunidades detectadas."
          },
          {
            title: "Reporte de desempeño financiero",
            prompt:
              "Genera un informe de desempeño financiero dirigido a inversionistas, destacando la evolución del margen operativo, liquidez y rentabilidad sobre capital."
          }
        ]
      },
      {
        title: "Presentaciones de resultados",
        prompts: [
          {
            title: "Presentación de cierre anual",
            prompt:
              "Crea una presentación de resultados de cierre anual con gráficos y conclusiones clave sobre el desempeño financiero. Incluye recomendaciones estratégicas para el nuevo ejercicio."
          },
          {
            title: "Resumen ejecutivo para socios",
            prompt:
              "Elabora un resumen visual para socios de la compañía, destacando las principales métricas financieras y no financieras alcanzadas durante el año."
          },
          {
            title: "Presentación de resultados departamentales",
            prompt:
              "Desarrolla una presentación para comunicar los resultados de un área específica, conectando su desempeño con los objetivos estratégicos de la empresa."
          }
        ]
      },
      {
        title: "Comunicación de hallazgos de auditoría",
        prompts: [
          {
            title: "Informe ejecutivo de auditoría",
            prompt:
              "Redacta un resumen ejecutivo para acompañar el informe de auditoría, enfocándote en los principales hallazgos y sus impactos potenciales."
          },
          {
            title: "Comunicación de desviaciones encontradas",
            prompt:
              "Escribe un documento profesional para informar a la gerencia sobre desviaciones detectadas durante la auditoría interna. Propón soluciones claras."
          },
          {
            title: "Reporte de seguimiento de auditoría",
            prompt:
              "Genera un reporte de seguimiento a las acciones correctivas implementadas después de una auditoría anterior. Evalúa avances y resultados."
          }
        ]
      },
      {
        title: "Explicación de impactos fiscales",
        prompts: [
          {
            title: "Informe sobre cambios tributarios",
            prompt:
              "Explica a un cliente los efectos de una nueva ley fiscal en su estructura de costos. Presenta las implicaciones prácticas con ejemplos."
          },
          {
            title: "Impacto fiscal en operaciones internacionales",
            prompt:
              "Analiza el impacto de las normas tributarias internacionales en una empresa con presencia regional. Propón estrategias de mitigación."
          },
          {
            title: "Resumen fiscal para alta dirección",
            prompt:
              "Crea un resumen ejecutivo sobre el impacto fiscal del último ejercicio, destacando riesgos, oportunidades y medidas de cumplimiento."
          }
        ]
      }
    ]
  },
  {
    title: "🤝 Propuestas y Cotizaciones que Cierran Negocios",
    icon: "💼",
    subcategories: [
      {
        title: "Propuestas de servicios contables",
        prompts: [
          {
            title: "Propuesta comercial integral",
            prompt:
              "Redacta una propuesta para ofrecer servicios contables integrales, destacando beneficios, procesos y valor agregado para el cliente."
          },
          {
            title: "Carta de presentación profesional",
            prompt:
              "Escribe una carta formal de presentación de tus servicios contables enfatizando experiencia, confianza y resultados comprobables."
          },
          {
            title: "Oferta para cliente potencial",
            prompt:
              "Crea una oferta comercial atractiva para captar a un cliente nuevo, destacando ventajas competitivas y una estructura de precios clara."
          }
        ]
      },
      {
        title: "Cotizaciones por paquetes de servicios",
        prompts: [
          {
            title: "Cotización de paquete básico",
            prompt:
              "Prepara una cotización para un paquete básico de servicios contables que incluya gestión mensual, reportes y asesorías."
          },
          {
            title: "Cotización de servicios premium",
            prompt:
              "Crea una propuesta de cotización premium que integre asesoría fiscal estratégica y planificación financiera."
          },
          {
            title: "Comparativa de precios por paquete",
            prompt:
              "Elabora una tabla comparativa entre diferentes paquetes de servicios mostrando el valor agregado de cada nivel."
          }
        ]
      },
      {
        title: "Presentación de servicios de valor agregado",
        prompts: [
          {
            title: "Presentación comercial ejecutiva",
            prompt:
              "Diseña una presentación para comunicar tus servicios de valor agregado, enfocada en ahorro fiscal, automatización y crecimiento financiero del cliente."
          },
          {
            title: "Catálogo de servicios",
            prompt:
              "Crea un catálogo visual con tus servicios diferenciados, beneficios y testimonios de clientes."
          },
          {
            title: "Resumen ejecutivo de propuesta",
            prompt:
              "Escribe un resumen ejecutivo de tu oferta de servicios, destacando el retorno de inversión esperado."
          }
        ]
      },
      {
        title: "Justificación de honorarios",
        prompts: [
          {
            title: "Argumento de valor profesional",
            prompt:
              "Redacta un texto explicando cómo tus honorarios reflejan experiencia, responsabilidad y resultados."
          },
          {
            title: "Explicación comparativa de tarifas",
            prompt:
              "Prepara un argumento que justifique tu tarifa en comparación con el promedio del mercado, destacando calidad y atención personalizada."
          },
          {
            title: "Documento de política de honorarios",
            prompt:
              "Crea un documento formal que describa las políticas de cobro, ajustes y condiciones de pago."
          }
        ]
      },
      {
        title: "Contratos de servicios profesionales",
        prompts: [
          {
            title: "Modelo de contrato de servicios contables",
            prompt:
              "Redacta un contrato de servicios contables con cláusulas de confidencialidad, alcance y condiciones de pago."
          },
          {
            title: "Términos de renovación contractual",
            prompt:
              "Escribe un anexo que detalle las condiciones para renovación automática del contrato y ajustes anuales."
          },
          {
            title: "Carta de aceptación de contrato",
            prompt:
              "Crea una carta formal de aceptación del contrato con agradecimiento y confirmación del inicio de servicios."
          }
        ]
      }
    ]
  }
];

export default promptsData;
