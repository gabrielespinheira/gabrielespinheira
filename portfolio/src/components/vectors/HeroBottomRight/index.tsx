import { motion } from 'framer-motion'

const HeroBottomRight = ({ className, ...props }: any) => {
  return (
    <motion.div className={className} {...props}>
      <svg viewBox="0 0 767 807" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M767 403.5C767 626.347 595.301 807 383.5 807C171.699 807 0 626.347 0 403.5C269.343 202.909 171.699 0 383.5 0C595.301 0 532.069 152.264 767 403.5Z"
          fill="#5D30F7"
        />
      </svg>
    </motion.div>
  )
}

export default HeroBottomRight
