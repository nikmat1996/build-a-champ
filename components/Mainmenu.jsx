'use client'

import Link from 'next/link'
import { links } from './Footer'
import header_logo from '@/assets/icons/header_logo.png'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

const MainMenu = () => {

  return (
    <header className='flex px-1'>
      
      <nav className='flex  flex-1 justify-center py-6 '>
        <ul className='flex w-full max-w-[915px] items-center justify-between  text-center text-[17px] font-normal leading-[20px] text-gray-800 md:text-[21px]  md:leading-[27px]'>
          <li><Image src={header_logo} alt='logo' /></li>
          {
            links.map(link => (
              <li key={link.id} className='hidden md:block'>
                <Link href={`#${link.id}`} className='hover:text-orange-900'>
                  <p>{link.text}</p>
                  <p>{link.text2}</p>
                </Link>
              </li>
            ))}
          
          <li className="ml-auto pr-4 md:ml-0">
            <Link
              href='#subscribe'
              className='rounded border border-gray-800 p-2 hover:border-orange-900 hover:text-orange-900 text-sm md:text-[21px]  md:leading-[27px]'
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
