import NextLink from 'next/link'
import { Squircle } from 'react-ios-corners'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import {
  FiHome,
  FiMail,
  FiMessageCircle,
  FiPackage,
  FiUser,
} from 'react-icons/fi'

import { Styled } from './styles'

const Animation = ({ children }) => {
  const variants = {
    hidden: { bottom: -100, left: '50%', transform: 'translateX(-50%)' },
    visible: { bottom: window.innerWidth > 899 ? 30 : 20 },
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.6, delay: 0.9 }}
      style={{ position: 'fixed' }}
    >
      {children}
    </motion.div>
  )
}

const Navbar = () => {
  return (
    <Animation>
      <Styled>
        <Squircle radius={25}>
          <Link to="header" smooth={true} data-tip data-for="home">
            <FiHome size={24} />
          </Link>
          <Link
            to="aboutme"
            smooth={true}
            offset={-40}
            data-tip
            data-for="about"
          >
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
          <Link
            to="contact"
            smooth={true}
            offset={-40}
            data-tip
            data-for="contact"
          >
            <FiMessageCircle size={24} />
          </Link>
          <NextLink href="mailto:gabriiel66@gmail.com">
            <a data-tip data-for="mail" target="_blank">
              <FiMail size={24} />
            </a>
          </NextLink>
        </Squircle>
      </Styled>
    </Animation>
  )
}

export default Navbar
