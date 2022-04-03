import { Box, Flex, Text } from "@chakra-ui/react";
import Head  from "next/head";
import Layout from "../layouts/navLaylout";


export default function About(){
    return(
        <Layout>
            <Head>
                <title>About</title>
            </Head>
            <Flex direction={'column'} p={2}>
                <Text>Made by Max Daniel</Text>
                <Flex>Linkedin: <a style={{color: 'blue', paddingLeft: '10px'}} target='_blank' href={'https://www.linkedin.com/in/mdanl/'}>Max Daniel</a>
                </Flex>
                <Flex>Github: <a style={{color: 'blue', paddingLeft: '10px'}} target='_blank' href={'https://github.com/MdanL'}>MdanL</a></Flex>
                
            </Flex>
        </Layout>
    )
}