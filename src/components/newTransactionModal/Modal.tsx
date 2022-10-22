import { FormEvent, useState } from "react";
import Modal from "react-modal";
import CloseImg from "../../assets/fechar.svg";
import IncomeImg from "../../assets/entradas.svg";
import OutComeImg from "../../assets/saídas.svg";
import {
  FormModal,
  ModalH2,
  TransactionButton,
  TransactionType,
} from "./styles";
import { api } from "../../services/api";

interface NewTransacitonModalProps {
  isNewTransactionModalOpen: boolean;
  handleCloseTransactionModal: () => void;
}
const NewTransacitonModal = ({
  isNewTransactionModalOpen,
  handleCloseTransactionModal,
}: NewTransacitonModalProps) => {
  const [type, setType] = useState("deposit");
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState("");

  const handleSubmitTransaction = async (e: FormEvent) => {
    e.preventDefault();

    const data = {
      type,
      title,
      value,
      category,
    };

    const postTransactions = await api.post("transactions", data);
    console.log(postTransactions)
    // handleCloseTransactionModal();
  };
  return (
    <Modal
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseTransactionModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        className="react-modal-close"
        type="button"
        onClick={handleCloseTransactionModal}
      >
        <img src={CloseImg} alt="Fechar modal" />
      </button>
      <ModalH2>Cadastrar transacao</ModalH2>
      <FormModal onSubmit={handleSubmitTransaction}>
        <input
          type="text"
          name="nome"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
          id="nome"
          placeholder="nome"
        />
        <input
          type="number"
          value={value}
          onChange={({ target }) => setValue(Number(target.value))}
          name="preco"
          id="preco"
          placeholder="Valor"
        />

        <TransactionType className="container">
          <TransactionButton
            isActive={type === "deposit"}
            type="button"
            onClick={() => setType("deposit")}
            activeColor={"green"}
          >
            <img src={IncomeImg} alt="Entradas" />
            <span>Entradas</span>
          </TransactionButton>
          <TransactionButton
            activeColor={"red"}
            isActive={type === "withdraw"}
            type="button"
            onClick={() => setType("withdraw")}
          >
            <img src={OutComeImg} alt="Saidas" />
            <span>Saidas</span>
          </TransactionButton>
        </TransactionType>

        <input
          type="text"
          name="categoria"
          id="categoria"
          value={category}
          onChange={({ target }) => setCategory(target.value)}
          placeholder="categoria"
        />
        <button className="cadastrar">Cadastrar</button>
      </FormModal>
    </Modal>
  );
};

export default NewTransacitonModal;
