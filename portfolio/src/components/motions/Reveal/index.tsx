import { useRef } from 'react'
import { motion, useScroll, AnimatePresence, useTransform } from 'framer-motion'

const Reveal = ({ children, ...props }: { children: React.ReactNode } & any) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.2, 1, 1, 0.5])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [300, 0, 0, -300])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.7, 1], [0.5, 1, 1, 0.5])

  return (
    <AnimatePresence>
      <motion.section
        ref={ref}
        style={{ opacity, y, scale }}
        viewport={{ once: false, amount: 0.3 }}
        {...props}
      >
        {children}
      </motion.section>
    </AnimatePresence>
  )
}

export default Reveal
