import React, { useState } from 'react';
import {
    TextField,
    Button,
    Typography,
    Container,
    Box,
    CssBaseline,
} from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelecionarTipoUsuario from './SelecionarTipoUsuario';

export const Login = () => {

    const [open, setOpen] = useState(true);
    const handleClose = () => setOpen(false);
    const [tipoUsuario, setTipoUsuario] = useState((tipoUsuario) => console.log('Tipo de usuário:', tipoUsuario));

    return (
        <Container
            component="main"
            maxWidth="xs"
            className="d-flex justify-content-center align-items-center vh-100"
        >
            {SelecionarTipoUsuario({ open, handleClose, setTipoUsuario })}
            <CssBaseline />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                    padding: 4,
                    borderRadius: 2,
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                    width: '100%',
                }}
            >
                {/* Header */}
                <Typography component="h1" variant="h5" gutterBottom>
                    Login
                </Typography>
                <Typography component="h1" variant="h5" gutterBottom>
                    Bem-vindo {tipoUsuario}
                </Typography>

                {/* Form */}
                <Box component="form" sx={{ mt: 1, width: '100%' }}>
                    {/* Email Input */}
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />

                    {/* Password Input */}
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Senha"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{
                            mt: 3,
                            mb: 2,
                            backgroundColor: '#007bff',
                            ':hover': { backgroundColor: '#0056b3' },
                        }}
                    >
                        Logar
                    </Button>

                    {/* Additional Links */}
                    <div className="text-center mt-3">
                        <Typography variant="body2" color="textSecondary">
                            Não tem uma conta? <a href="/register">Cadastre-se</a>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                            <a href="/forgot-password">Esqueceu a senha?</a>
                        </Typography>
                    </div>
                </Box>
            </Box>
        </Container>
    );
};
