import React from "react"
import "./SegundoValor.css"


function SegundoValor(props) {

  function alteracao(e){
    props.alterar(+e.target.value)
  }

  return (
    <div className="segundo">
      <label>Segundo Valor: {props.valor}</label>
      <input name="segundo" type="number" value={props.valor} onChange={alteracao}/>
    </div>
  );
}


export default SegundoValor;