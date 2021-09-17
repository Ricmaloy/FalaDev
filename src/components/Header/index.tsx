import { Flex } from '@chakra-ui/react'
import { Logo } from './logo'
import { Searchbar } from './searchbar'
import { User } from './user'

export const Header = () => {
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
            <Logo />

            <Searchbar />
        
            <User />
        </Flex>
    )
}