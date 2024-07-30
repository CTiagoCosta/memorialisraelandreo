
import styled from "styled-components";
import { SocialLink } from "./SocialLink";
import { devices } from "../resorces/devices";

const Wrapper = styled.div`
    display: flex;
    //margin-top: 20px;
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

    const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href')!.substring(1);
        const targetElement = document.getElementById(targetId);
    
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      };

    return (
        <Wrapper> 
            <Button><a href="#section1" onClick={scrollToSection}>Música</a></Button>
            <Button><a href="#section2" onClick={scrollToSection}>Galeria</a></Button>
            <Button><a href="#section3" onClick={scrollToSection}>Depoimentos</a></Button>
            <SocialLink />
            <ConectButton><a href="#section4" onClick={scrollToSection}>Deixe sua Mensagem</a></ConectButton>
        </Wrapper>
         
        
    )
}