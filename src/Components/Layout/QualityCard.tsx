import { Box, Flex, Img, Text } from "@chakra-ui/react";

type QualityCardProps = {
  img: string;
  tittle: string;
  text: string;
};

export default function QualityCard(props: QualityCardProps) {
  return (
    <Flex direction={"column"} w="10em" gap="1em">
      <Box w="100%">
        <Img src={props.img} w="100%" />
      </Box>
      <Text w="100%" textAlign={"center"}>
        {props.tittle}
      </Text>
      <Text w="100%" textAlign={"center"} fontSize={"12px"}>
        {props.text}
      </Text>
    </Flex>
  );
}
