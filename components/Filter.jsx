"use client"

import React from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Button } from './ui/button';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';


const data = {
  gender: {
    label: 'Gender',
    options: [
      // { value: 'none', label: 'Gender' },
      { value: 'male', label: 'Male' },
      { value: 'female', label: 'Female' },
    ]
  },
  ageRange: {
    label: 'Age',
    options: [
      // { value: 'none', label: 'All' },
      { value: 'under18', label: 'Under 18' },
      { value: '18to24', label: '18 - 24' },
      { value: '25to34', label: '25 - 34' },
      { value: '35to44', label: '35 - 44' },
      { value: '45to54', label: '45 - 54' },
      { value: '55to64', label: '55 - 64' },
      { value: '65plus', label: '65 and over' }
    ]
  },
  sports: {
    label: 'Sports',
    options: [
      // { value: 'none', label: 'All' },
      { value: 'football', label: 'Football' },
      { value: 'basketball', label: 'Basketball' },
      { value: 'soccer', label: 'Soccer' },
      { value: 'tennis', label: 'Tennis' },
      { value: 'swimming', label: 'Swimming' },
      { value: 'running', label: 'Running' },
      { value: 'cycling', label: 'Cycling' },
      { value: 'golf', label: 'Golf' },
      { value: 'hiking', label: 'Hiking' }
    ]
  }
}

const Filter = () => {

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    console.log("handleSubmit", formData)
    console.log(formData.get("gender"))
    const params = new URLSearchParams(searchParams);

    formData.forEach((value, key) => {
      console.log(value, key)
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <section className='pb-5'>
      <form onSubmit={handleSubmit} className='flex flex-col items-center gap-y-[30px] xl:flex-row gap-x-[43px] justify-center'>
        <div className='flex gap-[15px] md:gap-[43px]'>
          <CustomSelect data={data.gender}  name={"gender"} defaultValue={searchParams.get('gender')?.toString()}/>
          <CustomSelect data={data.ageRange}  name={"ageRange"} defaultValue={searchParams.get('ageRange')?.toString()}/>
          <CustomSelect data={data.sports}  name={"sports"} defaultValue={searchParams.get('sports')?.toString()}/>
        </div>
        <Button type={"submit"} className="bg-[#FD8642] px-[65px] py-2.5 leading-normal h-max  md:text-lg hover:bg-[#FD8642] hover:opacity-75">Search</Button>
      </form>
    </section>
  )
}

export default Filter


export function CustomSelect({ data: { label, options }, ...props }) {
  
  return (
    <Select {...props} >
      <SelectTrigger  className='w-[98px] py-2.5 leading-normal h-max text-xs md:text-lg text-gray-800 text-opacity-50 md:w-52'>
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent >
        <SelectGroup className='text-gray-800 text-opacity-50 '>
          {options.map(option => (
            <SelectItem className="text-xs md:text-base cursor-pointer"  value={option.value} key={option.value}>{option.label}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
