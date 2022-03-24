import { Styled } from './styles'

import data from 'data.json'
import { Button, Image } from 'components'

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
              <Button primary>Resume</Button>
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
