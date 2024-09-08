"use client"
import { Box, FormControl, FormLabel, Input, Button, VStack, Heading, Divider } from '@chakra-ui/react'
import React, { FormEvent, useState } from 'react'
import Otp from './Otp'
import ProfileForm from './ProfileForm'
import { register } from '@/libs/auth'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import FormSpinner from './FormSpinner'
import PassInput from './PassInput'
const RegisterForm = () => {
    const [reg, setreg] = useState<string>('');
    const [email, setemail] = useState('');
    const [pending, setpending] = useState(false);
    const [otpsuccess, setotpsuccess] = useState(false)
    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setpending(true);
        const formdata = new FormData(e.currentTarget);
        const password = formdata.get('password') as string;
        const email = formdata.get('email') as string;
        setemail(email);
        const response = await register(password,email);
        if(response){
            setreg(response);
        }
        else{
            setreg('');
            toast.error('User already exists');
        }
        setpending(false);
    }
  return (
    <Box w={['80vw','60vw','60vw','30vw']} minW={'22vw'} color={'#fff'} maxW={'95vw'} bgPosition={'bottom'} pointerEvents={'all'} bgImage={'/card5.avif'} bgSize={'cover'} px={2} py={3} border={'4px'} borderColor={'#4299E1'} rounded={'10px'} boxShadow={'-5px 10px 40px #54a3e4'}>
        {reg.length<1 ?
    <form onSubmit={handleSubmit}>
        <Heading textAlign={'center'}>Register</Heading>
        <VStack spacing={5}>
        <FormControl>
            <FormLabel fontWeight={'600'} >Email</FormLabel>
            <Input name='email' backdropBlur={'lg'} backdropFilter={'blur(2px)'} bgColor={'#00000030'} type='email' isRequired/>
        </FormControl>
        <FormControl>
            <FormLabel fontWeight={'600'}>Password</FormLabel>
           <PassInput/>
        </FormControl>
        <Button type='submit' colorScheme='teal'>Register</Button>
        </VStack>
    </form>
    :
            !otpsuccess ?
        <Otp otpsuccess={setotpsuccess} otp1={reg} email1={email} login={false}/>
        :
        <ProfileForm email={email}/>
    }
     {pending &&

<Box display={'flex'} justifyContent={'center'} alignItems={'center'} w={'100%'} h={'100%'} top={0} left={0} position={'absolute'} backdropBlur={'md'} backdropFilter={'blur(2px)'} bgColor={'#4299e140'}>
    <FormSpinner/>
</Box>
}
    </Box>
  )
}

export default RegisterForm