import { ButtonHTMLAttributes } from 'react'

import { StyledButton } from './styles'

interface IButton {
  children: any
  outline?: boolean
  ghost?: boolean
}

const Button = ({
  children,
  ...props
}: IButton & ButtonHTMLAttributes<IButton>) => {
  return <StyledButton {...props}>{children}</StyledButton>
}

export default Button
