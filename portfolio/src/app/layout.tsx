import './globals.css'
import { Source_Sans_3 } from 'next/font/google'

const font = Source_Sans_3({ subsets: ['latin'] })

import data from '@/data.json'

export const metadata = {
  title: data.full_title,
  description: data.description,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
