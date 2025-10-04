import React from "react";

function PromptList({ prompts }) {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Prompt copiado al portapapeles ✅");
  };

  return (
    <div className="prompt-list">
      {prompts.map((prompt, index) => (
        <div key={index} className="card">
          <h3>{prompt.title}</h3>
          <p>{prompt.long}</p>
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
