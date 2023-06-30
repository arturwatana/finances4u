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
      p="6em 40em 3em 40em"
      w="100%"
      alignItems={"center"}
      justify={"center"}
    >
      <Flex
        direction={"column"}
        border="1px solid #222"
        borderRadius={"3em"}
        w="50%"
        p="3em"
        gap="2em"
      >
        <Text fontWeight={"bold"} fontSize={"25px"}>
          Minha Conta
        </Text>
        <Flex direction={"column"} gap="1em">
          <InputGroup
            display="flex"
            alignItems={"center"}
            justifyContent={"center"}
          >
            <FormLabel htmlFor="name" w="40%">
              Nome Completo:
            </FormLabel>
            <Input type="text" />
          </InputGroup>
          <InputGroup
            display="flex"
            alignItems={"center"}
            justifyContent={"center"}
          >
            <FormLabel htmlFor="email" w="40%">
              Email:
            </FormLabel>
            <Input type="text" />
          </InputGroup>
          <InputGroup
            display="flex"
            alignItems={"center"}
            justifyContent={"center"}
          >
            <FormLabel htmlFor="password" w="40%">
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
