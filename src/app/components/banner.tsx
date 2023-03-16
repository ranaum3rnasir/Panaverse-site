import {Container, Box,Flex,Heading,Image,Text,Button} from '@chakra-ui/react'
import { RevealWrapper } from 'next-reveal'
export default function Banner(){
    return( <>
        <Box bgImage='https://static.vecteezy.com/system/resources/previews/005/152/375/original/modern-futuristic-neon-purple-background-free-vector.jpg'>
            <Container maxW={1400}>
            <RevealWrapper reset={true}>   
                <Flex pt={{lg:'150px',base:'30px'}} pb='80px' px='10px'display={{lg:'flex',base:'grid'}}>     
                        <Box flexBasis={{lg:'50%',base:'100%'}} pr={{lg:'100px',base:'5px'}}>
                            <Heading  color='black' px={{lg:'initial', base:'10px'}}>Prepare yourself for the Next Generation of Internet with Panaverse</Heading>
                            <Text mt='10px' color='black'>One Year Panaverse DAO Earn as you Learn Program. Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, and Ambient Computing/IoT Technologies</Text>
                            <Button mt='10px'size='lg' colorScheme='teal'>More Info</Button>
                        </Box>
                            <Box mt={{lg:'-100',base:'none'}} flexBasis={{lg:'50%',base:'0'}} >
                                <Image w={{lg:'500px',base:'450px'}} h={{lg:'600px',base:'350px'}} src='logo2.webp' alt='image'></Image>
                            </Box>
                    </Flex>
                    </RevealWrapper>
                </Container>
                </Box>
                <Box pt='50px' pb={{lg:'50px',base:'none'}}>
                    <Container maxW={1400}>
                        <Flex display={{lg:'flex',base:'grid'}}>
                                <Box flexBasis='50%' >
                                <RevealWrapper  origin='left' duration={1500} distance='200px'  reset={true}>   
                                    <Image src='logo4.webp' alt='' w='400px' h='300px' pl='70px'></Image>
                                    </RevealWrapper>
                                </Box>      
                                <Box flexBasis='50%' alignItems='center' pt='60px' pr='60px'pl={{base:'30px',lg:'none'}}>
                                <RevealWrapper origin='right' duration={1500} distance='200px'  reset={true}>
                                    <Heading size='2xl'>Program Of Studies</Heading>
                                    <Text mt='15px'>This curriculum is intended for beginners who want to learn software development from the ground up. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects.</Text>
                                    <Button size='lg' mt='10px' colorScheme='teal'>Read more</Button>
                                </RevealWrapper>
                                    </Box>
                        </Flex>
                    </Container>
                </Box>
                <Box pt={{lg:'50px',base:'10px'}} pb='50px'>
                    <Container maxW={1400}>
                        <Flex display={{lg:'flex',base:'grid'}}>
                            <Box flexBasis='50%' alignItems='center' pt={{lg:'60px',base:'40px'}} pr='60px' pl={{base:'30px',lg:'none'}}>
                                <RevealWrapper  origin='left' duration={1500} distance='200px'  reset={true}> 
                                    <Heading size='2xl'>Program Of Studies</Heading>
                                    <Text mt='15px'>This curriculum is intended for beginners who want to learn software development from the ground up. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects.</Text>
                                    <Button size='lg' mt='10px' colorScheme='teal'>Read more</Button>
                                </RevealWrapper>
                            </Box>
                            <Box  flexBasis='50%' >
                                <RevealWrapper  origin='right' duration={1500} distance='200px'  reset={true}> 
                                    <Image src='logo4.webp' alt='' w='400px' h='300px' pl='70px' pt={{base:'25px',lg:'none'}}></Image>
                                </RevealWrapper>
                            </Box>
                        </Flex>
                    </Container>
                </Box>
                </>
    )
}