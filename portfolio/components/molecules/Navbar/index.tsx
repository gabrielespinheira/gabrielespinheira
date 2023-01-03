import NextLink from 'next/link'
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
  let variants = {
    hidden: { bottom: -100, left: '50%', transform: 'translateX(-50%)' },
    visible: { bottom: 30, left: '50%', transform: 'translateX(-50%)' },
  }

  if (typeof window !== 'undefined') {
    variants.visible.bottom = window.innerWidth > 899 ? 30 : 20
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
        <div>
          <Link to="header" smooth={true} data-tip data-for="home" name="Home">
            <FiHome size={24} />
          </Link>
          <Link
            to="aboutme"
            smooth={true}
            offset={-40}
            data-tip
            data-for="about"
            name="About me"
          >
            <FiUser size={24} />
          </Link>
          <Link
            to="experience"
            smooth={true}
            offset={-40}
            data-tip
            data-for="experience"
            name="Experience"
          >
            <FiPackage size={24} />
          </Link>
          {/* <NextLink href="/">
            <a data-tip data-for="cases">
              <FiLayers size={24} />
            </a>
          </NextLink> */}
          <Link
            to="contact"
            smooth={true}
            offset={-40}
            data-tip
            data-for="contact"
            name="Contact"
          >
            <FiMessageCircle size={24} />
          </Link>
          <NextLink
            title="Email"
            href="mailto:gabriiel66@gmail.com"
            target="_blank"
          >
            <FiMail size={24} />
          </NextLink>
        </div>
      </Styled>
    </Animation>
  )
}

export default Navbar
