import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { Form } from "./Login";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <Flex align="center" justify="center" p="4em 40em 3em 40em">
      <Form
        w="35%"
        bgColor="#c3e9c3"
        display={"flex"}
        flexDirection={"column"}
        gap="2em"
        alignItems={"center"}
        justifyContent={"center"}
        p="3em 5em 3em 5em"
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
          Registre-se
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
            Nome Completo
          </FormLabel>
          <Input
            type="text"
            border="1px solid #222"
            borderRadius={"2em"}
            _hover={{ border: "1px solid white" }}
          />
        </FormControl>
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
        <Flex alignItems={"flex"} justifyContent={"space-between"} w="100%">
          <Button
            bg="primaryGreen"
            borderRadius={"2em"}
            _hover={{ opacity: "0.7" }}
            w="40%"
          >
            Registrar
          </Button>
          <Button borderRadius={"2em"} fontSize={"14px"} p="1em">
            Limpar campos
          </Button>
        </Flex>
        <Flex
          w="100%"
          direction={"row"}
          gap="0.3em"
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Text>Já tem cadastro? Faca o </Text>
          <Text _hover={{ color: "white", transition: "0.1s" }}>
            <Link to="/login">Login</Link>
          </Text>
        </Flex>
      </Form>
    </Flex>
  );
}
