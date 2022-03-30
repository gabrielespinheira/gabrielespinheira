import styled from 'styled-components'

export const Styled = styled.header`
  padding: 30px 0;

  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-size: 32px;
    font-weight: 600;
  }

  .options {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  @media (max-width: 330px) {
    .logo {
      font-size: 27px;
    }
  }
`
