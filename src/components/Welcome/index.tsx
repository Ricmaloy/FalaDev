import { useState } from 'react'
import { useAuth } from '../../hooks/useAuth';
import { database } from '../../services/firebase';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    Divider,
    Stack,
    Flex,
    Input,
    Text,
    Icon,
    Button
} from "@chakra-ui/react";

import { RiGithubFill, RiTwitterFill, RiTwitchFill, RiLinkedinBoxFill, RiInstagramLine } from 'react-icons/ri';

interface WelcomeProps {
    name: string | undefined;
}

export const Welcome = ({ name }: WelcomeProps) => {
    const { user } = useAuth();

    const [isModalOpen, setIsModalOpen] = useState(true);
    const [modalSection, setModalSection] = useState(1);

    const [occupation, setOccupation] = useState('');
    const [company, setCompany] = useState('');

    async function completeWelcomeTour() {
        const usersRef = database.ref(`users`);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const firebaseUser = await usersRef.push({
            id: user?.id,
            name: user?.name,
            avatar: user?.avatar,
            occupation: occupation,
            company: company,
            contact: user?.contact
        })

        setIsModalOpen(false);
    }

    return (
        <>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} size='xl' closeOnOverlayClick={false} >
            <ModalOverlay />

            {modalSection === 1 && (
            <ModalContent bg='gray.800' px='10' py='5' >
                <Text textAlign='center' >Seja bem vindo(a), {name}!  👋</Text>
                <Divider mt='4' borderColor='gray.700'  />
                <Stack mt='4'>
                    <Text color='gray.200'>Olha só um rostinho novo por aqui !
                    </Text>
                    <Text color='gray.200'>
                        To vendo aqui nas minhas anotações que esse é o seu primeiro acesso, por favor permita-me fazer um tour pela aplicação
                        e algumas perguntinhas para melhorar sua experiência por aqui!
                    </Text>
                    <Text color='gray.200'> 
                        Que tal ?
                    </Text>
                </Stack>
                <ModalFooter>
                    <Button colorScheme='orange' fontWeight='normal' onClick={() => setModalSection(modalSection + 1)}>Bora lá</Button>
                </ModalFooter>
            </ModalContent>
            )}

            {modalSection === 2 && (
                <ModalContent bg='gray.800' px='10' py='5' >
                    <Text textAlign='center' >O que é o FalaDev ?  🤔</Text>
                    <Divider mt='4' borderColor='gray.700'  />
                    <Stack mt='4'>
                        <Text color='gray.200'>O <Text color='orange.400' as='span'>Fala</Text>Dev 
                            é uma rede social focada para desenvolvedores, desenvolvedoras, designers e estudantes possam trocar 
                            experiências, compartilhar seu dia a dia e também fazer novas amizades. Aqui todos podem ver as publicações de outras pessoas e
                            interagir com elas, seja por comentário ou por um like. 🧡
                        </Text>
                        <Text color='gray.200'>
                            Todo esse projeto foi feito com muito carinho utilizando React, ChakraUI, Firebase e todo o código dele você encontra num repositório aberto no Github !
                        </Text>
                    </Stack>
                    <ModalFooter>
                    <Button colorScheme='orange' fontWeight='normal' onClick={() => setModalSection(modalSection + 1)}>Continuar</Button>
                </ModalFooter>
                </ModalContent>
            )}

            {modalSection === 3 && (
                <ModalContent bg='gray.800' px='10' py='5' >
                    <Text textAlign='center' >O que posso fazer aqui ?  🧐</Text>
                    <Divider mt='4' borderColor='gray.700'  />
                    <Stack mt='4'>
                        <Text color='gray.200'>Ao lado esquerdo da aplicação você vai encontrar um menu de navegação que vai levar você para outras páginas da aplicação, como por exemplo,
                            uma página com todas as suas conexões, as notificações do seu perfil, um espaço para trocar mensagem e muito mais ! 
                        </Text>
                        <Text color='gray.200'>
                            Ao centro da aplicação você verá o conteúdo principal da página, nessa parte principal temos todo um feed com posts de outras pessoas sobre diversos temas 
                            ( não se esqueça de interagir hein ? )
                        </Text>
                        <Text color='gray.200'>
                            Por fim, à direita teremos informações adicionais, como um quadro de notícias fresquinhas e indicações de novas amizades. Show né ?
                        </Text>
                    </Stack>
                    <ModalFooter>
                    <Button colorScheme='orange' fontWeight='normal' onClick={() => setModalSection(modalSection + 1)}>Próximo</Button>
                </ModalFooter>
                </ModalContent>
            )}

            {modalSection === 4 && (
                <ModalContent bg='gray.800' px='10' py='5' >
                    <Text textAlign='center' >Deixa eu te conhecer melhor ! 😅</Text>
                    <Divider mt='4' borderColor='gray.700'  />
                    <Stack mt='4'>
                        <Text color='gray.200' mb='4'>
                            A fim de melhorar a sua experiência aqui por favor responda as perguntas abaixo:
                        </Text>
                        <Text fontSize='sm' color='gray.200'>Qual sua ocupação ?</Text>
                        <Input 
                            type='text'
                            placeholder='ex: Desenvolvedor, Designer, Estudante'
                            focusBorderColor='orange.500'
                            bg='gray.900'
                            variant='filled'
                            _hover={{
                                bg: 'gray.900'
                            }}
                            size='lg'
                            fontSize='sm'
                            required={true}
                            value={occupation}
                            onChange={(ev) => setOccupation(ev.target.value)}
                        />
                        <Text fontSize='sm' color='gray.200'>Aonde você trabalha ?</Text>
                        <Input 
                            type='text'
                            placeholder='ex: Facebook, Google, Zup Innovation'
                            focusBorderColor='orange.500'
                            bg='gray.900'
                            variant='filled'
                            _hover={{
                                bg: 'gray.900'
                            }}
                            size='lg'
                            fontSize='sm'
                            required={true}
                            value={company}
                            onChange={(ev) => setCompany(ev.target.value)}
                        />
                    </Stack>
                    <ModalFooter>
                    <Button colorScheme='orange' fontWeight='normal' isDisabled={ !!company && !!occupation ? false : true} onClick={() => setModalSection(modalSection + 1)}>Seguir</Button>
                </ModalFooter>
                </ModalContent>
            )}

            {modalSection === 5 && (
                <ModalContent bg='gray.800' px='10' py='5' >
                    <Text textAlign='center' >E agora ?  🤗</Text>
                    <Divider mt='4' borderColor='gray.700'  />
                    <Stack mt='4'>
                        <Text color='gray.200'>Prezamos muito pela segurança das suas informações pessoais e por isso pedímos apenas o mínimo de informações sobre você.
                        </Text>
                        <Text color='gray.200'>
                            A plataforma ainda está em desenvolvimento, por isso você pode encontrar páginas em branco e botões sem interação, qualquer sugestão de melhoria ou bug que encontrar peço que entre em contato comigo.
                        </Text>
                        <Text color='gray.200'>
                            Todas as minhas redes sociais vão estar listadas abaixo e eu vou ficar feliz demais de saber o que você achou do FalaDev ! 
                        </Text>
                        <Flex
                            justify='center'
                            py='5'
                        >
                            <a href='https://github.com/Ricmaloy'>
                                <Icon mr='4' as={RiGithubFill} cursor='pointer' fontSize='25'/>
                            </a>
                            <a href='https://twitter.com/ricardozamboni_'>
                                <Icon mr='4' as={RiTwitterFill} cursor='pointer' fontSize='25'/>
                            </a>
                            <a href='https://www.twitch.tv/ricmaloy'>
                                <Icon mr='4' as={RiTwitchFill} cursor='pointer' fontSize='25'/>
                            </a>
                            <a href='https://www.instagram.com/_ricardozamboni_'>
                                <Icon mr='4' as={RiInstagramLine} cursor='pointer' fontSize='25'/>
                            </a>
                            <a href='https://www.linkedin.com/in/ricardo-zamboni-3906471b3'>
                                <Icon as={RiLinkedinBoxFill} cursor='pointer' fontSize='25'/>
                            </a>
                        </Flex>
                    </Stack>
                    <ModalFooter>
                    <Button colorScheme='orange' fontWeight='normal' onClick={completeWelcomeTour}>Finalizar</Button>
                </ModalFooter>
                </ModalContent>
            )}

        </Modal>
        </>
    )
}