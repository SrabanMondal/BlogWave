import { background, Box, Button, Flex, Heading } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { animated, useSpring } from '@react-spring/web'
import { Lilita_One, Courgette, Kaushan_Script, Pacifico, Montserrat } from 'next/font/google'
const lilta = Lilita_One({subsets:['latin'], weight:'400'})
import TransitionLink from './TransistionLink'
//import ThreeTube from './ThreeTube'
const ThreeTube = React.lazy(()=>import('./ThreeTube'))
//import Boat from './Boat'
const Boat = React.lazy(()=>import('./Boat'))
const kash = Kaushan_Script({weight:"400", subsets:['latin']})
const AnimeBox = animated(Box);
const Home = () => {
  const waveStyle = useSpring({
    from: { backgroundPositionX:'0%' },
    to: { backgroundPositionX:'100%' },
    config: { duration: 30000 }, 
    loop: true,
  });
  const waveStyle1 = useSpring({
    from: { backgroundPositionX:'40%' },
    to: { backgroundPositionX:'100%' },
    config: { duration: 10000 }, 
    loop: true,
  });
  const waveStyle2 = useSpring({
    from: { backgroundPositionX:'60%' },
    to: { backgroundPositionX:'100%' },
    config: { duration: 5000 }, 
    loop: true,
  });
  return (
    <Box w={'100vw'} h={'100vh'}  flexDirection={'column'} alignItems={'center'} display={'flex'} >
        <Flex rounded={'md'} backdropBlur={'lg'} backdropFilter={'blur(3px)'} opacity={0.9} brightness={100} boxShadow={'0px 5px 9px 4px #191919'} w={'100vw'} py={2} alignItems={'center'} justifyContent={'space-between'} bgImage={'/head3.avif'} bgPos={'bottom'} >
            <Flex gap={2} alignItems={'center'}>
            <Image src={'/logo1.png'} alt='logo' width={70} height={70}/>
            <Heading style={{background: 'linear-gradient(45deg, #c0c0c0, #ffffff, #e0e0e0)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textShadow: '0px 0px 5px 5px rgba(255, 255, 255, 0.9)',}} fontFamily={lilta.style.fontFamily} fontSize={['40','50']}>BW</Heading>
            </Flex>
            <Flex mr={5} gap={3}>
                <TransitionLink href='/register' label='' open={false}>
                <Button bg={'linear-gradient(145deg, #3a3a3a, #202020)'} boxShadow={'0px 0px 15px 5px #1a1a1a, -5px -5px 15px #4a4a4a'} color={'white'} _hover={{bg:'linear-gradient(145deg, #4a4a4a, #2a2a2a)', boxShadow:'5px 5px 15px #2a2a2a, -5px -5px 15px #5a5a5a' }}  >Register</Button>
                </TransitionLink>
                <TransitionLink href='/login' label='' open={false}>
                <Button bg={'linear-gradient(145deg, #3a3a3a, #202020)'} boxShadow={'0px 0px 15px 5px #1a1a1a, -5px -5px 15px #4a4a4a'} color={'white'} _hover={{bg:'linear-gradient(145deg, #4a4a4a, #2a2a2a)', boxShadow:'5px 5px 15px #2a2a2a, -5px -5px 15px #5a5a5a' }}>Login</Button>
                </TransitionLink>
            </Flex>
        </Flex>
        <Box  flex={1} px={4} justifyContent={'center'} flexDirection={'column'} alignItems={'center'} display={'flex'}  >
        <Heading color={'#00BFFF'} fontFamily={kash.style.fontFamily} fontSize={['40px','60px']}>Welcome to <span className=' text-[#FF8C00]'>Blog Wave</span></Heading>
        <Heading color={'#DC143C'} fontFamily={kash.style.fontFamily} fontSize={['30px','50px']}>Discover, Read, and Get Inspired</Heading>
        <Heading color={'#DDA0DD'} fontFamily={kash.style.fontFamily} fontSize={['30px','40px']}>Ready to Dive In ?</Heading>
        </Box>
        <Flex position={'relative'} w={'100vw'} h={'100px'} >
          <Flex position={'absolute'} justifyContent={'center'} alignItems={'center'} h={'400px'} w={'100vw'} left={0} top={['-100%','-140%']}>
            <Box w={'200px'} h={'200px'} position={'absolute'} top={'10%'} left={['10%','30%']}>
            <ThreeTube/>
            </Box>
            <Box w={'200px'} h={'400px'} position={'absolute'} top={['15%','10%']} left={['30%','60%']}>
             <Boat/>
            </Box>
          </Flex>
          <AnimeBox position={'absolute'} zIndex={6} style={waveStyle} w={'100%'} h={'100%'} bgSize={'800px 100px'} bgPos={'50% 90%'} bgImage={'/wave12.png'} />
          <AnimeBox position={'absolute'} zIndex={4} style={waveStyle1} w={'100%'} h={'100%'} bgSize={'800px 100px'} bgPos={'60% 90%'} bgImage={'/wave22.png'} />
          <AnimeBox position={'absolute'} zIndex={2} style={waveStyle2} w={'100%'} h={'100%'} bgSize={'800px 100px'} bgPos={'70% 90%'} bgImage={'/wave1.png'} />
        </Flex>
    </Box>
  )
}

export default Home