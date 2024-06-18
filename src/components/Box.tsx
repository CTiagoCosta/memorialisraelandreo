import styled from "styled-components";
import { devices } from "../resorces/devices";

export const BoxCenter = styled.div`
    width: 100%;
    padding: 20px;
    height: 1880px;
    background: #1c4532;

    @media ${devices.laptop} {
        height: 1000px;
    }
    @media ${devices.laptopL} {
        height: 700px;
    }
    @media ${devices.desktop} {
        height: 450px;
    }
`;

export const BoxCenterWhite = styled.div`
    width: 100%;
    padding: 0px;
    height: 1220px;
    background: white;

    @media ${devices.laptop} {
        height: 800px;
    }
    
`;

export const BoxCard = styled.div`
    width: 100%;
    padding: 40px;
    //background: #1c4532;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px;
`;