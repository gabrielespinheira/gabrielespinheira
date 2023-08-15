import { Heading, Reveal, Shape, Slide, TechLogo, Widget } from '@/components'
import Shapes from '@/components/atoms/Shape'

import data from '@/data.json'

export default function Stack() {
  return (
    <Reveal
      id="stack"
      className="container flex flex-col items-center justify-center pb-24 pt-24"
    >
      <Heading className="mb-14">Stack</Heading>

      <FrontEnd />
      <BackEnd />
      <Database />
    </Reveal>
  )
}

const LogoShowcase = ({
  techs,
  className,
  ...props
}: {
  techs: any
  className?: string
}) => {
  return (
    <div className="relative h-[456px] w-[600px]">
      <div
        className={`absolute left-1/2 top-12 z-[5] grid w-full -translate-x-1/2 grid-cols-3	grid-rows-2 justify-center gap-y-4 pl-12 pr-12 ${className}`}
        {...props}
      >
        {techs &&
          techs.map(
            (tech: { name: string; title: string; url: string }, index: number) => (
              <Slide
                key={index}
                direction="top"
                delay={`${index * 0.2}s`}
                distance="40px"
              >
                <Widget
                  href={tech.url}
                  target="_blank"
                  color="white"
                  shadow={true}
                  linkClassName="flex justify-center items-center"
                  className="z-[5] flex h-[148px] w-[124px] items-center justify-center justify-self-center"
                >
                  <TechLogo tech={tech.name} title={tech.title} />
                </Widget>
              </Slide>
            )
          )}
      </div>
      <Widget
        color="gray"
        className="!absolute left-1/2 top-16 z-[3] h-[260px] w-[540px] -translate-x-1/2"
      />
      <Widget
        color="gray"
        className="!absolute left-1/2 top-8 z-[2] h-[240px] w-[500px] -translate-x-1/2"
      />
      <Widget
        color="gray"
        className="!absolute left-1/2 top-0 z-[1] h-[220px] w-[450px] -translate-x-1/2"
      />
    </div>
  )
}

const FrontEnd = () => {
  return (
    <div
      id="stack-front-end"
      className="flex w-full flex-row items-center justify-between gap-8 py-8"
    >
      <div className="relative max-w-[470px]">
        <Heading tag="h3" className="relative mb-3">
          Front-end
        </Heading>

        <Shapes className="absolute left-0 top-0 z-[-1] blur-xl" />

        <p className="text-lg leading-[170%]">
          An experienced front-end developer with a keen eye for aesthetics, I specialize
          in crafting pixel-perfect designs and seamless user experiences. With a strong
          foundation in UX/UI design and a focus on user research, I strive to create
          interfaces that delight users and drive engagement.
        </p>
      </div>

      <LogoShowcase techs={data.stack.frontEnd} />
    </div>
  )
}

const BackEnd = () => {
  return (
    <div
      id="stack-back-end"
      className="flex flex-row items-center justify-center gap-8 py-8"
    >
      <LogoShowcase techs={data.stack.backEnd} />

      <div className="relative max-w-[470px]">
        <Heading tag="h3" className="relative mb-3">
          Back-end
        </Heading>

        <Shapes className="absolute left-0 top-0 z-[-1] blur-xl" />

        <p className="text-lg leading-[170%]">
          As a back-end engineer, I prioritize performance, security, and scalability. I
          apply design patterns, write clean and maintainable code, and architect
          efficient systems. With a focus on automated testing, I ensure reliability and
          deliver high-quality software.
        </p>
      </div>
    </div>
  )
}

const Database = () => {
  return (
    <div
      id="stack-database"
      className="flex flex-row items-center justify-center gap-8 py-8"
    >
      <div className="relative max-w-[470px]">
        <Heading tag="h3" className="relative mb-3">
          Database
        </Heading>

        <Shapes className="absolute left-0 top-0 z-[-1] blur-xl" />

        <p className="text-lg leading-[170%]">
          As a database enthusiast, I stay at the forefront of new technologies and
          advancements. With expertise in SQL and NoSQL databases, I design robust and
          scalable solutions. Leveraging serverless architectures, I ensure seamless
          scalability and cost efficiency. My focus on data quality enables future
          analysis and insights.
        </p>
      </div>

      <LogoShowcase techs={data.stack.database} />
    </div>
  )
}

const Product = () => {
  return (
    <div
      id="stack-product"
      className="flex flex-row items-center justify-center gap-8 py-8"
    >
      <LogoShowcase techs={data.stack.product} />
      <div className="relative max-w-[470px]">
        <Heading tag="h3" className="relative mb-3">
          Product
        </Heading>

        <Shapes className="absolute left-0 top-0 z-[-1] blur-xl" />

        <p className="text-lg leading-[170%]">
          Working from concept to launch in the full lifecycle of product development.
          Continuous delivery and iterative development to accomplish exceptional
          experiences. Implementing design systems for consistency and scalability, while
          optimizing SEO, marketing performance and data-driven mindset to focus on
          impactful results.
        </p>
      </div>
    </div>
  )
}
