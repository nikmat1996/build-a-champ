import support_lg from '../assets/images/support_lg.png'
import support from '../assets/gifs/support.gif'
import support_bg from '../assets/bg_images/support_bg.png'
import Image from 'next/image'

const supportText = {
    h2: "A Champion needs a champion support system",
    p: "Build a Champ is designed to provide a comprehensive and integrated solution for parents, schools, and other stakeholders to work together to support the athletic development of kids, ensuring that they are highly motivated and engaged at every stage of their journey."
}

const Support = () => {
  return (
    <section className='relative px-5'>
      <div className='absolute inset-0  -z-10'>
        <Image alt='bg image' src={support_bg} className='w-full h-full' />
      </div>
      <div className='flex flex-col items-center w-full max-w-[1139px] mx-auto md:flex-row  md:items-start py-12 md:py-20'>
        <Image alt='kids hug' src={support_lg} className='hidden md:block  self-center w-full scale-[2.3] translate-x-24 -translate-y-[98px]  max-w-[400px]'/>
        <div className='w-full max-w-[646px] text-white'>
            <div className='flex flex-row-reverse  justify-center items-center '>
                <Image alt='medal gif' src={support} className='w-[43px] h-[43px] md:w-[93px] md:h-[93px] '/>
                <h2 className='text-2xl/9  font-bold  pb-4 md:pb-7 md:text-[40px] md:leading-normal '>{supportText.h2}</h2>
            </div>
            <p className='text-[15px] leading-5 md:text-xl/10 md:max-w-[646px] mx-auto md:mx-0'>{supportText.p}</p>
        </div>
      </div>
      
    </section>
  )
}

export default Support
