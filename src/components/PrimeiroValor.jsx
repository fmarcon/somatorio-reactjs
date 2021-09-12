import React from "react"
import "./PrimeiroValor.css"


function PrimeiroValor(props) {

  function alteracao(e){
    props.alterar(+e.target.value)
  }

  return (
    <div className="primeiro">
      <label>Primeiro Valor: {props.valor}</label>
      <input name="primeiro" type="number" value={props.valor} onChange={alteracao}/>
    </div>
  );
}


export default PrimeiroValor;