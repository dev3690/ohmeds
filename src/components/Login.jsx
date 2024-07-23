


import React, { useState } from 'react';
import { TextField, Button, IconButton } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useAuth } from '../components/AuthContext';
import '../styles/Login.css';
import product1 from '../assets/product-images/product1.jpg';

const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    login(username, password);
  };

  return (
    <div className="login-container">
      <div className="login-image">
        <img src={product1} alt="Login" />
      </div>
      <div className="login-form">
        <h2>Welcome Back!</h2>
        <p>Enter your credentials to login</p>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: <LockOutlinedIcon />,
          }}
        />
        <div className="forgot-password">
          <a href="#">Forgot password?</a>
        </div>
        <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
          Login
        </Button>
        <div className="social-login">
          <p>Don't have an account?</p>
          <p>or</p>
          <div className="social-icons">
            <IconButton>
              <GoogleIcon />
            </IconButton>
            <IconButton>
              <FacebookIcon />
            </IconButton>
            <IconButton>
              <LinkedInIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
    