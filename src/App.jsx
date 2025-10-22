import React, { useState, useMemo } from 'react';
import './styles.css';
// IMPORTACIÓN CORREGIDA: Asumimos que el archivo de datos anidados se llama promptsData.js o está listo para ser importado como './promptsData'
import promptsData from './promptsData'; 

// Función para aplanar la estructura de datos anidada
const flattenPrompts = (data) => {
  const flattened = [];
  data.forEach(category => {
    category.subcategories.forEach(subcategory => {
      subcategory.prompts.forEach(prompt => {
        flattened.push({
          ...prompt,
          categoryTitle: category.title,
          subTitle: subcategory.title,
          frecuencia: prompt.frecuencia, // Asegúrate que esta propiedad exista en tu promptsData.js si la quieres usar
          cuando: prompt.cuando // Asegúrate que esta propiedad exista en tu promptsData.js si la quieres usar
        });
      });
    });
  });
  return flattened;
};

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [expandedPrompts, setExpandedPrompts] = useState({});
  const [copiedPrompts, setCopiedPrompts] = useState({});

  // 1. Aplanar los datos para facilitar la búsqueda
  const allPrompts = useMemo(() => flattenPrompts(promptsData), []);

  // 2. Filtrar Prompts por navegación o búsqueda
  const filteredPrompts = useMemo(() => {
    let results = allPrompts;

    // Filtro por Búsqueda (dominante)
    if (searchTerm) {
      return results.filter(p => 
        p.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.contenido.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filtro por Categoría
    if (selectedCategory) {
      results = results.filter(p => p.categoryTitle === selectedCategory.title);
    }
    
    // Filtro por Subcategoría
    if (selectedSubcategory) {
      results = results.filter(p => p.subTitle === selectedSubcategory.title);
    }

    return results;
  }, [searchTerm, selectedCategory, selectedSubcategory, allPrompts]);

  const togglePrompt = (id) => {
    setExpandedPrompts(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const copyPrompt = (content, id) => {
    navigator.clipboard.writeText(content);
    setCopiedPrompts(prev => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setCopiedPrompts(prev => ({ ...prev, [id]: false }));
    }, 2000);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory(null);
  };

  const handleSubcategorySelect = (subcategory) => {
    setSelectedSubcategory(subcategory);
  };

  const resetAll = () => {
    setSearchTerm('');
    setSelectedCategory(null);
    setSelectedSubcategory(null);
  };
  
  // Renderizado de Contenido

  const renderContent = () => {
    // A. Vista de Búsqueda (si hay un término)
    if (searchTerm) {
      return (
        <div className="prompt-list">
          <h2>Resultados de la Búsqueda para: "{searchTerm}"</h2>
          {filteredPrompts.map((p) => (
            <div 
              key={p.id} 
              className={`prompt-card ${expandedPrompts[p.id] ? 'expanded' : ''}`}
            >
              <div 
                className="prompt-header" 
                onClick={() => togglePrompt(p.id)}
              >
                <div className="prompt-title-group">
                  <h3>{p.nombre}</h3>
                  {/* LÍNEA 120 CORREGIDA: Uso de {' > '} */}
                  <span className="badge badge-frequency">
                    {p.categoryTitle.replace(/[\d\s\W]*/, '')} {' > '} {p.subTitle}
                  </span>
                </div>
                <div className="prompt-meta-group">
                  <span className={`badge badge-frequency-pill ${p.frecuencia ? p.frecuencia.toLowerCase() : 'default'}`}>
                    {p.frecuencia || 'Uso'}
                  </span>
                  <span className="toggle-icon">
                    {expandedPrompts[p.id] ? '▲' : '▼'}
                  </span>
                </div>
              </div>

              {expandedPrompts[p.id] && (
                <div className="prompt-details">
                  <div className="detail-section">
                    <h4>Cuándo usar:</h4>
                    <p>{p.cuando || 'No especificado'}</p>
                  </div>
                  
                  <div className="detail-section">
                    <h4>Contenido del Prompt:</h4>
                    <pre className="prompt-content-text">{p.contenido}</pre>
                  </div>

                  <button
                    className={`copy-button ${copiedPrompts[p.id] ? 'copied' : ''}`}
                    onClick={() => copyPrompt(p.contenido, p.id)}
                  >
                    {copiedPrompts[p.id] ? '✓ Copiado' : '📋 Copiar prompt'}
                  </button>
                </div>
              )}
            </div>
          ))}
          {filteredPrompts.length === 0 && (
            <div className="no-results">
              <p>No se encontraron prompts que coincidan con tu búsqueda.</p>
            </div>
          )}
        </div>
      );
    }
    
    // B. Vista de Prompts de Subcategoría (después de seleccionar Categoría y Subcategoría)
    if (selectedSubcategory) {
      return (
        <div className="prompt-list">
          <div className="section-header">
            <h2>{selectedCategory.title} > {selectedSubcategory.title}</h2>
          </div>
          
          {filteredPrompts.map((p) => (
            <div 
              key={p.id} 
              className={`prompt-card ${expandedPrompts[p.id] ? 'expanded' : ''}`}
            >
              <div 
                className="prompt-header" 
                onClick={() => togglePrompt(p.id)}
              >
                <div className="prompt-title-group">
                  <h3>{p.nombre}</h3>
                  <span className="badge badge-frequency-pill">{p.frecuencia || 'Uso'}</span>
                </div>
                <div className="prompt-meta-group">
                  <span className={`badge badge-frequency-pill ${p.frecuencia ? p.frecuencia.toLowerCase() : 'default'}`}>
                    {p.frecuencia || 'Uso'}
                  </span>
                  <span className="toggle-icon">
                    {expandedPrompts[p.id] ? '▲' : '▼'}
                  </span>
                </div>
              </div>

              {expandedPrompts[p.id] && (
                <div className="prompt-details">
                  <div className="detail-section">
                    <h4>Cuándo usar:</h4>
                    <p>{p.cuando || 'No especificado'}</p>
                  </div>
                  
                  <div className="detail-section">
                    <h4>Contenido del Prompt:</h4>
                    <pre className="prompt-content-text">{p.contenido}</pre>
                  </div>

                  <button
                    className={`copy-button ${copiedPrompts[p.id] ? 'copied' : ''}`}
                    onClick={() => copyPrompt(p.contenido, p.id)}
                  >
                    {copiedPrompts[p.id] ? '✓ Copiado' : '📋 Copiar prompt'}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      );
    }

    // C. Vista de Subcategorías (después de seleccionar Categoría)
    if (selectedCategory) {
      return (
        <div className="prompts-container subcategoria-list">
          <div className="section-header">
            <h2>{selectedCategory.title}</h2>
            <p>Selecciona una subcategoría para ver los prompts:</p>
          </div>
          {selectedCategory.subcategories.map(subcategory => (
            <button
              key={subcategory.id}
              className="filter-btn"
              onClick={() => handleSubcategorySelect(subcategory)}
            >
              {subcategory.title}
            </button>
          ))}
        </div>
      );
    }

    // D. Vista Inicial (Selección de Categorías)
    return (
      <div className="prompts-container category-list">
        <div className="section-header">
          <h2>Selecciona una Categoría</h2>
        </div>
        {promptsData.map(category => (
          <button
            key={category.id}
            className="filter-btn category-button"
            onClick={() => handleCategorySelect(category)}
          >
            {category.title}
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
          <p>Sistema de transformación con IA para contadores (115+ prompts)</p>
        </div>
      </header>
      
      <main>
        <div className="filters-container search-bar">
          {/* Input de Búsqueda */}
          <input
            type="text"
            placeholder="Buscar por nombre o contenido..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          
          {/* Botón de Reset/Volver */}
          {(searchTerm || selectedCategory || selectedSubcategory) && (
            <button 
              className="reset-btn"
              onClick={resetAll}
            >
              Volver a Categorías
            </button>
          )}
        </div>

        {renderContent()}

        {/* Tips Section (visible solo si no hay búsqueda activa) */}
        {!searchTerm && (
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
