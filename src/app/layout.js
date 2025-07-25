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
       <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
