"use client"
import React, { useState, useEffect, useRef } from 'react';
import FullScreenSpinner from './Spinner';
import { Box, Heading } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import Scene from './ThreeScene';
import ScrollAnimation from './Example';
import { Lato } from 'next/font/google';
const MotionBox = motion(Box);
const karla = Lato({subsets:['latin'], weight:'700'});
const Loading: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const motionbox = useRef<HTMLDivElement>(null)
  const homebox = useRef<HTMLDivElement>(null)
  useEffect(() => {
    // Simulate a loading delay
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  const handleAnimationComplete = () => {
    console.log('Framer Motion animation complete');
    if(motionbox.current){
    motionbox.current.style.display='none';
    }
    document.body.style.overflow = 'auto';
  };
  const handleAnimationStart = () => {
    console.log('Framer Motion animation start');
    document.body.style.overflow = 'hidden';
  };
  const [scroll, setscroll] = useState<number>(0)
  let scrolltop=0;
  const handleScroll = () => {
    if (homebox.current) {
      const scrollContainer = homebox.current;
      const scrollTop = scrollContainer.scrollTop;
      const scrollHeight = scrollContainer.scrollHeight;
      const clientHeight = scrollContainer.clientHeight;

      const scrolledFromTop = scrollTop;
      const scrolledFromBottom = scrollHeight - scrollTop - clientHeight;

      console.log('Scrolled from top:', scrolledFromTop);
      setscroll(scrolledFromTop);
      
      // Adjust clip size based on scroll position from the top
    }
  };
  return (
    <Box position={'relative'}>
      <FullScreenSpinner />
    
      {!loading && (
        <>
        <MotionBox overflowX={'hidden'} onScroll={handleScroll} ref={homebox} w={'100vw'} h={'100vh'} overflowY={'auto'} backgroundSize={'cover'} backgroundPosition={'30% 50%'} backgroundImage={'/homebg1.jpg'}
        initial={{transform: 'translateY(-100%)'}}
        whileInView={{transform: 'translateY(-0%)'}}
        transition={{duration: 4.1, ease: 'easeIn'}}
        onAnimationComplete={handleAnimationComplete}
        >
          <ScrollAnimation scroll={scroll}/>
        </MotionBox>
        <MotionBox ref={motionbox} minH={'100vh'} backgroundSize={'cover'} backgroundPosition={'30% 50%'} backgroundImage={'/homebg2.jpg'}
        initial={{transform: 'translateY(-200%)', display:'flex'}}
        whileInView={{transform: 'translateY(0%)'}}
        transition={{duration: 4.07, ease: 'easeIn'}}
       onAnimationStart={handleAnimationStart}
        justifyContent={'center'}
          alignItems={'center'}
          zIndex={7}
        >
         <Heading fontSize={'50px'} as={'h1'}>WELCOME</Heading>
        </MotionBox>
        
        </>
      )}
    </Box>
  );
};

export default Loading;