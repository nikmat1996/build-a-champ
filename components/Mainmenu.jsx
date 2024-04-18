'use client'

import { useMediaQuery } from '@/hooks/use-media-query'
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from './ui/drawer'
import { MenuIcon } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { links } from './Footer'
import footerLogo from '@/assets/icons/footerLogo.png'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import { useState } from 'react'

const MainMenu = () => {

  const isDesktop = useMediaQuery('(min-width: 768px)')
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false);


  console.log(isDesktop)

  const handleClick = (id) => {
    console.log('clicked')
    setIsOpen(false)
    setTimeout(() => {
      router.push(`#${id}`)

    }, 350)
  }

  return (
    <header className='flex px-1'>
      {!isDesktop && <div className=' flex items-center pl-4'>
        {/* <Image src={footerLogo} alt='logo' className='bg-transparent' /> */}
         
          <Drawer direction='left'  open={isOpen} onOpenChange={setIsOpen}>
            <DrawerTrigger>
              <MenuIcon />
            </DrawerTrigger>
            <DrawerContent className='right-0 top-0 mt-0 h-full w-screen max-w-80 rounded-l-none rounded-r-2xl'>
              
              {/* <DrawerClose onClick={handleClick}>
                <p>hello</p>
              </DrawerClose> */}
             

                <div className='p-10 text-orange-300 space-y-5'>
                  {links.map(link => <button id={link.id} onClick={() => handleClick(link.id)}>{link.text + " " + link.text2}</button>)}
                  
                </div>
            </DrawerContent>
          </Drawer>
        
      </div>}
      <nav className='flex  flex-1 justify-center py-6 '>
        <ul className='flex w-full max-w-[915px] items-center justify-between  text-center text-[17px] font-normal leading-[20px] text-gray-800 md:text-[21px]  md:leading-[27px]'>
          
          {isDesktop &&
            links.map(link => (
              <li key={link.id} className=''>
                <a href={`#${link.id}`} className='hover:text-orange-900'>
                  <p>{link.text}</p>
                  <p>{link.text2}</p>
                </a>
              </li>
            ))}
          
          <li className={twMerge("", !isDesktop && "ml-auto pr-4")}>
            <a
              href='#subscribe'
              className='rounded border border-gray-800 p-2 hover:border-orange-900 hover:text-orange-900 text-sm md:text-[21px]  md:leading-[27px]'
            >
              Subscribe
            </a>
          </li>

        </ul>
      </nav>
    </header>
  )

  return

  isDesktop ? (
    <nav className='bg-transparent p-8 py-10'>
      Desktop <br /> Second
    </nav>
  ) : (
    <Drawer direction='left'>
      <DrawerTrigger>
        <MenuIcon />
      </DrawerTrigger>
      <DrawerContent className='right-0 top-0 mt-0 h-full w-screen max-w-80 rounded-l-none rounded-r-2xl'>
        Content Nav
        <DrawerClose onClick={handleClick}>
          <p>hello</p>
        </DrawerClose>
      </DrawerContent>
    </Drawer>
  )
}

export default MainMenu
