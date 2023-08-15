import { useState } from 'react'
import { FiClipboard, FiDribbble, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi'

import { Glass, Reveal, Widget, Heading, Slide } from '@/components'
import data from '@/data.json'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [text, setText] = useState('')

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const resp = await fetch('/api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        text,
      }),
    })

    const response = await resp.json()

    console.log('🔥', response)
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
                required
                type="text"
                id="name"
                name="name"
                className="rounded-xl border border-neutral-light bg-neutral-light p-3 shadow-lg outline-none transition-all focus:border focus:border-purple dark:text-neutral-dark"
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                }}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 text-base font-medium">
                Email
              </label>
              <input
                required
                type="email"
                id="email"
                name="email"
                className="rounded-xl border border-neutral-light bg-neutral-light p-3 shadow-lg outline-none transition-all focus:border focus:border-purple dark:text-neutral-dark"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="text" className="mb-2 text-base font-medium">
                What can I do to make things easier for you?
              </label>
              <textarea
                required
                id="text"
                className="h-36 resize-none rounded-xl border border-neutral-light bg-neutral-light p-3 shadow-lg outline-none transition-all focus:border focus:border-purple dark:text-neutral-dark"
                value={text}
                minLength={3}
                maxLength={300}
                onChange={(e) => {
                  setText(e.target.value)
                }}
              />
            </div>

            <div className="flex">
              <button
                onClick={handleSubmit}
                className="flex flex-row items-center justify-center gap-3 rounded-xl bg-purple px-8 py-2.5 text-base font-semibold tracking-[0.01em] text-neutral-light transition hover:bg-purple-700 active:scale-95"
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
              <Slide direction="top" delay="0s" distance="50px">
                <Widget
                  color="blue"
                  shadow
                  size="module"
                  href={data.links.linkedin.url}
                  target="_blank"
                >
                  <FiLinkedin size={30} />

                  <p className="mt-2 text-2xl font-semibold">LinkedIn</p>
                  <span className="mt-auto text-base font-medium">
                    {
                      data.links.linkedin.copies[
                        (Math.random() * data.links.linkedin.copies.length) | 0
                      ]
                    }
                  </span>
                </Widget>
              </Slide>

              <Slide direction="top" delay="0.3s" distance="50px">
                <Widget shadow size="module" href={data.links.github.url} target="_blank">
                  <FiGithub size={30} />

                  <p className="mt-2 text-2xl font-semibold">GitHub</p>
                  <span className="mt-auto text-base font-medium">
                    {
                      data.links.github.copies[
                        (Math.random() * data.links.github.copies.length) | 0
                      ]
                    }
                  </span>
                </Widget>
              </Slide>

              <Slide direction="top" delay="0.6s" distance="50px">
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

              <Slide direction="top" delay="0.9s" distance="50px">
                <Widget
                  color="purple"
                  shadow
                  size="module"
                  href={data.links.resume.url}
                  target="_blank"
                >
                  <FiClipboard size={30} />

                  <p className="mt-2 text-2xl font-semibold">Resume</p>
                  <span className="mt-auto text-base font-medium">pdf</span>
                </Widget>
              </Slide>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  )
}
