import { Box, Button, Flex, Img, Text } from "@chakra-ui/react";
import mainImg from "../../assets/undraw_personal_finance_re_ie6k (1).svg";
import { Link } from "react-router-dom";

export default function MainSection() {
  return (
    <Flex
      w="100%"
      h="100%"
      align="center"
      justify="space-between"
      direction={{ base: "column-reverse", lg: "column-reverse", xl: "row" }}
    >
      <Flex
        direction="column"
        w={{ lg: "100%", xl: "60%" }}
        justify={"space-evenly"}
        h="60%"
        gap={{ base: "3em", lg: "3em", xl: "2em" }}
      >
        <Flex direction={"column"} gap={{ lg: "0.5em" }}>
          <Text
            fontSize={{ base: "35px", lg: "45px", "2x1": "60px" }}
            fontWeight="semibold"
            w="100%"
            textAlign={{ base: "center", lg: "center", xl: "left" }}
          >
            Chegou a hora de colocar sua vida em ordem!
          </Text>
          <Text
            fontSize={{ base: "27px", lg: "27px", "2x1": "30px" }}
            fontWeight="light"
            textAlign={{ base: "center", lg: "center", xl: "left" }}
          >
            Anote e gerencie seus gastos em apenas um app!
          </Text>
        </Flex>
        <Flex
          gap={{ base: "4em", xl: "2em" }}
          justifyContent={{ base: "center", lg: "center", xl: "left" }}
        >
          <Button
            bgColor="primaryGreen"
            w="9em"
            fontSize={"17px"}
            _hover={{ opacity: "0.7" }}
          >
            <Link to="/register">Registre-se</Link>
          </Button>
          <Button w="9em" fontSize={"17px"}>
            Saiba mais
          </Button>
        </Flex>
      </Flex>
      <Flex
        justify={{ base: "center", lg: "end" }}
        align={{ base: "center", lg: "start" }}
      >
        <Box w={{ base: "80%", lg: "80%", xl: "60%" }} pb="2em">
          <Img src={mainImg} h="100%" w="100%" />
        </Box>
      </Flex>
    </Flex>
  );
}
