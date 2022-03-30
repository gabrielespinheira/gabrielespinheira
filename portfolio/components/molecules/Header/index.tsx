import { useEffect, useState } from 'react'
import Link from 'next/link'
import { FiMoon, FiSun } from 'react-icons/fi'
import { motion } from 'framer-motion'

import data from 'data.json'
import { Styled } from './styles'
import Button from 'components/atoms/Button'

const Animation = ({ children }) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.6, delay: 0.9 }}
      style={{ position: 'relative' }}
    >
      {children}
    </motion.div>
  )
}

const Header = () => {
  const [theme, setTheme] = useState<string>('dark')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const colorScheme = window.matchMedia('(prefers-color-scheme: dark)')
      const mode = colorScheme.matches ? 'dark' : 'light'
      setTheme(mode)

      colorScheme.addEventListener('change', function (evt) {
        const mode = evt.matches ? 'dark' : 'light'
        setTheme(mode)
      })
    }
  }, [])

  useEffect(() => {
    if (typeof theme !== 'undefined')
      document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const handleChangeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <Animation>
      <Styled id="header">
        <div className="container">
          <div className="logo">
            <Link href="/">{data.name}</Link>
          </div>

          <div className="options">
            <Button hover className="theme" onClick={handleChangeTheme}>
              {theme === 'light' ? <FiMoon size={24} /> : <FiSun size={24} />}
            </Button>
          </div>
        </div>
      </Styled>
    </Animation>
  )
}

export default Header
