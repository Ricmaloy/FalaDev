import { useState } from 'react';
import { database } from '../../services/firebase';
import { useAuth } from '../../hooks/useAuth';
import {
    Modal as ChakraModal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalCloseButton,
    Button,
    Textarea,
    Text,
    Divider,
    Stack,
    useBreakpointValue
} from "@chakra-ui/react"

interface BugReportModalProps {
    isModalOpen: boolean,
    onModalClose: () => void,
}


export const BugReportModal = ({isModalOpen, onModalClose}: BugReportModalProps) => {
    const { user } = useAuth();
    const [modalSection, setModalSection] = useState(1);
    const [bugReport, setBugReport] = useState('');

    const isWideSize = useBreakpointValue({
        base: false,
        md: true,
        lg: true, 
    })

    async function CompleteBugReport() {
        const bugsRef = database.ref(`bugs`);

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const firebaseBugReport = await bugsRef.push({
            id: user?.id,
            name: user?.name,
            contact: user?.contact,
            report: bugReport,
            reportTime: Date()
        })

        setBugReport('');
        setModalSection(1);
        onModalClose()
    }

    return(
        <ChakraModal isOpen={isModalOpen} size={isWideSize ? 'md' : 'sm'} onClose={onModalClose} scrollBehavior={'inside'} closeOnOverlayClick={false} >
            <ModalOverlay />
            
            {
                modalSection === 1 && (
                <ModalContent bg='gray.800' px={['5','10']} pt='5' >
                    <ModalCloseButton />
                    <Text textAlign='center' fontSize={['sm', 'md']} >Oh oh! Encontrou um bug ? 😨</Text>
                    <Divider mt='4' borderColor='gray.700'  />
                    <Stack mt='4'>
                        <Text color='gray.200' fontSize={['xs','sm']} >
                            Sentimos muito que isso tenha acontecido.
                        </Text>
                        <Text color='gray.200' fontSize={['xs','sm']} pb='3' >
                            Para deixar a plataforma cada vez melhor e evitar que isso se repita com você 
                            ou com qualquer usuário, pedimos que descreva no campo abaixo o que aconteceu
                        </Text>
                        <Textarea 
                            placeholder='O que você encontrou ?' 
                            fontSize={['xs','sm']}
                            maxH='150px'
                            focusBorderColor='orange.500'
                            borderColor='gray.700'
                            bg='gray.900'
                            _hover={{ 
                                bg: 'gray.900'
                            }}
                            value={bugReport}
                            onChange={(ev) => setBugReport(ev.target.value)}
                        />
                        </Stack>
                    <ModalFooter px='0'>
                        <Button
                            colorScheme='orange' 
                            px={['5','8']} 
                            isDisabled={bugReport.trim() === ''} 
                            fontSize={['xs','small']} 
                            fontWeight='normal' 
                            onClick={() => setModalSection(modalSection + 1)}
                        >
                            Enviar
                        </Button>
                    </ModalFooter>
                </ModalContent>
                )
            }

            {
                modalSection === 2 && (
                    <ModalContent bg='gray.800' px='10' pt='5' >
                        <Text textAlign='center' fontSize={['sm', 'md']}  >Nossos agradecimentos 🥰</Text>
                        <Divider mt='4' borderColor='gray.700'  />
                        <Stack mt='4'>
                            <Text color='gray.200' fontSize={['xs','sm']} >
                                Agradecemos imensamente sua ajuda, nosso time de desenvolvedores será notificado e 
                                entrará em ação assim que possível para corrigir essa falha !
                            </Text>
                            </Stack>
                        <ModalFooter px='0'>
                            <Button 
                                colorScheme='orange' 
                                px={['5','8']}
                                fontSize={['xs','small']} 
                                fontWeight='normal' 
                                onClick={CompleteBugReport}
                            >
                                Feshow
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                )
            }


        </ChakraModal>
    )
}