import styles from './style.module.scss'
import { FiLinkedin, FiGithub, FiAtSign } from 'react-icons/fi'

const ContentInfo = () => {
  return (
    <div className={styles.content_info}>
      <h1>Gabriel Araujo</h1>
      <h2>Engenheiro de Software</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar
        tincidunt ligula et mattis. Sed sit amet ex ut ligula commodo viverra
        non vulputate metus. Cras ac tempor sapien. Vivamus tristique quam sed
        sapien imperdiet, a venenatis ex fringilla. Nunc vel lectus nisl.{' '}
      </p>

      <div className="social">
        <a
          href="https://www.linkedin.com/in/ogabrielaraujo/"
          target="_blank"
          title="LinkedIn"
          rel="noreferrer"
        >
          <FiLinkedin />
        </a>
        <a
          href="https://github.com/ogabrielaraujo"
          target="_blank"
          title="GitHub"
          rel="noreferrer"
        >
          <FiGithub />
        </a>
        <a
          href="mailto:gabriiel66@gmail.com"
          target="_blank"
          title="E-mail"
          rel="noreferrer"
        >
          <FiAtSign />
        </a>
      </div>

      <button>Entrar em contato</button>
    </div>
  )
}

export default ContentInfo
