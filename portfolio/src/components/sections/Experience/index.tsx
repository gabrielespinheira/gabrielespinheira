import { RxNotionLogo } from 'react-icons/rx'

import { Heading, Reveal, Widget } from '@/components'

const colors: any = {
  purple: 'bg-purple-main',
  red: 'bg-red-main',
  blue: 'bg-blue-main',
  cyan: 'bg-cyan-main',
  green: 'bg-green-main',
  orange: 'bg-orange-main',
}

export default function Experience() {
  return (
    <div id="experience" className="container  pb-24 pt-24">
      <Reveal className="flex flex-col items-center justify-center">
        <Heading className="mb-14">Experience</Heading>

        <div className="relative flex w-full flex-col items-center justify-center gap-8 pb-24 pt-24">
          <span className="gradient-timeline absolute left-1/2 top-0 h-full w-[1px]"></span>

          <Company
            title="Mollie"
            color="blue"
            role="Senior Software Engineer"
            time="Mar 2023 - Present"
            bullets={[
              'Focus on building new features and pages for the Mollie website',
              'Experience building a consistent and reusable design system',
              'Using Gutenberg Blocks from WordPress to build components',
            ]}
            icon={<RxNotionLogo size={32} />}
          />

          <Company
            right
            color="green"
            title="LovelyStay"
            role="Senior Software Engineer"
            time="Aug 2022 - Feb 2023"
            bullets={[
              'Experience working for a real estate investment fund',
              'Specializes in building and maintaining a property management solution',
              'Experience integrating with external services such as Airbnb and Booking',
            ]}
            icon={<RxNotionLogo size={32} />}
          />

          <Company
            color="cyan"
            title="Art2Act"
            role="Senior Software Engineer"
            time="May 2022 - Jul 2022"
            bullets={[
              'Experience building an NFT collaborative subscription platform',
              'Implemented GraphQL to improve flexibility, type-safe system, and better efficiency in fetching data',
              'Development experience with concepts like Web3, MetaMask, and Blockchain',
            ]}
            icon={<RxNotionLogo size={32} />}
          />

          <Company
            right
            color="orange"
            title="XP Inc."
            role="Senior Software Engineer"
            time="Sep 2020 - Mar 2022"
            bullets={[
              'Built a back-end API architecture connecting to a CMS and front-end',
              'Implemented Server Side Rendering with NextJS for better performance',
              'Implemented serverless functions and plugins to optimize user experience, scalability and performance',
              'Analyzing data for Business Intelligence (BI) purposes',
            ]}
            icon={<RxNotionLogo size={32} />}
          />

          <Company
            title="Setta"
            color="green"
            role="Software Engineer II"
            time="Nov 2019 - Aug 2020"
            bullets={[
              'Creating new features, performing A/B tests, and conducting user research',
              'Main focus on building Proofs of Concept and web services',
              'Worked on building a positive technology team culture',
              'Working with different teams to build a productivity and self-improvement application for web, android and iOS',
            ]}
            icon={<RxNotionLogo size={32} />}
          />

          <Company
            right
            color="blue"
            title="Shosp"
            role="Software Engineer I"
            time="Feb 2019 - Oct 2019"
            bullets={[
              'Experience building and maintaining features for a management system for medical clinics and healthcare industry, serving clients throughout Brazil',
              'Contributed to the selection of new technologies (ReactJS) to improve the user experience with more dynamic and concise interfaces',
              'Working with the design team to build better and more intuitive user experiences',
            ]}
            icon={<RxNotionLogo size={32} />}
          />

          <Company
            color="purple"
            title="Freelancer"
            role="Freelance Software Developer"
            time="Oct 2017 - Jan 2019"
            bullets={[
              'Experience working with clients in different fields, such as education, hotels, events, lawyers, delivery, etc.',
              'Specializes in building websites, portfolios, e-commerce sites, APIs, and management systems',
              'Focus on understanding client goals and deadlines and translating them into good quality code and better KPI results',
            ]}
            icon={<RxNotionLogo size={32} />}
          />

          <Company
            right
            color="cyan"
            title="Agência Trii"
            role="Software Developer - Intern"
            time="Nov 2015 - Sep 2017"
            bullets={[
              'Specializes in website construction and sales landing pages',
              'Experience with API integrations to connect with external services',
              'Utilizes best practices in HTML and CSS to optimize for SEO and ensure responsive layout across different devices',
            ]}
            icon={<RxNotionLogo size={32} />}
          />
        </div>
      </Reveal>
    </div>
  )
}

const Company = ({
  title,
  role,
  icon,
  time = '',
  bullets = [],
  right = false,
  color = 'purple',
}: {
  title: string
  role: string
  icon: React.ReactElement
  time?: string
  bullets?: string[]
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
      <Widget dots={true} size="sidebox">
        {icon}

        <Heading tag="h4" className="mt-2">
          {title}
        </Heading>
        <div className="text-sm">
          {role} ({time})
        </div>
        <ul className="mt-2 leading-[170%]">
          {bullets &&
            bullets.map((bullet, index) => (
              <li key={index} className={`relative pl-6 leading-normal`}>
                <span
                  className={`absolute left-0 top-[6px] h-2.5 w-2.5 rounded-full ${colorClasses}`}
                ></span>
                {bullet}
              </li>
            ))}
        </ul>
      </Widget>

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
