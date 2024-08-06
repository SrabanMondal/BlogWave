import React from 'react'
import TransitionLink from '@/components/TransistionLink'
import ParticleCanvas from '@/components/ParticleCanvas'
import { Box, Button } from '@chakra-ui/react'
import Submarine from '@/components/Submarine'
import LoginForm from '@/components/LoginForm'
const page = () => {
  return (
    <>
    <Box position='relative' bgImage={'/homebg2.jpg'} bgSize={'cover'} h={'100vh'} w={'100vw'}>
      <ParticleCanvas/>
      <Box position={'absolute'} pointerEvents={'none'} top={0} left={0} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} width={'100vw'} height={'100vh'}>
      <Box h={'70vh'} w={'100vw'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
         <LoginForm/>
      </Box>
      <Box h={'30vh'} w={'100vw'} display={'flex'} justifyContent={'center'} alignItems={'center'} >
        <Box pointerEvents={'all'}>
            <Submarine href='/register' label='Register Here' />
        </Box>
      </Box>
      </Box>
    </Box>
    </>

  )
}

export default page