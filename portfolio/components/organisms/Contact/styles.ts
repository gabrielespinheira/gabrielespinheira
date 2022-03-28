import styled from 'styled-components'

export const Styled = styled.main`
  .contact {
    margin-bottom: 160px;

    h2 {
      width: 100%;
      text-align: center;
      font-size: 42px;
      font-weight: bold;
      line-height: 56px;
      margin-bottom: 64px;
    }

    .social {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
      gap: 28px;

      .btn {
        padding-left: 32px;
        padding-right: 32px;
      }
    }

    footer {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 80px;

      .muted {
        color: var(--text);
        font-size: 14px;
        text-transform: uppercase;
      }
    }
  }
`
