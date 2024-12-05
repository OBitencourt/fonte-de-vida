import styled from "styled-components";

export const NextButton = styled.button`
    width: 10%;
    padding: 7px;
    background-color: #695148;
    font-size: 12px;
    font-weight: 400;
    font-family: 'Inria Sans';
    border: none;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    transition: all 200ms ease;

    &:hover {
        filter: brightness(1.1);
        transform: scale(1.05);
    }
`

export const PrevButton = styled.button<{ $moreVerses: boolean }>`
    width: 10%;
    padding: 7px;
    background-color: ${({ $moreVerses }) => ($moreVerses ? "#8E7065" : "#E7E7E7")};
    font-size: 12px;
    font-weight: 400;
    font-family: 'Inria Sans';
    border: none;
    border-radius: 4px;
    color: ${({ $moreVerses }) => ($moreVerses ? "white" : "#444444")};;
    cursor: ${({ $moreVerses }) => ($moreVerses ? "pointer" : "not-allowed")};
    transition: all 200ms ease;

    &:hover {
        filter: ${({ $moreVerses }) => ($moreVerses ? "brightness(1.1)" : null)};
        transform: ${({ $moreVerses }) => ($moreVerses ? "scale(1.05)" : null)};
    }
`

export const Back = styled.button`
    width: 5%;
    padding: 4px;
    background-color: #8E7065;
    font-size: 12px;
    font-weight: 400;
    font-family: 'Inria Sans';
    border: none;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    transition: all 200ms ease;
    margin-bottom: 16px;

    &:hover {
        filter: brightness(1.1);
        transform: scale(1.05);
    }
`