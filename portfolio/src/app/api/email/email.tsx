import * as React from 'react'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components'

interface EmailProps {
  name: string
  email: string
  text: string
}

const baseUrl = process.env.BASE_URL ? `https://${process.env.BASE_URL}` : ''

export const Email = ({ name, email, text }: EmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Nice to meet you {name}!</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-neutral-light font-sans text-neutral-dark">
          <Container className="mx-auto my-[40px] w-[465px] rounded border border-solid border-neutral-300 p-[20px]">
            <Section className="mt-[32px]">
              <Link href={baseUrl}>
                <Img
                  // src={`${baseUrl}/assets/avatar_square.jpg`}
                  src="https://portfolio-git-2023-gabrielespinheira.vercel.app/assets/avatar_square.jpg"
                  width="150"
                  alt="Gabriel Espinheira - Software Engineer"
                  className="mx-auto my-0 rounded-full"
                />
              </Link>
            </Section>
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal tracking-tight text-neutral-dark">
              Hello, <strong>{name}</strong>!
            </Heading>

            <Text className="text-[16px] leading-[24px] text-neutral-dark">
              I&apos;m thrilled that you reached out to me! Gabriel here, and I&apos;ll
              respond to your email at the earliest opportunity. Let&apos;s dive into the
              details and have an awesome conversation.
            </Text>

            <Text className="rounded-md border border-solid border-neutral-300 bg-neutral-100 p-3 text-[16px] leading-[24px] text-neutral-dark">
              &quot;{text}&quot; - <Link href={`mailto:${email}`}>{name}</Link>
            </Text>

            <Text className="text-[16px] leading-[24px] text-neutral-dark">
              See you soon :D
            </Text>

            <Hr className="mx-0 my-[26px] w-full border border-solid border-neutral-300" />

            <Text className="text-[12px] leading-[24px] text-neutral-500">
              This is an <span className="text-black">automatic</span> email, we do not
              store your data on our servers.
            </Text>

            <Section className="flex w-full items-center justify-center text-center">
              <Link href={baseUrl}>gabs.app</Link>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
