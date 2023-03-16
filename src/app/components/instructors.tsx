import { Box, Center, Container, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { RevealWrapper } from 'next-reveal'
import React from 'react'
import {data} from '../components/database'

export default function Instructors() {
  return ( <>
        <Box>
            <Container maxW={1400}>
            <Box  pb='20px' ><Center><Heading size='2xl'>Instructors</Heading></Center></Box>
                <RevealWrapper reset={true}>
                <Flex flexDir='row'>
                    {data.map((b)=>
                        <Box  key={b.id} pb='20px' px='10px'>
                                <Center><Image borderRadius='full' w='100px' h='130px' src={b.src} alt=''></Image>
                                </Center>
                                <Heading textAlign='center' size='md'>{b.heading}</Heading>
                                <Text textAlign='center' px='10px' size='sm'>{b.text}</Text>
                        </Box>
                    )}</Flex>
                    </RevealWrapper>
        </Container>
    </Box>
    </>
  )
}
