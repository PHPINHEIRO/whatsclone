export const modificaEmail = (texto) => {
    return{
        type: 'MODIFICA_EMAIL',
        payload: texto
    }
}

export const modificaSenha = (texto) => {
    return{
        type: 'MODIFICA_SENHA',
        payload: texto
    }
}

export const modificaNome = (texto) => {
    return{
        type: 'MODIFICA_NOME',
        payload: texto
    }
}