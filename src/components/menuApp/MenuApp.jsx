import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { useDataContext } from '../../context/ContextApp';
import { useNavigate } from 'react-router-dom'; // Importa o hook useNavigate
import { Modal } from '@mui/material';
import './MenuApp.css';


export const MenuApp = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const { handleLogout } = useDataContext();
    const navigate = useNavigate();
    const open = Boolean(anchorEl);
    const [showModal, setShowModal] = useState(false);
    const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
    const handleMenuClose = () => setAnchorEl(null);

    const menuItems = ['Dashboard', 'Professores', 'Cursos', 'Alunos', 'Configurações', 'Sair'];



    const handleMenuClick = (item) => {
        if (item === 'Sair') {
            setShowModal(true);
        } else {
            navigate(`/${item.toLowerCase()}`);
        }
    };

    const handleLogoutConfirmed = () => {
        handleLogout(); // Realiza o logout
        navigate("/"); // Redireciona para a página de login
        setShowModal(false); // Fecha o modal após o logout
    };

    // Atualiza largura da janela
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <AppBar position="static" sx={{ background: '#1976d2' }}>

            {showModal && (
                <Modal
                    open={showModal}
                    onClose={() => setShowModal(false)}
                    aria-labelledby="modalSairLabel"
                    aria-describedby="modalSairDescription"
                >
                    <div className="modal-overlay">
                        <div className="modal-container">
                            <div className="modal-header">
                                <h5 id="modalSairLabel" className="modal-title">Sair</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setShowModal(false)}
                                    aria-label="Close"
                                />
                            </div>
                            <div id="modalSairDescription" className="modal-body">
                                Tem certeza que deseja sair?
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={() => setShowModal(false)}
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={handleLogoutConfirmed}
                                >
                                    Sair da Conta
                                </button>
                            </div>
                        </div>
                    </div>
                </Modal>
            )}


            <Toolbar>
                {/* Logotipo */}
                <div className="logo-container">
                    <img src="/logo-quebra-cabeça.svg" alt="Logotipo" className="logo" />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/dashboard"
                        color='grey.50'
                        sx={{
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                            display: 'flex',
                            fontSize: {
                                xs: '1rem',
                                sm: '1.25rem',
                                md: '1.5rem',
                            },
                            whiteSpace: {
                                xs: 'nowrap',
                                sm: 'normal',
                            },
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                        }}
                    >
                        Expand Academy
                    </Typography>
                </div>


                {/* Menu Mobile ou Desktop */}
                {windowWidth < 900 ? (
                    <>
                        {/* Ícone para Mobile */}
                        <IconButton
                            size="large"
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            sx={{ ml: 'auto' }}
                            onClick={handleMenuOpen}
                        >
                            <MenuIcon />
                        </IconButton>

                        {/* Menu Suspenso no Mobile */}
                        <Menu
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleMenuClose}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {menuItems.map((item) => (
                                <MenuItem key={item} onClick={() => handleMenuClick(item)}>
                                    <Typography
                                        component="a"
                                        href={item === 'Sair' ? '#' : `/${item.toLowerCase()}`} // Condiciona a navegação
                                        textAlign="center"
                                        // sx={linkStyles}
                                        className='menu-item-typography'
                                    >
                                        {item}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </>
                ) : (
                    // Menu Desktop
                    <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end', }}>
                        <ul style={{ display: 'flex', listStyleType: 'none', margin: 0, padding: 0, alignItems: 'center', gap: '1rem' }}>
                            {menuItems.map((item) => (
                                <li key={item} style={{ margin: 0, padding: 0 }} onClick={() => handleMenuClick(item)}>
                                    <p className='menu-item-p'
                                        onMouseEnter={(e) => {
                                            e.target.style.color = '#1abc9c';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.color = 'white';
                                            e.target.style.textShadow = 'none';
                                        }}
                                    >
                                        {item}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </Toolbar>
        </AppBar>
    );
};
