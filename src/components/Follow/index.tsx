import { Text, Button } from '@chakra-ui/react'
import { Container } from "../Container"
import { User } from './user'


export const Follow = () => {
    return (
        <Container>
            <Text
                fontWeight='bold'
                fontSize='xl'
                // color='orange.500'
                mb='8'
            >
                Quem seguir
            </Text>

            <User name='Kent Dodds' user='@KentDodds' src='https://bit.ly/kent-c-dodds' />

            <User name='Diego Fernandes' user='@Diego3g' src='https://github.com/diego3g.png' />

            <User name='Rodrigo Zamboni' user='@rodrigozamb' src='https://github.com/rodrigozamb.png' />

            <Button size='xs' variant="link" colorScheme='orange' >Ver mais</Button>
        </Container>
    )
}