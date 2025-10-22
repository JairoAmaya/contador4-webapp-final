import React, { useState, useMemo } from 'react';
import './styles.css';
import promptsData from './promptsData'; 

// Función auxiliar para aplanar la data para la búsqueda
const flattenPrompts = (data) => {
  const flattened = [];
  data.forEach(category => {
    category.subcategories.forEach(subcategory => {
      subcategory.prompts.forEach(prompt => {
        flattened.push({
          ...prompt,
          id: `${category.title}-${subcategory.title}-${prompt.title}`, // ID único para tracking
          categoryTitle: category.title,
          subTitle: subcategory.title,
        });
      });
    });
  });
  return flattened;
};

// Función auxiliar para calcular el total de prompts
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
  const [copiedPromptId, setCopiedPromptId] = useState(null); // Estado para el feedback de copia

  const allPrompts = useMemo(() => flattenPrompts(promptsData), []);
  const totalPrompts = useMemo(() => getTotalPrompts(promptsData), []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    if (term.length > 2) {
      const results = allPrompts.filter(p => 
        p.title.toLowerCase().includes(term) || p.prompt.toLowerCase().includes(term)
      );
      setSelectedCategory(null);
      setSelectedSubcategory(null);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const handleBack = () => {
    if (selectedSubcategory) {
      setSelectedSubcategory(null);
    } else if (selectedCategory) {
      setSelectedCategory(null);
      setSelectedSubcategory(null);
    } else if (searchResults.length > 0) {
      setSearchResults([]);
      setSearchTerm('');
    }
  };

  // ✅ FUNCIONALIDAD DE COPIAR CORREGIDA Y ACTIVA
  const handleCopy = (promptContent, id) => {
    navigator.clipboard.writeText(promptContent);
    setCopiedPromptId(id);
    setTimeout(() => setCopiedPromptId(null), 2000);
  };
  
  // Renderizado del contenido central
  const renderContent = () => {
    
    // A. Vista de Búsqueda
    if (searchTerm && searchResults.length > 0) {
      // ... (Lógica de Búsqueda, similar al Nivel 3)
    }

    // B. Vista de Prompts (Nivel 3)
    if (selectedSubcategory) {
        return (
            <div className="prompt-list-container">
                <div className="section-title-group">
                    <h2>{selectedCategory.title.replace(/[\d\s\W]*/, '')} > {selectedSubcategory.title}</h2>
                </div>
                
                {selectedSubcategory.prompts.map((prompt, i) => (
                    <div key={i} className="prompt-card prompt-final-view">
                        <div className="prompt-header">
                            <h3 className="prompt-final-title">{prompt.title}</h3>
                        </div>
                        
                        <div className="prompt-details">
                            <div className="detail-section">
                                <h4>Contenido del Prompt:</h4>
                                {/* Uso de pre-wrap para que respete los saltos de línea del prompt */}
                                <pre className="prompt-content-text">{prompt.prompt}</pre>
                            </div>
                            
                            {/* Botón de Copiar ACTIVO */}
                            <button 
                                className={`copy-button ${copiedPromptId === prompt.id ? 'copied' : ''}`} 
                                onClick={() => handleCopy(prompt.prompt, prompt.id || i)} // Usamos ID o index
                            >
                                {copiedPromptId === (prompt.id || i) ? '✓ Copiado' : '📋 Copiar prompt'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    // C. Vista de Subcategorías (Nivel 2)
    if (selectedCategory) {
        return (
            <div className="subcategoria-list prompts-container">
                <h2>{selectedCategory.title}</h2>
                <p className="instruction">Selecciona una subcategoría para ver los prompts:</p>
                {selectedCategory.subcategories.map((sub, i) => (
                    <button
                        key={i}
                        className="filter-btn subcategory-button"
                        onClick={() => handleSubcategorySelect(sub)}
                    >
                        {sub.title} ({sub.prompts.length} prompts)
                    </button>
                ))}
            </div>
        );
    }

    // D. Vista Inicial: Selección de Categorías (Nivel 1)
    return (
      <div className="prompts-container category-list">
        <h2>Selecciona una Categoría ({promptsData.length} disponibles)</h2>
        {promptsData.map(category => (
          <button
            key={category.title}
            className="filter-btn category-button"
            onClick={() => handleCategorySelect(category)}
          >
            <span className="icon-span" role="img">{category.icon}</span>
            {category.title.replace(/[\d\s\W]*/, '')} ({category.subcategories.reduce((c, sub) => c + sub.prompts.length, 0)})
          </button>
        ))}
      </div>
    );
  };
  
  const currentViewTitle = selectedCategory ? selectedCategory.title : 'Biblioteca de Prompts';

  return (
    <div className="app-container">
      <header className="header">
        <h1>Contador 4.0 Prompts</h1>
        <p>Sistema de transformación con IA para contadores ({totalPrompts} prompts)</p>
      </header>
      
      <main>
        
        <div className="filters-and-title">
          {/* Barra de Búsqueda y Volver */}
          <div className="search-bar">
            <input
              type="text"
              placeholder="Buscar por nombre o contenido..."
              className="search-input"
              value={searchTerm}
              onChange={handleSearch}
            />
            
            {(searchTerm || selectedCategory || selectedSubcategory) && (
              <button 
                className="reset-btn volver-btn"
                onClick={handleBack}
              >
                ⬅ Volver
              </button>
            )}
          </div>
          
          {/* Título de la vista actual */}
          <div className="current-view-title-group">
            {selectedCategory && !selectedSubcategory && <h2>{selectedCategory.title}</h2>}
            {selectedSubcategory && <h2>{selectedCategory.title} > {selectedSubcategory.title}</h2>}
            {!selectedCategory && !searchTerm && <h2 className="main-title-selection">Selecciona una Categoría (7 disponibles)</h2>}
          </div>
        </div>
        
        {renderContent()}

        {/* Tips Section (visible solo en vista inicial) */}
        {!searchTerm && !selectedCategory && (
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
        )}
      </main>
    </div>
  );
}
