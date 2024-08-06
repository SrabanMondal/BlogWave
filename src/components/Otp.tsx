import React, { Dispatch, SetStateAction, useState, Fragment, useRef, ChangeEvent, useEffect } from 'react'
import { Box, FormControl, FormLabel, Input, Button, VStack, Heading, Divider, HStack, Flex } from '@chakra-ui/react'
import { PinInput, PinInputField } from '@chakra-ui/react'
import { motion } from 'framer-motion'
type OtpProps={
    otpsuccess: Dispatch<SetStateAction<boolean>>
}
const MotionBox = motion(Box);
const Otp:React.FC<OtpProps> = ({otpsuccess}) => {
    const box = useRef<HTMLDivElement>(null);
    const [otpsent, setotpsent] = useState<number>(0);
    const [placeholder, setplaceholder] = useState('')
    const [block, setblock] = useState(false)
    const [count, setcount] = useState<number|null>(null)
    const [pin, setpin] = useState('');
    const handleChange = (value: string) => {
        setpin(value);
        console.log(value);
        if(pin.length==4){
            otpsuccess(true);
        }
    }
    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (count !== null && count > 0) {
          timer = setTimeout(() => setcount(count - 1), 1000);
        } else if (count === 0) {
          setblock(false);
          setcount(null);
        }
    
        return () => clearTimeout(timer);
      }, [count]);
    const [email, setemail] = useState('');
    const handleClick = async ()=>{
        setblock(true);
        setcount(10);
        if(email.length>0){

            console.log(email);
            setTimeout(()=>{
                setotpsent(prev=>prev+1);
            },1000)
        }
        else{
            setplaceholder('Enter email address');
        }
    }
  return(
    <>
    <Heading >Verify your account</Heading>
    {
        !otpsent?
        <>
        <VStack>
        <FormControl>
        <FormLabel>Email Address</FormLabel>
        <Input border={'2px'} borderColor={'#0492C2'} isRequired value={email} onChange={(e:ChangeEvent<HTMLInputElement>)=>setemail(e.target.value)} key={0} type="email" placeholder={placeholder} _placeholder={{color:'#ff0800'}} />
        </FormControl>
        <Button onClick={handleClick} type='submit' variant="solid" colorScheme="blue">
        Send OTP
        </Button>
        </VStack>
        </>
        :
        <Fragment key={otpsent}>
            <Heading textAlign={'left'} w={'100%'} fontSize={'15px'}>Otp sent to {email}</Heading>
            <VStack>
        <FormControl>
        <FormLabel>Enter OTP</FormLabel>
        <HStack justifyContent={'center'}>
            <PinInput otp type='number' onChange={handleChange}>
                <PinInputField required border={'2px'} borderColor={'black'}/>
                <PinInputField required border={'2px'} borderColor={'black'}/>
                <PinInputField required border={'2px'} borderColor={'black'}/>
                <PinInputField required border={'2px'} borderColor={'black'}/>
            </PinInput>
        </HStack>
        </FormControl>
        <Flex justifyContent={'space-evenly'} w={'100%'}>
        <Button type="submit" colorScheme='green'>Submit</Button>
        <Button type="submit" isDisabled={block} colorScheme='blue' onClick={handleClick}>{block?`Resend in ${count}`:'Resend OTP'}</Button>
        </Flex>
            </VStack>
        </Fragment>
    }
    </>
  )
}

export default Otp