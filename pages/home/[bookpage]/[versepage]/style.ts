import styled from "styled-components";

export const NextButton = styled.button`
    width: 10%;
    padding: 8px;
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
    }
`

export const PrevButton = styled.button`
    width: 10%;
    padding: 8px;
    background-color: #8E7065;
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
    }
`