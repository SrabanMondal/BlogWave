// pages/index.js
"use client"
import React, {useEffect, useRef} from 'react';
import Bubble1 from './Bubble1';
import Bubble2 from './Bubbl2';
import { Box, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Bubble3 from './Bubble3';
import Bubble4 from './Bubble4';
const MotionBox = motion(Box);

export default function BubbleEff() {
 const boxref = useRef<HTMLDivElement>(null)
 const variants={
  small:{
    y:0
  },
  large:(i:number)=>({
    y:'-50vh',
    repeatDelay:i*0.5,
    repeat:Infinity,
    ease:'linear',
    transition:{duration:12.1, ease:'linear'}
  })
 }
 useEffect(() => {
  if(boxref.current){

    gsap.to(boxref.current,{y:-200, duration:6, repeat:Infinity})
  }
 }, [])
 
  return (
    <Box pointerEvents={'none'} style={{ display: 'flex', flexDirection: 'row',justifyContent:'space-between', alignItems:'flex-end', flexWrap: 'nowrap', width: '100vw', height: '100vh', position:'absolute', top:0, left:0, pointerEvents:'none' }}>
      <Flex justifyContent={'space-evenly'}>
      <MotionBox position={'relative'} initial={{y:0}} animate={{y:'-65vh'}} transition={{duration:12.1, repeat:Infinity, ease:'linear'}} w={'120px'} h={'120px'} >
        <Bubble1 />
      </MotionBox>
      <MotionBox position={'relative'} initial={{y:0}} animate={{y:'-65vh'}} transition={{duration:12.1, repeat:Infinity, ease:'linear', delay:1}} w={'120px'} h={'120px'} >
        <Bubble2/>
      </MotionBox>
      </Flex>
      <Flex justifyContent={'space-evenly'}>
      <MotionBox position={'relative'} initial={{y:0}} animate={{y:'-65vh'}} transition={{duration:12.1, repeat:Infinity, ease:'linear'}} w={'120px'} h={'120px'} >
        <Bubble3 />
      </MotionBox>
      <MotionBox position={'relative'} initial={{y:0}} animate={{y:'-65vh'}} transition={{duration:12.1, repeat:Infinity, ease:'linear', delay:1}} w={'120px'} h={'120px'} >
        <Bubble4/>
      </MotionBox>
      </Flex>
    </Box>
  );
}
