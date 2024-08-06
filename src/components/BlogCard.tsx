import { Box, Card, CardBody, CardHeader, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
const MotionBox = motion(Box);
type CardProps={
    image:string,
    title: string,
    author: string
}
const BlogCard:React.FC<CardProps> = ({image,title,author}) => {
  const [hover, sethover] = useState(false)
  return (
    <Card h={'200px'}
     onMouseEnter={()=>sethover(true)}
     onMouseLeave={()=>sethover(false)}
     position={'relative'}
      border="1px solid #191919"
      rounded={'lg'}
      transition="transform 0.5s, box-shadow 0.5s"
      _hover={{
        transform: 'scale(1.05)',
        boxShadow: '0px 0px 20px 5px #19191980',
      }}
    >
        <CardBody position={'relative'} h={'140px'} p={0}  border="1px solid #191919"
      rounded={'lg'}>
            <Image objectFit={hover?'cover':''} objectPosition={hover?'center':''} src={image} alt={'blog'} layout='fill' className=' rounded-lg'/>
            <MotionBox w={hover?'100%':'0%'} p={0} transition={{duration:3, ease:'easeOut'}} h={'100%'} bg={'#ffffff60'} backdropBlur={'lg'} backdropFilter={'blur(2px)'}/>
        </CardBody>
        <CardHeader rounded={'lg'} color={'black'} gap={2} zIndex={10} left={0} w={'100%'} top={hover?'50%':'65%'} position={'absolute'}  bgColor={hover?'none':'#f8f8ff'} h={hover?'50%':'35%'} p={2} display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
          <Heading  fontSize={hover?'20px':'14px'}>{title}</Heading>
          <Text  fontSize={hover?'15px':'12px'}>created by {author}</Text>
        </CardHeader>
    </Card>
  )
}

export default BlogCard