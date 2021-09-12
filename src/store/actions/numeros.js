

export function alterarNumeroPrimeiro(novoNumero) {
    return {
        type: 'NUM_PRIMEIRO_NUMERO',
        payload: novoNumero
    }
}

export function alterarNumeroSegundo(novoNumero) {
    return {
        type: 'NUM_SEGUNDO_NUMERO',
        payload: novoNumero
    }
}