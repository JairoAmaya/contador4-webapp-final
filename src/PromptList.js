// src/PromptList.js
import React from "react";

function PromptList({ prompts }) {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("✅ Prompt copiado al portapapeles");
  };

  return (
    <div className="prompt-list">
      {prompts.map((prompt, idx) => (
        <div key={idx} className="prompt-card">
          <h3>{prompt.title}</h3>
          <p>{prompt.long}</p>

          {prompt.express && (
            <p>
              <strong>Versión Express:</strong> {prompt.express}
            </p>
          )}

          <button onClick={() => copyToClipboard(prompt.long)}>
            Copiar Versión Larga
          </button>

          {prompt.express && (
            <button onClick={() => copyToClipboard(prompt.express)}>
              Copiar Versión Express
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default PromptList;
