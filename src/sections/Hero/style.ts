
import styled from "styled-components";

export const HeroSection = styled.section`
    position: relative;
    height: 100vh;
    width: 100%;
    overflow: hidden; /* Evita que o blur ultrapasse a área visível */
    
    /* Pseudo-elemento para a imagem de fundo com blur */
    &::before {
        content: "";
        position: absolute;
        top: -10px;
        left: -10px;
        right: -10px;
        bottom: -10px;
        background-image: url('/images/background-bible.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        filter: blur(8px); /* Define a intensidade do blur */
        z-index: -1; /* Coloca a imagem de fundo atrás do conteúdo */
    }
`;

export const HorizontalBox = styled.div`
    width: 450px;
    height: 250px;
    background-color: #FFF8E1;
    border-radius: 2em;
    position: absolute;
    bottom: 30px;
    box-shadow: 0px 0px 7px #FFF8E1;
    font-family: "Playfair Display";
    padding: 30px;
    
`

export const VerticalBox = styled.div`
    width: 300px;
    height: 450px;
    background-color: #FFF8E1;
    border-radius: 2em;
    position: absolute;
    bottom: 30px;
    box-shadow: 0px 0px 7px #FFF8E1;
    right: 40px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const StyledButton = styled.button`
    padding: 15px 25px;
    background-color: white;
    border: none;
    border-radius: .4em;
    margin-top: 20px;
    font-size: 17px;
    font-family: "Quicksand";
    box-shadow: 0px 0px 7px #FFF8E1;
    cursor: pointer;
    transition: all 200ms ease-in;

    &:hover {
        transform: scale(1.05);
        filter: brightness(0.94);
    }
`