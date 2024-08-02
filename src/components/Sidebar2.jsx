import React from 'react';
import { List, ListItem, ListItemText, Divider } from '@mui/material';

const Sidebar = () => {
  const sections = [
    'Account Information',
    'My Wallet',
    'My Wishlist',
    'Offers',
    'Netmeds First',
    'Delivery Addresses',
    'My Prescription',
  ];

  return (
    <List component="nav">
      {sections.map((section, index) => (
        <React.Fragment key={index}>
          <ListItem button>
            <ListItemText primary={section} />
          </ListItem>
          {index < sections.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </List>
  );
};

export default Sidebar;
