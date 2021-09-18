import { Flex, Text, Avatar, Icon, Stack, Box } from '@chakra-ui/react'
import { RiHeartFill, RiHeartLine, RiReplyLine } from 'react-icons/ri'
import TimeAgo from 'timeago-react';
import { useAuth } from '../../hooks/useAuth'
import { database } from '../../services/firebase'

interface CommentaryProps {
    name: string,
    avatar: string;
    commentary: string;
    commentaryId: string;
    commentaryLikeCount: number;
    postIdRef: string;
    commentaryLikeId: string | undefined;
    commentaryPublicationTime: string;
}

export const Commentary = ({ 
    name, 
    avatar, 
    commentary, 
    postIdRef, 
    commentaryId, 
    commentaryLikeCount, 
    commentaryLikeId, 
    commentaryPublicationTime
}: CommentaryProps) => {
    const { user } = useAuth();

    async function handleLikeCommentary(postId: string, commentaryLikeId: string | undefined, commentaryId: string) {

        if( commentaryLikeId ) {
            await database.ref(`posts/${postId}/comments/${commentaryId}/likes/${commentaryLikeId}`).remove();
        } else {

            await database.ref(`posts/${postId}/comments/${commentaryId}/likes/`).push({
                authorId: user?.id,
                name: user?.name,
                avatar: user?.avatar
            });
        } 
    }

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
                        justify='center'
                    >
                        <Flex flexDir='row' >
                            <Text as='span'>{name}</Text>
                            <Box alignSelf='center' w='4px' h='4px' bg='gray.400' mx='2' borderRadius='full' ></Box>
                            <Text as='span' fontSize='xs' color='gray.400' > <TimeAgo datetime={commentaryPublicationTime} locale='pt_BR'  /></Text> 
                        </Flex>
                        <Text color='gray.300'>{commentary}</Text>
                    
                        <Flex
                            mt='3'
                        >
                            <Flex
                                align='center'
                                mr='5'
                            >
                                <button onClick={() => handleLikeCommentary(postIdRef, commentaryLikeId, commentaryId)}>
                                    {
                                        commentaryLikeId === undefined ? (
                                            <Icon as={RiHeartLine} fontSize='20' mr='1'  cursor='pointer' />
                                        ) : (
                                            <Icon as={RiHeartFill} fontSize='20' mr='1'  cursor='pointer' color='orange' />
                                        )
                                    }
                                </button>
                                <Text>{commentaryLikeCount}</Text>
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