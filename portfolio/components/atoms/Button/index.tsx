import { ButtonHTMLAttributes } from 'react'
import { Squircle } from 'react-ios-corners'

import { StyledButton } from './styles'

interface IButton {
  children: any
  hover?: boolean
  outline?: boolean
  ghost?: boolean
}

const Button = ({
  children,
  ...props
}: IButton & ButtonHTMLAttributes<IButton>) => {
  return (
    <Squircle radius={20}>
      <StyledButton {...props}>{children}</StyledButton>
    </Squircle>
  )
}

export default Button
