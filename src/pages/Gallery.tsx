
import { useState } from "react";
import { useDisclosure, Modal, ModalOverlay, Button as ButtonChakra, ModalContent, ModalCloseButton, ModalBody, ModalFooter, Image as ImageURL, SimpleGrid, ModalHeader } from "@chakra-ui/react";
import { BoxCenterWhiteGallery } from '../components/Box';
import { CardModal, CardChaka } from '../components/Cards';
import { CenteredContent } from '../components/CenteredContent';
import { GreenH1 } from '../components/Logo';
import { ButtonGallery } from "../components/Button";


import { Images } from '../components/Image';
import sonia from '../assets/images/sonia.jpg';

type ModalContent = {
    title: string;
    body: string;
    imageUrl: string;
  };

export function Gallery(){
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [modalContent, setModalContent] = useState<ModalContent>({ title: '', body: '', imageUrl: '' });

    const handleOpenModal = (content: ModalContent) => {
        setModalContent(content);
        onOpen();
      };
    return (
        <BoxCenterWhiteGallery>
            <CenteredContent>
                <GreenH1>Galeria</GreenH1>
            
            <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                <CardChaka>
                    <Images width="200px" height="180px" src={sonia} />
                    <ButtonGallery onClick={() => handleOpenModal({ 
                                title: '', 
                                body: '',
                                imageUrl: `${sonia}`
                                })}
                            > Ver Imagem
                    </ButtonGallery>
                </CardChaka>
                <CardChaka>
                    <Images width="200px" height="180px" src={sonia} />
                    <ButtonGallery onClick={() => handleOpenModal({ 
                                title: '', 
                                body: '',
                                imageUrl: `${sonia}`
                                })}
                            > Ver Imagem
                    </ButtonGallery>
                </CardChaka>
                <CardChaka>
                    <Images width="200px" height="180px" src={sonia} />
                    <ButtonGallery onClick={() => handleOpenModal({ 
                                title: '', 
                                body: '',
                                imageUrl: `${sonia}`
                                })}
                            > Ver Imagem
                    </ButtonGallery>
                </CardChaka>
                <CardChaka>
                    <Images width="200px" height="180px" src={sonia} />
                    <ButtonGallery onClick={() => handleOpenModal({ 
                                title: '', 
                                body: '',
                                imageUrl: `${sonia}`
                                })}
                            > Ver Imagem
                    </ButtonGallery>
                </CardChaka>
                <CardChaka>
                    <Images width="200px" height="180px" src={sonia} />
                    <ButtonGallery onClick={() => handleOpenModal({ 
                                title: '', 
                                body: '',
                                imageUrl: `${sonia}`
                                })}
                            > Ver Imagem
                    </ButtonGallery>
                </CardChaka>
                <CardChaka>
                    <Images width="200px" height="180px" src={sonia} />
                    <ButtonGallery onClick={() => handleOpenModal({ 
                                title: '', 
                                body: '',
                                imageUrl: `${sonia}`
                                })}
                            > Ver Imagem
                    </ButtonGallery>
                </CardChaka>
                <CardChaka>
                    <Images width="200px" height="180px" src={sonia} />
                    <ButtonGallery onClick={() => handleOpenModal({ 
                                title: '', 
                                body: '',
                                imageUrl: `${sonia}`
                                })}
                            > Ver Imagem
                    </ButtonGallery>
                </CardChaka>
                <CardChaka>
                    <Images width="200px" height="180px" src={sonia} />
                    <ButtonGallery onClick={() => handleOpenModal({ 
                                title: '', 
                                body: '',
                                imageUrl: `${sonia}`
                                })}
                            > Ver Imagem
                    </ButtonGallery>
                </CardChaka>
                <CardChaka>
                    <Images width="200px" height="180px" src={sonia} />
                    <ButtonGallery onClick={() => handleOpenModal({ 
                                title: '', 
                                body: '',
                                imageUrl: `${sonia}`
                                })}
                            > Ver Imagem
                    </ButtonGallery>
                </CardChaka>
                <CardChaka>
                    <Images width="200px" height="180px" src={sonia} />
                    <ButtonGallery onClick={() => handleOpenModal({ 
                                title: '', 
                                body: '',
                                imageUrl: `${sonia}`
                                })}
                            > Ver Imagem
                    </ButtonGallery>
                </CardChaka>
                <CardChaka>
                    <Images width="200px" height="180px" src={sonia} />
                    <ButtonGallery onClick={() => handleOpenModal({ 
                                title: '', 
                                body: '',
                                imageUrl: `${sonia}`
                                })}
                            > Ver Imagem
                    </ButtonGallery>
                </CardChaka>
                <CardChaka>
                    <Images width="200px" height="180px" src={sonia} />
                    <ButtonGallery onClick={() => handleOpenModal({ 
                                title: '', 
                                body: '',
                                imageUrl: `${sonia}`
                                })}
                            > Ver Imagem
                    </ButtonGallery>
                </CardChaka>
                <CardChaka>
                    <Images width="200px" height="180px" src={sonia} />
                    <ButtonGallery onClick={() => handleOpenModal({ 
                                title: '', 
                                body: '',
                                imageUrl: `${sonia}`
                                })}
                            > Ver Imagem
                    </ButtonGallery>
                </CardChaka>
                <CardChaka>
                    <Images width="200px" height="180px" src={sonia} />
                    <ButtonGallery onClick={() => handleOpenModal({ 
                                title: '', 
                                body: '',
                                imageUrl: `${sonia}`
                                })}
                            > Ver Imagem
                    </ButtonGallery>
                </CardChaka>
                <CardChaka>
                    <Images width="200px" height="180px" src={sonia} />
                    <ButtonGallery onClick={() => handleOpenModal({ 
                                title: '', 
                                body: '',
                                imageUrl: `${sonia}`
                                })}
                            > Ver Imagem
                    </ButtonGallery>
                </CardChaka>
                
                
                <Modal isOpen={isOpen} onClose={onClose} size="xl">
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>{modalContent.title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    <CardModal>
                        <ImageURL src={modalContent.imageUrl} alt={modalContent.title} boxSize='480px' />
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
            </SimpleGrid></CenteredContent>
        </BoxCenterWhiteGallery>
    )
}