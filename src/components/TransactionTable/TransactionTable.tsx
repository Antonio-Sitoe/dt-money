import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

const TransactionTable = () => {
  useEffect(() => {
    const getData = async () => {
      const transaction = await api.get(
        "http://127.0.0.1:5173/api/transactions"
      );
      console.log(transaction.data);
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
          <tr>
            <td className="title"> Desenvolvimento de website</td>
            <td className="deposity"> 12 000</td>
            <td>Desenvolvimento</td>
            <td>20/04/2000</td>
          </tr>
          <tr>
            <td className="title"> Desenvolvimento de website</td>
            <td className="deposity"> 12 000</td>
            <td>Desenvolvimento</td>
            <td>20/04/2000</td>
          </tr>
          <tr>
            <td className="title">Desenvolvimento de website</td>
            <td className="deposity"> 12 000</td>
            <td>Desenvolvimento</td>
            <td>20/04/2000</td>
          </tr>
          <tr>
            <td className="title">Desenvolvimento de website</td>
            <td className="withdrow"> 12 000</td>
            <td>Desenvolvimento</td>
            <td>20/04/2000</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};

export default TransactionTable;
