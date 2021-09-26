import { ChakraProvider } from '@chakra-ui/react'
import { Routes } from './routes';
import { AuthContextProvider } from './contexts/authContext';
import { BrowserRouter } from 'react-router-dom';
import { theme } from './styles/theme';
import { SidebarDrawerProvider } from './contexts/SidebarContext';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
      <SidebarDrawerProvider>
        <AuthContextProvider>
          <Routes />
        </AuthContextProvider>
      </SidebarDrawerProvider>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
