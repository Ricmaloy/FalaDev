import { ElementType } from 'react'
import { Text, Icon, Link, LinkProps as ChakraLinkProps} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

interface NavLinkProps extends ChakraLinkProps {
    icon: ElementType;
    content: string;
    path: string;
} 

export const NavLink = ({icon , content, path, ...rest}: NavLinkProps) => {
    return (
        <Link display='flex' as={RouterLink} to={path} {...rest} >
            <Icon as={icon} fontSize='20' />
            <Text ml='4' fontWeight='md'>{content}</Text> 
        </Link>
    )
}