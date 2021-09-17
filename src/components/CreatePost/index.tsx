import { Flex, Avatar, Stack, Textarea, Button, Text, Icon } from '@chakra-ui/react'
import { RiLockUnlockLine } from 'react-icons/ri'
import { FormEvent, useState } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { database } from '../../services/firebase';
import { Container } from '../Container'

export const CreatePost = () => {
    const [post, setPost] = useState('');
    const { user } = useAuth();

    async function handleCreatePost(ev: FormEvent) {
        ev.preventDefault()

        const postRef = database.ref('posts');

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const firebasePost = await postRef.push({
            name: user?.name,
            avatar: user?.avatar,
            content: post,
        })

        setPost('');
    }

    return (
        <Container>
            <Flex>
               <Avatar
                  name={user?.name}
                  src={user?.avatar}
                  border='1px solid #ed8936'
                  size='lg' 
                />
                <Stack
                    flex='1'
                    ml='5'
                >
                    <Textarea 
                        placeholder='O que está pensando ?' 
                        fontSize='sm'
                        maxH='150px'
                        focusBorderColor='orange.500'
                        borderColor='gray.700'
                        bg='gray.900'
                        _hover={{ 
                            bg: 'gray.900'
                        }}
                        value={post}
                        onChange={(ev) => setPost(ev.target.value)}
                    />
                    <Flex>
                        <Flex align='center' >
                            <Icon as={RiLockUnlockLine} fontSize='20' />
                            <Text fontSize='xs' ml='2' >Esse post será público</Text>
                        </Flex>
                        <Button colorScheme='orange' ml='auto' px='7' onClick={handleCreatePost} >
                            <Text fontSize='sm' >Postar</Text>
                        </Button>
                    </Flex>
                </Stack>
            </Flex>
        </Container>
    )
}