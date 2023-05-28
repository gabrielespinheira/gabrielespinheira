import { Heading, Reveal, Shape, TechLogo, Widget } from '@/components'

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
      <Product />
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
    <div className="relative h-[500px] w-[600px]">
      <div
        className={`absolute left-1/2 top-12 z-[5] grid w-full -translate-x-1/2 grid-cols-3	grid-rows-2 justify-center gap-y-4 pl-12 pr-12 ${className}`}
        {...props}
      >
        {techs &&
          techs.map(
            (tech: { name: string; title: string; url: string }, index: number) => (
              <Widget
                href={tech.url}
                target="_blank"
                key={index}
                color="white"
                shadow={true}
                linkClassName="flex justify-center items-center"
                className="flex h-[148px] w-[124px] items-center justify-center justify-self-center"
              >
                <TechLogo tech={tech.name} title={tech.title} />
              </Widget>
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
      <div className="max-w-[470px]">
        <Heading tag="h3" className="relative mb-3">
          Front-end
          <div className="absolute left-1/2 top-1/2 z-[-1] flex max-h-[680px] max-w-[1200px] -translate-x-1/2 -translate-y-1/2">
            <Shape shape="line" fill="#5B23FC" />
          </div>
        </Heading>
        <p className="text-lg leading-[170%]">
          Hi there! My name is Gabriel Espinheira and I&apos;m a Senior Software Engineer
          working mainly with JavaScript. I have a passion for building innovative
          solutions and building high-quality software.
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

      <div className="max-w-[470px]">
        <Heading tag="h3" className="relative mb-3">
          Back-end
          <div className="absolute left-1/2 top-1/2 z-[-1] flex max-h-[680px] max-w-[1200px] -translate-x-1/2 -translate-y-1/2">
            <Shape shape="line" fill="#FE4444" />
          </div>
        </Heading>
        <p className="text-lg leading-[170%]">
          Hi there! My name is Gabriel Espinheira and I&apos;m a Senior Software Engineer
          working mainly with JavaScript. I have a passion for building innovative
          solutions and building high-quality software.
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
      <div className="max-w-[470px]">
        <Heading tag="h3" className="relative mb-3">
          Database
          <div className="absolute left-1/2 top-1/2 z-[-1] flex max-h-[680px] max-w-[1200px] -translate-x-1/2 -translate-y-1/2">
            <Shape shape="line" fill="#61DAFB" />
          </div>
        </Heading>
        <p className="text-lg leading-[170%]">
          Hi there! My name is Gabriel Espinheira and I&apos;m a Senior Software Engineer
          working mainly with JavaScript. I have a passion for building innovative
          solutions and building high-quality software.
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
      <div className="max-w-[470px]">
        <Heading tag="h3" className="relative mb-3">
          Product
          <div className="absolute left-1/2 top-1/2 z-[-1] flex max-h-[680px] max-w-[1200px] -translate-x-1/2 -translate-y-1/2">
            <Shape shape="line" fill="#61DAFB" />
          </div>
        </Heading>
        <p className="text-lg leading-[170%]">
          Hi there! My name is Gabriel Espinheira and I&apos;m a Senior Software Engineer
          working mainly with JavaScript. I have a passion for building innovative
          solutions and building high-quality software.
        </p>
      </div>

      <LogoShowcase techs={data.stack.product} />
    </div>
  )
}
