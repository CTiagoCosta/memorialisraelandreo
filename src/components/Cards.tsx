import styled from "styled-components";
import { devices } from "../resorces/devices";


export const Card = styled.div`
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


export const CardModal = styled.div`
    display: flex;
    gap: 20px;


    @media ${devices.laptop} {
       
    }
`;