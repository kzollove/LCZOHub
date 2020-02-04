import React, { Component, useState } from 'react'; 
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

  const N = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">LCZO Hub</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/site-map/">Sites</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/sensors/">Sensors</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/sampling/">Sampling</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Logs
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink href="/hobolog/">HOBOs</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/sondelog/">Sondes</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/campbell/">CR1000</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavbarText>Simple Text</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
  
  export default N;