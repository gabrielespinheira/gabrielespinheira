'use client'

import { Button } from '@/components/ui/button'
import CopyInput from '@/components/ui/copy-input'
import { Github, Linkedin, Sparkles } from 'lucide-react'
import { motion } from 'motion/react'

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-background px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex flex-col items-center gap-6"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
          <img
            src="/avatar.jpeg"
            alt="Gabriel Espinheira - Creative Software Engineer"
            width={160}
            height={160}
            className="rounded-3xl shadow-lg border border-border"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          className="flex items-center gap-2 px-4 py-2 rounded-3xl border border-border bg-card/60 backdrop-blur-sm"
        >
          <Sparkles className="size-5 text-primary" />
          <span className="text-sm md:text-base font-light tracking-tight">Creative Software Engineer</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
          className="text-5xl md:text-7xl font-semibold tracking-tight text-center"
        >
          Gabriel Espinheira
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: 'easeOut' }}
          className="text-xl md:text-3xl font-light text-center text-muted-foreground max-w-xl text-balance"
        >
          Building aesthetic interfaces through scalable software.
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1, ease: 'easeOut' }}
          className="flex md:mt-4 flex-wrap justify-center gap-2"
        >
          <CopyInput value="gabriiel66@gmail.com" />
          <Button variant="secondary" asChild>
            <a
              href="https://github.com/gabrielespinheira"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github size={20} />
            </a>
          </Button>
          <Button variant="secondary" asChild>
            <a
              href="https://linkedin.com/in/gabrielespinheira"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Linkedin size={20} />
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
