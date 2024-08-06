import React from 'react'
import TransitionLink from '@/components/TransistionLink'
import { Text,Box, useDisclosure, Button } from '@chakra-ui/react'
import RippleCanvas from '@/components/RippleCanvas'
import Submarine from '@/components/Submarine'
import RegisterForm from '@/components/RegisterForm'
import BubbleEff from '@/components/BubbleEf'
const page = () => {
  return (
    <>
     <Box w={'100vw'} h={'100vh'} overflow={'hidden'} position='relative' bgSize={'cover'}>
     <RippleCanvas/>
     <BubbleEff/>
     <Box position={'absolute'} pointerEvents={'none'} bottom={0} left={0} w={'100vw'} h={'99vh'} bgSize={'cover'} bgPos={'bottom'} bgImage={'/texture2.png'}/>
      <Box position={'absolute'} pointerEvents={'none'} top={0} left={0} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} width={'100vw'} height={'100vh'}>
      <Box h={'70vh'} w={'100vw'} p={0} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <RegisterForm/>
      </Box>
      <Box h={'30vh'} w={'100vw'} display={'flex'} justifyContent={'center'} alignItems={'center'} >
        <Box pointerEvents={'all'}>
            <Submarine href='/login' label='Login Here'/>
   
        </Box>
      </Box>
      </Box>
    </Box>
    </>

  )
}

export default page