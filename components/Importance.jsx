import React from 'react'

const importanceText = {
    h2: "Importance of sports",
    cards: [
        {
            h3: "Mental Resilience: How Sports Foster Perseverance and Emotional Well-Being",
            p: "Sports also play a significant role in mental health, providing an outlet for stress relief and promoting emotional well-being. By engaging in physical activity, kids release endorphins, elevating mood and reducing feelings of anxiety and depression. Furthermore, sports teach resilience and perseverance, as athletes learn to overcome challenges, setbacks, and failures with determination and grit."
        }
    ]
}

const Importance = () => {
  return (
    <section className='px-[15px] pt-[44px] lg:px-0'>
      <h2 className='text-2xl/9 font-bold pt-[12px] pb-2.5 md:text-[50px] md:leading-[57px] md:pb-[30px]'></h2>
    </section>
  )
}

export default Importance
