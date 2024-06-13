import Image from 'next/image'
import performance from '../assets/gifs/performance.gif'
// /Users/nm/Documents/code/proj/build-a-champ/public/PerformanceStat.mp4

const performanceText = {
  h2: 'Performance stats',
  p: "Coming soon to Build A Champ: Track your progress and elevate your game with our real-time performance stats! Hone your skills and see how you stack up against the competition. It's not just about playing—it’s about improving every day and mastering your sport!"
}

const Performance = () => {
  return (
    <section className='px-5 pb-14 pt-1.5 md:pb-28 md:pt-20' id='performance'>
      <div className='mx-auto flex w-full max-w-[1139px] flex-col items-center md:flex-row-reverse md:items-start md:justify-between'>
        {/* <Image
          alt='girl checking stats'
          src={performance_lg}
          className='hidden w-full self-center rounded-[30px] md:block'
        /> */}
        {/* <Image alt="girl checking stats small" src={performance_sm} className='md:hidden'/> */}
        <video className='w-full max-w-xl rounded-3xl' autoPlay loop muted playsInline preload='auto'>
          <source src="/PerformanceStat.mp4" type='video/mp4'  />
          
          Your browser does not support the video tag.
        </video>
        <div className='w-full max-w-[629px] '>
          <div className='flex flex-row-reverse items-center justify-center md:flex-col md:items-start'>
            <Image
              alt='graph gif'
              src={performance}
              className='h-[43px] w-[43px] md:h-[93px] md:w-[93px]'
              unoptimized
            />
            <h2 className='translate-y-1 pb-2.5 pt-[12px] text-2xl/9 font-bold md:pb-[30px] md:text-[50px] md:leading-[57px]'>
              {performanceText.h2}
            </h2>
          </div>
          <p className='mx-auto text-[15px] leading-5 md:mx-0 md:max-w-[480px] md:text-xl/10'>
            {performanceText.p}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Performance
