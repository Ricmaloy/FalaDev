import { ReactNode } from 'react'
import { Box } from '@chakra-ui/react'

interface ContainerProps {
    children: ReactNode,
}

export const Container = ({ children }: ContainerProps) => {
    return (
        <Box
            bg='gray.800'
            borderRadius='md'
            p='5'
            mb='8'
        >
            {children}
        </Box>
    )
}