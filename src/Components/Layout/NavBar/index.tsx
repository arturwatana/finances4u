import { Flex, chakra } from "@chakra-ui/react";

const Ul = chakra("ul", {
  baseStyle: {
    listStyle: "none",
    display: "flex",
    gap: "2.5em",
    fontSize: "16px",
    fontWeight: "semibold",
  },
});

const P = chakra("p", {
  baseStyle: {
    fontFamily: "Enriqueta",
    fontSize: "25px",
    textColor: "#79AC67",
  },
});

export default function NavBar() {
  return (
    <Flex justify={"space-between"} align={"center"}>
      <P>Finances4u</P>
      <Ul>
        <li>Inicio</li>
        <li>Sobre Nós</li>
        <li>Login</li>
      </Ul>
    </Flex>
  );
}
