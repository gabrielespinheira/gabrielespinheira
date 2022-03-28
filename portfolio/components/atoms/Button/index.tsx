import { ButtonHTMLAttributes, ReactElement } from 'react'
import { StyledButton } from './styles'

interface IButton {
  children: any
  outline?: boolean
  ghost?: boolean
}

const Button = ({
  children,
  outline,
  ...props
}: IButton & ButtonHTMLAttributes<IButton>) => {
  return (
    <StyledButton {...props} outline={outline}>
      {children}
    </StyledButton>
  )
}

export default Button
