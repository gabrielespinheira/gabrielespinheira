import { ButtonHTMLAttributes, ReactElement } from 'react'
import { StyledButton } from './styles'

interface IButton {
  children: any
  primary?: boolean
  ghost?: boolean
}

const Button = ({
  children,
  primary,
  ...props
}: IButton & ButtonHTMLAttributes<IButton>) => {
  return (
    <StyledButton {...props} primary={primary}>
      {children}
    </StyledButton>
  )
}

export default Button
