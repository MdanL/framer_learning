import { Box, Button, Center, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from 'framer-motion';

export default function BigCard(){
    return(
        <Container maxW={'95vw'} >
            <Box borderRadius={20} bgColor={'#000'} h={'90vh'} m={'5rem'}>
                <Flex direction={'row'} height={'100%'} p={10} >
                    <Box color="white" w={'50%'} m={'2rem'}>
                        <Box py={5}>
                            <Text color="white">Mt. K2, Pakistan</Text>
                        </Box>
                        <Heading>Unique Scenery</Heading>
                        <Text fontWeight={'semibold'} fontSize={'xl'} p={2}>Hike one of the steepest mountains of the world, spend your time on beautiful beaches on Brazil, visit historic monuments on Italy, whatever you want.</Text>
                        <Text p={2}>We have tour packages for all parts of the world, which can be customized to make a perfect vacation for you.</Text>
                        <Text p={2}>Using our Vacation plan builder, you can create your tour road map, and we will take care of everything else.</Text>
                        <Button color={'black'}>See more</Button>
                    </Box>
                    <motion.div 

                        
                        whileHover={{
                            
                            transition: {duration: 0.5},
                            backgroundImage: "linear-gradient(to top left, rgba(0,0,0,0), rgba(0,0,0,0.4)), linear-gradient(to top right, rgba(0,0,0,0), rgba(0,0,0,0.4)), linear-gradient(to bottom left, rgba(0,0,0,0), rgba(0,0,0,0.4)),linear-gradient(to bottom right, rgba(0,0,0,0), rgba(0,0,0,0.4)), url(https://images.unsplash.com/photo-1627896157734-4d7d4388f28b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)"
                        }}
                        style={
                            {
                                'width': '50%', 
                                'background-size': 'cover',
                                'background-repeat': 'no-repeat',
                                'background-image': 'linear-gradient(to top left, rgba(0,0,0,0), rgba(0,0,0,0.1)), linear-gradient(to top right, rgba(0,0,0,0), rgba(0,0,0,0.2)), linear-gradient(to bottom left, rgba(0,0,0,0), rgba(0,0,0,0.2)),linear-gradient(to bottom right, rgba(0,0,0,0), rgba(0,0,0,0.2)), url(https://images.unsplash.com/photo-1627896157734-4d7d4388f28b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)',
                                'justifyContent': 'center',
                                'display': 'flex',
                                'alignItems': 'center',
                            }
                        }
                        >
                            <motion.button 
                            style={
                                {
                                    'background-color':'rgba(255,255,255,0)', 
                                    'padding': '1rem',
                                    'color': 'rgba(255,255,255,0)',
                                    
                                    
                                }
                            }
                            whileHover={{
                                scale: 1.5,
                                color: 'rgba(0,0,0,1)',
                                backgroundColor: 'rgba(255,255,255,1)',
                                borderRadius: 20,
                                transition: {duration: 0.2, ease: "easeInOut"},
                            }}>
                               See more images
                            </motion.button>
                        </motion.div>
                    </Flex>
            </Box>
        </Container>
    )
}