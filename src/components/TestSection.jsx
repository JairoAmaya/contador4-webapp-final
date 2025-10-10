// src/components/TestSection.jsx
import React, { useState } from "react";
import "./TestSection.css";

export default function TestSection() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);

  // 📚 Estructura fiel al E.book (7 categorías — 105 prompts)
  const testPrompts = [
    // 1️⃣ Análisis Financiero Estratégico
    {
      title: "📊 Análisis Financiero Estratégico",
      subcategories: [
        {
          title: "Evaluación Financiera",
          prompts: [
            "Realiza un análisis de rentabilidad con base en los estados financieros del último año.",
            "Evalúa la salud financiera de una empresa considerando liquidez, endeudamiento y eficiencia operativa.",
            "Genera un resumen de KPIs financieros con recomendaciones para optimizar el desempeño."
          ]
        },
        {
          title: "Proyecciones y Escenarios",
          prompts: [
            "Diseña una proyección financiera a 3 años considerando ventas, gastos e inversiones.",
            "Elabora escenarios financieros con supuestos variables y analiza el impacto en resultados.",
            "Calcula la sensibilidad de los ingresos frente a cambios en precios o volumen de ventas."
          ]
        },
        {
          title: "Gestión de Liquidez",
          prompts: [
            "Construye un flujo de caja mensual estimado para el próximo año.",
            "Diseña un control de tesorería para administrar ingresos, egresos y saldos bancarios.",
            "Redacta una política interna para optimizar la gestión de liquidez y fondos disponibles."
          ]
        },
        {
          title: "Planeación Presupuestal",
          prompts: [
            "Elabora un presupuesto maestro integrando ventas, gastos y flujo de caja.",
            "Crea un análisis de desviaciones entre resultados reales y presupuestos.",
            "Evalúa los supuestos utilizados en el presupuesto para medir su realismo."
          ]
        },
        {
          title: "Valoración y Rentabilidad",
          prompts: [
            "Aplica el método de flujos descontados para valorar una empresa.",
            "Calcula el ROI de un proyecto específico.",
            "Evalúa los beneficios financieros frente a los costos asociados de una decisión empresarial."
          ]
        }
      ]
    },

    // 2️⃣ Comunicación Empresarial
    {
      title: "💬 Comunicación Empresarial",
      subcategories: [
        {
          title: "Informes Ejecutivos",
          prompts: [
            "Redacta un informe financiero claro para directivos.",
            "Prepara un resumen ejecutivo con los logros del trimestre.",
            "Resume resultados clave y decisiones estratégicas recientes."
          ]
        },
        {
          title: "Comunicación con Clientes",
          prompts: [
            "Redacta un boletín con novedades contables y financieras relevantes.",
            "Escribe una carta con logros y proyecciones del negocio.",
            "Prepara un resumen de resultados dirigido a clientes corporativos."
          ]
        },
        {
          title: "Gestión de Crisis",
          prompts: [
            "Redacta un comunicado transparente y profesional ante una crisis.",
            "Diseña pautas para mantener coherencia comunicativa durante contingencias.",
            "Crea un plan de mitigación de impactos comunicativos en una crisis."
          ]
        },
        {
          title: "Relaciones Públicas",
          prompts: [
            "Redacta una nota de prensa sobre resultados anuales.",
            "Elabora un discurso inspirador para presentación de resultados.",
            "Crea un mensaje oficial sobre un nuevo logro o meta alcanzada."
          ]
        },
        {
          title: "Documentación Interna",
          prompts: [
            "Crea un manual de estilo financiero.",
            "Diseña una estructura base para presentaciones ejecutivas.",
            "Define pautas de redacción profesional en informes contables."
          ]
        }
      ]
    },

    // 3️⃣ Propuestas y Cotizaciones
    {
      title: "💼 Propuestas y Cotizaciones",
      subcategories: [
        {
          title: "Propuestas Comerciales",
          prompts: [
            "Redacta una propuesta para servicios contables profesionales.",
            "Crea una propuesta para consultoría financiera personalizada.",
            "Escribe una carta introductoria para captar nuevos clientes."
          ]
        },
        {
          title: "Cotizaciones Detalladas",
          prompts: [
            "Crea una cotización con precios y plazos claros.",
            "Desarrolla una tabla comparativa entre tres planes de servicio.",
            "Genera una cotización rápida con formato profesional."
          ]
        },
        {
          title: "Negociación y Cierre",
          prompts: [
            "Redacta argumentos sólidos para cerrar una venta.",
            "Escribe un correo de seguimiento tras una propuesta.",
            "Crea una carta de agradecimiento posterior a una negociación."
          ]
        },
        {
          title: "Alcance y Entregables",
          prompts: [
            "Describe claramente los límites y entregables del servicio.",
            "Crea un calendario de entregas con hitos clave.",
            "Incluye un resumen de condiciones comerciales en tu propuesta."
          ]
        },
        {
          title: "Formalización y Seguimiento",
          prompts: [
            "Redacta una versión breve de contrato para servicios profesionales.",
            "Genera un documento para formalizar la aceptación de una propuesta.",
            "Diseña una encuesta post-servicio para medir satisfacción del cliente."
          ]
        }
      ]
    },

    // 4️⃣ Reportes y Dashboards
    {
      title: "📈 Reportes y Dashboards",
      subcategories: [
        {
          title: "KPIs Financieros",
          prompts: [
            "Diseña un tablero que muestre márgenes y ratios clave.",
            "Crea indicadores de liquidez operativa para análisis mensual.",
            "Elabora métricas de productividad y eficiencia contable."
          ]
        },
        {
          title: "Visualización de Datos",
          prompts: [
            "Diseña un panel visual con los principales indicadores financieros.",
            "Crea gráficos que comparen desempeño histórico.",
            "Genera una presentación con resultados visuales clave."
          ]
        },
        {
          title: "Alertas y Seguimiento",
          prompts: [
            "Crea un esquema de alertas financieras automáticas.",
            "Diseña un formato breve de reporte semanal de desempeño.",
            "Redacta un resumen de riesgos detectados con alertas tempranas."
          ]
        },
        {
          title: "Control y Auditoría de Datos",
          prompts: [
            "Crea un procedimiento para validar la integridad de datos.",
            "Diseña un sistema de control de versiones de reportes.",
            "Genera una lista de verificación previa a entrega de informes."
          ]
        },
        {
          title: "Reportes Personalizados",
          prompts: [
            "Crea un formato estándar para reportes mensuales.",
            "Genera un informe financiero por departamentos.",
            "Diseña un reporte con enfoque estratégico para la dirección."
          ]
        }
      ]
    },

    // 5️⃣ Cumplimiento Fiscal
    {
      title: "🧾 Cumplimiento Fiscal",
      subcategories: [
        {
          title: "Declaraciones y Pagos",
          prompts: [
            "Genera un calendario fiscal con fechas clave e impuestos a declarar.",
            "Prepara una declaración mensual con resumen de impuestos.",
            "Calcula una proyección de pagos fiscales anuales."
          ]
        },
        {
          title: "Auditorías y Revisiones",
          prompts: [
            "Crea un checklist de auditoría fiscal.",
            "Genera un expediente con documentación tributaria obligatoria.",
            "Redacta un resumen de observaciones detectadas en auditorías."
          ]
        },
        {
          title: "Optimización Tributaria",
          prompts: [
            "Identifica deducciones aplicables al régimen fiscal actual.",
            "Elabora un plan para reducir carga fiscal de forma legal.",
            "Evalúa riesgos fiscales y contingencias potenciales."
          ]
        },
        {
          title: "Cumplimiento Normativo",
          prompts: [
            "Crea un checklist de obligaciones fiscales mensuales.",
            "Diseña un reporte de cumplimiento fiscal y observaciones.",
            "Redacta un plan para corregir incumplimientos fiscales."
          ]
        },
        {
          title: "Documentación Legal",
          prompts: [
            "Redacta una carta formal que confirme cumplimiento de obligaciones.",
            "Crea una plantilla editable para futuras declaraciones.",
            "Elabora un resumen con los principales marcos regulatorios aplicables."
          ]
        }
      ]
    },

    // 6️⃣ Auditoría y Control
    {
      title: "🕵️ Auditoría y Control",
      subcategories: [
        {
          title: "Controles Internos",
          prompts: [
            "Diseña un mapa de riesgos operativos y financieros.",
            "Aplica una evaluación del sistema de control interno.",
            "Redacta procedimientos para fortalecer el control interno."
          ]
        },
        {
          title: "Auditoría Operativa",
          prompts: [
            "Desarrolla un plan anual de auditoría con objetivos y cronograma.",
            "Elabora un informe ejecutivo de hallazgos y mejoras.",
            "Diseña un formato de seguimiento de acciones correctivas."
          ]
        },
        {
          title: "Gestión de Riesgos",
          prompts: [
            "Construye una matriz de riesgos con nivel de impacto y probabilidad.",
            "Evalúa controles existentes frente a riesgos detectados.",
            "Desarrolla un plan para reducir la exposición a riesgos clave."
          ]
        },
        {
          title: "Revisión de Procesos",
          prompts: [
            "Crea un diagrama de procesos contables principales.",
            "Diseña una lista de verificación de cumplimiento interno.",
            "Propón mejoras para optimizar procesos administrativos."
          ]
        },
        {
          title: "Auditoría Interna",
          prompts: [
            "Crea un programa de auditorías internas con enfoque estratégico.",
            "Diseña un registro de hallazgos y estado de resolución.",
            "Redacta un resumen de cumplimiento normativo y financiero."
          ]
        }
      ]
    },

    // 7️⃣ Clientes Internacionales
    {
      title: "🌍 Clientes Internacionales",
      subcategories: [
        {
          title: "Normas Internacionales",
          prompts: [
            "Elabora una tabla comparativa entre IFRS y US GAAP.",
            "Diseña un proceso para adaptar reportes contables internacionales.",
            "Crea un modelo de reporte financiero en distintas monedas."
          ]
        },
        {
          title: "Gestión Global",
          prompts: [
            "Crea lineamientos para comunicación intercultural.",
            "Diseña estrategias para coordinación internacional.",
            "Genera un calendario de obligaciones globales."
          ]
        },
        {
          title: "Fiscalidad Internacional",
          prompts: [
            "Desarrolla un resumen de política de precios de transferencia.",
            "Crea un checklist de cumplimiento internacional.",
            "Genera un resumen consolidado de obligaciones fiscales."
          ]
        },
        {
          title: "Contratos Internacionales",
          prompts: [
            "Redacta un modelo de contrato de servicios globales.",
            "Crea una versión en inglés y español de un NDA.",
            "Genera una carta formal para acuerdos entre países."
          ]
        },
        {
          title: "Auditoría Global",
          prompts: [
            "Diseña un plan coordinado de auditoría global.",
            "Crea un reporte que integre datos financieros de varias filiales.",
            "Elabora una matriz de riesgos con visión internacional."
          ]
        }
      ]
    }
  ];

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("✅ Prompt copiado");
  };

  return (
    <div className="test-section">
      <h1>🧪 Sección de Pruebas</h1>
      <p className="intro">
        Aquí puedes experimentar con una nueva estructura completa sin afectar el MVP actual.
      </p>

      {/* Categorías */}
      {!activeCategory && (
        <div className="category-list">
          {testPrompts.map((cat, i) => (
            <button
              key={i}
              className="category-btn"
              onClick={() => setActiveCategory(cat)}
            >
              {cat.title}
            </button>
          ))}
        </div>
      )}

      {/* Subcategorías */}
      {activeCategory && !activeSubcategory && (
        <div className="subcategory-list">
          <button
            className="back-button"
            onClick={() => setActiveCategory(null)}
          >
            ⬅ Volver
          </button>
          {activeCategory.subcategories.map((sub, i) => (
            <div
              key={i}
              className="subcategory-card"
              onClick={() => setActiveSubcategory(sub)}
            >
              {sub.title}
            </div>
          ))}
        </div>
      )}

      {/* Prompts */}
      {activeSubcategory && (
        <div className="prompt-list">
          <button
            className="back-button"
            onClick={() => setActiveSubcategory(null)}
          >
            ⬅ Volver
          </button>
          {activeSubcategory.prompts.map((p, i) => (
            <div key={i} className="prompt-card">
              <p>{p}</p>
              <button onClick={() => handleCopy(p)}>Copiar</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
