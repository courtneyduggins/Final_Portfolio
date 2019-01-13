import React from 'react';
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


const myName = {
  color: 'rgb(0, 179, 143)',
  fontweight: 'bold',
  fontFamily: 'Satisfy, cursive',
  fontsize: 'large'
 
}

const linkStyle = {
  color: 'rgb(255, 80, 80)'
}

const otherLinks = {
  color: 'rgb(89, 89, 89)'
}

export default class NavigationBar extends React.Component {
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
        <Navbar color="light" light expand="md">
          <NavbarBrand style={myName} href="/">Courtney Duggins</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/" style={linkStyle}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap" style={otherLinks}>Contact</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
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
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}