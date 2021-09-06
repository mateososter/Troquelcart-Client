import React from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

export function SideBar() {
  return (
    <ProSidebar>
      <Menu iconShape="square">
        <MenuItem>TROQUELCART</MenuItem>
        <MenuItem>Pegadores</MenuItem>
        <MenuItem>Clientes</MenuItem>
        <MenuItem>Productos</MenuItem>
      </Menu>
    </ProSidebar>
  );
}
