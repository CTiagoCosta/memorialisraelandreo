import styled from "styled-components";
import { OrangeH1, WhiteH1 } from "./Logo";
import { Menu } from "./Menu";
import { devices } from "../resorces/devices";

const Wrapper = styled.section`
    padding: 0.5em;
    background: #1c4532;
    display: flex;
    flex-direction: column;
    align-items: center;
    //position: fixed;
    

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