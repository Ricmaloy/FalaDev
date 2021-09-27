import { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { Text, Box, Icon, Flex } from '@chakra-ui/react'
import { RiAlertLine } from 'react-icons/ri'
import { Container } from '../Container'

export const WorkInProgress = () => {
    const [time, setTime] = useState(7)
    const history = useHistory();

    useEffect(() => {
        if(time > 0) {
            setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        } else {
            history.push('/')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [time])

    return (
        <Container>
            <Flex flexDir='column' justify='center' align='center' p={['0','4']}>
                <Icon as={RiAlertLine} fontSize={['40','60']} color='orange.400' />
                <Text textAlign='center' fontSize={['xs','md']} mt='3'>Opa opa, como você chegou aqui ?</Text>
                <Text textAlign='center' fontSize={['xs','md']} mt='3'>Você será redirecionado ao feed em {time} segundos</Text>
            </Flex>
        </Container>
    )
}