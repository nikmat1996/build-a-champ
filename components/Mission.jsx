import React from 'react'
import Image from 'next/image'
import mission_lg from '../assets/images/mission_lg.png'
import mission_img from '../assets/images/mission.jpeg'
import mission_sm from '../assets/images/mission_sm.png'
import mission from '../assets/gifs/mission.gif'

const missionText = {
    h2: "Our Mission",
    p: "Our mission is to provide young athletes with the tools and resources they need to achieve their athletic goals and reach their full potential. Whether you're a beginner looking to try a new sport or an experienced player looking to take your game to the next level, we will be the go to platform for everything you need to succeed."
}

const Mission = () => {
  return (
    <section className='px-[15px] pt-[32px] md:pt-[104px] lg:px-0' id='mission'>
      <div className='flex flex-col items-center w-full max-w-[1139px] mx-auto md:flex-row-reverse gap-x-10 md:justify-between md:items-start'>
        <Image src={mission_img} alt='boy with ball large' className='hidden md:block translate-y-[19px] self-center md:rounded-[30px] max-w-xl'/>
        {/* <Image src={mission_sm} alt='boy with ball small' className='md:hidden'/> */}
        <div className='w-full max-w-[629px]  pt-1 md:pt-0'>
            <div className='flex flex-row-reverse justify-center items-center md:flex-col md:items-start'>
                <Image src={mission} alt='gif image' className='w-[43px] h-[43px] md:w-[150px] md:h-[150px] md:-translate-x-4' unoptimized/>
                <h2 className='text-2xl/9 font-bold py-2.5 md:text-[50px] md:leading-[57px] md:pb-[30px] '>{missionText.h2}</h2>
            </div>
            <p className='text-[15px] leading-5 md:text-xl/10'>{missionText.p}</p>
        </div>
      </div>
    </section>
  )
}

export default Mission
