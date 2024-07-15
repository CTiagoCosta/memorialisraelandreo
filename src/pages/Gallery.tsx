
import React, { useState } from "react";
import { useDisclosure, Modal, ModalOverlay, Button as ButtonChakra, ModalContent, ModalCloseButton, ModalBody, ModalFooter, SimpleGrid, ModalHeader } from "@chakra-ui/react";
import { BoxCenterWhiteGallery } from '../components/Box';
import { CardModal, CardChaka } from '../components/Cards';
import { CenteredContent } from '../components/CenteredContent';
import { GreenH1 } from '../components/Logo';
import { ImageURL, Images } from '../components/Image';
import imagem from '../assets/images/imagem1.jpeg';
import imagem2 from '../assets/images/imagem2.jpg';
import imagem3 from '../assets/images/imagem3.jpeg';
import imagem4 from '../assets/images/imagem4.jpeg';
import imagem5 from '../assets/images/imagem5.jpeg';
import imagem6 from '../assets/images/imagem6.jpeg';
import imagem7 from '../assets/images/imagem7.jpeg';
import imagem8 from '../assets/images/imagem8.jpeg';
import imagem9 from '../assets/images/imagem9.jpeg';
import imagem10 from '../assets/images/imagem10.jpg';
import imagem11 from '../assets/images/imagem11.jpg';
import imagem12 from '../assets/images/imagem12.jpg';
import imagem13 from '../assets/images/imagem13.jpeg';
import imagem14 from '../assets/images/imagem14.jpeg';
import imagem15 from '../assets/images/imagem15.jpeg';

type ModalContent = {
    title: string;
    body: string;
    imageMap: string;
  };

  interface ImageMap {
    imagem1: string;
  }

export function Gallery(){
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [modalContent, setModalContent] = useState<ModalContent>({ title: '', body: '', imageMap: ''});
    const imageMaps: ImageMap[] = [
        { imagem1: `${imagem}` },
        { imagem1: `${imagem2}` },
        { imagem1: `${imagem3}` },
        { imagem1: `${imagem4}` },
        { imagem1: `${imagem5}` },
        { imagem1: `${imagem6}` },
        { imagem1: `${imagem7}` },
        { imagem1: `${imagem8}` },
        { imagem1: `${imagem9}` },
        { imagem1: `${imagem10}` },
        { imagem1: `${imagem11}` },
        { imagem1: `${imagem12}` },
        { imagem1: `${imagem13}` },
        { imagem1: `${imagem14}` },
        { imagem1: `${imagem15}` },
      ];

    const handleOpenModal = (content: ModalContent) => {
        setModalContent(content);
        onOpen();
      };

    return (
        <BoxCenterWhiteGallery  id="section2" className="section">
            <CenteredContent>
                <GreenH1>Galeria</GreenH1>
            </CenteredContent>
                <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                    { imageMaps.map((imageMap: ImageMap) => (
                        <React.Fragment key={imageMap.toString()}>
                            <CardChaka
                                onClick={() => handleOpenModal({
                                    title: '',
                                    body: '',
                                    imageMap: `${imageMap.imagem1}`
                                })}
                            >
                                <Images width="200px" height="180px" src={imageMap.imagem1} />
                                {/* <ButtonGallery 
                                    onClick={() => handleOpenModal({
                                        title: '',
                                        body: '',
                                        imageMap: `${imageMap.imagem1}`
                                    })}
                                >
                                    Ver Imagem
                                </ButtonGallery> */}
                            </CardChaka>
                            <Modal isOpen={isOpen} onClose={onClose} size="xl">
                                <ModalOverlay />
                                <ModalContent>
                                    <ModalHeader>{modalContent.title}</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                <CardModal>
                                    <ImageURL src={modalContent.imageMap} alt={modalContent.title} width="530px" height="480px" />
                                    <p>{modalContent.body}</p>
                                </CardModal>
                                </ModalBody>
                                <ModalFooter>
                                    <ButtonChakra colorScheme='blue' mr={3} onClick={onClose}>
                                    Fechar
                                    </ButtonChakra>
                                </ModalFooter>
                                </ModalContent>
                            </Modal>
                        </React.Fragment>
                    ))} 
                </SimpleGrid>
            
        </BoxCenterWhiteGallery>
    )
}