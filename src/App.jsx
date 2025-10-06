import React from "react";
import "./styles.css";

const categorias = [
  { id: 1, titulo: "Análisis Financiero Estratégico", icono: "📊" },
  { id: 2, titulo: "Comunicación Empresarial", icono: "💬" },
  { id: 3, titulo: "Propuestas y Cotizaciones", icono: "💼" },
  { id: 4, titulo: "Reportes y Dashboards", icono: "📈" },
  { id: 5, titulo: "Cumplimiento Fiscal", icono: "🧾" },
  { id: 6, titulo: "Auditoría y Control", icono: "🕵️" },
  { id: 7, titulo: "Clientes Internacionales", icono: "🌍" },
];

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="bg-black text-white py-10 px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src="/contador-mascota.png"
            alt="Mascota Contador 4.0"
            className="w-28 h-28 hidden md:block"
          />
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              CONTADOR 4.0 - EXPRESS
            </h1>
            <p className="text-gray-300 text-lg mt-2">
              Explora categorías, subcategorías y prompts especializados de manera rápida.
            </p>
          </div>
        </div>
      </header>

      {/* Categorías */}
      <main className="flex-1 px-6 md:px-20 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {categorias.map((cat) => (
            <div
              key={cat.id}
              className="bg-orange-500 hover:bg-orange-600 transition-colors duration-200 text-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center cursor-pointer border-2 border-transparent hover:border-orange-200"
            >
              <span className="text-4xl mb-3">{cat.icono}</span>
              <h2 className="text-lg font-semibold text-center">{cat.titulo}</h2>
            </div>
          ))}
        </div>
      </main>

      {/* Sección inferior */}
      <footer className="bg-gray-100 py-10 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="flex space-x-4 items-start">
            <img
              src="/contador-personaje.png"
              alt="Personaje Contador"
              className="w-24 h-24 object-contain"
            />
            <div>
              <h3 className="font-bold mb-2 text-gray-800">Consejos para usar los prompts</h3>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>✅ Cambia siempre la información entre [corchetes].</li>
                <li>✅ Usa claridad y tono profesional.</li>
                <li>✅ Combina prompts según tus necesidades.</li>
                <li>✅ Personaliza el estilo de comunicación.</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-2 text-gray-800">Sobre esta demo</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Esta es una versión de prueba de la herramienta <strong>Contador 4.0 Express</strong>.
              Aquí puedes explorar categorías y subcategorías con ejemplos de prompts inspirados en
              el e-book original.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
