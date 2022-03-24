import { Styled } from './styles'
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
  SiServerless,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import ReactTooltip from 'react-tooltip'

import data from 'data.json'
import { Image } from 'components'

const AboutMe = () => {
  return (
    <Styled>
      <div className="container">
        <div className="aboutme" id="aboutme">
          <div className="thumb">
            <Image
              src="/setup.png"
              width={446}
              height={487}
              alt={data.name}
              quality={100}
            />
          </div>

          <div className="content">
            <h2>About me</h2>

            <p>
              My name is Gabriel Araujo, I was born and raised in Rio de
              Janeiro. I am 26 years old and I am currently working as a Senior
              Software Engineer.
            </p>

            <p>
              I&apos;ve been working in the technology field since 2014, when I
              started doing some jobs as a freelancer. Soon after, I started
              studying programming and have never stopped. Since that time, I
              have focused more on Software Architecture, Design Patterns and
              Business, always looking for more efficient ways to solve
              problems.
            </p>

            <p>
              When I was at school, studying was not what I liked the most.
              However, I found my own way to learn things and I started studying
              more and more about the subjects of my interest, like creating
              softwares even better. After that, my interest for books raised
              and I have never stopped reading.
            </p>

            <p>
              I have always been curious about and how I could improve my
              knowledge in these areas, therefore in my free time, I read about
              subjects like science, finance, entrepreneurship and productivity.
            </p>

            <p>
              In 2020 I finished my graduation in Computer Science, which was a
              course that changed the way I think about several subjects, not
              only technology, like: Scientific Study, Management and even a
              little of Mathematics.
            </p>
          </div>
        </div>
      </div>
      <div className="techs">
        <div className="container">
          <div>
            <SiJavascript size={70} data-tip data-for="javascript" />
            <ReactTooltip id="javascript" effect="solid">
              Javascript
            </ReactTooltip>
          </div>
          <div>
            <SiTypescript size={70} data-tip data-for="typescript" />
            <ReactTooltip id="typescript" effect="solid">
              Typescript
            </ReactTooltip>
          </div>
          <div>
            <SiReact size={70} data-tip data-for="react" />
            <ReactTooltip id="react" effect="solid">
              ReactJS
            </ReactTooltip>
          </div>
          <div>
            <SiNextdotjs size={70} data-tip data-for="next" />
            <ReactTooltip id="next" effect="solid">
              NextJS
            </ReactTooltip>
          </div>
          <div>
            <SiNodedotjs size={70} data-tip data-for="node" />
            <ReactTooltip id="node" effect="solid">
              NodeJS
            </ReactTooltip>
          </div>
          <div>
            <SiExpress size={70} data-tip data-for="express" />
            <ReactTooltip id="express" effect="solid">
              ExpressJS
            </ReactTooltip>
          </div>

          <div>
            <SiMysql size={70} data-tip data-for="mysql" />
            <ReactTooltip id="mysql" effect="solid">
              MySQL
            </ReactTooltip>
          </div>
          <div>
            <SiPostgresql size={70} data-tip data-for="postgresql" />
            <ReactTooltip id="postgresql" effect="solid">
              PostgreSQL
            </ReactTooltip>
          </div>
          <div>
            <SiMongodb size={70} data-tip data-for="mongodb" />
            <ReactTooltip id="mongodb" effect="solid">
              MongoDB
            </ReactTooltip>
          </div>
          <div>
            <SiPrisma size={70} data-tip data-for="prisma" />
            <ReactTooltip id="prisma" effect="solid">
              Prisma
            </ReactTooltip>
          </div>
          <div>
            <SiJest size={70} data-tip data-for="jest" />
            <ReactTooltip id="jest" effect="solid">
              Jest
            </ReactTooltip>
          </div>
          <div>
            <SiDocker size={70} data-tip data-for="docker" />
            <ReactTooltip id="docker" effect="solid">
              Docker
            </ReactTooltip>
          </div>
          <div>
            <SiAmazonaws size={70} data-tip data-for="aws" />
            <ReactTooltip id="aws" effect="solid">
              AWS
            </ReactTooltip>
          </div>
          <div>
            <SiDigitalocean size={70} data-tip data-for="digitalocean" />
            <ReactTooltip id="digitalocean" effect="solid">
              DigitalOcean
            </ReactTooltip>
          </div>
          <div>
            <SiHeroku size={70} data-tip data-for="heroku" />
            <ReactTooltip id="heroku" effect="solid">
              Heroku
            </ReactTooltip>
          </div>
        </div>
      </div>
    </Styled>
  )
}

export default AboutMe
