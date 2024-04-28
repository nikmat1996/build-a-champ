import React from 'react'
import Image from 'next/image'
import card from "@/assets/images/cardImg_bg.png"


const Card = ({ data }) => {
  return (
    <div className='w-full bg-white rounded-xl h-full'>
        {/* <Image src={data.img} className='w-full'/> */}
        <div className='w-full max-h-[190px] overflow-hidden rounded-t-xl'>
            <Image src={card} alt='card image' className='w-full scale-110 object-top'/>
        </div>
        <h3 className='text-xs leading-tight font-bold md:text-[15px] md px-4 mb-2 pt-4'>{data.h3}</h3>
        <p className='text-xs leading-tight text-[#84829a] md:text-[15px] px-4 font-light pb-4'>{data.p}</p>
    </div>
  )
}

export default Card
