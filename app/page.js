import MainMenu from '@/components/Mainmenu'
import Image from 'next/image'
import Hero_bg from '../assets/bg_images/hero_bg.png'
import Hero from '@/components/Hero'
import Container from '@/components/Container'
import Mission from '@/components/Mission'
import Importance from '@/components/Importance'

export default function Home() {
  return (
    <main className=''>
      <Hero />
      
      <Container>
          <Mission />
          <Importance />
      </Container>
      
      
    </main>
  )
}
