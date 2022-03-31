import NextHead from 'next/head'

interface IHead {
  title?: string
}

const Head = ({ title = 'Gabriel Araujo - Software Engineer' }: IHead) => {
  return (
    <NextHead>
      <title>{title}</title>
    </NextHead>
  )
}

export default Head
