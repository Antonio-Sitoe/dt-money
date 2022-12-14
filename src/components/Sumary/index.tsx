import { Container, SumaryItems } from "./styles";
import Total from "../../assets/total.svg";
import IncomeImg from "../../assets/entradas.svg";
import OutComeImg from "../../assets/saídas.svg";
import { useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";

const Sumary = () => {
  const { transactionData } = useContext(TransactionContext);
  return (
    <Container>
      <SumaryItems>
        <header>
          <p>Entradas</p>
          <img src={IncomeImg} alt="Entradas" />
        </header>
        <strong>R1000,00</strong>
      </SumaryItems>
      <SumaryItems>
        <header>
          <p>Saidas</p>
          <img src={OutComeImg} alt="Saidas" />
        </header>
        <strong> - R1000,00</strong>
      </SumaryItems>
      <SumaryItems className="highLigthBackground">
        <header>
          <p>Total</p>
          <img src={Total} alt="Total" />
        </header>
        <strong>R1000,00</strong>
      </SumaryItems>
    </Container>
  );
};

export default Sumary;
