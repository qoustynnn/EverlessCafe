import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/" onClick={toggle}>Home</SidebarLink>
          <SidebarLink to="Menu" onClick={toggle}>Menu</SidebarLink>
          <SidebarLink to="Order"onClick={toggle}>Order Online</SidebarLink>
          <SidebarLink to="Contact" onClick={toggle}>Contact</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
