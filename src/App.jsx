import React, { useState, useMemo } from 'react';
import './styles.css';
import promptsData from './promptsData'; 

// [Funciones Auxiliares omitidas para concisión, asumiendo que están correctas]
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


export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [copiedPromptId, setCopiedPromptId] = useState(null); 

  const allPrompts = useMemo(() => flattenAndAssignIds(promptsData), []);
  const totalPrompts = useMemo(() => getTotalPrompts(promptsData), []);

  // ✅ LÓGICA DE BÚSQUEDA CORREGIDA Y SIMPLIFICADA
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    
    // Limpiar siempre la navegación al iniciar la búsqueda
    setSelectedCategory(null); 
    setSelectedSubcategory(null);
    
    // Si hay un término de búsqueda, filtramos
    if (term.length > 0) {
      const results = allPrompts.filter(p => 
        p.title.toLowerCase().includes(term) || p.prompt.toLowerCase().includes(term)
      );
      setSearchResults(results);
    } else {
      // Si el término está vacío, se limpia todo y se vuelve a la vista inicial (renderContent se encarga)
      setSearchResults([]);
    }
  };

  const handleBack = () => {
    if (selectedSubcategory) {
      setSelectedSubcategory(null);
    } else if (selectedCategory) {
      setSelectedCategory(null);
      setSelectedSubcategory(null);
    } else if (searchTerm) {
      setSearchTerm('');
      setSearchResults([]);
    }
  };

  const handleCopy = (promptContent, id) => {
    navigator.clipboard.writeText(promptContent);
    setCopiedPromptId(id);
    setTimeout(() => setCopiedPromptId(null), 2000);
  };
  
  // Lógica para renderizar el contenido principal
  const renderContent = () => {
    
    // 1. VISTA DE BÚSQUEDA (Si hay un término activo)
    // El Buscador siempre tiene prioridad si searchTerm > 0
    if (searchTerm.length > 0) {
        if (searchResults.length === 0) {
            return <div className="no-results">No se encontraron prompts para "{searchTerm}"</div>;
        }
        
        return (
            <div className="prompt-list-container">
                <h2 className="main-title-selection">Resultados de Búsqueda para: "{searchTerm}" ({searchResults.length})</h2>
                
                {searchResults.map((p, i) => (
                    <div key={p.id || i} className="prompt-card prompt-final-view">
                        <div className="prompt-header">
                            <h3 className="prompt-final-title">{p.title}</h3>
                            <span className="badge badge-frequency">
                                {p.categoryTitle.replace(/[\d\s\W]*/, '')} {' > '} {p.subTitle}
                            </span>
                        </div>
                        
                        <div className="prompt-details">
                            <div className="detail-section">
                                <h4>Contenido del Prompt:</h4>
                                <pre className="prompt-content-text">{p.prompt}</pre>
                            </div>
                            
                            <button 
                                className={`copy-button ${copiedPromptId === p.id ? 'copied' : ''}`} 
                                onClick={() => handleCopy(p.prompt, p.id)} 
                            >
                                {copiedPromptId === p.id ? '✓ Copiado' : '📋 Copiar prompt'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    // 2. VISTA DE PROMPTS INDIVIDUALES (Nivel 3)
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
                                <pre className="prompt-content-text">{prompt.prompt}</pre>
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

    // 3. VISTA DE SUB-CATEGORÍAS (Nivel 2)
    if (selectedCategory) {
        return (
            <div className="prompts-container subcategoria-list">
                <div className="section-header">
                    <h2>{selectedCategory.title}</h2>
                    <p className="instruction">Selecciona una subcategoría para ver los prompts:</p>
                </div>
                
                {selectedCategory.subcategories.map((sub, i) => (
                    <button
                        key={i}
                        className="filter-btn subcategory-button"
                        onClick={() => setSelectedSubcategory(sub)}
                    >
                        {sub.title} ({sub.prompts.length} prompts)
                    </button>
                ))}
            </div>
        );
    }

    // 4. VISTA INICIAL: CATEGORÍAS (Nivel 1)
    return (
        <div className="prompts-container category-list">
             <h2 className="main-title-selection">Selecciona una Categoría ({promptsData.length} disponibles)</h2>
             
             {promptsData.map(category => (
                <button
                    key={category.title}
                    className="filter-btn category-button"
                    onClick={() => setSelectedCategory(category)} 
                >
                    <span className="icon-span" role="img">{category.icon}</span>
                    {category.title.replace(/[\d\s\W]*/, '')} ({category.subcategories.reduce((c, sub) => c + sub.prompts.length, 0)})
                </button>
            ))}
            {/* Tips Section (colocado aquí para fluidez) */}
            <div className="tips-section">
                <h3>💡 Consejos para usar los prompts</h3>
                <ul>
                    <li>Usa la información de <strong>"Cuándo usar"</strong> para saber el contexto ideal</li>
                    <li>La <strong>frecuencia</strong> te indica qué tan seguido deberías aplicar el prompt</li>
                    <li>Personaliza el contenido según las necesidades específicas de tu cliente</li>
                    <li>Usa <a href="https://claude.ai" target="_blank" rel="noopener">claude.ai</a> para análisis más profundos</li>
                    <li>Combina múltiples prompts para casos complejos</li>
                </ul>
            </div>
        </div>
    );
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>Contador 4.0 Prompts</h1>
        <p>Sistema de transformación con IA para contadores ({totalPrompts} prompts)</p>
      </header>
      
      <main>
        
        <div className="filters-container search-bar">
          {/* Input de Búsqueda */}
          <input
            type="text"
            placeholder="Buscar por nombre o contenido..."
            className="search-input"
            value={searchTerm}
            onChange={handleSearch} 
          />
          
          {/* Botón de Reset/Volver */}
          {(searchTerm || selectedCategory || selectedSubcategory) && (
            <button 
              className="reset-btn volver-btn"
              onClick={handleBack}
            >
              ⬅ Volver
            </button>
          )}
        </div>

        {renderContent()}

      </main>
    </div>
  );
}
