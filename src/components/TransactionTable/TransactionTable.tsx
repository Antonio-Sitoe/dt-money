import { useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";
import { Container } from "./styles";
const TransactionTable = () => {
  const { transactionData } = useContext(TransactionContext);

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
