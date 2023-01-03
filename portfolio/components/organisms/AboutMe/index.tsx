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
                Hi there! My name is Gabriel Espinheira and I&apos;m a Senior
                Software Engineer working mainly with JavaScript. I have a
                passion for building innovative solutions and building
                high-quality software.
              </p>

              <p>
                Throughout my career, I have had the opportunity to work on a
                wide range of projects and have gained expertise in a number of
                technologies, including Typescript, ReactJS, NodeJS, React
                Native, and AWS. I&apos;m also a design enthusiast and have a
                keen eye for aesthetics, which has allowed me to create visually
                appealing and user-friendly software.
              </p>

              <p>
                I&apos;m highly skilled in agile development methodologies and
                have a track record of delivering projects on time and within
                budget. I&apos;m a strong team player and enjoy collaborating
                with others to come up with innovative solutions to complex
                problems.
              </p>

              <p>
                I&apos;m looking to build aesthetic software interfaces with
                focus on user experience with scalable architecture and design
                patterns. If you have a project that you think would be a good
                fit for my skills and experience, I would love to hear from you!
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
