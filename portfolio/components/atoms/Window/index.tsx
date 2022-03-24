import { Styled } from './styles'

const Window = ({ children }) => {
  return (
    <Styled className="window">
      <div className="details">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="inner">{children}</div>
    </Styled>
  )
}

export default Window
