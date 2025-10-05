// src/promptsData.js
// Estructura: array de categorías -> cada categoría tiene subcategories -> cada subcategory tiene prompts (title + prompt)

const promptsData = [
  // 1
  {
    title: "📊 Análisis Financiero Estratégico",
    icon: "📈",
    subcategories: [
      {
        title: "Interpretación de Estados Financieros",
        prompts: [
          {
            title: "Prompt para Análisis Integral",
            prompt: "Actúa como un analista financiero senior. Analiza los estados financieros"
          },
          {
            title: "Cambios año a año",
            prompt: "Identifica los cambios año a año en ingresos, costos y gastos. Señala 3 riesgos críticos y su prioridad de mitigación."
          },
          {
            title: "Resumen ejecutivo de salud financiera",
            prompt: "Resume la salud financiera en 5 bullets: liquidez, rentabilidad, endeudamiento, eficiencia y solvencia; añade 2 acciones inmediatas."
          }
        ]
      },
      {
        title: "Análisis de Ratios y KPIs",
        prompts: [
          {
            title: "Ratios esenciales",
            prompt: "Calcula e interpreta margen bruto, EBIT, ROE, deuda/activo y liquidez corriente; aporta 3 insights accionables."
          },
          {
            title: "Benchmarking de KPIs",
            prompt: "Compara los KPIs con benchmarks del sector y sugiere 2 iniciativas para mejorar los principales indicadores."
          },
          {
            title: "Tendencias en KPIs",
            prompt: "Detecta tendencias relevantes en margen y rotación de activos; propone 2 medidas para optimizar resultados."
          }
        ]
      },
      {
        title: "Proyecciones y Forecasting",
        prompts: [
          {
            title: "Forecast conservador",
            prompt: "Genera un forecast de ingresos y costos para el próximo año basado en últimos 3 años y supuestos conservadores; indica 3 riesgos."
          },
          {
            title: "Escenarios",
            prompt: "Crea tres escenarios (optimista, base, pesimista) y muestra el impacto esperado en utilidad neta y flujo de caja."
          },
          {
            title: "Supuestos clave",
            prompt: "Resume los supuestos clave del forecast en 5 puntos y sugiere indicadores para seguimiento mensual."
          }
        ]
      },
      {
        title: "Evaluación de Rentabilidad por Línea",
        prompts: [
          {
            title: "Rentabilidad por producto",
            prompt: "Analiza rentabilidad por línea de producto/servicio; identifica 2 líneas no rentables y sugiere acciones concretas."
          },
          {
            title: "Margen y punto de equilibrio",
            prompt: "Calcula margen de contribución y punto de equilibrio por línea; recomienda ajustes de precio o costos."
          },
          {
            title: "Estrategias para mejorar rentabilidad",
            prompt: "Propón tres estrategias para mejorar rentabilidad: ajuste de precios, optimización del mix y reducción de costos variables."
          }
        ]
      },
      {
        title: "Análisis de Liquidez y Solvencia",
        prompts: [
          {
            title: "Estado de liquidez",
            prompt: "Evalúa liquidez inmediata y a corto plazo; propone 3 medidas para mejorar caja en 90 días."
          },
          {
            title: "Estructura de deuda",
            prompt: "Analiza vencimientos de deuda y relación deuda/EBITDA; sugiere opciones de refinanciación si hay riesgo."
          },
          {
            title: "Mejoras en ciclo de caja",
            prompt: "Propone un checklist de acciones para reducir ciclo de conversión de efectivo y mejorar flujo operativo."
          }
        ]
      }
    ]
  },

  // 2
  {
    title: "💬 Comunicación Empresarial de Alto Impacto",
    icon: "💬",
    subcategories: [
      {
        title: "Informes y Presentaciones",
        prompts: [
          {
            title: "Informe ejecutivo corto",
            prompt: "Redacta un informe ejecutivo (máx. 200 palabras) con KPIs clave, 3 hallazgos y 3 recomendaciones."
          },
          {
            title: "Diapositivas para directores",
            prompt: "Prepara 5 diapositivas para directorio: resumen, KPIs, riesgos, iniciativas y decisiones solicitadas."
          },
          {
            title: "Resumen trimestral",
            prompt: "Resume resultados trimestrales en 6 bullets claros para una audiencia no técnica."
          }
        ]
      },
      {
        title: "Comunicados Corporativos",
        prompts: [
          {
            title: "Comunicado de resultados",
            prompt: "Escribe un comunicado breve anunciando resultados positivos, resaltando impacto y próximos pasos."
          },
          {
            title: "Cambio de política",
            prompt: "Redacta una nota explicativa sobre un cambio de política financiera y su efecto en clientes y empleados."
          },
          {
            title: "Versión para redes",
            prompt: "Genera una versión corta y amigable del comunicado para publicar en redes sociales corporativas."
          }
        ]
      },
      {
        title: "Propuestas de valor para clientes",
        prompts: [
          {
            title: "Beneficios en 1 párrafo",
            prompt: "Redacta un párrafo que describa 3 beneficios clave de contratar servicios contables profesionales."
          },
          {
            title: "Elevator pitch",
            prompt: "Crea un elevator pitch de 40 palabras para captar clientes potenciales en una reunión inicial."
          },
          {
            title: "Ventajas competitivas",
            prompt: "Enumera 5 ventajas competitivas que diferencian el servicio frente a la competencia."
          }
        ]
      },
      {
        title: "Comunicación interna para finanzas",
        prompts: [
          {
            title: "Email interno",
            prompt: "Escribe un email breve al equipo financiero explicando cambios en el proceso de cierre mensual."
          },
          {
            title: "Checklist de comunicación",
            prompt: "Crea un checklist para comunicar resultados mensuales al resto de la empresa."
          },
          {
            title: "Instrucciones para cierre",
            prompt: "Redacta instrucciones claras para la recopilación de documentos y entregas del cierre."
          }
        ]
      },
      {
        title: "Guiones para presentaciones ejecutivas",
        prompts: [
          {
            title: "Guion 7 minutos",
            prompt: "Escribe el guion para presentar resultados en 7 minutos: intro, hallazgos, recomendaciones y cierre."
          },
          {
            title: "Preguntas difíciles",
            prompt: "Prepara respuestas breves para 5 preguntas difíciles que pueda hacer un inversionista."
          },
          {
            title: "Cierre con CTA",
            prompt: "Genera un cierre persuasivo con call-to-action claro para aprobar una propuesta o presupuesto."
          }
        ]
      }
    ]
  },

  // 3
  {
    title: "💼 Propuestas y Cotizaciones que Cierran Negocios",
    icon: "💼",
    subcategories: [
      {
        title: "Generación de Propuestas",
        prompts: [
          {
            title: "Propuesta estándar",
            prompt: "Redacta una propuesta de servicios contables en 3 secciones: alcance, metodología y precio."
          },
          {
            title: "Beneficios y resultados",
            prompt: "Incluye los beneficios tangibles que el cliente obtendrá y plazos esperados de entrega."
          },
          {
            title: "Escalado de servicios",
            prompt: "Agrega opciones de escalado de servicio y cómo evolucionaría el precio con más alcance."
          }
        ]
      },
      {
        title: "Cotización profesional",
        prompts: [
          {
            title: "Desglose de actividades",
            prompt: "Elabora una cotización con desglose de actividades, horas estimadas y coste por actividad."
          },
          {
            title: "Condiciones de pago",
            prompt: "Incluye condiciones de pago claras, plazos y políticas de modificación del alcance."
          },
          {
            title: "Paquetes sugeridos",
            prompt: "Propón dos paquetes (básico y premium) con deliverables y beneficios de cada uno."
          }
        ]
      },
      {
        title: "Discurso de venta para servicios",
        prompts: [
          {
            title: "Pitch 90s",
            prompt: "Escribe un guion de 90 segundos para vender servicios contables a un CEO de PyME."
          },
          {
            title: "ROI en 6 meses",
            prompt: "Resume cómo demostrar el ROI esperado en 6 meses con métricas concretas y ejemplos."
          },
          {
            title: "Manejo de objeciones",
            prompt: "Crea respuestas breves para 5 objeciones comunes durante el proceso comercial."
          }
        ]
      },
      {
        title: "Paquetes y precios",
        prompts: [
          {
            title: "Diseño de paquetes",
            prompt: "Diseña 3 paquetes de servicio con deliverables y precios orientativos para PyMEs."
          },
          {
            title: "Estrategia de precios",
            prompt: "Propone estrategia de precios basada en valor percibido y comparativa de mercado."
          },
          {
            title: "KPIs de éxito",
            prompt: "Define métricas para medir éxito del paquete en los primeros 3 meses."
          }
        ]
      },
      {
        title: "Casos de éxito y testimonios",
        prompts: [
          {
            title: "Caso de éxito breve",
            prompt: "Redacta un caso de éxito que muestre ahorro o mejora financiera significativa del cliente."
          },
          {
            title: "Citas para testimonios",
            prompt: "Extrae 3 frases potentes para usar como testimonio en la web."
          },
          {
            title: "Resumen ejecutivo",
            prompt: "Escribe un resumen ejecutivo del case study enfocado en resultados y proceso."
          }
        ]
      }
    ]
  },

  // 4
  {
    title: "📈 Reportes y Dashboards",
    icon: "📊",
    subcategories: [
      {
        title: "Creación de KPIs financieros",
        prompts: [
          {
            title: "KPI esenciales",
            prompt: "Define 7 KPIs financieros esenciales para una PyME y explica cómo calcularlos."
          },
          {
            title: "Priorizar KPIs",
            prompt: "Prioriza KPIs por impacto en rentabilidad y sugiere metas trimestrales."
          },
          {
            title: "Fuentes y frecuencia",
            prompt: "Indica fuentes de datos y frecuencia de actualización para cada KPI propuesto."
          }
        ]
      },
      {
        title: "Reportes de gestión automatizados",
        prompts: [
          {
            title: "Plantilla de reporte",
            prompt: "Diseña la estructura de un reporte de gestión mensual con secciones y KPIs clave."
          },
          {
            title: "Automatización",
            prompt: "Describe pasos para automatizar la extracción de datos y generación del reporte."
          },
          {
            title: "Alertas y thresholds",
            prompt: "Propón thresholds y alertas automáticas para detectar desviaciones críticas."
          }
        ]
      },
      {
        title: "Dashboards ejecutivos",
        prompts: [
          {
            title: "Panel ejecutivo",
            prompt: "Diseña un dashboard ejecutivo con 6 widgets imprescindibles y su objetivo."
          },
          {
            title: "Indicadores visuales",
            prompt: "Sugiere visualizaciones (gráficas/tabla) para comunicar KPIs a la dirección."
          },
          {
            title: "Guía de uso",
            prompt: "Escribe una mini-guía para interpretar el dashboard en 5 bullets."
          }
        ]
      },
      {
        title: "Análisis de desviaciones presupuestarias",
        prompts: [
          {
            title: "Comparación presupuesto vs real",
            prompt: "Resume cómo analizar desviaciones presupuestarias mes a mes y causas comunes."
          },
          {
            title: "Acciones correctivas",
            prompt: "Propone 3 acciones correctivas para desviaciones recurrentes en gastos operativos."
          },
          {
            title: "Reporte para gerencia",
            prompt: "Redacta 5 bullets para explicar desviaciones a gerencia con foco en decisiones."
          }
        ]
      },
      {
        title: "Reportes de cumplimiento",
        prompts: [
          {
            title: "Checklist de cumplimiento",
            prompt: "Crea un checklist mensual para controlar obligaciones legales y fiscales."
          },
          {
            title: "Informe de auditoría interna",
            prompt: "Estructura un informe breve de hallazgos y recomendaciones tras una revisión interna."
          },
          {
            title: "KPIs de cumplimiento",
            prompt: "Define KPIs para medir eficacia del cumplimiento (porcentaje de tareas a tiempo, etc.)."
          }
        ]
      }
    ]
  },

  // 5
  {
    title: "🧾 Cumplimiento Fiscal",
    icon: "🧾",
    subcategories: [
      {
        title: "Calendarios de obligaciones",
        prompts: [
          {
            title: "Calendario básico",
            prompt: "Genera un calendario anual de obligaciones fiscales esenciales para una PyME."
          },
          {
            title: "Recordatorios",
            prompt: "Sugiere reglas de recordatorio y responsables para evitar vencimientos."
          },
          {
            title: "Checklist pre-vencimiento",
            prompt: "Crea checklist de verificación 7 días antes de cada vencimiento fiscal."
          }
        ]
      },
      {
        title: "Explicación de cambios normativos",
        prompts: [
          {
            title: "Resumen de cambio",
            prompt: "Resume un cambio normativo reciente en 5 bullets y su impacto principal."
          },
          {
            title: "Acción requerida",
            prompt: "Indica acciones concretas que la empresa debe realizar para adaptarse al cambio."
          },
          {
            title: "Comunicación interna",
            prompt: "Prepara un email corto para informar al equipo sobre la nueva norma y próximos pasos."
          }
        ]
      },
      {
        title: "Estrategias de optimización fiscal",
        prompts: [
          {
            title: "Optimización básica",
            prompt: "Sugiere 3 estrategias legales y éticas para optimizar la carga fiscal de una PyME."
          },
          {
            title: "Comparativa de opciones",
            prompt: "Compara 2 alternativas fiscales (por ejemplo, régimen A vs B) y sus efectos."
          },
          {
            title: "Riesgos y controles",
            prompt: "Lista riesgos asociados a una estrategia fiscal y controles para mitigarlos."
          }
        ]
      },
      {
        title: "Análisis de riesgos tributarios",
        prompts: [
          {
            title: "Identificación de riesgos",
            prompt: "Identifica 5 riesgos tributarios frecuentes y su probabilidad de ocurrencia."
          },
          {
            title: "Plan de mitigación",
            prompt: "Propone medidas de mitigación para los tres riesgos más críticos."
          },
          {
            title: "Documentación requerida",
            prompt: "Enumera la documentación que respalda decisiones fiscales y facilita defensa ante fiscalización."
          }
        ]
      },
      {
        title: "Documentación de cumplimiento",
        prompts: [
          {
            title: "Plantilla de archivo",
            prompt: "Propone una estructura de carpeta y nombres de archivos para mantener cumplimiento organizado."
          },
          {
            title: "Check de auditoría",
            prompt: "Crea un checklist que sirva para una auditoría fiscal interna rápida."
          },
          {
            title: "Registro de decisiones",
            prompt: "Sugiere un formato breve para registrar decisiones fiscales y la justificación legal."
          }
        ]
      }
    ]
  },

  // 6
  {
    title: "🧩 Auditoría y Control",
    icon: "🧩",
    subcategories: [
      {
        title: "Programas de auditoría personalizados",
        prompts: [
          {
            title: "Diseño de programa",
            prompt: "Diseña un programa de auditoría anual para procesos contables críticos con 5 pasos."
          },
          {
            title: "Áreas prioritarias",
            prompt: "Identifica las áreas prioritarias a auditar en una PyME y razones."
          },
          {
            title: "Matriz de riesgos",
            prompt: "Sugiere una matriz riesgo-impacto para priorizar pruebas de auditoría."
          }
        ]
      },
      {
        title: "Evaluación de controles internos",
        prompts: [
          {
            title: "Check de controles",
            prompt: "Crea un checklist breve para evaluar controles de caja, compras y nómina."
          },
          {
            title: "Debilidades comunes",
            prompt: "Enumera 5 debilidades de control internas y medidas correctivas."
          },
          {
            title: "Recomendaciones prácticas",
            prompt: "Propone 3 recomendaciones para fortalecer controles con bajo costo de implementación."
          }
        ]
      },
      {
        title: "Detección de irregularidades",
        prompts: [
          {
            title: "Señales de alerta",
            prompt: "Lista 7 señales que pueden indicar fraude o irregularidades financieras."
          },
          {
            title: "Pruebas rápidas",
            prompt: "Sugiere pruebas de auditoría rápidas para detectar inconsistencias en transacciones."
          },
          {
            title: "Protocolo inicial",
            prompt: "Propone un protocolo inicial de investigación ante una sospecha de irregularidad."
          }
        ]
      },
      {
        title: "Recomendaciones de mejora",
        prompts: [
          {
            title: "Plan de mejora",
            prompt: "Estructura un plan de mejora de controles con prioridades y plazos en 5 puntos."
          },
          {
            title: "Medición de impacto",
            prompt: "Define métricas para medir el impacto de una mejora en controles en 3 meses."
          },
          {
            title: "Comunicación de hallazgos",
            prompt: "Redacta un resumen para gerencia con hallazgos, riesgos y acciones recomendadas."
          }
        ]
      },
      {
        title: "Seguimiento de hallazgos",
        prompts: [
          {
            title: "Registro de hallazgos",
            prompt: "Propone un formato simple para registrar hallazgos, responsable y estado de avance."
          },
          {
            title: "Priorización",
            prompt: "Sugiere criterios para priorizar la corrección de hallazgos por impacto y urgencia."
          },
          {
            title: "Reporte de cierre",
            prompt: "Genera un email de cierre al responsable cuando un hallazgo es resuelto, con verificación."
          }
        ]
      }
    ]
  },

  // 7
  {
    title: "🌍 Clientes Internacionales",
    icon: "🌍",
    subcategories: [
      {
        title: "Análisis de diferencias normativas",
        prompts: [
          {
            title: "Comparativa normativa",
            prompt: "Resume en 5 bullets las principales diferencias contables entre dos países seleccionados."
          },
          {
            title: "Impacto local",
            prompt: "Indica cómo una diferencia normativa puede afectar estados financieros y recomendaciones."
          },
          {
            title: "Checklist de cumplimiento",
            prompt: "Genera checklist para evaluar cumplimiento contable en operaciones internacionales."
          }
        ]
      },
      {
        title: "Reportes en múltiples monedas",
        prompts: [
          {
            title: "Conversión y políticas",
            prompt: "Describe reglas prácticas para conversión de moneda y presentación en reportes consolidados."
          },
          {
            title: "Riesgos de tipo de cambio",
            prompt: "Identifica riesgos de tipo de cambio y propone 3 medidas de cobertura o mitigación."
          },
          {
            title: "Formato de reporte",
            prompt: "Proporciona estructura de reporte consolidado que incluya conciliaciones y notas clave."
          }
        ]
      },
      {
        title: "Explicación de regulaciones locales",
        prompts: [
          {
            title: "Resumen local",
            prompt: "Resume en 5 puntos una regulación clave del país objetivo y su efecto contable."
          },
          {
            title: "Acción requerida",
            prompt: "Indica acciones prácticas para cumplir la regulación y documentos necesarios."
          },
          {
            title: "Riesgos regulatorios",
            prompt: "Lista riesgos regulatorios y controles recomendados para reducir exposición."
          }
        ]
      },
      {
        title: "Comunicación intercultural",
        prompts: [
          {
            title: "Mensajes para clientes",
            prompt: "Adaptar un mensaje comercial para clientes internacionales con sensibilidad cultural en 3 frases."
          },
          {
            title: "Presentación multilingüe",
            prompt: "Sugerir estructura y palabras clave para una presentación breve a clientes en otro idioma."
          },
          {
            title: "Negociación internacional",
            prompt: "Dar 5 recomendaciones para negociar términos financieros con clientes de otra cultura."
          }
        ]
      },
      {
        title: "Consolidación internacional",
        prompts: [
          {
            title: "Pasos de consolidación",
            prompt: "Describe en 6 pasos el proceso de consolidación financiera entre entidades en distintos países."
          },
          {
            title: "Ajustes comunes",
            prompt: "Enumera ajustes contables comunes en consolidación y su justificación."
          },
          {
            title: "Reporte de conciliación",
            prompt: "Proporciona formato simple para reporte de conciliación intercompañía."
          }
        ]
      }
    ]
  }
];

export default promptsData;

