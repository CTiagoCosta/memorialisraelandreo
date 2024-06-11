import { Box, Heading, SimpleGrid, Text, Image} from "@chakra-ui/react";
import sonia from '../assets/images/sonia.jpg'
import silvana from '../assets/images/silvana.jpg'
import silvio from '../assets/images/silvio.jpg'
import sandro from '../assets/images/sandro.jpg'
import samira from '../assets/images/samira.jpg'

export function Depositions() {      
    return (
        <>
        <Box flex="1" bg="green.900" p="10">
            <Heading as='h3' size='3xl' color="orange.400" display='grid' justifyItems='center' paddingBottom='40px'>Depoimentos</Heading >
            <SimpleGrid columns={2} spacing={10}>
                
                    <Box borderRadius='5px' bg='white' height='300px' display='grid' justifyItems='center' padding='25px'>
                        <Image  boxSize='100px' borderRadius='full' src={sonia} alt='Foto do Israel'  />
                        <Heading as='h3' size='lg' color="orange.400">Sônia</Heading>
                        <Text fontSize='xl' color="teal">
                            Papai, ter você em minha vida sempre foi exemplo de superação, honestidade, paciência, dedicação e amor. como foi bom ter você como pai. sei que aproveitei cada minuto possível com você... 
                            
                        </Text>
                    </Box>
                    
                    <Box borderRadius='5px' bg='white' height='300px' display='grid' justifyItems='center' padding='25px'>
                        <Image  boxSize='100px' borderRadius='full' src={silvana} alt='Foto do Israel'  />
                        <Heading as='h3' size='lg' color="orange.400">Silvana</Heading>
                        <Text fontSize='xl' color="teal">
                            Papai, ter você em minha vida sempre foi exemplo de superação, honestidade, paciência, dedicação e amor. como foi bom ter você como pai. sei que aproveitei cada minuto possível com você... 
                            
                        </Text>
                    </Box>
                    <Box borderRadius='5px' bg='white' height='300px' display='grid' justifyItems='center' padding='25px'>
                        <Image  boxSize='100px' borderRadius='full' src={silvio} alt='Foto do Israel'  />
                        <Heading as='h3' size='lg' color="orange.400">Silvio</Heading>
                        <Text fontSize='xl' color="teal">
                            Papai, ter você em minha vida sempre foi exemplo de superação, honestidade, paciência, dedicação e amor. como foi bom ter você como pai. sei que aproveitei cada minuto possível com você... 
                            
                        </Text>
                    </Box>
                    <Box borderRadius='5px' bg='white' height='300px' display='grid' justifyItems='center' padding='25px'>
                        <Image  boxSize='100px' borderRadius='full' src={sandro} alt='Foto do Israel'  />
                        <Heading as='h3' size='lg' color="orange.400">Sandro</Heading>
                        <Text fontSize='xl' color="teal">
                            Papai, ter você em minha vida sempre foi exemplo de superação, honestidade, paciência, dedicação e amor. como foi bom ter você como pai. sei que aproveitei cada minuto possível com você... 
                            
                        </Text>
                    </Box>
                    <Box borderRadius='5px' bg='white' height='300px' display='grid' justifyItems='center' padding='25px'>
                        <Image  boxSize='100px' borderRadius='full' src={samira} alt='Foto do Israel'  />
                        <Heading as='h3' size='lg' color="orange.400">Samira</Heading>
                        <Text fontSize='xl' color="teal">
                            Papai, ter você em minha vida sempre foi exemplo de superação, honestidade, paciência, dedicação e amor. como foi bom ter você como pai. sei que aproveitei cada minuto possível com você... 
                            
                        </Text>
                    </Box>
            </SimpleGrid>
                
            </Box>
        </>
    )
}