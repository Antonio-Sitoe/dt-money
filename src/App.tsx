import Dashboard from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { createServer, Model } from "miragejs";
import Modal from "react-modal";
import { useState } from "react";
import NewTransacitonModal from "./components/newTransactionModal/Modal";

createServer({
  models: {
    transaction: Model,
  },
  routes() {
    this.namespace = "api";

    this.get("transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("transactions", (schema, req) => {
      const { requestBody }: any = req;
      return schema.create("transaction", JSON.parse(requestBody));
    });
  },
});
Modal.setAppElement("#root");
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
      <NewTransacitonModal
        isNewTransactionModalOpen={isNewTransactionModalOpen}
        handleCloseTransactionModal={handleCloseTransactionModal}
      />

      <GlobalStyle />
    </>
  );
}
