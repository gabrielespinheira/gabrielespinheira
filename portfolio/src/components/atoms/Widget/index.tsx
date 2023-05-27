import Link from 'next/link'

import Glass from '../Glass'

type ISize = 'module' | 'horizontalLine' | 'sidebox'
type IColor = 'glass' | 'white' | 'blue' | 'dark'

const BaseWidget = ({
  size,
  color,
  dots,
  children,
  className,
  ...props
}: {
  size?: ISize
  color?: IColor
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

  return (
    <Glass
      dots={dots}
      className={`flex flex-row ${sizeClass} ${colorClass} ${className}`}
      {...props}
    >
      {children}
    </Glass>
  )
}

const Widget = ({
  size = 'module',
  color = 'glass',
  dots = false,
  href,
  target,
  className,
  children,
  ...props
}: {
  size?: ISize
  color?: IColor
  dots?: boolean
  href?: string
  target?: string
  className?: string
  children?: React.ReactNode
}) => {
  if (href) {
    return (
      <Link href={href} target={target}>
        <BaseWidget
          size={size}
          color={color}
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
    <BaseWidget size={size} color={color} dots={dots} className={className} {...props}>
      {children}
    </BaseWidget>
  )
}

export default Widget
