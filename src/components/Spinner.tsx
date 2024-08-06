"use client"
import React, { useEffect, useState } from 'react';
import { Spinner, Center, Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionCenter = motion(Center);
const MotionBox = motion(Box);

const Loading1: React.FC = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <MotionCenter
      position="fixed"
      top="0"
      left="0"
      width="100%"
      height="100%"
      backgroundImage={'/loadbg4.jpg'}
      backgroundSize={'cover'} backgroundPosition={'center'}
      zIndex="5"
      initial={{ top: 0, left: 0 }}
      animate={ { top: "100%" }}
      transition={{ duration: 2.9, ease: "easeIn" , delay: 3}}
      onAnimationComplete={() => {
        if (startAnimation) {
          // Hide the spinner after the animation completes
        }
      }}
      className="spinner-container"
    >
      <MotionBox width={'300px'} height={'300px'} backgroundImage={'/fishl.png'} backgroundSize={'cover'} backgroundPosition={'center'}
      initial={{rotate:'0deg'}}
      animate={{rotate:"360deg"}}
      transition={{duration:"5", easing:'easeIn'}}
      >
          
      </MotionBox>
    </MotionCenter>
  );
};

export default Loading1;
