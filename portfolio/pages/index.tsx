import type { NextPage } from 'next'
import Image from 'next/image'

import { Button, TemplateBase } from 'components'
import data from 'data.json'
import { Styled } from './styles'

const Home: NextPage = () => {
  return (
    <TemplateBase>
      <Styled>
        <div className="container">
          <div className="presenter">
            <div className="infos">
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
    </TemplateBase>
  )
}

export default Home
