export default function Shapes({
  fill,
  ...props
}: { fill?: string; className?: string } & React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="443" height="85" viewBox="0 0 443 85" {...props}>
      <path
        opacity="0.4"
        d="M442.364 75.8388C353.334 31.627 145.3 -39.6308 25.4012 29.0324C-94.497 97.6957 253.419 88.8464 442.364 75.8388Z"
        fill={fill || '#7357ff'}
      />
    </svg>
  )
}
