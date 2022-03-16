import Link from 'next/link'
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
        <a>
          <FiHome size={24} />
        </a>
      </Link>
      <Link href="/">
        <a>
          <FiUser size={24} />
        </a>
      </Link>
      <Link href="/">
        <a>
          <FiPackage size={24} />
        </a>
      </Link>
      <Link href="/">
        <a>
          <FiLayers size={24} />
        </a>
      </Link>
      <Link href="/">
        <a>
          <FiMessageCircle size={24} />
        </a>
      </Link>
    </Styled>
  )
}

export default Navbar
