import { useEffect, useState } from 'react'
import Link from 'next/link'
import { FiMoon, FiSun } from 'react-icons/fi'

import data from 'data.json'
import { Styled } from './styles'
import Button from 'components/atoms/Button'

const Header = () => {
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    if (process.browser) {
      setTheme(document.documentElement.getAttribute('data-theme'))
    }
  }, [])

  const handleChangeTheme = () => {
    document.documentElement.setAttribute(
      'data-theme',
      theme === 'light' ? 'dark' : 'light'
    )
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <Styled>
      <div className="container">
        <div className="logo">
          <Link href="/">{data.name}</Link>
        </div>

        <div className="options">
          {/* <Button className="language">English</Button> */}
          <Button className="theme" onClick={handleChangeTheme}>
            {theme === 'light' ? <FiMoon size={24} /> : <FiSun size={24} />}
          </Button>
        </div>
      </div>
    </Styled>
  )
}

export default Header
