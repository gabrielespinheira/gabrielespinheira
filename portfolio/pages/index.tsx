import type { NextPage } from 'next'
import { TemplateBase } from 'components'

const Home: NextPage = () => {
  return (
    <TemplateBase>
      <h1>Gabriel Araujo</h1>
      <h2>Software Engineer</h2>
      <p>
        Over the past years, I have been working for technology companies, from
        startups to big companies, which is fundamental for my development in
        different aspects. Moreover, I continued studying and participating in
        technology events, lectures, workshops and bootcamps.{' '}
      </p>
      <strong>I'm always looking forward to the next challenge.</strong>
    </TemplateBase>
  )
}

export default Home
