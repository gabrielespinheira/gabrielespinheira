import Link from 'next/link'
import ReactTooltip from 'react-tooltip'
import {
  FiHome,
  FiLayers,
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
      <Link href="/">
        <a data-tip data-for="cases">
          <FiLayers size={24} />
        </a>
      </Link>
      <Link href="/">
        <a data-tip data-for="contact">
          <FiMessageCircle size={24} />
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
    </Styled>
  )
}

export default Navbar
