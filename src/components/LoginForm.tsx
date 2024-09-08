"use client"
import { Box, FormControl, FormLabel, Input, Button, VStack, Heading, Divider } from '@chakra-ui/react'
import React, { FormEvent, useState } from 'react'
import FormSpinner from './FormSpinner'
import { useFormStatus } from 'react-dom'
import Forget from './Forget'
import { login } from '@/libs/auth'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation'
import PassInput from './PassInput'
const LoginForm = () => {
    const router = useRouter();
    const [pending, setpending] = useState(false);
    const [forget, setforget] = useState(false)
    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setpending(true);
        const formdata = new FormData(e.currentTarget);
        const password = formdata.get('password') as string;
        const email = formdata.get('email') as string;
        const response = await  login(email, password)
        if(response.success){
            toast.success(response.message);
            router.push('/home');
        }
        else{
            toast.error(response.message);
            setpending(false);
        }
    }

  return (
    <Box w={['80vw','60vw','60vw','22vw']} position={'absolute'}  minW={'22vw'} maxW={'80vw'} pointerEvents={'all'} bgPos={'bottom'} bgImage={'/card1.avif'} bgSize={'cover'} px={2} py={3} border={'4px'} borderColor={'#4299E1'} rounded={'10px'} boxShadow={'-5px 10px 40px #54a3e4'}>
    {!forget ?<form onSubmit={handleSubmit} >
        <Heading color={'teal'} textAlign={'center'}>Login</Heading>
        <VStack spacing={5} color={'teal'}>
        <FormControl>
            <FormLabel fontWeight={'600'}>Email</FormLabel>
            <Input name='email' backdropBlur={'lg'} backdropFilter={'blur(2px)'} bgColor={'#00000030'} type='email' isRequired/>
        </FormControl>
        <FormControl>
            <FormLabel fontWeight={'600'}>Password</FormLabel>
            <PassInput/>
        </FormControl>
        <Button variant={'link'} color='blue.700' onClick={()=>setforget(true)} >Forget Password</Button>
        <Button type='submit' colorScheme='green'>Login</Button>
        </VStack>
    </form>:
    <Forget/>
}
    {pending &&

    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} w={'100%'} h={'100%'} top={0} left={0} position={'absolute'} backdropBlur={'md'} backdropFilter={'blur(2px)'} bgColor={'#4299e140'}>
        <FormSpinner/>
    </Box>
    }
    </Box>
  )
}
export default LoginForm

