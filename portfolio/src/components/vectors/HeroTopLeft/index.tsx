import { motion } from 'framer-motion'

const HeroTopLeft = ({ className, ...props }: any) => {
  return (
    <motion.div className={className} {...props}>
      <svg viewBox="0 0 1194 804" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1028.12 203.568C1460.05 275.976 938.469 655.371 659.637 758.697C380.805 862.022 93.706 781.007 18.3835 577.743C-56.939 374.479 108.038 125.939 386.87 22.6137C665.702 -80.7118 554.559 203.568 1028.12 203.568Z"
          fill="#5D30F7"
        />
      </svg>
    </motion.div>
  )
}

export default HeroTopLeft
