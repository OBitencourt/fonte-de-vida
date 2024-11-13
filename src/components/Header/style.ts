
import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    height: 70px;
    background-color: white;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 50px;
    z-index: 2;
`
export const Navbar = styled.nav`
    background-color: transparent;    
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const StyledButton = styled.button`
    background-color: white;
    padding: 20px;
    width: 145px;
    margin: 0 5px;
    border: none;
    font-family: "Inria Sans";
    font-weight: 500;
    cursor: pointer;
    transition: all 200ms ease;
    border: 1px solid transparent;
    
    &:hover {
        text-decoration: underline;
    }
`

export const StyledDifButton = styled.button`
    background-color: #8E7065;
    padding: 20px;
    width: 100px;
    margin: 0 5px;
    border: none;
    font-family: "Inria Sans";
    font-weight: 500;
    cursor: pointer;
    transition: all 200ms ease;
    color: white;
    border-radius: 12px;

    &:hover {
        background-color: #765D54;
    }
`

