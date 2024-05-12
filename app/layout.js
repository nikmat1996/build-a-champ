import { Poppins } from 'next/font/google'
import './globals.css'
import { Toaster } from "@/components/ui/toaster"

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

export const metadata = {
  title: 'Build a Champ',
  description:
    'Empower young athletes with our premier digital platform. From beginners to seasoned players, find all you need to succeed. Elevate their game now!'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
      </head>
      <body className={poppins.className}>
        
        {children}
        <Toaster />
      </body>
    </html>
  )
}
