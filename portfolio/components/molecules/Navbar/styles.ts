import styled from 'styled-components'

export const Styled = styled.nav`
  position: fixed;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  background: var(--bgTransp);
  backdrop-filter: blur(30px);
  padding: 0 22px;
  border-radius: 25px;

  a {
    display: flex;
    padding: 19px 12px;
    transition: all 0.5s;

    &:hover {
      background: var(--primary);
      color: var(--white);
      transition: all 0.5s;
    }
  }
`
