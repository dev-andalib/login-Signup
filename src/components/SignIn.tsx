import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Square,
  Text,
} from "@chakra-ui/react";
import { IoLogoGoogleplus } from "react-icons/io";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";



const SignIn = () => {

  // const buttonhover = () =>{
  //   var bgColor = '#585bc9'
  //   var textColor = '#000000'
  // }


  return (
    <>
      <Grid
        templateAreas={`"heading" "icons" "form" `}
        width={"400px"}
        marginRight={"50px"}
      >
        <GridItem
          area={"heading"}
          paddingTop={6}
          fontSize={"40px"}
          fontWeight={"700"}
          
        >
          <Text textAlign={"center"}>Sign In</Text>
        </GridItem>

        <GridItem area={"icons"}>
          <Flex justifyContent={"center"} columnGap={"30px"} marginTop={"10px"}>
            <Square
              border={"1px #e7e6e8 solid"}
              borderRadius={"10px"}
              padding={"5px"}
              size={"40px"}
            >
              <IoLogoGoogleplus />
            </Square>
            <Square
              border={"1px #e7e6e8 solid"}
              borderRadius={"10px"}
              padding={"5px"}
              size={"40px"}
            >
              <FaFacebookF />
            </Square>
            <Square
              border={"1px #e7e6e8 solid"}
              borderRadius={"10px"}
              padding={"5px"}
              size={"40px"}
            >
              <FaGithub />
            </Square>
            <Square
              border={"1px #e7e6e8 solid"}
              borderRadius={"10px"}
              padding={"5px"}
              size={"40px"}
            >
              <FaLinkedinIn />
            </Square>
          </Flex>
        </GridItem>

        <GridItem area={"form"} paddingTop={"40px"}>
          <FormControl textAlign={"center"}>
            <FormLabel textAlign={"center"} color={"#c2c1c2"}>
              or use your email and pass word{" "}
            </FormLabel>
            <Input type="email" placeholder="EMAIL ADDRESS" />
            <FormLabel textAlign={"center"} color={"#c2c1c2"}>
              {" "}
              Now type in you password
            </FormLabel>
            <Input type="password" placeholder="PASSWORD" />
            <FormLabel
              textAlign={"center"}
              color={"#c2c1c2"}
              marginTop={"45px"}
            >
              Forgot you password?{" "}
            </FormLabel>
            <Button
              marginTop={"10px"}
              width={"150px"}
              color={"#fdebff"}
              backgroundColor={"#522caa"}
              
            >
              Sign IN
            </Button>
          </FormControl>
        </GridItem>
      </Grid>
    </>
  );
};

export default SignIn;
