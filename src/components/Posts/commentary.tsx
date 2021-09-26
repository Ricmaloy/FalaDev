import { 
    Flex, 
    Text, 
    Avatar, 
    Icon, 
    Stack, 
    Box, 
    useDisclosure, 
    useBreakpointValue 
} from '@chakra-ui/react'
import { RiHeartFill, RiHeartLine, RiReplyLine } from 'react-icons/ri'
import { useAuth } from '../../hooks/useAuth'
import { database } from '../../services/firebase'
import { LikesModal } from '../LikesModal';

import TimeAgo from 'timeago-react';
import * as timeago from 'timeago.js';

import pt_BR from 'timeago.js/lib/lang/pt_BR';

timeago.register('pt_BR', pt_BR);

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
    const { isOpen, onOpen, onClose } = useDisclosure();

    async function handleLikeCommentary(postId: string, commentaryLikeId: string | undefined, commentaryId: string) {

        if( commentaryLikeId ) {
            await database.ref(`posts/${postId}/comments/${commentaryId}/likes/${commentaryLikeId}`).remove();
        } else {

            await database.ref(`posts/${postId}/comments/${commentaryId}/likes/`).push({
                authorId: user?.id,
                name: user?.name,
                avatar: user?.avatar,
                spec: `${user?.occupation} na ${user?.company}`,
            });
        } 
    }

    const isWideSize = useBreakpointValue({
        base: false,
        md: true,
        lg: true, 
    })

    return (
        <Stack>
                <Flex
                    mx={['1','5']}
                    mt='5'
                    fontSize='sm'
                >
                    <Avatar
                        size={ isWideSize ? 'md' : 'sm'}
                        name={name}
                        src={avatar}
                        border='1px solid #ed8936'
                    />
                    <Flex
                        flexDir='column'
                        ml='3'
                        justify='center'
                    >
                        <Flex flexDir='row' align='center' >
                            <Text as='span' fontSize={['xs','sm']} >{name}</Text>
                            <Box alignSelf='center' w='4px' h='4px' bg='gray.400' mx='2' borderRadius='full' ></Box>
                            <Text as='span' fontSize={['xx-small','xs']} color='gray.400' > <TimeAgo datetime={new Date(commentaryPublicationTime)} locale='pt_BR'  /></Text> 
                        </Flex>
                        <Text color='gray.300' fontSize={['xs','sm']} >{commentary}</Text>
                    
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
                                <Text onClick={onOpen} cursor='pointer' fontSize={['xs','sm']} >{commentaryLikeCount}</Text>
                                <LikesModal path={`posts/${postIdRef}/comments/${commentaryId}/likes/`} isModalOpen={isOpen} onModalClose={onClose} />
                            </Flex>
                            <Flex
                                align='center'
                            >
                                <Icon as={RiReplyLine} fontSize='20' mr='1' />
                                <Text fontSize={['xs', 'sm']} >comentar</Text>
                            </Flex>
                        </Flex>

                    </Flex>
                </Flex>

            </Stack>
    ) 
}