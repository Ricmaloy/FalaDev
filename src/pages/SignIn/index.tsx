import { Flex, Button, Stack, Heading, Text } from '@chakra-ui/react'
import { RiGoogleFill } from 'react-icons/ri'
import { useHistory } from 'react-router'
import { Input } from '../../components/Form/Input'
import { useAuth } from '../../hooks/useAuth'

export function SignIn() {
    const history = useHistory();
    const { user, signInWithGoogle } = useAuth();

    async function handleSignIn() {
        if(!user) {
           await signInWithGoogle() 
        }
        
        history.push('/');
    }

    return (
        <Flex
          w='100vw'
          h='100vh'
          align='center'
          justify='center'
        >
            <Flex
                flexDir='column'
                width='100%'
                maxW='360px'
                bg='gray.800'
                p='8'
                borderRadius='8'
            >
                <Heading textAlign='center' as='h1' size='lg' mb='6' >Login</Heading>

                <Stack spacing='4' >
                    <Input type='email' label='Email' name='email' />
                    <Input type='password' label='Senha' name='password' />
                </Stack>
                <Button
                  type='submit'
                  mt='6'
                  colorScheme='orange'
                  transition='all'
                  transitionDuration='2'
                  fontSize='md'
                  size='lg'
                //   isLoading={true}
                >
                    Entrar
                </Button>
                <Text fontSize='sm' textAlign='center' my='4' >ou</Text>
                <Button
                  type='submit'
                  colorScheme='whiteAlpha'
                  transition='all'
                  fontSize='md'
                  transitionDuration='2'
                  rightIcon={<RiGoogleFill/>}
                  size='lg'
                  onClick={handleSignIn}
                //   isLoading={true}
                >
                    Entrar com Google
                </Button>
            </Flex>
        </Flex>
    )
}