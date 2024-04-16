"use client"

import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import rightArrow from "@/assets/icons/rightArrow.svg"
import leftArrow from "@/assets/icons/leftArrow.svg"
import {
    add,
    addMonths,
    eachDayOfInterval,
    eachMonthOfInterval,
    endOfMonth,
    endOfWeek,
    format,
    getDay,
    isEqual,
    isSameDay,
    isSameMonth,
    isToday,
    parse,
    parseISO,
    startOfMonth,
    startOfToday,
    startOfWeek,
  } from 'date-fns'
import { Button } from "./ui/button";
import Image from "next/image";

let colStartClasses = [
    "",
    "col-start-2",
    "col-start-3",
    "col-start-4",
    "col-start-5",
    "col-start-6",
    "col-start-7",
];

const Calender = () => {
    let today = startOfToday();
    let [selectedDay, setSelectedDay] = useState(today);

    const firstDaySelectedMonth = startOfMonth(selectedDay)

    let days = eachDayOfInterval({
        start: firstDaySelectedMonth,
        end: endOfMonth(firstDaySelectedMonth),
    });

    console.log(selectedDay)

    const handleChangeMonth = (delta) => {
        const result = addMonths(firstDaySelectedMonth, delta);
        setSelectedDay(result)
    }

    return (
        <section className="w-full max-w-[1139px] mx-auto px-5 xl:px-0">
            <div className="flex gap-3 items-center justify-center pb-3 md:pb-5">
                <button className=" w-4 h-4 md:w-9 md:h-9 rounded-full p-0 m-0 border-0 " onClick={() => handleChangeMonth(-1)}>
                    <div className="sr-only">previous month</div>
                    <Image src={leftArrow} alt='left icon' className="aspect-square w-4 rounded-full md:w-9 md:h-9"/>
                </button>
                <h2 className="uppercase font-bold text-xs/normal md:text-[25px] leading-[38px]">{format(selectedDay, "MMMM	yyyy")}</h2>
                <button className="w-4 h-4 md:w-9 md:h-9 rounded-full p-0 m-0 border-0 " onClick={() => handleChangeMonth(1)}>
                    <div className="sr-only">next month</div>
                    <Image src={rightArrow} alt='left icon'className="h-4 w-4 rounded-full md:w-9 md:h-9"/>
                </button>
            </div>
            <div className="">
                <div className="grid grid-cols-7 text-xs leading-6 text-center ">
                    <div className="font-bold bg-[#FCA76B] text-[6.5px] leading-[10px] py-1.5 text-center md:text-[17px] md:leading-[36px] md:py-3">SUNDAY</div>
                    <div className="font-bold bg-[#97E1E2] text-[6.5px] leading-[10px] py-1.5 text-center md:text-[17px] md:leading-[36px] md:py-3">MONDAY</div>
                    <div className="font-bold bg-[#97E1E2] text-[6.5px] leading-[10px] py-1.5 text-center md:text-[17px] md:leading-[36px] md:py-3">TUESDAY</div>
                    <div className="font-bold bg-[#97E1E2] text-[6.5px] leading-[10px] py-1.5 text-center md:text-[17px] md:leading-[36px] md:py-3">WEDNESDAY</div>
                    <div className="font-bold bg-[#97E1E2] text-[6.5px] leading-[10px] py-1.5 text-center md:text-[17px] md:leading-[36px] md:py-3">THURSDAY</div>
                    <div className="font-bold bg-[#97E1E2] text-[6.5px] leading-[10px] py-1.5 text-center md:text-[17px] md:leading-[36px] md:py-3">FRIDAY</div>
                    <div className="font-bold bg-[#FCA76B] text-[6.5px] leading-[10px] py-1.5 text-center md:text-[17px] md:leading-[36px] md:py-3">SATURDAY</div>

                </div>
                <div className="grid grid-cols-7  text-sm bg-white p-0.5 md:p-1.5 gap-0.5 md:gap-1.5">
                    {days.map((day, dayIdx) => (
                        <div
                            key={day.toString()}
                            className={twMerge(
                                dayIdx === 0 && colStartClasses[getDay(day)],
                                "bg-zinc-100 h-10 md:h-[103px] font-bold"
                            )}
                        >
                            <div
                                // onClick={() => setSelectedDay(day)}
                                className={twMerge(
                                    isToday(day) && "text-[#FCA76B]",
                                    "text-[6.5px] leading-[10px]  text-center md:text-[17px] md:leading-[36px] "
                                )}
                            >
                                <time dateTime={format(day, "yyyy-MM-dd")}>
                                    {format(day, "d")}
                                </time>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Calender;

