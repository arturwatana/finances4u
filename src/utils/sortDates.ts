import dayjs from "dayjs";
import { TransactionProps } from "../pages/Transactions";

export default function SortDates(data: TransactionProps[]) {
  const daysWithTransactions: any[] = [];

  data.map((transaction) => {
    const dateSplit = transaction.transactionDate.split("-");
    if (dateSplit.length > 0) {
      const newDate = new Date(+dateSplit[0], +dateSplit[1] - 1, +dateSplit[2]);
      const day = dayjs(newDate);
      if (day.isBefore(dayjs(new Date()))) {
        const dayAlreadyInTransactionsArray = daysWithTransactions.find(
          (dayInArray) =>
            dayInArray.format("DD/MM/YYYY") === day.format("DD/MM/YYYY")
        );
        if (dayAlreadyInTransactionsArray) {
          return;
        }
        daysWithTransactions.push(day);
      }
    }
  });

  daysWithTransactions.sort((prev, next) => {
    const prevSplit = prev.format("DD/MM/YYYY").split("/");
    const nextSplit = next.format("DD/MM/YYYY").split("/");
    if (+prevSplit[1] > +nextSplit[1]) {
      return -1;
    }
    if (+prevSplit[1] < +nextSplit[1]) {
      return 1;
    }
    if (+prevSplit[0] > +nextSplit[0]) {
      return -1;
    }
    return 0;
  });

  return daysWithTransactions;
}
