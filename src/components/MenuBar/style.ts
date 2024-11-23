import styled from "styled-components";

export const StyledMenuBar = styled.div<{ isOpen: boolean }>`
    background-color: #8E7065;
    position: fixed;
    height: 97vh;
    width: ${({ isOpen }) => (isOpen ? "250px" : "70px")};
    margin: 7px;
    border-radius: 12px;
    padding: 10px;
    transition: all 0.3s ease;
    
    ${({ isOpen }) => isOpen 
    ? 
    `
        
    ` : `
        display: flex;
        flex-direction: column;
        justify-content: center;
    
    `}
`;



export const User = styled.div<{ isOpen: boolean }>`
    background-color: transparent;
    width: 90%;
    height: 50px;
    margin: 60px 0; /* Margens fixas verticais */
    display: flex;
    justify-content: ${({ isOpen }) => (isOpen ? "flex-start" : "center")}; /* Ajusta a posição horizontal */
    align-items: center;
    transition: all 0.3s ease;
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
     margin-top: 20px;
`;

export const MenuButton = styled.button<{ $isActive: boolean }>`
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
        background-color: #765d54;
    }

    ${({ $isActive }) =>
        $isActive
            ? `
        background-color: white;
        color: #765D54;

        &:hover {
            background-color: white;
            color: #765D54; 
            filter: brightness(0.95);
        }
    `
            : `
        color: white;
        background-color: transparent;
    `}
`;

export const TextDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    font-family: 'Inria Sans';
    font-size: 15px;
    font-weight: 500;
    margin-left: 10px;
`;

export const ToggleButton = styled.button`
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    position: absolute;
    top: 2%; /* Ajusta para o topo da barra */
    right: 10px; /* Desloca o botão para fora da barra */
    
    border-radius: .7em; /* Torna o botão redondo */
    padding: 12px;
    font-size: 1.2rem;
    z-index: 10; /* Garante que fique acima de outros elementos */
    transition: all 0.3s ease;

    &:hover {
        background-color: white;
        color: #8e7065;
        
    }
`;