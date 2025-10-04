// src/PromptList.js
import React from "react";

const PromptList = ({ prompts }) => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Prompt copiado al portapapeles ✅");
  };

  return (
    <div className="prompt-list">
      {prompts.map((prompt, idx) => (
        <div key={idx} className="prompt-card">
          <h4>{prompt.title}</h4>
          <p>{prompt.long}</p>

          {prompt.express && (
            <p>
              <strong>Versión Express:</strong> {prompt.express}
            </p>
          )}

          <button
            className="copy-button"
            onClick={() => copyToClipboard(prompt.long)}
          >
            Copiar Versión Larga
          </button>

          {prompt.express && (
            <button
              className="copy-button"
              onClick={() => copyToClipboard(prompt.express)}
            >
              Copiar Versión Express
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default PromptList;
