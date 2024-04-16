import React from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { options } from 'prettier-plugin-tailwindcss'
import { Button } from './ui/button'

const data = {
  gender: {
    label: 'Gender',
    options: [
      { value: 'male', label: 'Male' },
      { value: 'female', label: 'Female' },
      { value: 'other', label: 'Other' }
    ]
  },
  ageRange: {
    label: 'Age',
    options: [
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
  return (
    <section className='flex flex-col items-center gap-y-[30px] xl:flex-row gap-x-[43px] justify-center pb-5'>
      <div className='flex gap-[15px] md:gap-[43px]'>
        <CustomSelect data={data.gender} />
        <CustomSelect data={data.ageRange} />
        <CustomSelect data={data.sports} />
      </div>
      <Button className="bg-[#FD8642] px-[65px] py-2.5 leading-normal h-max  md:text-lg hover:bg-[#FD8642] hover:opacity-75">Search</Button>
    </section>
  )
}

export default Filter

export function CustomSelect({ data: { label, options } }) {
  console.log(label)
  return (
    
    <Select>
      <SelectTrigger className='w-[98px] py-2.5 leading-normal h-max text-xs md:text-lg text-gray-800 text-opacity-50 md:w-52'>
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className='text-gray-800 text-opacity-50 '>
          {options.map(option => (
            <CustomSelectItem key={option.value} value={option.value}>
            {option.label}
          </CustomSelectItem>
         
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

const CustomSelectItem = ({ children, ...props }) => (
  <SelectItem className="text-xs md:text-sm" {...props}>
    {children}
  </SelectItem>
);