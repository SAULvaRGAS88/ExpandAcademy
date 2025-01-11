import React from 'react';
import { Typography, Button, Box, Grid } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export const BemVindo = () => {

    const handleClick = () => {
        console.log('Clicou no botao')
        window.location.href = '/login'
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                px: 2, // Padding horizontal para espaçamento em telas menores
            }}
        >
            <img src="/logo-quebra-cabeça.svg" alt="Logo" style={{ maxWidth: '30%', maxHeight: '30%',  }} />
            <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                    <Typography
                        variant="h3"
                        component="h1"
                        gutterBottom
                        align="center"
                        sx={{
                            fontSize: { xs: '2rem', sm: '3rem', md: '3.5rem' }, // Tamanhos responsivos
                        }}
                    >
                        Bem-vindo ao ExpandAcademy
                    </Typography>
                </Grid>
                <Grid item>
                    <Button
                        sx={{
                            textTransform: 'none',
                            fontSize: { xs: '0.875rem', sm: '1rem' }, // Ajusta o tamanho do texto
                            padding: { xs: '8px 16px', sm: '10px 20px' }, // Ajusta o espaçamento do botão
                        }}
                        variant="contained"
                        endIcon={<SendIcon />}
                        onClick={handleClick}
                    >
                        Entrar
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};