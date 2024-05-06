import MainMenu from "./Mainmenu"
import Hero_bg_sm from '../assets/bg_images/hero_sm.png'
import heroImg_lg from '../assets/images/heroImg_lg.png'
import heroImg_sm from '../assets/images/heroImg_sm.png'
import Image from "next/image"

const textHero = {
    h1: "Welcome to Build A Champ! ",
    h3: "The premier digital platform for sports development in kids!"
}

const Hero = () => {
  return (
    <section className = "relative w-full overflow-hidden md:h-screen md:max-h-[800px] flex flex-col items-center">
        <div className="absolute -z-10 inset-0">
          <Image src={Hero_bg_sm} alt="background image" className="w-full h-full"/>
        </div>
        <MainMenu />
        <div className="flex relative flex-col items-center justify-center w-full max-w-[1440px] gap-y-3 flex-1 px-5 md:px-0">
          <div className="absolute top-0 -z-10 hidden md:block">
            <Image src={heroImg_lg} alt="kids image" className="hidden md:block w-full "/>
          </div>
          <div className=" md:hidden  max-w-max max-h-max overflow-hidden">
            <Image src={heroImg_sm} alt="kids image" className=" md:hidden w-full -translate-x-4"/>
          </div>
          <div className="flex flex-col items-center gap-y-3 justify-center w-full max-w-[580px] pb-6 md:pb-0 ">
              <h1 className="text-[40px]/tight md:text-5xl lg:text-7xl/tight font-bold  md:max-w-[580px] text-center">{textHero.h1}</h1>
              <h3 className="text-xl md:text-4xl/tight font-medium  tracking-tight  md:max-w-[580px] text-center">{textHero.h3}</h3>
          </div>
        </div>
      </section>
  )
}

export default Hero
