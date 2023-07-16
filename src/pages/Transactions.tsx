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
import TransactionModal from "../Components/TransactionModal";
import axios from "axios";

const InfoBox = chakra("div", {
  baseStyle: {
    bg: "#B8EAB8",
    w: "45%",
    h: "100%",
    p: "2em",
    borderRadius: "2em",
    display: "flex",
    gap: "1.5em",
    alignItems: "center",
    justifyContent: "center",
    flexDir: "column",
    fontSize: "22px",
  },
});

export type TransactionProps = {
  name: string;
  value: number;
  transactionDate: string;
  id?: string;
  userId?: string;
};

export default function Transactions() {
  const [filteredTransactions, setFilteredTransactions] = useState<
    TransactionProps[]
  >([]);
  const [filterDates, setFilterDates] = useState<string>("");
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [transactionsArray, setTransactionsArray] = useState<
    TransactionProps[]
  >([]);

  async function getTransactions() {
    const token = localStorage.getItem("token");
    try {
      const transactions = await axios.get(
        "http://localhost:3000/transactions",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setTransactionsArray(transactions.data);
    } catch (err: any) {
      console.log(err);
    }
  }

  useEffect(() => {
    console.log(transactionsArray);
  }, [transactionsArray]);

  useEffect(() => {
    getTransactions();
  }, []);

  const futureTransactions = transactionsArray.filter(
    (transaction: TransactionProps) => {
      const dateSplit = transaction.transactionDate.split("/");
      const newDate = new Date(+dateSplit[2], +dateSplit[1] - 1, +dateSplit[0]);
      if (dayjs(newDate).isAfter(dayjs(new Date()))) {
        return transaction;
      }
    }
  );

  const futureValue = futureTransactions.reduce((prev, next) => {
    return prev + next.value;
  }, 0);

  const transactionsValue = transactionsArray.reduce((prev, next) => {
    const futureTransaction = futureTransactions.find(
      (transaction) => transaction === next
    );
    if (!futureTransaction) {
      return prev + next.value;
    }
    return prev;
  }, 0);

  useEffect(() => {
    const filterTransactions = transactionsArray.filter(
      (transaction) => transaction.transactionDate === filterDates
    );
    setFilteredTransactions(filterTransactions);
  }, [filterDates]);

  const daysWithTransactions: any[] = SortDates(transactionsArray);

  return (
    <Flex
      p={{
        base: "3em 2em 5em 2em",
        lg: "5em 15em 5em 15em",
        xl: "5em 30em 5em 30em",
        "2x1": "5em 40em 5em 40em",
      }}
      direction={"column"}
      gap="3em"
    >
      {modalOpen ? <TransactionModal setModalOpen={setModalOpen} /> : null}

      <Flex direction={"column"} gap="2em">
        <Flex
          w="100%"
          alignItems={"center"}
          justifyContent={"space-between"}
          h="25vh"
        >
          <InfoBox>
            <Text fontWeight={"bold"} textAlign={"center"}>
              Lancamentos futuros:
            </Text>
            <Text color={futureValue > 0 ? "#32A10B" : "#F60D0D"} h="50%">
              R$
              {futureValue}
            </Text>
          </InfoBox>
          <InfoBox>
            <Text fontWeight={"bold"}> Saldo:</Text>
            <Text color={transactionsValue > 0 ? "#32A10B" : "#F60D0D"}>
              R$
              {transactionsValue}
            </Text>
          </InfoBox>
        </Flex>
        <Flex direction={"column"} gap="2em" w="100%">
          <Flex
            w="100%"
            justifyContent={"space-between"}
            flexDir={{ base: "column", lg: "row" }}
            alignItems={{ base: " center", lg: "end" }}
            gap={{ base: "2em", lg: "0em" }}
          >
            <Button bg="primaryGreen" onClick={() => setModalOpen(true)}>
              Criar Transacao
            </Button>
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
                {filteredTransactions.map((transaction: TransactionProps) => {
                  return (
                    <TransactionCard
                      name={transaction.name}
                      value={transaction.value}
                      transactionDate={transaction.transactionDate}
                    />
                  );
                })}
              </>
            ) : (
              <>
                <Text fontSize={"18px"} fontWeight={"semibold"}>
                  Futuras transacoes
                </Text>
                {futureTransactions.map((transaction: TransactionProps) => {
                  return (
                    <TransactionCard
                      name={transaction.name}
                      value={transaction.value}
                      transactionDate={transaction.transactionDate}
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
                      {transactionsArray.map(
                        (transaction: TransactionProps) => {
                          const futureTransaction = futureTransactions.find(
                            (futureTransact: TransactionProps) =>
                              futureTransact === transaction
                          );
                          if (!futureTransaction) {
                            if (
                              transaction.transactionDate ===
                              day.format("DD/MM/YYYY")
                            ) {
                              return (
                                <TransactionCard
                                  name={transaction.name}
                                  value={transaction.value}
                                  transactionDate={transaction.transactionDate}
                                />
                              );
                            }
                          }
                        }
                      )}
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
