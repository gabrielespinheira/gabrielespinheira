import NextLink from 'next/link'
import ReactTooltip from 'react-tooltip'
import { Squircle } from 'react-ios-corners'
import { Link } from 'react-scroll'
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
      <Squircle radius={25}>
        <Link to="header" smooth={true} data-tip data-for="home">
          <FiHome size={24} />
        </Link>
        <Link to="aboutme" smooth={true} offset={-40} data-tip data-for="about">
          <FiUser size={24} />
        </Link>
        <Link
          to="experience"
          smooth={true}
          offset={-40}
          data-tip
          data-for="experience"
        >
          <FiPackage size={24} />
        </Link>
        {/* <Link href="/">
        <a data-tip data-for="cases">
          <FiLayers size={24} />
        </a>
      </Link> */}
        <Link to="contact" smooth={true} data-tip data-for="contact">
          <FiMessageCircle size={24} />
        </Link>
        <NextLink href="mailto:gabriiel66@gmail.com">
          <a data-tip data-for="mail" target="_blank">
            <FiMail size={24} />
          </a>
        </NextLink>

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
      </Squircle>
    </Styled>
  )
}

export default Navbar
