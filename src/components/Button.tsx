import styled from "styled-components";

export const Button = styled.button`
     background-color: #1c4532;
    border: 1px solid #dddddd;
    border-radius: 5px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.16);
    color: white;
    cursor: pointer;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 1rem;
    font-weight: 700;
    overflow: hidden;
    padding: 20px;
    transition: transform 0.4s;
    width: 100%;

    &:hover {
        transform: scale(1.03);
    }
`;