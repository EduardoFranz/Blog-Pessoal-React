import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import  FacebookIcon  from "@material-ui/icons/Facebook";
import  InstagramIcon  from "@material-ui/icons/Instagram";
import  LinkedInIcon  from "@material-ui/icons/LinkedIn";
import  GitHubIcon from '@material-ui/icons/GitHub';
import './Footer.css';


function Footer(){
    return(
        <>
           <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>

                    <Box className="box1">
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography className="textos" variant="h5" align="center" gutterBottom >Siga-nos nas redes sociais </Typography>
                        </Box>

                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.facebook.com/generationbrasil" target="_blank">
                                <FacebookIcon className="redes" />
                            </a>
                            <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                                <InstagramIcon className="redes" />
                            </a>
                            <a href="https://www.linkedin.com/in/eduardo-franz/" target="_blank">
                                <LinkedInIcon  className="redes" />
                            </a>
                            <a href="https://github.com/EduardoFranz" target="_blank">
                                <GitHubIcon className="redes" />
                            </a>
                        </Box>

                    </Box>

                    <Box className="box2">
                        <Box paddingTop={1}>
                            <Typography className="textos" variant="subtitle2" align="center" gutterBottom  >© 2020 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://brasil.generation.org">
                                <Typography className="textos" variant="subtitle2" gutterBottom  align="center" >brasil.generation.org</Typography>
                            </a>
                        </Box>
                    </Box>
                    
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;