import React, { useState } from 'react';
import './styles.css';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Contador 4.0 🚀</h1>
      <p>Multiplica tus ingresos hasta 3x con IA</p>
      <h2>{count}</h2>
      <div className="buttons">
        <button onClick={() => setCount(count + 1)}>Incrementar</button>
        <button onClick={() => setCount(count - 1)}>Decrementar</button>
        <button onClick={() => setCount(0)}>Reiniciar</button>
      </div>
    </div>
  );
}
