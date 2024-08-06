import React, { FormEvent, useState } from 'react'
import { Box, FormControl, FormLabel, Input, Button, VStack, Heading, Divider } from '@chakra-ui/react'
import ImageInput from './ImageInput'
const ProfileForm = () => {
    const [name, setname] = useState('');
    const [file, setfile] = useState<File|null>(null)
    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
       console.log(name, file);
    }
  return (
    <>
     <form onSubmit={handleSubmit}>
        <Heading textAlign={'center'}>Profile</Heading>
        <VStack spacing={2}>
        <ImageInput setFile={setfile}/>
        <FormControl>
            <FormLabel color={'white'}>Name</FormLabel>
            <Input aria-required name='name' value={name} onChange={(e)=>{setname(e.target.value)}} backdropBlur={'lg'} backdropFilter={'blur(2px)'} bgColor={'#00000030'} type='text' isRequired/>
        </FormControl>
        <Button mt={3} type='submit' colorScheme='teal'>Register</Button>
        </VStack>
    </form>
    </>
  )
}

export default ProfileForm