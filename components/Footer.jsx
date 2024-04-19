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

export const links = [
  { id: 'mission', text: 'Our', text2: "Mission" },
  { id: 'importance', text: 'Importance', text2: "of Sports" },
  { id: 'participation', text: 'Events', text2: "Participation" },
  { id: 'performance', text: 'Performance', text2: "Stats" },
  { id: 'support', text: 'Support', text2: "System"  }
]

const Footer = () => {
  return (
    <footer className='px-5 py-20 pb-10 pt-10 md:pt-0'>
      <div className='w-full max-w-[1139px] mx-auto'>
        <div className='flex flex-col  md:flex-row '>
          <div className='basis-[210px]'>
            <Image src={footerLogo} alt='logo' className='bg-transparent' />
            <p className='text-[13px] leading-normal pb-4 md:pb-11 pt-2.5 md:pt-5 max-w-[210px]'>{footerText.p1}</p>
            <address className='not-italic'>
              <h4 className='text-[13px] leading-normal font-bold'>Contact us</h4>
              <a href={`mailto:${footerText.email}`} className='flex text-[13px] leading-loose items-center gap-2'>
                <Mail size={12}/>
                {footerText.email}
              </a>
              <a href={`tel:${footerText.phoneDummy}`} className='flex text-[13px] leading-loose items-center gap-2'>
                <Phone size={12}/>
                {footerText.phoneDummy}
              </a>
            </address>
          </div>
          <nav className='flex-1  pt-7 lg:px-16 md:pt-6 flex flex-col items-center justify-center'>
            <ul className='text-[13px] w-full flex leading-[17px] md:text-[21px] md:leading-[27px] font-light flex-wrap gap-y-12 '>
              {links.map(link => (
                <li key={link.id} className='w-1/3 shrink-0  '>
                  <a href={`#${link.id}`} className='hover:text-orange-900'><p>{link.text}</p><p>{link.text2}</p></a>
                </li>
              ))}
            </ul>
          </nav>
          <div className='flex gap-7 justify-center pt-14 md:pt-20'>
            <Button size='icon' className='rounded-full bg-white hover:bg-white hover:opacity-75'>
              <Facebook color='black' size={15} />
            </Button>
            <Button size='icon' className='rounded-full bg-white hover:bg-white hover:opacity-75'>
              <Instagram color='black' size={15} />
            </Button>
            <Button size='icon' className='rounded-full bg-white hover:bg-white hover:opacity-75'>
              <Twitter color='black' size={15} />
            </Button>
          </div>
        </div>
        <p className='text-[10px] leading-3 md:text-sm md:leading-[18px] text-center py-4'>All rights reserved@buidachamp.com</p>
      </div>
    </footer>
  )
}

export default Footer
