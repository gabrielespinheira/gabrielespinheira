import { Squircle } from 'react-ios-corners'

import { Styled } from './styles'

const Window = ({ children }) => {
  return (
    <Styled className="window">
      <Squircle radius={30}>
        <div className="details">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="inner">{children}</div>
      </Squircle>
    </Styled>
  )
}

export default Window
