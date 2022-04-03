import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { ScrollIndicator } from "./ScrollIndicator";

export default function Header(){
    const [innerSize, setInnerSize] = useState({});

    useEffect(() => {
        return () => {
            if(typeof window !== 'undefined'){
                setInnerSize({
                    height: window.innerHeight,
                    width: window.innerWidth
                });
            }
        };
    }, []);

    return(
        <>
            <ScrollIndicator/>
            <motion.div 
            
            whileHover={{
                transition: {duration: 0.5}
                
            }}
            >
                <Box 
                    bgPosition='absolute' 
                    bgAttachment='scroll' 
                    bgSize={'cover'} 
                    overflow={"hidden"} 
                    bgRepeat={'no-repeat'} 
                    height={'80vh'}
                    style={{'background-image': 'linear-gradient(to top left, rgba(0,0,0,0), rgba(0,0,0,0.4)), linear-gradient(to top right, rgba(0,0,0,0), rgba(0,0,0,0.4)), linear-gradient(to bottom left, rgba(0,0,0,0), rgba(0,0,0,0.4)),linear-gradient(to bottom right, rgba(0,0,0,0), rgba(0,0,0,0.4)), url(luke-stackpoole-fuji.jpg)'}}
                    >
                    <Flex 
                        p={'20%'}
                        color={'white'} 
                        w={innerSize.width}  
                        h={innerSize.height}
                        direction={'column'} 
                        justifyContent={'center'}
                        alignItems={'flex-right'}
                        >
                        <Heading color={'white'}>Vacation Planner</Heading>
                        <Text p={5}>Plan your entire vacation with us!</Text>
                        <Button bgGradient={'linear(to-l, gray.400, gray.800)'} maxW={'12rem'}>See more</Button>
                    </Flex>
                </Box>
            </motion.div>
        </>
    )
}