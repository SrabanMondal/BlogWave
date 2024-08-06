import React from 'react'
import { motion } from 'framer-motion'
import { Box } from '@chakra-ui/react'
const MotionBox = motion(Box)
const Fish1 = () => {
  return (
    <>
    <MotionBox bgImage={'/fish1.png'} bgRepeat={'no-repeat'} w={'100vw'} h={'400px'}
    initial={{x: 10, y: 0}}
    whileInView={{x: '130vw'}}
    transition={{duration:5}}
    >
    </MotionBox>
    <MotionBox bgImage={'/fish3.png'} bgRepeat={'no-repeat'} w={'100vw'} h={'400px'}
    initial={{x:'calc(100vw - 100px)', y: 0}}
    whileInView={{x: '-30vw'}}
    transition={{duration:5}}
    >
    </MotionBox>
    <MotionBox bgImage={'/fish2.png'} bgRepeat={'no-repeat'} w={'100vw'} h={'400px'}
    initial={{x: 10, y: 0}}
    whileInView={{x: '130vw'}}
    transition={{duration:5}}
    >
    </MotionBox>
    <MotionBox bgImage={'/fish4.png'} bgRepeat={'no-repeat'} w={'100vw'} h={'400px'}
    initial={{x:'calc(100vw - 100px)', y: 0}}
    whileInView={{x: '-30vw'}}
    transition={{duration:5}}
    >
    </MotionBox>
    <MotionBox bgImage={'/fish1.png'} bgRepeat={'no-repeat'} w={'100vw'} h={'400px'}
    initial={{x: 10, y: 0}}
    whileInView={{x: '130vw'}}
    transition={{duration:5}}
    >
    </MotionBox>
    <MotionBox bgImage={'/fish4.png'} bgRepeat={'no-repeat'} w={'100vw'} h={'400px'}
    initial={{x:'calc(100vw - 100px)', y: 0}}
    whileInView={{x: '-30vw'}}
    transition={{duration:5}}
    >
    </MotionBox>
    <MotionBox bgImage={'/fish2.png'} bgRepeat={'no-repeat'} w={'100vw'} h={'400px'}
    initial={{x: 10, y: 0}}
    whileInView={{x: '130vw'}}
    transition={{duration:5}}
    >
    </MotionBox>
    <MotionBox bgImage={'/fish3.png'} bgRepeat={'no-repeat'} w={'100vw'} h={'400px'}
    initial={{x:'calc(100vw - 100px)', y: 0}}
    whileInView={{x: '-30vw'}}
    transition={{duration:5}}
    >
    </MotionBox>
    <MotionBox bgImage={'/fish2.png'} bgRepeat={'no-repeat'} w={'100vw'} h={'400px'}
    initial={{x: 10, y: 0}}
    whileInView={{x: '140vw'}}
    transition={{duration:5}}
    >
    </MotionBox>
    <MotionBox bgImage={'/fish3.png'} bgRepeat={'no-repeat'} w={'100vw'} h={'400px'}
    initial={{x:'calc(100vw - 100px)', y: 0}}
    whileInView={{x: '-40vw'}}
    transition={{duration:5}}
    ></MotionBox>
    <MotionBox bgImage={'/fish2.png'} bgRepeat={'no-repeat'} w={'100vw'} h={'400px'}
    initial={{x: 10, y: 0}}
    whileInView={{x: '140vw'}}
    transition={{duration:5}}
    >
    </MotionBox>
         </>
  )
}

export default Fish1