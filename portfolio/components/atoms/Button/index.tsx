import { StyledButton } from './styles'

interface IButton {
  children: any
  primary?: boolean
}

const Button = ({ children, primary, ...props }) => {
  return (
    <StyledButton {...props} primary={primary}>
      {children}
    </StyledButton>
  )
}

export default Button
