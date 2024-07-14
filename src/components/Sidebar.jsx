
import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Box,
  TextField,
  InputAdornment,
  Collapse,
  ListItemButton,
  Typography,
  useMediaQuery,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const Sidebar = ({ drawerOpen, toggleDrawer }) => {
  const [openMenus, setOpenMenus] = useState([]);
  const isMobileSize = useMediaQuery('(max-width: 600px)');

  const handleMenuClick = (index) => {
    const currentIndex = openMenus.indexOf(index);
    const newOpenMenus = [...openMenus];
    if (currentIndex === -1) {
      newOpenMenus.push(index);
    } else {
      newOpenMenus.splice(currentIndex, 1);
    }
    setOpenMenus(newOpenMenus);
  };

  const menuItems = [
    { title: 'Home' },
    {
      title: 'Shop',
      subitems: ['Products', 'Categories', 'Cart'],
    },
    { title: 'Vendors' },
    {
      title: 'Mega Menu',
      subitems: ['Feature 1', 'Feature 2', 'Feature 3'],
    },
    { title: 'Blog' },
    { title: 'Pages' },
    { title: 'Language' },
    { title: 'Our location' },
    { title: 'Log In / Sign Up' },
    { title: '(+01) - 2345 - 6789' },
  ];

  return (
    <>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{ width: '300px', flexShrink: 0 }}
        PaperProps={{
          sx: { width: { xs: '80%', sm: '300px' } },
        }}
      >
        <Box sx={{ padding: 2 }}>
          <img
            src="/path/to/logo.png"
            alt="Logo"
            style={{ width: '100%', marginBottom: '20px' }}
          />
          <TextField
            variant="outlined"
            fullWidth
            placeholder="Search for items..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{ marginBottom: 2 }}
          />
          <List>
            {menuItems.map((item, index) => (
              <React.Fragment key={index}>
                {item.subitems? (
                  <>
                    <ListItemButton onClick={() => handleMenuClick(index)}>
                      <ListItemText primary={item.title} />
                      {openMenus.includes(index)? (
                        <ExpandLessIcon />
                      ) : (
                        <ExpandMoreIcon />
                      )}
                    </ListItemButton>
                    <Collapse
                      in={openMenus.includes(index)}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List component="div" disablePadding>
                        {item.subitems.map((subitem, subIndex) => (
                          <ListItem button key={subIndex} sx={{ paddingLeft: 4 }}>
                            <ListItemText primary={subitem} />
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                  </>
                ) : (
                  <ListItem button>
                    <ListItemText primary={item.title} />
                  </ListItem>
                )}
                {index < menuItems.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </Box>
      </Drawer>
      {isMobileSize && (
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
        >
          {/* <MenuIcon /> */}
        </IconButton>
      )}
    </>
  );  
};

export default Sidebar;
  