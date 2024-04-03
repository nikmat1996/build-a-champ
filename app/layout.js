import { Poppins } from 'next/font/google'
import './globals.css'
import MainMenu from '@/components/Mainmenu'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700']
})

export const metadata = {
  title: 'Build a Champ',
  description:
    'Empower young athletes with our premier digital platform. From beginners to seasoned players, find all you need to succeed. Elevate their game now!'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        
        {children}
      </body>
    </html>
  )
}
