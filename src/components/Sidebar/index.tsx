import { Box, Stack, Text, Icon, Link } from '@chakra-ui/react'
import { Link as RouterLink, NavLink } from 'react-router-dom'
import { RiBarChart2Line, RiBookmarkLine, RiContactsLine, RiDashboardLine, RiNotification3Line, RiQuestionAnswerLine, RiQuestionLine, RiSettings4Line, RiLogoutBoxLine } from 'react-icons/ri'
import { useAuth } from '../../hooks/useAuth'


export const SideBar = () => {
    const { signOut } = useAuth();

    return (
        <Box
            as='aside'
            mr='8'
        >
            <Stack
                spacing='12'
                align='flex-start'
            >
                <Box>
                    <Text fontWeight='bold' color='gray.400' fontSize='small'>GERAL</Text>
                    <Stack
                        spacing='4'
                        mt='8'
                        align='stretch'
                    >
                        <NavLink to='/'>
                            <Link display='flex' as={RouterLink} to='/'>
                                <Icon as={RiDashboardLine} fontSize='20' />
                                <Text ml='4' fontWeight='md'>Feed</Text> 
                            </Link>
                        </NavLink>
                        <Link display='flex' as={RouterLink} to='/contacts'>
                            <Icon as={RiContactsLine} fontSize='20' />
                            <Text ml='4' fontWeight='md'>Contatos</Text> 
                        </Link>
                        <Link display='flex' align='center'>
                            <Icon as={RiNotification3Line} fontSize='20' />
                            <Text ml='4' fontWeight='md'>Notificações</Text> 
                        </Link>
                        <Link display='flex' align='center'>
                            <Icon as={RiQuestionAnswerLine} fontSize='20' />
                            <Text ml='4' fontWeight='md'>Mensagens</Text> 
                        </Link>
                        <Link display='flex' align='center'>
                            <Icon as={RiBookmarkLine} fontSize='20' />
                            <Text ml='4' fontWeight='md'>Itens salvos</Text> 
                        </Link>
                    </Stack>
                </Box>

                <Box>
                    <Text fontWeight='bold' color='gray.400' fontSize='small'>PRIVADO</Text>
                    <Stack
                        spacing='4'
                        mt='8'
                        align='stretch'
                    >
                        <Link display='flex' align='center'>
                            <Icon as={RiSettings4Line} fontSize='20' />
                            <Text ml='4' fontWeight='md'>Configurações</Text> 
                        </Link>
                        <Link display='flex' align='center'>
                            <Icon as={RiQuestionLine} fontSize='20' />
                            <Text ml='4' fontWeight='md'>Suporte</Text> 
                        </Link>
                        <Link display='flex' align='center'>
                            <Icon as={RiBarChart2Line} fontSize='20' />
                            <Text ml='4' fontWeight='md'>Estatísticas</Text> 
                        </Link>
                        <Link display='flex' align='center' onClick={signOut} >
                            <Icon as={RiLogoutBoxLine} fontSize='20' />
                            <Text ml='4' fontWeight='md'>Sair</Text> 
                        </Link>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}