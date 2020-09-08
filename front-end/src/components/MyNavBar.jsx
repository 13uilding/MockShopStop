import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import { Cart4 } from 'react-bootstrap-icons';
import MySearchBar from './MySearchBar';

const MyNavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">MockShop</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>

          <MySearchBar></MySearchBar>

        </Collapse>
        <NavbarBrand href="/checkout"><Cart4 /></NavbarBrand>
      </Navbar>
    </div>
  );
}

export default MyNavBar;