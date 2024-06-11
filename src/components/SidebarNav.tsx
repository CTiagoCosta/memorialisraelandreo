import { Flex, Button } from "@chakra-ui/react";

export function SidebarNav(){
    return (
        <Flex
            align="center"
            ml="auto"
        >

            <Button color='white' m='20px' variant='link' size='lg'>
                Sobre o Israel
            </Button>
            <Button color='white' m='20px' variant='link' size='lg'>
                Galeria
            </Button>
            <Button color='white' m='20px' variant='link' size='lg'>
                Depoimentos
            </Button>

        </Flex>
        
    )
}