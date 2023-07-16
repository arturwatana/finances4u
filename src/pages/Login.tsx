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
import { useState, useContext } from "react";
import { Link, redirect } from "react-router-dom";
import axios from "axios";
import { ContentContext } from "../App";

export const Form = chakra("form", {});

type LoginProps = {
  email: string;
  password: string;
};

export default function Login() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loginInfo, setLoginInfo] = useState<LoginProps>({
    email: "",
    password: "",
  });

  const { setIsLoggedIn } = useContext(ContentContext);

  function handleInputs(e: any) {
    switch (e.target.id) {
      case "email":
        setLoginInfo({
          ...loginInfo,
          email: e.target.value,
        });
        break;

      case "password":
        setLoginInfo({
          ...loginInfo,
          password: e.target.value,
        });
    }
  }

  async function sendLogin() {
    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        loginInfo
      );
      const token = response.data.access_token;
      localStorage.setItem("token", token);
      setIsLoggedIn(true);
      return redirect("/transactions");
    } catch (err: any) {
      console.log(err.response.status);
    }
  }

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
            id="email"
            onChange={handleInputs}
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
              id="password"
              onChange={handleInputs}
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
            onClick={sendLogin}
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
