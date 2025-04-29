import { FiHeart, FiMonitor, FiMoon, FiSun } from 'react-icons/fi'
import { red } from 'tailwindcss/colors'

import Glass from '@/components/atoms/Glass'
import { useTheme } from '@/hooks'

export default function Footer() {
  const [theme, setTheme, isSystemDarkTheme] = useTheme()

  return (
    <footer className="container flex !max-w-[900px] flex-row justify-between gap-4 pb-8 pt-8">
      <span className="flex w-1/3 items-center">Copyright © 2023</span>

      <span className="flex items-center gap-1">
        Created with <FiHeart size={12} color={red[700]} fill={red[500]} /> by Gabriel
        Espinheira
      </span>

      <span className="flex w-1/3 justify-end">
        <Glass className="flex justify-between gap-1 rounded-full p-1 align-middle">
          <button
            className={`rounded-full p-2 ${
              theme !== 'dark' && theme !== 'light' && 'bg-purple text-neutral-light'
            }`}
            onClick={() => setTheme(isSystemDarkTheme() ? 'system-dark' : 'system-light')}
          >
            <FiMonitor size={18} />
          </button>
          <button
            className={`rounded-full  p-2  ${
              theme === 'dark' && 'bg-purple text-neutral-light'
            }`}
            onClick={() => setTheme('dark')}
          >
            <FiMoon size={18} />
          </button>
          <button
            className={`rounded-full p-2 ${
              theme === 'light' && 'bg-purple text-neutral-light'
            }`}
            onClick={() => setTheme('light')}
          >
            <FiSun size={18} />
          </button>
        </Glass>
      </span>
    </footer>
  )
}
