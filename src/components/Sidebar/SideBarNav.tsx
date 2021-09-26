import { Stack } from '@chakra-ui/react'
import { 
    RiBarChart2Line, 
    RiBookmarkLine, 
    RiContactsLine, 
    RiDashboardLine, 
    RiNotification3Line, 
    RiQuestionAnswerLine, 
    RiQuestionLine, 
    RiSettings4Line, 
    RiLogoutBoxLine 
} from 'react-icons/ri'

import { useAuth } from '../../hooks/useAuth'
import { NavSection } from './NavSection'
import { NavLink } from './NavLink'


export const SideBarNav = () => {
    const { signOut } = useAuth();

    return (
        <Stack
            spacing='12'
            align='flex-start'
        >
            <NavSection title='GERAL'>
                <NavLink icon={RiDashboardLine} content='Feed' path='/'/>
                <NavLink icon={RiContactsLine} content='Conexões' path='/contacts' />
                <NavLink icon={RiNotification3Line} content='Notificações' path='/notifications' />
                <NavLink icon={RiQuestionAnswerLine} content='Mensagens' path='/messages' />
                <NavLink icon={RiBookmarkLine} content='Itens salvos' path='/bookmarked' />
            </NavSection>

            <NavSection title='PRIVADO'>
                <NavLink icon={RiSettings4Line} content='Configurações' path='/configurations' />
                <NavLink icon={RiQuestionLine} content='Suporte' path='/help' />
                <NavLink icon={RiBarChart2Line} content='Estatísticas' path='/analytics' />
                <NavLink icon={RiLogoutBoxLine} content='Sair' path='/' onClick={signOut} />
            </NavSection>
        </Stack>
    )
}