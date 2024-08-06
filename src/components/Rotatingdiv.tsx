import React from 'react';
import { motion } from 'framer-motion';
import { Box } from '@chakra-ui/react';

const RotatingDiv: React.FC = () => {
  return (
    <Box
      position="fixed"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      width="100vw"
      height="100vh"
    >
      <motion.div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: 'blue',
          borderRadius: '50%',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
        animate={{
          rotate: [0, 360], // Rotation of the div itself
          x: [0, 200, 0, -200, 0], // Horizontal movement for revolving
          y: [0, 200, 0, -200, 0], // Vertical movement for revolving
        }}
        transition={{
          rotate: {
            repeat: Infinity,
            duration: 2,
            ease: 'linear'
          },
          x: {
            repeat: Infinity,
            duration: 4,
            ease: 'linear'
          },
          y: {
            repeat: Infinity,
            duration: 4,
            ease: 'linear'
          }
        }}
      />
    </Box>
  );
};

export default RotatingDiv;
