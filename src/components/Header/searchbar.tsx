import { Flex, Icon, Input } from "@chakra-ui/react"
import { RiSearchLine } from 'react-icons/ri'

export const Searchbar = () => {
    return (
        <Flex
            as='label'
            flex='1'
            py='4'
            px='8'
            ml='6'
            maxW='400px'
            alignSelf='center'
            color='gray.200'
            position='relative'
            bg='gray.800'
            borderRadius='full'
        >
            <Input
                color='gray.50'
                variant='unstyled'
                px='4'
                mr='4'
                fontSize='14'
                placeholder='Buscar na plataforma' 
                _placeholder={{color: 'gray.400'}}
            />

            <Icon as={RiSearchLine} fontSize='20'/>
        </Flex>
    )
}