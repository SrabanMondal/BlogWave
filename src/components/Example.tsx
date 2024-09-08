"use client"
import React, { useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Box, Heading } from '@chakra-ui/react';
import { DynaPuff, Lato } from 'next/font/google';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useInView } from 'react-intersection-observer';
const dyna = DynaPuff({subsets:['latin'], weight:"700"})
const MotionBox = motion(Box);

const karla = Lato({ subsets: ['latin'], weight: '700' });

type ScrollProps = {
  scroll: number;
};

const ScrollAnimation: React.FC<ScrollProps> = ({ scroll }) => {
  const Text3 = useMemo(()=>React.lazy(() => import('./Text3')),[]);
  const Home = useMemo(()=>React.lazy(() => import('./Home')),[]);
  const Home3 = useMemo(()=>React.lazy(() => import('./Home3')),[]);
  const Home2 = useMemo(()=>React.lazy(() => import('./Home2')),[]);
  const Home1 = useMemo(()=>React.lazy(() => import('./Home1')),[]);
  const boxRef = useRef<HTMLDivElement>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const clipPathValue = useMemo(
    () => `circle(${Math.min((scroll / 500) * 100, 100)}% at 50% 70%)`,
    [scroll]
  );

  const Fish1 = useMemo(() => React.lazy(() => import('./Fish1')), []);
  const Fish2 = useMemo(() => React.lazy(() => import('./Fish2')), []);
  const MemoizedBubbleAnimation = useMemo(
    () => React.lazy(() => import('./Bubble')),
    []
  );

  return (
    <Box maxW={'100vw'} h={'200vh'} ref={boxRef} position={'relative'}>
      <Box
        position={'fixed'}
        display={'flex'}
        w={'100vw'}
        h={'100vh'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Box
          mt={'150px'}
          ref={ref}
          w={['90vw', '80vw', '70vw', '430px']}
          height={'100px'}
        >
          <React.Suspense fallback={<Heading textAlign={'center'} fontFamily={dyna.style.fontFamily} fontWeight={900} fontSize={'4xl'} backgroundClip={'text'} bgImage={'/waterText.jpg'}
    textShadow={'3px 3px 8px #00ffff70'}
    sx={{
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        WebkitTextStroke: '2px #434343',
      }} p={2} my={2}>Blog Wave</Heading>}>
            <Text3 inView={inView} />
            <Heading textAlign={'center'} fontFamily={dyna.style.fontFamily} fontWeight={900} fontSize={'4xl'} backgroundClip={'text'} bgImage={'/waterText.jpg'}
    textShadow={'3px 3px 8px #00ffff70'}
    sx={{
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        WebkitTextStroke: '2px #434343',
      }} p={2} my={2}>Swipe Up!</Heading>
          </React.Suspense>
        </Box>
      </Box>
      <MotionBox
        overflow={'hidden'}
        backgroundSize={'cover'}
        backgroundPosition={'center'}
        border={'20px'}
        borderColor={'black'}
        backgroundImage={'/ocean.jpeg'}
        width={'100vw'}
        height={'100vh'}
        top={'0'}
        left={'0'}
        position={'sticky'}
        zIndex={'5'}
        clipPath={clipPathValue}
      >
          <Parallax style={{ top: '0', left: '0' }} className='relative' pages={4}>
            <ParallaxLayer offset={0} factor={1} speed={0.05}>
              <Home />
            </ParallaxLayer>
            <ParallaxLayer
              offset={0.99}
              speed={0.05}
              factor={3.5}
              style={{ backgroundImage: 'url(/under1.jpg)', backgroundSize: 'cover' }}
            >
              <Fish1 />
              <Fish2 />
            </ParallaxLayer>
            <ParallaxLayer
              offset={2}
              speed={1.5}
              factor={1}
              style={{
                backgroundImage: 'url(/bg2.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center top',
              }}
            />
            <ParallaxLayer offset={1.2} speed={0.4} factor={1} />
            <ParallaxLayer offset={1.8} speed={0.6} factor={1} />
            <ParallaxLayer
              offset={3}
              speed={0.3}
              factor={1}
              style={{
                backgroundImage: 'url(/bg3.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <ParallaxLayer
              className=''
              offset={3}
              speed={3.5}
              factor={1}
              style={{
                backgroundSize: 'cover',
                backgroundPosition: '70% bottom',
                backgroundImage: 'url(/texture2.png)',
              }}
            />
            <ParallaxLayer offset={2} factor={1} speed={1.5}>
              <Home2 />
            </ParallaxLayer>
            <ParallaxLayer offset={1} factor={1} speed={0.25}>
              <Home1 />
            </ParallaxLayer>
            <ParallaxLayer offset={3} factor={1} speed={0.25}>
              <Home3 />
            </ParallaxLayer>
            
          </Parallax>
      </MotionBox>
    </Box>
  );
};

export default ScrollAnimation;
