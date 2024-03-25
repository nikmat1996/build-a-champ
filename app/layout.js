import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700']
})

export const metadata = {
  title: 'Build a Champ',
  description: "Unlock your child's athletic potential with our top-tier digital sports development platform. From beginners to seasoned players, find everything you need to succeed here. Elevate their game today!"
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
