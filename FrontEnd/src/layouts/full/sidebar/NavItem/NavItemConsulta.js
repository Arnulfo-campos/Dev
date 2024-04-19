import React from 'react';
import PropTypes from 'prop-types';
import { ListItemIcon, ListItem, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';

const NavItemConsulta = ({ item }) => {
  const Icon = item.icon;
  const itemIcon = <Icon stroke={1.5} size="1.3rem" />;
  return (
    <ListItem button component={NavLink} to={item.href}>
      <ListItemIcon>{itemIcon}</ListItemIcon>
      <ListItemText primary={item.title} />
    </ListItem>
  );
};

NavItemConsulta.propTypes = {
  item: PropTypes.object.isRequired,
};

export default NavItemConsulta;
