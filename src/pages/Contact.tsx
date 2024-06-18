import styled from "styled-components";
import { GreenH1 } from "../components/Logo";
import { devices } from "../resorces/devices";
import { unMask } from 'node-masker';
import { BoxCenterWhite } from "../components/Box";
import { CenteredContent } from "../components/CenteredContent";
import { Img } from '../components/Image';
import israel from '../assets/images/israel.jpg';
import { FormSection } from "../components/FormSection";
import { FormInput } from "../components/FormInput";
import { Form } from "../components/Form";
import { FormTextArea } from "../components/FormTextArea";
import { Button } from "../components/Button";
import { CenteredButtons } from "../components/Buttons";
import React from "react";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px 20px 0px 0px;

    @media ${devices.laptop} {
        display: flex;
        flex-direction: row;
        
    
    }
`;

export function Contact() {
    const [userDate, setUserDate] = React.useState({ nome: '', sobrenome: '', cellfone: '' });
    const [emailDate, setEmailDate] = React.useState({ email: '' });
    const [messageDate, setMessageDate] = React.useState({ message: '' });

      
      const handleChange = async (event: any) => {
        const { name, value } = event.target;
        setUserDate({ ...userDate, [name]: unMask(value) });
      };

      const handleChangeTextArea = async (event: any) => {
        const { value } = event.target;
        setMessageDate(value);
      };

      const handleChangeEmail = async (event: any) => {
        const { name, value } = event.target;
        setEmailDate({ ...emailDate, [name]: value });
      };

    return(
        <BoxCenterWhite>
            <CenteredContent>
                <GreenH1>Deixe sua Mensagem</GreenH1>
            </CenteredContent>
            <Wrapper>
                <Img width="640px" height="590px" src={israel} />
                <Form>
                <FormSection
                    title=""
                    gridTemplateColumns="1fr 1fr"
                    gridTemplateAreas='
                    "area1 area2"
                    "area3 area4"
                    '
                >
                    <FormInput
                        id="nome"
                        name="nome"
                        type="text"
                        placeholder="Nome"
                        autoComplete="off"
                        onChange={handleChange}
                        value={userDate.nome}
                        gridArea="area1"
                    />
                    <FormInput
                        id="sobrenome"
                        name="sobrenome"
                        type="text"
                        placeholder="Sobrenome"
                        autoComplete="off"
                        onChange={handleChange}
                        value={userDate.sobrenome}
                        gridArea="area2"
                    />
                    <FormInput
                        
                        id="email"
                        name="email"
                        type="text"
                        placeholder="Endereço de E-mail"
                        autoComplete="off"
                        onChange={handleChangeEmail}
                        value={emailDate.email}
                        gridArea="area3"
                    />
                    <FormInput
                        id="cellfone"
                        name="cellfone"
                        type="text"
                        placeholder="Número de Telefone"
                        autoComplete="off"
                        onChange={handleChange}
                        value={userDate.cellfone}
                        mask="(99) 99999-9999"
                        gridArea="area4"
                    />
                </FormSection>    
                <FormSection
                    title=""
                    gridTemplateColumns="1fr"
                    gridTemplateAreas='
                    "area1"
                    '
                >
                    <FormTextArea
                        id="message"
                        name="message"
                        rows={7}
                        value={messageDate.message}
                        onChange={handleChangeTextArea}
                        placeholder="Digite sua mensagem"
                        autoComplete="off"
                        maxLength={2500}
                        required={false}
                        disabled={false}
                        gridArea="area1"
                        onKeyUp={handleChangeTextArea}
                    />
                    </FormSection>
                    <CenteredButtons>
                        <Button>Enviar</Button>
                    </CenteredButtons>
                </Form>
            </Wrapper>
        </BoxCenterWhite>
    )
}