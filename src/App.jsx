import React, { useState } from "react";
import "./styles.css";
import promptsExpress from "./promptsExpress";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  if (selectedCategory) {
    const cat = promptsExpress.find((c) => c.id === selectedCategory);
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <button
          onClick={() => setSelectedCategory(null)}
          className="mb-6 bg-orange-500 text-white px-4 py-2 rounded shadow hover:bg-orange-600"
        >
          ← Volver
        </button>
        <h1 className="text-3xl font-bold mb-4">{cat.title}</h1>
        {cat.subcategories.map((sub, idx) => (
          <div key={idx} className="mb-8">
            <h2 className="text-xl font-semibold mb-3">{sub.title}</h2>
            <div className="space-y-4">
              {sub.prompts.map((p, i) => (
                <div
                  key={i}
                  className="bg-white p-4 rounded-lg shadow border border-gray-200"
                >
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="text-gray-700 text-sm mb-3">{p.prompt}</p>
                  <button
                    className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600"
                    onClick={() => navigator.clipboard.writeText(p.prompt)}
                  >
                    Copiar Prompt
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

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
          {promptsExpress.map((cat) => (
            <div
              key={cat.id}
              className="bg-orange-500 hover:bg-orange-600 transition-colors duration-200 text-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center cursor-pointer border-2 border-transparent hover:border-orange-200"
              onClick={() => setSelectedCategory(cat.id)}
            >
              <span className="text-4xl mb-3">
                {cat.title.charAt(0)}
              </span>
              <h2 className="text-lg font-semibold text-center">
                {cat.title.replace(/^[^ ]+ /, "")}
              </h2>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-10 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="flex space-x-4 items-start">
            <img
              src="/contador-personaje.png"
              alt="Personaje Contador"
              className="w-24 h-24 object-contain"
            />
            <div>
              <h3 className="font-bold mb-2 text-gray-800">
                Consejos para usar los prompts
              </h3>
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
              Esta es una versión de prueba de la herramienta{" "}
              <strong>Contador 4.0 Express</strong>. Aquí puedes explorar
              categorías y subcategorías con ejemplos de prompts inspirados en
              el e-book original.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
