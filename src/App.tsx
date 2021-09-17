import { ChakraProvider } from '@chakra-ui/react'
import { Routes } from './routes';
import { AuthContextProvider } from './contexts/authContext';
import { theme } from './styles/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
    </ChakraProvider>
  );
}

export default App;
