
import { Grid, GridItem } from '@chakra-ui/react'
import './App.css'
import SignIn from './components/SignIn'

function App() {
  
  return (
      <>
      <Grid templateAreas={`"form"`} w='100%' h='100vh' bgGradient='linear(to-l, #cbd5ff, #e3e1e3)'>
        <GridItem area={"form"} padding={10} width={'900px'} height={'550px'} marginX={'auto'} marginY={"250px"} backgroundColor={'#fffeff'} borderRadius={'30px'}> <SignIn></SignIn></GridItem>
      </Grid>
      </>
  )
}

export default App
