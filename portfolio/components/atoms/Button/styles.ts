import styled, { css } from 'styled-components'

interface IStyled {
  primary?: boolean
}

export const StyledButton = styled.button<IStyled>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--shape);
  color: var(--text);
  border: none;
  border-radius: var(--radius);
  font-size: 18px;
  font-weight: 600;
  padding: 0 13px;
  height: 50px;
  line-height: 20px;
  cursor: pointer;
  transition: all 0.5s;

  ${(props) => {
    if (props.primary) {
      return css`
        background: transparent;
        border: 3px solid var(--primary);
        color: var(--primary);
        font-weight: 400;
        font-size: 18px;
        transition: all 0.5s;

        &:hover {
          background: var(--primary);
          color: var(--white);
          transition: all 0.5s;
        }
      `
    }
  }}
`