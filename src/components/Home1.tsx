import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Flex, Heading, Box, BoxProps } from '@chakra-ui/react';
import LottieAnimation from './HomeAni';
import { animated, useSpring } from '@react-spring/web'
import { Courgette, Kaushan_Script } from 'next/font/google'
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const MotionBox = motion(Box)
const pac = Courgette({subsets:['latin'], weight:'400'})
interface BubbleProps extends BoxProps {
  delay: number;
}
const Bubble: React.FC<BubbleProps> = ({ delay }) => {
  const ref= useRef<HTMLDivElement>(null)
  const [anime, setanime] = useState(false);
  const bubbleVariants: Variants = {
    initial: { y: '0', opacity: 1 },
    animate: {
      y: '-150vh',
      opacity: 0,
      transition: { duration: 3, ease: 'easeOut', delay },
    },
  };

  return (
    <MotionBox
    ref={ref}
    display={['none','block']}
      variants={bubbleVariants}
      width={`${Math.random() * 30 + 50}px`}
      height={`${Math.random() * 30 + 50}px`}
      bgColor={'#CBEFFF40'}
      backdropBlur={'lg'}
      backdropFilter={'blur(2px)'}
      borderRadius="50%"
      position="absolute"
      bottom={`${Math.random() * 20+0}%`}
      left={`${Math.random() * 100}%`}
      initial="initial"
      onViewportEnter={()=>{
        setanime(true);
      }}
      onAnimationComplete={()=>{
        if(ref.current){
          ref.current.style.display="none";
        }
      }}
      animate={anime?'animate':''}
 
    ></MotionBox>
  );
};

const Home1 = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
  }, [inView, controls]);

  const bubbles = useMemo(()=>Array.from({ length: 15 }).map((_, index) => (
    <Bubble
      key={index}
      delay={Math.random() * 1}
    />
  )),[]);
  return (
    <Flex position={'relative'} width={'100vw'} justifyContent={'space-between'} alignItems={'center'} pt={'50px'}>
        <Flex flexDirection={'column'} gap={5} width={['90%','60%','50%']} pl={14}>

        <Heading color={'#FF8C00'} fontFamily={pac.style.fontFamily} fontSize={['30px','40px','50px','70px']}>
                About Blog Wave
        </Heading>
        <Heading color={'#f3f3f3'} fontFamily={pac.style.fontFamily} fontSize={['20px','25px','27px','30px']}>
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
        {bubbles}
    </Flex>
  )
}

export default Home1