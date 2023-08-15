import Link from 'next/link'

import Glass from '../Glass'

type ISize = 'module' | 'horizontalLine' | 'sidebox' | 'line'
type IColor = 'glass' | 'white' | 'blue' | 'dark' | 'gray' | 'pink' | 'purple' | 'app'

const BaseWidget = ({
  size = 'module',
  color = 'glass',
  shadow = false,
  dots = false,
  children,
  className,
  ...props
}: {
  size?: ISize
  color?: IColor
  shadow?: boolean
  dots?: boolean
  children?: React.ReactNode
  className?: string
}) => {
  let colorClass = ''
  let sizeClass = ''

  if (size === 'module') {
    sizeClass = 'h-[180px] w-[150px] flex flex-col p-4 rounded-3xl'
  }

  if (size === 'horizontalLine') {
    sizeClass = 'min-w-[290px] h-[64px] items-center gap-4 px-6 py-3 rounded-2xl'
  }

  if (size === 'line') {
    sizeClass = 'h-[64px] items-center gap-4 px-6 py-3 rounded-2xl'
  }

  if (size === 'sidebox') {
    sizeClass = 'max-w-[500px] w-full flex flex-col p-6 rounded-2xl'
  }

  if (color === 'white') {
    colorClass = 'widget-white'
  }

  if (color === 'blue') {
    colorClass = 'widget-blue text-neutral-light'
  }

  if (color === 'dark') {
    colorClass = 'widget-dark text-neutral-light'
  }

  if (color === 'gray') {
    colorClass = 'widget-gray text-neutral-light'
  }

  if (color === 'pink') {
    colorClass = 'widget-pink text-neutral-light'
  }

  if (color === 'purple') {
    colorClass = 'widget-purple text-neutral-light'
  }

  if (color === 'app') {
    colorClass = 'bg-app text-neutral-light'
  }

  if (shadow) {
    className += ' widget-shadow'
  }

  if (!className) className = ''

  return (
    <Glass
      dots={dots}
      className={`z-50 flex flex-row ${sizeClass} ${colorClass} ${className}`}
      {...props}
    >
      {children}
    </Glass>
  )
}

const Widget = ({
  size = 'module',
  color = 'glass',
  shadow = false,
  dots = false,
  href,
  target,
  className,
  linkClassName,
  children,
  ...props
}: {
  size?: ISize
  color?: IColor
  shadow?: boolean
  dots?: boolean
  href?: string
  target?: string
  linkClassName?: string
  className?: string
  children?: React.ReactNode
}) => {
  if (href) {
    if (!linkClassName) linkClassName = ''

    return (
      <Link
        href={href}
        target={target}
        className={`flex transition-all duration-500 hover:scale-105 active:scale-95 ${linkClassName}`}
      >
        <BaseWidget
          size={size}
          color={color}
          shadow={shadow}
          dots={dots}
          className={className}
          {...props}
        >
          {children}
        </BaseWidget>
      </Link>
    )
  }

  return (
    <BaseWidget
      size={size}
      color={color}
      shadow={shadow}
      dots={dots}
      className={className}
      {...props}
    >
      {children}
    </BaseWidget>
  )
}

export default Widget
