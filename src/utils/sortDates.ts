import dayjs from "dayjs";
import { TransactionProps } from "../pages/Transactions";

export default function SortDates(data: TransactionProps[]) {
  const daysWithTransactions: any[] = [];

  data.map((transaction) => {
    const dateSplit = transaction.date.split("/");
    const newDate = new Date(+dateSplit[2], +dateSplit[1] - 1, +dateSplit[0]);
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
