import {
  Button,
  Flex,
  FormLabel,
  Input,
  InputGroup,
  Text,
} from "@chakra-ui/react";

export default function Account() {
  return (
    <Flex
      p={{
        base: "3em 2em 0em 2em",
        lg: "5em 15em 0em 15em",
        xl: "5em 30em 0em 30em",
        "2x1": "5em 40em 0em 40em",
      }}
      w="100%"
      alignItems={"center"}
      justify={"center"}
    >
      <Flex
        direction={"column"}
        border="1px solid #222"
        borderRadius={"3em"}
        w={{ base: "100%", lg: "50%" }}
        p="3em"
        gap="2em"
      >
        <Text fontWeight={"bold"} fontSize={"25px"}>
          Minha Conta
        </Text>
        <Flex direction={"column"} gap="1em">
          <InputGroup
            display="flex"
            flexDir={{ base: "column", lg: "row" }}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <FormLabel
              htmlFor="name"
              textAlign={{ base: "center", lg: "left" }}
              w={{ base: "100%", lg: "40%" }}
            >
              Nome Completo:
            </FormLabel>
            <Input type="text" />
          </InputGroup>
          <InputGroup
            display="flex"
            alignItems={"center"}
            justifyContent={"center"}
            flexDir={{ base: "column", lg: "row" }}
          >
            <FormLabel
              htmlFor="email"
              textAlign={{ base: "center", lg: "left" }}
              w={{ base: "100%", lg: "40%" }}
            >
              Email:
            </FormLabel>
            <Input type="text" w="100%" />
          </InputGroup>
          <InputGroup
            display="flex"
            alignItems={"center"}
            flexDir={{ base: "column", lg: "row" }}
            justifyContent={"center"}
          >
            <FormLabel
              htmlFor="password"
              textAlign={{ base: "center", lg: "left" }}
              w={{ base: "100%", lg: "40%" }}
            >
              Nova senha:
            </FormLabel>
            <Input type="password" />
          </InputGroup>
          <Flex
            w="100%"
            justifyContent={"space-between"}
            h="100%"
            alignItems={"center"}
            pt="1em"
          >
            <Button w="45%" h="2em" borderRadius={"2em"} bg="primaryGreen">
              Salvar
            </Button>
            <Button w="45%" h="2em" borderRadius={"2em"}>
              Cancelar
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
