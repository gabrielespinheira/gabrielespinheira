import Link from 'next/link'
import ReactTooltip from 'react-tooltip'
import {
  FiHome,
  FiLayers,
  FiMail,
  FiMessageCircle,
  FiPackage,
  FiUser,
} from 'react-icons/fi'
import { Styled } from './styles'

const Navbar = () => {
  return (
    <Styled>
      <Link href="/">
        <a data-tip data-for="home">
          <FiHome size={24} />
        </a>
      </Link>
      <Link href="/">
        <a data-tip data-for="about">
          <FiUser size={24} />
        </a>
      </Link>
      <Link href="/">
        <a data-tip data-for="experience">
          <FiPackage size={24} />
        </a>
      </Link>
      {/* <Link href="/">
        <a data-tip data-for="cases">
          <FiLayers size={24} />
        </a>
      </Link> */}
      <Link href="/">
        <a data-tip data-for="contact">
          <FiMessageCircle size={24} />
        </a>
      </Link>
      <Link href="mailto:gabriiel66@gmail.com">
        <a data-tip data-for="mail">
          <FiMail size={24} />
        </a>
      </Link>

      <ReactTooltip id="home" effect="solid">
        Home
      </ReactTooltip>

      <ReactTooltip id="about" effect="solid">
        About me
      </ReactTooltip>

      <ReactTooltip id="experience" effect="solid">
        Experience
      </ReactTooltip>

      <ReactTooltip id="cases" effect="solid">
        Cases
      </ReactTooltip>

      <ReactTooltip id="contact" effect="solid">
        Contact
      </ReactTooltip>

      <ReactTooltip id="mail" effect="solid">
        Email
      </ReactTooltip>
    </Styled>
  )
}

export default Navbar
