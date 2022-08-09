//model tema.ts
import Tema from './Tema' 

interface Postagem{
    
    id: number
    titulo: string
    texto: string
    tema?: Tema |  null // tema? é a chave estrangeira, fazendo a ligação entre tabela temas e tabela postagens
}

export default Postagem