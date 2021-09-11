import React from "react"

import './ResultadoValor.css'

function ResultadoValor(props) {


    return (
        <div className="resultado">
            <label>Resultado:</label>
            <input type="number" value={props.valor} readOnly/>
        </div>
    )
}

export default ResultadoValor