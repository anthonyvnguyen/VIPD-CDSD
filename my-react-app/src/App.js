import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/navbar';
import Home from './pages/homePage';

function App() {
  return (
    <ChakraProvider bg='brand.100'>
      <Navbar />
      <Home />
    </ChakraProvider>
  );
}

export default App;
