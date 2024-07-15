import React, { useRef, useState } from "react";
import { useToast } from '@chakra-ui/react'
import emailjs from '@emailjs/browser';
import styled from "styled-components";
import { GreenH1 } from "../components/Logo";
import { devices } from "../resorces/devices";
import { BoxCenterWhite } from "../components/Box";
import { CenteredContent } from "../components/CenteredContent";
import { Img } from '../components/Image';
import israel from '../assets/images/israel.jpg';
import { FormSection } from "../components/FormSection";
import { FormInput } from "../components/FormInput";
import { FormTextArea } from "../components/FormTextArea";
import { Button } from "../components/Button";
import { CenteredButtons } from "../components/Buttons";
import { Form } from "../components/Form";

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
    const [messageDate, setMessageDate] = React.useState({ nome: '', sobrenome: '', cellfone: '', email: '', message: ''});
    const [buttonText, setButtonText] = useState('Enviar');
    const toast = useToast();
    const formRef = useRef<HTMLFormElement>(null);

      
      const handleChange = async (event: any) => {
        const { name, value } = event.target;
        setMessageDate({ ...messageDate, [name]: value });
      };

      const submit = (event: React.FormEvent) => {
        event.preventDefault();
        if (!messageDate.nome) {
            toast({
                title: 'Campo obrigatório.',
                description: "O preenchimento do NOME é obrigatório.",
                status: 'error',
                position: 'top-right',
                duration: 3000,
                isClosable: true,
              })
            return;
          } else 
          if (!messageDate.sobrenome) {
             toast({
                title: 'Campo obrigatório.',
                description: "O preenchimento do SOBRENOME é obrigatório.",
                status: 'error',
                position: 'top-right',
                duration: 3000,
                isClosable: true,
              })
            return;
          } else
        if (!messageDate.email) {
            toast({
                title: 'Campo obrigatório.',
                description: "O preenchimento do E-MAIL é obrigatório.",
                status: 'error',
                position: 'top-right',
                duration: 3000,
                isClosable: true,
              })
            return;
          } else
        if (!messageDate.cellfone) {
            toast({
                title: 'Campo obrigatório.',
                description: "O preenchimento do TELEFONE é obrigatório.",
                status: 'error',
                position: 'top-right',
                duration: 3000,
                isClosable: true,
              })
            return;
          } else
        if (!messageDate.message) {
            toast({
                title: 'Campo obrigatório.',
                description: "O preenchimento do MENSAGEM é obrigatório.",
                status: 'error',
                position: 'top-right',
                duration: 3000,
                isClosable: true,
              })
            return;
          } else
          if (formRef.current) {
              setButtonText("Carregando...");
                emailjs.sendForm('service_2z0hmrn', 'template_uv582z7', formRef.current, 'GQU8R1sT9ZCfHtsrs')
              .then(() => {
                setButtonText("Enviado");
                toast({
                    title: 'Mensagem Enviada com sucesso.',
                    status: 'success',
                    position: 'top-right',
                    duration: 3000,
                    isClosable: true,
                  })
                  setButtonText("Enviar");
              }, () => {
                setButtonText("Cancelado");
                toast({
                    title: 'Mensagem não enviada.',
                    status: 'error',
                    position: 'top-right',
                    duration: 3000,
                    isClosable: true,
                  })
              });
              setMessageDate({
                nome: '',
                sobrenome: '',
                email: '',
                cellfone: '',
                message: ''
              })
              
          }
      }

    return(
        <BoxCenterWhite id="section4" className="section">
            <CenteredContent>
                <GreenH1>Deixe sua Mensagem</GreenH1>
            </CenteredContent>
            <Wrapper>
                <Img width="640px" height="590px" src={israel} />
                <Form ref={formRef} onSubmit={submit}>
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
                        value={messageDate.nome}
                        gridArea="area1"
                    />
                    <FormInput
                        id="sobrenome"
                        name="sobrenome"
                        type="text"
                        placeholder="Sobrenome"
                        autoComplete="off"
                        onChange={handleChange}
                        value={messageDate.sobrenome}
                        gridArea="area2"
                    />
                    <FormInput
                        
                        id="email"
                        name="email"
                        type="text"
                        placeholder="Endereço de E-mail"
                        autoComplete="off"
                        onChange={handleChange}
                        value={messageDate.email}
                        gridArea="area3"
                    />
                    <FormInput
                        id="cellfone"
                        name="cellfone"
                        type="text"
                        placeholder="Número de Telefone"
                        autoComplete="off"
                        onChange={handleChange}
                        value={messageDate.cellfone}
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
                        onChange={handleChange}
                        placeholder="Digite sua mensagem"
                        autoComplete="off"
                        maxLength={2500}
                        required={false}
                        disabled={false}
                        gridArea="area1"
                        onKeyUp={handleChange}
                    />
                    </FormSection>
                    <CenteredButtons>
                        <Button type="submit">{buttonText}</Button>
                    </CenteredButtons>
                </Form>
            </Wrapper>
        </BoxCenterWhite>
    )
}


