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

interface Props {
  signinStatus: boolean;
}

const Form = ({ signinStatus }: Props) => {
  if (signinStatus)
    return (
      <>
        <Grid
          templateAreas={`"heading" "icons" "form" `}
          padding={"40px"}
          height={"550px"}
          width={"400px"}
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
            <Flex
              justifyContent={"center"}
              columnGap={"30px"}
              marginTop={"10px"}
            >
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
              <Input
                type="email"
                placeholder="EMAIL ADDRESS"
                backgroundColor={"#eeedef"}
              />
              <FormLabel
                textAlign={"center"}
                color={"#c2c1c2"}
                paddingTop={"20px"}
              >
                {" "}
                Now type in you password
              </FormLabel>
              <Input
                type="password"
                placeholder="PASSWORD"
                backgroundColor={"#eeedef"}
              />
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
                SIGN IN
              </Button>
            </FormControl>
          </GridItem>
        </Grid>
      </>
    );

   return(
    <>
    <Grid
      templateAreas={`"heading" "icons" "form" `}
      padding={"40px"}
      height={"550px"}
      width={"400px"}
    >
      <GridItem
        area={"heading"}
        fontSize={"40px"}
        fontWeight={"700"}
        marginTop={'20px'}
        
      >
        <Text textAlign={"center"}>Create Account</Text>
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

      <GridItem area={"form"} paddingTop={"10px"}>
        <FormControl textAlign={"center"}>
          <FormLabel textAlign={"center"} color={"#c2c1c2"}>
            or use your email for registration{" "}
          </FormLabel>
          <Input type="text" placeholder="Name" backgroundColor={'#eeedef'} marginBottom={'20px'}/>
          <Input type="email" placeholder="EMAIL ADDRESS" backgroundColor={'#eeedef'}  marginBottom={'20px'}/>
          <Input type="password" placeholder="PASSWORD"  backgroundColor={'#eeedef'}  marginBottom={'20px'}/>

          <Button
            marginTop={"10px"}
            width={"150px"}
            color={"#fdebff"}
            backgroundColor={"#522caa"}
            
          >
            SIGN UP
          </Button>
        </FormControl>
      </GridItem>
    </Grid>
  </>
   )
};

export default Form;
