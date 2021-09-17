import { Flex, Text, Avatar, Icon, Stack } from '@chakra-ui/react'
import { RiHeartLine, RiReplyLine } from 'react-icons/ri'

interface CommentaryProps {
    name: string,
    avatar: string;
    commentary: string;
}

export const Commentary = ({ name, avatar, commentary}: CommentaryProps) => {
    return (
        <Stack>
                <Flex
                    mx='5'
                    mt='5'
                    fontSize='sm'
                >
                    <Avatar
                        size='md'
                        name={name}
                        src={avatar}
                        border='1px solid #ed8936'
                    />
                    <Flex
                        flexDir='column'
                        ml='3'
                    >
                        <Text as='span'>{name}</Text>
                        <Text color='gray.300'>{commentary}</Text>
                    
                        <Flex
                            mt='3'
                        >
                            <Flex
                                align='center'
                                mr='5'
                            >
                                <Icon as={RiHeartLine} fontSize='20' mr='1' />
                                <Text>curtir</Text>
                            </Flex>
                            <Flex
                                align='center'
                            >
                                <Icon as={RiReplyLine} fontSize='20' mr='1' />
                                <Text>comentar</Text>
                            </Flex>
                        </Flex>

                    </Flex>
                </Flex>

            </Stack>
    ) 
}