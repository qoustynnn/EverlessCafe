import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
    position: sticky;
    top:0px;
    background-color: rgba(255, 255, 255, 0.616);
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    z-index: 10;

    @media screen and (max-width: 760px){
        background-color:transparent;
    }
    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
`
export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 760px){
        display:block;
        position: fixed;
        top: 8px;
        right:20px;
        font-size: 2.4rem;
        cursor:pointer;
        color: #596847;
        filter:drop-shadow(0 5px 0 #fff);
    }
`
export const NavMenu = styled.ul`
    display:flex;
    align-items: center;
    list-style:none;
    text-align: center;

    @media screen and (max-width: 760px){
        display: none;
    }
`
export const NavItem = styled.li`
    height: 60px;
`
export const NavLinks = styled(Link)`
    color: #596847;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:hover {
      color: #596847a4;
    }
`