import React, { useState } from 'react';
import { TextField, Button, IconButton, Link } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useAuth } from '../components/AuthContext';
import '../styles/Registration.css';
import product1 from '../assets/product-images/product1.jpg';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const { register } = useAuth();  // You will implement this in AuthContext
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [fullname, setFullname] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = () => {
        // Basic validation
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        register({ username, email, fullname, password });
    };

    const handlealreadyhaveanaccount = () => {
        navigate('/login');
    };
    
    
    return (
        <div className="registration-container">
            <div className="registration-image">
                <img src={product1} alt="Registration" />
            </div>
            <div className="registration-form">
                <h2>Create an Account</h2>
                <p>Enter your details to register</p>
                <TextField
                    label="Username"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    label="Full Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
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
                <TextField
                    label="Confirm Password"
                    variant="outlined"
                    type="password"
                    fullWidth
                    margin="normal"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    InputProps={{
                        endAdornment: <LockOutlinedIcon />,
                    }}
                />
                <Button variant="contained" color="primary" fullWidth onClick={handleRegister}>
                    Register
                </Button>
                <div className="social-register">
                    <Link to="/login" onClick={handlealreadyhaveanaccount} >Already have an account?</Link>

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

export default Registration;
