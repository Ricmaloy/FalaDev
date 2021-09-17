import { Grid, GridItem } from '@chakra-ui/react'
import { CreatePost } from '../../components/CreatePost';
import { Follow } from '../../components/Follow';
import { Header } from '../../components/Header';
import { Posts } from '../../components/Posts';
import { SideBar } from '../../components/Sidebar';
import { Updates } from '../../components/Updates';

export function Dashboard() {
    return (
        <>
            <Header />
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
        </>
    )
}