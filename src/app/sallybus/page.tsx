'use client'
import { Box, Center, Container, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Home from '../components/Home'
import { cards } from '../components/database'
import { RevealList, RevealWrapper } from 'next-reveal'
export default function page() {
  return (<>
    <Home src='https://www.natcom.org/sites/default/files/styles/scale_w630/public/pages/Teaching_and_Learning_Classroom_Undergraduate_Syllabi.png?itok=WFUKCTrh' title='Sallybus'/>
    <Box>
      <Container maxW={1400} py='40px'>
        <Box>
            <Center flexDir='column'>
              <Heading pb='10px' size='2xl'>Course Syllabus</Heading>
              <Text textAlign='center' px='70px'>The first three quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each</Text>
            </Center>
            <Center flexDir='column' pt='15px'>
              <Heading pb='10px'  px='70'>Common in All</Heading>
              <Text>Every participant of the program will start by completing the following three core courses:</Text>
            </Center>
        </Box>
        <Center>
            <Flex pt='50px' gap='20px'  >
                <Box textAlign='center' p='30' shadow='dark-lg' borderRadius='20px' w='330px'>
                  <Heading >Quarter I</Heading>
                  <Text textAlign='center' pt='5px'>CS-101: Object-Oriented Programming using TypeScript and Typescript for React</Text>
                </Box>
                <Box  textAlign='center' p='30' shadow='dark-lg' borderRadius='20px' w='330px'>
                  <Heading>Quarter II</Heading>
                  <Text textAlign='center' pt='5px'>W2-201: Developing Planet-Scale Web 2.0 Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform</Text>
                </Box>
                <Box  textAlign='center' p='30' shadow='dark-lg' borderRadius='20px' w='330px'>
                  <Heading >Quarter III</Heading>
                  <Text textAlign='center' pt='5px'>$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development</Text>
                </Box>
            </Flex>
        </Center>
      </Container>
    </Box>
    <Box >
      
      <Container maxW={1500} bgSize='cover' bgAttachment='fixed' bgImage='https://img.freepik.com/free-vector/colorful-watercolor-rainbow-background_125540-151.jpg?w=2000'>
        {cards.map((elem)=>(
        <Box key={elem.id} >
            <Center>
              <Box textAlign='center'pt='40px'>
                <RevealList interval={60} origin='top' delay={300} duration={1000} reset={true}>
                    <Heading>{elem.h1}</Heading>
                    <Text pt='10px' >{elem.t1}</Text>
                </RevealList>    
              </Box>    
           </Center>
           <Center>
                <Flex gap='30px' py='20px'>
                    <RevealWrapper origin='left'  duration={1000} reset={true}>
                      <Box borderRadius='20px' shadow='dark-lg' p='50px' h='200px' w='350px' textAlign='center'>
                        <Heading >{elem.h2}</Heading>
                        <Text>{elem.t2}</Text>
                      </Box>
                    </RevealWrapper>
                    <RevealWrapper origin='right'  duration={1000} reset={true}>
                      <Box borderRadius='20px' shadow='dark-lg' p='50px' h='200px' w='350px' textAlign='center'>
                        <Heading>{elem.h3}</Heading>
                        <Text>{elem.t3}</Text>
                      </Box>
                    </RevealWrapper>
                </Flex>
          </Center>
        </Box>
        ))}

      </Container>
    </Box>
    
    </>
  )
}
