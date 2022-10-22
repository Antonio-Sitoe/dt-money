import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5;

    th {
      color: var(--text-body);
      padding: 1rem 2rem;
      text-align: left;
      font-weight: 400;
    }

    td {
      padding: 1rem 2rem;
      background: var(--shape);
      border: 0;
      font-weight: 400;
      color: var(--text-body);
      border-radius: 0.25rem;
      &.title {
        color: var(--text-title);
      }
      &.deposity {
        color: var(--green);
      }
      &.withdrow {
        color: var(--red);
      }
    }
  }
`;
