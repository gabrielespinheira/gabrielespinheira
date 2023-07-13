import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import data from '@/data.json'
import {
  HeroCenter,
  HeroTopLeft,
  HeroBottomRight,
  HeroCorner,
  AppIsometric,
  Reveal,
} from '@/components'

const Content = () => {
  const [heading, setHeading] = useState(data.description)

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
          className="relative flex flex-wrap overflow-hidden text-[64px] font-semibold leading-tight tracking-[0.01em] text-neutral-light drop-shadow-md"
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
    <div id="hero" className="relative h-screen min-h-[800px]">
      <Content />

      <div className="absolute left-1/2 top-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 overflow-hidden blur-[120px]">
        <div className="absolute bottom-0 left-0 right-0 top-0 z-10 bg-white/20"></div>

        <HeroCenter
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, left: '23%', top: '15.5%' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="animation-hero-center absolute z-[5] h-[85vh] w-[67vw] blur-3xl"
        />
        <HeroTopLeft
          initial={{ opacity: 0, left: '-20%' }}
          animate={{ opacity: 1, left: '0%', top: '-22%' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="animation-hero-top-left absolute z-[3] h-[79vh] w-[68vw] blur-3xl"
        />
        <HeroCorner
          initial={{ opacity: 0, right: '-100%', top: '-100%' }}
          animate={{ opacity: 1, right: '-13%', top: '-22%' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="animation-hero-top-right absolute z-[2] h-[93vh] w-[51vw] blur-lg"
        />
        <HeroCorner
          initial={{ opacity: 0, left: '-100%', bottom: '-100%' }}
          animate={{ opacity: 1, left: '-15%', bottom: '-20%' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="animation-hero-bottom-left absolute z-[2] h-[93vh] w-[51vw] blur-lg"
        />
        <HeroBottomRight
          initial={{ opacity: 0, right: '-100%', bottom: '-100%' }}
          animate={{ opacity: 1, right: '-10%', bottom: '-10%' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="animation-hero-bottom-right absolute z-[1] h-[81vh] w-[46vw] blur-3xl"
        />
      </div>
    </div>
  )
}
