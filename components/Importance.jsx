import React from 'react'
import Image from 'next/image'
import importance from '../assets/gifs/importance.gif'
import cardImg from '../assets/images/card.png'
import { ImportanceCarousel } from './ImportanceCarousel'
// /Users/nm/Documents/code/proj/build-a-champ/assets/images/card.png

const importanceText = {
  h2: 'Importance of sports',
  cards: [
    {
      h3: 'Mental Resilience: How Sports Foster Perseverance and Emotional Well-Being',
      p: 'Sports also play a significant role in mental health, providing an outlet for stress relief and promoting emotional well-being. By engaging in physical activity, kids release endorphins, elevating mood and reducing feelings of anxiety and depression. Furthermore, sports teach resilience and perseverance, as athletes learn to overcome challenges, setbacks, and failures with determination and grit.',
      img: cardImg
    },
    {
      h3: 'Mental Resilience: How Sports Foster Perseverance and Emotional Well-Being',
      p: 'Sports also play a significant role in mental health, providing an outlet for stress relief and promoting emotional well-being. By engaging in physical activity, kids release endorphins, elevating mood and reducing feelings of anxiety and depression. Furthermore, sports teach resilience and perseverance, as athletes learn to overcome challenges, setbacks, and failures with determination and grit.',
      img: cardImg
    },
    {
      h3: 'Mental Resilience: How Sports Foster Perseverance and Emotional Well-Being',
      p: 'Sports also play a significant role in mental health, providing an outlet for stress relief and promoting emotional well-being. By engaging in physical activity, kids release endorphins, elevating mood and reducing feelings of anxiety and depression. Furthermore, sports teach resilience and perseverance, as athletes learn to overcome challenges, setbacks, and failures with determination and grit.',
      img: cardImg
    },
    {
      h3: 'Mental Resilience: How Sports Foster Perseverance and Emotional Well-Being',
      p: 'Sports also play a significant role in mental health, providing an outlet for stress relief and promoting emotional well-being. By engaging in physical activity, kids release endorphins, elevating mood and reducing feelings of anxiety and depression. Furthermore, sports teach resilience and perseverance, as athletes learn to overcome challenges, setbacks, and failures with determination and grit.',
      img: cardImg
    },
    {
      h3: 'Mental Resilience: How Sports Foster Perseverance and Emotional Well-Being',
      p: 'Sports also play a significant role in mental health, providing an outlet for stress relief and promoting emotional well-being. By engaging in physical activity, kids release endorphins, elevating mood and reducing feelings of anxiety and depression. Furthermore, sports teach resilience and perseverance, as athletes learn to overcome challenges, setbacks, and failures with determination and grit.',
      img: cardImg
    }
  ]
}

const Importance = () => {
  return (
    <section className='px-[15px]  py-[44px] md:pt-[130px] mt-[19px] lg:px-0'>
      <div className='mb-7 flex items-center justify-center md:mb-14'>
        <h2 className='text-[25px] font-bold leading-[38px]  md:text-[50px] md:leading-[57px] '>
          {importanceText.h2}
        </h2>
        <Image
          alt='gif image'
          src={importance}
          className='h-[43px] w-[43px] rotate-90 md:h-[93px] md:w-[93px]'
        />
      </div>
      <div className='mx-auto w-full max-w-[1303px]  px-0 md:px-20'>
        <ImportanceCarousel cardArr={importanceText.cards} />
      </div>
      {/* after carousal */}
    </section>
  )
}

export default Importance
