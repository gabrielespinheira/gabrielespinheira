import Link from 'next/link'

export default () => {
  return (
    <header>
      <ul className="menu">
        <Link href="/">Home</Link>
        <Link href="/about">About me</Link>
        <Link href="/contact">Contact</Link>
      </ul>

      <div className="options">
        <div className="language">English</div>
        <div className="mode">Dark mode</div>
      </div>
    </header>
  )
}
