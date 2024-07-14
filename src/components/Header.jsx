


import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import { Box, Button, Container, Grid, useMediaQuery } from '@mui/material';
import Sidebar from './Sidebar';
import logo from '../assets/ohmeds-logo.jpg'

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorElMedicine, setAnchorElMedicine] = useState(null);
  const [anchorElVitamins, setAnchorElVitamins] = useState(null);

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

  return (
    <>
      <AppBar position="static" color="default" elevation={2}>
        <Container maxWidth="lg">
          <Toolbar>
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
              style={{ width: 50, height: 'auto', marginRight: 10 }}
            />
            <Typography variant="h6" color="inherit" sx={{ flexGrow: 1 }}>
              OH MEDS
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
              <Typography variant="h6" color="inherit">
                Hello Charles
              </Typography>
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
                MenuListProps={{ onMouseLeave: handleCloseMedicineMenu }}
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
                MenuListProps={{ onMouseLeave: handleCloseVitaminsMenu }}
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
              <Button color="inherit">Healthcare devices</Button>
              <Button color="inherit">Offers</Button>
              <Button color="inherit">About Us</Button>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton color="inherit">
                <FaUser />
              </IconButton>
              <IconButton color="inherit">
                <FaShoppingCart />
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