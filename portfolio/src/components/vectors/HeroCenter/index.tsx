import { motion, HTMLMotionProps } from 'framer-motion'

const HeroCenter = ({ className, ...props }: any) => {
  return (
    <motion.div className={className} {...props}>
      <svg viewBox="0 0 1117 841" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M848.936 456.126C848.936 668.686 684.939 841 482.639 841C280.339 841 -227.368 508.13 116.342 456.126C116.342 243.566 -123.764 -32.754 482.639 71.2526C682.023 105.45 1547.9 -281.242 848.936 456.126Z"
          fill="#7357FF"
        />
      </svg>
    </motion.div>
  )
}

export default HeroCenter
