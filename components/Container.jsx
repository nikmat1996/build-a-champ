import React from 'react'
import Image from 'next/image'
import container_bg from '../assets/bg_images/container.png'
// /Users/nm/Documents/code/proj/build-a-champ/assets/bg_images/container.png

const Container = ({ children }) => {
  return (
    <div className = "relative w-full overflow-hidden">
      <div className="absolute -z-10 inset-0">
          <Image src={container_bg} alt='background image' className="w-full h-full"/>
        </div>
        {children}
    </div>
  )
}

export default Container
