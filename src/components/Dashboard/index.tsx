import Sumary from "../Sumary";
import TransactionTable from '../TransactionTable/TransactionTable';
import { Container } from "./styles";

const Dashboard = () => {
  return (
    <Container>
      <Sumary />
      <TransactionTable/>
    </Container>
  );
};

export default Dashboard;
