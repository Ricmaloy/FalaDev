import { Helmet } from 'react-helmet';
import { Grid, GridItem, useBreakpointValue } from '@chakra-ui/react'
import { CreatePost } from '../../components/CreatePost';
import { Follow } from '../../components/Follow';
import { Header } from '../../components/Header';
import { Posts } from '../../components/Posts';
import { SideBar } from '../../components/Sidebar';
import { Updates } from '../../components/Updates';
import { Welcome } from '../../components/Welcome';
import { useAuth } from '../../hooks/useAuth';

export function Dashboard() {
    const { user } = useAuth();

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true, 
    })

    return (
        <>  
            <Helmet>
                <title>Feed | Fala Dev</title>
            </Helmet>
            <Header />

            {
                isWideVersion ? (
                    <Grid
                    templateColumns='repeat(12, 1fr)'
                    maxW='1480px'
                    mx='auto'
                    px='6'
                    gap='4'
                    >
                        <GridItem 
                            colStart={1} 
                            colEnd={3}
                        >
                            <SideBar />
                        </GridItem>
                        <GridItem 
                            colStart={3} 
                            colEnd={10}
                        >
                            {!user?.occupation && <Welcome name={user?.name} />}
                            <CreatePost />
                            <Posts />
                        </GridItem>
                        <GridItem 
                            colStart={10} 
                            colEnd={13}
                        >
                            <Updates />

                            <Follow />
                        </GridItem>
                    </Grid>
                ) : (
                    <Grid
                    templateColumns='repeat(12, 1fr)'
                    maxW='1480px'
                    mx='auto'
                    px='6'
                    gap='4'
                    >
                        <GridItem 
                            colStart={1} 
                            colEnd={13}
                        >
                            <SideBar />
                            {!user?.occupation && <Welcome name={user?.name} />}
                            <CreatePost />
                            <Posts />
                        </GridItem>
                    </Grid>
                )
            }

            
        </>
    )
}