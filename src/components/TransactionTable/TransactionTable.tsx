import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface TransactionData {
  id: number;
  title: string;
  createdAt: string;
  amount: number;
  category: string;
}

const TransactionTable = () => {
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

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactionData.map(({ id, title, amount, category, createdAt }) => {
            return (
              <tr key={id}>
                <td className="title">{title}</td>
                <td className="deposity">
                  {new Intl.NumberFormat("pt-mz", {
                    style: "currency",
                    currency: "mzn",
                  }).format(amount)}
                </td>
                <td>{category}</td>
                <td>
                  {new Intl.DateTimeFormat("pt-pt").format(new Date(createdAt))}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
};

export default TransactionTable;
