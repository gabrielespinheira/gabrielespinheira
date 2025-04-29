import React from 'react'
import { motion } from 'framer-motion'

export default function Glass({
  children,
  className,
  dots = false,
  invertDots = false,
  ...props
}: {
  children?: React.ReactNode
  className?: string
  dots?: boolean
  invertDots?: boolean
} & any) {
  return (
    <motion.div
      className={`bg-glass relative text-neutral-dark dark:text-neutral-light ${className}`}
      {...props}
    >
      {children}

      {dots && invertDots && (
        <div className="absolute right-5 top-6 flex flex-col items-center justify-center gap-1">
          <span className="h-[6px] w-[6px] rounded-full bg-neutral-light dark:bg-neutral-dark"></span>
          <span className="h-[6px] w-[6px] rounded-full bg-neutral-light dark:bg-neutral-dark"></span>
        </div>
      )}

      {dots && !invertDots && (
        <div className="absolute right-5 top-6 flex flex-col items-center justify-center gap-1">
          <span className="h-[6px] w-[6px] rounded-full bg-neutral-dark dark:bg-neutral-light"></span>
          <span className="h-[6px] w-[6px] rounded-full bg-neutral-dark dark:bg-neutral-light"></span>
        </div>
      )}
    </motion.div>
  )
}
