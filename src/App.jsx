import React, { useState, useMemo } from 'react';
import './styles.css';
import promptsData from './promptsData'; 

// Funciones Auxiliares (Se mantienen igual)
const flattenAndAssignIds = (data) => {
  const flattened = [];
  data.forEach(category => {
    category.subcategories.forEach(subcategory => {
      subcategory.prompts.forEach((prompt, index) => {
        const uniqueId = `${category.title.substring(0,2)}-${subcategory.title.substring(0,2)}-${index}`; 
        flattened.push({
          ...prompt,
          id: uniqueId,
          categoryTitle: category.title,
          subTitle: subcategory.title,
        });
      });
    });
  });
  return flattened;
};

const getTotalPrompts = (data) => {
  return data.reduce((count, category) => {
    return count + category.subcategories.reduce((subCount, sub) => subCount + sub.prompts.length, 0);
  }, 0);
};

// Función para resaltar las variables entre corchetes
const highlightVariables = (text) => {
  if (!text) return '';
  return text.replace(
    /(\[.*?\])/g,
    '<span class="highlight-variable">$1</span>'
  );
};


export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [copiedPromptId, setCopiedPromptId] = useState(null); 

  const totalPrompts = useMemo(() => getTotalPrompts(promptsData), []);

  const handleBack = () => {
    if (selectedSubcategory) {
      setSelectedSubcategory(null);
    } else if (selectedCategory) {
      setSelectedCategory(null);
      setSelectedSubcategory(null);
    }
  };

  const handleCopy = (promptContent, id) => {
    navigator.clipboard.writeText(promptContent);
    setCopiedPromptId(id);
    setTimeout(() => setCopiedPromptId(null), 2000);
  };
  
  // Lógica para renderizar el contenido principal
  const renderContent = () => {
    
    // 1. VISTA DE PROMPTS INDIVIDUALES (Nivel 3)
    if (selectedSubcategory) {
        return (
            <div className="prompt-list-container">
                <div className="section-header">
                    <h2>{selectedCategory.title.replace(/[\d\s\W]*/, '')} > {selectedSubcategory.title}</h2>
                </div>
                
                {selectedSubcategory.prompts.map((prompt, i) => (
                    <div key={prompt.title} className="prompt-card prompt-final-view">
                        <div className="prompt-header">
                            <h3 className="prompt-final-title">{prompt.title}</h3>
                        </div>
                        
                        <div className="prompt-details">
                            <div className="detail-section">
                                <h4>Contenido del Prompt:</h4>
                                <pre 
                                    className="prompt-content-text"
                                    dangerouslySetInnerHTML={{ __html: highlightVariables(prompt.prompt) }}
                                />
                            </div>
                            
                            <button 
                                className={`copy-button ${copiedPromptId === prompt.title ? 'copied' : ''}`} 
                                onClick={() => handleCopy(prompt.prompt, prompt.title)} 
                            >
                                {copiedPromptId === prompt.title ? '✓ Copiado' : '📋 Copiar prompt'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    // 2. VISTA DE SUB-CATEGORÍAS (Nivel 2)
    if (selectedCategory) {
        return (
            <div className="prompts-container subcategoria-list">
                <div className="section-header">
                    <h2>{selectedCategory.title}</h2>
                    {/* El subtítulo redundante fue eliminado (Punto 4) */}
                </div>
                
                {selectedCategory.subcategories.map((sub, i) => (
                    <button
                        key={i}
                        className="filter-btn subcategory-button"
                        onClick={() => setSelectedSubcategory(sub)}
                    >
                        {/* Se mantiene el contador en Nivel 2 */}
                        {sub.title} ({sub.prompts.length} prompts)
                    </button>
                ))}
            </div>
        );
    }

    // 3. VISTA INICIAL: CATEGORÍAS (Nivel 1) - Fallback por defecto
    return (
        <div className="category-list-wrapper"> {/* Contenedor para el título y los tips */}
             <h2 className="main-title-selection">Selecciona una Categoría</h2>
             
             <div className="prompts-container category-list"> {/* Contenedor Grid real */}
                {promptsData.map(category => (
                    <button
                        key={category.title}
                        className="filter-btn category-button"
                        onClick={() => setSelectedCategory(category)} 
                    >
                        <span className="icon-span" role="img">{category.icon}</span>
                        <span className="category-title-text">
                            {category.title.replace(/[\d\s\W]*/, '')} 
                        </span>
                    </button>
                ))}
            </div>
            {/* Tips Section */}
            <div className="tips-section">
                <h3>💡 Consejos para usar los prompts</h3>
                <ul>
                    <li>Usa la información de <strong>"Cuándo usar"</strong> para saber el contexto ideal</li>
                    <li>La <strong>frecuencia</strong> te indica qué tan seguido deberías aplicar el prompt</li>
                    <li>Personaliza el contenido según las necesidades específicas de tu cliente</li>
                    <li>Usa <a href="https://claude.ai" target="_blank" rel="noopener noreferrer">claude.ai</a> para análisis más profundos</li>
                    <li>Combina múltiples prompts para casos complejos</li>
                </ul>
            </div>
        </div>
    );
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>Contador 4.0 Express</h1>
        <p>Sistema de transformación con IA para contadores</p>
      </header>
      
      <main>
        
        <div className="filters-container search-bar">
          {(selectedCategory || selectedSubcategory) && (
            <button 
              className="reset-btn volver-btn"
              onClick={handleBack}
            >
              {selectedSubcategory 
                ? `⬅ Volver a Subcategorías` 
                : '⬅ Volver a Categorías' 
              }
            </button>
          )}
        </div>

        {renderContent()}

      </main>
      
      <footer className="app-footer">
        <p>
          Contador 4.0 Express es un complemento del E.Book Contador 4.0 Sistema de Transformación con IA para contadores que incluye 105 prompts especializados y fue desarrollado por <a href="https://jairoamaya.co" target="_blank" rel="noopener noreferrer">Jairo Amaya - Full Stack Marketer</a>. Todos los derechos reservados © {new Date().getFullYear()}.
        </p>
      </footer>

    </div>
  );
}
