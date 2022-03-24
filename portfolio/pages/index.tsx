import type { NextPage } from 'next'

import { TemplateBase, Hero, AboutMe, Experience } from 'components'

const Home: NextPage = () => {
  return (
    <TemplateBase>
      <Hero />
      <AboutMe />
      <Experience />
    </TemplateBase>
  )
}

export default Home
