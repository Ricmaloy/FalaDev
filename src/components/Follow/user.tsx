import { Flex, Avatar, Text, Button } from '@chakra-ui/react'

interface UserProps {
    name: string,
    user: string,
    src: string
}

export const User = ({name, user, src}: UserProps) => {
    return (
        <Flex
            align='center'
            mb='4'
        >
            <Avatar size='lg'  name={name} src={src} />
            <Flex
                flexDir='column'
                ml='3'
            >
                <Text fontSize='sm' >{name}</Text>
                <Text fontSize='xs' >{user}</Text>
            </Flex>

            <Button 
                colorScheme='orange' 
                variant="ghost"
                size='sm'
                ml='auto'
            >
                Seguir
            </Button>
        </Flex>
    )
}