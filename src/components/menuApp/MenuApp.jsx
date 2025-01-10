import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

export const MenuApp = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const open = Boolean(anchorEl);

    const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
    const handleMenuClose = () => setAnchorEl(null);

    const menuItems = ['Dashboard', 'Cursos', 'Professores', 'Alunos', 'Configurações', 'Sair'];

    // Atualiza largura da janela
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const linkStyles = {
        textDecoration: 'none',
        color: 'inherit',
        fontFamily: 'monospace',
        fontWeight: 700,
        fontSize: {
            xs: '0.75rem',
            sm: '0.875rem',
            md: '1rem',
        },
        transition: 'color 0.3s, text-shadow 0.3s',
        '&:hover': {
            color: '#1abc9c', // Cor de destaque ao passar o mouse
            textShadow: '0 0 5px #1abc9c',
        },
        '&:focus': {
            color: '#ffeb3b',
            outline: 'none',
        },
    };

    return (
        <AppBar position="static" sx={{ background: '#2c3e50' }}>

            <Toolbar>
                {/* Logotipo */}
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/dashboard"
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
                                <MenuItem key={item} onClick={handleMenuClose}>
                                    <Typography
                                        component="a"
                                        href={`/${item.toLowerCase()}`}
                                        textAlign="center"
                                        sx={linkStyles}
                                    >
                                        {item}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </>
                ) : (
                    // Menu Desktop
                    <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
                        <ul style={{ display: 'flex', listStyleType: 'none', margin: 0, padding: 0, gap: '1.5rem' }}>
                            {menuItems.map((item) => (
                                <li key={item} style={{ margin: 0, padding: 0 }}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        style={{
                                            textDecoration: 'none',
                                            color: 'white',
                                            fontFamily: 'monospace',
                                            fontWeight: 700,
                                            fontSize: '1rem',
                                            transition: 'color 0.3s, text-shadow 0.3s',
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.color = '#1abc9c';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.color = 'white';
                                            e.target.style.textShadow = 'none';
                                        }}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                )}
            </Toolbar>

        </AppBar>
    );
};
