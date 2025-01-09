import React from 'react'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export const BemVindo = () => {

  const handleClick = () => {
    console.log('Clicou no botao')
    window.location.href = '/login'
  }

  return (
    <div className="container">
      <h1>Bem-vindo ao ExpandAcademy</h1>
      <Button
        variant="contained"
        endIcon={<SendIcon />}
        onClick={handleClick}>
        Entrar
      </Button>
    </div>
  )
}
