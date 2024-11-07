
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
    z-index: 2;
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
    padding: 20px 20px 24px 20px;
    width: 150px;
    margin: 0 5px;
    border: none;
    font-family: "Quicksand";
    font-weight: 500;
    cursor: pointer;
    transition: all 200ms ease;
    border: 1px solid transparent;
    

    &:hover {
        transform: scale(1.1);
        color: #A1887F;
        border-bottom: 1px solid #A1887F;
    }

    ${({ $isSpecialButton }) => $isSpecialButton ? `
        
    ` : `
        
    `}
`


