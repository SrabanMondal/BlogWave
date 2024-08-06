import React, { MouseEvent, MouseEventHandler, ReactNode, useEffect } from 'react'
import { Flex,Box, Heading, Text, transition } from '@chakra-ui/react'
import { Card, CardBody,CardFooter, CardHeader, CardProps } from '@chakra-ui/react';
import { motion } from 'framer-motion'
import { Courgette, Fredoka, Comic_Neue } from 'next/font/google' 
const fred = Fredoka({ subsets: ['latin'] });
const comicNeue = Comic_Neue({ subsets: ['latin'], weight: ['400', '700'] });
import { Chewy } from 'next/font/google';
const chewy = Chewy({ subsets: ['latin'], weight: '400' });

const kash = Courgette({subsets:['latin'], weight:'400'})
import gsap from 'gsap';
const MotionBox = motion(Box);
const GlassCard:React.FC<{children:ReactNode}> = ({children})=>{
    return(
      <Card
      minH={'250px'} maxW={'lg'} 
      backdropBlur={'lg'} 
      bg="rgba(255, 255, 255, 0.2)"
      boxShadow="4px 4px 30px #0a74da66"
      backdropFilter="blur(3px)"
      border="1px solid #0a74da4d" style={{transformStyle:'preserve-3d'}}
      transition="transform 0.5s, box-shadow 0.5s"
      _hover={{
        transform: 'rotateY(20deg) rotateX(-20deg) scale(1.05)',
        boxShadow: '-4px -4px 20px 5px #a1c4fd80',
      }}
      >
        {children}
      </Card>
    )
}
const Home2 = () => {
  const heading={
    initial:{
      x:200
    },
    final:{
      x:0,
      y:0,
      transition:{
        duration: 1.5,
        ease: 'easeInOut',
      }
    }
  }
    const variants ={
        center:(i:number)=>({
            x:200,
            y:50-i*50,
        }),
        visible:(i:number)=>({
            x:0,
            y:0,
            transition: {
                duration: 1.5,
                ease: 'easeInOut',
                delay: i * 0.2,
              },
        })
    }
  return (
    <Flex width={'100vw'} height={'100vh'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap={5}>
            <MotionBox w={'100vw'} custom={0} initial="initial" whileInView="final" variants={heading} >
            <Heading color={'#FF80AB'} fontWeight={'700'} fontFamily={kash.style.fontFamily} textAlign={'center'} fontSize={['30px','30px','50px']}>Why join blog wave?</Heading>
            </MotionBox>
          <Flex
          wrap={'wrap'}
          gap={3}
          px={5}
          justifyContent={'center'}
          alignItems={'center'}
          >
            <MotionBox p={5} w={['fit-content','45%']} display={'flex'} alignItems={'center'} justifyContent={'center'} custom={1} initial="center" whileInView="visible" variants={variants}
            >
              <GlassCard>
                <CardHeader>
            <Heading textAlign={'center'} size={['lg','xl']} fontFamily={fred.style.fontFamily} color={'#E0F7FA'}>Exclusive content</Heading>
                </CardHeader>
                <CardBody>
                  <Text fontFamily={comicNeue.style.fontFamily} fontSize={['lg','xl','2xl','2xl']}>Unlock unique articles and stories. 
                    Discover hidden gems and dive deeper into your favorite topics</Text>
                </CardBody>
              </GlassCard>
            </MotionBox>
            <MotionBox p={5}  w={['fit-content','45%']} display={'flex'} alignItems={'center'} justifyContent={'center'} custom={2} initial="center" whileInView="visible" variants={variants}  >
            <GlassCard>
              <CardHeader>
              <Heading fontFamily={fred.style.fontFamily} textAlign={'center'} size={['lg','xl']} color={'#ffffff'}>Bookmark and Save</Heading>
              </CardHeader>
              <CardBody>
                <Text fontFamily={comicNeue.style.fontFamily} fontSize={['lg','xl','2xl','2xl']}>
                Get content recommendations tailored to your preferences for a unique reading experience every time
                </Text>
              </CardBody>
              </GlassCard>
            </MotionBox>
            <MotionBox p={5} w={['fit-content','45%']} display={'flex'} alignItems={'center'} justifyContent={'center'} custom={3} initial="center" whileInView="visible" variants={variants}  >
              <GlassCard>
                <CardHeader>
            <Heading fontFamily={fred.style.fontFamily} textAlign={'center'} size={['lg','xl']} color={'#ffffff'}>Personilzed Experience</Heading>
                </CardHeader>
                <CardBody>
                  <Text fontFamily={comicNeue.style.fontFamily} fontSize={['lg','xl','2xl','2xl']}>
                  Save your favorite articles to your personal library and revisit them anytime.
                  </Text>
                </CardBody>
              </GlassCard>
            </MotionBox>
            <MotionBox p={5} w={['fit-content','45%']} display={'flex'} alignItems={'center'} justifyContent={'center'} custom={4} initial="center" whileInView="visible" variants={variants}  >
              <GlassCard>
                <CardHeader>
            <Heading fontFamily={fred.style.fontFamily} textAlign={'center'} size={['lg','xl']} color={'#ffffff'}>Rich Content Creation</Heading>
                </CardHeader>
                <CardBody>
                  <Text fontFamily={comicNeue.style.fontFamily} fontSize={['lg','xl','2xl','2xl']}>
                  Add images, customize text, and personalize your posts. Create visually appealing articles with ease
                  </Text>
                </CardBody>
              </GlassCard>
            </MotionBox>
          </Flex>
        </Flex>
  )
}

export default Home2