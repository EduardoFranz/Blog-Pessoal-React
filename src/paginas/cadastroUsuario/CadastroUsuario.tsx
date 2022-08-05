import React , {useState, useEffect, ChangeEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { Box } from '@mui/material';

import { cadastroUsuario } from '../../services/Service';
import User from '../../models/User';

import './CadastroUsuario.css';


function CadastroUsuario() {

    let navigate = useNavigate();
    const [confirmarSenha,setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto:''
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto:''
        })

    useEffect(() => {
        if (userResult.id !== 0) {
            navigate('/login')
            console.log()
            
        }
    }, [userResult])


    //capturar o que for digitado no campo confirmar senha
    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>){
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }

    async function cadastrar(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        // Estrutura Condicional que verifica se as senhas batem e se a Senha tem mais de 8 caracteres
        if (confirmarSenha === user.senha && user.senha.length >= 5) {

            //Tenta executar o cadastro
            try {
                await cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
                alert("Usuário cadastrado com sucesso")

            //Se houver erro, pegue o Erro e retorna uma msg
            } catch (error) {
                console.log(`Error: ${error}`)
                
                //Pode modificar a msg de acordo com o erro 
                alert("Usuário deve ser um e-mail!")
            }

        } else {
            alert("Confirmação de senha deve ser igual senha e deve conter 5 caracteres ou mais.")    // Mensagem que indica a quantidade minima de caracteres

            setUser({ ...user, senha: "" }) // Reinicia o campo de Senha
            setConfirmarSenha("")           // Reinicia o campo de Confirmar Senha
        }
    }
        
    // //enviar os dados para cadastro maneira antiga de autentificação
    // async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    //     e.preventDefault()
    //     if(confirmarSenha === user.senha){
    //     cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
    //     alert('Usuario cadastrado com sucesso')
    //     }else{
    //         alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
    //     }
    // }
    
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className="imagem-cadastro" >

            </Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10} >
                    <form onSubmit={cadastrar}>
                        <Typography variant='h3' color='textPrimary' component='h3' align='center' gutterBottom className="textos2" > Cadastrar 
                        </Typography>

                        <TextField  value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth />

                        <TextField   value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />

                        
                        <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />

                        <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='confirmar senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />

                        {/* botão de login */}
                        <Box marginTop={2} textAlign='center' >
                            <Link to='/login' className='text-decorator-none'>
                                <Button className='btnCancelar' variant='contained' color='secondary'>
                                     Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='contained' color='primary'>
                                     Cadastrar 
                            </Button>
                        </Box>

                    </form>
                </Box>
            </Grid>
        </Grid>
    );
}


export default CadastroUsuario