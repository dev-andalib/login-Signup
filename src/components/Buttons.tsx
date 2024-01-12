import { Button, Grid, GridItem, Text } from "@chakra-ui/react";

interface Props {
  signinStatus: boolean;
  setSigninStatus: (signinStatus: boolean)=> void;
}
const Buttons = ({ signinStatus, setSigninStatus }: Props) => {
  if (signinStatus)
    return (
      <>
        <Grid
          templateAreas={`"heading" "message" "button"`}
          color={"#fff"}
          backgroundColor={"#5336ac"}
          borderRadius={"140px 60px 60px 140px"}
          paddingBottom={"80px"}
          height={"550px"}
          width={"420px"}
        >
          <GridItem area={"heading"} fontSize={"40px"} fontWeight={"700"}>
            <Text textAlign={"center"} marginTop={"194px"}>
              Hello, Friend!
            </Text>
          </GridItem>
          <GridItem area={"message"}>
            <Text textAlign={"center"} marginTop={"14px"}>
              Register with your personal details to use all the site features
            </Text>
          </GridItem>
          <GridItem area={"button"} textAlign={"center"}>
            <Button
              marginTop={"28px"}
              width={"150px"}
              color={"#fff"}
              backgroundColor={"#5336ac"}
              border={"1px solid #fff"}
              onClick={() => setSigninStatus(!signinStatus)}
            >
              SIGN UP
            </Button>
          </GridItem>
        </Grid>
      </>
    );

  return(
    <>
    <Grid
      templateAreas={`"heading" "message" "button"`}
      color={"#fff"}
      backgroundColor={"#5336ac"}
      borderRadius={"60px 140px 140px 60px "}
      paddingBottom={"80px"}
      height={"550px"}
      width={"420px"}
    >
      <GridItem area={"heading"} fontSize={"40px"} fontWeight={"700"}>
        <Text textAlign={"center"} marginTop={"200px"}>
         Welcome Back!
        </Text>
      </GridItem>
      <GridItem area={"message"}>
        <Text textAlign={"center"} paddingX={5}>
          Enter your personal details to use all of the site features
        </Text>
      </GridItem>
      <GridItem area={"button"} textAlign={"center"}>
        <Button
          
          width={"150px"}
          color={"#fff"}
          backgroundColor={"#5336ac"}
          border={"1px solid #fff"}
          onClick={() => setSigninStatus(!signinStatus)}
        >
          SIGN IN
        </Button>
      </GridItem>
    </Grid>
  </>
  )
};

export default Buttons;
