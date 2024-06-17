import { BoxCard, BoxCenter } from "../components/Box";
import { Card, CardModal } from "../components/Cards";
import { CenteredContent } from "../components/CenteredContent";
import { OrangeH1, OrangeH2 } from "../components/Topic";
import { Image } from '../components/Image';
import sonia from '../assets/images/sonia.jpg';
import silvana from '../assets/images/silvana.jpg';
import silvio from '../assets/images/silvio.jpg';
import sandro from '../assets/images/sandro.jpg';
import samira from '../assets/images/samira.jpg';
import { GreenH2 } from "../components/Text";
import { useDisclosure, Modal, ModalOverlay, Button, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Image as ImageURL } from "@chakra-ui/react";
import { useState } from "react";

type ModalContent = {
    title: string;
    body: string;
    imageUrl: string;
  };


export function Depositions(){
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [modalContent, setModalContent] = useState<ModalContent>({ title: '', body: '', imageUrl: '' });

    const handleOpenModal = (content: ModalContent) => {
        setModalContent(content);
        onOpen();
      };

    
    return (
        <>
        <BoxCenter>
            <CenteredContent>
                <OrangeH1>Depoimentos</OrangeH1>
            </CenteredContent>
            <BoxCard>
                <Card>
                    <Image width="100px" height="100px" src={sonia} />
                    <OrangeH2>Sônia</OrangeH2>
                    <GreenH2>
                        Papai. 
                        Teste testetetstetstet etestetst etsttets Teste testetetstetstet etestetst etsttetstststststtstststtst...
                        <Button colorScheme="green.700" variant='link' onClick={() => handleOpenModal({ 
                            title: 'Marido', 
                            body: 'This is the first modal content',
                            imageUrl: `${sonia}`
                            })}
                        > Leia mais
                        </Button>
                    </GreenH2>
                </Card>
                <Card>
                    <Image width="100px" height="100px" src={silvana} />
                    <OrangeH2>Silvana</OrangeH2>
                    <GreenH2>
                        Papai. 
                        Ter você em minha vida sempre foi exemplo de superação, honestidade, paciência, dedicação e amor. Como foi bom ter você... 
                        {/* <Button onClick={onOpen} variant='link'>Leia mais</Button> */}
                        <Button colorScheme="green.700" variant='link' onClick={() => handleOpenModal({ 
                            title: 'Papai', 
                            body: 'Ter você em minha vida sempre foi exemplo de superação, honestidade, paciência, possível com você, fizemos planos e os desfazemos, foram dias incríveis ao seu lado, tudo era possível, otimismo era seu lema, não tinha tempo ruim, mesmo nas horas mais complicadas. Mas, ainda assim, gostaria de mais,  mais abraços seus, mais conversas, mais beijos ou apenas ficar pertinho no sofá enquanto você descansava, minha vida tem um marco, com você e sem você, o antes e o depois, tudo tem um novo olhar, um novo significado e nada mais será completo a cada dia que passa a saudade aumenta, como dói saber que você não está aqui entre nós. mas, honrarei sua memória com a prática de seus ensinamentos e seu legado estará vivo  para sempre. Com amor sua filha Silvana. ',
                            imageUrl: `${silvana}`
                        })}
                        > Leia mais
                        </Button>
                    </GreenH2>
                </Card>
                <Card>
                    <Image width="100px" height="100px" src={silvio} />
                    <OrangeH2>Silvio</OrangeH2>
                    <GreenH2>
                        Papai. 
                        Teste testetetstetstet etestetst etsttets Teste testetetstetstet etestetst etsttetstststststtstststtst...
                        <Button colorScheme="green.700" variant='link' onClick={() => handleOpenModal({ 
                            title: 'Papai', 
                            body: 'This is the 3 modal content',
                            imageUrl: `${silvio}`
                            })}
                        > Leia mais
                        </Button>
                    </GreenH2>
                </Card>
                <Card>
                    <Image width="100px" height="100px" src={sandro} />
                    <OrangeH2>Sandro</OrangeH2>
                    <GreenH2>
                        Papai. 
                        Teste testetetstetstet etestetst etsttets Teste testetetstetstet etestetst etsttetstststststtstststtst...
                        <Button colorScheme="green.700" variant='link' onClick={() => handleOpenModal({ 
                            title: 'Marido', 
                            body: 'This is the 4 modal content',
                            imageUrl: `${sandro}`
                            })}
                        > Leia mais
                        </Button>
                    </GreenH2>
                </Card>
                <Card>
                    <Image width="100px" height="100px" src={samira} />
                    <OrangeH2>Samira</OrangeH2>
                    <GreenH2>
                        Papai. 
                        Teste testetetstetstet etestetst etsttets Teste testetetstetstet etestetst etsttetstststststtstststtst...
                        <Button colorScheme="green.700" variant='link' onClick={() => handleOpenModal({ 
                            title: 'Marido', 
                            body: 'This is the 5 modal content ',
                            imageUrl: `${samira}`
                            })}
                        > Leia mais
                        </Button>
                    </GreenH2>
                </Card>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>{modalContent.title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    <CardModal>
                        <ImageURL src={modalContent.imageUrl} alt={modalContent.title} borderRadius='full' boxSize='150px' />
                        <p>{modalContent.body}</p>
                    </CardModal>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Fechar
                        </Button>
                    </ModalFooter>
                    </ModalContent>
                </Modal>
            </BoxCard>
        </BoxCenter>
        </>

    )
}