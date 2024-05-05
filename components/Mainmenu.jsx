'use client'

import Link from 'next/link'
import { links } from './Footer'
import header_logo from '@/assets/icons/header_logo.png'
import headerLogo_sm from '@/assets/icons/headerLogo_sm.png'
import Image from 'next/image'

const MainMenu = () => {

  return (
    <header className=' px-1 w-full max-w-[1440px]'>
      
      <nav className=' pt-6 '>
        <ul className='flex w-full max-w-[1139px] mx-auto items-center justify-center   text-center text-[17px] font-normal leading-[20px] text-gray-800'>
          <li><Image src={headerLogo_sm} alt='logo' className='pl-4 md:hidden '/></li>
          <li className='mr-auto pl-4 shrink-0'><Image src={header_logo} alt='logo' className='hidden md:block '/></li>
          {
            links.map(link => (
              <li key={link.id} className='hidden md:block w-full max-w-36'>
                <Link href={`#${link.id}`} className='hover:text-orange-900'>
                  <p>{link.text}</p>
                  <p>{link.text2}</p>
                </Link>
              </li>
            ))}
          
          <li className="ml-auto px-4 md:ml-0">
            <Link
              href='#subscribe'
              className='rounded border border-gray-800 p-2 hover:border-orange-900 hover:text-orange-900 text-sm md:text-[17px]  md:leading-[20px]'
            >
              Subscribe
            </Link>
          </li>

        </ul>
      </nav>
    </header>
  )

}

export default MainMenu
