import axios from 'axios'

export const api = axios.create({
    baseURL:'https://bpeduardo2022.herokuapp.com'
})

// url-> /login , dados-> json, setDado -> token
// async
// await
// conexão com a API para que de fato o usuario seja cadastrado
export const cadastroUsuario = async(url:any,dados:any,setDado:any) => {
    const resposta = await api.post(url,dados)
    setDado(resposta.data)
}

//conexão com a API para fazer o login
export const login = async(url:any,dados:any,setDado:any) => {
    const resposta = await api.post(url,dados)
    setDado(resposta.data.token)
}