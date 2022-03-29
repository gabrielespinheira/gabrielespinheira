import styled from 'styled-components'

export const Styled = styled.nav`
  position: fixed;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);

  & > div {
    display: flex;
    background: var(--bgTransp);
    backdrop-filter: blur(30px);
  }

  a {
    display: flex;
    padding: 19px 20px;
    cursor: pointer;
    transition: all 0.5s;

    &:hover {
      background: var(--primary);
      color: var(--white);
      transition: all 0.5s;
    }
  }
`
