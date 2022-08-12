import React from 'react';
import { AppBar,Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducer';
import { addToken } from '../../../store/tokens/Actions';
import { toast } from 'react-toastify';

import './Navbar.css'

function Navbar() {

    let navigate = useNavigate();

    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens
    )
    
    const dispatch = useDispatch();
    
    
    function goLogout(){
        dispatch(addToken(''))
        toast.info('Usuario deslogado',{
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
        navigate('/login')
    }

    var navbarComponent

    if ( token !== ''){
        navbarComponent =  <AppBar position="static">
        <Toolbar variant="dense">
            <Box className='cursor' >
                <Typography variant="h5" color="inherit">
                    Dublog
                </Typography>
            </Box>


            <Box display="flex" justifyContent="start" >
            <Link to='/home' className='text-decorator-none' >
                <Box mx={1} className='cursor'>
                    <Typography variant="h6" color="inherit">
                        Home
                    </Typography>
                </Box>
            </Link>  
            <Link to='/postagens' className='text-decorator-none' >
                <Box mx={1} className='cursor'>
                    <Typography variant="h6" color="inherit">
                        Postagens
                    </Typography>
                </Box>
            </Link>  
            <Link to='/temas' className='text-decorator-none' > 
                <Box mx={1} className='cursor'>
                    <Typography variant="h6" color="inherit">
                        Temas
                    </Typography>
                </Box>
            </Link>
            <Link to='/formularioTema' className='text-decorator-none' >      
                <Box mx={1} className='cursor'>
                    <Typography variant="h6" color="inherit">
                        Cadastrar tema
                    </Typography>
                </Box>
            </Link>    
                
                    <Box mx={1} className='cursor'  onClick={goLogout} >
                        <Typography variant="h6" color="inherit">
                            Logout
                        </Typography>
                    </Box>
               

            </Box>

        </Toolbar>
    </AppBar>
    }

    return (
        <>
           {navbarComponent}
        </>
    )
}

export default Navbar;