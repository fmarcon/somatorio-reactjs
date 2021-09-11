import React from "react"

import './SegundoValor.css'

function SegundoValor(props) {

    const calcular = function(e) {
        props.calcular(e)
    }

    return (
        <div className="segundo">
            <label>Segundo Valor:</label>
            <input name="segundo" onChange={calcular} type="number" value={props.valor}/>
        </div>
    )
}

export default SegundoValor