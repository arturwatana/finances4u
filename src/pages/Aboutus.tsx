import { Box, Flex, Img, Text } from "@chakra-ui/react";
import sectionImg from "../assets/undraw_save_to_bookmarks_re_8ajf (1).svg";

export default function Aboutus() {
  return (
    <Flex
      p={{
        base: "3em 2em 0em 2em",
        lg: "5em 15em 0em 15em",
        xl: "5em 30em 0em 30em",
        "2x1": "5em 40em 0em 40em",
      }}
      alignItems={"center"}
      justifyContent={"center"}
      w="100%"
    >
      <Flex
        gap="3em"
        justifyContent={"space-between"}
        direction={"column-reverse"}
        alignItems={"center"}
      >
        <Text w="70%" textAlign={"center"} fontSize={"20px"}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
        <Box w="40%" h="100%">
          <Img src={sectionImg} w="100%" />
        </Box>
      </Flex>
    </Flex>
  );
}
