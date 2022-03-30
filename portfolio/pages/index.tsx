import { useEffect, useState } from 'react'
import type { NextPage } from 'next'

import { TemplateBase, Hero, AboutMe, Experience, Contact } from 'components'

const Home: NextPage = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  if (!loaded) {
    return <></>
  }

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
