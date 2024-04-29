
import Hero from '@/components/Hero'
import Container from '@/components/Container'
import Mission from '@/components/Mission'
import Importance from '@/components/Importance'
import Participation from '@/components/Participation'
import Filter from '@/components/Filter'
import Calender from '@/components/Calender'
import Performance from '@/components/Performance'
import Support from '@/components/Support'
import Subscribe from '@/components/Subscribe'
import Footer from '@/components/Footer'
import { Suspense, lazy } from 'react';
import { cookies } from 'next/headers'


export default function Home({ searchParams }) {
  cookies()
  return (
    <main className=''>
      <Hero />
      <Container>
          <Mission />
          <Importance />
          <Participation />
          <Filter />
          <Suspense fallback={<div>loading</div>} >
            <Calender sports={searchParams.sports} ageRange={searchParams.ageRange} gender={searchParams.gender}/>
          </Suspense>
          {/* <Calender /> */}
          <Performance />
          <Support />
          <Subscribe />
          <Footer />
      </Container>
    </main>
  )
}
