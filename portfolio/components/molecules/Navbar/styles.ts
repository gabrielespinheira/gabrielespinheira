import styled from 'styled-components'

export const Styled = styled.nav`
  & > div {
    display: flex;
    background: var(--bgTransp);
    backdrop-filter: blur(30px);
    border-radius: 8px;
    overflow: hidden;
  }

  a {
    display: flex;
    padding: 19px 20px;
    cursor: pointer;
    transition: all 0.5s;
    background: var(--bgTransp);
    color: var(--text);

    &:hover {
      background: var(--primary);
      color: var(--white);
      transition: all 0.5s;
    }

    @media (max-width: 899px) {
      &:hover {
        background: var(--bgTransp);
        color: var(--text);
      }

      &:active {
        background: var(--primary);
      }
    }
  }

  @media (max-width: 420px) {
    a {
      padding: 16px 16px;
    }
  }
`
