// src/App.jsx

import React, { useState } from 'react';
import promptsData from './promptsData'; // Importa la data anidada
import './styles.css';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  // Función para aplanar la data y buscar en todas las categorías
  const searchAllPrompts = (term) => {
    const results = [];
    promptsData.forEach(category => {
      category.subcategories.forEach(sub => {
        sub.prompts.forEach(p => {
          if (p.title.toLowerCase().includes(term) || p.prompt.toLowerCase().includes(term)) {
            // Se asegura de adjuntar el nombre de la CATEGORÍA y SUB-CATEGORÍA
            results.push({
                ...p, 
                categoryTitle: category.title, 
                subTitle: sub.title
            }); 
          }
        });
      });
    });
    setSearchResults(results);
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    if (term.length > 2) {
      searchAllPrompts(term);
    } else {
      setSearchResults([]);
    }
  };

  const handleBack = () => {
    if (selectedSubcategory) {
      setSelectedSubcategory(null);
    } else if (selectedCategory) {
      setSelectedCategory(null);
      setSelectedSubcategory(null); // Asegura que ambos se limpien al volver
    } else if (searchResults.length > 0) {
      setSearchResults([]);
      setSearchTerm('');
    }
  };

  const handleCopy = (prompt) => {
    navigator.clipboard.writeText(prompt);
  };

  // Contar el número total de prompts
  const totalPrompts = promptsData.reduce((count, category) => {
    return count + category.subcategories.reduce((subCount, sub) => subCount + sub.prompts.length, 0);
  }, 0);

  // Determinar el título de la vista actual (para la barra de búsqueda)
  const currentViewTitle = () => {
    if (selectedSubcategory) return selectedSubcategory.title;
    if (selectedCategory) return selectedCategory.title;
    if (searchResults.length > 0) return 'Resultados de Búsqueda';
    return 'Biblioteca de Prompts';
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="header-icon">📊</div>
        <div className="header-text">
          <h1>Contador 4.0</h1>
          <p>Sistema de Transformación con IA para Contadores</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        
        <div className="section-header">
          <h2>{currentViewTitle()} ({selectedSubcategory ? selectedSubcategory.prompts.length : selectedCategory ? totalPrompts : totalPrompts} {selectedSubcategory ? 'prompts' : 'categorías'})</h2>
          
          {/* Search Bar y Botón Volver */}
          <div className="search-bar">
            <input
              type="text"
              placeholder="🔍 Buscar prompts..."
              value={searchTerm}
              onChange={handleSearch}
              className="search-input"
            />
            {(selectedCategory || selectedSubcategory || searchResults.length > 0) && (
              <button className="reset-btn" onClick={handleBack}>
                ⬅ {selectedSubcategory ? `Volver a ${selectedCategory.title}` : 'Volver a Categorías'}
              </button>
            )}
          </div>
        </div>
        
        {/* === Vista de Búsqueda (si hay resultados) === */}
        {searchResults.length > 0 && (
            <>
            <div className="results-info">
              Mostrando {searchResults.length} resultados para "{searchTerm}"
            </div>
            <div className="prompts-container">
              {searchResults.map((p, i) => (
                <div key={i} className="prompt-card">
                  <div className="prompt-card-header">
                    <div className="prompt-card-title">
                      <h3>{p.title}</h3>
                      <div className="prompt-metadata">
                        {/* Muestra la ruta de navegación: Categoría > Subcategoría */}
                        <span className="badge badge-frequency">{p.categoryTitle.replace(/[\d\s\W]*/, '')} > {p.subTitle}</span> 
                      </div>
                    </div>
                  </div>
                  <div className="prompt-card-content">
                    <div className="prompt-text">
                      {p.prompt}
                    </div>
                    <button
                      className="copy-button"
                      onClick={() => handleCopy(p.prompt)}
                    >
                      📋 Copiar prompt
                    </button>
                  </div>
                </div>
              ))}
            </div>
            </>
        )}

        {/* === Vista Principal: Categorías (Muestra las 7 principales) === */}
        {!selectedCategory && searchResults.length === 0 && (
          <div className="category-list prompts-container">
            {promptsData.map((category, index) => (
              <button
                key={index}
                className="filter-btn category-button active"
                onClick={() => setSelectedCategory(category)}
              >
                <span style={{ fontSize: "1.5rem", marginRight: "10px" }}>{category.icon}</span>
                {category.title.replace(/[\d\s\W]*/, '')} ({category.subcategories.reduce((c, sub) => c + sub.prompts.length, 0)})
              </button>
            ))}
          </div>
        )}

        {/* === Vista Secundaria: Subcategorías (Muestra las 5) === */}
        {selectedCategory && !selectedSubcategory && searchResults.length === 0 && (
          <div className="subcategoria-list prompts-container">
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
        )}

        {/* === Vista Final: Prompts de Subcategoría (Muestra los 3 detallados) === */}
        {selectedSubcategory && searchResults.length === 0 && (
          <div className="prompt-list prompts-container">
            {selectedSubcategory.prompts.map((prompt, i) => (
              <div key={i} className="prompt-card">
                <div className="prompt-card-header">
                  <div className="prompt-card-title">
                    <h3>{prompt.title}</h3>
                  </div>
                </div>
                <div className="prompt-card-content">
                  <div className="prompt-text">
                    {prompt.prompt}
                  </div>
                  <button
                    className="copy-button"
                    onClick={() => handleCopy(prompt.prompt)}
                  >
                    📋 Copiar prompt
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Tips Section */}
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
      </main>
    </div>
  );
}
