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
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";
import { ContentContext } from "../App";

type UserProps = {
  name: string;
  email: string;
  password: string;
};

export default function Register() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<UserProps>({
    email: "",
    name: "",
    password: "",
  });
  const navigate = useNavigate();
  const { setNotification, setNotificationMessage } =
    useContext(ContentContext);
  function handleInputs(e: any) {
    switch (e.target.id) {
      case "name":
        setUserInfo({
          ...userInfo,
          name: e.target.value,
        });
        break;

      case "email":
        setUserInfo({
          ...userInfo,
          email: e.target.value,
        });
        break;

      case "password":
        setUserInfo({
          ...userInfo,
          password: e.target.value,
        });
    }
  }

  async function sendRegister() {
    try {
      await axios.post(
        `https://finances4u-api-o4n2.onrender.com/users`,
        userInfo
      );
      setNotificationMessage({
        message: "Usuário cadastrado com sucesso",
        status: "success",
      });
      setNotification(true);
      navigate("/login");
    } catch (err: any) {
      setNotificationMessage({
        message: err.response.data.message,
        status: "error",
      });

      setNotification(true);
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
            id="name"
            _hover={{ border: "1px solid white" }}
            onChange={handleInputs}
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
            id="email"
            type="email"
            border="1px solid #222"
            borderRadius={"2em"}
            _hover={{ border: "1px solid white" }}
            onChange={handleInputs}
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
              id="password"
              _hover={{ border: "1px solid white" }}
              type={showPassword ? "text" : "password"}
              pr="4em"
              onChange={handleInputs}
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
            w={{ base: "100%", lg: "40%" }}
            bg="primaryGreen"
            borderRadius={"2em"}
            _hover={{ opacity: "0.7" }}
            onClick={sendRegister}
          >
            Registrar
          </Button>
          <Button borderRadius={"2em"} fontSize={"14px"} p="1em" type="reset">
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
          <Text fontSize={18}>Já tem cadastro? Faca o </Text>
          <Text fontSize={18} _hover={{ color: "white", transition: "0.1s" }}>
            <Link to="/login">Login</Link>
          </Text>
        </Flex>
      </Form>
    </Flex>
  );
}
