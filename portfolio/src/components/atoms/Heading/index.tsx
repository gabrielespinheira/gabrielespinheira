const Heading = ({
  tag = 'h2',
  className,
  children,
  ...props
}: {
  children: React.ReactNode
  className?: string
  tag?: string
} & React.HTMLAttributes<HTMLHeadingElement>) => {
  const Element: any = tag
  let headingClass = ''

  if (tag === 'h2') {
    headingClass = 'text-7xl font-bold tracking-[-0.03em]'
  }

  if (tag === 'h3') {
    headingClass = 'text-6xl font-semibold tracking-tighter'
  }

  if (tag === 'h4') {
    headingClass = 'text-2xl font-semibold'
  }

  return (
    <Element className={`inline-block ${headingClass} ${className}`} {...props}>
      {children}
    </Element>
  )
}

export default Heading
