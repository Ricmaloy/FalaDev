import { Flex, Avatar, Text, Button, useToast } from '@chakra-ui/react'

interface UserProps {
    name: string,
    user: string,
    src: string
}

export const User = ({name, user, src}: UserProps) => {
    const toast = useToast();

    async function handleFollowUser() {
        toast({
            title: "Feature em desenvolvimento",
            description: "tente denovo mais tarde !",
            status: "warning",
            duration: 4000,
            position: 'top',
            isClosable: true,
        });
    }

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
                onClick={handleFollowUser}
            >
                Seguir
            </Button>
        </Flex>
    )
}