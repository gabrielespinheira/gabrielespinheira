import styled, { css } from 'styled-components'

interface IStyled {
  hover?: boolean
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
  font-size: 18px;
  font-weight: 600;
  padding: 0 13px;
  height: 50px;
  line-height: 20px;
  cursor: pointer;
  transition: all 0.5s;
  gap: 16px;

  ${(props) => {
    if (props.hover) {
      return css`
        &:hover {
          background: var(--primary);
          color: var(--white);
          transition: all 0.5s;
        }
      `
    }
  }}

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
        border: 3px solid transparent;
        color: var(--text);
        font-weight: 400;
        font-size: 18px;
        transition: all 0.5s;

        &:hover {
          background: var(--primary);
          border-color: var(--primary);
          color: var(--white);
          transition: all 0.5s;
        }
      `
    }
  }}
`
