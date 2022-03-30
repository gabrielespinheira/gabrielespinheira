import NextHead from 'next/head'

interface IHead {
  title?: string
}

const Head = ({ title = 'Gabriel Araujo - Software Engineer' }: IHead) => {
  return (
    <NextHead>
      <title>{title}</title>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
      />
      <meta
        name="description"
        content="I've been working with software development since 2014, from startups to big companies in different fields, which was fundamental for my career. Since the beginning, I have worked with Front-end and Back-end, and now I'm using mainly Javascript, NodeJS and ReactJS."
      />
      <meta
        name="keywords"
        content="developer, software engineer, senior software engineer, front end, back end, full stack, design, javascript, typescript, nodejs, nextjs"
      />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="Gabriel Araujo" />
      <meta
        name="application-name"
        content="Gabriel Araujo - Software Engineer"
      />
      <meta
        name="apple-mobile-web-app-title"
        content="Gabriel Araujo - Software Engineer"
      />

      {/* OG Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Gabriel Araujo - Software Engineer" />
      <meta property="og:url" content="https://ogabrielaraujo.com.br/" />
      <meta property="og:site_name" content="Gabriel Araujo" />
      <meta property="og:image" content="/thumb.jpg" />
      <meta property="og:image:width" content="500" />
      <meta property="og:image:height" content="500" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Gabriel Araujo - Software Engineer" />
      <meta
        name="twitter:description"
        content="I've been working with software development since 2014, from startups to big companies in different fields, which was fundamental for my career. Since the beginning, I have worked with Front-end and Back-end, and now I'm using mainly Javascript, NodeJS and ReactJS."
      />
      <meta name="twitter:image" content="/thumb.jpg" />

      {/* Icons */}
      <link rel="shortcut icon" href="/icons/16x16.png" />
      <link rel="apple-touch-icon" href="/icons/512x512.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/icons/152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/180x180.png" />
      <link rel="apple-touch-icon" sizes="167x167" href="/icons/167x167.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icons/32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/16x16.png" />
      <link rel="mask-icon" href="/icons/180x180.png" color="#0070F3" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="theme-color" content="#0070F3" />
    </NextHead>
  )
}

export default Head
