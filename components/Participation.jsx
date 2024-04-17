import React from 'react'
import Image from 'next/image'
import clockGif from '../assets/gifs/clock.gif'

const participationText = {
  h2: "Events participation",
  p1: "Through Build a Champ, kids have the opportunity to participate in exciting in-person events and competitions, which provide them with the opportunities to learn, grow, and compete, as well as gain valuable experience and make new friends.",
  p2: 'Build a Champ also provides access to training and development events, where kids can receive expert instruction, learn new skills and techniques, and refine their athletic abilities. '
}

const Participation = () => {
  return (
    <section className='px-5 pb-[25px] md:pb-[55px]'>
      <div className='flex items-center justify-center  md:flex-row-reverse md:gap-2 md:pt-16 '>
        <h2 className='text-[25px] font-bold leading-[38px]  md:text-[50px] md:leading-[57px] '>
          {participationText.h2}
        </h2>
        <Image
          alt='clock gif'
          src={clockGif}
          className='h-[43px] w-[43px] md:h-[93px] md:w-[93px]'
        />
      </div>
      <div className='mx-auto space-y-2 pt-0.5 md:pt-3 '>
        <p className=' text-[15px] leading-5 md:hidden text-center'>
          {participationText.p1}
        </p>
        <p className='text-[15px] leading-5 md:hidden text-center'>
          {participationText.p2}
        </p>
        <p className=' w-full max-w-[1139px] text-center text-xl text-black mx-auto hidden md:block'>
          <span className=' w-full max-w-[1139px] text-center text-xl text-black'>
            Through Build a Champ, kids have the opportunity to participate in
            exciting in-person events{' '}
          </span>
          <br />
          <span className=' w-full max-w-[1139px] text-center text-xl text-black'>
            and competitions, which provide them with the opportunities to
            learn, grow,{' '}
          </span>
          <br />
          <span className=' w-full max-w-[1139px] text-center text-xl text-black'>
            and compete, as well as gain valuable experience and make new
            friends.
          </span>
          <br />
          <span className=' w-full max-w-[1139px] text-center text-xl text-black pt-5 block'>
            Build a Champ also provides access to training and development
            events, where kids can{' '}
          </span>
          {/* <br /> */}
          <span className=' w-full max-w-[1139px] text-center text-xl text-black'>
            receive expert instruction, learn new skills and techniques, and
            refine their athletic abilities.
          </span>
        </p>
      </div>
    </section>
  )
}

export default Participation
