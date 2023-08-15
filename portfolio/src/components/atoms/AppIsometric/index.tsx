'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { RxNotionLogo } from 'react-icons/rx'
import { FiDribbble, FiLinkedin } from 'react-icons/fi'
import { FaSpotify, FaGithub } from 'react-icons/fa'

import data from '@/data.json'
import Glass from '../Glass'
import Widget from '../Widget'
import Slide from '@/components/motions/Slide'
import { InfosResponse } from '@/app/api/infos/route'

const AppIsometric = ({ ...props }) => {
  const [infos, setInfos] = useState<{ status?: boolean } & InfosResponse>({})

  useEffect(() => {
    fetch('/api/infos', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => setInfos({ status: true, ...response }))
      .catch((error) => {
        setInfos({ status: false })
        console.warn('🚧', error)
      })
  }, [])

  return (
    <div
      className="relative flex h-[670px] w-full items-center justify-center"
      {...props}
    >
      <div className="isometric widgets z-[99] grid grid-cols-2 grid-rows-2 items-start justify-start gap-6">
        <Slide
          direction="top"
          delay="3.4s"
          distance="50px"
          className="!absolute right-[-50px] top-[-90px]"
          once
        >
          <Widget size="horizontalLine" href={data.links.github.url} target="_blank">
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
                {infos.status &&
                  infos.github &&
                  infos.github.contributions
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}{' '}
                contributions
              </span>
              <span className="text-sm leading-none text-purple">
                {infos.status &&
                  infos.github &&
                  infos.github.repositories
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}{' '}
                repositories
              </span>
            </div>
          </Widget>
        </Slide>

        <Slide direction="top" delay="3.8s" distance="50px" once>
          <Widget color="blue" href={data.links.linkedin.url} target="_blank">
            <FiLinkedin size={30} />

            <p className="mt-2 text-2xl font-medium">LinkedIn</p>
            <span className="mt-auto text-base font-medium">
              {
                data.links.linkedin.copies[
                  (Math.random() * data.links.linkedin.copies.length) | 0
                ]
              }
            </span>
          </Widget>
        </Slide>

        <Slide direction="top" delay="3.6s" distance="50px" once>
          <Widget href={data.links.notion.url} target="_blank">
            <RxNotionLogo size={30} />

            <p className="mt-2 text-2xl font-medium">Notion</p>
            <span className="mt-auto text-base font-medium">
              {
                data.links.notion.copies[
                  (Math.random() * data.links.notion.copies.length) | 0
                ]
              }
            </span>
          </Widget>
        </Slide>

        <Slide direction="top" delay="4.0s" distance="50px" once>
          <Widget href={data.links.spotify.url} target="_blank">
            <FaSpotify size={30} color="#1ED760" />

            <p className="mt-2 text-2xl font-medium">Spotify</p>
            <span className="text-xs text-[#1ED760]">
              Count me out <br />
              Kendrick Lamar
            </span>
            <span className="mt-auto text-base font-medium">mainstream</span>
          </Widget>
        </Slide>

        <Slide direction="top" delay="4.2s" distance="50px" once>
          <Widget color="pink" href={data.links.dribbble.url} target="_blank">
            <FiDribbble size={30} />

            <p className="mt-2 text-2xl font-medium">Dribbble</p>
            <span className="mt-auto text-base font-medium">
              {
                data.links.dribbble.copies[
                  (Math.random() * data.links.dribbble.copies.length) | 0
                ]
              }
            </span>
          </Widget>
        </Slide>
      </div>

      <Slide direction="top" delay="3.3s" distance="50px" className="absolute" once>
        <Glass className="isometric bg-app z-[3] ml-[-40px] mt-[-128px] h-[560px] w-[320px] rounded-3xl" />
      </Slide>
      <Slide direction="top" delay="3.2s" distance="50px" className="absolute" once>
        <Glass className="isometric bg-app z-[2] ml-0 mt-0 h-[560px] w-[320px] rounded-3xl" />
      </Slide>
      <Slide direction="top" delay="3.1s" distance="50px" className="absolute" once>
        <Glass className="isometric bg-app z-[1] ml-10 mt-32 h-[560px] w-[320px] rounded-3xl" />
      </Slide>
    </div>
  )
}

export default AppIsometric
