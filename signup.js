import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import '../assets/style/sign.css'; // Import the CSS file

function SignupForm() {
  const { handleSubmit, control, formState: { errors }, getValues, setError } = useForm();

  const onSubmit = async (data) => {
    try {
      // Make a request to JSON Server to add a new user
      const response = await axios.post('http://localhost:3001/users', data);
      console.log('Registration successful:', response.data);
    } catch (error) {
      console.error('Error during registration:', error);
      setError('email', { type: 'manual', message: 'Email is already registered' });
    }
  };

  return (
    <div className="module">
      <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="userName"
          control={control}
          defaultValue=""
          rules={{ required: 'User Name is required' }}
          render={({ field }) => (
            <div>
              <label>User Name:</label>
              <input {...field} className="input-field" />
              {errors.userName && <p className="error-message">{errors.userName.message}</p>}
            </div>
          )}
        />

        <Controller
          name="dob"
          control={control}
          defaultValue=""
          rules={{ required: 'Date of Birth is required' }}
          render={({ field }) => (
            <div>
              <label>Date of Birth:</label>
              <input {...field} type="date" className="input-field" />
              {errors.dob && <p className="error-message">{errors.dob.message}</p>}
            </div>
          )}
        />

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
            <div>
              <label>Email:</label>
              <input {...field} type="email" className="input-field" />
              {errors.email && <p className="error-message">{errors.email.message}</p>}
            </div>
          )}
        />

        <Controller
          name="phoneNumber"
          control={control}
          defaultValue=""
          rules={{ required: 'Phone Number is required' }}
          render={({ field }) => (
            <div>
              <label>Phone Number:</label>
              <input {...field} type="tel" className="input-field" />
              {errors.phoneNumber && <p className="error-message">{errors.phoneNumber.message}</p>}
            </div>
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
            <div>
              <label>Password:</label>
              <input {...field} type="password" className="input-field" />
              {errors.password && <p className="error-message">{errors.password.message}</p>}
            </div>
          )}
        />

        <Controller
          name="confirmPassword"
          control={control}
          defaultValue=""
          rules={{
            required: 'Confirm Password is required',
            validate: (value) => value === getValues('password') || 'Passwords do not match',
          }}
          render={({ field }) => (
            <div>
              <label>Confirm Password:</label>
              <input {...field} type="password" className="input-field" />
              {errors.confirmPassword && <p className="error-message">{errors.confirmPassword.message}</p>}
            </div>
          )}
        />

        <button type="submit" className="btn btn-primary btn-block">Register</button>
      </form>
    </div>
  );
}

export default SignupForm;
