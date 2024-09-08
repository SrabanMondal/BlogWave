import { Box, Text, Heading, Image, Flex, Icon, Divider, Avatar } from "@chakra-ui/react";
import { ChevronUpIcon } from "@chakra-ui/icons";
import { FaEye, FaComment, FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import { useState } from "react";
import Head from "next/head";
import { useSpring, animated } from "@react-spring/web";
import TransitionLink from "./TransistionLink";
type CardProps = {
    title: string;
  owner: string;
  views: number;
  comments: number;
  likes:number;
  profilepic: string;
  coverpic: string;
  id: string;
}
const Card:React.FC<CardProps> = ({ title, owner, views, comments, profilepic, coverpic, likes, id }) => {
  const [hover, sethover] = useState(false)
  const imgAnimation = useSpring({
    transform: hover?'scale(1.2) translateX(20px)':'scale(1) translateX(0px)',
    opacity: hover ? 0.7 : 1,
    config: {tension: 1000, friction: 400 },
  });
  return (
    <Box
      bg=""
      borderRadius="2xl"
      overflow="hidden"
      boxShadow="xl"
      height={'180px'}
      position="relative"
      onMouseEnter={()=>sethover(true)}
      onMouseLeave={()=>sethover(false)}
    >
      <Flex color={'#333333'} h={'100%'} justifyContent={'flex-end'} alignItems={'center'} border={'4px solid #434343'} w={'80%'} pos='absolute' right={2} top={0} bgSize={'cover'} bgImage={'/sample.webp'} rounded={'lg'} >
        <Flex w='55%' h={'100%'} bg={''} direction={'column'} justifyContent={'space-around'}>
          <Box h={'45%'} py={1} px={3} w={'100%'}>
          <TransitionLink href={`/blog/${id}`} label='' open={false}>
          <Heading p={1}  whiteSpace={'wrap'} fontSize={'30px'}>{title.length>9?title.slice(0,9)+'...':title}</Heading>
         </TransitionLink>
          </Box>
          <Divider width={'80%'} boxShadow={'5px 5px 5px #FFE4C4'} pos={'absolute'} top={'54%'} right={4} border={'2px solid #D2691E'} rounded={'full'}/>
          <Box h={'40%'} mt={5} mb={1} >
          <Flex p={1} alignItems={'center'} gap={2}>
          <Avatar boxShadow={'2px 4px 20px #1E90FF'} size={'sm'} src={profilepic}/>
          <Text fontWeight={'bold'} fontSize={'20px'}>{owner}</Text>
          </Flex>
          <Flex alignItems={'center'} gap={2} justifyContent={'flex-end'} px={4}>
            <Icon as={FaThumbsUp} size="20px" color={'#191919'} />
            <Text color={'#191919'}>{likes}</Text>
            <Icon as={FaEye} size="20px" color={'#191919'} />
            <Text color={'#191919'}>{views}</Text>
            <Icon as={FaComment} size="20px" color={'#191919'} />
            <Text color={'#191919'}>{comments}</Text>
          </Flex>
          </Box>
        </Flex>
      </Flex>
     <Box h={'100%'} w='50%' pos='absolute' top={0} left={0} display={'flex'} alignItems={'center'} rounded={'lg'}>
      <animated.div style={{...imgAnimation,height:'70%',width:'100%',border:'4px solid #d3d3d3', boxShadow:'4px 4px 10px 2px #191919',borderRadius:'10px'}}>
       <Image
        h="100%"
        w="100%"
        alt="blog pic"
        objectFit="cover"
        opacity={1}
        src={coverpic}
        rounded={'lg'}
        />
        </animated.div>
     </Box>
    </Box>
  );
};

export default Card;
