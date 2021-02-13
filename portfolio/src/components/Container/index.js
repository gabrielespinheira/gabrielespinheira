import { motion } from 'framer-motion'

import styles from './style.module.scss'

const Container = ({ children }) => {
  return (
    <motion.div
      animate={{ y: [300, 0], opacity: [0, 1] }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <div className={styles.container}>{children}</div>
    </motion.div>
  )
}

export default Container
