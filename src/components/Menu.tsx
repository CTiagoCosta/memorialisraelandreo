
import styled from "styled-components";
import { SocialLink } from "./SocialLink";
import { devices } from "../resorces/devices";

const Wrapper = styled.div`
    display: flex;
    margin-top: 20px;
    gap: 30px;
    flex-direction: column;
    align-items: center;

    @media ${devices.tablet} {
        display: flex;
        gap: 30px;
        flex-direction: row;
    }
    
`;

const Button  = styled.button `
    color: white;
    font-size: 1.25em;
    font-weight: 600;
    
    &:hover {
    color: #ED8936;
    }
    
`;

const ConectButton  = styled.button `
    font-weight: 700;
    color: #fff;
    border: 1px solid #fff;
    padding: 18px 34px;
    font-size: 18px;
	position: relative;
	background-color: transparent;
	transition: 0.3s ease-in-out;

    &::before {
    content: "";
    width: 0%;
    height: 100%;
    position: absolute;
    background-color: #fff;
    left: 0;
    top: 0;
    z-index: -1;
    transition: 0.3s ease-in-out;
    }

    &:hover {
    color: #ED8936;
    }
    
    &:hover::before {
	content: "";
	width: 100%;
	height: 100%;
	position: absolute;
}
    
`;



export function Menu(){
    return (
        <Wrapper> 
            <Button>Sobre</Button>
            <Button >Galeria</Button>
            <Button>Depoimentos</Button>
            <SocialLink />
            <ConectButton>Deixe sua Mensagem</ConectButton>
        </Wrapper>
         
        
    )
}