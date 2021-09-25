import { useState } from 'react'
import { Flex, Text, Avatar, Icon, Divider, Box, Button, Input, useDisclosure } from '@chakra-ui/react'
import { RiMoreLine, RiHeartLine, RiChat2Line, RiShareLine, RiHeartFill } from 'react-icons/ri'
import TimeAgo from 'timeago-react';
import { useAuth } from '../../hooks/useAuth'
import { database } from '../../services/firebase'
import { Container } from '../Container'
import { Commentary } from './commentary'
import { LikesModal } from '../LikesModal';

interface CommentaryProps {
    name: string,
    avatar: string;
    commentary: string;
    commentaryId: string;
    commentaryLikeCount: number;
    commentaryPublicationTime: string;
    commentaryLikeId: string | undefined;
}

interface PostProps {
    name: string;
    avatar: string;
    spec: string;
    content: string;
    publicationTime: string;
    likesCounter: number;
    likeId: string | undefined;
    postId: string;
    commentsCount: number;
    commentsList: CommentaryProps[];
}

export const Post = ({
    name, 
    avatar,
    spec,
    content, 
    likesCounter, 
    commentsCount, 
    commentsList, 
    postId, 
    likeId, 
    publicationTime
}: PostProps) => {
    const { user } = useAuth();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [commentary, setCommentary] = useState('');
    const [isCommentSectionHidden, setIsCommentSectionHidden] = useState(true);


    async function handleLikePost(postId: string, likeId: string | undefined) {
        
        if( likeId ) {
            await database.ref(`posts/${postId}/likes/${likeId}`).remove();
        } else {
            await database.ref(`posts/${postId}/likes/`).push({
                authorId: user?.id,
                name: user?.name,
                avatar: user?.avatar,
                spec: `${user?.occupation} na ${user?.company}`,
            });
        } 
    }

    async function handleAddCommentary(postId: string, commentary: string) {
        await database.ref(`posts/${postId}/comments/`).push({
            commentary: commentary,
            name: user?.name,
            avatar: user?.avatar,
            commentaryPublicationTime: Date()
        });

        setCommentary('')
        toggleCommentarySection()        
    }

    function toggleCommentarySection() {
        setIsCommentSectionHidden(!isCommentSectionHidden);
    }

    return (
        <Container>
           <Flex mb='6'>
                <Avatar
                  size='lg'
                  name={name}
                  src={avatar}
                  border='1px solid #ed8936'
                />
                <Flex
                    flexDir='column'
                    justify='center'
                    ml='3'
                >
                    <Flex
                        flexDir='row'
                    >
                        <Text fontSize='sm'>{name}</Text>
                        <Box alignSelf='center' w='4px' h='4px' bg='gray.400' mx='2' borderRadius='full' ></Box>
                        <Text as='span' fontSize='xs' color='gray.400' ><TimeAgo datetime={new Date(publicationTime)} locale='pt_BR' /></Text> 
                    </Flex>
                    { spec ? (
                      <Text fontSize='xs' color='orange.300'>{spec}</Text>
                    ) : (
                      <Text fontSize='xs' color='orange.300'>Visitante</Text>
                    )}
                </Flex>
                <Icon as={RiMoreLine} ml='auto'/>
           </Flex>
           
            <Box mx='5'  my='4'>
                <Text fontSize='sm'> {content} </Text>
            </Box>

            <Flex
                mx='5'
            >
                <Flex>
                    <Flex align='center' mr='5'>
                        <button onClick={() => handleLikePost(postId, likeId)}>
                            {
                                likeId === undefined ? (
                                    <Icon as={RiHeartLine} fontSize='20' mr='1'  cursor='pointer' />
                                ) : (
                                    <Icon as={RiHeartFill} fontSize='20' mr='1'  cursor='pointer' color='orange' />
                                )
                            }
                        </button>
                        <Text onClick={onOpen} cursor='pointer' >{likesCounter}</Text>
                        <LikesModal  path={`posts/${postId}/likes`} isModalOpen={isOpen} onModalClose={onClose} />
                    </Flex>
                    <Flex align='center'>
                        <Icon as={RiChat2Line} fontSize='20' mr='1' cursor='pointer' onClick={toggleCommentarySection} />
                        <Text>{commentsCount}</Text>
                    </Flex>
                </Flex>

                <Icon as={RiShareLine} ml='auto' fontSize='20'/>
            </Flex>

            {
                commentsList.map(commentary => {
                    return (
                        <Box key={commentary.commentaryId} >
                            <Divider mt='4' borderColor='gray.700' />
                            <Commentary
                              avatar={commentary.avatar}
                              name={commentary.name}
                              commentary={commentary.commentary}
                              commentaryId={commentary.commentaryId}
                              commentaryLikeCount={commentary.commentaryLikeCount} 
                              postIdRef={postId}
                              commentaryLikeId={commentary.commentaryLikeId}
                              commentaryPublicationTime={commentary.commentaryPublicationTime}
                            />
                        </Box>
                    )
                })
            }
            <Box display={isCommentSectionHidden ? 'none' : 'block'}>
                <Divider mt='4' borderColor='gray.700'  />
                <Flex mt='5' align='center' >
                    <Avatar 
                        size='md'
                        name={user?.name}
                        src={user?.avatar}
                        border='1px solid #ed8936'
                    />
                    <Input 
                        placeholder="digite seu comentário" 
                        mx='4'
                        value={commentary}
                        onChange={(ev) => setCommentary(ev.target.value)}
                        fontSize='sm'
                        focusBorderColor='orange.500'
                        borderColor='gray.700'
                        bg='gray.900'
                        _hover={{
                            bg: 'gray.900'
                        }}
                    />
                    <Button
                        colorScheme='orange'
                        onClick={() => handleAddCommentary(postId, commentary)}
                    >
                        <Text
                            px='2'
                            fontSize='sm'
                        >
                            Enviar
                        </Text>
                    </Button>
                </Flex>
            </Box>

       </Container> 
    )
}