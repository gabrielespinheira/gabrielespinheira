import { FiBook, FiClipboard, FiFile, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi'
import { RxNotionLogo } from 'react-icons/rx'

import { Shape, Glass, Reveal, Widget, Heading } from '@/components'
import data from '@/data.json'

export default function Contact() {
  const handleSubmit = (e: any) => {
    e.preventDefault()
  }

  return (
    <div id="contact" className="container relative pb-8 pt-24">
      <Reveal className="flex flex-col items-center justify-center">
        <Heading className="mb-14">Contact</Heading>

        <div className="flex w-full flex-row items-start justify-center gap-24">
          <form
            className="relative mt-[25px] flex w-full max-w-[480px] flex-col gap-6 px-8 py-6"
            onSubmit={handleSubmit}
          >
            <Glass className="!absolute bottom-0 left-0 right-0 top-0 z-[-1] h-full w-full rounded-3xl" />

            <Heading tag="h3" className="absolute top-[-25px] !text-5xl">
              Get in touch
            </Heading>

            <div className="mt-4 flex flex-col">
              <label htmlFor="name" className="mb-2 text-base font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="rounded-xl border border-neutral-light bg-neutral-light p-3 shadow-lg outline-none transition-all focus:border focus:border-purple-main dark:bg-neutral-200"
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
                className="rounded-xl border border-neutral-light bg-neutral-light p-3 shadow-lg outline-none transition-all focus:border focus:border-purple-main dark:bg-neutral-200"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="text" className="mb-2 text-base font-medium">
                How can I help you?
              </label>
              <textarea
                id="text"
                className="boder h-36 resize-none rounded-xl border-neutral-light bg-neutral-light p-3 shadow-lg outline-none transition-all focus:border focus:border-purple-main dark:bg-neutral-200"
              />
            </div>

            <div className="flex">
              <button
                onClick={handleSubmit}
                className="flex flex-row items-center justify-center gap-3 rounded-xl bg-purple-main px-8 py-2.5 text-base font-semibold tracking-[0.01em] text-neutral-light transition hover:bg-purple-700 active:scale-95"
              >
                <FiSend />
                Submit
              </button>
            </div>
          </form>

          <div className="flex w-full max-w-[340px] flex-col items-center">
            <Heading tag="h3" className="w-full text-center !text-5xl">
              See more
            </Heading>

            <div
              id="social_links"
              className="mt-10 flex flex-row flex-wrap items-center justify-center gap-8"
            >
              <Widget
                color="blue"
                shadow
                size="module"
                href={data.links.linkedin.url}
                target="_blank"
              >
                <FiLinkedin size={30} />

                <p className="mt-2 text-2xl font-semibold">LinkedIn</p>
                <span className="mt-auto text-xl font-medium">Planning</span>
              </Widget>

              <Widget
                color="dark"
                shadow
                size="module"
                href={data.links.github.url}
                target="_blank"
              >
                <FiGithub size={30} />

                <p className="mt-2 text-2xl font-semibold">GitHub</p>
                <span className="mt-auto text-xl font-medium">Planning</span>
              </Widget>

              <Widget shadow size="module" href={data.links.notion.url} target="_blank">
                <RxNotionLogo size={30} />

                <p className="mt-2 text-2xl font-semibold">Notion</p>
                <span className="mt-auto text-xl font-medium">Planning</span>
              </Widget>

              <Widget
                color="purple"
                shadow
                size="module"
                href={data.links.resume.url}
                target="_blank"
              >
                <FiClipboard size={30} />

                <p className="mt-2 text-2xl font-semibold">Resume</p>
                <span className="mt-auto text-xl font-medium">pdf</span>
              </Widget>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  )
}
