import { useState } from 'react'
import { motion } from 'framer-motion'

import data from '@/data.json'
import {
  HeroCenter,
  HeroTopLeft,
  HeroBottomRight,
  HeroCorner,
  AppIsometric,
  Reveal,
  Widget,
} from '@/components'

const Content = () => {
  const [heading, _] = useState(data.description)

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 1.4 * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <div className="container-full relative z-10 flex min-h-screen items-center justify-center">
      <div id="hero-intro" className="mt-16 w-full">
        <motion.h1
          variants={container}
          initial="hidden"
          animate="visible"
          className="relative flex flex-wrap overflow-hidden text-[64px] font-semibold leading-tight tracking-[-0.03em] text-neutral-light drop-shadow-md"
        >
          {heading.split(' ').map(function (char, index) {
            return (
              <motion.span
                aria-hidden="true"
                key={index}
                variants={child}
                style={{ marginRight: 17 }}
              >
                {char}
              </motion.span>
            )
          })}
        </motion.h1>
      </div>

      <div
        id="isometric"
        className="mt-16 flex w-full max-w-[640px] items-center justify-end"
      >
        <AppIsometric />
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <div id="hero" className="relative h-screen min-h-[800px] overflow-hidden">
      <Content />

      <div className="absolute left-1/2 top-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 blur-[120px]">
        <div className="absolute bottom-0 left-0 right-0 top-0 z-10 bg-white/5"></div>

        <HeroCenter
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, left: '11%', top: '16.5%' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="absolute z-[5] h-[90vh] w-[93vw]"
        />
        <HeroTopLeft
          initial={{ opacity: 0, left: '-20%' }}
          animate={{ opacity: 1, left: '-13%', top: '-37%' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="absolute z-[3] h-[79vh] w-[84vw]"
        />
        <HeroCorner
          initial={{ opacity: 0, right: '-100%', top: '-100%' }}
          animate={{ opacity: 1, right: '-25%', top: '-34%' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="absolute z-[2] h-[101vh] w-[58vw]"
        />
        <HeroCorner
          initial={{ opacity: 0, left: '-100%', bottom: '-100%' }}
          animate={{ opacity: 1, left: '-20%', bottom: '-27%' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="absolute z-[2] h-[93vh] w-[65vw]"
        />
        <HeroBottomRight
          initial={{ opacity: 0, right: '-100%', bottom: '-100%' }}
          animate={{ opacity: 1, right: '-17%', bottom: '-14%' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="absolute z-[1] h-[83vh] w-[55vw]"
        />
      </div>
    </div>
  )
}
