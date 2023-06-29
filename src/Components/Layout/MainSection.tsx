import { Box, Button, Flex, Img, Text } from "@chakra-ui/react";
import mainImg from "../../assets/undraw_personal_finance_re_ie6k (1).svg";

export default function MainSection() {
  return (
    <Flex w="100%" h="100%" align={"center"} justify={"space-between"}>
      <Flex
        direction="column"
        w="60%"
        justify={"space-evenly"}
        h="60%"
        gap="2em"
      >
        <Flex direction={"column"}>
          <Text fontSize="60px" fontWeight="semibold" w="100%">
            Chegou a hora de colocar sua vida em ordem!
          </Text>
          <Text fontSize="30px" fontWeight="light">
            Anote e gerencie seus gastos em apenas um app!
          </Text>
        </Flex>
        <Flex gap="2em">
          <Button
            bgColor="primaryGreen"
            w="9em"
            fontSize={"17px"}
            _hover={{ opacity: "0.7" }}
          >
            Registre-se
          </Button>
          <Button w="9em" fontSize={"17px"}>
            Saiba mais
          </Button>
        </Flex>
      </Flex>
      <Flex w="40%" justify="end" align={"start"}>
        <Box w="60%" pb="2em">
          <Img src={mainImg} h="100%" w="100%" />
        </Box>
      </Flex>
    </Flex>
  );
}
