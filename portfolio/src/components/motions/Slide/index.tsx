import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Slide = ({
  delay = '0.3s',
  direction = 'left',
  distance = '200px',
  once = false,
  children,
  ...props
}: {
  delay: string
  direction: 'left' | 'top' | 'right' | 'bottom'
  distance: string
  children: React.ReactNode
} & any) => {
  const ref = useRef<HTMLDivElement>(null)

  const isInView = useInView(ref, { once })

  let translate = `translateX(-${distance})`

  if (direction === 'left') {
    translate = `translateX(${distance})`
  } else if (direction === 'top') {
    translate = `translateY(${distance})`
  } else if (direction === 'bottom') {
    translate = `translateY(-${distance})`
  }

  return (
    <motion.div
      ref={ref}
      style={{
        transform: isInView ? 'none' : translate,
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)',
        transitionDelay: delay,
      }}
      viewport={{ once: false, amount: 0.3 }}
      className="relative z-[50]"
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default Slide
