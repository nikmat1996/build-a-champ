"use client"

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import rightArrow from "@/assets/icons/rightArrow.svg"
import leftArrow from "@/assets/icons/leftArrow.svg"
import { format } from 'date-fns';
import Image from 'next/image';

const CalenderNav = ({ months }) => {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const [count, setCount] = useState(0);
    

    return (
        <div className="flex gap-3 items-center justify-center pb-3 md:pb-5">
            <button className=" w-4 h-4 md:w-9 md:h-9 rounded-full p-0 m-0 border-0 cursor-pointer select-none disabled:cursor-default disabled:opacity-70" disabled={count === 0} onClick={() => handleChangeMonth(-1)}>
                <div className="sr-only">previous month</div>
                <Image src={leftArrow} alt='left icon' className="aspect-square w-4 rounded-full md:w-9 md:h-9"/>
            </button>
            <h2 className="uppercase font-bold text-xs/normal md:text-[25px] md:leading-[38px] select-none">{format(months[count], "MMM yyyy")}</h2>
            <button className="w-4 h-4 md:w-9 md:h-9 rounded-full p-0 m-0 border-0 cursor-pointer select-none disabled:cursor-default disabled:opacity-70" disabled={count === months.length-1} onClick={() => handleChangeMonth(1)}>
                <div className="sr-only">next month</div>
                <Image src={rightArrow} alt='left icon'className="h-4 w-4 rounded-full md:w-9 md:h-9"/>
            </button>
        </div>
    )
}
export default CalenderNav