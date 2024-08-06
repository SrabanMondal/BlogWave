"use client"
import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Box, Heading, Flex } from '@chakra-ui/react';
import { Lato } from 'next/font/google';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Home from './Home';
import Home1 from './Home1';
import Fish1 from './Fish1';
import Fish2 from './Fish2';
import Home3 from './Home3';
import Home2 from './Home2';
import Text3 from './Text3';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import BubbleAnimation from './Bubble';
const MotionBox = motion(Box);
type ScrollProps={
    scroll:number
}
const karla = Lato({subsets:['latin'], weight:'700'});
const ScrollAnimation: React.FC<ScrollProps> = ({scroll}) => {
    const box = useRef<HTMLDivElement>(null);
    const [ref, inView]= useInView();
   
  return (
    <Box maxW={'100vw'} h={'200vh'} ref={box} position={'relative'}>
    <Box position={'fixed'} display={'flex'} w={'100vw'} h={'100vh'} justifyContent={'center'} alignItems={'center'}>
       <Box  mt={'150px'} ref={ref} w={['90vw','80vw','70vw','430px']} height={'100px'}>
          <Text3 inView={inView}/>
       </Box>
    </Box>
    <MotionBox overflow={'hidden'} backgroundSize={'cover'} backgroundPosition={'center'} border={'20px'} borderColor={'black'} backgroundImage={'/ocean.jpeg'} width={'100vw'} height={'100vh'} top={'0'} left={'0'} position={'sticky'} zIndex={'5'} clipPath={`circle(${(scroll/500)*100}% at 50% 70%)`}>
          <Parallax style={{ top: '0', left: '0' }} className='relative' pages={4} >
      <ParallaxLayer className='' offset={0} factor={1} speed={0.05}>
          <Home/>
      </ParallaxLayer>
      <ParallaxLayer offset={0.99} speed={0.05} factor={3.5} style={{backgroundImage:'url(/under1.jpg)', backgroundSize:'cover'}}>
        <Box width={'100vw'} height={'100vh'} bgSize={'cover'} ></Box>
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={1.5} factor={1} style={{backgroundImage:'url(/bg2.png)', backgroundSize:'cover', backgroundPosition:'center top'}}>
        <Box width={'100vw'} height={'100vh'} bgSize={'cover'} ></Box>
      </ParallaxLayer>
      <ParallaxLayer offset={1.2} speed={0.4} factor={1}>
        <Fish1/>
      </ParallaxLayer>
      <ParallaxLayer offset={1.8} speed={0.6} factor={1}>
        <Fish2/>
      </ParallaxLayer>
      <ParallaxLayer offset={3} speed={0.3} factor={1} style={{backgroundImage:'url(/bg3.png)', backgroundSize:'cover', backgroundPosition:'center'}}>
        <Box width={'100vw'} height={'100vh'} bgSize={'cover'} ></Box>
      </ParallaxLayer>
      <ParallaxLayer className='' offset={3} speed={3.5} factor={1} >
        <Box width={'100vw'} height={'100vh'} bgSize={'cover'} bgPosition={'70% bottom'} bgImage={'/texture2.png'}></Box>
      </ParallaxLayer>
      <ParallaxLayer className='' offset={2} speed={1.5} factor={1} >
        <Home2/>
      </ParallaxLayer>
      <ParallaxLayer offset={1} factor={1} speed={0.25}>
        <Home1/>
      </ParallaxLayer>
      <ParallaxLayer offset={3} factor={1} speed={0.25}>
        <Home3/>
      </ParallaxLayer>
      <ParallaxLayer offset={1} factor={1} speed={0.7} style={{pointerEvents:'none'}}>
        <BubbleAnimation/>
      </ParallaxLayer>
      <ParallaxLayer offset={2} factor={1} speed={0.7} style={{pointerEvents:'none'}}>
        <BubbleAnimation/>
      </ParallaxLayer>
      <ParallaxLayer offset={3} factor={1} speed={0.7} style={{pointerEvents:'none'}}>
        <BubbleAnimation/>
      </ParallaxLayer>
    </Parallax>
    </MotionBox>
    </Box>
  );
};

export default ScrollAnimation;
