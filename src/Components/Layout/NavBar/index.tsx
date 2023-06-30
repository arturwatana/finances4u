import { Box, Flex, chakra } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Ul = chakra("ul", {
  baseStyle: {
    listStyle: "none",
    display: "flex",
    gap: "2.5em",
    fontSize: "21px",
    fontWeight: "semibold",
    color: "#79AC67",
  },
});

const P = chakra("p", {
  baseStyle: {
    fontFamily: "Enriqueta",
    fontSize: "28px",
    textColor: "#79AC67",
  },
});

const BurgerUl = chakra("ul", {
  baseStyle: {
    listStyle: "none",
    gap: "1em",
    p: "1em 0 1em 0",
    position: "absolute",
    right: "24.2%",
    top: "70%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid #79AC67",
    borderRadius: "2em",
    w: "10em",
  },
});

const BurgerLi = chakra("li", {
  baseStyle: {
    fontSize: "16px",
    fontWeight: "semibold",
    color: "#79AC67",

    _hover: {
      opacity: 0.6,
    },
  },
});

export default function NavBar() {
  const [loggedIn, setLoggedIn] = useState<boolean>(true);
  const [hoverMenu, setHoverMenu] = useState<boolean>(false);
  return (
    <Flex
      justify={"space-between"}
      align={"center"}
      p="2.5em 40em 2.5em 40em"
      position={"relative"}
    >
      <P>Finances4u</P>
      <Ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/aboutus">Sobre nós</Link>
        </li>
        {loggedIn ? (
          <li onClick={() => setHoverMenu((prev) => !prev)}>Minha conta</li>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </Ul>
      {hoverMenu ? (
        <BurgerUl>
          <BurgerLi
            borderBottom={"1px solid #79AC67"}
            pb="1em"
            w="100%"
            textAlign={"center"}
          >
            <Link to="/transactions">Transacoes</Link>
          </BurgerLi>
          <BurgerLi>
            <Link to="/account">Configuracoes</Link>
          </BurgerLi>
        </BurgerUl>
      ) : null}
    </Flex>
  );
}
