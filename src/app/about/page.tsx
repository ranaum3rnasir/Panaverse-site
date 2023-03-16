"use client"
import { Box, Container, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { data1 } from '../components/database'
import Home from '../components/Home'
import Instructors from '../components/instructors'
import {RevealList, RevealWrapper} from '../../../node_modules/next-reveal'

export default function page() {
  return (<>
    <Home src='https://www.poynter.org/wp-content/uploads/2019/03/shutterstock_446870920.jpg' title='About'/>
    {data1.map((a)=>
      <Box key={a.id} bgColor=''>
        <Container maxW={1400}>
        <Flex>
              <Box flexBasis='50%' py='20px'>
                  <RevealWrapper origin='left' duration={1000} delay={300} reset={true}>
                    <Image src={a.src} alt=''></Image>
                </RevealWrapper>
            </Box>
              <Box flexBasis='50%' pt='30px'> 
                  <RevealList interval={60} duration={1000} delay={300} origin='right' reset={true} >
                      <Heading>{a.heading}</Heading>
                      <Text pt='15px'>{a.Text}</Text>
                      <Text pt='10px'>{a.Text2}</Text>
                      <Text pt='10px'>{a.Text3}</Text>
                  </RevealList>
            </Box>
        </Flex>
        </Container></Box>
        
      

    
    
    )}
    <Instructors/>

    </>
    )
}
