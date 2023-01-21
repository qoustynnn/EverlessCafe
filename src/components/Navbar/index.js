import React from 'react'
import { FaBars } from 'react-icons/fa';
import { NavbarContainer, Nav, MobileIcon, NavMenu, 
NavItem, NavLinks } from './NavbarElements';

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                    <NavItem>
                            <NavLinks to="/">
                                Home
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="Menu">
                                Menu
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="Order">
                                Order Online
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="Contact">
                                Contact
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;
