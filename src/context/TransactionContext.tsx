import { createContext, ReactNode } from "react";
import { useEffect, useState } from "react";
import { api } from "../services/api";

interface TransactionData {
  id: number;
  title: string;
  amount: number;
  category: string;
  createdAt: string;
}
interface TransactionInput {
  type: string;
  title: string;
  value: Number;
  category: string;
  createdAt: string;
}
interface TransactionContextProps {
  transactionData: TransactionData[];
  CreateTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionContext = createContext<TransactionContextProps>(
  {} as TransactionContextProps
);

export const TransactionStorage = ({ children }: { children: ReactNode }) => {
  const [transactionData, setTransactionData] = useState<TransactionData[]>([]);

  useEffect(() => {
    const getData = async () => {
      const { transactions } = await (
        await api.get("http://127.0.0.1:5173/api/transactions")
      ).data;
      setTransactionData([...transactions]);
    };
    getData();
  }, []);

  const CreateTransaction = async ({
    type,
    title,
    value,
    category,
    createdAt,
  }: TransactionInput) => {
    const data = {
      type,
      title,
      value,
      category,
      createdAt,
    };

    const { transaction } = await (await api.post("transactions", data)).data;
    // console.log(transactions)
    setTransactionData([...transactionData, transaction]);
  };
  const value = {
    transactionData,
    CreateTransaction,
  };
  return (
    <TransactionContext.Provider value={value}>
      {children}
    </TransactionContext.Provider>
  );
};
