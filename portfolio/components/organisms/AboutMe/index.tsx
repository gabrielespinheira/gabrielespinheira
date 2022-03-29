import { Squircle } from 'react-ios-corners'
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
      initial={{ opacity: 0, left: -100 }}
      whileInView={{ opacity: 1, left: 0 }}
      transition={{ duration: 0.7, delay: 0.5 }}
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
      initial={{ opacity: 0, right: -100 }}
      whileInView={{ opacity: 1, right: 0 }}
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
      transition={{ duration: 0.7, delay: 0.5 }}
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
              <Squircle radius={40} style={{ height: 487 }}>
                <Image
                  src="/setup.png"
                  width={446}
                  height={487}
                  alt={data.name}
                  quality={100}
                />
              </Squircle>
            </AnimationAvatar>
          </div>

          <div className="content">
            <AnimationAboutText>
              <h2>About me</h2>

              <p>
                My name is Gabriel Araujo, I was born and raised in Rio de
                Janeiro. I am 26 years old and I am currently working as a
                Senior Software Engineer.
              </p>

              <p>
                I&apos;ve been working in the technology field since 2014, when
                I started doing some jobs as a freelancer. Soon after, I started
                studying programming and have never stopped. Since that time, I
                have focused more on Software Architecture, Design Patterns and
                Business, always looking for more efficient ways to solve
                problems.
              </p>

              <p>
                When I was at school, studying was not what I liked the most.
                However, I found my own way to learn things and I started
                studying more and more about the subjects of my interest, like
                creating softwares even better. After that, my interest for
                books raised and I have never stopped reading.
              </p>

              <p>
                I have always been curious about and how I could improve my
                knowledge in these areas, therefore in my free time, I read
                about subjects like science, finance, entrepreneurship and
                productivity.
              </p>

              <p>
                In 2020 I finished my graduation in Computer Science, which was
                a course that changed the way I think about several subjects,
                not only technology, like: Scientific Study, Management and even
                a little of Mathematics.
              </p>
            </AnimationAboutText>
          </div>
        </div>
      </div>

      <AnimationTechs>
        <div className="techs">
          <div className="container">
            <div>
              <SiJavascript size={70} data-tip data-for="javascript" />
            </div>
            <div>
              <SiTypescript size={70} data-tip data-for="typescript" />
            </div>
            <div>
              <SiReact size={70} data-tip data-for="react" />
            </div>
            <div>
              <SiNextdotjs size={70} data-tip data-for="next" />
            </div>
            <div>
              <SiNodedotjs size={70} data-tip data-for="node" />
            </div>
            <div>
              <SiExpress size={70} data-tip data-for="express" />
            </div>
            <div>
              <SiMysql size={70} data-tip data-for="mysql" />
            </div>
            <div>
              <SiPostgresql size={70} data-tip data-for="postgresql" />
            </div>
            <div>
              <SiMongodb size={70} data-tip data-for="mongodb" />
            </div>
            <div>
              <SiPrisma size={70} data-tip data-for="prisma" />
            </div>
            <div>
              <SiJest size={70} data-tip data-for="jest" />
            </div>
            <div>
              <SiDocker size={70} data-tip data-for="docker" />
            </div>
            <div>
              <SiAmazonaws size={70} data-tip data-for="aws" />
            </div>
            <div>
              <SiDigitalocean size={70} data-tip data-for="digitalocean" />
            </div>
            <div>
              <SiHeroku size={70} data-tip data-for="heroku" />
            </div>
          </div>
        </div>
      </AnimationTechs>
    </Styled>
  )
}

export default AboutMe
