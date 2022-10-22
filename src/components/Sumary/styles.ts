import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;
`;

export const SumaryItems = styled.div`
  padding: 1.5rem 2rem;
  color: var(--text-title);
  border-radius: 0.25rem;
  background: var(--shape);

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  strong {
    margin-top: 1rem;
    font-size: 2rem;
  }
`;
