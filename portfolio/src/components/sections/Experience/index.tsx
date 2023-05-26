import { RxNotionLogo } from 'react-icons/rx'

import { Glass, Shape } from '@/components'

const colors: any = {
  purple: 'bg-purple-main',
  red: 'bg-red-main',
  blue: 'bg-blue-main',
  cyan: 'bg-cyan-main',
}

const Company = ({
  title,
  role,
  text,
  icon,
  right = false,
  color = 'purple',
}: {
  title: string
  role: string
  text: string
  icon: React.ReactElement
  right?: boolean
  color?: string
}) => {
  let colorClasses = colors[color]

  return (
    <div
      className={`relative flex w-full flex-row items-start justify-${
        right ? 'end' : 'start'
      }`}
    >
      <Glass className="w-full max-w-[500px] p-6" dots={true}>
        {icon}

        <h4 className="mt-2 text-2xl font-semibold">{title}</h4>
        <div className="text-sm">{role} (Jan 2023 / May 2023)</div>
        <p className="mt-2 leading-[170%]">{text}</p>
      </Glass>

      <div
        className={`absolute ${
          right ? 'right-0' : 'left-0'
        } top-2 z-[-1] flex max-h-[680px] max-w-[1200px] -translate-y-1/2`}
      >
        <Shape shape="line" fill="#5B23FC" />
      </div>

      {right ? (
        <div className="absolute left-1/2 top-1/2 h-[1px] w-16 -translate-y-1/2 bg-gradient-to-r from-neutral-dark via-transparent via-90% to-transparent dark:from-neutral-light">
          <span
            className={`absolute left-[-5px] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full ${colorClasses}`}
          ></span>
        </div>
      ) : (
        <div className="absolute right-1/2 top-1/2 h-[1px] w-16 -translate-y-1/2 bg-gradient-to-r from-transparent via-transparent via-10% to-neutral-dark dark:to-neutral-light">
          <span
            className={`absolute right-[-5px] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full ${colorClasses}`}
          ></span>
        </div>
      )}
    </div>
  )
}

export default function Experience() {
  return (
    <div
      id="experience"
      className="container flex flex-col items-center justify-center pb-24 pt-24"
    >
      <h2 className="mb-14 text-7xl font-bold tracking-[-0.03em]">
        Experience
      </h2>

      <section className="relative flex w-full flex-col items-center justify-center gap-8 pb-24 pt-24">
        <span className="gradient-timeline absolute left-1/2 top-0 h-full w-[1px]"></span>

        <Company
          title="Mollie"
          role="Software Engineer - Senior"
          text="Working as a Software Engineer, in the most recognized investment
          firms in Brazil. Mainly building solutions like Back-end API
          architecture and building a scalable and reusable front-end with
          NextJS, using methodologies like Atomic Design."
          icon={<RxNotionLogo size={32} />}
        />

        <Company
          right
          color="red"
          title="LovelyStay"
          role="Software Engineer - Junior"
          text="Working as a Software Engineer, in the most recognized investment
          firms in Brazil. Mainly building solutions like Back-end API
          architecture and building a scalable and reusable front-end with
          NextJS, using methodologies like Atomic Design."
          icon={<RxNotionLogo size={32} />}
        />

        <Company
          color="blue"
          title="Art2Act"
          role="Software Engineer - Junior"
          text="Working as a Software Engineer, in the most recognized investment
          firms in Brazil. Mainly building solutions like Back-end API
          architecture and building a scalable and reusable front-end with
          NextJS, using methodologies like Atomic Design."
          icon={<RxNotionLogo size={32} />}
        />

        <Company
          right
          color="cyan"
          title="XP Inc."
          role="Software Engineer - Junior"
          text="Working as a Software Engineer, in the most recognized investment
          firms in Brazil. Mainly building solutions like Back-end API
          architecture and building a scalable and reusable front-end with
          NextJS, using methodologies like Atomic Design."
          icon={<RxNotionLogo size={32} />}
        />

        <Company
          title="Setta"
          role="Software Engineer - Senior"
          text="Working as a Software Engineer, in the most recognized investment
          firms in Brazil. Mainly building solutions like Back-end API
          architecture and building a scalable and reusable front-end with
          NextJS, using methodologies like Atomic Design."
          icon={<RxNotionLogo size={32} />}
        />

        <Company
          right
          color="red"
          title="Shosp"
          role="Software Engineer - Junior"
          text="Working as a Software Engineer, in the most recognized investment
          firms in Brazil. Mainly building solutions like Back-end API
          architecture and building a scalable and reusable front-end with
          NextJS, using methodologies like Atomic Design."
          icon={<RxNotionLogo size={32} />}
        />

        <Company
          color="blue"
          title="Freelancer"
          role="Software Engineer - Junior"
          text="Working as a Software Engineer, in the most recognized investment
          firms in Brazil. Mainly building solutions like Back-end API
          architecture and building a scalable and reusable front-end with
          NextJS, using methodologies like Atomic Design."
          icon={<RxNotionLogo size={32} />}
        />

        <Company
          right
          color="cyan"
          title="Agência Trii"
          role="Software Engineer - Junior"
          text="Working as a Software Engineer, in the most recognized investment
          firms in Brazil. Mainly building solutions like Back-end API
          architecture and building a scalable and reusable front-end with
          NextJS, using methodologies like Atomic Design."
          icon={<RxNotionLogo size={32} />}
        />
      </section>
    </div>
  )
}
