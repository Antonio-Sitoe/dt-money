import styled from "styled-components";
import { darken, transparentize } from "polished";

export const ModalH2 = styled.h2`
  color: var(--text-title);
  font-size: 1.5rem;
  margin-bottom: 0.2rem;
`;
export const FormModal = styled.form`
  display: grid;
  gap: 1.5rem;

  input,
  button {
    height: 64px;
    border-radius: 0.25rem;
  }

  input {
    font-size: 1rem;
    font-weight: 400;

    padding: 0 1.5rem;
    background: #e7e9ee;
    border: 1px solid #d7d7d7;

    &::placeholder {
      color: var(--text-body);
    }
  }

  button.cadastrar {
    background: #33cc95;
    color: #fefefe;
    font-weight: 500;
    border: none;
    font-size: 1rem;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionType = styled.div`
  display: grid;
  gap: 0.6rem;
  grid-template-columns: 1fr 1fr;
`;

interface TransactionButtonProps {
  isActive: boolean;
  activeColor: "green" | "red";
}

const colors = {
  green: "#33cc95",
  red: "#e52e40",
};

export const TransactionButton = styled.button<TransactionButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #d7d7d7;
  background: ${({ isActive, activeColor }) =>
    isActive ? transparentize(0.9, colors[activeColor]) : "transparent"};
  color: #252525;
  transition: 0.3s;

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }

  &:hover {
    border-color: ${darken(0.1, "#d7d7d7")};
  }
`;
