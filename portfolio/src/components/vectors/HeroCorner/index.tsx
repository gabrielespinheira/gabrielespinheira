const HeroCorner = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLOrSVGElement>) => {
  return (
    <svg
      viewBox="0 0 848 928"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M848 464C848 720.26 658.169 928 424 928C399.284 464 0 720.26 0 464C0 207.74 189.831 0 424 0C658.169 0 257.052 221.839 848 464Z"
        fill="#BEE3F5"
      />
    </svg>
  )
}

export default HeroCorner
