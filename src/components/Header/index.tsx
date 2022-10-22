import Logo from "../../assets/Logo.svg";
import { Container, Content } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="logo-dt-money" />
        <button>Nova transacao</button>
      </Content>
    </Container>
  );
}
