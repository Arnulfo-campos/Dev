import React from 'react';
import PropTypes from 'prop-types';
import { ListSubheader, List } from '@mui/material';
import NavItemConsulta from '../NavItem/NavItemConsulta';

const NavGroupConsulta = ({ item }) => {
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          {item.subheader}
        </ListSubheader>
      }
    >
      {item.items.map((subItem) => (
        <NavItemConsulta item={subItem} key={subItem.id} />
      ))}
    </List>
  );
};

NavGroupConsulta.propTypes = {
  item: PropTypes.object.isRequired,
};

export default NavGroupConsulta;
