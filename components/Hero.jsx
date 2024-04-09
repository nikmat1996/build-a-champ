import MainMenu from "./Mainmenu"
import Hero_bg from '../assets/bg_images/heroOrg_bg.png'
import Hero_img from '../assets/images/hero_img.png'
import Image from "next/image"

const textHero = {
    h1: "welcome to build a champ",
    h3: "The premier digital platform for sports development in kids!"
}

const Hero = () => {
  return (
    <section className = "relative w-full overflow-hidden">
        <div className="absolute -z-10 inset-0">
          <Image src={Hero_bg} className="w-full h-full"/>
        </div>
        <MainMenu />
        <div className="flex flex-col md:flex-row-reverse w-full gap-y-6  ">
            <Image src={Hero_img} className="w-full md:w-[885px] "/>
            <div className="flex flex-col items-center gap-y-3 justify-center sm:translate-x-[25%] w-full max-w-[555px] pb-6 md:pb-0 ">
                <h1 className="text-[40px]/tight md:text-5xl lg:text-7xl/tight font-bold capitalize max-w-[317px] md:max-w-[555px] ">{textHero.h1}</h1>
                <h3 className="text-xl md:text-4xl/tight font-medium  tracking-tight max-w-[317px] md:max-w-[555px]">{textHero.h3}</h3>
            </div>
        </div>
      </section>
  )
}

export default Hero
