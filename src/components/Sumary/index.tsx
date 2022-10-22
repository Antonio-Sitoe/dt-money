import { Container, SumaryItems } from "./styles";
import IncomeImg from "../../assets/entradas.svg";
import OutComeImg from "../../assets/saídas.svg";
import Total from "../../assets/total.svg";

const Sumary = () => {
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
      <SumaryItems>
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
