import React from "react"
import { connect } from "react-redux"

import PrimeiroValor from './components/PrimeiroValor'
import SegundoValor from './components/SegundoValor'
import ResultadoValor from './components/ResultadoValor'

import { alterarNumeroPrimeiro } from "./store/actions/numeros"
import { alterarNumeroSegundo } from "./store/actions/numeros"

import './App.css';


function App(props) {
  return (
    <div>
      <h1>Soma de dois valores</h1>
      <div className="App">
        <PrimeiroValor alterar={props.alterarPrimeiro} valor={props.numeros.primeiroNumero}></PrimeiroValor>
        <SegundoValor alterar={props.alterarSegundo} valor={props.numeros.segundoNumero}></SegundoValor>
        <ResultadoValor valor={props.numeros.resultadoValor}></ResultadoValor>
      </div>
    </div>
  );
}


function mapStateToProps(state) {
  return {
    numeros: state.numeros
  }
}


function mapDispatchToProps(dispatch) {
  return {
    alterarPrimeiro(novoNumero) {
      const action = alterarNumeroPrimeiro(novoNumero)
      dispatch(action)
    },
    alterarSegundo(novoNumero) {
      const action = alterarNumeroSegundo(novoNumero)
      dispatch(action)
    },
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
