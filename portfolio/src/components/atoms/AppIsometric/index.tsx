import Link from 'next/link'
import { motion } from 'framer-motion'
import { RxNotionLogo } from 'react-icons/rx'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { FaSpotify, FaGithub } from 'react-icons/fa'

import data from '@/data.json'
import Glass from '../Glass'
import Image from 'next/image'

const AppIsometric = ({ ...props }) => {
  return (
    <motion.div
      className="relative flex h-[670px] w-full items-center justify-center"
      {...props}
    >
      <div className="isometric widgets z-[99] grid grid-cols-2 grid-rows-2 items-start justify-start gap-6">
        <Link
          href={data.links.github.url}
          target="_blank"
          className="!absolute right-[-50px] top-[-90px]"
        >
          <Glass className="widget widget-white flex h-[70px] w-[260px] flex-row items-center justify-center gap-3 !rounded-2xl">
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
              <span className="text-xl font-medium leading-none">
                842 contributions
              </span>
              <span className="text-sm leading-none text-purple-main">
                87% commits
              </span>
            </div>
          </Glass>
        </Link>

        <Link href={data.links.notion.url} target="_blank">
          <Glass
            className="widget widget-white z-[4] flex h-[180px] w-[150px] flex-col p-4"
            dots={true}
          >
            <RxNotionLogo size={30} />

            <p className="mt-2 text-2xl font-medium">Notion</p>
            <span className="mt-auto text-xl font-medium">Sprint #08</span>
          </Glass>
        </Link>

        <Link href={data.links.linkedin.url} target="_blank">
          <Glass
            className="widget widget-blue z-[4] flex h-[180px] w-[150px] flex-col p-4 text-neutral-light"
            dots={true}
            invertDots={true}
          >
            <FiLinkedin size={30} />

            <p className="mt-2 text-2xl font-medium">LinkedIn</p>
            <span className="mt-auto text-xl font-medium">Planning</span>
          </Glass>
        </Link>

        <Link href={data.links.spotify.url} target="_blank">
          <Glass
            className="widget widget-black z-[4] flex h-[180px] w-[150px] flex-col p-4 text-neutral-light"
            dots={true}
            invertDots={true}
          >
            <FaSpotify size={30} color="#1ED760" />

            <p className="mt-2 text-2xl font-medium">Spotify</p>
            <span className="text-xs text-[#1ED760]">
              Count me out <br />
              Kendrick Lamar
            </span>
            <span className="mt-auto text-xl font-medium">mainstream</span>
          </Glass>
        </Link>

        <Link href={data.links.github.url} target="_blank">
          <Glass
            className="widget widget-white z-[4] flex h-[180px] w-[150px] flex-col p-4"
            dots={true}
          >
            <FiGithub size={30} />

            <p className="mt-2 text-2xl font-medium">GitHub</p>
            <span className="mt-auto text-xl font-medium">Planning</span>
          </Glass>
        </Link>
      </div>
      <Glass className="isometric bg-app !absolute z-[3] ml-[-40px] mt-[-128px] h-[560px] w-[320px]" />
      <Glass className="isometric bg-app !absolute z-[2] ml-0 mt-0 h-[560px] w-[320px]" />
      <Glass className="isometric bg-app !absolute z-[1] ml-10 mt-32 h-[560px] w-[320px]" />
    </motion.div>
  )
}

export default AppIsometric
