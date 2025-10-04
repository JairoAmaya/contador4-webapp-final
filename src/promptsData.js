// src/promptsData.js

const promptsData = [
  // === CATEGORÍA 1 ===
  {
    title: "📊 Análisis Financiero Estratégico",
    icon: "📈",
    subcategories: [
      {
        title: "Interpretación de Estados Financieres",
        prompts: [
          {
            title: "Análisis integral de estados financieros",
            prompt:
              "Actúa como analista financiero senior. Analiza los estados financieros de los últimos 3 años, identifica 5 tendencias clave y brinda 3 recomendaciones estratégicas basadas en la evolución de los resultados."
          },
          {
            title: "Comparación interanual de resultados",
            prompt:
              "Compara los estados de resultados de los últimos 2 años, identifica los mayores cambios en ingresos, costos y gastos, y explica las causas probables de las variaciones."
          },
          {
            title: "Evaluación de salud financiera",
            prompt:
              "Evalúa la situación financiera general de la empresa analizando liquidez, rentabilidad y endeudamiento, con observaciones concretas y una conclusión final."
          }
        ]
      },
      {
        title: "Análisis de Ratios Financieros",
        prompts: [
          {
            title: "Cálculo de ratios clave",
            prompt:
              "Calcula y analiza los principales ratios de liquidez, rentabilidad y solvencia de la empresa con base en los estados financieros recientes."
          },
          {
            title: "Comparación de ratios con el sector",
            prompt:
              "Compara los ratios financieros de la empresa con los promedios del sector y comenta si el desempeño es superior, igual o inferior al promedio."
          },
          {
            title: "Diagnóstico financiero rápido",
            prompt:
              "Elabora un diagnóstico breve basado en 5 ratios esenciales, indicando fortalezas y debilidades financieras de la empresa."
          }
        ]
      },
      {
        title: "Proyecciones y Escenarios",
        prompts: [
          {
            title: "Proyección de flujo de caja",
            prompt:
              "Crea una proyección de flujo de caja mensual para los próximos 12 meses, considerando ventas, cobros y pagos esperados."
          },
          {
            title: "Escenarios financieros alternativos",
            prompt:
              "Simula tres escenarios (optimista, base y pesimista) para los próximos 12 meses con base en ingresos y gastos proyectados."
          },
          {
            title: "Análisis de sensibilidad",
            prompt:
              "Evalúa el impacto de un cambio del 10% en ventas y costos sobre la rentabilidad proyectada del negocio."
          }
        ]
      },
      {
        title: "Valoración de Empresas",
        prompts: [
          {
            title: "Valoración por múltiplos",
            prompt:
              "Estima el valor de la empresa utilizando múltiplos de EBITDA o ingresos comparables con empresas similares del sector."
          },
          {
            title: "Valoración de flujo descontado",
            prompt:
              "Realiza una valoración por flujo de caja descontado considerando crecimiento anual, tasa de descuento y valor residual."
          },
          {
            title: "Informe ejecutivo de valoración",
            prompt:
              "Resume el valor estimado de la empresa, los métodos utilizados y los factores que más influyen en la valoración."
          }
        ]
      },
      {
        title: "Análisis de Costos",
        prompts: [
          {
            title: "Estructura de costos",
            prompt:
              "Identifica los principales costos fijos y variables del negocio y su proporción sobre los ingresos totales."
          },
          {
            title: "Margen de contribución",
            prompt:
              "Calcula el margen de contribución y punto de equilibrio, explicando su importancia para la rentabilidad."
          },
          {
            title: "Recomendaciones de reducción de costos",
            prompt:
              "Propón tres estrategias concretas para optimizar costos sin afectar la calidad ni la productividad."
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
              "Redacta un resumen de resultados trimestrales en tono profesional, destacando logros, riesgos y 2 recomendaciones estratégicas."
          },
          {
            title: "Presentación para inversionistas",
            prompt:
              "Crea una presentación atractiva con resumen de resultados, proyecciones y motivos para seguir invirtiendo."
          }
        ]
      },
      {
        title: "Correo Profesional de Resultados",
        prompts: [
          {
            title: "Correo de actualización financiera",
            prompt:
              "Escribe un correo conciso que comunique resultados clave a clientes o socios con tono claro y profesional."
          },
          {
            title: "Anuncio interno de resultados",
            prompt:
              "Redacta un correo motivacional para el equipo resaltando el progreso financiero reciente y próximos objetivos."
          }
        ]
      },
      {
        title: "Comunicados Oficiales",
        prompts: [
          {
            title: "Comunicado institucional",
            prompt:
              "Redacta un comunicado oficial sobre resultados financieros o una nueva alianza estratégica."
          },
          {
            title: "Nota de prensa corporativa",
            prompt:
              "Crea una nota de prensa de 200 palabras destacando un logro financiero relevante."
          }
        ]
      },
      {
        title: "Mensajes Comerciales",
        prompts: [
          {
            title: "Mensaje de propuesta de valor",
            prompt:
              "Escribe un mensaje breve que comunique la propuesta de valor de tus servicios financieros a nuevos clientes."
          },
          {
            title: "Invitación a reunión comercial",
            prompt:
              "Redacta un mensaje profesional invitando a una reunión para presentar soluciones contables personalizadas."
          }
        ]
      },
      {
        title: "Presentaciones de Equipo",
        prompts: [
          {
            title: "Pitch de equipo financiero",
            prompt:
              "Crea una breve presentación que describa las fortalezas del equipo contable y sus logros recientes."
          },
          {
            title: "Carta de presentación profesional",
            prompt:
              "Redacta una carta profesional para presentarte ante un cliente o aliado estratégico."
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
        title: "Propuestas de servicios contables",
        prompts: [
          {
            title: "Propuesta integral de servicios",
            prompt:
              "Redacta una propuesta detallada con descripción de servicios, beneficios y valor agregado para un cliente nuevo."
          },
          {
            title: "Oferta de paquete mensual",
            prompt:
              "Crea una propuesta por paquete mensual de servicios contables, con tres opciones escalables."
          }
        ]
      },
      {
        title: "Cotizaciones por paquetes",
        prompts: [
          {
            title: "Cotización personalizada",
            prompt:
              "Elabora una cotización con desglose de actividades, tarifas y plazos de entrega adaptados al cliente."
          },
          {
            title: "Cotización comparativa",
            prompt:
              "Redacta una tabla comparativa con tres niveles de servicio contable: básico, estándar y premium."
          }
        ]
      },
      {
        title: "Servicios de valor agregado",
        prompts: [
          {
            title: "Propuesta de asesoría estratégica",
            prompt:
              "Crea una propuesta para ofrecer asesoría financiera adicional como valor agregado a tu cliente actual."
          },
          {
            title: "Oferta combinada de servicios",
            prompt:
              "Redacta una propuesta que combine contabilidad, planificación fiscal y reportes financieros."
          }
        ]
      },
      {
        title: "Justificación de honorarios",
        prompts: [
          {
            title: "Explicación de tarifas profesionales",
            prompt:
              "Escribe un texto claro para explicar tus tarifas profesionales, destacando el valor y la experiencia que aportas."
          },
          {
            title: "Comparativa de tarifas",
            prompt:
              "Redacta un argumento que justifique tus tarifas frente al mercado resaltando la calidad del servicio."
          }
        ]
      },
      {
        title: "Contratos de servicios profesionales",
        prompts: [
          {
            title: "Borrador de contrato contable",
            prompt:
              "Crea un contrato base para prestación de servicios contables con cláusulas de confidencialidad y pagos."
          },
          {
            title: "Condiciones de renovación",
            prompt:
              "Redacta las condiciones para renovación o terminación del contrato de servicios contables."
          }
        ]
      }
    ]
  },

  // === CATEGORÍA 4 ===
  {
    title: "📈 Reportes y Dashboards",
    icon: "📊",
    subcategories: [
      {
        title: "Creación de KPIs financieros",
        prompts: [
          {
            title: "Diseño de indicadores",
            prompt:
              "Crea un conjunto de KPIs financieros para evaluar rentabilidad, liquidez y eficiencia operativa."
          },
          {
            title: "KPIs por área",
            prompt:
              "Diseña KPIs específicos para ventas, producción, finanzas y RRHH con su fórmula e interpretación."
          }
        ]
      },
      {
        title: "Reportes de gestión",
        prompts: [
          {
            title: "Reporte mensual automatizado",
            prompt:
              "Genera una estructura de reporte de gestión mensual con métricas clave y conclusiones."
          },
          {
            title: "Optimización de reportes",
            prompt:
              "Propón mejoras para automatizar y reducir tiempos de generación de reportes."
          }
        ]
      },
      {
        title: "Dashboards ejecutivos",
        prompts: [
          {
            title: "Diseño de dashboard financiero",
            prompt:
              "Crea un diseño visual de dashboard con indicadores estratégicos de rentabilidad y liquidez."
          },
          {
            title: "Análisis visual de resultados",
            prompt:
              "Interpreta un dashboard financiero detectando patrones y áreas de mejora."
          }
        ]
      },
      {
        title: "Análisis presupuestario",
        prompts: [
          {
            title: "Reporte de desviaciones",
            prompt:
              "Compara resultados reales vs presupuesto e identifica 3 desviaciones críticas."
          },
          {
            title: "Plan de corrección presupuestal",
            prompt:
              "Diseña un plan para corregir desviaciones detectadas en el presupuesto anual."
          }
        ]
      },
      {
        title: "Cumplimiento y auditoría",
        prompts: [
          {
            title: "Informe de cumplimiento financiero",
            prompt:
              "Redacta un informe ejecutivo con el nivel de cumplimiento financiero y fiscal."
          },
          {
            title: "Checklist de control interno",
            prompt:
              "Crea una lista de control interno para auditoría contable y fiscal."
          }
        ]
      }
    ]
  },

  // === CATEGORÍA 5 ===
  {
    title: "🧾 Cumplimiento Fiscal",
    icon: "💼",
    subcategories: [
      {
        title: "Calendarios de obligaciones",
        prompts: [
          {
            title: "Agenda fiscal mensual",
            prompt:
              "Genera un calendario con fechas clave para presentación de impuestos y obligaciones laborales."
          },
          {
            title: "Recordatorios fiscales",
            prompt:
              "Diseña un sistema de alertas automáticas para próximas declaraciones o pagos tributarios."
          }
        ]
      },
      {
        title: "Cambios normativos",
        prompts: [
          {
            title: "Resumen de reforma tributaria",
            prompt:
              "Resume los principales cambios de la última reforma tributaria y su impacto en pymes."
          },
          {
            title: "Guía de adaptación fiscal",
            prompt:
              "Elabora una guía práctica para adaptar la contabilidad a nuevas normas tributarias."
          }
        ]
      },
      {
        title: "Optimización fiscal",
        prompts: [
          {
            title: "Estrategias legales de ahorro fiscal",
            prompt:
              "Propón estrategias legales para optimizar la carga tributaria sin riesgos de incumplimiento."
          },
          {
            title: "Deducciones fiscales aplicables",
            prompt:
              "Crea una lista de deducciones fiscales aplicables a pequeñas empresas del sector servicios."
          }
        ]
      },
      {
        title: "Riesgos tributarios",
        prompts: [
          {
            title: "Mapa de riesgos fiscales",
            prompt:
              "Identifica los principales riesgos tributarios de una empresa y su nivel de exposición."
          },
          {
            title: "Plan de mitigación tributaria",
            prompt:
              "Diseña acciones preventivas para reducir la posibilidad de sanciones o auditorías."
          }
        ]
      },
      {
        title: "Documentación y evidencia",
        prompts: [
          {
            title: "Checklist de documentación fiscal",
            prompt:
              "Crea una lista con documentos obligatorios para inspecciones fiscales."
          },
          {
            title: "Evidencias de cumplimiento",
            prompt:
              "Redacta un resumen de las pruebas que demuestran cumplimiento tributario."
          }
        ]
      }
    ]
  },

  // === CATEGORÍA 6 ===
  {
    title: "🔍 Auditoría y Control",
    icon: "📋",
    subcategories: [
      {
        title: "Programas de auditoría personalizados",
        prompts: [
          {
            title: "Diseño de programa de auditoría",
            prompt:
              "Crea un programa de auditoría adaptado a las operaciones de una empresa mediana."
          },
          {
            title: "Planificación de auditoría",
            prompt:
              "Diseña un plan de auditoría con objetivos, alcance, metodología y recursos necesarios."
          }
        ]
      },
      {
        title: "Evaluación de controles internos",
        prompts: [
          {
            title: "Revisión de controles contables",
            prompt:
              "Evalúa los controles internos relacionados con el ciclo contable y financiero."
          },
          {
            title: "Informe de control interno",
            prompt:
              "Redacta un informe sobre hallazgos y debilidades en los controles contables."
          }
        ]
      },
      {
        title: "Detección de irregularidades",
        prompts: [
          {
            title: "Análisis de anomalías",
            prompt:
              "Identifica operaciones o registros inusuales que podrían indicar errores o fraudes."
          },
          {
            title: "Evaluación de fraude financiero",
            prompt:
              "Diseña un enfoque para detectar posibles fraudes mediante revisión de patrones contables."
          }
        ]
      },
      {
        title: "Recomendaciones de mejora",
        prompts: [
          {
            title: "Informe de hallazgos con acciones correctivas",
            prompt:
              "Redacta un informe con hallazgos y recomendaciones de mejora concretas."
          },
          {
            title: "Plan de acción correctivo",
            prompt:
              "Crea un plan con responsables y fechas para aplicar mejoras identificadas en la auditoría."
          }
        ]
      },
      {
        title: "Seguimiento de hallazgos",
        prompts: [
          {
            title: "Control de implementación de mejoras",
            prompt:
              "Diseña una matriz para hacer seguimiento al cumplimiento de las recomendaciones de auditoría."
          },
          {
            title: "Informe de seguimiento de auditoría",
            prompt:
              "Elabora un reporte con avances y estado actual de las acciones correctivas."
          }
        ]
      }
    ]
  },

  // === CATEGORÍA 7 ===
  {
    title: "🌍 Clientes Internacionales",
    icon: "🌐",
    subcategories: [
      {
        title: "Análisis de diferencias normativas",
        prompts: [
          {
            title: "Comparación NIIF vs. normas locales",
            prompt:
              "Explica las principales diferencias entre NIIF y las normas contables locales en un caso práctico."
          },
          {
            title: "Evaluación de impacto normativo",
            prompt:
              "Analiza cómo los cambios normativos internacionales afectan la contabilidad local."
          }
        ]
      },
      {
        title: "Reportes en múltiples monedas",
        prompts: [
          {
            title: "Conversión de estados financieros",
            prompt:
              "Describe el procedimiento para convertir estados financieros a moneda extranjera."
          },
          {
            title: "Análisis de variación cambiaria",
            prompt:
              "Evalúa cómo las fluctuaciones cambiarias afectan los resultados consolidados."
          }
        ]
      },
      {
        title: "Regulaciones locales e internacionales",
        prompts: [
          {
            title: "Resumen de obligaciones internacionales",
            prompt:
              "Redacta un resumen de las principales obligaciones fiscales de empresas multinacionales."
          },
          {
            title: "Guía de cumplimiento global",
            prompt:
              "Crea una guía práctica para asegurar cumplimiento en diferentes jurisdicciones."
          }
        ]
      },
      {
        title: "Comunicación intercultural",
        prompts: [
          {
            title: "Adaptación de mensajes financieros",
            prompt:
              "Crea un correo corporativo que comunique resultados a un cliente extranjero con lenguaje profesional."
          },
          {
            title: "Protocolo de reuniones internacionales",
            prompt:
              "Redacta un protocolo para conducir reuniones virtuales con clientes internacionales."
          }
        ]
      },
      {
        title: "Consolidación internacional",
        prompts: [
          {
            title: "Consolidación de filiales",
            prompt:
              "Explica el proceso de consolidación de estados financieros de varias filiales en distintos países."
          },
          {
            title: "Elaboración de reporte global",
            prompt:
              "Diseña un formato estándar para reportes financieros internacionales consolidados."
          }
        ]
      }
    ]
  }
];

export default promptsData;
