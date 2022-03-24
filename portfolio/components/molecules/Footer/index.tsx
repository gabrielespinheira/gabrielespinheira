import Link from 'next/link'

import data from 'data.json'
import { Styled } from './styles'

const Footer = () => {
  return (
    <Styled>
      <div className="container">
        <Link href={data.links.source_code}>source code</Link>
        <Link href={data.links.github}>github</Link>
        <Link href={data.links.linkedin}>linkedin</Link>
        <Link href={`mailto:${data.links.email}`}>email</Link>
      </div>
    </Styled>
  )
}

export default Footer
