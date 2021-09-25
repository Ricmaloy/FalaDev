
import { Flex, HStack, Icon, Box, Text, Avatar, useDisclosure } from '@chakra-ui/react'
import { RiNotificationLine, RiBugLine } from 'react-icons/ri'
import { useAuth } from '../../hooks/useAuth'
import { BugReportModal } from '../BugReportModal';

export const User = () => {
    const { user } = useAuth();
    const { isOpen, onOpen, onClose } = useDisclosure();

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
                <Icon as={RiBugLine} _hover={{color: 'orange.400'}} cursor='pointer' onClick={onOpen} fontSize='20'/>
                <BugReportModal onModalClose={onClose} isModalOpen={isOpen} />
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