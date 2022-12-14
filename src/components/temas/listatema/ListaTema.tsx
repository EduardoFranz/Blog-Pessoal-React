import React, {useEffect, useState, } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Typography } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Card from '@material-ui/core/Card';
import { Box } from '@mui/material';
import { busca } from '../../../services/Service';
import Tema from '../../../models/Tema'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducer';
import './ListaTema.css';
import { toast } from 'react-toastify';

function ListaTema() {
        
        const [temas, setTemas] = useState<Tema[]>([])       

        let navigate = useNavigate();

        const token = useSelector<TokenState, TokenState['tokens']>(
            (state) => state.tokens
        )
     
        useEffect(()=>{
          if(token === ''){
            toast.error('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            navigate("/login")
          }
        }, [token])
      
      
        //requisição de todos os temas dentro da api
        //await vai aguardar o método busca da 'service.ts'
        //
        async function getTema(){
            await busca("/temas", setTemas, {
              headers:{
                'Authorization': token
              }
            })
          }
      
        //sempre que o tamanho do temas modificar,ira acionar a função getTema
        useEffect(()=>{
          getTema()
        }, [temas.length])
      

    return (
    <>
        {
            
            //metodo map
            //mapeando todos os temas
            temas.map(tema =>(

                <Box m={2} >
                    <Card variant="outlined">
                        <CardContent>
                            <Typography color="secondary" gutterBottom>
                                Tema
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {tema.descricao}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Box display="flex" justifyContent="center" mb={1.5} >
                                
                                {/* crases para uso de template string , atualizar ou deletar tema de acordo com seu id*/}
                                <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                                    <Box mx={1}>
                                        <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                            atualizar
                                        </Button>
                                    </Box>
                                </Link>
                                <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                                    <Box mx={1}>
                                        <Button variant="contained" size='small' color="secondary">
                                            deletar
                                        </Button>
                                    </Box>
                                </Link>
                            </Box>
                        </CardActions>
                    </Card>
                </Box>
            ))
        }
    </>
    );
}


export default ListaTema;