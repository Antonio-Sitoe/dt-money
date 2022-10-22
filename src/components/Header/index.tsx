import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  handleOpenTransactionModal: () => void;
}

export function Header({ handleOpenTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="logo-dt-money" />
        <button onClick={handleOpenTransactionModal}>Nova transação</button>
      </Content>
    </Container>
  );
}
