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
  

const SignUp = () => {
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
      
              <GridItem area={"form"} paddingTop={"40px"}>
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
                    Sign UP
                  </Button>
                </FormControl>
              </GridItem>
            </Grid>
          </>
        );
      };
      


export default SignUp