import styled from 'styled-components'

export const Styled = styled.main`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  background: var(--shape);
  border-radius: var(--radius);
  color: var(--text);
  overflow: hidden;
  padding: 16px;

  .details {
    position: relative;
    height: 12px;
    display: flex;
    gap: 8px;

    div {
      content: '';
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: #ed6a5e;
      border: 0.5px solid #d04d40;
    }

    div + div {
      content: '';
      background: #f5bd50;
      border: 0.5px solid #d69e3e;
    }

    div + div + div {
      content: '';
      background: #61c354;
      border: 0.5px solid #4fa63d;
    }
  }

  .inner {
    padding: 42px;
  }
`