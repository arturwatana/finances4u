import {
  Button,
  Flex,
  FormLabel,
  Input,
  InputGroup,
  Select,
  Text,
  chakra,
} from "@chakra-ui/react";
import TransactionCard from "../Components/TransactionCard";
import dayjs from "dayjs";
import SortDates from "../utils/sortDates";
import { useEffect, useState } from "react";

const InfoBox = chakra("div", {
  baseStyle: {
    bg: "#B8EAB8",
    w: "45%",
    h: "100%",
    borderRadius: "2em",
    display: "flex",
    gap: "1.5em",
    alignItems: "center",
    justifyContent: "center",
    flexDir: "column",
    fontSize: "24px",
  },
});

export type TransactionProps = {
  name: string;
  value: number;
  date: string;
};

export default function Transactions() {
  const [filteredTransactions, setFilteredTransactions] = useState<
    TransactionProps[]
  >([]);
  const [filterDates, setFilterDates] = useState<string>("");
  const transactionsArray: TransactionProps[] = [
    { name: "Mecanico", value: -1700, date: "18/08/2023" },
    { name: "Salario", value: 4700, date: "20/07/2023" },
    { name: "Mercado", value: -1700, date: "10/07/2023" },
    { name: "Cartao de debito", value: -1700, date: "30/06/2023" },
    { name: "Cartao de crédito", value: -1700, date: "17/05/2023" },
    { name: "Conta de luz", value: -1700, date: "14/05/2023" },
    { name: "Conta de telefone", value: -1700, date: "18/05/2023" },
    { name: "Conta de telefone", value: 10000, date: "18/07/2023" },
  ];

  const futureTransactions = transactionsArray.filter((transaction) => {
    const dateSplit = transaction.date.split("/");
    const newDate = new Date(+dateSplit[2], +dateSplit[1] - 1, +dateSplit[0]);
    if (dayjs(newDate).isAfter(dayjs(new Date()))) {
      return transaction;
    }
  });

  useEffect(() => {
    const filterTransactions = transactionsArray.filter(
      (transaction) => transaction.date === filterDates
    );
    setFilteredTransactions(filterTransactions);
  }, [filterDates]);

  const daysWithTransactions: any[] = SortDates(transactionsArray);

  return (
    <Flex p="4em 40em 10em 40em" direction={"column"} gap="3em">
      <Flex direction={"column"} p="0 20em 0 20em" gap="2em">
        <Flex
          w="100%"
          alignItems={"center"}
          justifyContent={"space-between"}
          h="25vh"
        >
          <InfoBox>
            <Text fontWeight={"bold"}>Lancamentos futuros:</Text>
            <Text>
              R$
              {futureTransactions.reduce((prev, next) => {
                return prev + next.value;
              }, 0)}
            </Text>
          </InfoBox>
          <InfoBox>
            <Text fontWeight={"bold"}> Saldo:</Text>
            <Text>
              R$
              {transactionsArray.reduce((prev, next) => {
                return prev + next.value;
              }, 0)}
            </Text>
          </InfoBox>
        </Flex>
        <Flex direction={"column"} gap="2em" w="100%">
          <Flex w="100%" justifyContent={"space-between"} alignItems={"end"}>
            <Button bg="primaryGreen">Criar Transacao</Button>
            <Flex>
              <InputGroup flexDir="column">
                <FormLabel htmlFor="filterDate" textAlign={"center"}>
                  Filtrar por data:
                </FormLabel>
                <Input
                  id="filterDate"
                  type="date"
                  onChange={(e: any) => {
                    const dateSplit = e.target.value.split("-");
                    const dateFormat = `${dateSplit[2]}/${dateSplit[1]}/${dateSplit[0]}`;
                    setFilterDates(dateFormat);
                  }}
                  value={filterDates}
                />
              </InputGroup>
            </Flex>
            <Button onClick={() => setFilterDates("")}>Limpar Filtro</Button>
          </Flex>
        </Flex>
        <Flex direction={"column"} gap="2em">
          <Flex justifyContent={"end"} alignItems={"center"} w="100%" gap="1em">
            <Text>Quantidade por página:</Text>
            <Select w="12%">
              <option value="">10</option>
              <option value="">20</option>
              <option value="">30</option>
              <option value="">40</option>
              <option value="">50</option>
            </Select>
          </Flex>
          <Flex direction={"column"} gap="2em">
            {filteredTransactions.length > 0 ? (
              <>
                <Text fontSize={"18px"} fontWeight={"semibold"}>
                  {filterDates}
                </Text>
                {filteredTransactions.map((transaction) => {
                  return (
                    <TransactionCard
                      name={transaction.name}
                      value={transaction.value}
                      date={transaction.date}
                    />
                  );
                })}
              </>
            ) : (
              <>
                <Text fontSize={"18px"} fontWeight={"semibold"}>
                  Futuras transacoes
                </Text>
                {futureTransactions.map((transaction) => {
                  return (
                    <TransactionCard
                      name={transaction.name}
                      value={transaction.value}
                      date={transaction.date}
                    />
                  );
                })}
                {daysWithTransactions.map((day) => (
                  <Flex direction={"column"} gap="1em">
                    <Text fontSize={"18px"} fontWeight={"semibold"}>
                      {day.format("DD/MM/YYYY") ===
                      dayjs(new Date()).format("DD/MM/YYYY")
                        ? "Hoje"
                        : day.format("DD/MM/YYYY")}
                    </Text>
                    <Flex direction={"column"} gap="2em">
                      {transactionsArray.map((transaction) => {
                        const futureTransaction = futureTransactions.find(
                          (futureTransact) => futureTransact === transaction
                        );
                        if (!futureTransaction) {
                          if (transaction.date === day.format("DD/MM/YYYY")) {
                            return (
                              <TransactionCard
                                name={transaction.name}
                                value={transaction.value}
                              />
                            );
                          }
                        }
                      })}
                    </Flex>
                  </Flex>
                ))}
              </>
            )}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
