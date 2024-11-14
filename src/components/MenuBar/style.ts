import styled from "styled-components";

export const StyledMenuBar = styled.div`

    background-color: #8E7065;
    position: fixed;
    display: block;
    height: 97vh;
    width: 250px;
    margin: 7px;
    border-radius: 12px;
    padding: 10px;
`

export const User = styled.div`
    background-color: transparent;
    width: 90%;
    height: 50px;
    margin-bottom: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const ButtonsWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;

`

export const MenuButton = styled.button<{ $isActive: boolean}>`   
    width: 100%;
    padding: 12px;
    border: none;    
    cursor: pointer;
    border-radius: 7px;
    display: flex;
    align-items: center;
    transition: all 200ms ease;
    margin-bottom: 5px;

    &:hover {
        background-color: #765D54;
    }
    
    ${({ $isActive }) => $isActive ? `
        background-color: white;
        color: #765D54;

        &:hover {
            background-color: white;
            color: #765D54; 
            filter: brightness(0.95);
        }
    ` : `
        color: white;
        background-color: transparent;
    `}
`

export const TextDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    font-family: 'Inria Sans';
    font-size: 15px;
    font-weight: 500;
`

