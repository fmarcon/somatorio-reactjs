import React, { useState } from "react"

import PrimeiroValor from './components/PrimeiroValor'
import SegundoValor from './components/SegundoValor'
import ResultadoValor from './components/ResultadoValor'

import './App.css';


function App() {
  const [primeiroValor, setPrimeiroValor] = useState(0)
  const [segundoValor, setSegundoValor] = useState(0)
  const [resultadoValor, setResultadoValor] = useState(0)

  function changePrimeiro(e) {
    let resultado = Number(e.target.value) + Number(segundoValor)
    setResultadoValor(resultado)
    setPrimeiroValor(e.target.value)
  }

  function changeSegundo(e) {
    let resultado = Number(e.target.value) + Number(primeiroValor)
    setResultadoValor(resultado)
    setSegundoValor(e.target.value)
  }

  function changeGenerico(e) {
    let valor = 0
    if (e.target.name == 'primeiro') {
      valor = Number(segundoValor)
      setPrimeiroValor(e.target.value)
    }
    else if (e.target.name == 'segundo') {
      valor = Number(primeiroValor)
      setSegundoValor(e.target.value)
    }
    setResultadoValor(valor + Number(e.target.value))
  }

  return (
    <div>
      <h1>Soma de dois valores</h1>
      <div className="App">
        <PrimeiroValor valor={primeiroValor} calcular={changeGenerico}></PrimeiroValor>
        <SegundoValor valor={segundoValor} calcular={changeGenerico}></SegundoValor>
        <ResultadoValor valor={resultadoValor}></ResultadoValor>
      </div>
    </div>
  );
}

export default App;
