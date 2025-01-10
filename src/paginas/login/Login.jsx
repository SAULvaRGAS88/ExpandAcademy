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
import './Login.css';
import { getUsuarioFarebase } from '../../services/conexoes/LogarUsuarios';

export const Login = () => {
    const [open, setOpen] = useState(true);
    const handleClose = () => setOpen(false);
    const [tipoUsuario, setTipoUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const verificarTipoUsuario = (tipo) => {
        if (tipo === 'Aluno') {
            console.log('Tipo de usuário:', tipo);
        } else if (tipo === 'Professor') {
            console.log('Tipo de usuário:', tipo);
        } else if (tipo === 'Administrador') {
            console.log('Tipo de usuário:', tipo);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !senha) {
            console.error('Email e senha são obrigatórios!');
            return;
        }

        setIsLoading(true);
        try {
            await getUsuarioFarebase(email, senha);

            console.log('Acesso permitido!');
            window.location.href = '/dashboard';
        } catch (error) {
            console.log('Acesso Negado!');
            console.error('Erro no login:', error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Container
            component="main"
            maxWidth="xs"
            className="d-flex justify-content-center align-items-center vh-100"
        >
            {open && (
                <SelecionarTipoUsuario
                    open={open}
                    handleClose={handleClose}
                    setTipoUsuario={setTipoUsuario}
                />
            )}
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
                <Box component="form" sx={{ mt: 1, width: '100%' }} onSubmit={handleSubmit}>
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
                        onChange={(e) => setEmail(e.target.value)}
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
                        onChange={(e) => setSenha(e.target.value)}
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
                            ':hover': { backgroundColor: 'green' },
                            textTransform: 'none',
                        }}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Carregando...' : 'Logar'}
                    </Button>

                    {/* Additional Links */}
                    <div className="text-center mt-3">
                        <Typography variant="body2" color="textSecondary">
                            Não tem uma conta?{' '}
                            <span
                                className="text-primary cursor-pointer"
                                onClick={() => verificarTipoUsuario(tipoUsuario)}
                            >
                                Cadastre-se
                            </span>
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            <span
                                className="text-primary cursor-pointer"
                                onClick={() => verificarTipoUsuario(tipoUsuario)}
                            >
                                Esqueceu a senha?
                            </span>
                        </Typography>
                    </div>
                </Box>
            </Box>
        </Container>
    );
};
