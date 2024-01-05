import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { Box, Button, TextField, Typography, Container, Paper } from '@mui/material';

function Login() {
  const { handleSubmit, control, setError, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Your login logic here
    console.log('Form data:', data);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 25 }}>
        <Typography component="h1" variant="h5" mb={3}>
          Login
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Invalid email address',
              },
            }}
            render={({ field }) => (
              <>
                <TextField
                  {...field}
                  fullWidth
                  margin="normal"
                  label="Username/Email"
                  type="email"
                  required
                  error={Boolean(errors.email)}
                />
                {errors.email && (
                  <Typography variant="body2" color="error">
                    {errors.email.message}
                  </Typography>
                )}
              </>
            )}
          />

          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters',
              },
            }}
            render={({ field }) => (
              <>
                <TextField
                  {...field}
                  fullWidth
                  margin="normal"
                  label="Password"
                  type="password"
                  required
                  error={Boolean(errors.password)}
                />
                {errors.password && (
                  <Typography variant="body2" color="error">
                    {errors.password.message}
                  </Typography>
                )}
              </>
            )}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
        </form>
        <Typography variant="body2" color="textSecondary">
          Forgot Password?{' '}
          <RouterLink to="/register" style={{ color: '#359704', cursor: 'pointer' }}>
            Sign Up
          </RouterLink>
        </Typography>
      </Paper>
    </Container>
  );
}

export default Login;
