import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { RxNotionLogo } from 'react-icons/rx'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { FaSpotify, FaGithub } from 'react-icons/fa'

import data from '@/data.json'
import Glass from '../Glass'
import Widget from '../Widget'

const AppIsometric = ({ ...props }) => {
  return (
    <motion.div
      className="relative flex h-[670px] w-full items-center justify-center"
      {...props}
    >
      <div className="isometric widgets z-[99] grid grid-cols-2 grid-rows-2 items-start justify-start gap-6">
        <Widget
          size="horizontalLine"
          color="white"
          className="!absolute right-[-50px] top-[-90px]"
        >
          <div className="flex flex-row">
            <FaGithub size={30} />
            <Image
              src="/assets/avatar_square.jpg"
              width={32}
              height={32}
              alt="Avatar - Gabriel Espinheira"
              className="ml-[-3px] rounded-2xl border border-neutral-light"
              quality={100}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-medium leading-none">842 contributions</span>
            <span className="text-sm leading-none text-purple-main">87% commits</span>
          </div>
        </Widget>

        <Widget color="white" href={data.links.notion.url} target="_blank">
          <RxNotionLogo size={30} />

          <p className="mt-2 text-2xl font-medium">Notion</p>
          <span className="mt-auto text-xl font-medium">Sprint #08</span>
        </Widget>

        <Widget color="blue" href={data.links.linkedin.url} target="_blank">
          <FiLinkedin size={30} />

          <p className="mt-2 text-2xl font-medium">LinkedIn</p>
          <span className="mt-auto text-xl font-medium">Planning</span>
        </Widget>

        <Widget color="dark" href={data.links.spotify.url} target="_blank">
          <FaSpotify size={30} color="#1ED760" />

          <p className="mt-2 text-2xl font-medium">Spotify</p>
          <span className="text-xs text-[#1ED760]">
            Count me out <br />
            Kendrick Lamar
          </span>
          <span className="mt-auto text-xl font-medium">mainstream</span>
        </Widget>

        <Widget color="white" href={data.links.github.url} target="_blank">
          <FiGithub size={30} />

          <p className="mt-2 text-2xl font-medium">GitHub</p>
          <span className="mt-auto text-xl font-medium">Planning</span>
        </Widget>
      </div>
      <Glass className="isometric bg-app !absolute z-[3] ml-[-40px] mt-[-128px] h-[560px] w-[320px] rounded-3xl" />
      <Glass className="isometric bg-app !absolute z-[2] ml-0 mt-0 h-[560px] w-[320px] rounded-3xl" />
      <Glass className="isometric bg-app !absolute z-[1] ml-10 mt-32 h-[560px] w-[320px] rounded-3xl" />
    </motion.div>
  )
}

export default AppIsometric
