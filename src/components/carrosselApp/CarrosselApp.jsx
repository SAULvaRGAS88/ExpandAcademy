import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Box, Typography, Button } from '@mui/material';

export const CarrosselApp = () => {
    const carouselItems = [
        {
            rota: '/certificados',
            title: 'Certificados',
            description: 'Emita seus Certificados',
            img: "https://plus.unsplash.com/premium_photo-1714397546754-3c1ef1be26e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800&h=400",
        },
        {
            rota: '/cursos',
            title: 'Cursos',
            description: 'Acesse os Cursos Disponiveis',
            img: "https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800&h=400",
        },
        {
            rota: '/alunos',
            title: 'Aluno',
            description: 'Acesse área do Aluno',
            img: "https://images.unsplash.com/photo-1610484826967-09c5720778c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800&h=400",
        },
    ];

    return (
        <Box sx={{ maxWidth: '100%', margin: '0 auto' }}>
            <Carousel>
                {carouselItems ? (
                    carouselItems.map((item, index) => (
                        <Carousel.Item
                            key={index}
                        >
                            <img
                                className="d-block w-100"
                                src={item.img}
                                alt={`Slide ${index + 1}`}
                            />
                            <Carousel.Caption>
                                <Box
                                    sx={{
                                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                        padding: 2,
                                        borderRadius: 2,
                                        top: { xs: 0, sm: 10, md: 20, lg: 30, xl: 40 },
                                    }}
                                >
                                    <Typography variant="h5" color="white" gutterBottom>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body1" color="white" gutterBottom>
                                        {item.description}
                                    </Typography>
                                    <Button variant="contained" color="primary" href={item.rota}>
                                        Saiba mais
                                    </Button>
                                </Box>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))
                ) : (
                    <Box>
                        <Typography>Carregando</Typography>
                    </Box>
                )}
                { }
            </Carousel>
        </Box>
    );
};

export default CarrosselApp;
