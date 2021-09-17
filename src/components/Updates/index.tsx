import { Text, Divider, Stack, Link, Button } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { Container } from "../Container"

export const Updates = () => {
    return (
        <Container>
            <Text
                fontWeight='bold'
                fontSize='xl'
                // color='orange.500'
                mb='8'
            >
                Novidades
            </Text>

            <Stack>
                <Link as={RouterLink} to='/news1' >
                    <Text
                        fontWeight='semibold'
                        fontSize='md'
                    >
                        Young Boys vs Manchester
                    </Text>
                    <Text
                        fontSize='sm'
                        color='gray.300'
                    >
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis eveniet deserunt nihil ne.
                    </Text>
                </Link>

                <Divider />

                <Link as={RouterLink} to='/news2' > 
                    <Text
                        fontWeight='semibold'
                        fontSize='md'
                    >
                        Heitor
                    </Text>
                    <Text
                        fontSize='sm'
                        color='gray.300'
                    >
                        O pessoal está intrigado com os sonhos de crianças expostos em um cartaz
                    </Text>
                </Link>

                <Divider />

                <Link as={RouterLink} to='/news3' > 
                    <Text
                        fontWeight='semibold'
                        fontSize='md'
                    >
                        Iphone 13 divide opniões
                    </Text>
                    <Text
                        fontSize='sm'
                        color='gray.300'
                    >
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis eveniet deserunt nihil ne.
                    </Text>
                </Link>

                <Divider />

                <Link as={RouterLink} to='/news4' > 
                    <Text
                        fontWeight='semibold'
                        fontSize='md'
                    >
                        Minas Gerais: as últimas notícias sobre a pandemia
                    </Text>
                    <Text
                        fontSize='sm'
                        color='gray.300'
                    >
                        Veja as principais informações sobre a pandemia de Covid-19 em Minas Gerais.
                    </Text>
                </Link>
            </Stack>
            
            <Button
              size='xs'
              variant="link"
              colorScheme='orange'
              mt='5'
            >
                Ver mais
            </Button>
        </Container>
    )
}