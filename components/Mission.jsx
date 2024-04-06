import React from 'react'
import Image from 'next/image'
import mission_lg from '../assets/images/mission_lg.png'
import mission_sm from '../assets/images/mission_sm.png'
import mission from '../assets/gifs/mission.gif'

const missionText = {
    h2: "Our Mission",
    p: "Our mission is to provide young athletes with the tools and resources they need to achieve their athletic goals and reach their full potential. Whether you're a beginner looking to try a new sport or an experienced player looking to take your game to the next level, we will be the go to platform for everything you need to succeed."
}

const Mission = () => {
  return (
    <section className='px-[15px] pt-[72px] md:pt-[104px] lg:px-0'>
      <div className='flex flex-col items-center w-full max-w-[1139px] mx-auto md:flex-row-reverse md:justify-between md:items-start'>
        <Image src={mission_lg} className='hidden md:block translate-y-[19px]'/>
        <Image src={mission_sm} className='md:hidden'/>
        <div className='w-full max-w-[629px]'>
            <div className='flex flex-row-reverse justify-center items-center md:flex-col md:items-start'>
                <Image src={mission} className='w-[43px] h-[43px] md:w-[93px] md:h-[93px]'/>
                <h2 className='text-2xl/9 font-bold pt-[12px] pb-2.5 md:text-[50px] md:leading-[57px] md:pb-[30px] translate-y-1'>{missionText.h2}</h2>
            </div>
            <p className='text-[15px] leading-5 md:text-xl/10'>{missionText.p}</p>
        </div>
      </div>
    </section>
  )
}

export default Mission
