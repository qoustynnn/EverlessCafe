import React, { Component } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Logo } from "../shared/Logo";
import "../Navbar.css";
import { Fade } from "react-animation-components";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
  }
  toggleNav() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <React.Fragment>
        <div
          fluid
          className="mb-0 d-flex justify-content-center jumbotron flex-column align-items-center"
        >
          <Fade in>
            <a href="/">
              <img
                src={Logo.img}
                className="img-fluid"
                height={250}
                width={250}
              ></img>
            </a>
          </Fade>
          <h6 className="mt-2 text-apart">everless.co</h6>
        </div>
        <Sidebar isOpen={this.state.isOpen} toggle={this.toggleNav} />
        <Navbar toggle={this.toggleNav} />

        {/* <Navbar light sticky="top" expand="md" className="shadow-sm py-4">
          <NavbarToggler onClick={this.toggleNav} />
          <Collapse
            isOpen={this.state.isNavOpen}
            navbar
            className="justify-content-center"
          >
            <Nav navbar>
              <NavItem>
                <NavLink className="nav-link" to="/home">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/Order">
                  Order Online
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/Menu">
                  Menu
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/Contact">
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar> */}
      </React.Fragment>
    );
  }
}

export default Header;
