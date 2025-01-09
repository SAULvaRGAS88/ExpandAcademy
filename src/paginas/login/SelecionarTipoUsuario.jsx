import React from 'react';
import { Button, Box, Typography, Modal } from '@mui/material';

const tipoUsuario = {
    aluno: 'Aluno',
    professor: 'Professor',
    administrador: 'Administrador',
};

const SelecionarTipoUsuario = ({ open, handleClose, setTipoUsuario }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    borderRadius: 2,
                    p: 4,
                }}
            >
                {/* Modal Header */}
                <Typography id="modal-title" variant="h6" component="h2" gutterBottom>
                    Selecione o tipo de usuário
                </Typography>

                {/* Modal Body */}
                <Box
                    id="modal-description"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        mt: 2,
                    }}
                >
                    <Button
                        variant="contained"
                        fullWidth
                        onClick={() => {
                            console.log('Clicou em aluno', tipoUsuario.aluno);
                            setTipoUsuario(tipoUsuario.aluno);
                            handleClose();
                        }}
                    >
                        Aluno
                    </Button>
                    <Button
                        variant="contained"
                        fullWidth
                        onClick={() => {
                            console.log('Clicou em professor', tipoUsuario.professor);
                            setTipoUsuario(tipoUsuario.professor);
                            handleClose();
                        }}
                    >
                        Professor
                    </Button>
                    <Button
                        variant="contained"
                        fullWidth
                        onClick={() => {
                            console.log('Clicou em administrador', tipoUsuario.administrador);
                            setTipoUsuario(tipoUsuario.administrador);
                            handleClose();
                        }}
                    >
                        Administrador
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default SelecionarTipoUsuario;
