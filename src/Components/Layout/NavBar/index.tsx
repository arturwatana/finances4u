import { Flex, chakra } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { ContentContext } from "../../../App";

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
    display: "flex",
    top: "80%",
    right: "0%",
    flexDirection: "column",
    alignItems: "center",
    bgColor: "bg",
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
  const [hoverMenu, setHoverMenu] = useState<boolean>(false);

  const { isLoggedIn, setIsLoggedIn } = useContext(ContentContext);
  return (
    <Flex
      justify={"space-between"}
      align={"center"}
      p={{
        base: "1.5em 2em 1.5em 2em",
        lg: "2.5em 15em 2.5em 15em",
        xl: "2.5em 30em 2.5em 30em",
        "2x1": "2.5em 40em 2.5em 40em",
      }}
      position={"relative"}
    >
      <Link to="/">
        <P>Finances4u</P>
      </Link>
      <Flex>
        <Flex display={{ lg: "block", xl: "none" }} fontSize={"32px"}>
          <RxHamburgerMenu onClick={() => setHoverMenu((prev) => !prev)} />
        </Flex>
        <Ul display={{ base: "none", lg: "none", xl: "flex" }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutus">Sobre nós</Link>
          </li>
          {isLoggedIn ? (
            <li onClick={() => setHoverMenu((prev) => !prev)}>Minha conta</li>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </Ul>
        {hoverMenu ? (
          <BurgerUl right={{ base: "0%", lg: "15%", xl: "25%" }}>
            {!isLoggedIn ? (
              <>
                <BurgerLi
                  borderBottom={"1px solid #79AC67"}
                  pb="1em"
                  w="100%"
                  textAlign={"center"}
                >
                  <Link to="/login">Login</Link>
                </BurgerLi>
                <BurgerLi>
                  <Link to="/register">Registre-se</Link>
                </BurgerLi>
              </>
            ) : (
              <>
                <BurgerLi
                  borderBottom={"1px solid #79AC67"}
                  pb="1em"
                  w="100%"
                  textAlign={"center"}
                >
                  <Link to="/transactions">Transacoes</Link>
                </BurgerLi>
                <BurgerLi
                  borderBottom={"1px solid #79AC67"}
                  pb="1em"
                  w="100%"
                  textAlign={"center"}
                >
                  <Link to="/account">Configuracoes</Link>
                </BurgerLi>
                <BurgerLi>
                  <Link to="/" onClick={() => setIsLoggedIn(false)}>
                    Logout
                  </Link>
                </BurgerLi>
              </>
            )}
          </BurgerUl>
        ) : null}
      </Flex>
    </Flex>
  );
}
