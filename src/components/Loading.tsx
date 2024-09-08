"use client"
import React, { useState, useEffect, useRef, useMemo } from 'react';
//import FullScreenSpinner from './Spinner';
const FullScreenSpinner = React.lazy(()=>import('./Spinner'))
import { Box, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';
//import ScrollAnimation from './Example';
const MotionBox = motion(Box);
const Loading: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const motionbox = useRef<HTMLDivElement>(null)
  const homebox = useRef<HTMLDivElement>(null)
  const ScrollAnimation = useMemo(()=>React.lazy(()=>import('./Example')),[])
  useEffect(() => {
    const startLoadingTimeout = () => {
      requestAnimationFrame(() => {
        setLoading(false);
      });
    };
  
    setTimeout(startLoadingTimeout, 1900);
  }, []);
  const handleAnimationComplete = () => {
    document.body.style.overflow = 'auto';
  };
  const handleAnimationStart = () => {
    document.body.style.overflow = 'hidden';
  };
  const [scroll, setscroll] = useState<number>(0)
  const handleScroll = () => {
    if (homebox.current) {
      const scrollContainer = homebox.current;
      const scrollTop = scrollContainer.scrollTop;

      const scrolledFromTop = scrollTop;

      setscroll(scrolledFromTop);
    }
  };
  return (
    <Box position={'relative'}>
      <FullScreenSpinner />
    
      {!loading && (
        <>
        <MotionBox opacity={1} overflowX={'hidden'} onScroll={handleScroll} ref={homebox} w={'100vw'} h={'100vh'} overflowY={'auto'} backgroundSize={'cover'} backgroundPosition={'30% 50%'} backgroundImage={'/homebg1.jpg'}
        initial={{transform: 'translateY(-100%)'}}
        animate={{transform: 'translateY(0%)'}}
        transition={{duration: 2.54, ease: 'linear'}}
        onAnimationComplete={handleAnimationComplete}
        onAnimationStart={handleAnimationStart}
        >
         <ScrollAnimation scroll={scroll} />
        </MotionBox>
        </>
      )}
    </Box>
  );
};

export default Loading;