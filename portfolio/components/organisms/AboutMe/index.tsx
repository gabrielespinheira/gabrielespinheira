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

const tech_icon_size = 60

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
              <Image
                src="/setup.jpg"
                width={446}
                height={487}
                alt={data.name}
                quality={90}
              />
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
              <SiJavascript size={tech_icon_size} />
              <span>Javascript</span>
            </div>
            <div>
              <SiTypescript size={tech_icon_size} />
              <span>Typescript</span>
            </div>
            <div>
              <SiReact size={tech_icon_size} />
              <span>ReactJS</span>
            </div>
            <div>
              <SiNextdotjs size={tech_icon_size} />
              <span>NextJS</span>
            </div>
            <div>
              <SiNodedotjs size={tech_icon_size} />
              <span>NodeJS</span>
            </div>
            <div>
              <SiExpress size={tech_icon_size} />
              <span>ExpressJS</span>
            </div>
            <div>
              <SiMysql size={tech_icon_size} />
              <span>MySQL</span>
            </div>
            <div>
              <SiPostgresql size={tech_icon_size} />
              <span>PostgreSQL</span>
            </div>
            <div>
              <SiMongodb size={tech_icon_size} />
              <span>MongoDB</span>
            </div>
            <div>
              <SiPrisma size={tech_icon_size} />
              <span>Prisma</span>
            </div>
            <div>
              <SiJest size={tech_icon_size} />
              <span>Jest</span>
            </div>
            <div>
              <SiDocker size={tech_icon_size} />
              <span>Docker</span>
            </div>
            <div>
              <SiAmazonaws size={tech_icon_size} />
              <span>AWS</span>
            </div>
            <div>
              <SiDigitalocean size={tech_icon_size} />
              <span>DigitalOcean</span>
            </div>
            <div>
              <SiHeroku size={tech_icon_size} />
              <span>Heroku</span>
            </div>
          </div>
        </div>
      </AnimationTechs>
    </Styled>
  )
}

export default AboutMe
