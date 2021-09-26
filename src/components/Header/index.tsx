import { Flex, useBreakpointValue, IconButton, Icon } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawer } from '../../contexts/SidebarContext'
import { Logo } from './logo'
import { Searchbar } from './searchbar'
import { User } from './user'

export const Header = () => {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true, 
    })

    const { onOpen } = useSidebarDrawer()

    return (
        <Flex
            w='100%'
            h='20'
            as='header'
            maxW='1480px'
            mx='auto'
            mt='4'
            mb='8'
            px='6'
            align='center'
        >
            {
                !isWideVersion && (
                    <IconButton 
                        aria-label='Open Menu'
                        icon={<Icon as={RiMenuLine} />} 
                        fontSize='24'
                        variant='unstyled'
                        onClick={onOpen}
                        mr='2'
                    />
                )
            }

            <Logo />

            { isWideVersion && (<Searchbar />) }
            
        
            <User showProfileDate={isWideVersion} />
        </Flex>
    )
}