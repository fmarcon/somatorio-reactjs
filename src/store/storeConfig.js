import { createStore, combineReducers } from "redux"

const initialState = {
    primeiroNumero: 10,
    segundoNumero: 10,
    resultadoValor: 20
}

const reducers = combineReducers({
    numeros: function (state=initialState, action) {

        switch (action.type) {
            case 'NUM_PRIMEIRO_NUMERO':
                return {
                    ...state,
                    primeiroNumero: action.payload,
                    resultadoValor: state.segundoNumero + action.payload
                }
            case 'NUM_SEGUNDO_NUMERO':
                return {
                    ...state,
                    segundoNumero: action.payload,
                    resultadoValor: state.primeiroNumero + action.payload
                }
            default:
                return state
        }
    }
}
)

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig