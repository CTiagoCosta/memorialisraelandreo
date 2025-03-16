import styled from "styled-components";
import { OrangeH1, WhiteH1 } from "./Logo";
import { Menu } from "./Menu";
import { devices } from "../resorces/devices";

const Wrapper = styled.section`
     padding: 0.5em 1em;
    background: #1c4532;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1002; /* Garante que o menu sempre fica acima */
    

    @media ${devices.tablet} {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        position: fixed;
    }

    @media ${devices.laptop} {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        position: fixed;
    
    }
`;

const Title = styled.div`
    max-width: auto;
    display: flex;
    margin-bottom: 15px;
`;

export function Header() {
    return (
        <Wrapper>
            <Title>
                <WhiteH1>Israel Andreo</WhiteH1>
                <OrangeH1>.</OrangeH1>
            </Title>
            <Menu />
        </Wrapper>

    )
}