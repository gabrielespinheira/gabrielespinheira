import Image from 'next/image'

type ITechLogos =
  | string
  | 'nextjs'
  | 'reactjs'
  | 'tailwindcss'
  | 'storybook'
  | 'electron'
  | 'expo'

const TechLogo = ({ tech, title }: { tech: ITechLogos; title: string }) => {
  const source = `/logos/${tech}.svg`

  return <Image src={source} alt={title} title={title} width={128} height={128} />
}

export default TechLogo
