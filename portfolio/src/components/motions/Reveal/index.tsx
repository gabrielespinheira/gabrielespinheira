import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Reveal = ({ children, ...props }: { children: React.ReactNode } & any) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.2, 1, 1, 0.5])

  return (
    <motion.section ref={ref} style={{ opacity }} className="relative z-[50]" {...props}>
      {children}
    </motion.section>
  )
}

export default Reveal
