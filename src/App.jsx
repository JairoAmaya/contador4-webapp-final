// Contador 4.0 SAT México - Versión adaptada para el mercado mexicano
// Mantiene toda la funcionalidad original con branding y contenido específico de México
import React, { useState, useMemo } from 'react';
import './styles.css';
import promptsData from './promptsData-SAT-Mexico'; // ⬅️ CAMBIO: Importar datos de México

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

// ✅ FUNCIÓN DE RESALTADO: Detecta y envuelve variables entre [CORCHETES]
const highlightVariables = (text) => {
  if (!text) return '';
  // Reemplaza [TEXTO] con <span class="highlight-variable">[TEXTO]</span>
  return text.replace(
    /(\[([^\]]+)\])/g,
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
      // Regresa del Nivel 3 (Prompts) al Nivel 2 (Subcategorías)
      setSelectedSubcategory(null);
    } else if (selectedCategory) {
      // Regresa del Nivel 2 (Subcategorías) al Nivel 1 (Categorías)
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
                            {/* ✨ NUEVO: Badge de descripción */}
                            {prompt.description && (
                                <p className="prompt-description">{prompt.description}</p>
                            )}
                        </div>
                        
                        <div className="prompt-details">
                            <div className="detail-section">
                                <h4>Contenido del Prompt:</h4>
                                <pre 
                                    className="prompt-content-text"
                                    dangerouslySetInnerHTML={{ __html: highlightVariables(prompt.prompt) }}
                                />
                            </div>
                            
                            {/* ✨ NUEVO: Mostrar variables detectadas */}
                            {prompt.variables && prompt.variables.length > 0 && (
                                <div className="variables-section">
                                    <h4>📝 Variables a personalizar:</h4>
                                    <ul className="variables-list">
                                        {prompt.variables.map((variable, idx) => (
                                            <li key={idx}>
                                                <code>[{variable}]</code>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            
                            {/* ✨ NUEVO: Tags si existen */}
                            {prompt.tags && prompt.tags.length > 0 && (
                                <div className="tags-section">
                                    {prompt.tags.map((tag, idx) => (
                                        <span key={idx} className="tag-badge">{tag}</span>
                                    ))}
                                </div>
                            )}
                            
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
        <div className="category-list-wrapper">
             <h2 className="main-title-selection">Selecciona una Categoría</h2>
             
             <div className="prompts-container category-list">
                {promptsData.map(category => (
                    <button
                        key={category.title}
                        className="filter-btn category-button"
                        style={{
                            // ✨ NUEVO: Usar colores definidos en promptsData
                            borderLeft: `4px solid ${category.color || '#3b82f6'}`
                        }}
                        onClick={() => setSelectedCategory(category)} 
                    >
                        <span className="icon-span" role="img">{category.icon}</span>
                        <span className="category-title-text">
                            {category.title.replace(/[\d\s\W]*/, '')} 
                        </span>
                    </button>
                ))}
            </div>
            
            {/* ✨ NUEVO: Tips específicos para México */}
            <div className="tips-section">
                <h3>💡 Consejos para usar los prompts SAT</h3>
                <ul>
                    <li>Estos prompts están <strong>especializados para México</strong> con referencias a Anexos SAT, CFDI 4.0 y normativa vigente</li>
                    <li>Las <strong>variables entre [CORCHETES]</strong> deben reemplazarse con los datos de tu cliente</li>
                    <li>Usa <a href="https://claude.ai" target="_blank" rel="noopener noreferrer">claude.ai</a> o <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer">ChatGPT</a> para ejecutar los prompts</li>
                    <li>Para casos complejos, combina múltiples prompts (ej: CFDI + Complemento de Pagos)</li>
                    <li>Mantén actualizada tu referencia a <strong>Anexos 20 y 24</strong> del SAT</li>
                    <li>Los prompts de <strong>Precios de Transferencia</strong> son únicos de este pack</li>
                </ul>
            </div>
            
            {/* ✨ NUEVO: Información del pack */}
            <div className="info-box">
                <p className="info-text">
                    📦 <strong>{totalPrompts} prompts especializados</strong> organizados en <strong>6 categorías</strong> para cumplimiento fiscal mexicano
                </p>
            </div>
        </div>
    );
  };

  return (
    <div className="app-container">
      {/* ✨ HEADER ACTUALIZADO PARA MÉXICO */}
      <header className="header header-mexico">
        <div className="header-content">
          <h1>
            <span className="flag-emoji">🇲🇽</span> 
            Contador 4.0 SAT México
          </h1>
          <p className="subtitle">
            40 Prompts especializados en cumplimiento fiscal mexicano
          </p>
          <p className="header-description">
            CFDI 4.0 • Anexos SAT • Declaraciones • Precios de Transferencia • Defensa Fiscal
          </p>
        </div>
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
      
      {/* ✨ FOOTER ACTUALIZADO PARA MÉXICO */}
      <footer className="app-footer footer-mexico">
        <div className="footer-content">
          <p>
            <strong>Contador 4.0 SAT México</strong> es un pack especializado de 40 prompts para contadores que trabajan con cumplimiento fiscal mexicano. 
            Complementa el sistema Contador 4.0 con herramientas específicas para CFDI, SAT, Anexos 20/24, y normativa fiscal de México.
          </p>
          <p className="footer-credits">
            Desarrollado por <a href="https://jairoamaya.co" target="_blank" rel="noopener noreferrer">Jairo Amaya - Full Stack Marketer</a> • 
            Todos los derechos reservados © {new Date().getFullYear()}
          </p>
          <p className="footer-disclaimer">
            ⚠️ Contenido educativo. Consulta con un contador titulado para casos específicos.
          </p>
        </div>
      </footer>

    </div>
  );
}
