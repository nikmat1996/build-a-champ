"use client"

import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import {
    add,
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
    startOfToday,
    startOfWeek,
  } from 'date-fns'

let colStartClasses = [
    "",
    "col-start-2",
    "col-start-3",
    "col-start-4",
    "col-start-5",
    "col-start-6",
    "col-start-7",
];

const Calender = ({selectedMonth = "APR", selectedYear = "2024"}) => {
    let today = startOfToday();
    let [selectedDay, setSelectedDay] = useState(today);
    // console.log(currentMonth)
    let propDate = `${selectedMonth}-${selectedYear}`
    console.log(propDate)
    
    let firstDaySelectedMonth = parse(`${selectedMonth}-${selectedYear}`, "MMM-yyyy", new Date())
    console.log(firstDaySelectedMonth)

    let days = eachDayOfInterval({
        // start: startOfWeek(firstDaySelectedMonth),
        start: firstDaySelectedMonth,
        end: endOfMonth(firstDaySelectedMonth),
        // end: endOfWeek(endOfMonth(firstDaySelectedMonth)),
    });

    console.log(selectedDay)

    return (
        <section className="w-full max-w-[1139px] mx-auto px-5 xl:px-0">
            <div className="">
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
                                    // type="div"
                                    // onClick={() => setSelectedDay(day)}
                                    className={twMerge(
                                        //"text-white",
                                        isToday(day) && "text-[#FCA76B]",
                                        // !isToday(day) && isSameMonth(day, firstDaySelectedMonth) && "text-gray-900",
                                        // !isToday(day) && !isSameMonth(day, firstDaySelectedMonth) && "text-gray-400 pointer-events-none",
                                        //isToday(day) && "bg-red-500",
                                        //!isToday(day) && "bg-red-500",
                                        // "hover:bg-gray-200",
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
            </div>
        </section>
    );
};

export default Calender;

