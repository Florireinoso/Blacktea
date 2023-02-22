import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
  
  return (
  <>
    <ChakraProvider>

    <NavBar/>

    <ItemListContainer greeting={"Sabores para tus momentos"}/>

    </ChakraProvider>
  </>);
};

export default App
