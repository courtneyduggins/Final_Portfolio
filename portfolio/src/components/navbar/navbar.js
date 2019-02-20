import React from 'react';
import Skills from '../../pages/skills';
import { Link } from 'react-router-dom';
// import './navbar.css';

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


const links = {
  padding: "15px",
  fontSize: "large",
 
}


const navStyle = {
  top: '0px',
  borderBottom: "6px solid lightgrey",
  
}

const linkStyle = {
  color: 'rgb(0, 176, 178)'
}

const otherLinks = {
  color: 'rgb(89, 89, 89)'
}

export default class NavigationBar extends React.Component {

  scrollPage = () => {
      var content = document.getElementById("")
  }
  
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
      <div style={navStyle}>
        <Navbar color="light" light expand="md">
          {/* <NavbarBrand style={myName} href="/">Courtney Duggins</NavbarBrand> */}
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" style={links} navbar>
              <NavItem>
                <NavLink href="/components/" style={linkStyle}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>About</NavLink>
              </NavItem>
              <NavItem>
                
                <NavLink>Skills</NavLink>
                
              </NavItem>
              <NavItem>
                <NavLink>Portfolio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={otherLinks}>Contact</NavLink>
              </NavItem>
              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret style={otherLinks}>
                  Projects 
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Trivia Game
                  </DropdownItem>
                  <DropdownItem>
                    Thirsty?
                  </DropdownItem>
                  <DropdownItem>
                    Travel Application
                  </DropdownItem>
                  <DropdownItem divider />
                  {/* <DropdownItem>
                    Nope Travel App
                  </DropdownItem> */}
                {/* </DropdownMenu> */}
              {/* </UncontrolledDropdown> */} 
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}