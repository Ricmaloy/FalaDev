import { createContext, ReactNode, useContext, useEffect } from "react";
import { useLocation } from 'react-router-dom'
import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react'

interface SidebarDrawerProviderProps {
    children: ReactNode;
}

type SidebarDrawerContextDate = UseDisclosureReturn


export const SidebarDrawerContext = createContext({} as SidebarDrawerContextDate);

export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {
    const location = useLocation()
    const disclosure = useDisclosure();

    useEffect(() => {
        disclosure.onClose()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname])

    return (
        <SidebarDrawerContext.Provider value={disclosure}>
            {children}
        </SidebarDrawerContext.Provider>
    )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)