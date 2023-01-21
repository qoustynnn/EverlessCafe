import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link } from "react-router-dom";


export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    min-height:101vh;
    overscroll-behavior: contain;
    background: #fff;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`
export const CloseIcon = styled(FaTimes)`
    color: #596847;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`
export const SidebarWrapper = styled.div`
    color: #596847;
`

export const SidebarMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;
    
    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 60px);
    }
`

export const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #596847;
    cursor: pointer;

    &:hover {
        color: #596847a4;
        transition: 0.2s ease-in-out;
    }
`
