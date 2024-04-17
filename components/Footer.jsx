import Image from 'next/image'
import {
  Phone,
  Mail,
  Facebook,
  Instagram,
  TwitchIcon,
  Twitter
} from 'lucide-react'
import footerLogo from '@/assets/icons/footerLogo.png'
import { Button } from './ui/button'

const footerText = {
  p1: 'The premier digital platform for sports development in kids!',
  p2: 'All rights reserved@buidachamp.com',
  email: 'buildachamp@gmail.com',
  phoneDummy: '044-1234567',
  phone: '044-1234567'
}

const links = [
  { id: 'mission', text: 'Our Mission' },
  { id: 'importance', text: 'Importance of Sports' },
  { id: 'participation', text: 'Events Participation' },
  { id: 'performance', text: 'Performance Stats' },
  { id: 'support', text: 'Support System' }
]

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <div>
            <Image src={footerLogo} alt='logo' className='bg-transparent' />
            <p>{footerText.p1}</p>
            <address>
              <h4>Contact us</h4>
              <a href={`mailto:${footerText.email}`} className='flex'>
                <Mail />
                {footerText.email}
              </a>
              <a href={`tel:${footerText.phoneDummy}`} className='flex'>
                <Phone />
                {footerText.phoneDummy}
              </a>
            </address>
          </div>
          <nav>
            <ul>
              {links.map(link => (
                <li key={link.id}>
                  <a href={`#${link.id}`}>{link.text}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <Button size='icon' className='rounded-full bg-white'>
              <Facebook color='black' size={20} />
            </Button>
            <Button size='icon' className='rounded-full bg-white'>
              <Instagram color='black' size={20} />
            </Button>
            <Button size='icon' className='rounded-full bg-white'>
              <Twitter color='black' size={20} />
            </Button>
          </div>
        </div>
        <p>All rights reserved@buidachamp.com</p>
      </div>
    </footer>
  )
}

export default Footer
