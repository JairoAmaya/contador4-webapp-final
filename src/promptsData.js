// src/promptsData.js

const promptsData = [
  // === CATEGORÍA 1 ===
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
              "Actúa como un analista financiero senior. Analiza los estados financieros adjuntos (balance general, estado de resultados y estado de cambios en el patrimonio) de los últimos 3 años. Identifica las 5 tendencias más significativas, evalúa la salud financiera general de la empresa y proporciona 3 recomendaciones estratégicas basadas en tu análisis."
          },
          {
            title: "Comparación interanual de resultados",
            prompt:
              "Genera un análisis comparativo de los estados de resultados de los últimos 2 años. Identifica los cambios en ingresos, costos y gastos, destacando las áreas con mayor impacto en la utilidad neta."
          },
          {
            title: "Identificación de debilidades financieras",
            prompt:
              "Revisa los estados financieros adjuntos y detecta 3 áreas críticas que representan riesgos para la estabilidad financiera de la empresa. Propón soluciones prácticas para cada una."
          }
        ]
      },
      {
        title: "Análisis de Rentabilidad y Eficiencia",
        prompts: [
          {
            title: "Evaluación de rentabilidad por unidad de negocio",
            prompt:
              "Analiza la rentabilidad por unidad de negocio o línea de producto. Calcula márgenes de contribución y propone medidas para optimizar resultados."
          },
          {
            title: "Desempeño operativo por indicadores",
            prompt:
              "Evalúa indicadores de rotación, ciclo de efectivo y eficiencia operativa. Sugiere ajustes que mejoren la productividad general."
          },
          {
            title: "Análisis del punto de equilibrio",
            prompt:
              "Calcula y analiza el punto de equilibrio de la empresa. Indica qué volumen de ventas garantiza la rentabilidad mínima esperada."
          }
        ]
      },
      {
        title: "Proyecciones Financieras",
        prompts: [
          {
            title: "Modelo de proyección a 5 años",
            prompt:
              "Crea un modelo financiero proyectado a 5 años con base en el desempeño histórico y supuestos de crecimiento. Incluye ingresos, gastos, flujo de caja y rentabilidad esperada."
          },
          {
            title: "Análisis de escenarios financieros",
            prompt:
              "Elabora tres escenarios (optimista, base y pesimista) considerando variaciones en ventas y costos. Evalúa el impacto en utilidades."
          },
          {
            title: "Pronóstico de flujo de caja",
            prompt:
              "Desarrolla una proyección de flujo de caja mensual para el próximo año, considerando ingresos recurrentes y gastos fijos y variables."
          }
        ]
      },
      {
        title: "Evaluación de Solvencia y Liquidez",
        prompts: [
          {
            title: "Análisis de liquidez empresarial",
            prompt:
              "Calcula indicadores de liquidez (corriente, rápida y capital de trabajo). Evalúa si la empresa puede cubrir sus obligaciones de corto plazo."
          },
          {
            title: "Evaluación de endeudamiento",
            prompt:
              "Analiza la estructura de deuda de la empresa y su capacidad de pago. Sugiere estrategias para mejorar el apalancamiento."
          },
          {
            title: "Diagnóstico de riesgo financiero",
            prompt:
              "Realiza un diagnóstico de riesgo financiero basado en liquidez, solvencia y rentabilidad. Presenta un resumen ejecutivo con hallazgos."
          }
        ]
      },
      {
        title: "Valoración de Empresas",
        prompts: [
          {
            title: "Valoración por flujo de caja descontado (DCF)",
            prompt:
              "Elabora una valoración de empresa aplicando la metodología de flujo de caja descontado. Explica supuestos y tasas utilizadas."
          },
          {
            title: "Comparativo de valoración por múltiplos",
            prompt:
              "Compara la valoración de la empresa con competidores del sector usando múltiplos como EV/EBITDA y P/E."
          },
          {
            title: "Informe de valoración resumido",
            prompt:
              "Genera un informe ejecutivo con el valor estimado de la empresa, conclusiones y recomendaciones estratégicas."
          }
        ]
      }
    ]
  },

  // === CATEGORÍA 2 ===
  {
    title: "💬 Comunicación Empresarial de Alto Impacto",
    icon: "📝",
    subcategories: [
      {
        title: "Informes y Presentaciones",
        prompts: [
          {
            title: "Informe ejecutivo para dirección",
            prompt:
              "Redacta un informe ejecutivo de máximo 300 palabras que resuma resultados financieros, logros clave y riesgos detectados."
          },
          {
            title: "Presentación para inversionistas",
            prompt:
              "Crea una presentación de alto impacto para inversionistas con resumen de resultados, proyecciones y razones para invertir."
          },
          {
            title: "Reporte trimestral interactivo",
            prompt:
              "Diseña un informe trimestral interactivo con gráficos y análisis visual de desempeño financiero."
          }
        ]
      },
      {
        title: "Comunicación Interna",
        prompts: [
          {
            title: "Boletín contable interno",
            prompt:
              "Redacta un boletín mensual que comunique novedades contables y resultados relevantes al equipo interno."
          },
          {
            title: "Guía de comunicación técnica",
            prompt:
              "Desarrolla una guía para comunicar información contable a equipos no financieros de forma clara y sencilla."
          },
          {
            title: "Resumen de reuniones ejecutivas",
            prompt:
              "Prepara un resumen estructurado de la última reunión financiera con decisiones y próximos pasos."
          }
        ]
      },
      {
        title: "Mensajes Estratégicos",
        prompts: [
          {
            title: "Comunicación de resultados clave",
            prompt:
              "Redacta un comunicado que resuma resultados clave y mantenga la confianza de stakeholders."
          },
          {
            title: "Anuncio de cambios financieros",
            prompt:
              "Crea un mensaje formal explicando ajustes presupuestales o financieros recientes."
          },
          {
            title: "Carta a clientes o inversionistas",
            prompt:
              "Escribe una carta de resultados dirigida a clientes o inversionistas con tono profesional y positivo."
          }
        ]
      },
      {
        title: "Tono y Estilo Profesional",
        prompts: [
          {
            title: "Optimización de lenguaje financiero",
            prompt:
              "Reescribe un texto técnico financiero con lenguaje más claro y accesible sin perder rigor profesional."
          },
          {
            title: "Manual de tono corporativo",
            prompt:
              "Elabora una guía de estilo y tono para todas las comunicaciones contables y financieras."
          },
          {
            title: "Redacción inclusiva y precisa",
            prompt:
              "Transforma un texto contable para hacerlo más inclusivo y comprensible a públicos diversos."
          }
        ]
      },
      {
        title: "Comunicación Externa",
        prompts: [
          {
            title: "Comunicado de resultados al público",
            prompt:
              "Redacta un comunicado de prensa con los resultados financieros más relevantes del trimestre."
          },
          {
            title: "Anuncio institucional",
            prompt:
              "Escribe un anuncio institucional sobre una nueva política contable o alianza estratégica."
          },
          {
            title: "Correo informativo profesional",
            prompt:
              "Crea un correo formal informando cambios relevantes en procedimientos contables."
          }
        ]
      }
    ]
  },

  // === CATEGORÍA 3 ===
  {
    title: "🤝 Propuestas y Cotizaciones que Cierran Negocios",
    icon: "💼",
    subcategories: [
      {
        title: "Generación de Propuestas",
        prompts: [
          {
            title: "Propuesta de servicios contables",
            prompt:
              "Redacta una propuesta comercial atractiva para ofrecer servicios contables y financieros a una empresa mediana."
          },
          {
            title: "Propuesta integral para nuevo cliente",
            prompt:
              "Crea una propuesta integral que combine contabilidad, asesoría fiscal y automatización de reportes."
          },
          {
            title: "Plantilla editable de propuesta profesional",
            prompt:
              "Diseña una plantilla editable para crear propuestas personalizadas rápidamente."
          }
        ]
      },
      {
        title: "Cotizaciones Profesionales",
        prompts: [
          {
            title: "Cotización de servicios contables",
            prompt:
              "Elabora una cotización detallada con actividades, tarifas y plazos de entrega claros."
          },
          {
            title: "Comparativo de precios de mercado",
            prompt:
              "Crea una tabla comparativa de tarifas promedio del sector contable para justificar tu cotización."
          },
          {
            title: "Oferta comercial personalizada",
            prompt:
              "Redacta una oferta que destaque beneficios diferenciales frente a la competencia."
          }
        ]
      },
      {
        title: "Presentaciones de Valor",
        prompts: [
          {
            title: "Resumen ejecutivo de propuesta",
            prompt:
              "Redacta un resumen ejecutivo que resuma objetivos, beneficios y diferenciadores de la propuesta."
          },
          {
            title: "Pitch contable de alto impacto",
            prompt:
              "Crea una presentación corta y convincente para cerrar negocios con clientes empresariales."
          },
          {
            title: "Argumento comercial persuasivo",
            prompt:
              "Diseña un mensaje clave para resaltar el valor de tus servicios frente a competidores."
          }
        ]
      },
      {
        title: "Seguimiento Comercial",
        prompts: [
          {
            title: "Correo de seguimiento post reunión",
            prompt:
              "Redacta un correo de seguimiento profesional agradeciendo la reunión y reforzando el valor de la propuesta."
          },
          {
            title: "Recordatorio amable de cotización",
            prompt:
              "Crea un mensaje de recordatorio cordial para obtener respuesta sobre una cotización enviada."
          },
          {
            title: "Guion de llamada de cierre",
            prompt:
              "Desarrolla un guion breve para llamada de cierre con enfoque consultivo."
          }
        ]
      },
      {
        title: "Optimización de Procesos Comerciales",
        prompts: [
          {
            title: "Flujo de ventas automatizado",
            prompt:
              "Diseña un flujo de ventas automatizado que notifique seguimiento de propuestas y cotizaciones."
          },
          {
            title: "Plantilla CRM contable",
            prompt:
              "Crea una plantilla de CRM adaptada a firmas contables para gestionar clientes y oportunidades."
          },
          {
            title: "Reporte de efectividad comercial",
            prompt:
              "Genera un reporte que mida la tasa de conversión y efectividad de las propuestas enviadas."
          }
        ]
      }
    ]
  },

  // === CATEGORÍAS 4–7 (COMPLETAS) ===
  {
    title: "📈 Reportes y Dashboards Financieros",
    icon: "📊",
    subcategories: [
      {
        title: "Creación de KPIs Financieros",
        prompts: [
          {
            title: "Diseño de indicadores financieros",
            prompt:
              "Crea indicadores clave de desempeño para medir liquidez, rentabilidad y eficiencia operativa."
          },
          {
            title: "Evaluación de desempeño mediante KPIs",
            prompt:
              "Analiza los resultados de KPIs financieros recientes y sugiere acciones de mejora."
          },
          {
            title: "Tablero de KPIs dinámico",
            prompt:
              "Diseña un dashboard financiero visual con los principales indicadores clave."
          }
        ]
      },
      {
        title: "Reportes de Gestión Automatizados",
        prompts: [
          {
            title: "Automatización de reportes financieros",
            prompt:
              "Explica cómo generar reportes financieros automáticos usando herramientas BI."
          },
          {
            title: "Informe de eficiencia operativa",
            prompt:
              "Crea un reporte automatizado que mida eficiencia de procesos en tiempo real."
          },
          {
            title: "Reporte de flujo de caja automático",
            prompt:
              "Desarrolla un flujo de caja automatizado con alertas de déficit o superávit."
          }
        ]
      },
      {
        title: "Dashboards Ejecutivos",
        prompts: [
          {
            title: "Dashboard para dirección",
            prompt:
              "Crea un dashboard ejecutivo que resuma ingresos, costos, liquidez y rentabilidad."
          },
          {
            title: "Tablero comparativo de desempeño",
            prompt:
              "Diseña un tablero comparativo de resultados con gráficos interactivos."
          },
          {
            title: "Panel de control contable",
            prompt:
              "Construye un panel que muestre métricas contables clave actualizadas."
          }
        ]
      },
      {
        title: "Análisis de Desviaciones Presupuestarias",
        prompts: [
          {
            title: "Reporte de desviaciones",
            prompt:
              "Crea un informe que detalle variaciones entre presupuestos y resultados reales."
          },
          {
            title: "Informe de variaciones mensuales",
            prompt:
              "Elabora un análisis mensual de desviaciones y sus causas."
          },
          {
            title: "Análisis de causas presupuestales",
            prompt:
              "Explica las causas principales detrás de las desviaciones presupuestarias."
          }
        ]
      },
      {
        title: "Reportes de Cumplimiento",
        prompts: [
          {
            title: "Informe de cumplimiento financiero",
            prompt:
              "Prepara un informe de cumplimiento contable y fiscal según regulaciones vigentes."
          },
          {
            title: "Monitoreo de cumplimiento contable",
            prompt:
              "Crea un sistema de control para verificar cumplimiento mensual de obligaciones."
          },
          {
            title: "Reporte de cumplimiento para auditoría",
            prompt:
              "Desarrolla un reporte resumen de cumplimiento normativo para auditores."
          }
        ]
      }
    ]
  },

  {
    title: "🧾 Cumplimiento Fiscal Inteligente",
    icon: "💡",
    subcategories: [
      {
        title: "Calendarios de Obligaciones",
        prompts: [
          {
            title: "Agenda fiscal mensual",
            prompt:
              "Crea un calendario con las fechas clave de obligaciones fiscales próximas."
          },
          {
            title: "Plan de cumplimiento tributario",
            prompt:
              "Desarrolla un plan mensual de cumplimiento con recordatorios automáticos."
          },
          {
            title: "Control de vencimientos fiscales",
            prompt:
              "Genera un documento con fechas, responsables y estado de cumplimiento fiscal."
          }
        ]
      },
      {
        title: "Explicación de Cambios Normativos",
        prompts: [
          {
            title: "Informe de reformas fiscales",
            prompt:
              "Resume los principales cambios normativos del último año y su impacto operativo."
          },
          {
            title: "Guía práctica de adaptación",
            prompt:
              "Crea una guía para implementar las reformas tributarias recientes."
          },
          {
            title: "Análisis de impacto normativo",
            prompt:
              "Evalúa cómo una nueva norma afecta procesos contables de la empresa."
          }
        ]
      },
      {
        title: "Estrategias de Optimización Fiscal",
        prompts: [
          {
            title: "Plan de ahorro tributario",
            prompt:
              "Propón una estrategia para optimizar la carga tributaria mediante deducciones y beneficios."
          },
          {
            title: "Evaluación de incentivos fiscales",
            prompt:
              "Analiza los incentivos aplicables al sector para maximizar eficiencia fiscal."
          },
          {
            title: "Reestructuración fiscal estratégica",
            prompt:
              "Crea un esquema de reestructuración fiscal cumpliendo todas las normas."
          }
        ]
      },
      {
        title: "Análisis de Riesgos Tributarios",
        prompts: [
          {
            title: "Mapa de riesgos fiscales",
            prompt:
              "Identifica riesgos fiscales y su nivel de exposición dentro de la empresa."
          },
          {
            title: "Informe de exposición fiscal",
            prompt:
              "Elabora un reporte sobre los riesgos tributarios detectados y su impacto potencial."
          },
          {
            title: "Evaluación de cumplimiento tributario",
            prompt:
              "Analiza el nivel de cumplimiento tributario y propone medidas preventivas."
          }
        ]
      },
      {
        title: "Documentación de Cumplimiento",
        prompts: [
          {
            title: "Checklist de auditoría fiscal",
            prompt:
              "Crea un listado de documentos y soportes requeridos en auditorías fiscales."
          },
          {
            title: "Archivo digital fiscal",
            prompt:
              "Diseña un sistema de archivo digital de comprobantes tributarios organizado."
          },
          {
            title: "Informe de seguimiento de cumplimiento",
            prompt:
              "Redacta un informe sobre el grado de cumplimiento documental fiscal."
          }
        ]
      }
    ]
  },

  {
    title: "🔍 Auditoría y Control",
    icon: "🧮",
    subcategories: [
      {
        title: "Programas de Auditoría Personalizados",
        prompts: [
          {
            title: "Programa de auditoría interna",
            prompt:
              "Crea un programa de auditoría interna con alcance, objetivos y plan de revisión."
          },
          {
            title: "Plan anual de auditoría",
            prompt:
              "Elabora un plan anual priorizando áreas de riesgo financiero."
          },
          {
            title: "Evaluación de efectividad del programa",
            prompt:
              "Evalúa la eficacia del programa actual y su alineación con objetivos empresariales."
          }
        ]
      },
      {
        title: "Evaluación de Controles Internos",
        prompts: [
          {
            title: "Análisis de efectividad de controles",
            prompt:
              "Evalúa los controles internos y detecta posibles debilidades operativas."
          },
          {
            title: "Mapa de controles clave",
            prompt:
              "Diseña un mapa de procesos críticos con controles asociados."
          },
          {
            title: "Informe de debilidades",
            prompt:
              "Redacta un informe con debilidades y recomendaciones de mejora."
          }
        ]
      },
      {
        title: "Detección de Irregularidades",
        prompts: [
          {
            title: "Protocolo de detección de fraude",
            prompt:
              "Diseña un protocolo de identificación de fraudes contables o financieros."
          },
          {
            title: "Análisis de transacciones sospechosas",
            prompt:
              "Investiga transacciones con patrones inusuales y documenta hallazgos."
          },
          {
            title: "Evaluación de alertas de riesgo",
            prompt:
              "Desarrolla un sistema de alertas preventivas para detectar irregularidades."
          }
        ]
      },
      {
        title: "Recomendaciones de Mejora",
        prompts: [
          {
            title: "Informe de mejora contable",
            prompt:
              "Genera un informe de mejora en procesos contables basado en auditorías previas."
          },
          {
            title: "Plan de acción post auditoría",
            prompt:
              "Crea un plan con acciones, responsables y fechas para implementar mejoras."
          },
          {
            title: "Guía de buenas prácticas",
            prompt:
              "Elabora una guía de mejores prácticas para fortalecer el control interno."
          }
        ]
      },
      {
        title: "Seguimiento de Hallazgos",
        prompts: [
          {
            title: "Reporte de seguimiento",
            prompt:
              "Diseña un reporte para monitorear el avance de las acciones correctivas."
          },
          {
            title: "Evaluación de cumplimiento de mejoras",
            prompt:
              "Evalúa el cumplimiento de recomendaciones emitidas en auditorías anteriores."
          },
          {
            title: "Actualización del plan de control",
            prompt:
              "Actualiza el plan de control interno con base en hallazgos recientes."
          }
        ]
      }
    ]
  },

  {
    title: "🌍 Clientes Internacionales",
    icon: "🌐",
    subcategories: [
      {
        title: "Análisis de Diferencias Normativas",
        prompts: [
          {
            title: "Comparativo NIIF vs local",
            prompt:
              "Analiza diferencias entre las NIIF y la normativa local contable."
          },
          {
            title: "Evaluación de impacto NIIF",
            prompt:
              "Evalúa el impacto de adoptar NIIF en empresas medianas."
          },
          {
            title: "Guía de armonización contable",
            prompt:
              "Crea una guía para armonizar registros contables multinorma."
          }
        ]
      },
      {
        title: "Reportes en Múltiples Monedas",
        prompts: [
          {
            title: "Conversión de estados financieros",
            prompt:
              "Explica cómo convertir estados financieros entre distintas monedas."
          },
          {
            title: "Informe de exposición cambiaria",
            prompt:
              "Genera un análisis del riesgo cambiario y estrategias de mitigación."
          },
          {
            title: "Análisis del tipo de cambio",
            prompt:
              "Analiza el efecto de variaciones del tipo de cambio en los resultados."
          }
        ]
      },
      {
        title: "Explicación de Regulaciones Locales",
        prompts: [
          {
            title: "Guía regulatoria por país",
            prompt:
              "Crea una guía de las principales regulaciones contables de un país específico."
          },
          {
            title: "Informe de cumplimiento transfronterizo",
            prompt:
              "Elabora un informe sobre requisitos fiscales en operaciones internacionales."
          },
          {
            title: "Resumen normativo internacional",
            prompt:
              "Resume los marcos regulatorios aplicables a filiales en el extranjero."
          }
        ]
      },
      {
        title: "Comunicación Intercultural",
        prompts: [
          {
            title: "Guía de comunicación con clientes globales",
            prompt:
              "Diseña recomendaciones para comunicarte eficazmente con clientes de distintas culturas."
          },
          {
            title: "Adaptación de reportes globales",
            prompt:
              "Crea reportes financieros adaptados a audiencias multinacionales."
          },
          {
            title: "Presentación ejecutiva multilingüe",
            prompt:
              "Diseña una presentación financiera que pueda traducirse fácilmente manteniendo precisión técnica."
          }
        ]
      },
      {
        title: "Consolidación Internacional",
        prompts: [
          {
            title: "Procedimiento de consolidación global",
            prompt:
              "Explica el proceso para consolidar estados financieros de filiales en varios países."
          },
          {
            title: "Análisis de eliminaciones intercompañía",
            prompt:
              "Describe cómo manejar eliminaciones intercompañía durante la consolidación."
          },
          {
            title: "Informe de resultados consolidados",
            prompt:
              "Crea un informe que resuma los resultados financieros del grupo multinacional."
          }
        ]
      }
    ]
  }
];

export default promptsData;
