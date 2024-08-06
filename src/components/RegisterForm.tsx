"use client"
import { Box, FormControl, FormLabel, Input, Button, VStack, Heading, Divider } from '@chakra-ui/react'
import React, { FormEvent, useState } from 'react'
import Otp from './Otp'
import ProfileForm from './ProfileForm'
const RegisterForm = () => {
    const [reg, setreg] = useState(false);
    const [otpsuccess, setotpsuccess] = useState(false)
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formdata = new FormData(e.currentTarget);
        console.log(formdata.get('name'));
        setreg(true);
    }
  return (
    <Box w={['80vw','60vw','60vw','22vw']} minW={'22vw'} maxW={'95vw'} bgPosition={'bottom'} pointerEvents={'all'} bgImage={'/card5.avif'} bgSize={'cover'} px={2} py={3} border={'4px'} borderColor={'#4299E1'} rounded={'10px'} boxShadow={'-5px 10px 40px #54a3e4'}>
        {!reg ?
    <form onSubmit={handleSubmit}>
        <Heading textAlign={'center'}>Register</Heading>
        <VStack spacing={5}>
        <FormControl>
            <FormLabel color={'white'}>Email</FormLabel>
            <Input name='name' backdropBlur={'lg'} backdropFilter={'blur(2px)'} bgColor={'#00000030'} type='email' isRequired/>
        </FormControl>
        <FormControl>
            <FormLabel color={'white'}>Password</FormLabel>
            <Input name='password' variant='filled' type='password' isRequired/>
        </FormControl>
        <Button type='submit' colorScheme='teal'>Register</Button>
        </VStack>
    </form>
    :
            !otpsuccess ?
        <Otp otpsuccess={setotpsuccess}/>
        :
        <ProfileForm/>
    }
    </Box>
  )
}

export default RegisterForm