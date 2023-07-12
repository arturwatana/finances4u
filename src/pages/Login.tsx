import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  chakra,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Form = chakra("form", {});

export default function Login() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <Flex
      align="center"
      justify="center"
      p={{
        base: "5em 2em 15em 2em",
        lg: "5em 15em 20em 15em",
        xl: "5em 30em 20em 30em",
        "2x1": "5em 40em 20em 40em",
      }}
    >
      <Form
        w={{ lg: "55%", xl: "55%", "2x1": "55%" }}
        bgColor="#c3e9c3"
        display={"flex"}
        flexDirection={"column"}
        gap="2em"
        alignItems={"center"}
        justifyContent={"center"}
        p={{ base: "3em", lg: "3em 5em 3em 5em" }}
        borderRadius={"2em"}
        boxShadow={"0.1em 0.3em 0.5em #222"}
      >
        <Text
          fontSize={"27px"}
          fontWeight={"light"}
          w="100%"
          textAlign={"center"}
          fontFamily={"enriqueta"}
        >
          Login
        </Text>
        <FormControl
          fontFamily={"enriqueta"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <FormLabel
            textAlign={"center"}
            fontSize={"20px"}
            fontWeight={"light"}
          >
            E-mail
          </FormLabel>
          <Input
            type="email"
            border="1px solid #222"
            borderRadius={"2em"}
            _hover={{ border: "1px solid white" }}
          />
        </FormControl>
        <FormControl
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <FormLabel
            textAlign={"center"}
            fontSize={"20px"}
            fontWeight={"light"}
            fontFamily={"enriqueta"}
          >
            Password
          </FormLabel>
          <InputGroup
            display="flex"
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Input
              border="1px solid #222"
              borderRadius={"2em"}
              _hover={{ border: "1px solid white" }}
              type={showPassword ? "text" : "password"}
              pr="4em"
            />
            <InputRightElement>
              <Button
                onClick={() => setShowPassword((prev) => !prev)}
                border="none"
                bg="none"
                mr="2em"
                _hover={{ bg: "none" }}
              >
                {showPassword ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Flex
          alignItems={"flex"}
          justifyContent={"space-between"}
          w="100%"
          gap={{ base: "2em", lg: "0em" }}
          flexDir={{ base: "column", lg: "row" }}
        >
          <Button
            bg="primaryGreen"
            borderRadius={"2em"}
            _hover={{ opacity: "0.7" }}
            w={{ base: "100%", lg: "40%" }}
          >
            Logar
          </Button>
          <Button borderRadius={"2em"} fontSize={"14px"} p="1em">
            Esqueci minha senha
          </Button>
        </Flex>
        <Flex
          w="100%"
          direction={"row"}
          gap="0.3em"
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Text>Ainda não tem cadastro? </Text>
          <Text _hover={{ color: "white", transition: "0.1s" }}>
            <Link to="/register">Registre-se</Link>
          </Text>
        </Flex>
      </Form>
    </Flex>
  );
}
