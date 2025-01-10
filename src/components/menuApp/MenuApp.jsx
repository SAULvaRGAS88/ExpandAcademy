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

    const menuItems = ['Dashboard', 'About', 'Services', 'Contact'];

    // Atualiza largura da janela
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <AppBar position="static" sx={{ background: '#1976d2' }}>
            <Container maxWidth="lg">
                <Toolbar>
                    {/* Logotipo */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/dashboard"
                        sx={{
                            mr: 2,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                            display: 'flex',
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
                                        <Typography textAlign="center">{item}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </>
                    ) : (
                        // Menu Desktop
                        <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
                            {menuItems.map((item) => (
                                <Button
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    sx={{
                                        my: 2,
                                        color: 'white',
                                        display: 'inline-flex',
                                    }}
                                >
                                    {item}
                                </Button>
                            ))}
                        </div>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
};
