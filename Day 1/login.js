import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, TextField, Typography, Container, Paper, Alert } from '@mui/material';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!formData.email || !formData.password) {
      setError('Please enter both email and password.');
      return;
    }

    
    console.log('Form submitted:', formData);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 25 }}>
        <Typography component="h1" variant="h5" mb={3} sx={{ fontSize: 24, fontWeight: 'bold', color: '#333' }}>
          Login
        </Typography>
        
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

        <form onSubmit={handleSubmit} sx={{ width: '100%', marginTop: 1 }}>
          <TextField
            fullWidth
            margin="normal"
            label="Username/Email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            error={error !== ''}
            helperText={error}
            InputProps={{ placeholder: error ? 'Email/Username (required)' : '' }}
            InputLabelProps={{ style: { color: error ? '#ff0000' : '#333' } }}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            type="password"
            required
            value={formData.password}
            onChange={handleChange}
            error={error !== ''}
            helperText={error}
            InputProps={{ placeholder: error ? 'Password (required)' : '' }}
            InputLabelProps={{ style: { color: error ? '#ff0000' : '#333' } }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: '#359704', color: '#fff', '&:hover': { backgroundColor: '#2b7c00' } }}
          >
            Login
          </Button>
        </form>
        <Typography variant="body2" color="textSecondary" sx={{ marginTop: 2 }}>
          Forgot Password?{' '}
          <RouterLink to="/register" style={{ color: '#359704', cursor: 'pointer', textDecoration: 'none', fontWeight: 'bold' }}>
            Sign Up
          </RouterLink>
        </Typography>
      </Paper>
    </Container>
  );
}

export default Login;
