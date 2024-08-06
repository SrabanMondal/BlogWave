import React from 'react'
import { Flex, Heading, Box } from '@chakra-ui/react';
import LottieAnimation from './HomeAni';
import { animated, useSpring } from '@react-spring/web'
import { Courgette, Kaushan_Script } from 'next/font/google'
const pac = Courgette({subsets:['latin'], weight:'400'})
const Home1 = () => {
  return (
    <Flex width={'100vw'} justifyContent={'space-between'} alignItems={'center'}>
        <Flex flexDirection={'column'} gap={5} width={['90%','60%','50%']} pl={14}>

        <Heading color={'#FF8C00'} fontFamily={pac.style.fontFamily} fontSize={['30px','40px','50px','70px']}>
                About Blog Wave
        </Heading>
        <Heading color={'teal'} fontFamily={pac.style.fontFamily} fontSize={['20px','25px','27px','30px']}>
        At Blog Wave, we believe in the power of words to inspire and connect people.
        Dive into a sea of diverse articles, insightful stories, and creative content curated just for you.
        Whether you’re looking to expand your knowledge, 
        find inspiration, or just enjoy a good read, 
        Blog Wave is your go-to destination.
        </Heading>
        </Flex>
        <Flex flex={1} justifyContent={'center'} alignItems={'center'} >

        <Box  display={{ base: 'none', md: 'block' }}>
      <LottieAnimation />
    </Box>
        </Flex>
    </Flex>
  )
}

export default Home1