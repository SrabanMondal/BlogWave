import React, { useEffect, useState } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface BubbleProps extends BoxProps {
  delay: number;
}
const MotionBox= motion(Box);
const Bubble: React.FC<BubbleProps> = ({ delay }) => {
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
      animate={anime?'animate':''}
 
    ></MotionBox>
  );
};

const BubbleAnimation: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
  }, [inView, controls]);

  const bubbles = Array.from({ length: 30 }).map((_, index) => (
    <Bubble
      key={index}
      delay={Math.random() * 1}
    />
  ));

  return (
    <Box pointerEvents={'none'} position="relative" top="0" left="0" width="100vw" height="100vh" overflow="hidden">
     {bubbles}
    </Box>
  );
};

export default BubbleAnimation;
