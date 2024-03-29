import styled, { css } from 'styled-components'

interface IStyled {
  outline?: boolean
  ghost?: boolean
}

export const StyledButton = styled.button<IStyled>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--shape);
  color: var(--text);
  border: none;
  font-size: 17px;
  font-weight: 600;
  padding: 0 13px;
  height: 50px;
  line-height: 20px;
  cursor: pointer;
  transition: all 0.5s;
  gap: 16px;
  width: 100%;
  border-radius: 8px;

  &:hover {
    background: var(--primary);
    color: var(--white);
    transition: all 0.5s;
  }

  @media (max-width: 899px) {
    &:hover {
      background: var(--shape);
      color: var(--text);
    }

    &:active {
      background: var(--primary);
      color: var(--white);
    }
  }

  ${(props) => {
    if (props.outline) {
      return css`
        background: transparent;
        border: 2px solid var(--primary);
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

  ${(props) => {
    if (props.ghost) {
      return css`
        background: transparent;
        border: none;
        color: var(--text);
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
