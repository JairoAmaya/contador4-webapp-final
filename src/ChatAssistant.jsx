import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "¡Hola! Soy tu asistente especializado en Contador 4.0. Estoy aquí para ayudarte a implementar la inteligencia artificial en tu práctica contable. ¿En qué área te gustaría que te ayude hoy?",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulación de respuesta automática
    setTimeout(() => {
      const botReplies = [
        "Excelente pregunta. Este tema lo puedes abordar desde la categoría *Análisis Financiero Estratégico*.",
        "Puedes explorar prompts en *Cumplimiento Fiscal* para eso.",
        "Te recomiendo revisar las subcategorías de *Reportes y Dashboards*.",
        "Esa tarea la puedes resolver con prompts de *Auditoría y Control*.",
      ];
      const randomReply = botReplies[Math.floor(Math.random() * botReplies.length)];
      setMessages((prev) => [...prev, { sender: "bot", text: randomReply }]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <>
      <button className="chat-button" onClick={toggleChat}>
        💬
      </button>

      {isOpen && (
        <div className="chat-container">
          <div className="chat-header">
            <h3>Asistente Contador 4.0</h3>
            <button className="close-btn" onClick={toggleChat}>✖</button>
          </div>

          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-bubble ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input-area">
            <input
              type="text"
              placeholder="Pregúntame sobre prompts, casos de uso o implementación..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button onClick={handleSend}>➤</button>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatAssistant;
