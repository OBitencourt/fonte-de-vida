import styled from "styled-components";

export const LayoutWrapper = styled.div`
    display: flex;
`;

export const ContentWrapper = styled.div<{ isOpen: boolean }>`
    flex-grow: 1;
    margin: 9px 9px 9px ${({ isOpen }) => (isOpen ? "250px" : "90px")};
    border-radius: 4px;
    padding: 20px;
    min-height: 97vh;
    background-color: white;
    transition: margin 0.3s ease;

    box-shadow: 0px 0px 2.2px rgba(0, 0, 0, 0.049),
        0px 0px 5.3px rgba(0, 0, 0, 0.065),
        0px 0px 10px rgba(0, 0, 0, 0.068),
        0px 0px 17.9px rgba(0, 0, 0, 0.069),
        0px 0px 33.4px rgba(0, 0, 0, 0.07),
        0px 0px 80px rgba(0, 0, 0, 0.07);
`;
