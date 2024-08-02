

// --------------------------------------------------------------------------------------------------------------------

import React, { useState, useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import { Box, Button, Container, Grid, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import logo from '../assets/ohmeds-logo.jpg';
import AuthContext from './AuthContext';  // Assuming you have AuthContext for user management

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorElMedicine, setAnchorElMedicine] = useState(null);
  const [anchorElVitamins, setAnchorElVitamins] = useState(null);
  const navigate = useNavigate();
  const isMobileOrTablet = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const handleOpenMedicineMenu = (event) => {
    setAnchorElMedicine(event.currentTarget);
  };

  const handleCloseMedicineMenu = () => {
    setAnchorElMedicine(null);
  };

  const handleOpenVitaminsMenu = (event) => {
    setAnchorElVitamins(event.currentTarget);
  };

  const handleCloseVitaminsMenu = () => {
    setAnchorElVitamins(null);
  };

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

  return (
    <>
      <AppBar position="fixed" sx={{ borderRadius: 3, mb: 4 }} color="default" elevation={3}>
        <Container maxWidth="false">
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {isMobileOrTablet && (
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={toggleDrawer(true)}
                >
                  <MenuIcon />
                </IconButton>
              )}
              <img
                src={logo}
                alt="OH MEDS"
                style={{ width: 50, height: 'auto', marginRight: 10, cursor: 'pointer' }}
                onClick={handleLogoClick}
              />
              <Typography variant="h6" color="inherit" sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}>
                OHMEDS
              </Typography>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column', alignItems: 'left', marginLeft: 5 }}>
              <Typography variant="h5" color="inherit" sx={{ marginBottom: 1 }}>
                Hello {user ? user.name : 'Guest'}
              </Typography>
              <Grid container spacing={4} direction="row">
                <Grid item>
                  <Button
                    color="inherit"
                    onMouseEnter={handleOpenMedicineMenu}
                    onMouseLeave={handleCloseMedicineMenu}
                  >
                    Medicine
                  </Button>
                  <Menu
                    anchorEl={anchorElMedicine}
                    open={Boolean(anchorElMedicine)}
                    onClose={handleCloseMedicineMenu}
                    disablePortal
                  >
                    <Grid container spacing={1} padding={2}>
                      <Grid item xs={6}>
                        <MenuItem>Category 1</MenuItem>
                        <MenuItem>Category 2</MenuItem>
                        <MenuItem>Category 3</MenuItem>
                        <MenuItem>Category 4</MenuItem>
                        <MenuItem>Category 5</MenuItem>
                      </Grid>
                      <Grid item xs={6}>
                        <MenuItem>Category 6</MenuItem>
                        <MenuItem>Category 7</MenuItem>
                        <MenuItem>Category 8</MenuItem>
                        <MenuItem>Category 9</MenuItem>
                        <MenuItem>Category 10</MenuItem>
                      </Grid>
                    </Grid>
                  </Menu>
                </Grid>
                <Grid item>
                  <Button
                    color="inherit"
                    onMouseEnter={handleOpenVitaminsMenu}
                    onMouseLeave={handleCloseVitaminsMenu}
                  >
                    Vitamins & Minerals
                  </Button>
                  <Menu
                    anchorEl={anchorElVitamins}
                    open={Boolean(anchorElVitamins)}
                    onClose={handleCloseVitaminsMenu}
                  >
                    <Grid container spacing={1} padding={2}>
                      <Grid item xs={4}>
                        <MenuItem>Category 1</MenuItem>
                        <MenuItem>Category 2</MenuItem>
                        <MenuItem>Category 3</MenuItem>
                        <MenuItem>Category 4</MenuItem>
                        <MenuItem>Category 5</MenuItem>
                      </Grid>
                      <Grid item xs={4}>
                        <MenuItem>Category 6</MenuItem>
                        <MenuItem>Category 7</MenuItem>
                        <MenuItem>Category 8</MenuItem>
                        <MenuItem>Category 9</MenuItem>
                        <MenuItem>Category 10</MenuItem>
                      </Grid>
                      <Grid item xs={4}>
                        <MenuItem>Category 11</MenuItem>
                        <MenuItem>Category 12</MenuItem>
                        <MenuItem>Category 13</MenuItem>
                        <MenuItem>Category 14</MenuItem>
                        <MenuItem>Category 15</MenuItem>
                      </Grid>
                    </Grid>
                  </Menu>
                </Grid>
                <Grid item>
                  <Button color="inherit">Healthcare devices</Button>
                </Grid>
                <Grid item>
                  <Button color="inherit">Offers</Button>
                </Grid>
                <Grid item>
                  <Button color="inherit">About Us</Button>
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginLeft: 'auto' }}>
              {user ? (
                <>
                  <Button color="inherit" onClick={handleProfileClick}>
                    Profile
                  </Button>
                  <Button color="inherit" onClick={logout}>
                    Logout
                  </Button>
                </>
              ) : (
                <IconButton color="inherit" onClick={() => navigate('/login')}>
                  <FaUser /> Login
                </IconButton>
              )}
              <IconButton color="inherit">
                <FaShoppingCart /> Cart
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Sidebar drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default Header;
