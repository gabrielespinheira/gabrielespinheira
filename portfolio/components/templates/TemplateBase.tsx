import { Head, Header, Footer } from 'components'

export default ({ children }) => {
  return (
    <>
      <Head />
      <Header />
      {children}
      <Footer />
    </>
  )
}
