import { FiHeart } from 'react-icons/fi'
import { red } from 'tailwindcss/colors'

export default function Footer() {
  return (
    <footer className="container flex !max-w-[900px] flex-row justify-between gap-4 pb-8 pt-8">
      <span className="w-1/3">Copyright © 2023</span>

      <span className="flex items-center gap-1">
        Created with <FiHeart size={12} color={red[700]} fill={red[500]} /> by
        Gabriel Espinheira
      </span>

      <span className="flex w-1/3 justify-end">Toggle</span>
    </footer>
  )
}
