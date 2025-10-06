// src/promptsDataLargos.js
// Versión larga completa — 7 categorías × 5 subcategorías × 3 prompts = 105 prompts
const promptsData = [
  // ---------------------------
  // 📊 1. Análisis Financiero Estratégico (15 prompts)
  // ---------------------------
  {
    id: "cat-1",
    title: "📊 Análisis Financiero Estratégico",
    icon: "📈",
    subcategories: [
      {
        id: "1-1",
        title: "Interpretación de Estados Financieros",
        prompts: [
          {
            id: "1",
            title: "Análisis Integral de Estados Financieros",
            prompt:
              "Actúa como un analista financiero senior. Analiza los estados financieros adjuntos (balance general, estado de resultados y estado de cambios en el patrimonio) de los últimos 3 años. Identifica las 5 tendencias más significativas, evalúa la salud financiera general de la empresa, y proporciona 3 recomendaciones estratégicas. Incluye comparaciones año a año, indicadores cuantitativos (márgenes, ROA, ROE, ratio de endeudamiento), y explica el impacto de cada hallazgo en la posición competitiva."
          },
          {
            id: "2",
            title: "Comparación Interanual Detallada",
            prompt:
              "Genera un análisis comparativo de los estados de resultados y balances entre los últimos 2 años. Identifica variaciones por cuenta (ingresos, costo de ventas, gastos operativos), explica causas probables y sugiere 4 acciones tácticas para mejorar las partidas más volátiles. Incluye tablas con porcentajes de variación y observaciones sobre sostenibilidad."
          },
          {
            id: "3",
            title: "Informe de Calidad de Earnings",
            prompt:
              "Evalúa la calidad de las utilidades reportadas: analiza elementos no recurrentes, ajustes contables, políticas de reconocimiento de ingresos y estimaciones clave. Señala 5 indicadores que sugieran baja calidad de earnings y propone pruebas o documentación adicional que la gerencia debería preparar ante un auditor o inversionista."
          }
        ]
      },
      {
        id: "1-2",
        title: "Análisis de Flujo de Efectivo",
        prompts: [
          {
            id: "4",
            title: "Sostenibilidad del Flujo de Caja Operativo",
            prompt:
              "Analiza el estado de flujo de efectivo de los últimos 5 años enfocándote en la sostenibilidad de la generación de caja operativa. Identifica fuentes/uses principales, calcula flujo libre de caja normalizado y evalúa la capacidad para financiar inversión y servicio de deuda. Propón 5 medidas concretas para mejorar generación de caja (mejor gestión de cobros, optimización de inventarios, renegociación de plazos)."
          },
          {
            id: "5",
            title: "Proyección de Cash Flow y Sensibilidades",
            prompt:
              "Construye una proyección a 12 meses del flujo de caja operativo bajo 3 escenarios (base, -15%, +15%). Explica supuestos clave (venta, rotación de inventario, ciclo de cobro) y señala los indicadores que deben seguirse semanalmente. Incluye recomendaciones sobre líneas de financiación temporales si hubiese estrés de liquidez."
          },
          {
            id: "6",
            title: "Análisis de Calidad del Working Capital",
            prompt:
              "Evalúa los componentes del capital de trabajo (Cuentas por cobrar, inventarios, cuentas por pagar): calcula días de ventas pendientes, rotación de inventario y días de pago. Identifica ineficiencias, propone 6 acciones concretas para reducir ciclo de conversión de efectivo y cuantifica el impacto estimado en liquidez."
          }
        ]
      },
      {
        id: "1-3",
        title: "Evaluación de Rentabilidad por Línea de Negocio",
        prompts: [
          {
            id: "7",
            title: "Contribución por Segmento",
            prompt:
              "Analiza la rentabilidad por línea de negocio: calcula margen bruto, contribución marginal y EBITDA por segmento. Identifica cuáles líneas financian a otras y sugiere una estrategia (expandir, mantener, desinvertir) para cada una, con justificación cuantitativa."
          },
          {
            id: "8",
            title: "Mapeo de Costos y Asignación",
            prompt:
              "Revisa la asignación actual de costos fijos y variables por unidad de negocio. Propón un sistema de costeo por actividad (ABC) para reasignar costos indirectos y mejorar la visibilidad de rentabilidad. Incluye 4 métricas que la gerencia debe monitorear para validar la nueva asignación."
          },
          {
            id: "9",
            title: "Evaluación de Precios y Elasticidad",
            prompt:
              "Analiza la estructura de precios por producto/servicio y estima elasticidades simples usando datos históricos. Propón un plan de optimización de precios (paquetes, bundling, descuentos estratégicos) que maximice margen sin perder volumen significativo."
          }
        ]
      },
      {
        id: "1-4",
        title: "Análisis de Ratios Financieros",
        prompts: [
          {
            id: "10",
            title: "Dashboard de Ratios Clave",
            prompt:
              "Diseña un dashboard con los 12 ratios financieros más relevantes (liquidez, solvencia, rentabilidad, eficiencia). Para cada ratio incluye fórmula, benchmark sectorial, interpretación y un semáforo que indique riesgo. Acompaña con recomendaciones operativas para ratios en zona amarilla/roja."
          },
          {
            id: "11",
            title: "Ratios Predictivos y Early Warning",
            prompt:
              "Construye un conjunto de ratios que sirvan como early warning para deterioro financiero (Altman Z, Piotroski F-score, DSO trend). Define umbrales, frecuencia de cálculo y acciones a ejecutar cuando se superen los umbrales críticos."
          },
          {
            id: "12",
            title: "Análisis de Apalancamiento y Cobertura",
            prompt:
              "Evalúa la estructura de deuda y la capacidad de cobertura de las obligaciones (cobertura de intereses, ratios de deuda neta/EBITDA). Propón acciones de refinanciamiento o cobertura (swap, extensión de plazo) para mitigar riesgo de liquidez o tasa."
          }
        ]
      },
      {
        id: "1-5",
        title: "Detección de Riesgos Financieros",
        prompts: [
          {
            id: "13",
            title: "Mapa Integral de Riesgos",
            prompt:
              "Desarrolla un mapa de riesgos financieros con probabilidad, impacto y controles asociados (liquidez, crédito, mercado, operacional). Prioriza los 10 riesgos principales y propone controles o planes de mitigación para los 5 más críticos."
          },
          {
            id: "14",
            title: "Stress Testing y Escenarios",
            prompt:
              "Diseña stress tests bajo 3 escenarios adversos (shock de ventas, aumento de tasas, pérdida de cliente clave). Evalúa impacto en liquidez, cumplimiento de covenants y capital de trabajo. Propón medidas de contingencia y umbrales de activación."
          },
          {
            id: "15",
            title: "Sistema de Alertas Tempranas Financieras",
            prompt:
              "Define un sistema automatizado de alertas tempranas: indicadores monitoreados, umbrales, responsables y acciones automáticas (notificaciones, escalados). Incluye un plan de implementación técnica y roles operativos."
          }
        ]
      }
    ]
  },

  // ---------------------------
  // 💬 2. Comunicación Empresarial de Alto Impacto (15 prompts)
  // ---------------------------
  {
    id: "cat-2",
    title: "💬 Comunicación Empresarial de Alto Impacto",
    icon: "📝",
    subcategories: [
      {
        id: "2-1",
        title: "Cartas Explicativas para Clientes",
        prompts: [
          {
            id: "16",
            title: "Carta de Explicación de Resultados",
            prompt:
              "Redacta una carta profesional dirigida a un cliente para explicar los resultados financieros del trimestre. Debe incluir: resumen ejecutivo, explicación de variaciones clave, impacto esperado y recomendaciones prácticas. Mantén un tono empático y consultivo, con máximo 400 palabras."
          },
          {
            id: "17",
            title: "Comunicación de Ajuste de Precios/Servicios",
            prompt:
              "Prepara una comunicación para clientes informando un cambio en tarifas o alcance de servicio. Explica razones, beneficios, timeline de implementación y opciones para clientes antiguos (prórrogas, descuentos). Incluye fraseología para reducir fricción y mantener relación."
          },
          {
            id: "18",
            title: "Respuesta a Reclamos Financieros",
            prompt:
              "Redacta una respuesta formal a un reclamo de cliente sobre una discrepancia en facturación. Incluye investigación realizada, hallazgos, corrección propuesta y medidas preventivas para evitar recurrencia. Mantén transparencia y ofrece canal de escalamiento."
          }
        ]
      },
      {
        id: "2-2",
        title: "Reportes Ejecutivos Personalizados",
        prompts: [
          {
            id: "19",
            title: "Informe Ejecutivo para la Dirección",
            prompt:
              "Crea un informe ejecutivo de una página que resuma desempeño financiero y KPIs para el CEO. Incluye 3 highlights, 2 riesgos a monitorear y 3 recomendaciones estratégicas priorizadas por impacto."
          },
          {
            id: "20",
            title: "Reporte de Gestión Mensual",
            prompt:
              "Diseña un reporte mensual para gerencias que incluya: KPIs, variaciones vs budget, principales hallazgos, causas raíz y plan de acción con responsables y fechas. Debe ser utilizable en reuniones mensuales de revisión."
          },
          {
            id: "21",
            title: "Memo Técnico para Comité",
            prompt:
              "Redacta un memo técnico para el comité financiero sobre un tema complejo (p. ej. impacto de una nueva norma contable). Debe sintetizar: antecedentes, análisis cuantitativo, implicaciones y recomendaciones concretas para decisión."
          }
        ]
      },
      {
        id: "2-3",
        title: "Presentaciones de Resultados",
        prompts: [
          {
            id: "22",
            title: "Deck para Inversionistas",
            prompt:
              "Prepara las secciones clave de una presentación para inversores: visión del negocio, metrics growth, estado financiero resumido, proyecciones y use of proceeds. Incluye notas del presentador para cada slide."
          },
          {
            id: "23",
            title: "Presentación de Resultados Operativos",
            prompt:
              "Crea una presentación con storytelling que explique desempeño operativo, causas de desvíos y plan de acción. Incluye gráficos sugeridos y bullets claros para cada slide."
          },
          {
            id: "24",
            title: "Pitch Comercial de Servicios",
            prompt:
              "Desarrolla un pitch de 8 slides para vender un paquete de servicios contables y de transformación digital a empresas mediana/multi-entidad."
          }
        ]
      },
      {
        id: "2-4",
        title: "Comunicación de Hallazgos de Auditoría",
        prompts: [
          {
            id: "25",
            title: "Comunicación a Consejo/Board",
            prompt:
              "Redacta un resumen ejecutivo sobre hallazgos críticos de auditoría para presentar al board, incluyendo impacto, evidencia, riesgo y plan de remediación con responsables y timeline."
          },
          {
            id: "26",
            title: "Notificación Operativa a Gerencias",
            prompt:
              "Prepara un comunicado operativo para gerencias con hallazgos de auditoría, acciones requeridas y formato de reporte de avance."
          },
          {
            id: "27",
            title: "Formato de Seguimiento de Hallazgos",
            prompt:
              "Genera un formato estandarizado para seguimiento de hallazgos (RACI, fechas objetivo, evidencia y cierre)."
          }
        ]
      },
      {
        id: "2-5",
        title: "Explicación de Impactos Fiscales",
        prompts: [
          {
            id: "28",
            title: "Memo sobre Cambios Normativos",
            prompt:
              "Redacta un memo ejecutivo que explique el impacto de una reforma fiscal hipotética en la empresa: efectos en efectivo, provisiones, y recomendaciones de mitigación."
          },
          {
            id: "29",
            title: "Comunicación a Clientes sobre Cumplimiento",
            prompt:
              "Prepara una carta para clientes explicando nuevos requerimientos tributarios y pasos a seguir por parte del despacho para asegurar cumplimiento."
          },
          {
            id: "30",
            title: "Guía de Preguntas y Respuestas",
            prompt:
              "Genera una FAQ técnica para clientes sobre implicaciones prácticas de un cambio fiscal reciente, con ejemplos y cálculos simples."
          }
        ]
      }
    ]
  },

  // ---------------------------
  // 💼 3. Propuestas y Cotizaciones que Cierran Negocios (15 prompts)
  // ---------------------------
  {
    id: "cat-3",
    title: "💼 Propuestas y Cotizaciones que Cierran Negocios",
    icon: "💼",
    subcategories: [
      {
        id: "3-1",
        title: "Propuestas de Servicios Contables",
        prompts: [
          {
            id: "31",
            title: "Propuesta Integral de Servicios",
            prompt:
              "Redacta una propuesta comercial detallada para ofrecer servicios contables integrales: alcance, entregables, equipo, timeline, SLA, KPIs de servicio y estructura de honorarios. Incluye una sección 'por qué nosotros' con 3 pruebas de valor."
          },
          {
            id: "32",
            title: "Propuesta de Migración y Modernización",
            prompt:
              "Elabora una propuesta para modernizar procesos contables: diagnóstico, roadmap de implementación (por fases), costos, ROI estimado y plan de capacitación."
          },
          {
            id: "33",
            title: "Propuesta de Outsourcing Contable",
            prompt:
              "Desarrolla una propuesta de outsourcing que incluya: alcance end-to-end, modelo de gobernanza, transiciones, riesgos mitigados y comparativo económico frente a operación interna."
          }
        ]
      },
      {
        id: "3-2",
        title: "Cotizaciones por Paquetes",
        prompts: [
          {
            id: "34",
            title: "Paquetes Básico/Profesional/Premium",
            prompt:
              "Diseña tres paquetes de servicios con alcance, frecuencia, entregables y precios; incluye add-ons posibles y criterios de recomendación según tamaño/sector del cliente."
          },
          {
            id: "35",
            title: "Cotización Modular",
            prompt:
              "Crea una cotización modular que permita al cliente elegir módulos (nómina, impuestos, reportes, advisory) con precios unitarios y descuentos por bundle."
          },
          {
            id: "36",
            title: "Cotización por Industria",
            prompt:
              "Elabora una cotización y propuesta de valor adaptada a una industria (p. ej. retail). Incluye riesgos sectoriales y servicios complementarios recomendados."
          }
        ]
      },
      {
        id: "3-3",
        title: "Presentación de Servicios de Valor",
        prompts: [
          {
            id: "37",
            title: "Presentación Ejecutiva Comercial",
            prompt:
              "Prepara una presentación comercial (10 diapositivas) que destaque servicios de transformación contable, casos de éxito y beneficios financieros esperados."
          },
          {
            id: "38",
            title: "Justificación de Honorarios por Valor",
            prompt:
              "Redacta un documento que justifique honorarios en base a valor entregado (ahorro/ingreso generado), con ejemplos cuantitativos y comparativos de mercado."
          },
          {
            id: "39",
            title: "Presentación para Decisor Público/Privado",
            prompt:
              "Crea una presentación adaptada para tomadores de decisión (CFO/Consejo) con énfasis en riesgos, ROI y governance del proyecto propuesto."
          }
        ]
      },
      {
        id: "3-4",
        title: "Contratos y Alcances",
        prompts: [
          {
            id: "40",
            title: "Contrato de Servicios Contables",
            prompt:
              "Genera el borrador de un contrato profesional que incluya alcance, confidencialidad, limitación de responsabilidad, SLA, pricing y cláusulas de rescisión."
          },
          {
            id: "41",
            title: "Acuerdo de Nivel de Servicio (SLA)",
            prompt:
              "Define un SLA con métricas, penalidades y proceso de revisión trimestral para un servicio contable externalizado."
          },
          {
            id: "42",
            title: "Contrato Retainer Mensual",
            prompt:
              "Redacta un contrato de retainer con descripción de servicios incluidos, horas dedicadas, rollover y condiciones de facturación."
          }
        ]
      },
      {
        id: "3-5",
        title: "Herramientas Comerciales",
        prompts: [
          {
            id: "43",
            title: "Plantilla de Propuesta Personalizable",
            prompt:
              "Crea una plantilla de propuesta editable con secciones: resumen ejecutivo, alcance, beneficios, pricing, timeline y next steps."
          },
          {
            id: "44",
            title: "Checklist de Venta Consultiva",
            prompt:
              "Genera un checklist para vendedores que guíe la venta consultiva: preguntas clave, evidencias a recabar y señales de compra."
          },
          {
            id: "45",
            title: "Script de Cierre Telefónico",
            prompt:
              "Desarrolla un script para la llamada de cierre con cliente potencial que valide objeciones y conduzca a un compromiso de meeting presencial o firma."
          }
        ]
      }
    ]
  },

  // ---------------------------
  // 📈 4. Reportes y Dashboards Inteligentes (15 prompts)
  // ---------------------------
  {
    id: "cat-4",
    title: "📈 Reportes y Dashboards Inteligentes",
    icon: "📊",
    subcategories: [
      {
        id: "4-1",
        title: "Creación de KPIs Financieros",
        prompts: [
          {
            id: "46",
            title: "Framework Integral de KPIs",
            prompt:
              "Diseña un sistema de KPIs financieros por nivel organizacional (C-level, gerencia, operativo). Para cada KPI define: fórmula, frecuencia, umbral, responsable y acción automática recomendada cuando se dispare la alerta."
          },
          {
            id: "47",
            title: "KPIs Predictivos y Early Warning",
            prompt:
              "Crea un conjunto de KPIs predictivos que sirvan como early warning (liquidez, cobranza, margen). Incluye metodología de cálculo y parámetros para calibrar falsos positivos."
          },
          {
            id: "48",
            title: "KPIs por Línea de Negocio",
            prompt:
              "Define KPIs específicos para medir creación de valor por unidad de negocio, incluyendo EVA, contribución marginal y medidas de eficiencia de capital."
          }
        ]
      },
      {
        id: "4-2",
        title: "Reportes de Gestión Automatizados",
        prompts: [
          {
            id: "49",
            title: "Sistema de Reportes Automáticos",
            prompt:
              "Diseña la arquitectura de reportes automáticos multi-periodicidad (diario, semanal, mensual). Describe fuentes, transformaciones, validaciones y proceso de distribución automatizada."
          },
          {
            id: "50",
            title: "Reportes con Narrativa Automática",
            prompt:
              "Desarrolla un motor simple que, a partir de datos, genere narrativa ejecutiva resaltando 5 insights automáticos por reporte y recomendaciones accionables."
          },
          {
            id: "51",
            title: "Consolidación y Reconciliación Automática",
            prompt:
              "Define el proceso de consolidación multi-entidad con reconcilación automática, control de eliminaciones intercompany y manejo de conversiones FX."
          }
        ]
      },
      {
        id: "4-3",
        title: "Dashboards Ejecutivos",
        prompts: [
          {
            id: "52",
            title: "Dashboard Ejecutivo en Tiempo Real",
            prompt:
              "Diseña un dashboard en tiempo real que muestre KPIs críticos, tendencias y alertas. Indica widgets, data sources, refresh rate y drill-downs sugeridos."
          },
          {
            id: "53",
            title: "Dashboard de Performance vs Budget",
            prompt:
              "Crea un dashboard que compare performance actual vs. budget y forecast, con análisis de variaciones descompuesto por driver (volumen, precio, mix, eficiencia)."
          },
          {
            id: "54",
            title: "Dashboard de Risk & Compliance",
            prompt:
              "Diseña un tablero que consolide riesgos, cumplimiento de obligaciones y hallazgos de auditoría, permitiendo priorizar acciones por impacto."
          }
        ]
      },
      {
        id: "4-4",
        title: "Análisis de Desviaciones Presupuestarias",
        prompts: [
          {
            id: "55",
            title: "Sistema de Análisis de Variaciones",
            prompt:
              "Desarrolla un proceso analítico para descomponer desviaciones presupuestarias por volumen, precio, mix, eficiencia y timing. Incluye templates y ejemplos."
          },
          {
            id: "56",
            title: "Análisis Predictivo de Desviaciones",
            prompt:
              "Crea un modelo que use indicadores adelantados para predecir desviaciones presupuestarias y recomendar acciones preventivas."
          },
          {
            id: "57",
            title: "Framework de Accountability",
            prompt:
              "Define un marco de responsabilidad para desviaciones presupuestarias que asigne owners, umbrales y procesos de escalamiento."
          }
        ]
      },
      {
        id: "4-5",
        title: "Reportes de Cumplimiento",
        prompts: [
          {
            id: "58",
            title: "Sistema de Reportes Regulatorios",
            prompt:
              "Diseña un sistema de reportes regulatorios que incluya validaciones, workflow de aprobación y evidencias para auditorías."
          },
          {
            id: "59",
            title: "Dashboard de Compliance",
            prompt:
              "Crea un dashboard que muestre estado de obligaciones, alertas por proximidad de fecha y métricas de calidad de datos."
          },
          {
            id: "60",
            title: "Reportes para Auditorías Externas",
            prompt:
              "Genera un paquete de reportes estandarizados para auditorías externas con evidencia vinculada y procesos de backup."
          }
        ]
      }
    ]
  },

  // ---------------------------
  // 🧾 5. Cumplimiento Fiscal Proactivo (15 prompts)
  // ---------------------------
  {
    id: "cat-5",
    title: "🧾 Cumplimiento Fiscal Proactivo",
    icon: "🧮",
    subcategories: [
      {
        id: "5-1",
        title: "Calendarios de Obligaciones",
        prompts: [
          {
            id: "61",
            title: "Calendario Fiscal Automatizado",
            prompt:
              "Genera un calendario fiscal integrado con todas las obligaciones aplicables a [tipo de empresa], incluyendo plazos, formularios y responsables. Incluye alertas y estimación de montos cuando sea posible."
          },
          {
            id: "62",
            title: "Calendario Consolidado para Grupo",
            prompt:
              "Construye un calendario consolidado para grupo empresarial con múltiples jurisdicciones, incluyendo dependencias y recursos compartidos."
          },
          {
            id: "63",
            title: "Integración del Calendario con Cash Flow",
            prompt:
              "Diseña la integración del calendario de obligaciones con la proyección de flujo de caja para identificar periodos críticos de liquidez."
          }
        ]
      },
      {
        id: "5-2",
        title: "Explicación de Cambios Normativos",
        prompts: [
          {
            id: "64",
            title: "Análisis de Reforma Tributaria",
            prompt:
              "Analiza el impacto de una reforma tributaria hipotética en nuestra empresa: cuantifica cambios en carga tributaria, identifica nuevas obligaciones y propone un plan de adaptación."
          },
          {
            id: "65",
            title: "Memo Ejecutivo sobre Cambios",
            prompt:
              "Redacta un memo para la dirección que resuma cambios normativos recientes, implicaciones y acciones recomendadas."
          },
          {
            id: "66",
            title: "Plantilla de Comunicación a Clientes",
            prompt:
              "Crea una plantilla para comunicar a clientes cambios fiscales relevantes, con FAQ y pasos a seguir."
          }
        ]
      },
      {
        id: "5-3",
        title: "Estrategias de Optimización Fiscal",
        prompts: [
          {
            id: "67",
            title: "Plan Estratégico de Optimización Fiscal",
            prompt:
              "Proyecta un plan anual de optimización fiscal que identifique oportunidades legales de ahorro, evalúe riesgos y cuantifique el beneficio esperado por iniciativa."
          },
          {
            id: "68",
            title: "Estructura Corporativa Óptima",
            prompt:
              "Analiza alternativas de estructura societaria para optimizar carga fiscal (holding, filiales, sucursales) y sugiere la opción óptima considerando riesgos y costos."
          },
          {
            id: "69",
            title: "Estrategias de Timing y Diferimiento",
            prompt:
              "Desarrolla estrategias defensables de timing para el reconocimiento de ingresos y gastos que optimicen carga fiscal sin elevar riesgo de cuestionamiento."
          }
        ]
      },
      {
        id: "5-4",
        title: "Análisis de Riesgos Tributarios",
        prompts: [
          {
            id: "70",
            title: "Matriz Integral de Riesgos Tributarios",
            prompt:
              "Crea una matriz de riesgos tributarios por tipo de impuesto y proceso, evaluando probabilidad, impacto y controles actuales. Propón remedios y prioridades."
          },
          {
            id: "71",
            title: "Evaluación de Posiciones Fiscales Agresivas",
            prompt:
              "Analiza la solidez de posiciones fiscales agresivas: evidencia legal, precedentes y probabilidad de ajuste. Recomienda postura defensiva o ajuste y pasos de mitigación."
          },
          {
            id: "72",
            title: "Early Warning Tributario",
            prompt:
              "Define indicadores de alerta temprana para riesgos tributarios (patterns que sugieren fiscalización) y el flujo de trabajo para investigarlos."
          }
        ]
      },
      {
        id: "5-5",
        title: "Documentación de Cumplimiento",
        prompts: [
          {
            id: "73",
            title: "Sistema de Documentación Tributaria",
            prompt:
              "Diseña un sistema centralizado de documentación para obligaciones tributarias y soporte de posiciones fiscales (control de versiones, evidencias y accesos)."
          },
          {
            id: "74",
            title: "Expediente Defensivo ante Auditoría",
            prompt:
              "Prepara un checklist y estructura de expediente defensivo para presentar ante una auditoría tributaria: qué evidencias, formatos y responsabilidades incluir."
          },
          {
            id: "75",
            title: "Documentación de Precios de Transferencia",
            prompt:
              "Genera un esquema de documentación de precios de transferencia (Master File & Local File) con comparables y metodología."
          }
        ]
      }
    ]
  },

  // ---------------------------
  // 🕵️ 6. Auditoría y Control Robusto (15 prompts)
  // ---------------------------
  {
    id: "cat-6",
    title: "🕵️ Auditoría y Control Robusto",
    icon: "🧩",
    subcategories: [
      {
        id: "6-1",
        title: "Programas de Auditoría Personalizados",
        prompts: [
          {
            id: "76",
            title: "Diseño de Programa Integral",
            prompt:
              "Actúa como auditor senior y diseña un programa de auditoría integral para [proceso/área], incluyendo scope, técnicas de muestreo, pruebas sustantivas y cronograma. Incluye métricas de efectividad y ejemplos de pruebas a ejecutar."
          },
          {
            id: "77",
            title: "Programa Basado en Riesgo (RA)",
            prompt:
              "Desarrolla un programa de auditoría basado en riesgo que integre ERM: mapeo de riesgos, priorización y pruebas de control enfocadas en áreas de mayor impacto."
          },
          {
            id: "78",
            title: "Auditoría Continua y Data Analytics",
            prompt:
              "Propón un plan de auditoría continua que use analytics (tests automatizados, sampling, anomaly detection) para monitorear transacciones críticas."
          }
        ]
      },
      {
        id: "6-2",
        title: "Evaluación de Controles Internos",
        prompts: [
          {
            id: "79",
            title: "Evaluación COSO 2013",
            prompt:
              "Realiza una evaluación de controles internos usando el marco COSO: para cada componente mapea principios y evidencia requerida. Identifica gaps y prioriza acciones."
          },
          {
            id: "80",
            title: "Controles IT y Ciberseguridad",
            prompt:
              "Diseña un checklist de control IT y seguridad para aplicaciones contables y ERP, incluyendo access controls, change management y disaster recovery."
          },
          {
            id: "81",
            title: "Matriz de Controles Avanzada",
            prompt:
              "Crea una matriz que relacione riesgos con controles, frecuencia de ejecución, owner y criterios de efectividad. Incluye ejemplos para transacciones de alto riesgo."
          }
        ]
      },
      {
        id: "6-3",
        title: "Detección de Irregularidades",
        prompts: [
          {
            id: "82",
            title: "Análisis Forense Financiero",
            prompt:
              "Actúa como investigador forense: usa técnicas (Benford, análisis de outliers, duplicate detection) para identificar patrones de fraude. Indica pasos para preservar evidencia."
          },
          {
            id: "83",
            title: "Detección de Fraude Ocupacional",
            prompt:
              "Diseña un programa de detección de fraude ocupacional (apropiación indebida, nómina, compras). Incluye triggers y pruebas de monitoreo."
          },
          {
            id: "84",
            title: "Sistema de Alertas Inteligentes",
            prompt:
              "Construye un sistema de alertas que combine métricas financieras y análisis conductual para identificar riesgos emergentes y posibles irregularidades."
          }
        ]
      },
      {
        id: "6-4",
        title: "Recomendaciones de Mejora",
        prompts: [
          {
            id: "85",
            title: "Análisis Costo-Beneficio de Recomendaciones",
            prompt:
              "Evalúa el costo y beneficio de implementar mejoras de control sugeridas, priorizando por impacto y factibilidad. Devuelve un plan de implementación por fases."
          },
          {
            id: "86",
            title: "Plan de Acción Detallado",
            prompt:
              "Convierte hallazgos de auditoría en un plan de acción detallado con actividades, responsables, cronograma y métricas de cierre."
          },
          {
            id: "87",
            title: "Framework de Mejora Continua",
            prompt:
              "Propón un framework que integre auditoría, gestión del cambio y KPIs para asegurar implementación y sostenibilidad de acciones correctivas."
          }
        ]
      },
      {
        id: "6-5",
        title: "Seguimiento de Hallazgos",
        prompts: [
          {
            id: "88",
            title: "Protocolo de Verificación de Cierre",
            prompt:
              "Diseña un protocolo para verificar el cierre efectivo de hallazgos: checklist, evidencia mínima, pruebas y timing mínimo de verificación post-implementación."
          },
          {
            id: "89",
            title: "Reporte de Seguimiento para Comité",
            prompt:
              "Crea un reporte ejecutivo de seguimiento que muestre estado de hallazgos, aging, responsables y riesgos residuales."
          },
          {
            id: "90",
            title: "Métricas de Efectividad de Auditoría",
            prompt:
              "Define KPIs para medir efectividad de la función de auditoría (tiempo de cierre, % remedio efectivo, retorno sobre recomendación) y cómo medirlos."
          }
        ]
      }
    ]
  },

  // ---------------------------
  // 🌍 7. Clientes Internacionales Sin Fronteras (15 prompts)
  // ---------------------------
  {
    id: "cat-7",
    title: "🌍 Clientes Internacionales Sin Fronteras",
    icon: "🌐",
    subcategories: [
      {
        id: "7-1",
        title: "Análisis de Diferencias Normativas",
        prompts: [
          {
            id: "91",
            title: "Comparativo IFRS vs US GAAP",
            prompt:
              "Desarrolla una tabla comparativa de diferencias clave entre IFRS y US GAAP para una empresa multinacional. Indica impacto en reconocimiento de ingresos, arrendamientos, instrumentos financieros y consolidación, y su efecto en ratios y covenants."
          },
          {
            id: "92",
            title: "Evaluación de Cambio de Marco Contable",
            prompt:
              "Prepara un informe de impacto para la transición de [marco actual] a [nuevo marco], incluyendo ajustes al balance de apertura, impactos fiscales y requerimientos de sistemas."
          },
          {
            id: "93",
            title: "Guía de Convergencia y Disclosure",
            prompt:
              "Genera guía práctica para la convergencia de políticas contables y requerimientos de disclosure por jurisdicción."
          }
        ]
      },
      {
        id: "7-2",
        title: "Reportes en Múltiples Monedas",
        prompts: [
          {
            id: "94",
            title: "Arquitectura de Reporteo Multi-moneda",
            prompt:
              "Diseña una arquitectura de reporteo que soporte múltiples monedas: definición de moneda funcional, método de conversión, reconciliaciones y controles FX."
          },
          {
            id: "95",
            title: "Análisis de Impacto Cambiario",
            prompt:
              "Evalúa el impacto de movimientos cambiarios en P&L y flujo de caja, con escenarios +/-5/10% y recomendaciones de cobertura."
          },
          {
            id: "96",
            title: "Revelaciones Multi-moneda",
            prompt:
              "Prepara la sección de notas para estados financieros que explique políticas de conversión, exposiciones y efecto en resultados."
          }
        ]
      },
      {
        id: "7-3",
        title: "Explicación de Regulaciones Locales",
        prompts: [
          {
            id: "97",
            title: "Guía Ejecutiva por Jurisdicción",
            prompt:
              "Crea una guía ejecutiva de compliance para [país], que incluya principales obligaciones fiscales, laborales y regulatorias relevantes para la operación."
          },
          {
            id: "98",
            title: "Análisis de Riesgos Regulatorios Locales",
            prompt:
              "Analiza riesgos regulatorios locales y su probabilidad de enforcement; sugiere controles y plan de monitoreo."
          },
          {
            id: "99",
            title: "Reporte a Matriz sobre Cambio Regulatorio",
            prompt:
              "Prepara un reporte ejecutivo para la casa matriz sobre un cambio regulatorio en una subsidiaria, indicando impacto y acciones requeridas."
          }
        ]
      },
      {
        id: "7-4",
        title: "Comunicación Intercultural",
        prompts: [
          {
            id: "100",
            title: "Protocolo de Comunicación Intercultural",
            prompt:
              "Desarrolla un protocolo que detalle cómo adaptar comunicaciones financieras a diferentes culturas (tono, formalidad, estructura), incluyendo ejemplos y templates."
          },
          {
            id: "101",
            title: "Adaptación de Reportes por Audiencia",
            prompt:
              "Define cómo adaptar reportes financieros según audiencia cultural (investor relations vs local management) y ejemplos de executive summary."
          },
          {
            id: "102",
            title: "Gestión de Equipos Multiculturales",
            prompt:
              "Crea un framework para minimizar conflictos culturales en equipos financieros globales, con protocolos de escalado y formación recomendada."
          }
        ]
      },
      {
        id: "7-5",
        title: "Consolidación Internacional",
        prompts: [
          {
            id: "103",
            title: "Proceso de Consolidación Global",
            prompt:
              "Diseña el proceso de consolidación multi-entidad: chart of accounts global, eliminaciones intercompany, conversiones FX y reconciliaciones. Incluye checklist y control points."
          },
          {
            id: "104",
            title: "Gestión de Intercompany",
            prompt:
              "Propón un sistema para gestionar transacciones intercompany: catálogo de transacciones, confirmaciones bilaterales y reconciliaciones automáticas."
          },
          {
            id: "105",
            title: "Reporteo Segmentado y Performance Global",
            prompt:
              "Crea la estructura de reporteo por segmentos (geográfico/linea de negocio) con métricas clave, reglas de asignación y dashboard ejecutivo para decisiones de asignación de capital."
          }
        ]
      }
    ]
  }
];

export default promptsData;
