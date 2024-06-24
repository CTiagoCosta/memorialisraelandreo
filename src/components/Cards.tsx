import styled from "styled-components";
import { devices } from "../resorces/devices";


export const CardWhite = styled.div`
    //padding: 30px;
    width: 430px;
    background: white;
    height: 310px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 15px 15px 15px;


    @media ${devices.laptop} {
        height: 230px;
    }
`;

export const CardGreen = styled.div`
    //padding: 30px;
    width: 430px;
    background: #1c4532;
    height: 310px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 15px 15px 15px;


    @media ${devices.laptop} {
        height: 230px;
    }
`;


export const CardModal = styled.div`
    display: flex;
    gap: 20px;


    @media ${devices.laptop} {
       
    }
`;

export const CardChaka = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    /* position: relative; */
    min-width: 0px;
    word-wrap: break-word;
    --card-bg: var(--chakra-colors-chakra-body-bg);
    background-color: var(--card-bg);
    box-shadow: var(--card-shadow);
    border-radius: var(--card-radius);
    color: var(--chakra-colors-chakra-body-text);
    border-width: var(--card-border-width, 0);
    border-color: var(--card-border-color);
    --card-radius: var(--chakra-radii-md);
    --card-padding: var(--chakra-space-5);
    --card-shadow: var(--chakra-shadows-base);
    flex-wrap: wrap;
`