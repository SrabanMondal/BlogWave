import { Box, Heading, Flex,BoxProps } from '@chakra-ui/react'
import React, { useEffect, useState, useRef, useMemo } from 'react'
import { useAnimation, Variants } from 'framer-motion';
import { motion } from 'framer-motion'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
const Submarine = React.lazy(()=>import('./Submarine'))
import { Amatic_SC, Kaushan_Script } from 'next/font/google';
import { getsample } from '@/libs/user';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import SampleCard from './SampleCard';
import TransitionLink from './TransistionLink';
const amaticSC = Amatic_SC({ subsets: ['latin'], weight: ['400', '700'] });
const kash = Kaushan_Script({subsets:['latin'], weight:'400'})
const MotionBox= motion(Box);
interface BubbleProps extends BoxProps {
  delay: number;
}
const Bubble: React.FC<BubbleProps> = ({ delay }) => {
  const ref= useRef<HTMLDivElement>(null)
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
    ref={ref}
    display={['none','hidden']}
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
      onAnimationComplete={()=>{
        if(ref.current){
          ref.current.style.display="none";
        }
      }}
      animate={anime?'animate':''}
 
    ></MotionBox>
  );
};

const Home3 = () => {
  const [card, setcard] = useState<any>(null)
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
  useEffect(() => {
    const fetchBlogs = async ()=>{
      const response = await getsample();
      if(response.success){
        setcard(response.message)
      }
  }
  fetchBlogs();
  }, [])
  
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
  }, [inView, controls]);

  const bubbles = useMemo(()=>Array.from({ length: 15 }).map((_, index) => (
    <Bubble
      key={index}
      delay={Math.random() * 1}
    />
  )),[]);
  return (
    <Flex position={'relative'} w={'100vw'} h={'100vh'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap={2}>
      <MotionBox initial={{y:-50}} whileInView={{y:0}} transition={{duration:1.5, ease:'easeIn'}}>
      <Heading fontFamily={amaticSC.style.fontFamily} color={'#87d7ff'} textAlign={'center'}>Take a look at our featured Blogs</Heading>
      </MotionBox>
      <Box maxW="80vw" minW={'85vw'} mx="auto" p={2} overflowX={'hidden'} gap={'2px'} pt={3}>
      <Slider {...settings}>
        {card && card.map((card:any) => (
           
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
           
            <SampleCard id={card._id} title={card.title} profilepic={card.profilepic} coverpic={card.coverpic} owner={card.owner} views={card.views} likes={card.likes} comments={card.comments} />
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
       {bubbles}
    </Flex>
  )
}

export default Home3