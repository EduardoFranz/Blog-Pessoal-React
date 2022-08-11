

import React, {ChangeEvent, useState, useEffect} from "react";
import { Typography, Grid, TextField, Button  } from "@material-ui/core";
import { Box} from "@mui/material";
import { Link , useNavigate } from "react-router-dom";



import UserLogin from "../../models/UserLogin";
import useLocalStorage from "react-use-localstorage";
import { login } from "../../services/Service";

import './Login.css';

function Login(){

    let navigate = useNavigate();
        

    const[token, setToken] = useLocalStorage('token');    

    const[userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            nome:'',
            usuario:'',
            senha:'',
            foto:'',
            token:''
        }
        )
    
        function updatedModel(e: ChangeEvent<HTMLInputElement>){

            setUserLogin({
                ...userLogin,
                [e.target.name]: e.target.value
            })
        }

        //reponsáel pelo ciclo de vida de um componente-redirecionamento para pagina home após o token
        useEffect(()=>{
            if(token !== ''){
                navigate('/home')

            } 
        }, [token])

        

        async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
                e.preventDefault();
                try {
                        await login (`/usuarios/logar`, userLogin, setToken) 
                        alert('Usuário logado com sucesso')

                } catch (error) {
                        alert('Dados do usuário inconsistentes. Erro ao logar!')
                }
        }

    return(

        <Grid container direction='row' justifyContent='center' alignItems='center'>

            {/* 1° tela do login  */}
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography  variant='h3' color='textPrimary' component='h3' align='center' gutterBottom  className="textos1" > Entrar </Typography>
                        <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth /> 
                        <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth /> 

                        {/* botão de login */}
                        <Box marginTop={2} textAlign='center' >
                           <Button type='submit' variant='contained' color='primary'> Logar </Button>  
                        </Box>

                    </form>

                    <Box display='flex' justifyContent='center' marginTop={2} >
                        <Box marginRight={1}>
                            <Typography variant="subtitle1" align="center" gutterBottom  >Não tem uma conta?</Typography>
                        </Box>
                            <Link to = "/cadastroUsuario" >
                                <Typography variant="subtitle1" align="center" gutterBottom className="textos1" > Cadastre-se</Typography>
                            </Link>
                           
                    </Box>

                </Box>
            </Grid>

            {/* 2° tela do login */}
            <Grid xs={6} className="imagem" >

            </Grid>

        </Grid>



    );


}

export default Login;
