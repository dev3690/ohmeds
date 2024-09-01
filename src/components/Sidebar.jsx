import React from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, Divider, Box } from '@mui/material';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Sidebar = ({ drawerOpen, toggleDrawer }) => {
  const menuItems = ['Medicines', 'Personal Care', 'Health Conditions', 'Vitamins & Supplements', 'Diabetes Care', 'Healthcare Devices', 'Health Article'];

  return (
    <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          <ListItem button>
            <ListItemIcon>
              <LocationOnIcon />
            </ListItemIcon>
            <ListItemText primary="400079, Mumbai" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <FaUser />
            </ListItemIcon>
            <ListItemText primary="Login/Signup" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <FaShoppingCart />
            </ListItemIcon>
            <ListItemText primary="Cart" />
          </ListItem>
        </List>
        <Divider />
        <List>
          {menuItems.map((text) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
