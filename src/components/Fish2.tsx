import React from 'react'
import { motion } from 'framer-motion'
import { Box } from '@chakra-ui/react'
const MotionBox = motion(Box)
const Fish2 = () => {
  return (
    <>
    <MotionBox bgImage={'/fish2.png'} bgRepeat={'no-repeat'} w={'100vw'} h={'400px'}
    initial={{x: 10, y: 0}}
    animate={{x: '140vw'}}
    transition={{duration:5, repeat:Infinity}}
    >
    </MotionBox>
    <MotionBox bgImage={'/fish2.png'} bgRepeat={'no-repeat'} w={'100vw'} h={'400px'}
    initial={{x: 10, y: 0}}
    animate={{x: '140vw'}}
    transition={{duration:5, repeat:Infinity}}
    >
    </MotionBox>
    <MotionBox bgImage={'/fish4.png'} bgRepeat={'no-repeat'} w={'100vw'} h={'400px'}
    initial={{x:'calc(100vw - 100px)', y: 0}}
    animate={{x: '-40vw'}}
    transition={{duration:5, repeat:Infinity}}
    >
    </MotionBox>
    <MotionBox bgImage={'/fish3.png'} bgRepeat={'no-repeat'} w={'100vw'} h={'400px'}
    initial={{x:'calc(100vw - 100px)', y: 0}}
    animate={{x: '-40vw'}}
    transition={{duration:5, repeat:Infinity}}
    >
    <MotionBox bgImage={'/fish3.png'} bgRepeat={'no-repeat'} w={'100vw'} h={'400px'}
    initial={{x:'calc(100vw - 100px)', y: 0}}
    animate={{x: '-40vw'}}
    transition={{duration:5, repeat:Infinity}}
    >
    </MotionBox>
    </MotionBox>
    <MotionBox bgImage={'/fish2.png'} bgRepeat={'no-repeat'} w={'100vw'} h={'400px'}
    initial={{x: 10, y: 0}}
    animate={{x: '140vw'}}
    transition={{duration:5, repeat:Infinity}}
    >
    </MotionBox>
    <MotionBox bgImage={'/fish.png'} bgRepeat={'no-repeat'} w={'100vw'} h={'400px'}
    initial={{x:'calc(100vw - 100px)', y: 0}}
    animate={{x: '-40vw'}}
    transition={{duration:5, repeat:Infinity}}
    >
    </MotionBox>
    <MotionBox bgImage={'/fish2.png'} bgRepeat={'no-repeat'} w={'100vw'} h={'400px'}
    initial={{x: 10, y: 0}}
    animate={{x: '140vw'}}
    transition={{duration:5, repeat:Infinity}}
    >
    </MotionBox>
    <MotionBox bgImage={'/fish2.png'} bgRepeat={'no-repeat'} w={'100vw'} h={'400px'}
    initial={{x: 10, y: 0}}
    animate={{x: '140vw'}}
    transition={{duration:5, repeat:Infinity}}
    >
    </MotionBox>
    <MotionBox bgImage={'/fish2.png'} bgRepeat={'no-repeat'} w={'100vw'} h={'400px'}
    initial={{x: 10, y: 0}}
    animate={{x: '140vw'}}
    transition={{duration:5, repeat:Infinity}}
    >
    </MotionBox>
    <MotionBox bgImage={'/fish3.png'} bgRepeat={'no-repeat'} w={'100vw'} h={'400px'}
    initial={{x:'calc(100vw - 100px)', y: 0}}
    animate={{x: '-40vw'}}
    transition={{duration:5, repeat:Infinity}}
    ></MotionBox>
         </>
  )
}

export default Fish2