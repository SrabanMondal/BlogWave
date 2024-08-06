import { Box, Heading, Flex,Text, Card, Tooltip } from '@chakra-ui/react'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import BlogCard from './BlogCard';
import Submarine from './Submarine';
import { Amatic_SC, Kaushan_Script } from 'next/font/google';
const amaticSC = Amatic_SC({ subsets: ['latin'], weight: ['400', '700'] });
const kash = Kaushan_Script({subsets:['latin'], weight:'400'})
const MotionBox= motion(Box);
const Home3 = () => {
  const settings = {
    dots: false,
    arrows:false,
    autoplay:true,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    initialSlide: 0,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const cards = [
    { id: 1, title: "Resume that got a software engineer a $300000 in google", image:'/blog1.webp', author:'Dev 1' },
    { id: 2, title: "Transforming Collaboration: How Design Is Becoming Everyone’s Business", image:'/blog2.webp', author:'Dev 2' },
    { id: 3, title: "What is good/bad code? An illustrated example for non-programmers", image:'/blog3.webp', author:'Dev 3' },
  ];
  return (
    <Flex w={'100vw'} h={'100vh'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap={2}>
      <MotionBox initial={{y:-50}} whileInView={{y:0}} transition={{duration:1.5, ease:'easeIn'}}>
      <Heading fontFamily={amaticSC.style.fontFamily} color={'#4ec2f7'} textAlign={'center'}>Take a look at our featured Blogs</Heading>
      </MotionBox>
      <Box maxW="80vw" minW={'85vw'} mx="auto" p={2} overflowX={'hidden'} gap={'2px'}>
      <Slider {...settings}>
        {cards.map(card => (
          <Box
            key={card.id}
            maxW={'80vw'}
            px={2}
            rounded="lg"
            mx="7px"
            my={'5px'}
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="200px"
          >
            <BlogCard title={card.title} author={card.author} image={card.image} />
          </Box>
        ))}
      </Slider>
    </Box>

        <MotionBox
        mb={'20px'}
        initial={{x:-50}}
        whileInView={{x:0}}
        transition={ {
            duration: 2.5,
            ease: 'easeInOut',
          }}
         px={5}
        >
            <Heading color={'#DDA0DD'} fontFamily={kash.style.fontFamily} textAlign={'center'} fontSize={['30px','35px','40px','50px']}>
                Ready to Dive In?
                 Join Blog Wave today
                 </Heading>
        </MotionBox>
       <Submarine href='/register' label='Register Here'/>
    </Flex>
  )
}

export default Home3