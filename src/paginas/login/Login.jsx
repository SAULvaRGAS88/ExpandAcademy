import React from 'react';
import { TextField, Button, Typography, Container, Box, CssBaseline } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Login = () => {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#fff',
          padding: 4,
          borderRadius: 2,
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        }}
        className="shadow"
      >
        <Typography component="h1" variant="h5" gutterBottom>
          Login
        </Typography>

        <Box component="form" sx={{ mt: 1 }}>
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
              Don't have an account? <a href="/register">Sign Up</a>
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
              <a href="/forgot-password">Forgot password?</a>
            </Typography>
          </div>
        </Box>
      </Box>
    </Container>
  );
};
