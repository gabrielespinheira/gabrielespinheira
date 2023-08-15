'use client'

import { useEffect, useRef, useState } from 'react'

import { Glass } from '@/components'

export default function Nav() {
  const navRef = useRef(null)
  const [active, setActive] = useState()
  const [position, setPosition] = useState({
    left: '0',
    width: '0',
    opacity: '0',
  })

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    })

    const sectionIds = ['hero', 'about', 'stack', 'experience', 'contact']

    sectionIds.forEach((sectionId) => {
      const sectionElement = document.getElementById(sectionId)
      if (sectionElement) {
        observer.observe(sectionElement)
      }
    })

    return () => {
      sectionIds.forEach((sectionId) => {
        const sectionElement = document.getElementById(sectionId)
        if (sectionElement) {
          observer.unobserve(sectionElement)
        }
      })
    }
  }, [])

  const handleIntersection = (entries: any) => {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        const currentSectionId = entry.target.id
        setActive(currentSectionId)

        if (navRef?.current) {
          const target = document.getElementById(`nav-${currentSectionId}`)

          setPosition({
            ...position,
            opacity: '1',
            left: `${target?.offsetLeft}px`,
            width: `${target?.offsetWidth}px`,
          })
        }
      }
    })
  }

  const handleNavClick = (dataId: any) => {
    const element = document.getElementById(dataId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const NavButton = ({
    label,
    dataId,
    ...props
  }: {
    label: string
    dataId: string
  } & React.HTMLAttributes<HTMLButtonElement>) => {
    return (
      <button className="flex" {...props} onClick={() => handleNavClick(dataId)}>
        <span
          className={`px-4 py-2 leading-5 transition-all duration-1000 ease-in-out ${
            active === dataId
              ? 'text-neutral-light'
              : 'text-neutral-dark dark:text-neutral-light'
          }`}
        >
          {label}
        </span>
      </button>
    )
  }

  return (
    <nav id="nav">
      <Glass
        initial={{ scale: 0.8, x: '-50%', y: '-100px' }}
        animate={{ scale: 1, x: '-50%', y: '24px' }}
        transition={{ duration: 0.8, delay: 2 }}
        className="!fixed left-1/2 z-50 flex w-auto items-center justify-center gap-2 rounded-3xl p-1 text-base font-normal text-neutral-dark dark:text-neutral-light"
      >
        <NavButton label="Home" id="nav-hero" dataId="hero" />
        <NavButton label="About" id="nav-about" dataId="about" />
        <NavButton label="Stack" id="nav-stack" dataId="stack" />
        <NavButton label="Experience" id="nav-experience" dataId="experience" />
        <NavButton label="Contact" id="nav-contact" dataId="contact" />

        <span
          ref={navRef}
          className="absolute top-[4px] z-[-1] h-[36px] w-4 rounded-3xl  bg-purple opacity-0 transition-all delay-75 duration-500 ease-in-out"
          style={{
            left: position.left,
            width: position.width,
            opacity: position.opacity,
          }}
        />
      </Glass>
    </nav>
  )
}
