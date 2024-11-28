import styled from "styled-components";

export const StyledMenuBar = styled.div<{ isOpen: boolean }>`
    background-color: #8E7065;
    position: fixed;
    height: 97vh;
    width: ${({ isOpen }) => (isOpen ? "250px" : "70px")};
    margin: 7px;
    border-radius: 4px;
    padding: 10px 10px 10px 10px;
    display: flex;
    flex-direction: column; /* Mantém sempre flex */
    justify-content: space-between; /* Controla alinhamento */
    transition: width 0.3s ease, justify-content 0.3s ease; /* Transição suave */
`;



export const User = styled.div<{ isOpen: boolean }>`

    width: 90%;
    height: 50px;
    margin: 0 auto;
    display: flex;
    justify-content: ${({ isOpen }) => (isOpen ? "center" : "center")}; /* Ajusta a posição horizontal */
    align-items: center;
    transition: all 0.3s ease;
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
`;

export const MenuButton = styled.button<{ $isActive: boolean , $isOpen: boolean}>`
    width: ${({ $isOpen }) => ($isOpen ? "100%" : "85%")};
    padding: ${({ $isOpen }) => ($isOpen ? "8px" : "8px")};
    border: none;
    cursor: pointer;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: ${({ $isActive }) => ($isActive ? "center" : "center")};
    transition: all 0.3s ease;
    margin: 5px auto;
 
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

export const ToggleButton = styled.button<{ isOpen: boolean }>`
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    width: ${({ isOpen }) => (isOpen ? "10%" : "80%")};
    top: 2%; /* Ajusta para o topo da barra */
    border-radius: 4px; /* Torna o botão redondo */
    padding: ${({ isOpen }) => (isOpen ? "2px" : "8px")};
    font-size: 1.2rem;
    z-index: 10; /* Garante que fique acima de outros elementos */
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-end;
    margin: ${({ isOpen }) => (isOpen ? "0px" : "0 auto")};

    
    &:hover {
        background-color: white;
        color: #8e7065;
        
    }
`;