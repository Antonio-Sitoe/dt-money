import Dashboard from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { createServer } from "miragejs";
import Modal from "react-modal";
import { useState } from "react";

createServer({
  routes() {
    this.namespace = "api";

    this.get("transactions", () => {
      return [
        {
          id: "1",
          title: "Transaction 1",
          amount: "400",
          type: "deposity",
          category: "Food",
          createAt: "2017",
        },
      ];
    });
  },
});

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }
  function handleCloseTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header handleOpenTransactionModal={handleOpenTransactionModal} />
      <Dashboard />
      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseTransactionModal}
      >
        <h2>Cadastrar transacao</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}
