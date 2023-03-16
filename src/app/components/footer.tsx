import { Box, Container, Grid, Image, Heading, SimpleGrid, Text} from '@chakra-ui/react'
// import Image from 'next/image'
import React from 'react'
import logo from '../../../public/logo (2).png'
import Link from 'next/link'
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'

export default function Footer() {
  return (
    <Box bg='black'>
        <Container maxW='1600'py='50px'>
            <SimpleGrid textAlign={{lg:'start',base:'center'}} spacing='30px' py='10px' templateColumns={{base:'repeat(1,1fr)',lg:'repeat(4,1fr)'}}>
            <Box> 
                <Heading color='white' pb='10px'>About Us</Heading>
                <Image m={{base:'auto',lg:'0'}} src='logo (2).png' height={50} alt='panaverse-logo'></Image>
                <Text pt='15px' color='grey' pr={{lg:'60px',base:'0'}}>The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.</Text>
            </Box>
            <Box>
                <Heading color='white'>Useful Links</Heading>
                <Grid pt='40px' color='grey'>
                    <Link href=''>Home</Link>
                    <Link href=''>Sallybus</Link>
                    <Link href=''>About</Link>
                    <Link href=''>Explore</Link>
                    <Link href=''>Contact</Link>
                </Grid>
            </Box>
            <Box>
                <Heading color='white'>Follow Us</Heading>
                    <Grid pt='40px' color='grey'>
                        <Link href=''>Facebook</Link>
                        <Link href=''>Youtube</Link>
                        <Link href=''>Twitter</Link>
                        <Link href=''>LinkedIn</Link>
                        <Link href=''>Github</Link>
                    </Grid>
            </Box>
            <Box>
                <Heading color='white'>Contact Us</Heading>
                    <Grid pt='40px' color='grey'>
                        
                        <Link href=''>+92 331 527 4891</Link>
                        <Link href=''>ranaum3rnasir@gmail.com</Link>
                        <Link href=''>Islamabad, Pakistan</Link>
                    </Grid>
            </Box>
            </SimpleGrid>
        </Container>
    </Box>
  )
}
