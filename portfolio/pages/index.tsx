import type { NextPage } from 'next'

import { TemplateBase, Hero, AboutMe, Experience, Contact } from 'components'

const Home: NextPage = () => {
  return (
    <TemplateBase>
      <Hero />
      <AboutMe />
      <Experience />
      <Contact />
    </TemplateBase>
  )
}

export default Home
