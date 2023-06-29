import { Flex, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex
      align={"center"}
      justify={"center"}
      backgroundColor="#D1EAC8"
      textAlign={"center"}
      h="3em"
      position="absolute"
      bottom="0"
      w="100%"
    >
      <Flex gap="0.3em">
        <Text fontFamily={"enriqueta"}>Finances4u</Text>
        <Text>foi desenvolvido por Artur Watanabe</Text>
      </Flex>
    </Flex>
  );
}
