'use client'

import React, { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import rightArrow from '@/assets/icons/rightArrow.svg'
import leftArrow from '@/assets/icons/leftArrow.svg'
import {
  add,
  addMonths,
  eachDayOfInterval,
  eachMonthOfInterval,
  endOfMonth,
  format,
  getDay,
  isToday,
  startOfMonth,
  startOfToday
} from 'date-fns'
import Image from 'next/image'
import { getData } from '@/app/_actions'

let colStartClasses = [
  '',
  'col-start-2',
  'col-start-3',
  'col-start-4',
  'col-start-5',
  'col-start-6',
  'col-start-7'
]

const Calender = props => {
  const { sports, ageRange, gender } = props
  let today = startOfToday()
  //    const { data } =  await getData(sports, ageRange, gender)
  // const [today, setToday] = useState(tod);

  let [count, setCount] = useState(0)
  // let count = 0;

  console.log(sports, ageRange, gender)
  let months = eachMonthOfInterval({
    start: today,
    end: addMonths(today, 2)
  })

  const firstDaySelectedMonth = startOfMonth(months[count])

  let days = eachDayOfInterval({
    start: firstDaySelectedMonth,
    end: endOfMonth(firstDaySelectedMonth)
  })

  console.log('current Time', new Date(Date.now()).toLocaleString())

  const handleChangeMonth = delta => {
    setCount(init => {
      if (delta === -1 && init === 0) return init
      if (delta === 1 && init === months.length - 1) return init
      return init + delta
    })
  }

  useEffect(() => {
    const params = new URLSearchParams({sports, ageRange, gender });
    console.log(params.toString())
    const url = '' + '?' + params.toString()
    // fetch(url, )
  }, [])

  return (
    <section className='mx-auto w-full max-w-[1139px] px-5 pb-16 pt-2.5 md:pt-9 xl:px-0'>
      <div className='flex items-center justify-center gap-3 pb-3 md:pb-5'>
        <button
          className=' m-0 h-4 w-4 cursor-pointer select-none rounded-full border-0 p-0 disabled:cursor-default disabled:opacity-70 md:h-9 md:w-9'
          disabled={count === 0}
          onClick={() => handleChangeMonth(-1)}
        >
          <div className='sr-only'>previous month</div>
          <Image
            src={leftArrow}
            alt='left icon'
            className='aspect-square w-4 rounded-full md:h-9 md:w-9'
          />
        </button>
        <h2 className='select-none text-xs/normal font-bold uppercase md:text-[25px] md:leading-[38px]'>
          {format(months[count], 'MMMM	yyyy')}
        </h2>
        <button
          className='m-0 h-4 w-4 cursor-pointer select-none rounded-full border-0 p-0 disabled:cursor-default disabled:opacity-70 md:h-9 md:w-9'
          disabled={count === months.length - 1}
          onClick={() => handleChangeMonth(1)}
        >
          <div className='sr-only'>next month</div>
          <Image
            src={rightArrow}
            alt='left icon'
            className='h-4 w-4 rounded-full md:h-9 md:w-9'
          />
        </button>
      </div>
      <div className=''>
        <div className='grid grid-cols-7 text-center text-xs leading-6 '>
          <div className='bg-[#FCA76B] py-1.5 text-center text-[6.5px] font-bold leading-[10px] md:py-3 md:text-[17px] md:leading-[36px]'>
            SUNDAY
          </div>
          <div className='bg-[#97E1E2] py-1.5 text-center text-[6.5px] font-bold leading-[10px] md:py-3 md:text-[17px] md:leading-[36px]'>
            MONDAY
          </div>
          <div className='bg-[#97E1E2] py-1.5 text-center text-[6.5px] font-bold leading-[10px] md:py-3 md:text-[17px] md:leading-[36px]'>
            TUESDAY
          </div>
          <div className='bg-[#97E1E2] py-1.5 text-center text-[6.5px] font-bold leading-[10px] md:py-3 md:text-[17px] md:leading-[36px]'>
            WEDNESDAY
          </div>
          <div className='bg-[#97E1E2] py-1.5 text-center text-[6.5px] font-bold leading-[10px] md:py-3 md:text-[17px] md:leading-[36px]'>
            THURSDAY
          </div>
          <div className='bg-[#97E1E2] py-1.5 text-center text-[6.5px] font-bold leading-[10px] md:py-3 md:text-[17px] md:leading-[36px]'>
            FRIDAY
          </div>
          <div className='bg-[#FCA76B] py-1.5 text-center text-[6.5px] font-bold leading-[10px] md:py-3 md:text-[17px] md:leading-[36px]'>
            SATURDAY
          </div>
        </div>
        <div className='grid grid-cols-7  gap-0.5 bg-white p-0.5 text-sm md:gap-1.5 md:p-1.5'>
          {days.map((day, dayIdx) => (
            <div
              key={day.toString()}
              className={twMerge(
                dayIdx === 0 && colStartClasses[getDay(day)],
                'h-10 bg-zinc-100 font-bold md:h-[103px]'
              )}
            >
              <div
                // onClick={() => setSelectedDay(day)}
                className={twMerge(
                  isToday(day) && 'text-[#FCA76B]',
                  'text-center text-[6.5px]  leading-[10px] md:text-[17px] md:leading-[36px] '
                )}
              >
                <time dateTime={format(day, 'yyyy-MM-dd')}>
                  {format(day, 'd')}
                </time>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Calender
