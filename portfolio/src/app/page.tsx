'use client'

import { Nav, Hero, About, Stack, Experience, Contact, Footer } from '@/components'

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-200 text-neutral-dark subpixel-antialiased dark:bg-neutral-dark dark:text-neutral-light">
      <Nav />
      <Hero />
      <About />
      <Stack />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}
