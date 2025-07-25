import './globals.css'

// Import fonts from next/font/google
import { Russo_One, Righteous, Shojumaru } from 'next/font/google'

// Load fonts
const russoOne = Russo_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-russo'
})

const righteous = Righteous({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-righteous'
})

const shojumaru = Shojumaru({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-shojumaru'
})

// Metadata
export const metadata = {
  title: 'Translator App',
  description:
    'Translator App created using Next.js and Tailwind CSS which helps in translating text and learn a new language',
}

// Root layout
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${russoOne.variable} ${righteous.variable} ${shojumaru.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
