import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const SideNav = () => {
  const navItems = [
    { text: 'Sent', path: '/sent' },
    { text: 'Received', path: '/received' },
    { text: 'Accepted', path: '/accepted' },
    { text: 'Rejected', path: '/rejected' },
    { text: 'Shortlisted', path: '/shortlisted' },
    { text: 'Shortlisted by', path: '/shortlisted-by' },
    { text: 'Contacted', path: '/contacted' },
    { text: 'Messages', path: '/messages' },
  ];

  return (
    <List>
      {navItems.map((item) => (
        <ListItem button component={Link} to={item.path} key={item.text}>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );
};

export default SideNav;
