import Link from 'next/link'
import {
  FiCode,
  FiFileText,
  FiGithub,
  FiLinkedin,
  FiMail,
} from 'react-icons/fi'
import { Styled } from './styles'

import data from 'data.json'
import { Button } from 'components'

const Icons = {
  Resume: FiFileText,
  Email: FiMail,
  LinkedIn: FiLinkedin,
  GitHub: FiGithub,
  'Source Code': FiCode,
}

const Contact = () => {
  return (
    <Styled>
      <div className="contact" id="contact">
        <div className="container">
          <h2>Let’s connect</h2>

          <div className="social">
            {data &&
              data.links.map((link, index) => {
                const TargetComponent = Icons[link.name]
                return (
                  <Link href={link.url} key={index}>
                    <a target="_blank">
                      <Button ghost className="btn">
                        <TargetComponent size={24} />
                        {link.name}
                      </Button>
                    </a>
                  </Link>
                )
              })}
          </div>

          <footer>
            <p className="muted">
              Created and designed by Gabriel Araujo -{' '}
              {new Date().getFullYear()}
            </p>
          </footer>
        </div>
      </div>
    </Styled>
  )
}

export default Contact