import { Styled } from './styles'

import data from 'data.json'
import Window from 'components/atoms/Window'

const Experience = () => {
  return (
    <Styled>
      <div className="experience" id="experience">
        <div className="container">
          <h2>Experience</h2>

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
        </div>
      </div>
    </Styled>
  )
}

export default Experience
