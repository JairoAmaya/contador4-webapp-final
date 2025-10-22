import React, { useState, useMemo } from 'react';
import './styles.css';
// IMPORTACIÓN CORRECTA: Usa el archivo de datos anidados
import promptsData from './promptsData'; 

// Función auxiliar para aplanar la data para la búsqueda y asignar IDs
const flattenAndAssignIds = (data) => {
  const flattened = [];
  data.forEach(category => {
    category.subcategories.forEach(subcategory => {
      subcategory.prompts.forEach((prompt, index) => {
        // Asignamos un ID único y propiedades de navegación para la búsqueda
        flattened.push({
          ...prompt,
          id: `${category.title.substring(0,2)}-${subcategory.title.substring(0,2)}-${index}`, // ID corto para tracking
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
  const [copiedPromptId, setCopiedPromptId] = useState(null); 

  const allPrompts = useMemo(() => flattenAndAssignIds(promptsData), []);
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
    } else if (searchTerm) {
      setSearchTerm('');
      setSearchResults([]);
    }
  };

  // ✅ FUNCIONALIDAD DE COPIAR CORREGIDA Y ACTIVA
  const handleCopy = (promptContent, id) => {
    navigator.clipboard.writeText(promptContent);
    setCopiedPromptId(id);
    setTimeout(() => setCopiedPromptId(null), 2000);
  };

  // Lógica para renderizar el contenido principal
  const renderContent = () => {
    
    // --- Nivel 3: Vista de Prompts Individuales (después de Subcategoría) ---
    if (selectedSubcategory) {
        return (
            <div className="prompt-list-container">
                <div className="section-title-group">
                    {/* Título de la vista actual */}
                    <h2>
                        <span className="current-category-title">{selectedCategory.title.replace(/[\d\s\W]*/, '')}</span> 
                        {' > '} 
                        {selectedSubcategory.title}
                    </h2>
                </div>
                
                {selectedSubcategory.prompts.map((prompt, i) => (
                    <div key={i} className="prompt-card prompt-final-view">
                        <div className="prompt-header">
                            <h3 className="prompt-final-title">{prompt.title}</h3>
                        </div>
                        
                        <div className="prompt-details">
                            {/* Este bloque se veía vacío/mal en la captura anterior */}
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

    // --- Nivel 2: Vista de Sub-Categorías (después de Categoría) ---
    if (selectedCategory) {
        return (
            <div className="prompts-container subcategoria-list">
                <div className="section-header">
                    <h2>{selectedCategory.title}</h2>
                    <p className="instruction">Selecciona una subcategoría para ver los prompts:</p>
                </div>
                
                {selectedCategory.subcategories.map((sub, i) => (
                    // El clic en el botón setea la Subcategoría y abre el Nivel 3
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

    // --- Nivel 1: Vista Inicial (Selección de Categorías) ---
    // Esta es la vista que se veía duplicada y que queremos mostrar al inicio
    return (
        <>
            <div className="section-header">
                {/* TÍTULO CORREGIDO: Ya no se renderiza aquí el texto que causa la duplicidad */}
            </div>
            
            <div className="prompts-container category-list">
                <h2 className="main-title-selection">Selecciona una Categoría ({promptsData.length} disponibles)</h2>

                {promptsData.map(category => (
                    <button
                        key={category.title}
                        className="filter-btn category-button"
                        // El clic en el botón setea la Categoría y abre el Nivel 2
                        onClick={() => handleCategorySelect(category)} 
                    >
                        <span className="icon-span" role="img">{category.icon}</span>
                        {category.title.replace(/[\d\s\W]*/, '')} ({category.subcategories.reduce((c, sub) => c + sub.prompts.length, 0)})
                    </button>
                ))}
            </div>
        </>
    );
  };

  // return FINAL del componente App
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
            onChange={(e) => setSearchTerm(e.target.value)}
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
