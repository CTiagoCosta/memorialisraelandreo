import { Box, Heading, SimpleGrid, Image } from "@chakra-ui/react";
import israleandreo from '../assets/images/israel.jpg'

export function About() {
    return (
        <>
            <Box flex="1" bg="green.900" paddingTop='45px'>
                <Heading as='h3' size='3xl' color="orange.400" display='grid' justifyItems='center' padding='50px'>Israel Andreo</Heading >
                <Box flex="1" bg="green.900" p="50">
                    <SimpleGrid columns={2} display='flex' justifyItems='center' justifyContent='space-evenly' alignItems='center' flexDirection='row-reverse'>
                        <Heading as='h3' size='lg' color="white">
                        Música: Vida melhor <br></br><br></br>
                            Eu fiz de tudo pra tratar vida melhor,<br></br>
                            Eu trabalhei eu derramei o meu suor,<br></br>
                            Não tive tudo foi por isso que sofri,<br></br>
                            Por opção sem profissão, mas consegui.<br></br><br></br>

                            Corri, parei, sorri, mas também chorei, <br></br>
                            Eu construí, eu desmanchei,<br></br>
                            Fui insistente e não desanimei<br></br>

                            Homem valente é aquele que trabalha,<br></br>
                            Luta com fé e não perde a batalha.<br></br>
                            Na minha vida muita luta enfrentei<br></br>
                            Com muito brilho os meus filhos eu criei<br></br><br></br>

                            Corri, parei, sorri, mas também chorei, <br></br>
                            Eu construí, eu desmanchei,<br></br>
                            Fui insistente e não desanimei<br></br>
                        </Heading>
                        <Image borderRadius='full' w='520px'h='860' src={israleandreo} alt='Foto do Israel' />

                    </SimpleGrid>
                </Box>
                
            </Box>
        </>
    )
}