'use client'

import { useEffect } from 'react'

import {
  Nav,
  Hero,
  About,
  Stack,
  Experience,
  Contact,
  Footer,
} from '@/components'

export default function Home() {
  return (
    <>
      {/* <div
        className="preload fixed left-0 right-0 top-0 z-[99] flex h-screen w-full items-center justify-center overflow-hidden bg-red-100"
        style={{
          animation: 'loader 2s ease-in-out',
          animationDelay: '3s',
          animationFillMode: 'forwards',
        }}
      >
        lorem ipsum
      </div> */}
      <main className="min-h-screen bg-neutral-200 text-neutral-dark subpixel-antialiased dark:bg-neutral-dark dark:text-neutral-light">
        <Nav />
        <Hero />
        <About />
        <Stack />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
