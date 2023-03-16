"use client"
import React from 'react'
import {Box, Container, Heading} from '@chakra-ui/react'

export default function Home(hello : any) {
  return (
      <Box bgImage={hello.src} bgAttachment='fixed' py='250px' bgSize='cover'>
          <Container maxW={1400}>
              <Heading size='2xl' color='black' pl='100px'>{hello.title}</Heading>

        </Container>
        </Box>
  )
}
