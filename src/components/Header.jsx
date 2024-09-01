// --------------------------------------------------------------------------------------------------------------------

import React, { useState, useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { FaUser, FaShoppingCart, FaSignOutAlt } from 'react-icons/fa';
import { Box, Button, Container, Grid, useMediaQuery, InputBase } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import logo from '../assets/ohmeds-logo.jpg';
import AuthContext from './AuthContext';  // Assuming you have AuthContext for user management
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const isMobileOrTablet = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleProfileClick = () => {
    navigate('/profile');
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  const handleLogout = () => {
    logout(); // Call the logout function from AuthContext
    navigate('/login'); // Redirect to login page
  };

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: 'white', color: 'black', boxShadow: 'none', borderBottom: '1px solid #e0e0e0' }}>
        <Container maxWidth="xl">
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {isMobileOrTablet && (
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={toggleDrawer(true)}
                  sx={{ mr: 1 }}
                >
                  <MenuIcon />
                </IconButton>
              )}
              <img
                src={logo}
                alt="TrueMeds"
                style={{ width: 80, height: 'auto', cursor: 'pointer' }}
                onClick={handleLogoClick}
              />
            </Box>

            {!isMobileOrTablet && (
              <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
                {/* <Typography variant="body2" sx={{ mr: 1 }}>Welcome, {user ? user.name : 'Guest'}!</Typography> */}
                <Typography variant="h4" onClick={handleLogoClick} sx={{ cursor: 'pointer', fontWeight: 'bold', color: '#0066cc' }}>Medskwik</Typography>
              </Box>
            )}

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton color="inherit" onClick={handleProfileClick}>
                <FaUser />
              </IconButton>
              <Typography variant="body2" sx={{ mr: 2, cursor: 'pointer' }} onClick={handleProfileClick}>Dev</Typography>

              <IconButton color="inherit" onClick={handleCartClick}>
                <FaShoppingCart />
              </IconButton>
              <Typography variant="body2" sx={{ cursor: 'pointer' }} onClick={handleCartClick}>Cart</Typography>
              {!isMobileOrTablet && 
               ( <><IconButton color="inherit" sx={{ ml: 2 }} onClick={handleLogout}>
                  <FaSignOutAlt />
                </IconButton>
              <Typography variant="body2" onClick={handleLogout} sx={{ cursor: 'pointer' }}>Logout</Typography>
              </>
              )}

            </Box>
          </Toolbar>

          <Box sx={{ py: 1 }}>
            <Box sx={{ position: 'relative', backgroundColor: '#f5f5f5', borderRadius: 2, width: '100%' }}>
              <InputBase
                placeholder="Search for TELMA"
                sx={{ ml: 2, flex: 1, width: '100%', py: 1 }}
              />
              <IconButton type="submit" sx={{ p: '10px', position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)' }}>
                <SearchIcon />
              </IconButton>
            </Box>
          </Box>

          {!isMobileOrTablet && (
            <Box sx={{ borderTop: '1px solid #e0e0e0', py: 1 }}>
              <Grid container spacing={2} justifyContent="center">
                {['Medicines', 'Personal Care', 'Health Conditions', 'Vitamins & Supplements', 'Diabetes Care', 'Healthcare Devices', 'Health Article'].map((item) => (
                  <Grid item key={item}>
                    <Button color="inherit" sx={{ textTransform: 'none' }}>
                      {item}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
        </Container>
      </AppBar>
      <Sidebar drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default Header;
