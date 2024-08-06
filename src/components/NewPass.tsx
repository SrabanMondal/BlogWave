import { useRouter } from 'next/navigation'
import React, { FormEvent, useState } from 'react'
import { Box, FormControl, FormLabel, Input, Button, VStack, Heading, Divider, HStack, Flex, Text } from '@chakra-ui/react'
import Head from 'next/head'
const NewPass = () => {
    const router = useRouter();
    const [error, seterror] = useState(false);
    const handleSubmit = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const formdata = new FormData(e.currentTarget);
        const pass = formdata.get('pass');
        const rpass = formdata.get('rpass');
        if(pass==rpass){
            window.location.reload();
        }
        else{
            seterror(true);
        }
    }
  return (
    <>
    <Heading>New Password</Heading>
    <form onSubmit={handleSubmit}>
    <VStack>
        <FormControl>
            <FormLabel>New Password</FormLabel>
            <Input name='pass' required type="password" placeholder="Enter new password" />
        </FormControl>
        <FormControl>
            <FormLabel>Confirm New Password</FormLabel>
            <Input name='rpass' required type="password" placeholder="Confirm new password" />
        </FormControl>
        {error && <Text color='red'>Passwords not match</Text>}
        <Button type='submit' colorScheme='teal'>Save</Button>
    </VStack>
    </form>
    </>
  )
}

export default NewPass