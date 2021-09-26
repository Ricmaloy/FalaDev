import { Text } from '@chakra-ui/react'

export const Logo = () => {
    return (
        <Text 
            fontSize={["2xl",'3xl']}
            fontWeight='bold'
            letterSpacing='tight'
            w='64'
        >
            <Text
                as='span'
                color='orange.400'
            >
                Fala
            </Text>
            Dev
        </Text>
    )
}