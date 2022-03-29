import { motion } from 'framer-motion'

import { Styled } from './styles'
import data from 'data.json'
import Window from 'components/atoms/Window'

const AnimationTitle = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, bottom: -100 }}
      whileInView={{ opacity: 1, bottom: 0 }}
      transition={{ duration: 0.7, delay: 0.5 }}
      style={{ position: 'relative' }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}

const AnimationWindow = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, bottom: -100, scale: 0.8 }}
      whileInView={{ opacity: 1, bottom: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.8 }}
      style={{ position: 'relative' }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}

const Experience = () => {
  return (
    <Styled>
      <div className="experience" id="experience">
        <div className="container">
          <AnimationTitle>
            <h2>Experience</h2>
          </AnimationTitle>

          <AnimationWindow>
            <Window>
              <div className="jobs">
                {data &&
                  data.jobs.map((job) => (
                    <div key={job.company} className="job">
                      <h3>
                        {job.company} <span>{job?.obs}</span>
                      </h3>
                      <div className="role">{job.role}</div>
                      <div className="location">{job.location}</div>
                      <p className="description">{job.description}</p>
                    </div>
                  ))}
              </div>
            </Window>
          </AnimationWindow>
        </div>
      </div>
    </Styled>
  )
}

export default Experience
