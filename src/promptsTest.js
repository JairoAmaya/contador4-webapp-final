// src/promptsTest.js
const promptsTest = [
  {
    title: "📊 Análisis Financiero",
    icon: "📊",
    subcategories: [
      {
        title: "Diagnóstico Financiero",
        prompts: [
          { title: "Análisis de liquidez", prompt: "Haz un diagnóstico de la liquidez de [empresa]..." },
          { title: "Estructura de costos", prompt: "Evalúa los costos fijos y variables de [empresa]..." },
          { title: "Rentabilidad", prompt: "Explica la rentabilidad de [empresa] con base en estados financieros..." }
        ]
      },
      {
        title: "Proyección de flujo de caja",
        prompts: [
          { title: "Cashflow proyectado", prompt: "Proyecta el flujo de caja de [empresa] para 6 meses..." },
          { title: "Escenario base", prompt: "Genera un escenario base conservador para [empresa]..." },
          { title: "Escenario optimista", prompt: "Simula un escenario optimista para [empresa] con 20% más de ventas..." }
        ]
      }
    ]
  },
  {
    title: "💬 Comunicación Empresarial",
    icon: "💬",
    subcategories: [
      {
        title: "Cartas a clientes",
        prompts: [
          { title: "Carta formal", prompt: "Redacta una carta formal para informar sobre cambios de precios..." },
          { title: "Notificación de reunión", prompt: "Invita al cliente a una reunión de revisión financiera..." },
          { title: "Cierre de año", prompt: "Redacta una carta de cierre de año para clientes..." }
        ]
      }
    ]
  }
];

export default promptsTest;
