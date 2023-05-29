import { motion } from 'framer-motion'

import {
  HeroCenter,
  HeroTopLeft,
  HeroBottomRight,
  HeroCorner,
  AppIsometric,
  Reveal,
} from '@/components'

const Content = () => {
  return (
    <div className="container-full relative z-10 flex min-h-screen items-center justify-center">
      <div id="hero-intro" className="mt-16 w-full">
        <motion.h1
          initial={{ opacity: 0, top: '150px' }}
          animate={{ opacity: 1, top: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="relative text-[64px] font-semibold leading-tight tracking-[0.01em] text-neutral-light drop-shadow-md"
        >
          A software engineer with a passion to turn good ideas into aesthetic products.
        </motion.h1>
      </div>

      <div
        id="isometric"
        className="mt-16 flex w-full max-w-[640px] items-center justify-end"
      >
        <AppIsometric
          initial={{ opacity: 0, top: '150px' }}
          animate={{ opacity: 1, top: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
        />
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
          initial={{ scale: 0 }}
          animate={{ scale: 1, left: '23%', top: '15.5%' }}
          transition={{ duration: 2, delay: 1 }}
          className="animation-hero-center absolute z-[5] h-[85vh] w-[67vw] blur-3xl"
        />
        <HeroTopLeft
          initial={{ scale: 0, left: '-20%' }}
          animate={{ scale: 1, left: '0%', top: '-22%' }}
          transition={{ duration: 2, delay: 2 }}
          className="animation-hero-top-left absolute z-[3] h-[79vh] w-[68vw] blur-3xl"
        />
        <HeroCorner
          initial={{ scale: 0, right: '-100%', top: '-100%' }}
          animate={{ scale: 1, right: '-13%', top: '-22%' }}
          transition={{ duration: 2, delay: 2.5 }}
          className="animation-hero-top-right absolute z-[2] h-[93vh] w-[51vw] blur-lg"
        />
        <HeroCorner
          initial={{ scale: 0, left: '-100%', bottom: '-100%' }}
          animate={{ scale: 1, left: '-15%', bottom: '-20%' }}
          transition={{ duration: 2, delay: 2.5 }}
          className="animation-hero-bottom-left absolute z-[2] h-[93vh] w-[51vw] blur-lg"
        />
        <HeroBottomRight
          initial={{ scale: 0, right: '-100%', bottom: '-100%' }}
          animate={{ scale: 1, right: '-10%', bottom: '-10%' }}
          transition={{ duration: 2, delay: 2 }}
          className="animation-hero-bottom-right absolute z-[1] h-[81vh] w-[46vw] blur-3xl"
        />
      </div>
    </div>
  )
}
