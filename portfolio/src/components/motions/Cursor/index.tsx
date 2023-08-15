import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

const Cursor = () => {
  const x = useSpring(0)
  const y = useSpring(0)
  const opacity = useSpring(0)

  useEffect(() => {
    const hero = document.querySelector('#hero')
    // @ts-ignore
    const heroOffset = hero?.offsetHeight

    const mouseMove = (e: any) => {
      if (e.pageY > heroOffset) {
        x.set(e.clientX - 160)
        y.set(e.clientY - 160)
        opacity.set(1)
      } else {
        x.set(-500)
        y.set(-500)
        opacity.set(0)
      }
    }

    window.addEventListener('mousemove', mouseMove)

    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <motion.div
        style={{
          x,
          y,
          opacity,
          mixBlendMode: 'lighten',
        }}
        className={`pointer-events-none fixed z-[40] h-96 w-96 rounded-full bg-purple blur-3xl`}
      />
    </>
  )
}

export default Cursor
