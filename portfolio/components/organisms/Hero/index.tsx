import Link from 'next/link'
import { Squircle } from 'react-ios-corners'

import { Styled } from './styles'
import data from 'data.json'
import { Button, Image, Icons } from 'components'

const Hero = () => {
  return (
    <Styled>
      <div className="container">
        <Squircle radius={50} style={{ position: 'relative' }}>
          <div className="hero" id="hero">
            <div className="bubble"></div>

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
              <Squircle radius={40} style={{ height: 525 }}>
                <Image
                  src="/avatar.png"
                  width={497}
                  height={525}
                  alt={data.name}
                  quality={100}
                />
              </Squircle>
            </div>
          </div>
        </Squircle>
      </div>
    </Styled>
  )
}

export default Hero
