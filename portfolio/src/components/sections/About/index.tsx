import Image from 'next/image'

import data from '@/data.json'
import { Widget, Heading, Reveal, Slide } from '@/components'

export default function About() {
  return (
    <div id="about" className="container pb-24 pt-24">
      <Reveal className="flex items-start justify-center">
        <div id="avatar" className="relative mt-9">
          <Slide
            className="!absolute right-[-28px] top-[-36px] z-10"
            direction="right"
            distance="100px"
          >
            <Widget size="horizontalLine" href={data.links.notion.url} target="_blank">
              <div>
                <Image
                  src="/assets/icon_100.svg"
                  width={30}
                  height={30}
                  alt="Getting 1% better everyday"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-semibold leading-6">Getting 1% better</span>
                <span className="text-[15px] font-semibold leading-4 text-purple">
                  everyday
                </span>
              </div>
            </Widget>
          </Slide>

          <Image
            src="/assets/avatar.jpg"
            width={450}
            height={600}
            alt="Avatar - Gabriel Espinheira"
            className="rounded-2xl"
            quality={100}
          />

          <Slide
            className="!absolute bottom-[-36px] left-[-28px] z-[10] flex min-w-[290px]"
            direction="left"
            distance="100px"
          >
            <Widget size="horizontalLine" href={data.links.instagram.url} target="_blank">
              <div>
                <Image
                  src="/assets/icon_working.svg"
                  width={30}
                  height={30}
                  alt="Working Everywhere"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-semibold leading-6">
                  Working <span className="line-through">anywhere</span>
                </span>
                <span className="text-[15px] font-semibold leading-4 text-purple">
                  everywhere
                </span>
              </div>
            </Widget>
          </Slide>
        </div>

        <div id="about-text" className="relative ml-16 max-w-[650px]">
          <Heading>About me</Heading>

          <p className="mb-8 mt-4 text-lg leading-[170%]">
            Hi there! My name is Gabriel Espinheira and I&apos;m a Senior Software
            Engineer working mainly with JavaScript. I have a passion for building
            innovative solutions and building high-quality software.
          </p>

          <p className="mb-8 text-lg leading-[170%]">
            Throughout my career, I have had the opportunity to work on a wide range of
            projects and have gained expertise in a number of technologies, including
            Typescript, ReactJS, NodeJS, React Native, and AWS. I&apos;m also a design
            enthusiast and have a keen eye for aesthetics, which has allowed me to create
            visually appealing and user-friendly software.
          </p>

          <p className="mb-8 text-lg leading-[170%]">
            I&apos;m highly skilled in agile development methodologies and have a track
            record of delivering projects on time and within budget. I&apos;m a strong
            team player and enjoy collaborating with others to come up with innovative
            solutions to complex problems.
          </p>

          <p className="mb-4 text-lg font-semibold leading-[170%]">
            I&apos;m looking to build aesthetic software interfaces with focus on user
            experience with scalable architecture and design patterns.
          </p>
        </div>
      </Reveal>
    </div>
  )
}
