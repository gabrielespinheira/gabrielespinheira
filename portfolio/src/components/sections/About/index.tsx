import Image from 'next/image'

import data from '@/data.json'
import { Shape, Glass } from '@/components'
import Link from 'next/link'

export default function About() {
  return (
    <div
      id="about"
      className="container flex items-start justify-center pb-24 pt-24"
    >
      <div id="avatar" className="relative mt-9">
        <Link href={data.links.notion.url} target="_blank">
          <Glass className="!absolute right-[-28px] top-[-36px] z-10 flex min-w-[290px] flex-row items-center gap-4 !rounded-2xl px-6 py-3">
            <div>
              <Image
                src="/assets/icon_100.svg"
                width={30}
                height={30}
                alt="Getting 1% better everyday"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-semibold leading-6">
                Getting 1% better
              </span>
              <span className="text-[15px] font-semibold leading-4 text-purple-main">
                everyday
              </span>
            </div>
          </Glass>
        </Link>

        <Image
          src="/assets/avatar.jpg"
          width={450}
          height={600}
          alt="Avatar - Gabriel Espinheira"
          className="rounded-2xl"
          quality={100}
        />

        <Link href={data.links.instagram.url} target="_blank">
          <Glass className="!absolute bottom-[-36px] left-[-28px] flex min-w-[290px] flex-row items-center gap-4 !rounded-2xl px-6 py-3">
            <div>
              <Image
                src="/assets/icon_working.svg"
                width={30}
                height={30}
                alt="Getting 1% better everyday"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-semibold leading-6">
                Working <span className="line-through">anywhere</span>
              </span>
              <span className="text-[15px] font-semibold leading-4 text-purple-main">
                everywhere
              </span>
            </div>
          </Glass>
        </Link>
      </div>

      <div id="about-text" className="ml-16 max-w-[650px]">
        <h2 className="text-7xl font-bold tracking-[-0.03em]">About me</h2>

        <p className="mb-8 mt-4 text-lg leading-[170%]">
          Hi there! My name is Gabriel Espinheira and I&apos;m a Senior Software
          Engineer working mainly with JavaScript. I have a passion for building
          innovative solutions and building high-quality software.
        </p>

        <p className="mb-8 text-lg leading-[170%]">
          Throughout my career, I have had the opportunity to work on a wide
          range of projects and have gained expertise in a number of
          technologies, including Typescript, ReactJS, NodeJS, React Native, and
          AWS. I&apos;m also a design enthusiast and have a keen eye for
          aesthetics, which has allowed me to create visually appealing and
          user-friendly software.
        </p>

        <p className="mb-8 text-lg leading-[170%]">
          I&apos;m highly skilled in agile development methodologies and have a
          track record of delivering projects on time and within budget.
          I&apos;m a strong team player and enjoy collaborating with others to
          come up with innovative solutions to complex problems.
        </p>

        <p className="text-lg font-semibold leading-[170%]">
          I&apos;m looking to build aesthetic software interfaces with focus on
          user experience with scalable architecture and design patterns.
        </p>
      </div>

      <div className="absolute bottom-[-42px] left-24 z-[-1] flex max-h-[680px] max-w-[1200px]">
        <Shape shape="3-stripes" />
      </div>
    </div>
  )
}
