import styled from "styled-components";

import navIcon2 from "../assets/images/nav-icon2.svg";
import navIcon3 from "../assets/images/nav-icon3.svg";


const Wrapper = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    
`;

const Link =styled.a`
    width: 42px;
    height: 42px;
    background: rgba(217, 217, 217, 0.1);
    display: inline-flex;
    border-radius: 50%;
    margin-right: 6px;
    align-items: center;
    justify-content: center;
    line-height: 1;
    border: 1px solid rgba(255, 255, 255, 0.5);

    &::before {
    content: "";
    width: 42px;
    height: 42px;
    position: absolute;
    background-color: #ED8936;
    border-radius: 50%;
    transform: scale(0);
	transition: 0.3s ease-in-out;
    }
        &:hover::before {
        transform: scale(1);
    }
    img {
	width: 40%;
	z-index: 1;
	transition: 0.3s ease-in-out;

    &:hover img {
	filter: brightness(0) saturate(100%) invert(0%) sepia(7%) saturate(98%) hue-rotate(346deg) brightness(95%) contrast(86%);
    }
}
`;


export function SocialLink() {
    return (
        <Wrapper>
            <Link href="https://www.facebook.com/recanto.grotto" target="_blank" rel="noreferrer"><img src={navIcon2} alt="Facebook" /></Link>
            <Link href="https://www.facebook.com/recanto.grotto" target="_blank" rel="noreferrer"><img src={navIcon3} alt="Instagram" /></Link>
            {/* <Link href="https://www.facebook.com/tiago.silva.5015" target="_blank" rel="noreferrer"><img src={navIcon2} alt="Facebook" /></Link> */}
        </Wrapper>

    )
}