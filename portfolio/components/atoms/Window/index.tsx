import { Styled } from './styles'

const Window = ({ children }) => {
  return (
    <Styled className="window">
      <div>
        <div className="details">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="inner">{children}</div>
      </div>
    </Styled>
  )
}

export default Window
