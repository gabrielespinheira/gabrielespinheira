import type { NextPage } from 'next'

import { TemplateBase, Hero, AboutMe } from 'components'

const Home: NextPage = () => {
  return (
    <TemplateBase>
      <Hero />
      <AboutMe />
    </TemplateBase>
  )
}

export default Home
