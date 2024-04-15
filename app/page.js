
import Hero from '@/components/Hero'
import Container from '@/components/Container'
import Mission from '@/components/Mission'
import Importance from '@/components/Importance'
import Participation from '@/components/Participation'
import Filter from '@/components/Filter'
import Calender from '@/components/Calender'
// import { Calendar } from 'lucide-react'

export default function Home() {
  return (
    <main className=''>
      <Hero />
      
      <Container>
          <Mission />
          <Importance />
          <Participation />
          <Filter />
          <Calender />
      </Container>
      
      
    </main>
  )
}
