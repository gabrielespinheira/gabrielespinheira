import { motion } from 'framer-motion'
import {
  SiAmazonaws,
  SiDigitalocean,
  SiDocker,
  SiExpress,
  SiHeroku,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTypescript,
} from 'react-icons/si'

import { Styled } from './styles'
import data from 'data.json'
import { Image } from 'components'

const AnimationAvatar = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, bottom: -90 }}
      whileInView={{ opacity: 1, bottom: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      style={{ position: 'relative' }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}

const AnimationAboutText = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, bottom: -90 }}
      whileInView={{ opacity: 1, bottom: 0 }}
      transition={{ duration: 0.7, delay: 0.5 }}
      style={{ position: 'relative' }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}

const AnimationTechs = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, bottom: -100 }}
      whileInView={{ opacity: 1, bottom: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      style={{ position: 'relative' }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}

const AboutMe = () => {
  return (
    <Styled>
      <div className="container">
        <div className="aboutme" id="aboutme">
          <div className="thumb">
            <AnimationAvatar>
              <>
                <Image
                  src="/setup.jpg"
                  width={446}
                  height={487}
                  alt={data.name}
                  quality={90}
                />
              </>
            </AnimationAvatar>
          </div>

          <div className="content">
            <AnimationAboutText>
              <h2>About me</h2>

              <p>
                Hey! My name is Gabriel Espinheira. I&apos;m from Brazil and
                currently living in Lisbon, Portugal. When I was 16yo, I started
                to learn software development for fun, just trying to understand
                how things work.
              </p>

              <p>
                A few years later, I started my degree in computer science and
                worked as an intern. I&apos;ve worked with several projects and
                companies since 2014. Over the years, I began to focus more on
                projects using Javascript, where I was able to work with
                front-end, back-end, and mobile.
              </p>

              <p>
                In addition, I&apos;ve always been a UX/UI design enthusiast, so
                in my free time I always enjoyed reading about the subject and
                being close to the design and creative teams of the companies I
                worked for.
              </p>

              <p>
                In the last years of graduation, I started to study more
                software architecture, design patterns, clean code and
                scalability, topics that helped me solve several problems
                efficiently.
              </p>

              <p>
                Recently, I decided to continue my studies and started a
                postgraduate course in IT. That&apos;s when I came to Portugal,
                to live here for a while. Today I&apos;m looking for: expanding
                my knowledge and meeting new people and different cultures.
              </p>
            </AnimationAboutText>
          </div>
        </div>
      </div>

      <AnimationTechs>
        <div className="techs">
          <div className="container">
            <div>
              <SiJavascript size={70} />
              <span>Javascript</span>
            </div>
            <div>
              <SiTypescript size={70} />
              <span>Typescript</span>
            </div>
            <div>
              <SiReact size={70} />
              <span>ReactJS</span>
            </div>
            <div>
              <SiNextdotjs size={70} />
              <span>NextJS</span>
            </div>
            <div>
              <SiNodedotjs size={70} />
              <span>NodeJS</span>
            </div>
            <div>
              <SiExpress size={70} />
              <span>ExpressJS</span>
            </div>
            <div>
              <SiMysql size={70} />
              <span>MySQL</span>
            </div>
            <div>
              <SiPostgresql size={70} />
              <span>PostgreSQL</span>
            </div>
            <div>
              <SiMongodb size={70} />
              <span>MongoDB</span>
            </div>
            <div>
              <SiPrisma size={70} />
              <span>Prisma</span>
            </div>
            <div>
              <SiJest size={70} />
              <span>Jest</span>
            </div>
            <div>
              <SiDocker size={70} />
              <span>Docker</span>
            </div>
            <div>
              <SiAmazonaws size={70} />
              <span>AWS</span>
            </div>
            <div>
              <SiDigitalocean size={70} />
              <span>DigitalOcean</span>
            </div>
            <div>
              <SiHeroku size={70} />
              <span>Heroku</span>
            </div>
          </div>
        </div>
      </AnimationTechs>
    </Styled>
  )
}

export default AboutMe
