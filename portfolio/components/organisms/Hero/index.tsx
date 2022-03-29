import { Styled } from './styles'

import data from 'data.json'
import { Button, Image, Icons } from 'components'
import Link from 'next/link'

const Hero = () => {
  return (
    <Styled>
      <div className="container">
        <div className="hero" id="hero">
          <div className="content">
            <h1>
              {data.home.title} <strong>{data.name}</strong>
            </h1>
            <h2>{data.home.subtitle}</h2>
            <p>{data.home.description}</p>
            <strong>{data.home.quote}</strong>

            <div className="actions">
              {data &&
                data.links.map((link, index) => {
                  const TargetComponent = Icons[link.name]

                  if (link.name !== 'Source Code')
                    return (
                      <Link href={link.url} key={index}>
                        <a target="_blank">
                          <Button hover>
                            <TargetComponent size={20} />
                            {link.name}
                          </Button>
                        </a>
                      </Link>
                    )
                })}
            </div>
          </div>

          <div className="thumb">
            <Image
              src="/avatar.png"
              width={497}
              height={525}
              alt={data.name}
              quality={100}
            />
          </div>
        </div>
      </div>
    </Styled>
  )
}

export default Hero
