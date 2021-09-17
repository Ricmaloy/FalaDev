
import { Flex, HStack, Icon, Box, Text, Avatar } from '@chakra-ui/react'
import { RiNotificationLine, RiUserAddLine } from 'react-icons/ri'
import { useAuth } from '../../hooks/useAuth'

export const User = () => {
    const { user } = useAuth();

    return (
        <Flex
            align='center'
            ml='auto'
        >
            <HStack 
                spacing='8'
                mx='8'
                pr='8'
                py='1'
                color='gray.300'
                borderRightWidth={1}
                borderColor='gray.700'
            >
                <Icon as={RiNotificationLine} fontSize='20'/>
                <Icon  as={RiUserAddLine} fontSize='20'/>
            </HStack>
        
            <Flex
                align='center'
            >
                <Box mr='4' textAlign='right' >
                    <Text>{user?.name}</Text>
                    <Text color='gray.300' fontSize='small' >{user?.contact}</Text>
                </Box>

                <Avatar size='md' name={user?.name} src={user?.avatar} />
            </Flex>
        </Flex>
)
}