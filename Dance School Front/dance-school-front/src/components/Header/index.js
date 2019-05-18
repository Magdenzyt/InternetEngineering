import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.css';
import logoProject from '../../assets/Logo_biale.png';
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
  DropdownItem } from 'reactstrap';


class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  render() {
    return (
      <div>
        <Navbar className = "navbar navbar-dark bg-dark" light expand="md" >
          <NavbarBrand href="/"><img src={logoProject} height = "70" alt="" /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto h5" navbar>
              <NavItem>
                <NavLink href="http://localhost:3000/#MainAnnouncements" >Announcements</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/courses/" >Courses</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="http://localhost:3000/#Contact" >Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/login/" >Profile</NavLink>
              </NavItem>
              
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
