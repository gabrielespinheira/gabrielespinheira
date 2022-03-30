import Link from 'next/link'
import { Squircle } from 'react-ios-corners'
import { motion } from 'framer-motion'

import { Styled } from './styles'
import data from 'data.json'
import { Button, Image, Icons } from 'components'

const Animation = ({ children }) => {
  const variants = {
    hidden: { top: -100, opacity: 0 },
    visible: { top: 0, opacity: 1 },
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.6, delay: 0.3 }}
      style={{ position: 'relative' }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}

const Hero = () => {
  return (
    <Animation>
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
                              <Button>
                                <TargetComponent size={20} />
                                <span>{link.name}</span>
                              </Button>
                            </a>
                          </Link>
                        )
                    })}
                </div>
              </div>

              <div className="thumb">
                <Squircle radius={40}>
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
    </Animation>
  )
}

export default Hero
