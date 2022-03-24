import styled from 'styled-components'

export const Styled = styled.header`
  padding: 30px 0;

  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .logo {
    font-size: 32px;
    font-weight: 600;
  }

  .options {
    display: flex;
    flex-direction: row;
    gap: 24px;
  }
`
