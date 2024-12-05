
import styled from "styled-components";

export const Wrapper = styled.div`

    display: flex;
    justify-content: space-between;
`

export const BooksWrapper = styled.div`
    width: 49.6%;
    background-color: #8E7065;
    min-height: 330px;
    border-radius: 2px;
    padding: 20px;
    color: white;
    transition: all 200ms ease-in;

    &:hover {
        transform: scale(1.007);
    }
`

export const Book = styled.div`
    width: 31%;
    background-color: white;
    min-height: 30px;
    color: #2D2923;
    display: flex;
    padding: 4px;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    border-radius: 2px;
    margin: 3px;
    text-align: center;
    cursor: pointer;
    transition: all 200ms ease;

    &:hover {
        filter: brightness(0.95);
        transform: scale(1.02);
    }
`

export const SelectWrapper = styled.div`
    width: 20%;
    margin-bottom: 10px;
    transition: all 200ms ease-in;

    &:hover {
        
        transform: scale(1.02);
    }
`