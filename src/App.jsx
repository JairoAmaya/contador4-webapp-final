// App.js
import React, { useState } from "react";
import promptsData from "./promptsData";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const handleBack = () => {
    if (selectedSubcategory) {
      setSelectedSubcategory(null);
    } else if (selectedCategory) {
      setSelectedCategory(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* HEADER */}
      <header className="bg-white shadow-sm p-6 text-center">
        <h1 className="text-3xl font-bold mb-2">📊 Contador 4.0 – Demo</h1>
        <p className="text-gray-600">
          Explora categorías, subcategorías y prompts especializados en
          contabilidad y negocio.
        </p>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="p-6 max-w-4xl mx-auto">
        {/* BOTÓN VOLVER */}
        {(selectedCategory || selectedSubcategory) && (
          <button
            onClick={handleBack}
            className="mb-4 text-orange-600 hover:underline"
          >
            ← Volver
          </button>
        )}

        {/* VISTA PRINCIPAL */}
        {!selectedCategory && !selectedSubcategory && (
          <div>
            {promptsData.map((category) => (
              <div
                key={category.id}
                className="p-4 bg-white rounded-xl shadow-md mb-4 cursor-pointer flex items-center space-x-3 hover:bg-gray-100"
                onClick={() => setSelectedCategory(category)}
              >
                <span className="text-2xl">{category.icon}</span>
                <span className="font-semibold text-lg">{category.name}</span>
              </div>
            ))}

            {/* CONSEJOS */}
            <div className="mt-8 bg-gray-100 p-4 rounded-lg">
              <h2 className="font-bold mb-2">💡 Consejos para usar los prompts</h2>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Cambia siempre la información entre [corchetes] por datos específicos.</li>
                <li>Usa <strong>www.claude.ai</strong> para respuestas más profundas.</li>
                <li>Combina prompts según tus necesidades específicas.</li>
                <li>Personaliza el tono según tu estilo de comunicación.</li>
              </ul>
            </div>

            {/* SOBRE ESTA DEMO */}
            <div className="mt-4 bg-orange-50 border border-orange-200 p-4 rounded-lg">
              <h2 className="font-bold text-orange-700 mb-1">ℹ️ Sobre esta demo</h2>
              <p className="text-sm text-gray-700">
                Esta es una versión de prueba de la herramienta <strong>Contador 4.0</strong>. 
                Aquí puedes explorar categorías y subcategorías con ejemplos de prompts extraídos del e-book.
              </p>
            </div>
          </div>
        )}

        {/* SUBCATEGORÍAS */}
        {selectedCategory && !selectedSubcategory && (
          <div>
            <h2 className="text-xl font-bold mb-4">{selectedCategory.name}</h2>
            {selectedCategory.subcategories.map((subcategory, index) => (
              <div
                key={index}
                className="p-4 bg-white rounded-xl shadow mb-3 cursor-pointer hover:bg-gray-100"
                onClick={() => setSelectedSubcategory(subcategory)}
              >
                <span className="font-medium">{subcategory.name}</span>
              </div>
            ))}
          </div>
        )}

        {/* PROMPTS */}
        {selectedSubcategory && (
          <div>
            <h2 className="text-xl font-bold mb-4">{selectedSubcategory.name}</h2>
            <div className="space-y-4">
              {selectedSubcategory.prompts.map((prompt, index) => (
                <div key={index} className="p-4 bg-white rounded-xl shadow">
                  <h3 className="font-semibold mb-2">{prompt.title}</h3>
                  <p className="text-sm text-gray-700 mb-3 whitespace-pre-wrap">
                    {prompt.longText}
                  </p>

                  {/* BOTONES DE COPIAR */}
                  <div className="flex space-x-2">
                    <button
                      className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 text-sm"
                      onClick={() =>
                        navigator.clipboard.writeText(prompt.longText)
                      }
                    >
                      Copiar Versión Larga
                    </button>
                    {prompt.expressText && (
                      <button
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
                        onClick={() =>
                          navigator.clipboard.writeText(prompt.expressText)
                        }
                      >
                        Copiar Versión Express
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
