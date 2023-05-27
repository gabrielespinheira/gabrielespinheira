import Image from 'next/image'

import { Reveal, Shape } from '@/components'

export default function Stack() {
  return (
    <Reveal
      id="stack"
      className="container flex flex-col items-center justify-center pb-24 pt-24"
    >
      <h2 className="mb-14 text-7xl font-bold tracking-[-0.03em]">Stack</h2>

      <div
        id="stack-front-end"
        className="flex flex-row items-center justify-center gap-8 py-8"
      >
        <div className="max-w-[470px]">
          <h3 className="relative mb-3 text-6xl font-semibold tracking-tight">
            Front-end
            <div className="absolute left-1/2 top-1/2 z-[-1] flex max-h-[680px] max-w-[1200px] -translate-x-1/2 -translate-y-1/2">
              <Shape shape="line" fill="#5B23FC" />
            </div>
          </h3>
          <p className="text-lg leading-[170%]">
            Hi there! My name is Gabriel Espinheira and I&apos;m a Senior
            Software Engineer working mainly with JavaScript. I have a passion
            for building innovative solutions and building high-quality
            software.
          </p>
        </div>

        <Image src="/assets/temp.svg" alt="Back-end" width={600} height={400} />
      </div>

      <div
        id="stack-back-end"
        className="flex flex-row items-center justify-center gap-8 py-8"
      >
        <Image src="/assets/temp.svg" alt="Back-end" width={600} height={400} />
        <div className="max-w-[470px]">
          <h3 className="relative mb-3 text-6xl font-semibold tracking-tight">
            Back-end
            <div className="absolute left-1/2 top-1/2 z-[-1] flex max-h-[680px] max-w-[1200px] -translate-x-1/2 -translate-y-1/2">
              <Shape shape="line" fill="#FE4444" />
            </div>
          </h3>
          <p className="text-lg leading-[170%]">
            Hi there! My name is Gabriel Espinheira and I&apos;m a Senior
            Software Engineer working mainly with JavaScript. I have a passion
            for building innovative solutions and building high-quality
            software.
          </p>
        </div>
      </div>

      <div
        id="stack-product"
        className="flex flex-row items-center justify-center gap-8 py-8"
      >
        <div className="max-w-[470px]">
          <h3 className="relative mb-3 text-6xl font-semibold tracking-tight">
            Product
            <div className="absolute left-1/2 top-1/2 z-[-1] flex max-h-[680px] max-w-[1200px] -translate-x-1/2 -translate-y-1/2">
              <Shape shape="line" fill="#61DAFB" />
            </div>
          </h3>
          <p className="text-lg leading-[170%]">
            Hi there! My name is Gabriel Espinheira and I&apos;m a Senior
            Software Engineer working mainly with JavaScript. I have a passion
            for building innovative solutions and building high-quality
            software.
          </p>
        </div>

        <Image src="/assets/temp.svg" alt="Back-end" width={600} height={400} />
      </div>
    </Reveal>
  )
}
