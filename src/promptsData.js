const promptsData = [
  {
    id: 1,
    name: "📊 Análisis Financiero Estratégico",
    subcategories: [
      {
        name: "Interpretación de estados financieros",
        prompts: [
          {
            title: "Análisis Integral de Estados Financieros",
            text: "Actúa como un analista financiero senior. Analiza los estados financieros adjuntos (balance general, estado de resultados y estado de cambios en el patrimonio) de los últimos 3 años. Identifica las 5 tendencias más significativas, evalúa la salud financiera general de la empresa, y proporciona 3 recomendaciones estratégicas basadas en tu análisis. Incluye comparaciones año a año y explica el impacto de cada hallazgo en la posición competitiva de la empresa."
          },
          {
            title: "Identificación de fortalezas y debilidades",
            text: "Eres un consultor contable. Revisa los estados financieros de la empresa y elabora un informe que identifique al menos 3 fortalezas y 3 debilidades financieras clave, explicando su impacto en la operación actual."
          },
          {
            title: "Comparación interanual",
            text: "Genera un análisis comparativo de los estados financieros de la empresa en los últimos 2 años. Destaca las variaciones más relevantes en ingresos, gastos y patrimonio, y proporciona conclusiones claras para la gerencia."
          }
        ]
      },
      {
        name: "Análisis de flujo de efectivo",
        prompts: [
          {
            title: "Evaluación de liquidez operativa",
            text: "Examina el estado de flujo de efectivo de los últimos 12 meses e identifica si la empresa cuenta con suficiente liquidez para cubrir sus operaciones. Sugiere medidas para optimizar la gestión de efectivo."
          },
          {
            title: "Proyección de flujo de caja",
            text: "Elabora una proyección de flujo de efectivo para los próximos 6 meses basada en los patrones históricos de ingresos y egresos. Indica posibles riesgos de liquidez y estrategias para mitigarlos."
          },
          {
            title: "Detección de cuellos de botella financieros",
            text: "Analiza el flujo de efectivo y señala en qué áreas se generan cuellos de botella (ejemplo: cobros tardíos, pagos concentrados). Propón soluciones prácticas para equilibrar entradas y salidas."
          }
        ]
      },
      {
        name: "Evaluación de rentabilidad por línea de negocio",
        prompts: [
          {
            title: "Análisis de márgenes por unidad",
            text: "Calcula y compara los márgenes de utilidad de cada línea de negocio de la empresa. Identifica cuál aporta mayor rentabilidad y cuál está generando pérdidas."
          },
          {
            title: "Identificación de líneas estratégicas",
            text: "Realiza un análisis financiero para recomendar a la gerencia en qué líneas de negocio debería invertir más y cuáles conviene descontinuar, con base en su rentabilidad."
          },
          {
            title: "Reporte de rentabilidad acumulada",
            text: "Prepara un informe con la rentabilidad acumulada de cada línea de negocio en los últimos 3 años, destacando tendencias y variaciones importantes."
          }
        ]
      },
      {
        name: "Análisis de ratios financieros",
        prompts: [
          {
            title: "Indicadores clave",
            text: "Calcula los principales ratios financieros (liquidez corriente, endeudamiento, margen neto y ROE) de la empresa. Explica qué revelan sobre su salud financiera."
          },
          {
            title: "Benchmarking con el sector",
            text: "Compara los ratios financieros de la empresa con los promedios del sector. Identifica fortalezas competitivas y riesgos en la comparación."
          },
          {
            title: "Tendencia de ratios",
            text: "Genera un análisis de la evolución de los principales ratios financieros en los últimos 3 años e interpreta si la empresa va en una dirección positiva o negativa."
          }
        ]
      },
      {
        name: "Detección de riesgos financieros",
        prompts: [
          {
            title: "Mapa de riesgos financieros",
            text: "Actúa como un analista de riesgos. Elabora un mapa de los principales riesgos financieros de la empresa (liquidez, endeudamiento, rentabilidad, cumplimiento). Prioriza los 3 más críticos."
          },
          {
            title: "Evaluación de riesgo de insolvencia",
            text: "Evalúa la probabilidad de insolvencia de la empresa en base a sus indicadores financieros actuales y pasados. Propón medidas preventivas."
          },
          {
            title: "Informe de riesgos por área",
            text: "Prepara un informe que identifique los riesgos financieros asociados a las diferentes áreas de la empresa (operaciones, ventas, compras). Explica cómo afectan a la estabilidad financiera."
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "💬 Comunicación Empresarial de Alto Impacto",
    subcategories: [
      {
        name: "Cartas explicativas para clientes",
        prompts: [
          {
            title: "Carta de resultados financieros",
            text: "Actúa como un contador especializado en comunicación clara con clientes. Redacta una carta explicativa que resuma los principales resultados financieros de este trimestre para un cliente pyme. Incluye puntos positivos, áreas de atención y recomendaciones, en un lenguaje sencillo y no técnico."
          },
          {
            title: "Explicación de ajustes contables",
            text: "Imagina que eres un contador que debe justificar un ajuste contable a un cliente. Redacta un mensaje breve, profesional y fácil de entender, donde expliques la razón del ajuste, su impacto y por qué es necesario mantener la transparencia en los registros."
          },
          {
            title: "Carta de felicitación por desempeño",
            text: "Actúa como un asesor financiero. Redacta una carta de felicitación a un cliente corporativo destacando el buen desempeño financiero en el último año, resaltando los logros clave y motivando a mantener las buenas prácticas."
          }
        ]
      },
      {
        name: "Reportes ejecutivos personalizados",
        prompts: [
          {
            title: "Resumen ejecutivo para directorio",
            text: "Eres un contador senior y debes elaborar un reporte ejecutivo de una página para el directorio. Resume el desempeño financiero de la empresa en los últimos 6 meses, destacando crecimiento, riesgos y tres recomendaciones estratégicas clave."
          },
          {
            title: "Reporte de rentabilidad por unidad",
            text: "Crea un reporte ejecutivo para la gerencia donde se detalle la rentabilidad por cada unidad de negocio, resaltando cuál contribuye más al margen operativo y cuál genera pérdidas. Propón acciones inmediatas para optimizar resultados."
          },
          {
            title: "Informe de flujo de efectivo",
            text: "Redacta un informe ejecutivo en formato claro y visual que explique el estado del flujo de efectivo, principales entradas y salidas, y cómo se proyecta la liquidez en los próximos tres meses."
          }
        ]
      },
      {
        name: "Presentaciones de resultados",
        prompts: [
          {
            title: "Presentación trimestral para junta",
            text: "Genera una presentación en formato de diapositivas que muestre los resultados trimestrales. Incluye gráficos de ingresos, gastos, utilidades y comparaciones con el presupuesto."
          },
          {
            title: "Informe anual a inversionistas",
            text: "Crea un guion para una presentación dirigida a inversionistas donde se explique el desempeño anual de la empresa, su situación financiera y los planes de crecimiento a futuro."
          },
          {
            title: "Presentación de KPIs financieros",
            text: "Prepara una presentación enfocada en los principales KPIs financieros (liquidez, endeudamiento, rentabilidad). Incluye recomendaciones para mejorar dos de ellos en el próximo semestre."
          }
        ]
      },
      {
        name: "Comunicación de hallazgos de auditoría",
        prompts: [
          {
            title: "Informe de hallazgos menores",
            text: "Actúa como un auditor que debe comunicar hallazgos menores a la gerencia. Redacta un informe breve que explique los hallazgos, su impacto y las acciones correctivas sugeridas."
          },
          {
            title: "Explicación de irregularidad detectada",
            text: "Imagina que debes informar a la alta dirección sobre una irregularidad detectada en los procesos de control interno. Explica el hallazgo, su posible riesgo y los pasos inmediatos recomendados."
          },
          {
            title: "Comunicación de buenas prácticas",
            text: "Redacta un mensaje a la gerencia donde destaques las buenas prácticas encontradas en la auditoría, reforzando la confianza y felicitando al equipo."
          }
        ]
      },
      {
        name: "Explicación de impactos fiscales",
        prompts: [
          {
            title: "Explicación de reforma tributaria",
            text: "Redacta una comunicación para un cliente corporativo explicando en lenguaje claro los principales cambios de la última reforma tributaria y cómo afectan a la empresa."
          },
          {
            title: "Impacto de deducciones fiscales",
            text: "Explica a un cliente cómo puede beneficiarse de nuevas deducciones fiscales aplicables a su industria, resaltando los beneficios y precauciones a tener en cuenta."
          },
          {
            title: "Aviso de vencimiento de obligaciones",
            text: "Redacta un aviso proactivo para un cliente recordándole las próximas fechas de vencimiento de impuestos y las consecuencias de no cumplir con las obligaciones a tiempo."
          }
        ]
      }
    ]
  }
];

export default promptsData;
