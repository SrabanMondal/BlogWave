import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Box } from '@chakra-ui/react'
import ThreeBoat from './BoatThree';
import TransitionLink from './TransistionLink';
const MotionBox = motion(Box);
const Boat = () => {
  const [start, setstart] = useState(false)
  return (
    <MotionBox position={'absolute'} initial={{x:0}} onClick={()=>setstart(true)} animate={start&&{x:'60vw'}} transition={{duration:3}}>
      <TransitionLink href='/login' label='' open={false}>
        <ThreeBoat/>
      </TransitionLink>
    </MotionBox>
  )
}

export default Boat