import React from 'react';
import { Button, Box, Typography, Modal } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

const tipoUsuario = {
    aluno: 'Aluno',
    professor: 'Professor',
    administrador: 'Administrador',
};

const SelecionarTipoUsuario = ({ open, handleClose, setTipoUsuario }) => {
    return (
        <Modal
            open={open}
            onClose={(reason) => {
                if (reason === 'backdropClick') {
                    return;
                }
            }}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: { xs: 300, sm: 400 },
                    bgcolor: 'background.paper',
                    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.25)',
                    borderRadius: 1,
                    p: 4,
                    border: 'none',
                }}
            >
                {/* Modal Header */}
                <Typography id="modal-title" variant="h6" component="h2" gutterBottom align="center">
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
                            console.log('Clicou', tipoUsuario.aluno);
                            setTipoUsuario(tipoUsuario.aluno);
                            handleClose();
                        }}
                        sx={{ textTransform: 'none' }}
                        endIcon={<LocalLibraryIcon />}
                    >
                        Aluno
                    </Button>
                    <Button
                        variant="contained"
                        fullWidth
                        onClick={() => {
                            console.log('Clicou', tipoUsuario.professor);
                            setTipoUsuario(tipoUsuario.professor);
                            handleClose();
                        }}
                        sx={{ textTransform: 'none' }}
                        endIcon={<CastForEducationIcon />}
                    >
                        Professor
                    </Button>
                    <Button
                        variant="contained"
                        fullWidth
                        onClick={() => {
                            console.log('Clicou', tipoUsuario.administrador);
                            setTipoUsuario(tipoUsuario.administrador);
                            handleClose();
                        }}
                        sx={{ textTransform: 'none' }}
                        endIcon={<SettingsIcon />}
                    >
                        Administrador
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default SelecionarTipoUsuario;
