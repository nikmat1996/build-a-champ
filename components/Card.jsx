import React from 'react'
import Image from 'next/image'
import card from "@/assets/images/cardImg_bg.png"
import { twMerge } from 'tailwind-merge'


const Card = ({ data, defaultStyle }) => {
  return (
    <div className='w-full bg-white rounded-xl h-full'>
        <div className='w-full max-h-[240px] overflow-hidden rounded-t-xl'>
            <Image src={data.img} alt='card image' className={twMerge("w-full", defaultStyle && "scale-150 translate-y-16")} />
        </div>
        <h3 className='text-xs leading-tight font-bold md:text-[15px] md px-4 mb-2 pt-4'>{data.h3}</h3>
        <p className='text-xs leading-tight text-[#84829a] md:text-[15px] px-4 font-light pb-4'>{data.p}</p>
    </div>
  )
}

export default Card
