
import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    height: 70px;
    background-color: white;
    box-shadow: 0px 3px 8px #FFF8E1;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 50px;
`
export const Navbar = styled.nav`
    background-color: transparent;    
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const StyledButton = styled.button<{ $isSpecialButton: boolean}>`
    background-color: white;
    padding: 15px;
    width: 150px;
    margin: 0 5px;
    border: none;
    border-bottom: 1px solid #64B5F6;
    font-family: "Quicksand";
    font-weight: 500;
    cursor: pointer;
    transition: all 200ms ease;
    
    

    &:hover {
        background-color: #1976D2;
        color: white;
        border: 1px solid #1565C0;
        border-radius: .3em;
    }

    ${({ $isSpecialButton }) => $isSpecialButton ? `
        
    ` : `
        
    `}
`


