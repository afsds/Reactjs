import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setIMC] = useState(0);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    const alturaMetros = altura / 100;
    const imcCalculado = peso / (alturaMetros * alturaMetros);
    setIMC(imcCalculado.toFixed(2));

    if (imcCalculado < 18.5) {
      setClassificacao('Abaixo do peso');
    } else if (imcCalculado < 24.9) {
      setClassificacao('Peso normal');
    } else if (imcCalculado < 29.9) {
      setClassificacao('Sobrepeso');
    } else if (imcCalculado < 34.9) {
      setClassificacao('Obesidade grau I');
    } else if (imcCalculado < 39.9) {
      setClassificacao('Obesidade grau II');
    } else {
      setClassificacao('Obesidade grau III');
    }
  };

  return (
    <div className="container mt-5">
      <h1>Calculadora de IMC</h1>
      <div className="mb-3">
        <label htmlFor="altura" className="form-label">Altura (cm):</label>
        <input type="number" className="form-control" id="altura" value={altura} onChange={(e) => setAltura(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="peso" className="form-label">Peso (kg):</label>
        <input type="number" className="form-control" id="peso" value={peso} onChange={(e) => setPeso(e.target.value)} />
      </div>
      <button type="button" className="btn btn-primary" onClick={calcularIMC}>Calcular</button>
      {imc > 0 && (
        <div className="mt-3">
          <h2>Resultado</h2>
          <p>Seu IMC é: {imc}</p>
          <p>Classificação: {classificacao}</p>
        </div>
      )}
    </div>
  );
}

export default App;

