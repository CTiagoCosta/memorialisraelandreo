import styled from "styled-components";
import { OrangeH1, WhiteH1 } from "./Logo";
import { Menu } from "./Menu";

const Wrapper = styled.section`
    padding: 0.5em;
    background: #1c4532;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    width: 100%;
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