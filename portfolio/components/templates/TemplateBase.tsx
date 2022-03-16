import { Head, Header, Navbar } from 'components'

const TemplateBase = ({ children }) => {
  return (
    <>
      <Head />
      <Header />
      {children}
      <Navbar />
    </>
  )
}

export default TemplateBase
