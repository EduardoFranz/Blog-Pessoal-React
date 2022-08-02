import React from 'react';
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './CadastroUsuario.css';


function CadastroUsuario() {
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className="imagem-cadastro" >

            </Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10} >
                    <form>
                        <Typography variant='h3' color='textPrimary' component='h3' align='center' gutterBottom className="textos2" > Cadastrar </Typography>

                        <TextField id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth />
                        <TextField id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />

                        
                        <TextField id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <TextField id='confirmarSenha' label='confirmar senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />

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