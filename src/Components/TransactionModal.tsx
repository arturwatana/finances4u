import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { TransactionProps } from "../pages/Transactions";
import { useState } from "react";
import axios from "axios";

type ModalProps = {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function TransactionModal({ setModalOpen }: ModalProps) {
  const [transaction, setTransaction] = useState<TransactionProps>({
    name: "",
    transactionDate: "",
    value: 0,
  });

  async function saveTransaction() {
    const token = localStorage.getItem("token");
    try {
      await axios.post("http://localhost:3000/transactions", transaction, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setModalOpen(false);
    } catch (err: any) {
      console.log(err);
    }
  }
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      w="100%"
      h="100%"
      border="1px solid red"
      top="0"
      left="0"
      position={"fixed"}
      zIndex={"10"}
    >
      <Flex
        top="0"
        left="0"
        position={"fixed"}
        width="100%"
        h="100%"
        bg={"#222"}
        opacity={"0.6"}
        onClick={() => setModalOpen(false)}
      ></Flex>
      <Flex
        zIndex={"20"}
        bg="#fff"
        w="25%"
        borderRadius={"2em"}
        alignItems={"center"}
        direction={"column"}
        gap="1.5em"
        p="3em 4em 3em 4em"
      >
        <Text fontWeight={"bold"} fontSize={"20px"}>
          Cadastrar transacão
        </Text>
        <Flex direction={"column"} w="100%" gap="1em">
          <FormControl>
            <FormLabel>Nome:</FormLabel>
            <Input
              type="text"
              onChange={(e) =>
                setTransaction({ ...transaction, name: e.target.value })
              }
            />
          </FormControl>
          <Flex justifyContent={"space-between"} w="100%" gap="1em">
            <FormControl>
              <FormLabel>Valor da Transacão:</FormLabel>
              <Input
                type="number"
                onChange={(e) =>
                  setTransaction({ ...transaction, value: +e.target.value })
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel>Data da Transacão:</FormLabel>
              <Input
                type="date"
                onChange={(e) =>
                  setTransaction({
                    ...transaction,
                    transactionDate: e.target.value,
                  })
                }
              />
            </FormControl>
          </Flex>
        </Flex>
        <Flex w="100%" justifyContent={"space-between"}>
          <Button w="45%" bg="primaryGreen" onClick={saveTransaction}>
            Cadastrar
          </Button>
          <Button w="45%" onClick={() => setModalOpen(false)}>
            Cancelar
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
