import React from "react"
import './PrimeiroValor.css'

function PrimeiroValor(props) {

    const calcular = function(e) {
        console.log(e)
        props.calcular(e)
    }

    return (
        <div className="primeiro">
            <label>Primeiro Valor:</label>
            <input name="primeiro" onChange={calcular}
                   type="number" value={props.valor}/>
        </div>
    )
}

export default PrimeiroValor