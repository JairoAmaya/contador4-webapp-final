import React, { useState } from 'react';
import './styles.css';
// Importación de la data anidada (7 categorías)
import promptsData from './promptsData'; 

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
  
  const totalPrompts = getTotalPrompts(promptsData);

  // Lógica de búsqueda simple sobre la data anidada
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    if (term.length > 2) {
      const results = [];
      promptsData.forEach(category => {
        category.subcategories.forEach(sub => {
          sub.prompts.forEach(p => {
            if (p.title.toLowerCase().includes(term) || p.prompt.toLowerCase().includes(term)) {
              results.push({...p, categoryTitle: category.title, subTitle: sub.title}); 
            }
          });
        });
      });
      setSelectedCategory(null); // Limpia la navegación si busca
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

  const handleCopy = (prompt) => {
    navigator.clipboard.writeText(prompt);
  };
  
  // Renderizado del contenido central
  const renderContent = () => {
    
    // A. Vista de Búsqueda
    if (searchTerm || searchResults.length > 0) {
        if (searchResults.length === 0 && searchTerm) {
            return <div className="no-results">No se encontraron prompts para "{searchTerm}"</div>;
        }
        
        return (
            <div className="prompt-list prompts-container">
                <h2>Resultados de Búsqueda ({searchResults.length})</h2>
                {searchResults.map((p, i) => (
                    <div key={i} className="prompt-card">
                        <div className="prompt-header">
                            <div className="prompt-title-group">
                                <h3>{p.title}</h3>
                                {/* Muestra la ruta de navegación: Categoría > Subcategoría */}
                                <span className="badge badge-frequency">{p.categoryTitle.replace(/[\d\s\W]*/, '')} {' > '} {p.subTitle}</span>
                            </div>
                        </div>
                        <div className="prompt-details">
                            <div className="detail-section">
                                <h4>Contenido del Prompt:</h4>
                                <pre className="prompt-content-text">{p.prompt}</pre>
                            </div>
                            <button className="copy-button" onClick={() => handleCopy(p.prompt)}>
                                📋 Copiar prompt
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    // B. Vista de Prompts (Nivel 3)
    if (selectedSubcategory) {
        return (
            <div className="prompt-list prompts-container">
                <h2>{selectedCategory.title} > {selectedSubcategory.title}</h2>
                {selectedSubcategory.prompts.map((prompt, i) => (
                    <div key={i} className="prompt-card">
                        <div className="prompt-header">
                            <div className="prompt-title-group">
                                <h3>{prompt.title}</h3>
                            </div>
                        </div>
                        <div className="prompt-details">
                            <div className="detail-section">
                                <h4>Contenido del Prompt:</h4>
                                <pre className="prompt-content-text">{prompt.prompt}</pre>
                            </div>
                            <button className="copy-button" onClick={() => handleCopy(prompt.prompt)}>
                                📋 Copiar prompt
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
            <div className="prompts-container subcategoria-list">
                <h2>{selectedCategory.title}</h2>
                <p>Selecciona una subcategoría para ver los prompts:</p>
                {selectedCategory.subcategories.map((sub, i) => (
                    <button
                        key={i}
                        className="filter-btn"
                        onClick={() => setSelectedSubcategory(sub)}
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
            onClick={() => setSelectedCategory(category)}
          >
            <span style={{ fontSize: "1.5rem", marginRight: "10px" }}>{category.icon}</span>
            {category.title.replace(/[\d\s\W]*/, '')} ({category.subcategories.reduce((c, sub) => c + sub.prompts.length, 0)})
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="header-icon">
          <span role="img" aria-label="calculator">🧮</span>
        </div>
        <div className="header-text">
          <h1>Contador 4.0 Prompts</h1>
          <p>Sistema de transformación con IA para contadores ({totalPrompts} prompts)</p>
        </div>
      </header>
      
      <main>
        {/* Barra de Búsqueda y Volver */}
        <div className="filters-container search-bar">
          <input
            type="text"
            placeholder="Buscar por nombre o contenido..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          
          {(searchTerm || selectedCategory || selectedSubcategory) && (
            <button 
              className="reset-btn"
              onClick={handleBack}
            >
              ⬅ Volver
            </button>
          )}
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
