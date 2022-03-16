import NextHead from 'next/head'

interface IHead {
  title?: string
}

const Head = ({ title = 'Gabriel Araujo - Software Engineer' }: IHead) => {
  return (
    <NextHead>
      <title>{title}</title>
      <link rel="icon" href="/favicon.png"></link>
    </NextHead>
  )
}

export default Head
