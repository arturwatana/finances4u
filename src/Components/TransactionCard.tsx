import { Flex, Text } from "@chakra-ui/react";
import { TransactionProps } from "../pages/Transactions";

export default function TransactionCard({
  name,
  transactionDate,
  value,
}: TransactionProps) {
  return (
    <Flex
      justifyContent={"space-between"}
      w="100%"
      p={{ base: "1em 2em 1em 2em", lg: "1em 6em 1em 6em" }}
      borderRadius={"2em"}
      bg="#B8EAB8"
    >
      <Text
        fontSize={"18px"}
        fontWeight={"semibold"}
        textAlign={"center"}
        w="40%"
      >
        {name}
      </Text>
      {transactionDate ? <Text>{transactionDate}</Text> : null}
      <Text
        fontWeight={"semibold"}
        color={value > 0 ? "#32A10B" : "#F60D0D"}
        fontSize={"18px"}
        display="flex"
        gap="0.3em"
      >
        R$ <span>{value}</span>
      </Text>
    </Flex>
  );
}
