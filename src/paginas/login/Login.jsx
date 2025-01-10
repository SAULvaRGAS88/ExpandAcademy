import React, { useState } from 'react';
import {
    TextField,
    Button,
    Typography,
    Container,
    Box,
    CssBaseline,
    Snackbar,
    Alert,
} from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelecionarTipoUsuario from './SelecionarTipoUsuario';
import './Login.css';
import { getUsuarioFarebase } from '../../services/conexoes/LogarUsuarios';
import { useDataContext } from '../../context/ContextApp';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [tipoUsuario, setTipoUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [open, setOpen] = useState(true);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');
    const navigate = useNavigate();
    const { updateUsuario } = useDataContext();

    const handleClose = () => setOpen(false);

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') return;
        setSnackbarOpen(false);
    };

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
            setSnackbarMessage('Email e senha são obrigatórios!');
            setSnackbarSeverity('warning');
            setSnackbarOpen(true);
            return;
        }

        setIsLoading(true);
        try {
            const resLogin = await getUsuarioFarebase(email, senha);
            if (!resLogin) {
                setSnackbarMessage('Usuário não encontrado!');
                setSnackbarSeverity('error');
                setSnackbarOpen(true);
                return;
            }

            updateUsuario(resLogin.email);
            setSnackbarMessage('Login realizado com sucesso!');
            setSnackbarSeverity('success');
            setSnackbarOpen(true);
            navigate('/dashboard');
        } catch (error) {
            setSnackbarMessage('Erro ao realizar login!');
            setSnackbarSeverity('error');
            setSnackbarOpen(true);
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

            {/* Snackbar */}
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert
                    onClose={handleSnackbarClose}
                    severity={snackbarSeverity}
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Container>
    );
};
