import React from "react";

const PromptList = ({ prompts }) => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("✅ Prompt copiado al portapapeles");
  };

  return (
    <div>
      {prompts.map((prompt) => (
        <div key={prompt.id} className="promptCard">
          <h3>{prompt.title}</h3>

          {prompt.longVersion && (
            <p className="promptText">{prompt.longVersion}</p>
          )}

          {prompt.expressVersion && (
            <p className="promptText express">⚡ {prompt.expressVersion}</p>
          )}

          {prompt.longVersion && (
            <button
              className="btn btn-long"
              onClick={() => copyToClipboard(prompt.longVersion)}
            >
              Copiar Versión Larga
            </button>
          )}

          {prompt.expressVersion && (
            <button
              className="btn btn-express"
              onClick={() => copyToClipboard(prompt.expressVersion)}
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
