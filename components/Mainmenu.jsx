'use client'

import { useMediaQuery } from '@/hooks/use-media-query'
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from './ui/drawer'
import { MenuIcon } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const MainMenu = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const router = useRouter()
  const handleClick = () => {
    console.log('clicked')
    router.push('/dashboard')
  }

  return isDesktop ? (
    <nav className='p-8 py-10 bg-transparent'>Desktop <br/> Second</nav>
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
