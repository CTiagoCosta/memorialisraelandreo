import { Flex } from "@chakra-ui/react";
import { Logo } from "./LogoChakra";
import { SidebarNav } from "./SidebarNav";

export function Header(){
    return (
        <Flex 
            as="header"
            w="100%"
            mx="auto"
            px="60"
            align="center"
            bg="green.900"
        >

        <Logo />

        <SidebarNav />

    </Flex>
        
    )
}