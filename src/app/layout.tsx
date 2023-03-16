'use client'
import { ChakraProvider,Image } from "@chakra-ui/react"
import Footer from "./components/footer"
import Header from "./components/header"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
           <head>
              <title>Umer Nasir</title>
              <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
              <meta name="Description" content="Panaverse Website wsing Next.js & Chakra"></meta>
              <meta name="Author" content="Rana Umer Nasir - 0331-5274891"></meta>
              <link rel="icon" href="../../public/99120681.png" ></link>
          </head>
      <body>
        <ChakraProvider><Header/>{children}
        <Footer/></ChakraProvider></body>
    </html>
  )
}
