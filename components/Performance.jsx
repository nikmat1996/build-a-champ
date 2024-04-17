import Image from "next/image"
import performance_lg from '../assets/images/performance_lg.png'
import performance_sm from '../assets/images/performance_sm.png'
import performance from '../assets/gifs/performance.gif'

const performanceText = {
    h2: "Performance stats",
    p: "Build a Champ's performance statistics provide kids with valuable insights into their athletic performance and help them take their skills to the next level."
}

const Performance = () => {
  return (
    <section className="pt-1.5 md:pt-20 px-5 pb-14 md:pb-28">
      <div className='flex flex-col items-center w-full max-w-[1139px] mx-auto md:flex-row-reverse md:justify-between md:items-start'>
        <Image alt="girl checking stats" src={performance_lg} className='hidden md:block  self-center w-full'/>
        <Image alt="girl checking stats small" src={performance_sm} className='md:hidden'/>
        <div className='w-full max-w-[629px] '>
            <div className='flex flex-row-reverse justify-center items-center md:flex-col md:items-start'>
                <Image alt="graph gif" src={performance} className='w-[43px] h-[43px] md:w-[93px] md:h-[93px]'/>
                <h2 className='text-2xl/9 font-bold pt-[12px] pb-2.5 md:text-[50px] md:leading-[57px] md:pb-[30px] translate-y-1'>{performanceText.h2}</h2>
            </div>
            <p className='text-[15px] leading-5 md:text-xl/10 md:max-w-[480px] mx-auto md:mx-0'>{performanceText.p}</p>
        </div>
      </div>
    </section>
  )
}

export default Performance
