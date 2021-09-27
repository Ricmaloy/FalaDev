import { Helmet } from 'react-helmet';
import { Grid, GridItem } from "@chakra-ui/react"
import { Header } from "../../components/Header";
import { SideBar } from "../../components/Sidebar";
import { WorkInProgress } from '../../components/WorkInProgress';

export function Configurations() {
    return (
        <>
            <Helmet>
                <title>Configurações | Fala Dev</title>
            </Helmet>
            <Header />
            <Grid
              templateColumns="repeat(12, 1fr)"
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
                    <WorkInProgress />
                </GridItem>
                <GridItem 
                    colStart={10} 
                    colEnd={13}
                >

                </GridItem>
            </Grid>
        </>
    )
}