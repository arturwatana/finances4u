import { Box, Flex, Img, Text } from "@chakra-ui/react";

type QualityCardProps = {
  img: string;
  tittle: string;
  text: string;
};

export default function QualityCard(props: QualityCardProps) {
  return (
    <Flex direction={"column"} w="17em" gap="1.5em">
      <Box w="100%" h="100%">
        <Img src={props.img} w="100%" />
      </Box>
      <Flex direction={"column"} gap="0.5em">
        <Text w="100%" fontSize={"23px"} textAlign={"center"}>
          {props.tittle}
        </Text>
        <Text
          w="100%"
          textAlign={"center"}
          fontSize={"20px"}
          fontWeight={"light"}
        >
          {props.text}
        </Text>
      </Flex>
    </Flex>
  );
}
