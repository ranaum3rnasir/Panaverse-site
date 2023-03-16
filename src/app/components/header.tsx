"use client"
import React from 'react'
import {Box, Flex, Container, SimpleGrid, Button, Menu, MenuButton, MenuList, IconButton, MenuItem} from '@chakra-ui/react'
import Image from 'next/image'
import { HamburgerIcon } from '@chakra-ui/icons'
import logo from '../../../public/logo (2).png'
import Link from 'next/link'

export default function Header() {
    return (
        
        <Box boxShadow='dark-lg'>
            <Container maxW={1600}>
                <SimpleGrid mt='8px' templateColumns='repeat( 3, 1fr)'>
                    <Box>
                        <Image src={logo} height={75} alt='panaverse logo'></Image>
                    </Box>
                    <Flex display={{base:'none',lg:'flex'}} placeItems='center' color= 'black' fontSize={18} fontWeight='semibold' gap='10'>
                        <Link href='/'>Home</Link>
                        <Link href='/sallybus'>Sallybus</Link>
                        <Link href='/about'>About</Link>
                        <Link href='/explore'>Explore</Link>
                        <Link href='/contact'>Contact</Link>
                    </Flex>
                    <Box>
                        <Button display={{base:'none',lg:'flex'}} mt='12px' size = 'lg' colorScheme='teal' float='right'>Apply</Button>
                    </Box>
                    <Box pt='20px'>
                        <Menu >
                            <MenuButton float='right' display={{base:'initial',lg:'none'}}
                                as={IconButton}
                                aria-label='Options'
                                icon={<HamburgerIcon />}
                                variant='outline'
                            />
                            <MenuList>
                            <Link href='/'>
                                <MenuItem >
                                    Home 
                                </MenuItem></Link>
                                <Link href='/sallybus'>
                                <MenuItem >
                                    Sallybus 
                                </MenuItem></Link>
                                <Link href='/explore'>
                                <MenuItem >
                                    Explore
                                </MenuItem></Link>
                                <Link href='/about'>
                                <MenuItem >
                                    About
                                </MenuItem></Link>
                                <Link href='/contact'>
                                <MenuItem >
                                    Contact Us
                                </MenuItem></Link>
                            </MenuList>
                            </Menu>
                    </Box>
                </SimpleGrid>
            </Container>
            </Box>
  )
}
