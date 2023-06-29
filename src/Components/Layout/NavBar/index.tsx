import { Flex, chakra } from "@chakra-ui/react";
import { Link } from "react-router-dom";

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

export default function NavBar() {
  return (
    <Flex justify={"space-between"} align={"center"} p="2.5em 40em 2.5em 40em">
      <P>Finances4u</P>
      <Ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/aboutus">Sobre nós</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </Ul>
    </Flex>
  );
}
