import { useEffect, useState } from 'react'

export type ThemeType = 'dark' | 'light' | 'system-dark' | 'system-light'

const useTheme = (): [
  theme: ThemeType | null,
  handleChangeTheme: (theme: ThemeType) => ThemeType,
  isSystemDarkTheme: () => boolean
] => {
  const [theme, setTheme] = useState<ThemeType>('system-dark')

  const isSystemDarkTheme = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches

  const themeListener = (e: any) => {
    handleChangeTheme(e.matches ? 'system-dark' : 'system-light')
  }

  useEffect(() => {
    const storage = localStorage.getItem('theme')

    if (storage) {
      setTheme(storage as ThemeType)
      handleBodyClass(storage as ThemeType)
    } else if (storage === null) {
      const isDark = isSystemDarkTheme()
      handleChangeTheme(isDark ? 'system-dark' : 'system-light')
    }

    const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)')
    darkThemeMq.addListener(themeListener)
    return () => darkThemeMq.removeListener(themeListener)
  }, [])

  const handleChangeTheme = (theme: ThemeType) => {
    setTheme(theme)
    localStorage.setItem('theme', theme)
    handleBodyClass(theme)

    return theme
  }

  const handleBodyClass = (theme: ThemeType) => {
    if (theme.search('dark') !== -1) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }

  return [theme, handleChangeTheme, isSystemDarkTheme]
}

export default useTheme
