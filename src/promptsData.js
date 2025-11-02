// src/promptsData.js
// 🇲🇽 PACK SAT MÉXICO - 40 PROMPTS ESPECIALIZADOS
// Estructura de datos para Consola Contador 4.0 México
// Última actualización: Noviembre 2025

const promptsData = [
  {
    "title": "📄 Facturación Electrónica CFDI",
    "icon": "🧾",
    "color": "#1e40af", // Azul
    "subcategories": [
      {
        "title": "CFDI 4.0 y Complementos",
        "prompts": [
          {
            "id": 1,
            "title": "Validación de CFDI 4.0",
            "description": "Valida cumplimiento con Anexo 20 versión 4.0",
            "prompt": "Actúa como especialista en facturación electrónica mexicana. Revisa este CFDI y valida que cumpla con todos los requisitos del Anexo 20 versión 4.0. Identifica errores comunes que podrían generar rechazo por el SAT:\n\n[DATOS DEL CFDI]\n\nGenera reporte con:\n1. Validaciones técnicas realizadas\n2. Errores detectados (si los hay)\n3. Impacto fiscal de cada error\n4. Pasos correctivos específicos",
            "variables": ["DATOS DEL CFDI"],
            "category": "facturacion",
            "tags": ["CFDI", "Anexo 20", "validación", "errores"]
          },
          {
            "id": 2,
            "title": "Complemento de Pagos (REP)",
            "description": "Estructura correcta del Complemento de Pagos",
            "prompt": "Genera la estructura correcta de un Complemento de Pagos para relacionar facturas pendientes de pago.\n\nCliente: [NOMBRE CLIENTE]\nFacturas a relacionar: [LISTA DE CFDI CON FOLIOS]\nForma de pago: [MÉTODO DE PAGO]\nMonto total: [CANTIDAD]\n\nIncluye:\n- Todos los nodos requeridos según Anexo 20\n- Validación de saldos insolutos\n- Verificación de montos\n- Estructura XML correcta",
            "variables": ["NOMBRE CLIENTE", "LISTA DE CFDI CON FOLIOS", "MÉTODO DE PAGO", "CANTIDAD"],
            "category": "facturacion",
            "tags": ["REP", "pagos", "complemento", "XML"]
          },
          {
            "id": 3,
            "title": "Carta Porte 3.0",
            "description": "Complemento para transporte de mercancías",
            "prompt": "Diseña un Complemento Carta Porte 3.0 para transporte de mercancías cumpliendo normativa SAT.\n\nOrigen: [UBICACIÓN ORIGEN]\nDestino: [UBICACIÓN DESTINO]\nMercancía: [DESCRIPCIÓN DETALLADA]\nPeso: [KILOGRAMOS]\nVehículo: [TIPO DE VEHÍCULO]\n\nIdentifica:\n1. Figuras de transporte necesarias\n2. Validaciones de ubicaciones según catálogos SAT\n3. Claves de producto/servicio correctas\n4. Permisos SCT requeridos",
            "variables": ["UBICACIÓN ORIGEN", "UBICACIÓN DESTINO", "DESCRIPCIÓN DETALLADA", "KILOGRAMOS", "TIPO DE VEHÍCULO"],
            "category": "facturacion",
            "tags": ["Carta Porte", "transporte", "SCT", "logística"]
          },
          {
            "id": 4,
            "title": "CFDI de Nómina 1.2",
            "description": "Estructura de CFDI de nómina con cálculos",
            "prompt": "Crea estructura de CFDI de Nómina 1.2 para empleado con los siguientes datos:\n\nSalario base: $[SALARIO BASE]\nDeducciones IMSS: $[MONTO IMSS]\nISR retenido: $[MONTO ISR]\nOtros conceptos: [LISTA DE CONCEPTOS]\n\nValida:\n- Cálculos de subsidio al empleo\n- Deducciones obligatorias correctas\n- Percepciones y otros ingresos según tablas vigentes\n- Estructura del complemento de nómina",
            "variables": ["SALARIO BASE", "MONTO IMSS", "MONTO ISR", "LISTA DE CONCEPTOS"],
            "category": "facturacion",
            "tags": ["nómina", "sueldos", "IMSS", "ISR"]
          },
          {
            "id": 5,
            "title": "Cancelación de CFDI",
            "description": "Análisis de procedencia de cancelación",
            "prompt": "Analiza si este CFDI puede cancelarse y bajo qué motivo según catálogo del SAT.\n\nDatos del CFDI: [DATOS COMPLETOS]\nRazón del cliente: [MOTIVO DE CANCELACIÓN]\n\nDetermina:\n1. Motivo correcto de cancelación (01-04 según catálogo)\n2. Si requiere aceptación del receptor\n3. Riesgos fiscales asociados\n4. Proceso recomendado paso a paso\n5. Plazo para solicitar cancelación",
            "variables": ["DATOS COMPLETOS", "MOTIVO DE CANCELACIÓN"],
            "category": "facturacion",
            "tags": ["cancelación", "motivos", "procedimiento"]
          },
          {
            "id": 6,
            "title": "CFDI de Retenciones",
            "description": "Retenciones e Información de Pagos",
            "prompt": "Genera CFDI de retenciones para pago realizado a:\n\n[PERSONA FÍSICA / PERSONA MORAL]\nConcepto: [SERVICIOS PROFESIONALES / ARRENDAMIENTO / OTRO]\nMonto del pago: $[CANTIDAD]\n\nCalcula:\n- Retenciones de ISR según tablas vigentes\n- Retenciones de IVA (si aplica)\n- Estructura XML completa con complemento\n- Base para cálculo de retenciones",
            "variables": ["PERSONA FÍSICA / PERSONA MORAL", "SERVICIOS PROFESIONALES / ARRENDAMIENTO / OTRO", "CANTIDAD"],
            "category": "facturacion",
            "tags": ["retenciones", "ISR", "IVA", "honorarios"]
          },
          {
            "id": 7,
            "title": "CFDI Complemento Donatarias",
            "description": "Facturación para donatarias autorizadas",
            "prompt": "Estructura CFDI de ingresos con complemento de donatarias autorizadas.\n\nDonante: [DATOS DEL DONANTE]\nMonto de donación: $[CANTIDAD]\nDonataria: [RFC DE DONATARIA]\nNúmero de autorización: [NÚMERO DE AUTORIZACIÓN SAT]\n\nValida:\n- Requisitos de deducibilidad\n- Leyendas obligatorias\n- Vigencia de autorización\n- Límites de deducción para el donante",
            "variables": ["DATOS DEL DONANTE", "CANTIDAD", "RFC DE DONATARIA", "NÚMERO DE AUTORIZACIÓN SAT"],
            "category": "facturacion",
            "tags": ["donatarias", "donativos", "deducibilidad"]
          },
          {
            "id": 8,
            "title": "CFDI Global Público General",
            "description": "Factura global mensual para ventas sin RFC",
            "prompt": "Crea CFDI Global mensual para ventas a público general.\n\nPeríodo: [MES/AÑO]\nTotal de operaciones: $[MONTO TOTAL]\nTicket promedio: $[CANTIDAD PROMEDIO]\nSector: [RETAIL / RESTAURANTE / SERVICIOS / OTRO]\n\nDetermina:\n- Periodicidad correcta según reglas 2.7.1.24 y 2.7.1.26\n- Forma de pago adecuada\n- Requisitos de registro de operaciones\n- Validaciones de montos",
            "variables": ["MES/AÑO", "MONTO TOTAL", "CANTIDAD PROMEDIO", "RETAIL / RESTAURANTE / SERVICIOS / OTRO"],
            "category": "facturacion",
            "tags": ["global", "público general", "retail"]
          },
          {
            "id": 9,
            "title": "Addenda Corporativa",
            "description": "Diseño de addenda personalizada",
            "prompt": "Diseña addenda personalizada para cliente corporativo según sus requerimientos.\n\nEmpresa: [NOMBRE EMPRESA]\nEspecificaciones: [REQUISITOS ESPECÍFICOS]\n\nValida que:\n- No contradiga información del CFDI base\n- Cumpla estándares XML\n- Incluya campos requeridos:\n  • Orden de compra\n  • Centro de costos\n  • Proyecto\n  • [OTROS CAMPOS ESPECÍFICOS]",
            "variables": ["NOMBRE EMPRESA", "REQUISITOS ESPECÍFICOS", "OTROS CAMPOS ESPECÍFICOS"],
            "category": "facturacion",
            "tags": ["addenda", "corporativo", "XML personalizado"]
          },
          {
            "id": 10,
            "title": "Análisis de Errores de Timbrado",
            "description": "Diagnóstico y solución de rechazos del PAC",
            "prompt": "Este CFDI fue rechazado por el PAC con el siguiente error:\n\nCódigo de error: [CÓDIGO]\nMensaje: [MENSAJE DE ERROR]\n\nContexto:\nCliente factura: [TIPO DE OPERACIÓN]\nMonto: $[CANTIDAD]\n\nExplica:\n1. Qué significa el error en lenguaje simple\n2. Causa raíz probable\n3. Solución paso a paso\n4. Cómo prevenir este error en el futuro\n5. Errores relacionados a vigilar",
            "variables": ["CÓDIGO", "MENSAJE DE ERROR", "TIPO DE OPERACIÓN", "CANTIDAD"],
            "category": "facturacion",
            "tags": ["errores", "PAC", "troubleshooting", "timbrado"]
          }
        ]
      }
    ]
  },
  
  {
    "title": "📋 Declaraciones y Obligaciones",
    "icon": "📊",
    "color": "#059669", // Verde
    "subcategories": [
      {
        "title": "Declaraciones Mensuales y Anuales",
        "prompts": [
          {
            "id": 11,
            "title": "Declaración Mensual PM",
            "description": "Persona Moral Régimen General",
            "prompt": "Prepara cédula de trabajo para declaración mensual de persona moral régimen general.\n\nPeríodo: [MES/AÑO]\n\nDatos:\n- Ingresos acumulados: $[MONTO INGRESOS]\n- Deducciones autorizadas: $[MONTO DEDUCCIONES]\n- IVA causado: $[MONTO IVA CAUSADO]\n- IVA acreditable: $[MONTO IVA ACREDITABLE]\n- Retenciones de ISR: $[MONTO RETENCIONES]\n\nCalcula:\n1. ISR causado del período\n2. Coeficiente de utilidad aplicable\n3. Pagos provisionales\n4. Estructura del llenado en formato SAT",
            "variables": ["MES/AÑO", "MONTO INGRESOS", "MONTO DEDUCCIONES", "MONTO IVA CAUSADO", "MONTO IVA ACREDITABLE", "MONTO RETENCIONES"],
            "category": "declaraciones",
            "tags": ["mensual", "persona moral", "ISR", "IVA"]
          },
          {
            "id": 12,
            "title": "Declaración Anual PF",
            "description": "Persona Física Actividad Empresarial",
            "prompt": "Genera cédula de declaración anual para persona física.\n\nRégimen: [RÉGIMEN FISCAL]\nEjercicio: [AÑO]\n\nIngresos por:\n[DESGLOSE POR CADA FUENTE]\n\nDeducciones personales:\n[LISTA DETALLADA]\n\nPagos provisionales/retenciones: $[MONTO]\n\nCalcula:\n- Base gravable\n- ISR anual\n- Saldo a favor o cargo\n- Estrategias de optimización fiscal legal\n- Documentación soporte necesaria",
            "variables": ["RÉGIMEN FISCAL", "AÑO", "DESGLOSE POR CADA FUENTE", "LISTA DETALLADA", "MONTO"],
            "category": "declaraciones",
            "tags": ["anual", "persona física", "deducciones personales"]
          },
          {
            "id": 13,
            "title": "DIOT Mensual",
            "description": "Declaración Informativa de Operaciones con Terceros",
            "prompt": "Estructura archivo DIOT (Declaración Informativa de Operaciones con Terceros).\n\nPeríodo: [MES/AÑO]\n\nOperaciones:\n[LISTA DE PROVEEDORES CON:\n- Nombre/RFC\n- Monto de operación\n- IVA trasladado\n- Tipo de operación]\n\nIdentifica:\n- Tipo de tercero (04 para nacional)\n- Tipo de operación (03-85 según catálogo)\n- IVA acreditable vs no acreditable\n- Genera layout correcto para importación en SAT",
            "variables": ["MES/AÑO", "LISTA DE PROVEEDORES"],
            "category": "declaraciones",
            "tags": ["DIOT", "informativa", "proveedores", "IVA"]
          },
          {
            "id": 14,
            "title": "DIM - Declaración Informativa Múltiple",
            "description": "Módulos de información anual",
            "prompt": "Prepara módulo de Declaración Informativa Múltiple (DIM).\n\nTipo de módulo: [SUELDOS Y SALARIOS / RETENCIONES / CLIENTES Y PROVEEDORES]\nEjercicio: [AÑO]\n\nDatos según módulo:\n[INFORMACIÓN ESPECÍFICA]\n\nValida:\n- Umbral de presentación obligatoria\n- Formato de anexos requeridos\n- Requisitos específicos según Resolución Miscelánea vigente\n- Plazos de presentación\n- Consecuencias de no presentar",
            "variables": ["SUELDOS Y SALARIOS / RETENCIONES / CLIENTES Y PROVEEDORES", "AÑO", "INFORMACIÓN ESPECÍFICA"],
            "category": "declaraciones",
            "tags": ["DIM", "informativa", "anual"]
          },
          {
            "id": 15,
            "title": "Aviso de Compensación",
            "description": "Compensación de saldos a favor",
            "prompt": "Cliente desea compensar saldo a favor contra impuestos por pagar.\n\nSaldo a favor de: [IMPUESTO ORIGEN]\nMonto: $[CANTIDAD]\nEjercicio del saldo: [AÑO]\nImpuesto a compensar: [IMPUESTO DESTINO]\nPeríodo: [MES/AÑO]\n\nValida:\n- Requisitos de compensación según CFF\n- Necesidad de dictamen (si aplica según monto)\n- Llenado correcto del formato 41\n- Plazos para presentar aviso\n- Documentación soporte obligatoria",
            "variables": ["IMPUESTO ORIGEN", "CANTIDAD", "AÑO", "IMPUESTO DESTINO", "MES/AÑO"],
            "category": "declaraciones",
            "tags": ["compensación", "saldo a favor", "formato 41"]
          },
          {
            "id": 16,
            "title": "Actualización de Actividades",
            "description": "Aviso al RFC por nuevas actividades",
            "prompt": "Genera texto para presentar aviso de actualización al RFC.\n\nContribuyente: [NOMBRE COMPLETO]\nRFC: [CLAVE RFC]\nActividad actual: [CÓDIGO Y DESCRIPCIÓN ACTUAL]\nNueva actividad a agregar: [DESCRIPCIÓN NUEVA ACTIVIDAD]\n\nDetermina:\n1. Código SCIAN correcto\n2. Obligaciones fiscales adicionales que adquiere\n3. Plazo de presentación del aviso\n4. Formato de captura en portal SAT\n5. Documentación que debe adjuntar",
            "variables": ["NOMBRE COMPLETO", "CLAVE RFC", "CÓDIGO Y DESCRIPCIÓN ACTUAL", "DESCRIPCIÓN NUEVA ACTIVIDAD"],
            "category": "declaraciones",
            "tags": ["RFC", "actividades", "SCIAN", "obligaciones"]
          },
          {
            "id": 17,
            "title": "Pagos Definitivos ISR Extranjeros",
            "description": "Retención a residentes en el extranjero",
            "prompt": "Persona física extranjera sin establecimiento permanente en México.\n\nDatos:\nNombre: [NOMBRE EXTRANJERO]\nPaís de residencia: [PAÍS]\nServicio prestado: [DESCRIPCIÓN]\nMonto del pago: $[CANTIDAD]\n\nGenera:\n- Cédula de retención de ISR\n- Tasa correcta según tratado fiscal con [PAÍS]\n- Cálculo de retención definitiva\n- CFDI de retenciones correspondiente\n- Obligaciones de información",
            "variables": ["NOMBRE EXTRANJERO", "PAÍS", "DESCRIPCIÓN", "CANTIDAD"],
            "category": "declaraciones",
            "tags": ["extranjeros", "retenciones", "tratados", "ISR"]
          },
          {
            "id": 18,
            "title": "Declaración Complementaria",
            "description": "Corrección de declaraciones anteriores",
            "prompt": "Cliente necesita corregir declaración previamente presentada.\n\nTipo de declaración: [MENSUAL / ANUAL / INFORMATIVA]\nPeríodo: [MES/AÑO]\nFecha de presentación original: [FECHA]\n\nError detectado:\n[DESCRIPCIÓN DEL ERROR]\n\nInformación correcta:\n[DATOS CORRECTOS]\n\nDetermina:\n- Tipo de complementaria (1-errores, 2-dictamen, 3-devolución)\n- Cálculo de recargos y actualizaciones\n- Estrategia de presentación\n- Documentación justificativa necesaria",
            "variables": ["MENSUAL / ANUAL / INFORMATIVA", "MES/AÑO", "FECHA", "DESCRIPCIÓN DEL ERROR", "DATOS CORRECTOS"],
            "category": "declaraciones",
            "tags": ["complementaria", "corrección", "recargos"]
          }
        ]
      }
    ]
  },
  
  {
    "title": "💾 Contabilidad Electrónica",
    "icon": "💻",
    "color": "#dc2626", // Rojo
    "subcategories": [
      {
        "title": "Anexo 24 y Archivos XML",
        "prompts": [
          {
            "id": 19,
            "title": "Mapeo al Catálogo SAT",
            "description": "Asignación correcta de cuentas contables",
            "prompt": "Cliente necesita mapear su plan contable al catálogo de cuentas del SAT (Anexo 24).\n\nCuenta del cliente:\nCódigo: [CÓDIGO INTERNO]\nNombre: [NOMBRE DE LA CUENTA]\nNaturaleza: [DEUDORA / ACREEDORA]\nTipo de cuenta: [ACTIVO / PASIVO / CAPITAL / INGRESOS / GASTOS]\n\nSugiere:\n1. Código SAT más apropiado\n2. Nivel requerido en la estructura\n3. Si necesita agrupador\n4. Validación de naturaleza correcta\n5. Ejemplos de movimientos típicos",
            "variables": ["CÓDIGO INTERNO", "NOMBRE DE LA CUENTA", "DEUDORA / ACREEDORA", "ACTIVO / PASIVO / CAPITAL / INGRESOS / GASTOS"],
            "category": "contabilidad_electronica",
            "tags": ["catálogo SAT", "Anexo 24", "mapeo", "cuentas"]
          },
          {
            "id": 20,
            "title": "Validación de Balanza XML",
            "description": "Verificación de cumplimiento Anexo 24",
            "prompt": "Valida que esta balanza de comprobación cumpla requisitos de Anexo 24 para envío al SAT.\n\nPeríodo: [MES/AÑO]\n\n[ESTRUCTURA XML O DATOS DE LA BALANZA]\n\nRevisa:\n- Uso correcto de catálogo SAT en cada cuenta\n- Cuadre de saldos iniciales vs finales\n- Correcta asignación de naturalezas (D/A)\n- Detecta inconsistencias comunes que generan rechazo\n- Validación de suma de movimientos",
            "variables": ["MES/AÑO", "ESTRUCTURA XML O DATOS DE LA BALANZA"],
            "category": "contabilidad_electronica",
            "tags": ["balanza", "XML", "validación", "Anexo 24"]
          },
          {
            "id": 21,
            "title": "Pólizas Contables XML",
            "description": "Estructura de pólizas según Anexo 24",
            "prompt": "Genera estructura de pólizas contables en formato XML según Anexo 24.\n\nTipo de póliza: [EGRESO / INGRESO / DIARIO]\nFecha: [FECHA]\nConcepto: [DESCRIPCIÓN DEL MOVIMIENTO]\n\nMovimientos:\n[LISTA DE CUENTAS CON CARGOS Y ABONOS:\n- Cuenta: [código] - Cargo: $[monto] - Abono: $[monto]\n- Cuenta: [código] - Cargo: $[monto] - Abono: $[monto]]\n\nIncluye:\n- Referencias a CFDI relacionados (UUID)\n- Validación de cuadre (cargos = abonos)\n- Estructura XML completa",
            "variables": ["EGRESO / INGRESO / DIARIO", "FECHA", "DESCRIPCIÓN DEL MOVIMIENTO", "LISTA DE CUENTAS"],
            "category": "contabilidad_electronica",
            "tags": ["pólizas", "XML", "registros contables"]
          },
          {
            "id": 22,
            "title": "Auxiliar de Cuenta XML",
            "description": "Generación de auxiliar para requerimientos",
            "prompt": "Cliente recibió requerimiento de SAT solicitando auxiliar de cuenta específica.\n\nCuenta requerida:\nCódigo SAT: [CÓDIGO]\nNombre: [NOMBRE DE CUENTA]\nPeríodo: [MES/AÑO]\n\nEstructura archivo XML con:\n- Saldo inicial del período\n- Movimientos detallados con:\n  • Fecha\n  • Folio fiscal relacionado (UUID)\n  • Descripción\n  • Cargo/Abono\n- Saldo final\n- Validación de cuadre con balanza enviada",
            "variables": ["CÓDIGO", "NOMBRE DE CUENTA", "MES/AÑO"],
            "category": "contabilidad_electronica",
            "tags": ["auxiliar", "XML", "requerimiento SAT"]
          },
          {
            "id": 23,
            "title": "Análisis de Discrepancias",
            "description": "Comparación declarado vs prellenado SAT",
            "prompt": "SAT envió prellenado de declaración con diferencias versus lo declarado por el cliente.\n\nDeclarado por cliente:\n- Ingresos: $[MONTO DECLARADO INGRESOS]\n- IVA causado: $[MONTO DECLARADO IVA]\n\nPrellenado SAT:\n- Ingresos: $[MONTO PRELLENADO INGRESOS]\n- IVA causado: $[MONTO PRELLENADO IVA]\n\nAnaliza posibles causas:\n1. CFDI emitidos no declarados\n2. Errores de captura en declaración\n3. Operaciones no facturadas\n4. Cancelaciones no reflejadas\n5. Genera respuesta técnica para el SAT",
            "variables": ["MONTO DECLARADO INGRESOS", "MONTO DECLARADO IVA", "MONTO PRELLENADO INGRESOS", "MONTO PRELLENADO IVA"],
            "category": "contabilidad_electronica",
            "tags": ["discrepancias", "prellenado", "análisis"]
          },
          {
            "id": 24,
            "title": "Documentación Revisión Electrónica",
            "description": "Preparación para auditoría electrónica",
            "prompt": "SAT inició revisión electrónica del contribuyente.\n\nEjercicio fiscalizado: [AÑO]\nConcepto de revisión: [DESCRIPCIÓN]\n\nRequerimiento específico:\n[TEXTO DEL REQUERIMIENTO]\n\nGenera:\n1. Lista de documentación a preparar\n2. Estructura de carpetas digitales\n3. Cómo vincular contabilidad con CFDI\n4. Argumentos técnicos para desvirtuar observación\n5. Timeline de respuesta\n6. Formato de presentación de pruebas",
            "variables": ["AÑO", "DESCRIPCIÓN", "TEXTO DEL REQUERIMIENTO"],
            "category": "contabilidad_electronica",
            "tags": ["revisión electrónica", "auditoría", "documentación"]
          }
        ]
      }
    ]
  },
  
  {
    "title": "🔄 Precios de Transferencia",
    "icon": "💱",
    "color": "#7c3aed", // Púrpura
    "subcategories": [
      {
        "title": "Transfer Pricing México",
        "prompts": [
          {
            "id": 25,
            "title": "Evaluación Obligaciones PT",
            "description": "Determinación de obligaciones de precios de transferencia",
            "prompt": "Evalúa obligaciones de Precios de Transferencia para persona moral.\n\nContribuyente: [NOMBRE]\nIngresos ejercicio [AÑO]: $[MONTO TOTAL]\n\nOperaciones con partes relacionadas:\n[DESCRIPCIÓN Y MONTOS POR TIPO:\n- Compras: $[monto]\n- Ventas: $[monto]\n- Servicios: $[monto]\n- Regalías: $[monto]\n- Préstamos: $[monto]]\n\nDetermina:\n1. Obligación de presentar declaraciones informativas (DIPT local y maestra)\n2. Análisis de materialidad por tipo de operación\n3. Formatos aplicables (76 y anexos)\n4. Plazos de presentación\n5. Necesidad de estudio de precios de transferencia",
            "variables": ["NOMBRE", "AÑO", "MONTO TOTAL", "DESCRIPCIÓN Y MONTOS"],
            "category": "precios_transferencia",
            "tags": ["obligaciones", "DIPT", "partes relacionadas"]
          },
          {
            "id": 26,
            "title": "Análisis Funcional Simplificado",
            "description": "Perfil de funciones, activos y riesgos",
            "prompt": "Elabora análisis funcional preliminar para operación con parte relacionada.\n\nTipo de operación: [COMPRAVENTA / SERVICIOS / REGALÍAS / PRÉSTAMOS]\n\nEmpresa en México: [NOMBRE]\nParte relacionada: [NOMBRE Y PAÍS]\n\nDescribe:\n1. **Funciones** de cada parte:\n   - ¿Qué hace cada entidad?\n   - Personal involucrado\n   - Actividades clave\n\n2. **Activos** utilizados:\n   - Tangibles\n   - Intangibles\n   - Financieros\n\n3. **Riesgos** asumidos:\n   - De mercado\n   - Financieros\n   - Operacionales\n\n4. **Método de PT** más apropiado según naturaleza de la transacción",
            "variables": ["COMPRAVENTA / SERVICIOS / REGALÍAS / PRÉSTAMOS", "NOMBRE", "NOMBRE Y PAÍS"],
            "category": "precios_transferencia",
            "tags": ["análisis funcional", "FAR", "metodología"]
          },
          {
            "id": 27,
            "title": "Rango Intercuartil y Ajuste",
            "description": "Cálculo de rango y determinación de ajuste",
            "prompt": "Valida si operación con parte relacionada está a valor de mercado.\n\nOperación: [DESCRIPCIÓN]\nMonto anual: $[CANTIDAD]\nMargen aplicado por el contribuyente: [PORCENTAJE]%\n\nComparables identificados tienen márgenes:\n[LISTA DE PORCENTAJES DE MARGEN DE COMPARABLES]\n\nCalcula:\n1. Mediana del conjunto de comparables\n2. Rango intercuartil (percentil 25 a 75)\n3. Determina si el margen del contribuyente está dentro del rango\n4. Calcula ajuste necesario si está fuera\n5. Fundamentación según Artículo 180 LISR\n6. Impacto fiscal del ajuste",
            "variables": ["DESCRIPCIÓN", "CANTIDAD", "PORCENTAJE", "LISTA DE PORCENTAJES"],
            "category": "precios_transferencia",
            "tags": ["rango intercuartil", "ajuste", "comparables"]
          },
          {
            "id": 28,
            "title": "Revelación en Dictamen Fiscal",
            "description": "Párrafo de PT para dictamen de estados financieros",
            "prompt": "Genera párrafo de revelación sobre precios de transferencia para dictamen fiscal.\n\nEjercicio: [AÑO]\nContribuyente: [NOMBRE]\n\nResumen de operaciones:\n[DESCRIPCIÓN GENERAL DE OPERACIONES CON PARTES RELACIONADAS]\n\nMétodo aplicado: [NOMBRE DEL MÉTODO]\nMediana del rango: [PORCENTAJE]%\n\nIncluye:\n1. Revelación de políticas de PT\n2. Método aplicado y justificación\n3. Mediana del rango de comparables\n4. Cumplimiento de obligaciones formales\n5. Leyenda según NIA 700 adaptada al contexto mexicano\n6. Cualquier salvedad relevante",
            "variables": ["AÑO", "NOMBRE", "DESCRIPCIÓN GENERAL", "NOMBRE DEL MÉTODO", "PORCENTAJE"],
            "category": "precios_transferencia",
            "tags": ["dictamen", "revelación", "auditoría"]
          }
        ]
      }
    ]
  },
  
  {
    "title": "💡 Optimización Fiscal",
    "icon": "⚡",
    "color": "#f59e0b", // Ámbar
    "subcategories": [
      {
        "title": "Estrategias y Planeación",
        "prompts": [
          {
            "id": 29,
            "title": "Diferimiento Fiscal Legal",
            "description": "Estrategias para diferir pago de ISR",
            "prompt": "Persona moral régimen general cerrará ejercicio con utilidad fiscal estimada.\n\nEjercicio: [AÑO]\nUtilidad fiscal estimada: $[MONTO]\n\nOpciones disponibles para diferir:\n[MARCAR OPCIONES CONSIDERADAS:\n- Compra de activos fijos\n- Previsión social\n- Deducción inmediata\n- PTU\n- Otras]\n\nAnaliza para cada opción:\n1. Impacto en ISR del ejercicio\n2. Flujo de efectivo requerido\n3. Beneficio fiscal neto\n4. Requisitos fiscales específicos\n5. Riesgos asociados\n6. Recomendación basada en situación del cliente",
            "variables": ["AÑO", "MONTO", "OPCIONES CONSIDERADAS"],
            "category": "optimizacion",
            "tags": ["diferimiento", "planeación", "ISR", "estrategia"]
          },
          {
            "id": 30,
            "title": "Evaluación de Régimen Óptimo",
            "description": "Comparación de regímenes fiscales para PF",
            "prompt": "Persona física evalúa qué régimen fiscal le conviene más.\n\nIngresos anuales proyectados: $[MONTO]\nActividad: [DESCRIPCIÓN DE LA ACTIVIDAD]\nRégimen actual: [RÉGIMEN VIGENTE]\n\nCompara con otros regímenes aplicables:\n- RIF (Régimen de Incorporación Fiscal)\n- Asimilados a salarios\n- Arrendamiento (si aplica)\n- Actividad empresarial y profesional\n- RESICO (si aplica)\n\nCalcula para cada uno:\n1. ISR anual aproximado\n2. Obligaciones formales\n3. Restricciones y limitantes\n4. Ventajas específicas\n5. Recomendación fundamentada",
            "variables": ["MONTO", "DESCRIPCIÓN DE LA ACTIVIDAD", "RÉGIMEN VIGENTE"],
            "category": "optimizacion",
            "tags": ["regímenes", "persona física", "comparación", "ISR"]
          },
          {
            "id": 31,
            "title": "Análisis de Deducibilidad",
            "description": "Validación de requisitos fiscales para deducir",
            "prompt": "Cliente realizó erogación y duda si es deducible para ISR.\n\nConcepto del gasto: [DESCRIPCIÓN DETALLADA]\nMonto: $[CANTIDAD]\n\nContexto de la operación:\n[EXPLICACIÓN DE CÓMO SE ORIGINÓ, PARA QUÉ SIRVE, ETC.]\n\nAnaliza según Artículo 27 LISR:\n1. ¿Es estrictamente indispensable?\n2. ¿Se tiene comprobante fiscal (CFDI)?\n3. ¿El pago se realizó por medio bancario?\n4. Porcentaje deducible (100%, 50%, 0%)\n5. Documentación soporte necesaria adicional\n6. Tratamiento contable vs fiscal\n7. Riesgos de no deducir correctamente",
            "variables": ["DESCRIPCIÓN DETALLADA", "CANTIDAD", "EXPLICACIÓN"],
            "category": "optimizacion",
            "tags": ["deducibilidad", "gastos", "Art. 27", "requisitos"]
          },
          {
            "id": 32,
            "title": "Escisión vs Venta",
            "description": "Análisis fiscal de separación de socios",
            "prompt": "Socio desea separarse de la empresa y evalúa opciones.\n\nEmpresa: [NOMBRE]\nValor de participación del socio: $[MONTO]\n\nOpciones:\n**Opción 1:** Escisión de activos y pasivos\n**Opción 2:** Venta de acciones\n\nCompara:\n1. Tratamiento fiscal en cada caso\n2. ISR a pagar (calculado)\n3. Requisitos legales (mercantiles y fiscales)\n4. Timeline de cada proceso\n5. Costos asociados (notariales, fiscales, etc.)\n6. Recomendación basada en objetivo del cliente\n7. Aspectos a considerar en escritura",
            "variables": ["NOMBRE", "MONTO"],
            "category": "optimizacion",
            "tags": ["escisión", "reestructura", "venta de acciones", "socios"]
          },
          {
            "id": 33,
            "title": "Deducción Inmediata de Inversiones",
            "description": "Aplicación del Art. 220 LISR",
            "prompt": "Cliente adquirió activo fijo y evalúa aplicar deducción inmediata.\n\nActivo: [DESCRIPCIÓN DEL BIEN]\nMonto de inversión: $[CANTIDAD]\nFecha de adquisición: [MES/AÑO]\nUbicación del bien: [ENTIDAD FEDERATIVA]\n\nEvalúa aplicación del Art. 220 LISR:\n1. Porcentaje de deducción inmediata según:\n   - Tipo de bien\n   - Región del país\n2. Monto deducible vs depreciación normal\n3. Beneficio fiscal neto en el año\n4. Requisitos:\n   - Permanencia del bien\n   - Uso en la actividad\n   - Documentación\n5. Comparación con depreciación normal\n6. Recomendación fiscal",
            "variables": ["DESCRIPCIÓN DEL BIEN", "CANTIDAD", "MES/AÑO", "ENTIDAD FEDERATIVA"],
            "category": "optimizacion",
            "tags": ["deducción inmediata", "inversiones", "Art. 220", "activos"]
          },
          {
            "id": 34,
            "title": "Estrategia Pérdidas Fiscales",
            "description": "Optimización de amortización de pérdidas",
            "prompt": "Cliente tiene pérdidas fiscales de ejercicios anteriores que puede aplicar.\n\nPérdida fiscal actualizada: $[MONTO TOTAL]\nEjercicios de origen: [AÑOS]\n\nUtilidad fiscal proyectada ejercicio actual: $[MONTO UTILIDAD]\n\nDiseña estrategia óptima:\n1. Monto a aplicar este año (límite 50% de utilidad)\n2. Pérdida remanente después de aplicación\n3. Años restantes de aprovechamiento por cada ejercicio\n4. Proyección de recuperación total\n5. Análisis de riesgo de expiración\n6. Estrategias para maximizar uso:\n   - Anticipar ingresos\n   - Diferir deducciones\n   - Otras opciones legales",
            "variables": ["MONTO TOTAL", "AÑOS", "MONTO UTILIDAD"],
            "category": "optimizacion",
            "tags": ["pérdidas fiscales", "amortización", "estrategia", "utilidad"]
          }
        ]
      }
    ]
  },
  
  {
    "title": "⚖️ Controversias y Defensa",
    "icon": "🛡️",
    "color": "#ef4444", // Rojo intenso
    "subcategories": [
      {
        "title": "Recursos y Medios de Defensa",
        "prompts": [
          {
            "id": 35,
            "title": "Respuesta a Carta Invitación",
            "description": "Aclaración de discrepancias detectadas por SAT",
            "prompt": "SAT envió carta invitación por discrepancia detectada.\n\nNúmero de carta: [NÚMERO]\nConcepto: [DESCRIPCIÓN DE LA DISCREPANCIA]\nPeríodo: [MES/AÑO]\n\nInconsistencia detectada por SAT:\n[DESCRIPCIÓN DE LO QUE SAT DICE QUE ESTÁ MAL]\n\nInformación real del cliente:\n[DATOS Y EXPLICACIÓN CORRECTA]\n\nGenera respuesta técnica:\n1. Aclaración de la discrepancia\n2. Evidencia documental a adjuntar\n3. Fundamentación legal\n4. Tono apropiado (profesional, no defensivo)\n5. **IMPORTANTE:** Evitar incurrir en autodenuncia\n6. Formato de presentación en portal SAT",
            "variables": ["NÚMERO", "DESCRIPCIÓN DE LA DISCREPANCIA", "MES/AÑO", "DESCRIPCIÓN SAT", "DATOS CORRECTOS"],
            "category": "defensa",
            "tags": ["carta invitación", "aclaración", "respuesta", "discrepancias"]
          },
          {
            "id": 36,
            "title": "Recurso de Revocación",
            "description": "Impugnación de resolución administrativa",
            "prompt": "Cliente recibió resolución que considera improcedente.\n\nNúmero de resolución: [NÚMERO]\nCrédito fiscal determinado: $[MONTO]\nConcepto: [DESCRIPCIÓN]\n\nArgumentos del cliente de por qué es improcedente:\n[RAZONES Y FUNDAMENTOS]\n\nEstructura Recurso de Revocación ante SAT:\n1. **Agravios principales** (mínimo 3)\n2. **Fundamentación legal** (CFF y leyes fiscales)\n3. **Pruebas** a ofrecer:\n   - Documentales\n   - Periciales\n   - Testimoniales\n4. **Precedentes judiciales** aplicables\n5. **Solicitud específica:** revocación total o parcial\n6. Argumentos subsidiarios\n7. Documentación anexa",
            "variables": ["NÚMERO", "MONTO", "DESCRIPCIÓN", "RAZONES Y FUNDAMENTOS"],
            "category": "defensa",
            "tags": ["recurso revocación", "impugnación", "crédito fiscal"]
          },
          {
            "id": 37,
            "title": "Análisis Propuesta de Resolución",
            "description": "Respuesta a última acta parcial",
            "prompt": "Autoridad emitió última acta parcial con propuesta de determinación.\n\nEjercicio fiscalizado: [AÑO]\nCrédito propuesto: $[MONTO]\nConcepto: [DESCRIPCIÓN]\n\nArgumentos de la autoridad:\n[RESUMEN DE LO QUE DICE EL ACTA]\n\nAnaliza:\n1. Derechos del contribuyente en esta etapa\n2. Plazo para contestar (20 días hábiles)\n3. Estrategias de defensa:\n   - Técnicas\n   - Procedimentales\n   - De fondo\n4. ¿Procede acuerdo conclusivo?\n5. Estructura de respuesta\n6. Documentación a presentar\n7. Riesgos de no contestar",
            "variables": ["AÑO", "MONTO", "DESCRIPCIÓN", "RESUMEN DEL ACTA"],
            "category": "defensa",
            "tags": ["acta parcial", "propuesta", "revisión", "respuesta"]
          },
          {
            "id": 38,
            "title": "Solicitud Condonación Multas",
            "description": "Procedimiento de condonación por caso fortuito",
            "prompt": "Cliente tiene multa firme y evalúa solicitar condonación.\n\nMonto de la multa: $[CANTIDAD]\nInfracción: [DESCRIPCIÓN DE LA INFRACCIÓN]\n\nSituación económica del cliente:\n[CONTEXTO: desempleo, enfermedad, contingencia, etc.]\n\nEstructura solicitud de condonación según Art. 74 CFF:\n1. **Justificación** de causas de fuerza mayor o caso fortuito\n2. **Acreditación** de situación económica:\n   - Estados financieros\n   - Declaraciones\n   - Evidencia de la situación\n3. **Fundamento legal** aplicable\n4. **Documentación soporte:**\n   - Médica\n   - Laboral\n   - Financiera\n   - Otra según caso\n5. Timeline del proceso\n6. Porcentaje de condonación que podría obtener",
            "variables": ["CANTIDAD", "DESCRIPCIÓN DE LA INFRACCIÓN", "CONTEXTO"],
            "category": "defensa",
            "tags": ["condonación", "multas", "Art. 74", "caso fortuito"]
          },
          {
            "id": 39,
            "title": "Consulta sobre Criterio Normativo",
            "description": "Consulta formal vinculante al SAT",
            "prompt": "Cliente desea realizar operación con incertidumbre sobre tratamiento fiscal.\n\nOperación proyectada:\n[DESCRIPCIÓN DETALLADA DE LA OPERACIÓN]\n\nDuda específica:\n[PREGUNTA CONCRETA SOBRE TRATAMIENTO FISCAL]\n\nEstructura consulta formal al SAT:\n1. **Planteamiento de hechos:**\n   - Situación actual\n   - Operación proyectada\n   - Contexto completo\n\n2. **Pregunta específica** y concreta\n\n3. **Fundamentación de duda razonable:**\n   - Por qué no es clara la ley\n   - Interpretaciones posibles\n\n4. **Información a exhibir:**\n   - Documentos\n   - Contratos\n   - Estados financieros\n\n5. Explicación de que respuesta es **vinculante** para autoridad\n\n6. Plazo de respuesta (3 meses)",
            "variables": ["DESCRIPCIÓN DETALLADA", "PREGUNTA CONCRETA"],
            "category": "defensa",
            "tags": ["consulta", "criterio normativo", "vinculante", "interpretación"]
          },
          {
            "id": 40,
            "title": "Juicio de Nulidad TFJA",
            "description": "Demanda ante Tribunal Federal",
            "prompt": "Resolución definitiva causó estado. Se agotó recurso administrativo sin éxito.\n\nNúmero de resolución: [NÚMERO]\nCrédito fiscal: $[MONTO]\nConceptos determinados: [DESCRIPCIÓN]\n\nEstructura demanda de nulidad ante TFJA:\n\n1. **Conceptos de impugnación principales:**\n   - Violación de fondo (mínimo 3)\n   - Violación al procedimiento (si aplica)\n\n2. **Fundamentación:**\n   - Constitucional\n   - Legal (CFF, LISR, LIVA, etc.)\n   - Jurisprudencias aplicables\n   - Tesis aisladas relevantes\n\n3. **Pruebas a ofrecer:**\n   - Documentales\n   - Periciales\n   - Presuncionales\n\n4. **Solicitud:**\n   - Nulidad lisa y llana, o\n   - Nulidad para efectos\n\n5. Cálculo de garantía del interés fiscal\n\n6. Incidentes a promover si aplica",
            "variables": ["NÚMERO", "MONTO", "DESCRIPCIÓN"],
            "category": "defensa",
            "tags": ["juicio", "TFJA", "nulidad", "demanda", "tribunal"]
          }
        ]
      }
    ]
  }
];

// Exportar para uso en módulos ES6
export default promptsData;

// Para uso en Node.js (CommonJS)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = promptsData;
}
