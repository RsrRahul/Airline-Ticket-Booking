import React, { useState } from 'react';
import { TextField, Checkbox, Button, FormControlLabel, Paper } from '@mui/material';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    sendCopy: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form Data:', formData);
  };

  return (
    <Paper
      elevation={3}
      style={{
        width: '100%',
        maxWidth: '300px',
        padding: '20px',
        textAlign: 'center',
        backgroundColor: '#f4f4f4', 
        borderRadius: '10px', 
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
        margin: '20px auto', 
      }}
    >
      <h2>Contact</h2>

      <form onSubmit={handleSubmit}>
        <TextField
          label='Name'
          name='name'
          value={formData.name}
          onChange={handleChange}
          fullWidth
          required
          margin='normal'
        />

        <TextField
          type='email'
          label='Email address'
          name='email'
          value={formData.email}
          onChange={handleChange}
          fullWidth
          required
          margin='normal'
        />

        <TextField
          label='Subject'
          name='subject'
          value={formData.subject}
          onChange={handleChange}
          fullWidth
          required
          margin='normal'
        />

        <TextField
          label='Message'
          name='message'
          value={formData.message}
          onChange={handleChange}
          fullWidth
          multiline
          rows={4}
          required
          margin='normal'
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={formData.sendCopy}
              onChange={handleChange}
              name='sendCopy'
              color='primary'
            />
          }
          label='Send me copy'
        />

        <Button
          type='submit'
          variant='contained'
          color='primary'
          fullWidth
          style={{
            marginTop: '20px',
            backgroundColor: '#4caf50', 
          }}
        >
          Send
        </Button>
      </form>
    </Paper>
  );
}
export default Contact;