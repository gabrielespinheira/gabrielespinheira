import {
  FiBook,
  FiClipboard,
  FiFile,
  FiGithub,
  FiLinkedin,
  FiSend,
} from 'react-icons/fi'
import { RxNotionLogo } from 'react-icons/rx'

import { Shape, Glass } from '@/components'

export default function Contact() {
  return (
    <div
      id="contact"
      className="container relative flex flex-col items-center justify-center pb-8 pt-24"
    >
      <h2 className="mb-14 text-7xl font-bold tracking-[-0.03em]">Contact</h2>

      <div className="flex w-full flex-row items-start justify-center gap-24">
        <form className="relative mt-[25px] flex w-full max-w-[480px] flex-col gap-6 px-8 py-6">
          <Glass className="!absolute bottom-0 left-0 right-0 top-0 z-[-1] h-full w-full" />

          <h3 className="absolute top-[-25px] text-5xl font-semibold tracking-tighter">
            Get in touch
          </h3>

          <div className="mt-4 flex flex-col">
            <label htmlFor="name" className="mb-2 text-base font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="rounded-xl bg-neutral-light p-3 shadow-lg outline-none dark:bg-neutral-200"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 text-base font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="rounded-xl border bg-neutral-light p-3 shadow-lg outline-none dark:bg-neutral-200"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="text" className="mb-2 text-base font-medium">
              How can I help you?
            </label>
            <textarea
              id="text"
              className="h-36 rounded-xl bg-neutral-light p-3 shadow-lg outline-none dark:bg-neutral-200"
            />
          </div>

          <div className="flex">
            <button className="flex flex-row items-center justify-center gap-3 rounded-xl bg-purple-main px-8 py-2.5 text-base font-semibold tracking-[0.01em] text-neutral-light transition hover:bg-purple-700">
              <FiSend />
              Submit
            </button>
          </div>
        </form>

        <div className="flex w-full max-w-[340px] flex-col items-center">
          <h3 className="w-full text-center text-5xl font-semibold tracking-tighter">
            See more
          </h3>

          <div
            id="social_links"
            className="mt-10 flex flex-row flex-wrap items-center justify-center gap-8"
          >
            <Glass
              className="flex h-[180px] w-[150px] flex-col p-4"
              dots={true}
            >
              <FiLinkedin size={32} />

              <p className="mt-2 text-2xl font-semibold">LinkedIn</p>
              <span className="mt-auto text-xl font-medium">Planning</span>
            </Glass>

            <Glass
              className="flex h-[180px] w-[150px] flex-col p-4"
              dots={true}
            >
              <FiGithub size={32} />

              <p className="mt-2 text-2xl font-semibold">GitHub</p>
              <span className="mt-auto text-xl font-medium">Planning</span>
            </Glass>

            <Glass
              className="flex h-[180px] w-[150px] flex-col p-4"
              dots={true}
            >
              <RxNotionLogo size={32} />

              <p className="mt-2 text-2xl font-semibold">Notion</p>
              <span className="mt-auto text-xl font-medium">Planning</span>
            </Glass>

            <Glass
              className="flex h-[180px] w-[150px] flex-col p-4"
              dots={true}
            >
              <FiClipboard size={32} />

              <p className="mt-2 text-2xl font-semibold">Resume</p>
              <span className="mt-auto text-xl font-medium">pdf</span>
            </Glass>
          </div>
        </div>
      </div>

      <div className="absolute top-0 z-[-1] flex max-h-[680px] max-w-[1200px]">
        <Shape shape="3-stripes" />
      </div>
    </div>
  )
}
