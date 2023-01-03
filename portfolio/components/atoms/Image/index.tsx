import NextImage, { ImageProps } from 'next/image'

const Image = (props: ImageProps) => {
  return <NextImage style={{ borderRadius: 12 }} {...props} />
}

export default Image
