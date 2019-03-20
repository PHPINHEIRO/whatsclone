const initialState = {
    nome:'',
    email:'',
    senha:'',
}

export default (state = initialState, action) => {
    if (action.type == 'MODIFICA_EMAIL') {
        return { ...state, email: action.payload }
    }
    if (action.type == 'MODIFICA_SENHA') {
        return { ...state, senha: action.payload }
    }
    if (action.type == 'MODIFICA_NOME') {
        return { ...state, nome: action.payload }
    }
    return state
}
