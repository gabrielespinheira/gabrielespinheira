import React from 'react'
import type { AppProps } from 'next/app'

React.useLayoutEffect = React.useEffect

import GlobalStyle from 'styles/global'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default App
