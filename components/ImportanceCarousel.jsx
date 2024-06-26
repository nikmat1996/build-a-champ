"use client"
import Image from 'next/image'
import * as React from 'react'
import rightArrow from "@/assets/icons/rightArrow.svg"
import leftArrow from "@/assets/icons/leftArrow.svg"
import Autoplay from 'embla-carousel-autoplay'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import Card from './Card'

export function ImportanceCarousel({cardArr = []}) {
  const plugin = React.useRef(
      Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })
  )
  return (
    <Carousel
      className='w-full max-w-sm sm:max-w-none mx-auto'
      opts={{ loop: true,  align: "start"  }}
      plugins={[plugin.current]}
    >
      <CarouselContent className='-ml-5'>
        {cardArr.map((card, index) => (
          <CarouselItem key={index} className='sm:basis-1/2 lg:basis-1/3 pl-5 '>
            <Card data={card} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className= "border-0 h-7 w-7  md:h-14 md:w-14 left-0 md:-left-20" customIcon={<Image src={leftArrow} alt='left icon'/>}/>
      <CarouselNext className= "border-0 h-7 w-7  md:h-14 md:w-14 right-0 md:-right-20" customIcon={<Image src={rightArrow} alt='right icon'/>}/>
    </Carousel>
  )
}
