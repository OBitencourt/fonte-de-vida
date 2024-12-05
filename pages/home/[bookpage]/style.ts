import styled from "styled-components";

export const ChaptersWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    width: 100%;
`

export const Chapter = styled.div`
    width: 15%;
    padding: 5px;
    color: white;
    background-color: #8E7065;
    text-align: center;
    font-size: 12px;
    cursor: pointer;
    border-radius: 2px;
    transition: all 200ms cubic-bezier(0.165, 0.84, 0.44, 1);

    &:hover {
        filter: brightness(1.03);
        transform: scale(1.05);
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