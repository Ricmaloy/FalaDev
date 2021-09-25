
import {
    Modal as ChakraModal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    Text,
    Divider,
    Flex,
    Stack,
    Avatar
} from "@chakra-ui/react"

import { useGetLikes } from '../../hooks/useGetLikes';

interface modalProps {
    path: string;
    isModalOpen: boolean,
    onModalClose: () => void,
}

export const LikesModal = ({isModalOpen, onModalClose, path}: modalProps) => {
    const { likes } = useGetLikes(path);

    return (
        <ChakraModal isOpen={isModalOpen} onClose={onModalClose} scrollBehavior={'inside'}>
            <ModalOverlay />
            <ModalContent bg='gray.800' >
            <ModalCloseButton />
            <ModalBody>
                { likes.length === 0 ? (
                    <Text my='3'>Ninguém curtiu isso, ainda !  😢</Text>
                ) : (
                    <Text my='3'>{likes.length} pessoa(s) curtiram isso ! 👍</Text>
                )}
                <Divider borderColor='gray.600' />
                <Stack my='3'>
                    { 
                        likes.length > 0 ? (
                        likes.map(like => {
                            return (
                                <Flex key={like.likeId} >
                                    <Avatar
                                        size='md'
                                        name={like.name}
                                        src={like.avatar}
                                        border='1px solid #ed8936'
                                        mr='2'
                                    />
                                    <Flex flexDir='column' justify='center' >
                                        <Text fontSize='sm'>{like.name}</Text>
                                        {like.spec ? (
                                            <Text fontSize='xs' color='orange.300'>{like.spec}</Text>
                                        ) : (
                                            <Text fontSize='xs' color='orange.300'>Visitante</Text>
                                        )}
                                    </Flex>
                                </Flex>
                            )
                        })
                        ) : (
                            <Text fontSize='sm' my='4' color='gray.200' >Você pode ser o primeiro a curtir o post, que tal ?  🤩</Text>
                        )
                    }

                </Stack>
            </ModalBody>
            </ModalContent>
        </ChakraModal>
    )
}