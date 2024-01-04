import React from 'react';
import { TextField, Button, Box, Typography, Paper } from '@mui/material';

function Registration() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '1rem',
      }}
    >
      <Paper elevation={3} style={{ padding: '1.5rem', width: '300px' }}>
        <Typography variant="h4" gutterBottom>
          SIGN-UP
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="User Name"
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />
          <TextField
            label="Date of Birth"
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />
          <TextField
            type="email"
            label="Email"
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />
          <TextField
            type="tel"
            label="Phone Number"
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />
          <TextField
            type="password"
            label="Password"
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />
          <TextField
            type="password"
            label="Confirm Password"
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: '1rem' }}
          >
            Register
          </Button>
        </form>
      </Paper>
    </Box>
  );
}

export default Registration;
