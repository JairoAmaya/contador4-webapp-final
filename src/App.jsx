import React, { useState, useMemo } from 'react';
import './styles.css';
// Asegúrate que la ruta al JSON es correcta
import promptsData from './data/prompts_data_complete.json'; 

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFrequency, setSelectedFrequency] = useState('all');
  const [expandedPrompts, setExpandedPrompts] = useState({});
  const [copiedPrompts, setCopiedPrompts] = useState({});

  // Extraer frecuencias únicas
  const frequencies = useMemo(() => {
    // Usamos promptsData directamente, que es un array de objetos
    const freqs = [...new Set(promptsData.map(p => p.frecuencia))];
    return ['all', ...freqs];
  }, []);

  // Filtrar prompts
  const filteredPrompts = useMemo(() => {
    return promptsData.filter(prompt => {
      // Usamos 'nombre' y 'contenido' para la búsqueda, y 'frecuencia' para el filtro
      const matchesSearch = 
        prompt.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prompt.contenido.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesFrequency = selectedFrequency === 'all' || prompt.frecuencia === selectedFrequency;
      
      return matchesSearch && matchesFrequency;
    });
  }, [searchTerm, selectedFrequency]);

  const togglePrompt = (index) => {
    setExpandedPrompts(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const copyPrompt = (content, index) => {
    navigator.clipboard.writeText(content);
    setCopiedPrompts(prev => ({ ...prev, [index]: true }));
    setTimeout(() => {
      setCopiedPrompts(prev => ({ ...prev, [index]: false }));
    }, 2000);
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
        <div className="filters-container">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Buscar por nombre o contenido..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          
          {/* Frequency Filter */}
          <div className="frequency-filter">
            <label htmlFor="frequency-select">Frecuencia:</label>
            <select
              id="frequency-select"
              value={selectedFrequency}
              onChange={(e) => setSelectedFrequency(e.target.value)}
            >
              <option value="all">Todas</option>
              {frequencies.filter(f => f !== 'all').map(f => (
                <option key={f} value={f}>{f}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Prompt List */}
        <div className="prompt-list">
          {filteredPrompts.map((p, index) => (
            <div 
              key={index} 
              className={`prompt-card ${expandedPrompts[index] ? 'expanded' : ''}`}
            >
              <div 
                className="prompt-header" 
                onClick={() => togglePrompt(index)}
              >
                <div className="prompt-title-group">
                  <h3>{p.nombre}</h3>
                  
                  {/* CORRECCIÓN DEL ERROR DE SINTAXIS */}
                  <span className="badge badge-frequency">
                    {p.categoryTitle.replace(/[\d\s\W]*/, '') + ' > ' + p.subTitle} 
                  </span>
                </div>
                <div className="prompt-meta-group">
                  <span className={`badge badge-frequency-pill ${p.frecuencia.toLowerCase()}`}>
                    {p.frecuencia}
                  </span>
                  <span className="toggle-icon">
                    {expandedPrompts[index] ? '▲' : '▼'}
                  </span>
                </div>
              </div>

              {expandedPrompts[index] && (
                <div className="prompt-details">
                  <div className="detail-section">
                    <h4>Cuándo usar:</h4>
                    <p>{p.cuando}</p>
                  </div>
                  
                  <div className="detail-section">
                    <h4>Contenido del Prompt:</h4>
                    <pre className="prompt-content-text">{p.contenido}</pre>
                  </div>

                  <button
                    className={`copy-button ${copiedPrompts[index] ? 'copied' : ''}`}
                    onClick={() => copyPrompt(p.contenido, index)}
                  >
                    {copiedPrompts[index] ? '✓ Copiado' : '📋 Copiar prompt'}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredPrompts.length === 0 && (
          <div className="no-results">
            <p>No se encontraron prompts que coincidan con tu búsqueda.</p>
            <button 
              className="reset-btn"
              onClick={() => {
                setSearchTerm('');
                setSelectedFrequency('all');
              }}
            >
              Limpiar filtros
            </button>
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
