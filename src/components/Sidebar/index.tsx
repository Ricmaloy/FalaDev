import { 
    Box, 
    useBreakpointValue, 
    Drawer, 
    DrawerOverlay, 
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody
} from '@chakra-ui/react'
import { useSidebarDrawer } from '../../contexts/SidebarContext'
import { SideBarNav } from './SideBarNav'


export const SideBar = () => {
    const { isOpen, onClose } = useSidebarDrawer()

    const isDrawerSideBar = useBreakpointValue({
        base: true,
        lg: false,
    })

    if( isDrawerSideBar ) {
        return (
        <Drawer isOpen={isOpen} placement='left' onClose={onClose} >
            <DrawerOverlay>
                <DrawerContent bg='gray.800' p='4' >
                    <DrawerCloseButton mt='6' />
                    <DrawerHeader>Menu</DrawerHeader>
                    <DrawerBody>
                        <SideBarNav />
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
        )
    }

    return (
        <Box
            as='aside'
            mr='8'
        >
            <SideBarNav />
        </Box>
    )
}