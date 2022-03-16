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
  padding: 0 19px;
  border-radius: 25px;

  a {
    display: flex;
    padding: 19px 12px;

    &:hover {
      background: var(--shape);
    }
  }
`
