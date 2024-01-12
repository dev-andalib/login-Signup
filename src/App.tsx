import { Box, Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import Buttons from "./components/Buttons";



function App() {
  const [signinStatus, setSigninStatus] = useState(true)


  return (
    <>
      <Box bgGradient="linear(to-l, #cbd5ff, #e3e1e3)" padding={'20px'}>
        <Grid
          templateAreas={signinStatus ? `"form BTN"` : `"BTN form"`}
          margin={'200px auto'}
          templateColumns={'1fr'}
          backgroundColor={'#fffeff'}
          borderRadius={'60px'}
          width={'800px'}
        >
          <GridItem area={"form"}>
            <Form signinStatus={signinStatus}></Form>
          </GridItem>
          <GridItem area={"BTN"}>
            <Buttons 
            signinStatus={signinStatus} 
            setSigninStatus={(signinStatus) => setSigninStatus(signinStatus)} ></Buttons>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}

export default App;
