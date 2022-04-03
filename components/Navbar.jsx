import { Box, Flex, Spacer } from "@chakra-ui/react";
import Link from "next/link";


export default function Navbar(){
    return(
        <Flex direction={'row'} borderBottom='1px' p={2}>
            <Box px={2} cursor={'pointer'}>
                <Link href={'/'}>LOGO</Link>
            </Box>
            <Spacer/>
            <Box px={2} cursor={'pointer'}>
                <Link href='/'>Home</Link>
            </Box>
            <Box px={2} cursor={'pointer'}>
                <Link href='/about'>About</Link>
            </Box>
        </Flex>
    )
}