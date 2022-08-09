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

//um metodo - para fazer uma requisição para busca/listar minhas postagens ou temas
//passa 3 parametros: 
//url-> a rota onde quero listar os temas e postagem
//header -> autenticar o token para poder fazer postagem
//setDado-> api retornando os dados, caso  usuario válido, armazenando dentro da variável const resposta
export const busca = async(url:any,setDado:any,header:any) => {
    const resposta = await api.get(url,header)
    setDado(resposta.data)
}

export const buscaId = async(url: string, setDados: any,  header: any) => {
    const resposta = await api.get(url, header)
    setDados(resposta.data)
}

export const post = async(url: string, dados: any, setDados: any,  header: any) => {
    const resposta = await api.post(url, dados, header)
    setDados(resposta.data)
}

export const put = async(url: string, dados: any, setDados: any,  header: any) => {
    const resposta = await api.put(url, dados, header)
    setDados(resposta.data)
}

export const deleteId = async(url: string, header: any) => {
    await api.delete(url, header)
}